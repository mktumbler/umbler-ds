/**
 * Gerador do registry shadcn do Umbler DS.
 *
 * Lê os arquivos .tsx/.ts reais declarados em registry.manifest.mjs, injeta
 * o conteúdo inline e escreve registry/<name>.json para cada item, além do
 * agregador registry/umbler-ui.json.
 *
 * Os .tsx são a fonte da verdade — rode este script sempre que um componente
 * mudar (é encadeado no `npm run build`).
 *
 *   node scripts/build-registry.mjs
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { items, AGGREGATOR, REGISTRY_BASE } from './registry.manifest.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'registry');
const SCHEMA = 'https://ui.shadcn.com/schema/registry-item.json';

/** Tipo do arquivo no schema shadcn a partir do caminho. */
function fileType(filePath) {
  if (filePath.startsWith('lib/')) return 'registry:lib';
  if (filePath.startsWith('hooks/')) return 'registry:hook';
  return 'registry:ui';
}

/** Resolve um nome de registryDependency para URL completa do registry. */
function resolveDep(name) {
  // já é URL absoluta ou um primitivo do shadcn oficial → mantém
  if (name.startsWith('http') || !items.find((i) => i.name === name)) return name;
  return `${REGISTRY_BASE}/${name}`;
}

async function buildItem(item) {
  const files = [];
  for (const entry of item.files) {
    // entry pode ser string (path = source) ou objeto { src, target, type }
    const rel = typeof entry === 'string' ? entry : entry.src;
    const abs = path.join(ROOT, rel);
    if (!existsSync(abs)) {
      throw new Error(`[${item.name}] arquivo-fonte não encontrado: ${rel}`);
    }
    const content = await readFile(abs, 'utf-8');
    const file = {
      path: typeof entry === 'string' ? rel : entry.target ?? rel,
      type: typeof entry === 'string' ? fileType(rel) : entry.type ?? fileType(rel),
      content,
    };
    // registry:file exige `target` explícito (caminho de destino no consumidor)
    if (typeof entry !== 'string' && entry.target) file.target = entry.target;
    files.push(file);
  }

  const json = {
    $schema: SCHEMA,
    name: item.name,
    type: item.type ?? 'registry:ui',
    description: item.description,
    dependencies: item.dependencies ?? [],
    registryDependencies: (item.registryDependencies ?? []).map(resolveDep),
    files,
  };

  await writeFile(
    path.join(OUT_DIR, `${item.name}.json`),
    JSON.stringify(json, null, 2) + '\n',
    'utf-8'
  );
  return json;
}

async function buildAggregator() {
  // componentes (registry:ui) + tokens (registry:file).
  // utils (registry:lib) é puxado transitivamente pelas deps dos componentes.
  const componentNames = items
    .filter((i) => {
      const t = i.type ?? 'registry:ui';
      return t === 'registry:ui' || t === 'registry:file';
    })
    .map((i) => i.name);

  const json = {
    $schema: SCHEMA,
    name: AGGREGATOR.name,
    type: AGGREGATOR.type,
    description: AGGREGATOR.description,
    dependencies: [],
    registryDependencies: componentNames.map(resolveDep),
    files: [],
  };

  await writeFile(
    path.join(OUT_DIR, `${AGGREGATOR.name}.json`),
    JSON.stringify(json, null, 2) + '\n',
    'utf-8'
  );
  return json;
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  let count = 0;
  for (const item of items) {
    await buildItem(item);
    count++;
  }
  await buildAggregator();

  // índice navegável (opcional, útil para debug/listagem)
  const index = {
    base: REGISTRY_BASE,
    items: [
      ...items.map((i) => ({ name: i.name, type: i.type ?? 'registry:ui', description: i.description })),
      { name: AGGREGATOR.name, type: AGGREGATOR.type, description: AGGREGATOR.description },
    ],
  };
  await writeFile(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify(index, null, 2) + '\n',
    'utf-8'
  );

  console.log(`✓ registry gerado: ${count} itens + agregador "${AGGREGATOR.name}" + index.json`);
}

main().catch((err) => {
  console.error('✗ falha ao gerar registry:', err.message);
  process.exit(1);
});
