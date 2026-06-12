/**
 * build-umbler-md — gera public/UMBLER.md
 *
 * Arquivo único de contexto para qualquer IA (Cursor, Claude Code, Windsurf,
 * ChatGPT, Gemini) gerar UI/copy/material no padrão Umbler. Inspirado em
 * https://www.designmd.co/: o usuário cola a URL deste arquivo no prompt e
 * a IA tem todo o destilado de marca, tokens, voz e componentes.
 *
 * Fontes (single source of truth, sem duplicação):
 *   • .claude-plugin/skills/umbler-ds/SKILL.md  — guia operacional
 *   • app/tokens.css                              — tokens @theme
 *   • content/docs/marketing/brand/voice.mdx     — tom e voz
 *   • content/docs/marketing/brand/anti-patterns.mdx  — o que evitar
 *   • content/docs/marketing/conversion/headlines.mdx
 *   • content/docs/marketing/conversion/checklist.mdx
 *
 * Saída: public/UMBLER.md (servido em umbler-ds.vercel.app/UMBLER.md)
 *
 * Uso:
 *   node scripts/build-umbler-md.mjs          # gera
 *   node scripts/build-umbler-md.mjs --check  # falha se desatualizado
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'UMBLER.md');

const SOURCES = {
  skill: '.claude-plugin/skills/umbler-ds/SKILL.md',
  tokens: 'app/tokens.css',
  voice: 'content/docs/marketing/brand/voice.mdx',
  antiPatterns: 'content/docs/marketing/brand/anti-patterns.mdx',
  headlines: 'content/docs/marketing/conversion/headlines.mdx',
  checklist: 'content/docs/marketing/conversion/checklist.mdx',
};

const LIVE_URL = 'https://umbler-ds.vercel.app';

// ─────────────────────────────────────────────────────────────────────────
// Limpeza de MDX → markdown puro
// ─────────────────────────────────────────────────────────────────────────

/**
 * Remove:
 *   • frontmatter (---...---)
 *   • imports (`import X from "..."`)
 *   • wrappers JSX `<Metodologia title="...">...</Metodologia>` (mantém conteúdo)
 *   • outros JSX self-closing (`<Foo />`)
 * Preserva: prosa, headings, listas, tabelas, code fences.
 */
function cleanMdx(raw) {
  let txt = raw;

  // frontmatter
  txt = txt.replace(/^---\n[\s\S]*?\n---\n/, '');

  // imports
  txt = txt.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '');

  // <Metodologia title="..."> ... </Metodologia> — substitui por bloco indentado
  txt = txt.replace(
    /<Metodologia\s+title="([^"]+)">([\s\S]*?)<\/Metodologia>/g,
    (_m, title, body) => `\n> **${title}**\n>\n${body.trim().split('\n').map((l) => `> ${l}`).join('\n')}\n`,
  );

  // self-closing JSX (<Foo ... />)
  txt = txt.replace(/<[A-Z][\w]*[^>]*\/>/g, '');

  // tags JSX que sobrarem (defensivo)
  txt = txt.replace(/<\/?[A-Z][\w]*[^>]*>/g, '');

  // links internos /docs/... → URL absoluta (pra IA conseguir aprofundar se quiser)
  txt = txt.replace(/\]\((\/docs\/[^)]+)\)/g, `](${LIVE_URL}$1)`);

  // colapsa 3+ newlines em 2
  txt = txt.replace(/\n{3,}/g, '\n\n');

  return txt.trim();
}

/**
 * Extrai o título (heading H1 ou frontmatter title) e devolve {title, body}.
 */
