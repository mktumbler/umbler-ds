---
description: Gera uma landing page completa no padrão Umbler DS para o produto informado
argument-hint: <produto>
---

Gere uma landing page completa para `$1` no padrão Umbler Design System.

## 1. Leia as fontes de conhecimento

Leia os dois arquivos antes de gerar qualquer código:

- `.claude-plugin/knowledge/products.md` — catálogo de produtos (persona, dor, estrutura canônica, pricing, FAQ)
- `https://umbler-ds.vercel.app/llms.txt` via WebFetch — catálogo técnico de componentes e props disponíveis

## 2. Localize o produto

Busque `$1` no catálogo (busca case-insensitive: "talk", "Talk", "TALK" → mesmo resultado; "hosting", "hospedagem" → mesmo resultado).

**Produto encontrado:** use a entrada completa — persona, dor, estrutura canônica, pricing e FAQ. Não pergunte nada ao usuário. Não invente dados que não estão no catálogo; use os placeholders marcados (`[PREENCHER]`) e sinalize no output o que precisa de dado real antes de publicar.

**Produto não encontrado:** avise "Produto `$1` não está no catálogo ainda." e faça exatamente 3 perguntas:
1. O que o produto faz e qual problema resolve (1-2 frases)?
2. Quem é o cliente que mais sofre com esse problema?
3. Qual a ação esperada na LP e pra onde o CTA aponta?
Aguarde as respostas antes de gerar.

## 3. Gere a LP

Crie `app/(marketing)/$1/page.tsx` com a estrutura canônica do produto. Importe os blocks diretamente de `@/components/blocks/` — eles já existem no DS, não precisa instalar via shadcn.

Regras inegociáveis de geração:

- **DS-first:** use apenas blocks e componentes do DS. Nenhum HTML/CSS hand-rolled.
- **Eyebrow em toda seção** via prop `eyebrow` do block (jamais escrito à mão como `uppercase tracking-wide`). Quando usar a classe `.eyebrow` diretamente em seções custom, o `text-center` deve ir no elemento **pai**, não na `<p>`: `<div className="text-center"><p className="eyebrow">...</p></div>` — a classe usa `display: inline-block` e não responde a `text-align` próprio.
- **Azul é ação, verde é estado.** CTA usa `Button variant="primary"`. Verde só em Badge/Tag de status.
- **`shadow-cta` uma única vez** — no botão principal do hero, nenhum outro.
- **Tokens semânticos, zero hex.** `bg-surface`, `text-foreground-muted`, `rounded-2xl` — nunca `bg-[#1a5cff]`.
- **Copy em pt-BR, tom mentor.** Verbos no imperativo nos CTAs. Sem em-dash. Headline na dor antes de mencionar o produto.
- **Placeholders marcados:** onde faltar dado real, use `{/* PREENCHER: ... */}` em comentário JSX acima da linha, não dentro do texto visível.

## 4. Feche com auditoria

Ao terminar, liste:

**Arquivo gerado:** `app/(marketing)/$1/page.tsx`
**Blocks usados:** (quais foram necessários)
**Precisa de dado real antes de publicar:** (pricing com [PREENCHER], URLs, depoimentos, números reais de estatísticas)
