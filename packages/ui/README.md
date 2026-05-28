# @umbler/ui

Componentes React + tokens Tailwind v4 do Umbler Design System, distribuídos
como pacote npm versionado via **GitHub Packages**.

> Para **começar um projeto novo do zero**, o caminho mais rápido continua sendo
> o registry shadcn (`npx shadcn@latest add https://umbler-ds.vercel.app/r/umbler-ui`).
> Use este pacote quando quiser **receber atualizações do DS** via `npm update`.

## Pré-requisitos

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4

## 1. Autenticação no GitHub Packages

O pacote é privado. No projeto consumidor, crie um `.npmrc` na raiz:

```ini
@umbler:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Exporte um token com escopo `read:packages` no ambiente:

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx
```

## 2. Instalação

```bash
npm install @umbler/ui
```

## 3. Configurar o Next.js

O pacote é distribuído como **source** (`.tsx`). Habilite a transpilação no
`next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@umbler/ui'],
};
export default config;
```

## 4. Configurar o Tailwind

No CSS de entrada (ex.: `app/globals.css`), importe os tokens **e** registre o
pacote como fonte de classes (para o Tailwind v4 gerar os utilitários usados
pelos componentes):

```css
@import 'tailwindcss';
@import '@umbler/ui/tokens.css';

@source '../node_modules/@umbler/ui/src';
```

## 5. Usar

```tsx
import { Button, Card, CardHeader, CardTitle } from '@umbler/ui';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Olá Umbler</CardTitle>
      </CardHeader>
      <Button variant="primary">Começar</Button>
    </Card>
  );
}
```

Imports por componente também funcionam (tree-shaking explícito):

```tsx
import { Button } from '@umbler/ui/button';
```

## Atualizando

```bash
npm update @umbler/ui          # sobe dentro do range semver (^x.y.z)
npm install @umbler/ui@latest  # pula major (breaking change) conscientemente
```

## Componentes & tokens

Catálogo e documentação visual: https://umbler-ds.vercel.app/docs
Referência para agentes de IA: https://umbler-ds.vercel.app/llms.txt

---

Este pacote é **gerado** a partir dos componentes canônicos do design system
(`components/ui/*` no repositório `umbler-ds`). Não edite `src/` à mão — rode
`npm run build:package` no repositório do DS.
