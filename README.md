# Umbler Design System

Design system Umbler — diretrizes de marca, tokens, componentes e padrões.
Servirá como **fonte de verdade** e contexto curado para construir outros produtos Umbler com Claude Code.

> **Status:** scaffold inicial — Onda 1 (Foundations) pronta. Componentes serão adicionados progressivamente.

---

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind v4** — tokens em `@theme` (CSS-first, sem JS config)
- **Fumadocs 15** — sidebar + MDX + search + dark/light toggle
- **shadcn registry** — distribuição de componentes via `npx shadcn add <url>`
- **Phosphor Icons React**

---

## Setup

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em dev
npm run dev

# 3. Abrir
http://localhost:3000
```

A landing fica em `/`, a documentação em `/docs`.

---

## Estrutura

```
umbler-ds/
├── app/
│   ├── (home)/              → Landing page (sem chrome de docs)
│   ├── docs/[[...slug]]/    → Rotas Fumadocs/MDX
│   ├── api/search/          → Endpoint de busca do Fumadocs
│   └── r/[component]/       → Endpoint do registry shadcn
│
├── content/docs/            → MDX (source da documentação)
│   ├── foundations/         → ✅ Colors, Typography, Spacing, Radius, Shadows, Motion
│   ├── components/          → 🚧 Componentes React (a serem adicionados)
│   └── patterns/            → 🚧 Composições prontas
│
├── components/
│   ├── ui/                  → Componentes do DS (Button, Card, Input...)
│   ├── docs/                → Helpers de docs (ColorSwatch, TypeScale...)
│   └── demos/               → Demos vivas embutidas em MDX
│
├── registry/                → JSON files servidos via /r/[component]
├── lib/                     → utils, source loader
├── app/global.css           → 🎯 TODOS OS TOKENS UMBLER (@theme)
└── mdx-components.tsx       → Registro de componentes MDX
```

---

## Como adicionar uma página de documentação

1. Criar arquivo MDX em `content/docs/<categoria>/<slug>.mdx`:

```mdx
---
title: Meu novo doc
description: Breve descrição.
---

Conteúdo da página em markdown ou JSX.
```

2. Adicionar o slug no `meta.json` da categoria, na ordem desejada.
3. Salvar — Fumadocs detecta automaticamente em dev.

---

## Como adicionar um componente novo (Onda 2+)

O fluxo para cada componente:

### 1. Criar o componente React

`components/ui/button.tsx` — código fonte do componente, com variants (CVA), TypeScript types, e tokens do `@theme`.

### 2. Documentar em MDX

`content/docs/components/button.mdx`:

```mdx
---
title: Button
description: Botão de ação primária.
---

import { Button } from '@/components/ui/button';
import { ButtonVariantsDemo } from '@/components/demos/button-variants';

## Variantes

<ComponentPreview>
  <ButtonVariantsDemo />
</ComponentPreview>

## API

| Prop | Tipo | Default |
|------|------|---------|
| variant | `'primary' \| 'secondary' \| 'ghost' \| 'outline' \| 'danger'` | `'primary'` |
| size | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
```

### 3. Adicionar ao meta.json

`content/docs/components/meta.json` — incluir `"button"` na lista.

### 4. Expor no registry

Criar `registry/button.json` no formato shadcn — outros projetos consomem com:

```bash
npx shadcn@latest add https://<seu-deploy>/r/button
```

---

## Como consumir os componentes em outros projetos

```bash
npx shadcn@latest add https://<deploy-do-ds>/r/button
npx shadcn@latest add https://<deploy-do-ds>/r/input
```

O código fonte é **copiado** para `/components/ui/` do projeto consumidor.
Sem dependência runtime. Totalmente customizável.
O Claude Code lê esse código e usa como referência para construir features.

---

## Tokens — onde estão

**Tudo em `app/global.css`**, dentro do bloco `@theme`.

Migrado 1:1 do protótipo HTML em https://umbler-design-system.vercel.app/

- Cores: brand (azul Umbler), neutral, success, warning, error, info
- Tipografia: Inter (sans), JetBrains Mono (mono), 10 níveis de escala
- Espaçamento: 4px base, 16 steps de 2px a 128px
- Radius: sm, md, lg, xl, full
- Shadows: xs, sm, md, lg, xl, glow
- Motion: 4 durations + 3 easing curves
- Breakpoints: sm, md, lg, xl

Para adicionar um token novo:

```css
@theme {
  --color-novo-token: #abc123;
}
```

Tailwind expõe automaticamente como `bg-novo-token`, `text-novo-token`, etc.

---

## Próximos passos (roadmap)

**Onda 1 — Foundations** ✅
Colors · Typography · Spacing · Radius · Shadows · Motion

**Onda 2 — Primitivas** 🔜
Button · Badge · Tag · Avatar · Separator · Kbd · Spinner

**Onda 3 — Inputs**
Input · Textarea · Select · Checkbox · Radio · Switch · Slider · OTP · Date Picker · File Upload

**Onda 4 — Containers e feedback**
Card · Alert · Banner · Toast · Tooltip · Popover · Skeleton · Progress · Empty State · Stat Card

**Onda 5 — Overlays e navegação**
Modal · Alert Dialog · Sheet · Dropdown · Tabs · Accordion · Breadcrumb · Pagination · Sidebar Nav · Navbar · Command Palette

**Onda 6 — Específicos Umbler / Talk**
Channel Badge · Conversation Item · Filter Bar · Kanban · Tree View · Notification Center · Timeline

**Onda 7 — Patterns**
Login · Dashboard · Pricing · Onboarding · Hero · Settings · Empty State Pages · Modal Destrutiva · Upgrade

---

## Deploy

```bash
npm run build && npm run start
```

Recomendado: **Vercel** (deploy automático, edge functions, ótima integração com Next.js).
