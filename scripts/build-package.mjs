/**
 * Gerador do pacote npm @umbler/ui.
 *
 * Distribuição por SOURCE: copia os .tsx canônicos para packages/ui/src/,
 * reescrevendo os imports de alias (@/lib/utils, @/components/ui/x) para
 * caminhos relativos, gera o barrel index.ts e copia tokens.css.
 *
 * O consumidor (Next.js) transpila via `transpilePackages: ['@umbler/ui']`,
 * o que preserva os 'use client' nativamente e mantém os .tsx como fonte
 * única da verdade (nada é editado à mão aqui).
 *
 *   node scripts/build-package.mjs
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { items } from './registry.manifest.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_OUT = path.join(ROOT, 'packages', 'ui', 'src');
const PKG_DIR = path.join(ROOT, 'packages', 'ui');

/** Itens que viram módulos do pacote (componentes + utils). Tokens é CSS, tratado à parte. */
const MODULE_ITEMS = items.filter((i) => i.name !== 'tokens');

/** Arquivos cujos exports NÃO entram no barrel (helpers internos / re-exports duplicados). */
const EXCLUDE_FROM_BARREL = new Set(['button-variants']);

/** Reescreve imports de alias para caminhos relativos (flat em src/). */
function rewriteImports(code) {
  return code
    .replace(/(['"])@\/lib\/utils\1/g, "'./utils'")
    .replace(/(['"])@\/components\/ui\/([^'"]+)\1/g, "'./$2'")
    // remove a re-exportação de conveniência do textarea (duplica input no barrel).
    // cobre as duas formas: com `from './input'` e sem (re-export do já importado).
    .replace(
      /^export \{ InputLabel, InputHint, InputGroup \}( from '\.\/input')?;\s*$/m,
      ''
    );
}

/** basename sem extensão (button.tsx -> button) */
function moduleName(filePath) {
  return path.basename(filePath).replace(/\.(tsx?|ts)$/, '');
}

async function main() {
  // limpa e recria src/
  if (existsSync(SRC_OUT)) await rm(SRC_OUT, { recursive: true, force: true });
  await mkdir(SRC_OUT, { recursive: true });

  const barrelModules = [];

  for (const item of MODULE_ITEMS) {
    for (const rel of item.files) {
      const src = typeof rel === 'string' ? rel : rel.src;
      const abs = path.join(ROOT, src);
      if (!existsSync(abs)) throw new Error(`[${item.name}] fonte não encontrada: ${src}`);

      let code = await readFile(abs, 'utf-8');
      code = rewriteImports(code);

      // utils.ts vai como ./utils.ts; componentes mantêm o basename
      const outName = src.startsWith('lib/')
        ? 'utils' + path.extname(src)
        : path.basename(src);

      await writeFile(path.join(SRC_OUT, outName), code, 'utf-8');

      const mod = moduleName(outName);
      if (!EXCLUDE_FROM_BARREL.has(mod) && !barrelModules.includes(mod)) {
        barrelModules.push(mod);
      }
    }
  }

  // barrel index.ts — re-exporta tudo (cn vem de ./utils)
  const barrel =
    '// Gerado por scripts/build-package.mjs — não editar à mão.\n' +
    barrelModules
      .sort()
      .map((m) => `export * from './${m}';`)
      .join('\n') +
    '\n';
  await writeFile(path.join(SRC_OUT, 'index.ts'), barrel, 'utf-8');

  // tokens.css para a raiz do pacote (@umbler/ui/tokens.css)
  const tokens = await readFile(path.join(ROOT, 'app', 'tokens.css'), 'utf-8');
  await writeFile(path.join(PKG_DIR, 'tokens.css'), tokens, 'utf-8');

  console.log(
    `✓ pacote @umbler/ui gerado: ${barrelModules.length} módulos no barrel + tokens.css`
  );
}

main().catch((err) => {
  console.error('✗ falha ao gerar pacote:', err.message);
  process.exit(1);
});
