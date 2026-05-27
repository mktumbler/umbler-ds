# Umbler Design System — Briefing

## O que é
Design system Umbler em Next.js 15 + Tailwind v4 + Fumadocs.
Migração 1:1 do protótipo HTML em https://umbler-design-system.vercel.app/

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind v4 (tokens em `app/global.css` via `@theme`)
- Fumadocs 11 (sidebar + MDX) — API com destructuring `{ docs, meta }`
- Registry shadcn em `/r/[component]` para distribuição

## Princípios
- Paridade 1:1 com o HTML original; melhorias só após paridade
- Acessibilidade razoável (não é o foco) — usar Radix/shadcn só em interativos críticos (Modal, Dropdown, Combobox, Tabs, Tooltip, Popover, Command Palette)
- Componentes simples direto, sem Radix
- Cada componente: source em `components/ui/`, doc em `content/docs/components/`, demo em `components/demos/`, JSON em `registry/`

## Roadmap
- ✅ Onda 1 — Foundations (Colors, Typography, Spacing, Radius, Shadows, Motion)
- 🔜 Onda 2 — Button, Badge, Tag, Avatar, Separator, Kbd, Spinner
- Onda 3 — Inputs
- Onda 4 — Containers e feedback
- Onda 5 — Overlays e navegação
- Onda 6 — Específicos Umbler/Talk
- Onda 7 — Patterns

## Como construir um componente novo
1. Lê o HTML original no Vercel (âncora correspondente)
2. Cria `components/ui/<nome>.tsx` (React + Tailwind, usa tokens do @theme)
3. Cria demo em `components/demos/<nome>-variants.tsx`
4. Cria página MDX em `content/docs/components/<nome>.mdx`
5. Adiciona slug no `content/docs/components/meta.json`
6. Cria `registry/<nome>.json` no formato shadcn

## Decisões abertas
- Figma em construção; quando divergir do HTML, o HTML ganha por enquanto
