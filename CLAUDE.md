# Umbler Design System — Briefing

## O que é
Design system Umbler em Next.js 15 + Tailwind v4 + Fumadocs.
Produção: https://umbler-ds.vercel.app
Plugin Claude Code: `.claude-plugin/` (instalável via marketplace Umbler)

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind v4 — tokens de design em `app/tokens.css` via `@theme` e `@theme inline`
- Fumadocs 11 (sidebar + MDX) — API com destructuring `{ docs, meta }`
- Registry shadcn em `/r/[component]` para distribuição de componentes

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
registry/             ← JSONs no formato shadcn para distribuição
scripts/
  build-registry.mjs  ← gera os arquivos de registry em /public/r/
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
- Paridade 1:1 com o HTML original; melhorias só após paridade
- Acessibilidade razoável — usar Radix só em interativos críticos (Modal, Dropdown, Combobox, Tabs, Tooltip, Popover, Command Palette)
- Componentes simples direto, sem Radix
- Zero hardcoded: cores → tokens semânticos, durações → var(--duration-*), easings → ease-out/ease-spring
- Figma em construção; quando divergir do HTML, o HTML ganha
- **Auto-consistência**: o DS é fonte E consumidor (a doc usa o DS). Se já existe componente, **importe — nunca recrie**. `<Badge>` não é `<span className="rounded ...">`; `<Button>` não é `<button className="bg-brand-500 ...">`; eyebrow é `.eyebrow`, não `uppercase tracking-wide` hand-rolled. Guarda automática: `scripts/audit-antipatterns.mjs` (roda no pre-commit). Exceções pedagógicas legítimas: comentário inline `{/* audit-ignore: <rule-id> — motivo */}`.

## Roadmap
- ✅ Onda 1 — Foundations (Colors, Typography, Spacing, Radius, Shadows, Motion)
- ✅ Onda 2 — Button, Badge, Tag, Avatar, Separator, Kbd, Spinner
- ✅ Onda 3 (parcial) — Checkbox, Radio, Toggle, Input, Textarea
- ✅ Onda 5 (parcial) — Tooltip, Dialog, Tabs, Dropdown
- 🔜 Onda 3 (restante) — Select, Combobox, DatePicker
- 🔜 Onda 4 — Card, Alert, Toast, Progress, Skeleton
- 🔜 Onda 6 — Específicos Umbler/Talk
- 🔜 Onda 7 — Patterns

## Como construir um componente novo
1. Cria `components/ui/<nome>.tsx` (React + Tailwind, usa tokens de `app/tokens.css`)
2. Cria demo em `components/demos/<nome>-variants.tsx`
3. Cria página MDX em `content/docs/components/<nome>.mdx`
4. Adiciona slug em `content/docs/components/meta.json`
5. Cria `registry/<nome>.json` no formato shadcn

## Deploy
```bash
npx vercel --prod   # deploy manual para produção
npm run build       # build local (também regenera o registry)
```

## Comandos úteis
```bash
npm run dev         # servidor local em localhost:3000
npx tsc --noEmit    # verificar tipos sem compilar
node scripts/build-registry.mjs   # regenerar /public/r/*.json
```
