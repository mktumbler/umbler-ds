# Umbler Design System

> Design system oficial da Umbler. Componentes React + tokens Tailwind v4 para construção de interfaces de produtos e marketing. Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

## Instalação

### Pré-requisitos (obrigatórios)

- **Next.js 15+** com App Router
- **Tailwind CSS v4** (NÃO funciona em v3 — usa sintaxe `@theme` exclusiva do v4)
- **TypeScript**

Se o projeto está em Tailwind v3, faça o upgrade pro v4 antes — o DS é v4-only.

### Passos

Registry shadcn em https://umbler-ds.vercel.app/r

Instalar tudo de uma vez (recomendado para projetos novos):

```bash
npx shadcn@latest init
npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui
```

O agregador instala todos os componentes + `cn` (`lib/utils.ts`) + os tokens da marca em `app/tokens.css`.

### CSS de entrada — passo OBRIGATÓRIO e crítico

O `shadcn init` moderno injeta um **tema próprio** no seu `app/globals.css` (tokens oklch, blocos `:root`/`.dark`, `@theme inline` com `--primary`, `--border`, etc.). Esse tema **CONFLITA** com os tokens da Umbler — como o DS já traz um sistema de tokens completo, manter os dois faz o tema do shadcn sobrescrever cores da marca (`--foreground`, `--border` saem errados).

**Substitua TODO o conteúdo do `app/globals.css`** por exatamente isto:

```css
@import 'tailwindcss';
@import './tokens.css';

@layer base {
  body {
    @apply bg-surface text-foreground;
  }
}
```

Não mantenha os blocos `:root`, `.dark`, `@theme inline` nem `@import "shadcn/tailwind.css"` que o shadcn criou — o `tokens.css` da marca os substitui por completo. (Se o seu `globals.css` não fica em `app/`, ajuste o caminho relativo do `@import './tokens.css'` de acordo.)

### Dark mode

Os componentes adaptam automaticamente via tokens semânticos (`bg-surface`, `text-foreground`, etc). Basta alternar a classe `.dark` no elemento raiz:

```tsx
// app/layout.tsx
<html lang="pt-BR" className="dark">
  {/* ou alternar dinamicamente via next-themes, theme provider próprio, etc. */}
```

NÃO use `dark:` manualmente nos componentes — os tokens já resolvem isso.

### Providers globais

Alguns componentes precisam de provider montado UMA vez na raiz da app:

```tsx
// app/layout.tsx
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toast';

<TooltipProvider>
  {children}
  <Toaster />
</TooltipProvider>
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
