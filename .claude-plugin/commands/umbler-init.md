---
description: Bootstrap do Umbler DS num projeto novo — instala tokens, cn utility e components.json
---

Faça o bootstrap completo do Umbler Design System neste projeto. Siga estritamente:

## 1. Verifique pré-requisitos

- O projeto usa **Next.js 15+** (App Router) ou similar? Se não, avise o usuário antes de continuar.
- Tem **Tailwind v4** configurado (`@tailwindcss/postcss` ou `@tailwindcss/vite`)? Se não, peça para instalar primeiro.
- Existe um arquivo CSS de entry (geralmente `app/globals.css` ou `app/global.css`)?

## 2. Instale tokens + utility

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/tokens.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/cn-utility.json
```

## 3. Importe tokens no CSS de entry

Adicione no topo do `app/globals.css` (ou equivalente):

```css
@import "./tokens.css";
@import "tailwindcss";
```

A ordem importa: `tokens.css` antes do Tailwind.

## 4. Verifique `components.json`

O `shadcn add` deve ter criado `components.json` apontando para o alias correto. Confirme com o usuário:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

## 5. Liste o que está disponível

Após bootstrap, busque o catálogo atual via WebFetch em `https://umbler-ds.vercel.app/llms.txt` e mostre ao usuário um sumário dos componentes/blocks disponíveis. Sugira 3-5 componentes essenciais para começar (Button, Card, Input, Dialog, Avatar).

## 6. Próximos passos

Informe ao usuário:
- Use `/umbler-add <componente>` para adicionar componentes individuais
- Use `/umbler-audit` para verificar hand-rolls
- Use `/umbler-block` quando precisar de organismo composto (DataListPage, UserRow, etc.)
