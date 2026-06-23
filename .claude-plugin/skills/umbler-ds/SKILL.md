---
name: umbler-ds
description: Contexto do Umbler Design System — quando o usuário pede UI, componente, página ou estilo num projeto Umbler (Talk, Hosting, Console, landing, email), invoque esta skill para alinhar nas convenções (tokens, componentes registry, blocks, regras de cor/tipografia/motion) e evitar hand-rolls que duplicam o DS.
---

# Umbler Design System — guia operacional

Você está num projeto que consome o **Umbler Design System** (https://umbler-ds.vercel.app). Esta skill é seu manual de operação: o que existe, como consumir, e o que **nunca fazer**.

## Antes de gerar UI — passos obrigatórios

1. **Baixe o catálogo atual** via `WebFetch` em `https://umbler-ds.vercel.app/llms.txt` (texto < 30KB). Ele lista todos os componentes, blocks, props e tokens disponíveis. Sempre use o catálogo live em vez de assumir o que existe.
2. **Verifique se o componente que você precisa já existe** no catálogo. Se sim → consuma via registry. Se não → considere se é caso de combinar componentes existentes antes de criar um novo.
3. **Cheque convenções de tokens** (cores, tipografia, espaçamento) nas Foundations: `https://umbler-ds.vercel.app/docs/foundations/colors`, `.../typography`, etc.

## Princípios — não negociáveis

- **Auto-consistência.** Se o componente existe no DS, importe — nunca recrie. `<Badge>` não é `<span className="rounded ...">`. `<Button>` não é `<button className="bg-brand-500 ...">`. Eyebrow é classe `.eyebrow`, não `uppercase tracking-wide` hand-rolled.
- **Zero hardcoded.** Cores via tokens semânticos (`bg-surface`, `text-foreground-muted`, etc.), nunca cores diretas. Durações via `var(--duration-*)`, easings via `ease-out`/`ease-spring`.
- **Verde é estado, não ação.** Use `success-*` em badges/toasts/status pills/ícones de feedback positivo. Para chamar ação (salvar, confirmar, criar, enviar, publicar) use sempre `Button variant="primary"` (azul brand). Verde como CTA é proibido — quebra a paridade entre produtos Umbler e prejudica acessibilidade.

## Hierarquia de camadas

```
Foundations  → tokens (cores, tipografia, espaçamento, radius, sombras, motion)
Components   → átomos e moléculas (Button, Card, Input, Dialog, Table…)
Blocks       → organismos reutilizáveis (DataListPage, UserRow, EmptyState, FormPanel, FeatureCardGrid)
Patterns     → templates de página (Hero, Feature Section)
```

Quando você precisar de algo:
- **Estilo / espaçamento / cor** → procure em Foundations
- **Elemento isolado** (botão, input, tabela) → use Component
- **Pedaço de UI maior** (listagem inteira, linha de contato, vazio, form) → use Block antes de montar do zero
- **Página inteira** (landing, hero) → use Pattern como base

## Como consumir componentes

O DS é distribuído via **registry shadcn**. Em qualquer projeto consumer:

```bash
# bootstrap (uma vez)
npx shadcn@latest add https://umbler-ds.vercel.app/r/tokens.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/cn-utility.json

# por componente
npx shadcn@latest add https://umbler-ds.vercel.app/r/<componente>.json
```

Exemplo:
```bash
npx shadcn@latest add https://umbler-ds.vercel.app/r/button.json
npx shadcn@latest add https://umbler-ds.vercel.app/r/dialog.json
```

Componentes são copiados pra `components/ui/<componente>.tsx` no projeto consumer.

**Blocks** (organismos compostos: hero-block, pricing-table, cta-banner, user-row, form-panel, empty-state, faq-section, stat-grid, testimonial-block, feature-card-grid, data-list-page) usam o **mesmo namespace flat** — `https://umbler-ds.vercel.app/r/<bloco>.json`. Caem em `components/blocks/` e puxam automaticamente os componentes do DS que compõem. Não fazem parte do agregador `umbler-ui` (instale o bloco que precisar, avulso).

## Quando usar slash commands

Esse plugin expõe 2 comandos:

- `/umbler-add <componente>` — instala um componente ou block da registry (com bootstrap automático se o projeto ainda não tem o DS) e valida adoção
- `/umbler-audit` — varre o repo atual atrás de hand-rolls que duplicam o DS

Use esses comandos sempre que possível — eles encapsulam o procedimento certo e evitam erros comuns.

## Criando um bloco novo (mantenedores do DS)

Blocos só viram parte do DS quando passam pelo critério objetivo: o padrão aparece **3+ vezes** em telas/produtos diferentes (regra de Polaris/Primer). Nunca crie bloco "por achismo".

1. **Inventory** — colete prints das telas onde o padrão aparece (3-5 mínimo), liste o que cada uma contém e conte frequência por padrão. 1 ocorrência = escreva no código da página; 2 = duplicação suspeita, ainda não bloco; 3+ = vira bloco.
2. **Implemente** — `components/blocks/<nome>.tsx` compondo componentes do DS existentes (nunca hand-roll), `cva` pra variants, `cn` pra merge. Demo em `components/demos/blocks/<nome>-variants.tsx` (2-3 variantes reais), doc em `content/docs/blocks/<nome>.mdx`.
3. **Registre** — slug em `content/docs/blocks/meta.json`, demos em `mdx-components.tsx`, linha na tabela do `content/docs/blocks/index.mdx`, item em `scripts/registry.manifest.mjs` (`type: 'registry:block'`).
4. **Valide** — `npx tsc --noEmit` + `node scripts/audit-antipatterns.mjs` + `npm run build`. Entrada em `data/changelog.json`, commit, deploy.

## Regras tipográficas

- **P22 Mackinac** (display) é usado **apenas em H1, H2, H3** — H4 e menores em Inter (Sans). Não force Mackinac em texto pequeno: leitura ruim.
- **Eyebrows** (micro-labels acima de títulos): use classe `.eyebrow` (gradient da marca clipado no texto, line-height 1, padrão único no DS). Não escreva `uppercase tracking-wide text-brand-500` à mão.
- **Letter-spacing**: já vem nos tokens (`text-h2--letter-spacing`, etc.). Não passe `style={{letterSpacing: '...'}}` à mão a menos que esteja override pontual.
- **`<h2>` em seção de LP usa `text-display` (56 px), não `text-h2` (36 px).** `text-h2` é para headings de componentes de UI (cards, painéis, data-list). Em landing pages, qualquer `<h2>` de seção recebe `font-heading text-display text-foreground text-balance`. Use `SectionHeader` para garantir isso automaticamente.

## Regras de cor — cheat sheet

| Intenção | Token / Componente |
|---|---|
| Ação primária (salvar, criar, confirmar, enviar) | `Button variant="primary"` (azul brand) |
| Ação secundária (cancelar, voltar) | `Button variant="secondary"` ou `ghost` |
| Ação destrutiva (excluir, remover) | `Button variant="danger"` |
| Estado "deu certo" (pago, ativo, conectado) | `Badge variant="success"` ou `Tag variant="success"` |
| Estado de atenção (pendente, expirando) | `Badge variant="warning"` ou `Tag variant="warning"` |
| Estado de erro (falha, recusado) | `Badge variant="error"` ou `Tag variant="error"` |

## Badge vs. Tag — confusão comum

- **`<Badge shape="tag">`** — retangular, uppercase, bold. **Apenas** pra labels tipo "NOVO" em changelog/roadmap.
- **`<Tag>`** — pill arredondado, mixed-case, fundo colorido suave. **Padrão Umbler Talk** para etiquetas de contato (Proposta, Sales, etc.).

Quando estiver listando pessoas/contatos/atendentes com etiquetas coloridas, use **`<Tag>`**.

## Auditoria automática

Toda vez que você edita um arquivo `.tsx` ou `.mdx` num projeto com este plugin instalado, o hook **auto-audit** dispara e verifica anti-patterns:

- `button-hand-roll` — `<button>` com classes que duplicam o `<Button>` do DS
- `badge-hand-roll` — `<span>` com classes que duplicam `<Badge>`
- `eyebrow-hand-roll` — `<p>` com `uppercase tracking-wide` em vez de `.eyebrow`
- `alert-hand-roll` — div imitando Alert

Se for caso pedagógico legítimo (ex: doc mostrando "não faça isso"), marque com:
```tsx
{/* audit-ignore: <rule-id> — motivo */}
```

## Acessibilidade

- Use **Radix UI** em interativos críticos: Modal, Dropdown, Combobox, Tabs, Tooltip, Popover, Command Palette. Estes já vêm com Radix dentro do DS.
- Componentes simples (Button, Badge, Tag) **não** usam Radix — React + Tailwind direto.
- Sempre passe `aria-label` em botões só com ícone.

## Stack assumida

- Next.js 15+ (App Router) ou similar
- React 19
- TypeScript
- Tailwind v4 (`@theme` e `@theme inline`)
- Tokens em `app/tokens.css` (ou `tokens.css` no entry CSS)

Se o consumer está em outra stack (Vue, Svelte, Vite-only React), avise o usuário que o DS foi desenhado para Next/Tailwind v4 e a portabilidade exige adaptação manual dos tokens.

## Quando NÃO usar o DS

- Componente é one-off pra esse projeto e não vai viralizar (manter local é mais simples)
- Você está prototipando algo pra descartar
- Stack incompatível (Vue/Svelte/etc.)

Em todos os outros casos: consuma o DS.
