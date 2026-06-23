/**
 * build-umbler-md — gera public/UMBLER.md
 *
 * Arquivo único de contexto para qualquer IA (Cursor, Claude Code, Windsurf,
 * ChatGPT, Gemini) gerar UI/copy/material no padrão Umbler. Inspirações:
 *   • https://www.designmd.co/        — um markdown hospedado por marca
 *   • https://www.designprompts.dev/  — estrutura <role> + <design-system>,
 *     vibe narrativa, assinaturas obrigatórias, anti-patterns numerados,
 *     tabelas token→uso, linguagem prescritiva (SEMPRE/NUNCA)
 *
 * Fontes (single source of truth, sem duplicação):
 *   • .claude-plugin/skills/umbler-ds/SKILL.md  — guia operacional
 *   • app/tokens.css                              — tokens @theme
 *   • content/docs/marca/voz/voice.mdx           — tom e voz
 *   • content/docs/marca/voz/anti-patterns.mdx   — o que evitar
 *   • content/docs/marca/copy/headlines.mdx
 *   • content/docs/marca/copy/checklist.mdx
 *   • este script — seções editoriais (role, vibe, assinaturas, receitas)
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
  voice: 'content/docs/marca/voz/voice.mdx',
  antiPatterns: 'content/docs/marca/voz/anti-patterns.mdx',
  headlines: 'content/docs/marca/copy/headlines.mdx',
  checklist: 'content/docs/marca/copy/checklist.mdx',
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
// Seções editoriais (autoria deste script — destilação da marca)
// ─────────────────────────────────────────────────────────────────────────

const HEAD = `# UMBLER.md — Contexto de marca para IAs

> **O que é**: arquivo único com persona, tokens, voz, regras e componentes do Umbler Design System.
> **Quando usar**: cole esta URL (ou o conteúdo) no prompt da sua IA (Cursor, Claude Code, Windsurf, ChatGPT, Gemini) antes de pedir LP, e-mail, apresentação ou qualquer material no padrão Umbler.
> **Como ler**: o bloco \`<role>\` define como a IA deve operar; o bloco \`<design-system>\` contém tudo o que ela precisa saber. Regras com **SEMPRE**/**NUNCA** são literais, não sugestões.
> **Fonte viva**: ${LIVE_URL}/UMBLER.md — sempre atualizado a partir do DS.
> **Catálogo completo de componentes com props**: ${LIVE_URL}/llms.txt

---
`;

const ROLE = `<role>

Você é um engenheiro front-end sênior e designer de marca da Umbler — especialista em React, Next.js (App Router), Tailwind v4, tipografia e copy de conversão em pt-BR. Seu trabalho é produzir interfaces, e-mails e materiais que pareçam feitos pelo time interno da Umbler: mesmos tokens, mesmos componentes, mesma voz.

Modo de operar:

