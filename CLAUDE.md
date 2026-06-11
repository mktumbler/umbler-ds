# Umbler Design System — Briefing

## O que é
Design system Umbler em Next.js 15 + Tailwind v4 + Fumadocs.
Produção: https://umbler-ds.vercel.app
Plugin Claude Code: `.claude-plugin/` (instalável via marketplace Umbler)

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind v4 — tokens de design em `app/tokens.css` via `@theme` e `@theme inline`
- Fumadocs 15 (UI + core) com fumadocs-mdx 11 (sidebar + MDX) — API com destructuring `{ docs, meta }`
- Registry shadcn servido em `/r/[component]` (rota dinâmica lê `registry/*.json`) para distribuição de componentes
- Fontes: Inter (sans), P22 Mackinac Pro (display/headings H1–H3), JetBrains Mono (mono)

## Estrutura de arquivos
```
app/
  tokens.css          ← FONTE DA VERDADE de todos os tokens (cores, tipografia,
                         espaçamento, radius, sombras, motion, semânticos)
  global.css          ← importa tokens.css + Tailwind + estilos base
components/
  ui/                 ← código-fonte dos componentes
  demos/              ← demos interativos usados nas páginas MDX
content/docs/
  foundations/        ← Colors, Typography, Spacing, Radius, Shadows, Motion
  components/         ← uma página MDX por componente
registry/             ← JSONs shadcn GERADOS (não editar à mão; saída de build-registry)
scripts/
  registry.manifest.mjs ← fonte da verdade: lista itens + deps do registry
  build-registry.mjs  ← lê o manifest + os .tsx e gera registry/*.json
  build-package.mjs   ← gera o pacote @umbler/ui
```

## Tokens — como funcionam (Tailwind v4)
- `@theme { --color-brand-500: #1a5cff }` → gera utilitários `bg-brand-500`, `text-brand-500`
- `@theme inline { --color-surface: var(--surface) }` → tokens semânticos que mudam entre light/dark
- `:root { --surface: #fff }` + `.dark { --surface: #0a0f20 }` → valores adaptativos
- `--ease-*` no @theme → gera `ease-out`, `ease-spring`, etc.
- `--duration-*` NÃO gera utilitários automáticos → usar `duration-[var(--duration-fast)]`
- Animações complexas: definir `@keyframes` + `@utility animate-*` em tokens.css

## Princípios

**Convenções de uso do DS** (auto-consistência, zero hardcoded, regras de cor/tipografia, Badge vs Tag, quando usar Radix): a fonte da verdade é a skill — `.claude-plugin/skills/umbler-ds/SKILL.md`. Leia-a antes de gerar UI; não duplique as regras aqui.

Específicos do repo:
- Paridade 1:1 com o HTML original; melhorias só após paridade
- Figma em construção; quando divergir do HTML, o HTML ganha
- Guarda automática de hand-rolls: `scripts/audit-antipatterns.mjs` roda no **pre-commit** (no plugin, o mesmo script roda como hook em modo warning). Exceções pedagógicas: comentário inline `{/* audit-ignore: <rule-id> — motivo */}`

## Roadmap
- ✅ Foundations — Colors, Typography, Spacing, Radius, Shadows, Motion
- ✅ Primitivas — Button, Badge, Tag, Avatar, Separator, Kbd, Spinner
- ✅ Inputs — Input, Textarea, Select, Checkbox, Radio, Toggle, TagInput
- ✅ Feedback/containers — Card, Alert, Toast, Progress, Skeleton
- ✅ Overlays/nav — Dialog, Sheet, Popover, Dropdown, Tooltip, Tabs, Accordion, Breadcrumbs, Pagination
- ✅ Dados — Table, List, Timeline
- ✅ Blocks — Hero, CTABanner, PricingTable, FAQSection, StatGrid, Testimonial, DataListPage, UserRow, EmptyState, FormPanel, FeatureCardGrid
- ✅ Marketing/Brand/Email — guidelines, page-types, email templates
- 🔜 Faltando — Select Combobox, DatePicker, Slider, OTP, File Upload, Command Palette
- 🔜 Específicos Umbler/Talk — Channel Badge, Conversation Item, Filter Bar, Kanban, Tree View, Notification Center

Blocks são instaláveis avulso via registry (`type: registry:block`, caem em `components/blocks/`), fora do agregador `umbler-ui`.

## Como construir um componente novo
1. Cria `components/ui/<nome>.tsx` (React + Tailwind, usa tokens de `app/tokens.css`)
2. Cria demo em `components/demos/<nome>-variants.tsx`
3. Cria página MDX em `content/docs/components/<nome>.mdx`
4. Adiciona slug em `content/docs/components/meta.json`
5. Adiciona o item em `scripts/registry.manifest.mjs` (o `registry/<nome>.json` é gerado por `npm run build:registry`)
6. Importa/exporta os demos em `mdx-components.tsx`

## Deploy
```bash
npx vercel --prod   # deploy manual para produção
npm run build       # build local (também regenera o registry)
```

## Comandos úteis
```bash
npm run dev         # servidor local em localhost:3000
npx tsc --noEmit    # verificar tipos sem compilar
npm run build:registry            # regenerar registry/*.json a partir do manifest
npm run check:sync                # auditar sincronia componente↔doc↔demo↔registry
```
