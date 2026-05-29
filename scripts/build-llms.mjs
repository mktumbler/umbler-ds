/**
 * build-llms — gera public/llms.txt a partir de 3 fontes:
 *
 *   1. scripts/llms-template.head.md     — prelúdio (header, instalação,
 *                                          convenções, tokens de cor)
 *   2. scripts/registry.manifest.mjs     — ordem dos componentes + nomes
 *      + scripts/llms-components.mjs     — corpo de cada componente
 *   3. scripts/llms-template.tail.md     — postlúdio (Ícones, Patterns,
 *                                          Eyebrow)
 *
 * Filosofia: o llms.txt é uma cartilha pra agentes de IA — foco em
 * "como usar" + props. Não duplica documentação visual.
 *
 * Erros:
 *   • Componente no manifesto sem entry em llms-components → falha
 *   • Entry em llms-components sem componente no manifesto → falha
 *   (assim o llms-components nunca acumula órfãos.)
 *
 * Uso:
 *   node scripts/build-llms.mjs            # gera public/llms.txt
 *   node scripts/build-llms.mjs --check    # falha se o arquivo gerado
 *                                            difere do que está em disco
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { items as manifestItems } from './registry.manifest.mjs';
import { llmsBlocks } from './llms-components.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HEAD = path.join(ROOT, 'scripts', 'llms-template.head.md');
const TAIL = path.join(ROOT, 'scripts', 'llms-template.tail.md');
const OUT  = path.join(ROOT, 'public', 'llms.txt');

// kebab → Pascal ("card-aurora" → "CardAurora")
const toPascal = (slug) =>
  slug.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');

// Slugs do manifesto que NÃO entram no llms.txt — utilitários internos
// e agregadores. Tudo que for componente visível ao consumidor deve ter
// um bloco em llms-components.
const SKIP = new Set(['utils', 'tokens']);

async function build() {
  const head = (await readFile(HEAD, 'utf-8')).trimEnd();
  const tail = (await readFile(TAIL, 'utf-8')).trimEnd();

  const slugs = manifestItems
    .map((i) => i.name)
    .filter((name) => !SKIP.has(name));

  // Sanity: cada componente do manifesto precisa de um bloco em llms-components
  const missing = slugs.filter((s) => !(s in llmsBlocks));
  if (missing.length) {
    console.error(
      `✗ componentes sem bloco em scripts/llms-components.mjs: ${missing.join(', ')}`,
    );
    process.exit(1);
  }

  // Sanity: cada bloco em llms-components precisa ter um componente correspondente
  const orphans = Object.keys(llmsBlocks).filter((s) => !slugs.includes(s));
  if (orphans.length) {
    console.error(
      `✗ blocos em llms-components.mjs sem componente no manifesto: ${orphans.join(', ')}`,
    );
    process.exit(1);
  }

  // Render: head + cada bloco precedido de "### Pascal" + tail
  const body = slugs
    .map((slug) => `### ${toPascal(slug)}\n${llmsBlocks[slug]}`)
    .join('\n\n');

  const out = `${head}\n\n${body}\n\n${tail}\n`;

  if (process.argv.includes('--check')) {
    let existing = '';
    try { existing = await readFile(OUT, 'utf-8'); } catch {}
    if (existing !== out) {
      console.error(`✗ public/llms.txt está desatualizado. Rode: node scripts/build-llms.mjs`);
      process.exit(1);
    }
    console.log(`✓ public/llms.txt em dia (${slugs.length} componentes)`);
    return;
  }

  await writeFile(OUT, out, 'utf-8');
  console.log(`✓ public/llms.txt gerado (${slugs.length} componentes, ${out.length} bytes)`);
}

build().catch((err) => {
  console.error('✗ falha:', err.message);
  process.exit(1);
});