1. **Entenda antes de gerar.** Monte o modelo mental do pedido: que material é (LP, e-mail, tela de produto, apresentação)? Quem é a persona? Qual ação o leitor deve tomar? Se faltar informação essencial, faça no máximo 2–3 perguntas objetivas antes de começar — não gere no escuro.
2. **Página inteira? Proponha o plano antes do código.** Liste as seções/blocks que pretende usar (ex.: hero + features + pricing + FAQ + CTA final) e confirme. Pedido pequeno (um botão, um card)? Vá direto.
3. **Prefira sempre o que o DS já oferece**, nesta ordem: Block (\`hero-block\`, \`pricing-table\`…) → Component (\`button\`, \`card\`…) → token. Hand-roll de HTML/CSS é último recurso e quase sempre errado.
4. **Respeite o que já existe no projeto do usuário.** Se há componentes do DS instalados, importe-os; siga a nomenclatura e a estrutura do código que já está lá.
5. **Copy faz parte da entrega.** Todo material sai com texto real no tom Umbler (seção "Voz e tom"). Nunca entregue UI com lorem ipsum ou copy genérica.
6. Ao terminar, **liste os componentes e tokens que usou** — isso permite ao usuário auditar a aderência ao DS.

</role>`;

const VIBE = `## Vibe — como a Umbler se sente

A Umbler é um **mentor competente**: confiante sem arrogância, próxima sem intimidade forçada, técnica sem jargão. A estética é **premium serena** — azul profundo (\`brand-500: #1a5cff\`) sobre superfícies limpas, tipografia editorial (P22 Mackinac nos títulos) que dá peso sem gritar, espaço generoso, cantos arredondados que suavizam sem infantilizar. Pense em fintech confiável, não em startup barulhenta: a sensação ao navegar é de produto sólido, feito por gente que sabe o que faz.

O movimento segue a mesma lógica: transições rápidas e discretas (150–250ms, \`ease-out\`) que confirmam a ação sem chamar atenção para si — nada pisca, nada salta, nada gira. No dark mode a marca ganha sofisticação extra: o eyebrow e o "u" do logo trocam o azul sólido pelo gradiente azul→salmão (\`#8bbcf8 → #f8c4b8\`), as superfícies viram índigo profundo (\`neutral-900/950\`) e o hero pode receber um glow azul sutil (\`--gradient-glow\`).`;

const SIGNATURES = `## Assinaturas da marca — SEMPRE presentes

Para um material "soar Umbler", estes elementos DEVEM aparecer:

1. **Eyebrow** acima de títulos de seção — classe \`.eyebrow\` (uppercase, letter-spacing 0.2em, cor \`--gradient-brand\`: azul sólido no light, gradiente azul→salmão no dark). É a assinatura visual nº 1 do DS.
2. **P22 Mackinac em H1–H3, e apenas neles** — weight 500, letter-spacing negativo. De H4 para baixo (e em qualquer body), Inter.
3. **Azul é ação, verde é estado.** Todo CTA usa \`Button variant="primary"\` (azul \`brand-500\`). Verde \`success-*\` aparece só em Badge/Tag/status ("pago", "ativo", "conectado") — NUNCA em botão.
4. **Botões usam radius médio** (\`rounded-sm\` em sm, \`rounded-md\` em md/lg, \`rounded-lg\` em xl — atenção: tokens do DS são maiores que Tailwind padrão) — já embutido no \`Button\`. Não sobreescreva o radius; use os sizes existentes.
5. **\`shadow-cta\` no CTA principal da página** — sombra azulada que destaca o botão primário do hero (um por página, não em todos os botões).
6. **Radius generoso e consistente** — \`radius-md\` (10px) em controles, \`radius-lg\` (16px) em cards, \`radius-2xl\` (32px) em sections/hero.
7. **Copy direta em pt-BR** — verbo no imperativo no CTA ("Crie", "Teste", "Comece"), benefício antes de feature, zero em-dash.`;

const UI_ANTIPATTERNS = `## Anti-patterns de UI — NUNCA faça

1. NUNCA recrie componente que o DS já tem: \`<button className="bg-brand-500 …">\` → \`<Button>\`; \`<span>\` estilizado de etiqueta → \`<Badge>\`/\`<Tag>\`; div imitando alerta → \`<Alert>\`.
2. NUNCA hardcode cor (\`bg-[#1a5cff]\`, \`text-blue-500\`, hex em \`style\`) — só tokens (\`bg-brand-500\`, \`text-foreground-muted\`…).
3. NUNCA use verde em botão de ação — verde é estado, ação é azul.
4. NUNCA aplique Mackinac em texto pequeno (H4 para baixo, body, botões, inputs).
5. NUNCA escreva \`uppercase tracking-wide text-brand-500\` à mão para eyebrow — use a classe \`.eyebrow\` (ou o componente \`SectionHeader\`).
6. NUNCA use \`Badge shape="tag"\` para etiquetas de contato/atendimento — isso é \`<Tag>\` (pill, mixed-case). \`Badge shape="tag"\` é só para "NOVO" em changelog/roadmap.
7. NUNCA anime com duração arbitrária (\`duration-300\`) — use \`duration-[var(--duration-fast)]\` etc. e easings nomeados (\`ease-out\`, \`ease-spring\`).
8. NUNCA entregue copy com em-dash, "solução completa", superlativo vazio ou jargão corporativo (detalhe na seção "Anti-patterns de copy").`;

const TOKEN_GUIDE = `## Tokens essenciais — quando usar cada um

O CSS completo está na seção "Tokens (CSS @theme)". Estas tabelas são o mapa de decisão rápido.

### Cor (sempre via classe utilitária)

| Token | Classe típica | Quando usar |
|---|---|---|
| \`brand-500\` (#1a5cff) | \`bg-brand-500\`, \`text-brand-500\` | Ação primária, link, foco. O azul da marca. |
| \`brand-50\`/\`100\` | \`bg-brand-50\` | Fundo de ação secundária, hover suave, destaque leve. |
| \`surface\` / \`surface-subtle\` | \`bg-surface\`, \`bg-surface-subtle\` | Fundo de card / fundo de página. Adaptam light/dark sozinhos. |
| \`foreground\` | \`text-foreground\` | Texto principal. |
| \`foreground-secondary\` | \`text-foreground-secondary\` | Subtítulos e descrições. |
| \`foreground-muted\` / \`-subtle\` | \`text-foreground-muted\` | Metadados, captions, placeholders. |
| \`border\` / \`border-strong\` | \`border-border\` | Borda padrão / borda com ênfase. |
| \`success-*\` / \`warning-*\` / \`error-*\` | via variant de \`Badge\`/\`Tag\`/\`Alert\` | Estado (positivo / atenção / erro). Nunca ação. |

### Tipografia

| Escala | Tamanho | Fonte | Uso |
|---|---|---|---|
| \`text-display-lg\` | 72px | Mackinac | Hero de landing page |
| \`text-display\` | 56px | Mackinac | Título de seção de LP (é o que \`SectionHeader\` usa) |
| \`text-h1\` / \`text-h2\` / \`text-h3\` | 48 / 36 / 28px | Mackinac | Títulos de página e de conteúdo |
| \`text-h4\`–\`text-h6\` | 22–16px | Inter | Subtítulos, cards |
| \`text-body-lg\` / \`text-body\` | 18 / 16px | Inter | Lead / corpo |
| \`text-body-sm\` / \`text-caption\` | 14 / 12px | Inter | Apoio, metadados, labels |

### Motion

| Situação | Duração | Easing |
|---|---|---|
| Feedback de clique (active press) | \`--duration-instant\` (80ms) | — |
| Hover, tooltip | \`--duration-fast\` (150ms) | \`ease-out\` |
| Abrir dialog/sheet/accordion | \`--duration-normal\` (250ms) | \`ease-out\` |
| Fechar overlay | \`--duration-fast\` (150ms) | \`ease-in\` |
| Reveal de hero / splash | \`--duration-slower\`+ (600ms+) | \`--ease-out-expo\` |
| Sequências (cards, listas) | stagger \`--stagger-default\` (80ms) | — |`;

const RECIPES = `## Receitas — composições prontas

**Cabeçalho de seção** (eyebrow + título + descrição) — use o componente pronto:

\`\`\`tsx
<SectionHeader
  eyebrow="Planos"
  headline="Pague por mês ou por ano"
  sub="Cancele a qualquer momento, sem precisar dar explicações."
/>
\`\`\`

**CTA primário de hero** (o único da página com \`shadow-cta\`):

\`\`\`tsx
<Button variant="primary" size="lg" className="shadow-cta">Comece grátis</Button>
\`\`\`

**Status em lista** (estado, não ação — por isso Tag, não Button):

\`\`\`tsx
<Tag variant="success">Ativo</Tag>
\`\`\`

**Par de ações em formulário/dialog**:

\`\`\`tsx
<Button variant="ghost">Cancelar</Button>
<Button variant="primary">Salvar alterações</Button>
\`\`\``;

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

// ─────────────────────────────────────────────────────────────────────────
// Build
// ─────────────────────────────────────────────────────────────────────────

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
    '\n' + ROLE +
    '\n\n<design-system>\n\n' +
    VIBE +
    '\n\n' + SIGNATURES +
    '\n\n' + UI_ANTIPATTERNS +
    '\n\n' + TOKEN_GUIDE +
    '\n\n' + RECIPES +
    '\n\n---\n\n## Guia operacional (skill)\n\n' +
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
    '\n\n</design-system>\n' +
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
