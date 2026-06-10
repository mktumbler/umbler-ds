---
description: Instala componentes/blocks do Umbler DS via registry shadcn — faz bootstrap automático se o projeto ainda não tem o DS
argument-hint: <componente | umbler-ui>
---

Adicione `$1` do Umbler DS ao projeto atual. Se o projeto ainda não tem o DS configurado, faça o bootstrap automaticamente antes (passo 2).

## 1. Valide a existência

Busque `https://umbler-ds.vercel.app/llms.txt` via WebFetch e verifique se `$1` existe na lista de componentes ou blocks. Casos:

- **Não existe** → sugira nomes parecidos do catálogo e pare aqui
- **`$1` = `umbler-ui`** → instala TODOS os componentes + tokens de uma vez (não inclui blocks; eles são avulsos)
- **É um padrão que ainda não virou bloco** → a skill `umbler-ds` tem o fluxo de criação de bloco (Interface Inventory + regra do 3)

## 2. Bootstrap automático (só se precisar)

Verifique se o projeto já tem o DS. Detecção:

| Falta | Ação |
|---|---|
| `components.json` | rode `npx shadcn@latest init` antes do add |
| `tokens.css` (procure em `app/`) | o add de `umbler-ui` já traz; pra item avulso, rode antes: `npx shadcn@latest add https://umbler-ds.vercel.app/r/tokens.json` |
| Tailwind v4 (`@tailwindcss/postcss` ou `@tailwindcss/vite` no package.json) | **pare** e avise: o DS não funciona em Tailwind v3 |

Se rodou `shadcn init`, corrija o CSS de entrada (o init injeta um tema concorrente). Deixe o `app/globals.css` apenas com:

```css
@import 'tailwindcss';
@import './tokens.css';
```

Se já tem `components.json` + tokens, pule direto pro passo 3.

## 3. Instale

Componentes e blocks compartilham o mesmo namespace flat — sempre `/r/<nome>.json`:

```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/$1.json
```

Componentes caem em `components/ui/`; blocks (`type: registry:block`) caem em `components/blocks/` e puxam os componentes do DS que usam.

## 4. Verifique adoção correta

Após instalar:
- Abra o arquivo recém-criado e liste no chat as **dependências** que ele importa (outros componentes do DS)
- Se houver dependências não instaladas, ofereça instalar em sequência

## 5. Exemplo de uso

Mostre 1 exemplo curto de uso, com import correto:

```tsx
import { ComponentName } from '@/components/ui/$1';

<ComponentName>...</ComponentName>
```

## 6. Avisos finais

Lembre o usuário das regras críticas que se aplicam a esse componente:
- Se for `Button` → não use verde como CTA
- Se for `Badge` ou `Tag` → diferença entre os dois
- Se for `Input` → use `<InputLabel>` acima, não label inline
