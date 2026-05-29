# Umbler Design System

> Design system oficial da Umbler. Componentes React + tokens Tailwind v4 para construção de interfaces de produtos e marketing. Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

## Instalação

Registry shadcn em https://umbler-ds.vercel.app/r

Instalar tudo de uma vez (recomendado para projetos novos):

```bash
npx shadcn@latest init
npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui
```

Importar tokens no CSS de entrada (app/globals.css) — obrigatório, DEPOIS do tailwind:

```css
@import 'tailwindcss';
@import './tokens.css';
```

Catálogo completo: https://umbler-ds.vercel.app/r/index.json
Documentação visual: https://umbler-ds.vercel.app/docs

## Convenções obrigatórias

- Importe componentes de `@/components/ui/<nome>`
- Use SOMENTE os tokens da marca via classes Tailwind — nunca cores, fontes ou espaçamentos arbitrários
- Cores: `bg-brand-500`, `text-neutral-400`, `bg-success-500`, `border-error-300`, etc.
- Texto semântico: `text-foreground`, `bg-surface`, `text-foreground-muted`
- Tipografia: `text-display-xl`, `text-h1`, `text-h2`, `text-body`, `text-body-sm`, `text-caption`
- Sombras: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`
- Radius: `rounded-sm` (6px), `rounded-md` (10px), `rounded-lg` (16px), `rounded-full`
- Espaçamento: escala de 4px — use classes padrão Tailwind (`p-4`, `gap-6`, etc.)
- Motion: durations via `duration-[var(--duration-fast/normal/slow/slower/instant)]`; easings via `ease-out`, `ease-in`, `ease-spring` (mapeados do @theme)
- Eyebrow/caption com gradiente da marca: `<p className="eyebrow">TEXTO</p>`
- Dark mode: automático via tokens semânticos — não use `dark:` manualmente nos componentes

### Cor para ação vs. estado

Verde é **estado**, nunca **ação**. Use `success-*` em badges, toasts e status pills. Para qualquer CTA (salvar, criar, confirmar, enviar, publicar), use SEMPRE `Button variant="primary"` — independente do que o produto fazia antes da migração.

## Tokens de cor disponíveis

Brand (Umbler Blue): brand-50 → brand-900 (principal: brand-500 = #1a5cff)
Neutral (superfícies): neutral-50 → neutral-950 (fundo escuro: neutral-950 = #030614)
Semântico success, warning, error, info (50/100/300/500/600/900 por escala)
Adaptativo light/dark: surface, foreground, foreground-secondary, foreground-muted, foreground-subtle, border, border-strong, control-track

## Componentes
