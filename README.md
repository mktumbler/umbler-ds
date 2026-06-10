# Umbler Design System

Tokens, componentes, blocks e padrões da Umbler — distribuídos via registry shadcn e
documentados em **[umbler-ds.vercel.app](https://umbler-ds.vercel.app)**.

Este repo é o **app de documentação** (Next.js + Fumadocs) **e** a fonte de distribuição:
as mesmas `.tsx` que a doc renderiza são as que outros projetos instalam.

## Stack

- **Next.js 15** (App Router) + **React 19** + TypeScript
- **Tailwind v4** — tokens em `app/tokens.css` (`@theme` / `@theme inline`, CSS-first, sem JS config)
- **Fumadocs 15** (UI/core) + fumadocs-mdx 11 — sidebar, MDX, busca, dark/light
- **Registry shadcn** servido em `/r/[component]` — distribuição via `npx shadcn add <url>`
- **Phosphor Icons** · fontes Inter (sans), P22 Mackinac Pro (display), JetBrains Mono (mono)

## Rodar local

```bash
npm install
npm run dev      # http://localhost:3000  (landing em /, docs em /docs)
```

## Consumir o DS em outro projeto

Pré-requisito: Next.js 15 + Tailwind **v4** + TypeScript (não funciona no Tailwind v3).

```bash
npx shadcn@latest init
npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui   # tudo de uma vez
# ou avulso:
npx shadcn@latest add https://umbler-ds.vercel.app/r/button
```

O código é **copiado** para `components/ui/` (sem dependência de runtime, totalmente editável).
Guia completo de adoção (projeto novo vs. existente, limpeza do `globals.css`, catálogo):
**[/docs](https://umbler-ds.vercel.app/docs)** · catálogo p/ agentes: **[/llms.txt](https://umbler-ds.vercel.app/llms.txt)**.

> Usando Claude Code? O plugin `.claude-plugin/` traz skill + 2 slash commands
> (`/umbler-add`, `/umbler-audit`) + hook de auto-audit. Ver [ANALISE.md](./ANALISE.md).

## Estrutura

```
app/
  tokens.css              ← FONTE DA VERDADE dos tokens (cores, tipo, espaço, radius, sombra, motion)
  global.css              ← importa tokens.css + Tailwind + base
  r/[component]/route.ts  ← endpoint do registry shadcn
components/
  ui/                     ← componentes do DS
  blocks/                 ← organismos compostos (Hero, PricingTable, UserRow…)
  demos/                  ← demos vivas embutidas nas páginas MDX
  docs/                   ← helpers de doc (VariantGrid, ColorSwatch, TypeScale…)
content/docs/             ← MDX: foundations, components, blocks, marketing, email
registry/                 ← JSONs shadcn GERADOS (não editar à mão)
scripts/
  registry.manifest.mjs   ← fonte da verdade do que entra no registry
  build-registry.mjs      ← gera registry/*.json a partir do manifest
  build-llms.mjs          ← gera public/llms.txt
  check-component-sync.mjs ← audita sincronia componente↔doc↔demo↔registry
  audit-antipatterns.mjs  ← detecta hand-rolls (pre-commit)
.claude-plugin/           ← plugin Claude Code (skill + commands + hook)
```

## Adicionar um componente

1. `components/ui/<nome>.tsx` — usa tokens de `app/tokens.css`, zero valores hardcoded
2. `components/demos/<nome>-variants.tsx` — variantes nomeadas pra galeria
3. `content/docs/components/<nome>.mdx` — usa `<VariantGrid>` + `<VariantCard>`
4. Slug em `content/docs/components/meta.json`
5. Item em `scripts/registry.manifest.mjs` (o JSON do registry é **gerado**)
6. Import/export dos demos em `mdx-components.tsx`

Validar antes de commitar: `npx tsc --noEmit` · `npm run check:antipatterns` · `npm run build`.

## Deploy

```bash
npm run build        # regenera registry + llms.txt + next build
npx vercel --prod    # deploy de produção
```

Mais contexto operacional em [`CLAUDE.md`](./CLAUDE.md).
