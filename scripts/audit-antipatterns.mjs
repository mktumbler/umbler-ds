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
 * Regras de copy (escopo restrito):
 *   - em-dash-copy → "—" em copy de landing pt-BR (brand guide § 10)
 *                    Escopo: app/(landing)/**, app/(home)/**, content/docs/marketing/showcase/**
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
    // Ignora se for container de ícone (centering wrapper):
    //   • w-N h-N (N <= 8)
    //   • size-N + flex items-center justify-center (qualquer N — é layout, não badge)
    //   • rounded-xl/2xl/3xl (icon containers usam isso, badges não)
    skipIfLineMatches: /\bw-[1-8]\b[^"`'}]*\bh-[1-8]\b|\bh-[1-8]\b[^"`'}]*\bw-[1-8]\b|\bsize-\d+\b[^"`'}]*\bflex\b[^"`'}]*\b(?:items-center|justify-center)\b|\brounded-(?:xl|2xl|3xl)\b/,
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
  {
    id: 'em-dash-copy',
    label: 'em-dash (—) em copy pt-BR — use vírgula, ponto ou parênteses (brand guide § Voz)',
    // Em-dash literal (U+2014). Hífen comum (-) e en-dash (–) não disparam.
    pattern: /—/g,
    // Escopo: rotas de landing reais + showcase. /docs (doc técnica) fica livre.
    scope: /(?:^|\/)(?:app\/\(landing\)\/|app\/\(home\)\/|content\/docs\/marketing\/showcase\/)/,
  },
  {
    id: 'heading-period',
    label: 'título com ponto final — heading não leva "." na voz Umbler (brand guide § Pontuação)',
    // <h1-6 ...> ... letra/acentuada . </h1-6>. Captura ponto final imediatamente antes do fechamento.
    // Aceita <br /> antes do conteúdo final (multi-linha) e ignora "?", "!" e "...".
    // Multiline porque conteúdo de heading pode quebrar linha.
    pattern: /<h[1-6][^>]*>[\s\S]*?[a-záéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]\.\s*<\/h[1-6]>/g,
    multiline: true,
    // Escopo: apenas rotas de landing onde a voz Umbler é aplicada.
    // /docs continua livre (títulos técnicos podem fechar com ponto).
    scope: /(?:^|\/)(?:app\/\(landing\)\/|app\/\(home\)\/)/,
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
  const relPath = file.slice(ROOT.length + 1).replaceAll(sep, '/');

  for (const rule of RULES) {
    // Regra com escopo restrito: pula arquivos fora do escopo
    if (rule.scope && !rule.scope.test(relPath)) continue;
    rule.pattern.lastIndex = 0;

    // Modo multiline: aplica o pattern ao source inteiro e calcula a linha do match.
    // Útil pra padrões que atravessam quebras (ex.: heading-period em tags multi-line).
    if (rule.multiline) {
      const ignoreTag = new RegExp(`audit-ignore:\\s*${rule.id}\\b`);
      let m;
      const localPattern = new RegExp(rule.pattern.source, rule.pattern.flags.includes('g') ? rule.pattern.flags : rule.pattern.flags + 'g');
      while ((m = localPattern.exec(src)) !== null) {
        const upTo = src.slice(0, m.index);
        const lineNo = upTo.split('\n').length;
        const line = lines[lineNo - 1] ?? '';
        const prev = lines[lineNo - 2] ?? '';
        // Honra o pragma audit-ignore (mesma linha ou anterior à abertura do match)
        if (ignoreTag.test(line) || ignoreTag.test(prev)) continue;
        // Snippet: pega a linha do final do match (mais perto do ponto problemático)
        const matchEndLine = m.index + m[0].length;
        const endLineNo = src.slice(0, matchEndLine).split('\n').length;
        const snippetLine = lines[endLineNo - 1] ?? line;
        findings.push({
          file: relPath,
          line: endLineNo,
          rule: rule.id,
          label: rule.label,
          snippet: snippetLine.trim().slice(0, 140),
        });
      }
      continue;
    }

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
          file: relPath,
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
