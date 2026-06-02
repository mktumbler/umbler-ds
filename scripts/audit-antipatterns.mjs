/**
 * audit-antipatterns — detecta padrões hand-rolled que duplicam componentes do DS.
 *
 * Filosofia: o DS é fonte E consumidor (a doc usa componentes). Sem guarda,
 * é fácil reescrever um `<span className="rounded px-2 ...">` em vez de
 * importar `<Badge shape="tag">`. Esse script catch essas regressões.
 *
 * Regras detectam o padrão *e* o contraste com o que o DS oferece:
 *   - badge-like   → <Badge variant=… shape="pill" | "tag">
 *   - eyebrow      → className="eyebrow"
 *   - button-like  → <Button variant=…>
 *   - alert-like   → <Alert variant=…>
 *
 * Fora de escopo (whitelist):
 *   - components/ui/**           — o próprio DS
 *   - components/ui/*-variants.* — definições de variantes
 *   - components/demos/**?       — não, demos TAMBÉM devem usar o DS
 *   - node_modules, .next, public/r, out, dist
 *
 * Saída:
 *   • exit 0 + lista amarela em modo default (avisa, não bloqueia)
 *   • exit 1 se rodado com --strict (use no CI ou pre-commit estrito)
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, sep } from 'node:path';

const ROOT = process.cwd();
const STRICT = process.argv.includes('--strict');

const ansi = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  red:    '\x1b[31m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  gray:   '\x1b[90m',
};
const c = (color, str) => `${ansi[color]}${str}${ansi.reset}`;

// ── Escopo de varredura ─────────────────────────────────────────────────────

const INCLUDE_DIRS = [
  'components/docs',
  'components/demos',
  'components/email',
  'content/docs',
  'app',
  'mdx-components.tsx',
];

const EXCLUDE_DIRS = new Set([
  'node_modules',
  '.next',
  'out',
  'dist',
  '.git',
  'public',
]);

const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.mdx'];

// ── Regras ──────────────────────────────────────────────────────────────────

const RULES = [
  {
    id: 'badge-hand-roll',
    label: 'badge-like span — use <Badge variant=… shape="pill" | "tag">',
    // <span … rounded[-full|-md]? … bg-(brand|success|warning|error)-(100|500)…
    pattern: /<span\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\brounded(?:-full|-md|-lg)?\b[^`"'}]*\bbg-(brand|success|warning|error|info)-(?:100|500)(?:\s|\/|\b)/g,
    // Ignora se tem fixed dimensions pequenas (w-N h-N onde N <= 8) — é container de ícone, não badge.
    skipIfLineMatches: /\bw-[1-8]\b[^"`'}]*\bh-[1-8]\b|\bh-[1-8]\b[^"`'}]*\bw-[1-8]\b/,
  },
  {
    id: 'eyebrow-hand-roll',
    label: 'eyebrow hand-roll — use className="eyebrow" (já existe em tokens.css)',
    // uppercase + tracking-(wide|widest|[0.x em]) com qualquer cor própria, fora do utilitário .eyebrow
    pattern: /\bclassName\s*=\s*[`"'{][^`"'}]*\buppercase\b[^`"'}]*\btracking-(?:wide|widest|\[[^\]]+\])\b/g,
    // skip se a linha já tem "eyebrow"
    skipIfLineContains: ['eyebrow'],
  },
  {
    id: 'button-hand-roll',
    label: 'button-like — use <Button variant=…>',
    // <button … rounded(-md|-lg)? … bg-brand-500 …  (variant primary clara)
    pattern: /<button\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\brounded(?:-md|-lg)?\b[^`"'}]*\bbg-brand-500\b/g,
  },
  {
    id: 'alert-hand-roll',
    label: 'alert/callout-like div — use <Alert variant=…>',
    // <div … border-(success|warning|error|brand|info)-200 … bg-…-50  (callout clássico)
    pattern: /<div\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\bborder-(success|warning|error|brand|info)-(?:200|300)\b[^`"'}]*\bbg-\1-50\b/g,
  },
];

// ── Walker ──────────────────────────────────────────────────────────────────

function* walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    if (EXCLUDE_DIRS.has(name)) continue;
    const full = join(dir, name);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) {
      yield* walk(full);
    } else if (st.isFile()) {
      if (EXTENSIONS.some((ext) => name.endsWith(ext))) {
        yield full;
      }
    }
  }
}

function collectFiles() {
  const files = [];
  for (const target of INCLUDE_DIRS) {
    const full = join(ROOT, target);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) {
      for (const f of walk(full)) files.push(f);
    } else if (st.isFile()) {
      files.push(full);
    }
  }
  return files;
}

// ── Run ─────────────────────────────────────────────────────────────────────

const files = collectFiles();
const findings = [];

for (const file of files) {
  const src = readFileSync(file, 'utf-8');
  const lines = src.split('\n');

  for (const rule of RULES) {
    rule.pattern.lastIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // skip mecânico por substring
      if (rule.skipIfLineContains?.some((s) => line.includes(s))) continue;
      // skip por regex auxiliar (ex.: dimensions pequenas)
      if (rule.skipIfLineMatches?.test(line)) continue;
      // skip por escape inline: `// audit-ignore: <rule-id>` ou `{/* audit-ignore: <rule-id> */}` na mesma linha ou na anterior
      const prev = lines[i - 1] ?? '';
      const ignoreTag = new RegExp(`audit-ignore:\\s*${rule.id}\\b`);
      if (ignoreTag.test(line) || ignoreTag.test(prev)) continue;
      rule.pattern.lastIndex = 0;
      if (rule.pattern.test(line)) {
        findings.push({
          file: file.slice(ROOT.length + 1).replaceAll(sep, '/'),
          line: i + 1,
          rule: rule.id,
          label: rule.label,
          snippet: line.trim().slice(0, 140),
        });
      }
    }
  }
}

// ── Output ──────────────────────────────────────────────────────────────────

const total = findings.length;
const byRule = findings.reduce((acc, f) => {
  acc[f.rule] = (acc[f.rule] ?? 0) + 1;
  return acc;
}, {});

console.log(c('cyan', `\n→ audit-antipatterns: ${files.length} arquivos varridos`));

if (total === 0) {
  console.log(c('cyan', '✓ nenhum hand-roll de componente DS detectado.\n'));
  process.exit(0);
}

console.log(
  c(STRICT ? 'red' : 'yellow', `\n${STRICT ? '✗' : '!'} ${total} ocorrência(s) de hand-roll detectada(s):\n`),
);

for (const rule of RULES) {
  const hits = findings.filter((f) => f.rule === rule.id);
  if (hits.length === 0) continue;
  console.log(c('bold', `  [${rule.id}] ${hits.length} caso(s)`));
  console.log(c('dim',  `    → ${rule.label}`));
  for (const h of hits) {
    console.log(`    ${c('cyan', h.file + ':' + h.line)}`);
    console.log(c('gray', `      ${h.snippet}`));
  }
  console.log();
}

console.log(
  c('dim', `  Resumo: ${Object.entries(byRule).map(([k, v]) => `${k}=${v}`).join(', ')}`),
);
console.log(
  c('dim', `  Modo: ${STRICT ? 'strict (bloqueia)' : 'warning (não bloqueia)'} · use --strict no CI`),
);
console.log();

process.exit(STRICT ? 1 : 0);
