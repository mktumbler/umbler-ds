#!/usr/bin/env node
/**
 * audit-antipatterns (portable) — versão do auditor do Umbler DS para
 * rodar em qualquer projeto consumer via plugin.
 *
 * Diferenças vs. a versão interna do repo umbler-ds:
 *   • Procura paths comuns de stack moderno: components/, app/, src/,
 *     pages/, content/. Auto-detecta os que existem.
 *   • Aceita --paths "a,b,c" para override manual.
 *   • Aceita --strict para exit 1 (uso em pre-commit / CI).
 *   • Mensagens em pt-BR.
 *
 * Regras (idênticas ao DS):
 *   - badge-hand-roll   → <Badge> ou <Tag>
 *   - eyebrow-hand-roll → className="eyebrow"
 *   - button-hand-roll  → <Button>
 *   - alert-hand-roll   → <Alert>
 *
 * Escape inline (caso pedagógico legítimo):
 *   {/* audit-ignore: <rule-id> — motivo *​/}
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, sep } from 'node:path';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const STRICT = args.includes('--strict');

const pathsArg = args.find((a) => a.startsWith('--paths='));
const explicitPaths = pathsArg ? pathsArg.slice('--paths='.length).split(',') : null;

const ansi = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};
const c = (color, str) => `${ansi[color]}${str}${ansi.reset}`;

// ── Auto-detecta paths que existem ──────────────────────────────────────────

const CANDIDATE_PATHS = explicitPaths ?? [
  'components',
  'app',
  'src',
  'pages',
  'content',
  'features',
  'modules',
];

const EXCLUDE_DIRS = new Set([
  'node_modules',
  '.next',
  '.nuxt',
  '.svelte-kit',
  'out',
  'dist',
  'build',
  '.git',
  'public',
  'static',
  // exclude DS source if running inside the umbler-ds repo itself
  'ui',
]);

const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.mdx'];

// ── Regras ──────────────────────────────────────────────────────────────────

const RULES = [
  {
    id: 'badge-hand-roll',
    label: 'badge-like span — use <Badge variant=… shape="pill" | "tag"> ou <Tag>',
    pattern:
      /<span\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\brounded(?:-full|-md|-lg)?\b[^`"'}]*\bbg-(brand|success|warning|error|info)-(?:100|500)(?:\s|\/|\b)/g,
    // Ignora se for container de ícone (centering wrapper):
    //   • w-N h-N (N <= 8)
    //   • size-N + flex items-center justify-center (qualquer N — é claramente layout)
    //   • rounded-xl ou rounded-2xl (icon containers usam isso, badges não)
    skipIfLineMatches:
      /\bw-[1-8]\b[^"`'}]*\bh-[1-8]\b|\bh-[1-8]\b[^"`'}]*\bw-[1-8]\b|\bsize-\d+\b[^"`'}]*\bflex\b[^"`'}]*\b(?:items-center|justify-center)\b|\brounded-(?:xl|2xl|3xl)\b/,
  },
  {
    id: 'eyebrow-hand-roll',
    label: 'eyebrow hand-roll — use className="eyebrow" do DS',
    pattern:
      /\bclassName\s*=\s*[`"'{][^`"'}]*\buppercase\b[^`"'}]*\btracking-(?:wide|widest|\[[^\]]+\])\b/g,
    skipIfLineContains: ['eyebrow'],
  },
  {
    id: 'button-hand-roll',
    label: 'button-like — use <Button variant=…>',
    pattern:
      /<button\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\brounded(?:-md|-lg)?\b[^`"'}]*\bbg-brand-500\b/g,
  },
  {
    id: 'alert-hand-roll',
    label: 'alert/callout-like div — use <Alert variant=…>',
    pattern:
      /<div\b[^>]*\bclassName\s*=\s*[`"'{][^`"'}]*\bborder-(success|warning|error|brand|info)-(?:200|300)\b[^`"'}]*\bbg-\1-50\b/g,
  },
];

// ── Walker ──────────────────────────────────────────────────────────────────

function* walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (EXCLUDE_DIRS.has(name)) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
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
  for (const target of CANDIDATE_PATHS) {
    const full = join(ROOT, target);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
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
      if (rule.skipIfLineContains?.some((s) => line.includes(s))) continue;
      if (rule.skipIfLineMatches?.test(line)) continue;
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

console.log(c('cyan', `\n→ umbler-audit: ${files.length} arquivos varridos`));

if (total === 0) {
  console.log(c('cyan', '✓ nenhum hand-roll de componente DS detectado.\n'));
  process.exit(0);
}

const color = STRICT ? 'red' : 'yellow';
const prefix = STRICT ? '✗' : '!';
console.log(c(color, `\n${prefix} ${total} hand-roll(s) detectado(s):\n`));

for (const f of findings) {
  console.log(
    `  ${c('bold', f.rule)} ${c('gray', '·')} ${f.file}:${f.line}`,
  );
  console.log(`    ${c('dim', f.snippet)}`);
}

console.log('');
console.log(c('gray', 'por regra:'));
for (const [rule, count] of Object.entries(byRule)) {
  const label = RULES.find((r) => r.id === rule)?.label ?? rule;
  console.log(c('gray', `  ${rule.padEnd(20)} ${count}× ${ansi.dim}${label}${ansi.reset}`));
}
console.log('');
console.log(
  c('gray', 'casos legítimos: marque a linha com `{/* audit-ignore: <rule-id> — motivo */}`'),
);

process.exit(STRICT ? 1 : 0);
