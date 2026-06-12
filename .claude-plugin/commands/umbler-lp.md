---
description: Gera uma landing page completa no padrão Umbler DS — lê catálogo de produtos + referências criativas, monta a estrutura canônica e entrega TSX pronto com copy real e layout não-genérico.
argument-hint: <produto>  # ex.: talk | hosting
---

Gere uma landing page completa para o produto `$1` no padrão Umbler Design System.

## 1. Leia as fontes de conhecimento

Leia, **nesta ordem**, antes de gerar qualquer código:

1. `.claude-plugin/knowledge/products.md` — catálogo de produtos (persona, dor, estrutura canônica, pricing, FAQ)
2. `.claude-plugin/knowledge/references/*.md` — referências criativas de LPs que funcionam (ler **todos** os arquivos, exceto `README.md`)
3. `https://umbler-ds.vercel.app/llms.txt` via WebFetch — catálogo técnico de componentes e props disponíveis

## 2. Localize o produto

Procure por `$1` no catálogo (case-insensitive).

**Produto encontrado:** use a entrada completa — persona, dor, estrutura canônica, pricing e FAQ canônico. Não pergunte nada ao usuário. Não invente dados; use placeholders marcados (`[R$ X]`, `[preencher]`) e sinalize no output o que precisa de dado real antes de publicar.

**Produto não encontrado:** avise "Produto `$1` não está no catálogo ainda." e faça exatamente 3 perguntas:
  1. O que o produto faz e qual problema resolve (1-2 frases)?
  2. Quem é o cliente que mais sofre com esse problema?
  3. Qual a ação esperada na LP e pra onde o CTA aponta?
  Aguarde as respostas antes de gerar.

## 3. Bootstrap do DS (se necessário)

Se o projeto não tem o DS instalado:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/tokens.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui.json
```

## 4. Instale os blocks da estrutura canônica

Para o Talk, por exemplo:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/hero-block.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/stat-grid.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/feature-card-grid.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/pricing-table.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/faq-section.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/cta-banner.json
```

Se já estão instalados, pule.

## 5. Componha o layout com criatividade

**A regra de ouro:** marca é Umbler, layout/copy/ritmo pode pegar emprestado das referências.

### O que SEMPRE vem do Umbler DS (não-negociável)

- **Fonte:** Inter (sans), P22 Mackinac Pro (display/headlines), JetBrains Mono (mono). NUNCA outra fonte.
- **Cores:** apenas tokens semânticos do DS (`bg-surface`, `text-brand-500`, `text-foreground-muted`). Zero hex.
- **Radius:** `rounded-2xl` / `rounded-3xl` do DS. Não inventar.
- **Sombra:** `shadow-cta` uma única vez (botão principal do hero). Outras sombras só via tokens.
- **Motion:** tokens `duration-fast/base/slow` + `ease-spring`. Sem `transition-all` solto.
- **Voz:** pt-BR, tom mentor. Headline na dor antes de mencionar o produto. Verbo no imperativo nos CTAs. Sem em-dash (`—`) em copy.

### O que pode vir das referências (criatividade)

Olhe as 4 referências e **combine padrões de fontes diferentes** na mesma LP — não cole um site inteiro. Para cada seção da estrutura canônica, escolha **uma ideia criativa** de uma das referências. Exemplos do que pegar:

- **Hero:** trust score numérico embutido (Cryptix), pill de "novidade" acima da headline (Cassis), dual-CTA com público duplo (Talentify).
- **Features:** cards com UI mockada viva em vez de só ícone (Cassis), bento grid de tamanhos diferentes (Cassis), 4 capabilities nomeadas + 3 deep-dives depois (Fusion).
- **How it works:** carrossel horizontal numerado (Talentify), step com mockup à esquerda + texto à direita (Cryptix).
- **Prova social:** testimonial card de 4 camadas com foto + cargo + logo da empresa + nota (Talentify), aspa H2-sized (Cassis), métricas individuais por pessoa (Talentify).
- **Pricing:** toggle Monthly/Yearly com -X% no toggle (Cryptix), badge "Popular" sobreposta ao card (Cryptix).
- **Ritmo:** alternar split left/right entre seções (Cryptix), inserir uma quote oversized entre features e deep-dive (Cassis).

### Inegociáveis de geração

- **DS-first:** use apenas blocks e componentes do DS. Nenhum HTML/CSS hand-rolled pra imitar visual de referência. Se a referência tem um padrão que o DS não suporta, escolha outro padrão — não invente componente.
- **Eyebrow em toda seção** via `SectionHeader` (`.eyebrow` jamais escrito à mão como `uppercase tracking-wide`).
- **Azul é ação, verde é estado.** CTA usa `Button variant="primary"`. Verde só em Badge/Tag de status.
- **Placeholders marcados:** onde faltar dado real, use `[PREENCHER: ...]` em comentário JSX acima da linha, não dentro do texto visível.

## 6. Gere a LP

Crie `app/(marketing)/$1/page.tsx` (ou `app/showcase/$1/page.tsx` se for showcase no próprio DS — adapte ao padrão do projeto).

## 7. Feche com auditoria

Ao terminar, liste:

**Blocks instalados:** quais blocks foram necessários
**Padrões criativos usados:** quais ideias vieram de quais referências (ex.: "trust score no hero — Cryptix", "testimonial 4 camadas — Talentify")
**Tokens semânticos usados:** quais tokens aparecem no código
**Precisa de dado real antes de publicar:** pricing, URLs, depoimentos, números — tudo que ficou com placeholder
