/**
 * check-component-sync — audita se cada componente em components/ui/
 * está propagado nos seis lugares onde precisa aparecer:
 *
 *   1. mdx       — content/docs/components/<name>.mdx
 *   2. demo      — components/demos/<name>-variants.tsx
 *   3. meta      — content/docs/components/meta.json (sidebar)
 *   4. manifest  — scripts/registry.manifest.mjs (registry)
 *   5. llms      — public/llms.txt (referência pra agentes de IA)
 *   6. roadmap   — components/docs/roadmap.tsx
 *
 * Saída: tabela ✓/✗ por componente. Exit code 0 se tudo OK; 1 se algum gap.
 *
 *   node scripts/check-component-sync.mjs
 *   node scripts/check-component-sync.mjs --strict   # falha em qualquer gap (default)
 *   node scripts/check-component-sync.mjs --no-strict # só reporta, sempre exit 0
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { items as manifestItems } from './registry.manifest.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UI_DIR = path.join(ROOT, 'components', 'ui');
const DEMOS_DIR = path.join(ROOT, 'components', 'demos');
const DOCS_DIR = path.join(ROOT, 'content', 'docs', 'components');
const META_FILE = path.join(DOCS_DIR, 'meta.json');
const LLMS_FILE = path.join(ROOT, 'public', 'llms.txt');
const ROADMAP_FILE = path.join(ROOT, 'components', 'docs', 'roadmap.tsx');

// Arquivos em components/ui/ que NÃO são componentes públicos do DS — são
// tooling interno do app de docs ou helpers de variants. Não devem ser
// auditados.
const INTERNAL_FILES = new Set([
  'button-variants.ts',
  'sidebar-meta-links.tsx',
  'sidebar-theme-row.tsx',
]);

// kebab-case → PascalCase ("card-aurora" → "CardAurora")
const toPascal = (slug) =>
  slug.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');

// Pinta no terminal usando ANSI.
const ansi = {
  reset: '\x1b[0m',
  bold:  '\x1b[1m',
  dim:   '\x1b[2m',
  green: '\x1b[32m',
  red:   '\x1b[31m',
  yellow:'\x1b[33m',
  cyan:  '\x1b[36m',
};
const c = (color, str) => `${ansi[color]}${str}${ansi.reset}`;

async function main() {
  const strict = !process.argv.includes('--no-strict');

  // 1. Coletar componentes (slugs) a partir do filesystem
  const files = await readdir(UI_DIR);
  const slugs = files
    .filter((f) => (f.endsWith('.tsx') || f.endsWith('.ts')) && !INTERNAL_FILES.has(f))
    .map((f) => f.replace(/\.(tsx|ts)$/, ''))
    .sort();

  // 2. Ler cada fonte de sincronia de uma vez
  const meta = JSON.parse(await readFile(META_FILE, 'utf-8'));
  const llmsTxt = await readFile(LLMS_FILE, 'utf-8');
  const roadmapTxt = await readFile(ROADMAP_FILE, 'utf-8');
  const manifestNames = new Set(manifestItems.map((i) => i.name));

  // 3. Checar cada componente em todos os 6 lugares
  const rows = [];
  for (const slug of slugs) {
    const pascal = toPascal(slug);
    const checks = {
      mdx:      existsSync(path.join(DOCS_DIR, `${slug}.mdx`)),
      demo:     existsSync(path.join(DEMOS_DIR, `${slug}-variants.tsx`)),
      meta:     Array.isArray(meta.pages) && meta.pages.includes(slug),
      manifest: manifestNames.has(slug),
      // llms.txt usa headers PascalCase; permite variações com espaço/parens.
      llms:     new RegExp(`^### ${pascal}\\b`, 'm').test(llmsTxt),
      // roadmap.tsx procura por menção em algum item (com ou sem ✓)
      roadmap:  new RegExp(`'${pascal}( ✓)?'`).test(roadmapTxt),
    };
    rows.push({ slug, pascal, checks });
  }

  // 4. Render
  const colNames = ['mdx', 'demo', 'meta', 'manifest', 'llms', 'roadmap'];
  const w = Math.max(...slugs.map((s) => s.length), 'component'.length);
  const header =
    c('bold', 'component'.padEnd(w)) +
    '   ' +
    colNames.map((n) => c('dim', n.padEnd(8))).join('');
  console.log(`\n${header}`);
  console.log(c('dim', '─'.repeat(w + 3 + colNames.length * 8)));

  const gaps = [];
  for (const { slug, checks } of rows) {
    const cells = colNames.map((col) => {
      const ok = checks[col];
      const mark = ok ? c('green', '  ✓     ') : c('red', '  ✗     ');
      if (!ok) gaps.push({ slug, col });
      return mark;
    }).join('');
    const slugColor = colNames.every((col) => checks[col]) ? 'green' : 'yellow';
    console.log(c(slugColor, slug.padEnd(w)) + '   ' + cells);
  }

  console.log('');
  if (gaps.length === 0) {
    console.log(c('green', `✓ tudo em sincronia (${rows.length} componentes)`));
    process.exit(0);
  }

  // Resumo agrupado por arquivo afetado
  const byCol = gaps.reduce((acc, g) => {
    (acc[g.col] ??= []).push(g.slug);
    return acc;
  }, {});
  console.log(c('yellow', `! ${gaps.length} gaps encontrados:`));
  for (const col of colNames) {
    if (!byCol[col]) continue;
    console.log(`  ${c('red', col.padEnd(8))} faltando em: ${byCol[col].join(', ')}`);
  }
  console.log('');

  process.exit(strict ? 1 : 0);
}

main().catch((err) => {
  console.error('✗ falha:', err.message);
  process.exit(1);
});
