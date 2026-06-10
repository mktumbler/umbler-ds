---
description: Instala um componente do Umbler DS via registry shadcn e valida a adoção
argument-hint: <componente>
---

Adicione o componente `$1` do Umbler DS ao projeto atual.

## 1. Valide a existência

Antes de tudo, busque `https://umbler-ds.vercel.app/llms.txt` via WebFetch e verifique se `$1` existe na lista de componentes ou blocks. Se não existir:

- Sugira componentes com nome parecido
- Se for um caso de **bloco** (organismo composto), sugira que o usuário rode `/umbler-block` em vez disso
- Pare aqui

## 2. Verifique stack

Confirme que o projeto:
- Tem `components.json` configurado (rode `/umbler-init` primeiro se não tiver)
- Tem `app/tokens.css` (ou equivalente) importado
- É Tailwind v4

Se algum requisito faltar, pare e oriente o usuário.

## 3. Instale

Componentes e blocks compartilham o mesmo namespace flat do registry — sempre `/r/<nome>.json`:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/$1.json
```

Componentes caem em `components/ui/`; blocks (`type: registry:block`) caem em `components/blocks/` e puxam os componentes do DS que usam.

## 4. Verifique adoção correta

Após instalar:
- Abra o arquivo recém-criado em `components/ui/$1.tsx`
- Liste no chat as **dependências** que ele importa (outros componentes do DS)
- Se houver dependências não instaladas, ofereça instalar em sequência

## 5. Exemplo de uso

Mostre 1 exemplo curto de uso do componente, com import correto:

```tsx
import { ComponentName } from '@/components/ui/$1';

<ComponentName>...</ComponentName>
```

## 6. Avisos finais

Lembre o usuário das regras críticas que se aplicam a esse componente:
- Se for `Button` → não use verde como CTA
- Se for `Badge` ou `Tag` → diferença entre os dois
- Se for `Input` → use `<InputLabel>` acima, não label inline
