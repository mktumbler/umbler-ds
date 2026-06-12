/**
 * pre-commit-check — guarda mínima no momento do commit.
 *
 * Filosofia: bloquear apenas regressões CERTAS (erro de tipo, hand-roll
 * novo). Arquivos gerados (registry/, llms.txt, UMBLER.md) NÃO são
 * commitados — são regenerados a cada build/dev via `build:artifacts`,
 * então dessincronia é impossível e não precisa de check aqui.
 *
 *   • BLOQUEIA
 *     - tsc --noEmit falha
 *     - audit-antipatterns detecta hand-roll novo em arquivo staged
 *
 *   • WARNING (amarelo, não bloqueia)
 *     - check-component-sync reportou gap estrutural
 *     - componente alterado sem data/changelog.json staged
 *
 * Saída: exit 0 se OK, exit 1 se algo bloqueante falhar.
 */

import { execSync } from 'node:child_process';

const ansi = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  red:    '\x1b[31m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
};
const c = (color, str) => `${ansi[color]}${str}${ansi.reset}`;

// ── 1. Coletar arquivos staged ──────────────────────────────────────────────

let staged = [];
try {
  staged = execSync('git diff --cached --name-only --diff-filter=ACMR', {
    encoding: 'utf-8',
  })
    .split('\n')
    .filter(Boolean);
} catch {
  // sem repo / sem index — nada a fazer
  process.exit(0);
}

if (staged.length === 0) process.exit(0);

const hasComponentChange = staged.some(
  (f) => f.startsWith('components/ui/') || f === 'scripts/registry.manifest.mjs',
);
const hasChangelog  = staged.includes('data/changelog.json');
const hasTsxStaged  = staged.some((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

let blocked = false;

// ── 2. Sync estrutural (warning, se mexeu em componente) ───────────────────

if (hasComponentChange) {
  console.log(c('cyan', '\n→ pre-commit: verificando sincronia de componentes'));
  try {
    execSync('node scripts/check-component-sync.mjs --no-strict', { stdio: 'inherit' });
  } catch {
    // --no-strict sempre exit 0, mas captura erros de runtime
  }
}

// ── 3. Changelog (warning) ─────────────────────────────────────────────────

if (hasComponentChange && !hasChangelog) {
  console.log(
    c('yellow', '\n! componente alterado mas data/changelog.json não está staged.'),
  );
  console.log(c('dim', '  considere adicionar uma entrada antes do commit.'));
}

// ── 4. tsc (bloqueia) ──────────────────────────────────────────────────────

if (hasTsxStaged) {
  console.log(c('cyan', '\n→ pre-commit: verificando tipos (tsc --noEmit)'));
  try {
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
  } catch {
    console.log(c('red', '\n✗ commit bloqueado: erros de tipo acima.'));
    blocked = true;
  }
}

// ── 5. Anti-patterns (BLOQUEIA novos hand-rolls em arquivos staged) ────────
//
// Auto-consistência do DS: a doc não pode reimplementar à mão o que o próprio
// DS oferece. Roda em strict mode SÓ se há .tsx/.mdx staged — assim dívida
// pré-existente em arquivos não tocados nunca trava o commit, mas qualquer
// novo hand-roll bloqueia.

if (hasTsxStaged || staged.some((f) => f.endsWith('.mdx'))) {
  console.log(c('cyan', '\n→ pre-commit: audit-antipatterns (hand-rolls vs DS)'));
  try {
    execSync('node scripts/audit-antipatterns.mjs --strict', { stdio: 'inherit' });
  } catch {
    console.log(c('red', '\n✗ commit bloqueado: hand-rolls detectados. Importe o componente do DS, ou marque a linha com `// audit-ignore: <rule-id>` se for caso pedagógico.'));
    blocked = true;
  }
}

if (blocked) process.exit(1);

console.log(c('green', '\n✓ pre-commit OK\n'));
process.exit(0);