function splitTitle(cleanedMdx) {
  const fmTitle = cleanedMdx.match(/^#\s+(.+)$/m);
  return fmTitle ? { title: fmTitle[1], body: cleanedMdx } : { title: null, body: cleanedMdx };
}

// ─────────────────────────────────────────────────────────────────────────
// tokens.css → só os @theme blocks
// ─────────────────────────────────────────────────────────────────────────

function extractTokens(css) {
  const blocks = [];
  const re = /(\/\*[\s\S]*?\*\/\s*)?@theme(\s+inline)?\s*\{([\s\S]*?)\n\}/g;
  let m;
  while ((m = re.exec(css))) {
    const inline = m[2] ? ' inline' : '';
    const body = m[3].trim();
    blocks.push(`@theme${inline} {\n${body}\n}`);
  }
  return blocks.join('\n\n');
}

// ─────────────────────────────────────────────────────────────────────────
// SKILL.md → conteúdo puro (strip frontmatter)
// ─────────────────────────────────────────────────────────────────────────

function cleanSkill(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
}

// ─────────────────────────────────────────────────────────────────────────
// Build
// ─────────────────────────────────────────────────────────────────────────

const HEAD = `# UMBLER.md — Contexto de marca para IAs

> **O que é**: arquivo único com tokens, voz, regras e componentes do Umbler Design System.
> **Quando usar**: cole esta URL (ou conteúdo) no prompt da sua IA (Cursor, Claude Code, Windsurf, ChatGPT, Gemini) antes de pedir LP, e-mail, apresentação ou qualquer material no padrão Umbler.
> **Fonte viva**: ${LIVE_URL}/UMBLER.md — sempre atualizado a partir do DS.
>
> **Como mandar bem**:
> 1. Sempre prefira componentes do registry shadcn em \`${LIVE_URL}/r/<nome>.json\` em vez de hand-roll de HTML/CSS
> 2. Use exclusivamente os tokens semânticos listados abaixo (\`bg-surface\`, \`text-foreground\`, etc.)
> 3. Aplique as regras de voz/copy literalmente — em-dash em pt-BR é proibido, "solução completa" também
> 4. Para catálogo completo de componentes com props: ${LIVE_URL}/llms.txt

---
`;

const TAIL = (sections) => `
---

## Recursos vivos

- **Registry shadcn**: \`${LIVE_URL}/r/<nome>.json\` — instale qualquer componente com \`npx shadcn@latest add\`
- **Catálogo de componentes (llms.txt)**: ${LIVE_URL}/llms.txt — referência rápida de props
- **Foundations**: ${LIVE_URL}/docs/foundations — cores, tipografia, espaçamento, motion
- **Docs completas**: ${LIVE_URL}/docs

## Como este arquivo é gerado

Gerado automaticamente por \`scripts/build-umbler-md.mjs\` a partir de:
${sections.map((s) => `- \`${s}\``).join('\n')}

Última geração: build do repo umbler-ds. Edite as fontes (não o output).
`;

async function build() {
  const skill = cleanSkill(await readFile(path.join(ROOT, SOURCES.skill), 'utf-8'));
  const tokensRaw = await readFile(path.join(ROOT, SOURCES.tokens), 'utf-8');
  const tokens = extractTokens(tokensRaw);
  const voice = cleanMdx(await readFile(path.join(ROOT, SOURCES.voice), 'utf-8'));
  const antiPatterns = cleanMdx(await readFile(path.join(ROOT, SOURCES.antiPatterns), 'utf-8'));
  const headlines = cleanMdx(await readFile(path.join(ROOT, SOURCES.headlines), 'utf-8'));
  const checklist = cleanMdx(await readFile(path.join(ROOT, SOURCES.checklist), 'utf-8'));

  const out =
    HEAD +
    '\n## Guia operacional (skill)\n\n' +
    skill +
    '\n\n---\n\n## Tokens (CSS @theme)\n\n' +
    'Todos os tokens da marca, prontos para `app/tokens.css` em Tailwind v4. Use **sempre via classes utilitárias** geradas pelo Tailwind (`bg-surface`, `text-foreground-muted`, etc.) — nunca hardcode hex.\n\n' +
    '```css\n' + tokens + '\n```\n\n' +
    '---\n\n## Voz e tom\n\n' +
    voice +
    '\n\n---\n\n## Anti-patterns de copy\n\n' +
    antiPatterns +
    '\n\n---\n\n## Headlines (conversão)\n\n' +
    headlines +
    '\n\n---\n\n## Checklist de copy/conversão\n\n' +
    checklist +
    TAIL(Object.values(SOURCES));

  if (process.argv.includes('--check')) {
    let existing = '';
    try { existing = await readFile(OUT, 'utf-8'); } catch {}
    if (existing !== out) {
      console.error(`✗ public/UMBLER.md está desatualizado. Rode: node scripts/build-umbler-md.mjs`);
      process.exit(1);
    }
    console.log(`✓ public/UMBLER.md em dia (${out.length} bytes)`);
    return;
  }

  await writeFile(OUT, out, 'utf-8');
  console.log(`✓ public/UMBLER.md gerado (${out.length} bytes)`);
}

build().catch((err) => {
  console.error('✗ falha:', err.message);
  process.exit(1);
});
