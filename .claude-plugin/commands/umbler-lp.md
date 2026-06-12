---
description: Gera uma landing page completa no padrão Umbler DS — lê o catálogo de produtos, monta a estrutura canônica e entrega TSX pronto com copy real.
argument-hint: <produto>  # ex.: talk | hosting
---

Gere uma landing page completa para o produto `$1` no padrão Umbler Design System.

## 1. Leia as fontes de conhecimento

Leia os dois arquivos antes de gerar qualquer código:

- `.claude-plugin/knowledge/products.md` — catálogo de produtos (persona, dor, estrutura canônica, pricing, FAQ)
- `https://umbler-ds.vercel.app/llms.txt` via WebFetch — catálogo técnico de componentes e props disponíveis

## 2. Localize o produto

Procure por `$1` no catálogo (busca case-insensitive: "talk", "Talk", "TALK" → mesmo resultado).

**Produto encontrado:** use a entrada completa — persona, dor, estrutura canônica, pricing e FAQ canônico. Não pergunte nada ao usuário. Não invente dados que não estão no catálogo; use os placeholders marcados (`[R$ X]`, `[preencher]`) e sinalize no output o que precisa de dado real antes de publicar.

**Produto não encontrado:** avise "Produto `$1` não está no catálogo ainda." e faça exatamente 3 perguntas:
  1. O que o produto faz e qual problema resolve (1-2 frases)?
  2. Quem é o cliente que mais sofre com esse problema?
  3. Qual a ação esperada na LP e pra onde o CTA aponta?
  Aguarde as respostas antes de gerar.

## 3. Faça o bootstrap do DS (se necessário)

Verifique se o projeto já tem o DS instalado. Se não:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/tokens.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui.json
```

## 4. Instale os blocks necessários

Instale os blocks da estrutura canônica do produto. Para o Talk, por exemplo:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/hero-block.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/stat-grid.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/feature-card-grid.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/pricing-table.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/faq-section.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/cta-banner.json
```

Se o projeto já tem os blocks instalados, pule esta etapa.

## 5. Gere a LP

Crie `app/(marketing)/$1/page.tsx` (ou `app/$1-lp/page.tsx` se a estrutura de pastas do projeto for diferente — adapte ao padrão encontrado).

Regras inegociáveis de geração:

- **DS-first:** use apenas blocks e componentes do DS. Nenhum HTML/CSS hand-rolled.
- **Eyebrow em toda seção** via `SectionHeader` (`.eyebrow` jamais escrito à mão como `uppercase tracking-wide`).
- **Azul é ação, verde é estado.** CTA usa `Button variant="primary"`. Verde só em Badge/Tag de status.
- **`shadow-cta` uma única vez** — no botão principal do hero, nenhum outro.
- **Tokens semânticos, zero hex.** `bg-surface`, `text-foreground-muted`, `rounded-2xl` — nunca `bg-[#1a5cff]`.
- **Copy em pt-BR, tom mentor.** Verbos no imperativo nos CTAs. Sem em-dash. Headline na dor antes de mencionar o produto.
- **Placeholders marcados:** onde faltar dado real, use `[PREENCHER: ...]` em comentário JSX acima da linha, não dentro do texto visível.

## 6. Feche com auditoria

Ao terminar, liste:

**Blocks instalados:** (quais foram necessários)
**Tokens usados:** (quais tokens semânticos aparecem no código)
**Precisa de dado real antes de publicar:** (pricing, URLs, depoimentos, números — tudo que ficou com placeholder)
