---
description: Fluxo de criação de bloco — Interface Inventory + regra do 3 + implementação seguindo padrões Umbler
---

Conduza o fluxo de criação de um novo **bloco** (organismo composto) para o Umbler DS.

Blocos só viram parte do DS quando passam pelo critério objetivo: aparecem **3+ vezes** em telas/produtos diferentes (regra de Polaris/Primer). Nunca crie bloco "por achismo".

## 1. Discovery — Interface Inventory

Pergunte ao usuário:
- **Quais telas** do produto Umbler têm o padrão que ele quer virar bloco?
- Pode enviar **prints** dessas telas? (3-5 mínimo, 15-20 ideal)

Se o usuário enviar prints, faça inventário:
- Liste o que cada print contém
- Identifique padrões recorrentes (PageHeader, Toolbar, Row, Card, etc.)
- Conte frequência por padrão

## 2. Aplique a regra do 3

Para cada padrão candidato:

| Frequência | Veredito |
|---|---|
| 1 ocorrência | Página única — escreva no código mesmo |
| 2 ocorrências | Duplicação suspeita — vale conversa, ainda não bloco |
| 3+ ocorrências | Padrão — vira bloco |

Apresente o ranking ao usuário e peça confirmação antes de implementar.

## 3. Implementação

Para cada bloco aprovado:

### 3.1. Crie componente

```
components/blocks/<nome>.tsx
```

- **NUNCA** hand-roll: o bloco compõe Avatar/Badge/Card/Button/Input/etc. do DS existente
- Use `cva` para variants (size, layout)
- Use `cn` utility para className merge
- Adicione comentário no topo explicando: o que é, onde aparece no produto, quais componentes ele combina

### 3.2. Crie demos

```
components/demos/blocks/<nome>-variants.tsx
```

- 2-3 variantes que cubram os usos reais identificados no inventory
- Cada export tem nome `<Bloco><Variante>Demo` (ex: `DataListPageFullDemo`)

### 3.3. Crie docs

```
content/docs/blocks/<nome>.mdx
```

Estrutura mínima:

```mdx
---
title: NomeBloco
description: <descrição em 1 linha>
---

<descrição expandida em 2-3 linhas>

## Variantes principais

<ComponentPreview title="...">
  <BlocoDemoX />
</ComponentPreview>

## Componentes usados

- [`Componente1`](/docs/components/componente1) — pra que serve aqui
- ...

## API

<TokenTable columns={['Prop', 'Tipo', 'Descrição']} rows={[...]} />

## Boas práticas

- ...
```

**Não inclua** "Quando usar" nem "Onde aparece no produto" — são boilerplate que polui leitura.

### 3.4. Registre nos metas

- `content/docs/blocks/meta.json` — adicione o slug à lista `pages`
- `mdx-components.tsx` — importe e exporte os demos para uso em MDX
- `content/docs/blocks/index.mdx` — adicione linha à tabela "O que tem aqui"

## 4. Valide

Antes de declarar pronto:
1. `npx tsc --noEmit` — sem erros
2. `node scripts/audit-antipatterns.mjs` — 0 ofensores
3. `npm run build` — build completo passa

## 5. Changelog

Adicione entrada em `data/changelog.json`:

```json
{
  "date": "<hoje>",
  "type": "feat",
  "scope": "blocks",
  "title": "Bloco <Nome>",
  "description": "<resumo + N telas onde aparece>"
}
```

## 6. Commit + deploy

```bash
git add components/blocks/<nome>.tsx components/demos/blocks/<nome>-variants.tsx content/docs/blocks/<nome>.mdx content/docs/blocks/meta.json content/docs/blocks/index.mdx mdx-components.tsx data/changelog.json

git commit -m "feat(blocks): <Nome>

<descrição do bloco + evidência do inventory>

🤖 via /umbler-block
"

git push
npx vercel --prod --yes
```

## 7. Sync para projetos consumer

Se houver piloto/consumer ativo, copie o componente:

```bash
cp components/blocks/<nome>.tsx <pilot-path>/components/blocks/<nome>.tsx
```
