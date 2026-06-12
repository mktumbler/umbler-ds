# UMBLER.md — Contexto de marca para IAs

> **O que é**: arquivo único com tokens, voz, regras e componentes do Umbler Design System.
> **Quando usar**: cole esta URL (ou conteúdo) no prompt da sua IA (Cursor, Claude Code, Windsurf, ChatGPT, Gemini) antes de pedir LP, e-mail, apresentação ou qualquer material no padrão Umbler.
> **Fonte viva**: https://umbler-ds.vercel.app/UMBLER.md — sempre atualizado a partir do DS.
>
> **Como mandar bem**:
> 1. Sempre prefira componentes do registry shadcn em `https://umbler-ds.vercel.app/r/<nome>.json` em vez de hand-roll de HTML/CSS
> 2. Use exclusivamente os tokens semânticos listados abaixo (`bg-surface`, `text-foreground`, etc.)
> 3. Aplique as regras de voz/copy literalmente — em-dash em pt-BR é proibido, "solução completa" também
> 4. Para catálogo completo de componentes com props: https://umbler-ds.vercel.app/llms.txt

---

## Guia operacional (skill)

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

---

## Tokens (CSS @theme)

Todos os tokens da marca, prontos para `app/tokens.css` em Tailwind v4. Use **sempre via classes utilitárias** geradas pelo Tailwind (`bg-surface`, `text-foreground-muted`, etc.) — nunca hardcode hex.

```css
@theme {
/* -------- Brand — Umbler Blue -------- */
  --color-brand-50: #ebf1ff;
  --color-brand-100: #d0dfff;
  --color-brand-200: #a3c0ff;
  --color-brand-300: #6b99ff;
  --color-brand-400: #3d74ff;
  --color-brand-500: #1a5cff;
  --color-brand-600: #0044d9;
  --color-brand-700: #0033b0;
  --color-brand-800: #002488;
  --color-brand-900: #001866;

  /* -------- Neutral — Surface & Background -------- */
  --color-neutral-50: #f4f5fa;
  --color-neutral-100: #e8eaf2;
  --color-neutral-200: #c4cae0;
  --color-neutral-300: #959fbf;
  --color-neutral-400: #6e7799;
  --color-neutral-500: #4a5278;
  --color-neutral-600: #2a3356;
  --color-neutral-700: #1a2240;
  --color-neutral-800: #111733;
  --color-neutral-900: #0a0f20;
  --color-neutral-950: #030614;

  /* -------- Semantic — Success -------- */
  --color-success-50: #e8fce8;
  --color-success-100: #d0f5d0;
  --color-success-300: #9cd99c;
  --color-success-500: #5cb85c;
  --color-success-600: #438c43;
  --color-success-900: #316631;

  /* -------- Semantic — Warning -------- */
  --color-warning-50: #fffaeb;
  --color-warning-100: #faf1d4;
  --color-warning-300: #f5df9f;
  --color-warning-500: #f2c94e;
  --color-warning-600: #bf9d36;
  --color-warning-900: #7a6420;

  /* -------- Semantic — Error / Danger -------- */
  --color-error-50: #fff1f0;
  --color-error-100: #fad7d4;
  --color-error-300: #f29c96;
  --color-error-500: #f2594e;
  --color-error-600: #c24036;
  --color-error-900: #9c2f27;

  /* -------- Semantic — Info (matches brand) -------- */
  --color-info-50: #ebf1ff;
  --color-info-100: #d0dfff;
  --color-info-300: #6b99ff;
  --color-info-500: #1a5cff;
  --color-info-600: #0044d9;
  --color-info-900: #001866;

  /* -------- Typography -------- */
  --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-heading: 'p22-mackinac-pro', Georgia, serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;

  --text-display: 3.5rem;                  /* 56px — destaque de seção */
  --text-display--line-height: 1.05;
  --text-display--font-weight: 500;
  --text-display--letter-spacing: -0.1rem;

  --text-display-lg: 4.5rem;               /* 72px — hero padrão */
  --text-display-lg--line-height: 1.05;
  --text-display-lg--font-weight: 500;
  --text-display-lg--letter-spacing: -0.15rem;

  --text-display-xl: 6rem;                 /* 96px — splash */
  --text-display-xl--line-height: 1.0;
  --text-display-xl--font-weight: 500;
  --text-display-xl--letter-spacing: -0.2rem;

  --text-display-2xl: 8rem;                /* 128px — impacto máximo */
  --text-display-2xl--line-height: 0.95;
  --text-display-2xl--font-weight: 500;
  --text-display-2xl--letter-spacing: -0.4rem;

  --text-h1: 3rem;                         /* 48px */
  --text-h1--line-height: 1.1;
  --text-h1--font-weight: 500;
  --text-h1--letter-spacing: -0.1rem;

  --text-h2: 2.25rem;                      /* 36px */
  --text-h2--line-height: 1.2;
  --text-h2--font-weight: 500;
  --text-h2--letter-spacing: -0.05rem;

  --text-h3: 1.75rem;         /* 28px */
  --text-h3--line-height: 1.25;
  --text-h3--font-weight: 500;

  --text-h4: 1.375rem;        /* 22px */
  --text-h4--line-height: 1.35;
  --text-h4--font-weight: 500;

  --text-h5: 1.125rem;        /* 18px */
  --text-h5--line-height: 1.4;
  --text-h5--font-weight: 500;

  --text-h6: 1rem;            /* 16px */
  --text-h6--line-height: 1.4;
  --text-h6--font-weight: 500;

  --text-body-lg: 1.125rem;   /* 18px */
  --text-body-lg--line-height: 1.6;

  --text-body: 1rem;          /* 16px */
  --text-body--line-height: 1.6;

  --text-body-sm: 0.875rem;   /* 14px */
  --text-body-sm--line-height: 1.5;

  --text-caption: 0.75rem;    /* 12px */
  --text-caption--line-height: 1.4;
  --text-caption--font-weight: 500;

  /* -------- Spacing (4px base) -------- */
  --spacing-0-5: 0.125rem;    /* 2px  — micro */
  --spacing-1:   0.25rem;     /* 4px  — micro */
  --spacing-1-5: 0.375rem;    /* 6px  — micro */
  --spacing-2:   0.5rem;      /* 8px  — componente */
  --spacing-3:   0.75rem;     /* 12px — componente */
  --spacing-4:   1rem;        /* 16px — componente */
  --spacing-5:   1.25rem;     /* 20px — componente */
  --spacing-6:   1.5rem;      /* 24px — componente */
  --spacing-8:   2rem;        /* 32px — seção */
  --spacing-12:  3rem;        /* 48px — seção */

  /* -------- Radius -------- */
  --radius-sm: 0.375rem;      /* 6px */
  --radius-md: 0.625rem;      /* 10px */
  --radius-lg: 1rem;          /* 16px */
  --radius-xl: 1.5rem;        /* 24px */
  --radius-2xl: 2rem;         /* 32px — containers grandes (sections, hero) */
  --radius-3xl: 2.5rem;       /* 40px — splashes, ilustrações */
  --radius-full: 9999px;

  /* -------- Motion -------- */
  --duration-instant: 80ms;     /* feedback tátil — active press */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
  --duration-slowest: 1000ms;   /* hero reveals, splash transitions */

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in: cubic-bezier(0.55, 0, 0.78, 0);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* hero text reveal — fast in, long settle */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);    /* card hover, mid-strength out */
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1); /* scroll-linked, panel toggle */

  /* -------- Stagger (delay base para sequências) -------- */
  --stagger-tight:   40ms;      /* lista densa, ícones em linha */
  --stagger-default: 80ms;      /* card grid, feature list */
  --stagger-relaxed: 140ms;     /* manifesto, hero copy reveals */

  /* -------- Blur (backdrop, glass effects) -------- */
  --blur-sm: 4px;
  --blur-md: 8px;
  --blur-lg: 16px;
  --blur-xl: 32px;

  /* -------- Loader (gradiente da marca) -------- */
  --color-loader-a: #8bbcf8;    /* azul claro */
  --color-loader-b: #f8c4b8;    /* salmão */

  /* -------- Brand auxiliar — WhatsApp -------- */
  --color-whatsapp: #25d366;    /* verde oficial WhatsApp — preservado */

  /* -------- Layout -------- */
  --container-max: 1200px;
  --grid-gutter: 1.5rem;       /* 24px */
  --grid-margin: 2rem;         /* 32px */

  /* -------- Breakpoints -------- */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

@theme inline {
--color-surface:               var(--surface);
  --color-surface-subtle:        var(--surface-subtle);
  --color-border:                var(--border);
  --color-border-strong:         var(--border-strong);
  --color-foreground:            var(--foreground);
  --color-foreground-secondary:  var(--foreground-secondary);
  --color-foreground-muted:      var(--foreground-muted);
  --color-foreground-subtle:     var(--foreground-subtle);
  --color-control-track:         var(--control-track);
  --color-control-hover:         var(--control-hover);
  --color-tooltip-bg:            var(--tooltip-bg);
  --color-tooltip-fg:            var(--tooltip-fg);

  --shadow-xs:   var(--shadow-xs-val);
  --shadow-sm:   var(--shadow-sm-val);
  --shadow-md:   var(--shadow-md-val);
  --shadow-lg:   var(--shadow-lg-val);
  --shadow-xl:   var(--shadow-xl-val);
  --shadow-glow: var(--shadow-glow-val);
  --shadow-cta:  var(--shadow-cta-val);
}
```

---

## Voz e tom

Aplicação do [tom de voz](https://umbler-ds.vercel.app/docs/brand#tom-de-voz) em cada contexto específico de copy.

> **De onde vem este operacional**
>
> A [síntese de tom](https://umbler-ds.vercel.app/docs/brand#tom-de-voz) define o espírito: competente, ambicioso, premium, mentor sem rebaixar o cliente. Esta página é o **operacional**: como esse tom se aplica em cada contexto específico de copy.

## Mistura ideal de tom

Em proporção, qualquer copy da Umbler deve ser:

| Componente | Peso |
| --- | --- |
| Clareza e objetividade | 40% |
| Energia e convicção | 25% |
| Ambição e personalidade | 20% |
| Proximidade e humanidade | 10% |
| Humor (quando couber) | 5% |

> **Por que a mistura importa (diagnóstico de copy estranha)**
>
> Sai dessa mistura e a copy começa a soar genérica (faltou personalidade), ou pomposa (sobrou ambição), ou friozinha (faltou humanidade). Volta pra mistura quando a copy parecer ter "ficado estranha" e você não souber dizer por quê.

## Espectro por tipo de conteúdo

### Headlines

Fortes, claras, memoráveis, orientadas a benefício e resultado. Sem jargão.

> **Por que o headline só precisa vender a próxima linha**
>
> Devem fazer o leitor **querer ler a próxima linha** (Sugarman: a função do headline é vender o subheadline).

**Exemplos certos:**
- "Clone seu melhor SDR com IA"
- "Amplie sua equipe, não os custos"
- "O chatbot que dá superpoderes para o seu WhatsApp"
- "Tráfego pago gera clicks. Nós transformamos em leads."

**Padrão a evitar:** "Solução completa para sua empresa", "Plataforma de gestão integrada".

### Sub-headlines

Explicam rapidamente, tiram ambiguidade, **traduzem a promessa em termos concretos**. Aqui mora a especificidade que o headline não comporta.

**Exemplos certos:**
- "Tenha agentes de IA treinados para sua empresa, atendendo no WhatsApp 24 horas por dia."
- "Potencialize a gestão, automatize o atendimento e organize as conversas no WhatsApp de forma eficiente."

### CTAs

Diretos, orientados a ação, sem burocracia. Foco em **experimentar, ver, começar, crescer**. Nunca abstratos.

| Posição | Texto | Quando |
| --- | --- | --- |
| Hero | "Experimente por 7 dias" | Default para LPs de produto |
| Navbar | "Experimente grátis" | Sempre visível |
| Variante | "Quero experimentar" | Para destacar agência do leitor |
| Enterprise | "Falar com vendas" | Contas maiores, leads quentes |

**Anti-pattern absoluto:** nunca "Saiba mais" como CTA principal.

Se a única coisa que você consegue prometer é "mais informação", a copy anterior falhou.

### Features

Título curto (benefício) + descrição (2-3 linhas, como resolve). **Centrado em outcomes, não em specs.**

> **Por que outcome e não spec**
>
> O usuário não compra "API REST", compra "integra com qualquer sistema em minutos".

| Componente | Conteúdo |
| --- | --- |
| Título | O benefício, em 3-5 palavras |
| Descrição | Como resolve, em 2-3 linhas |
| Verbos | Concretos: responde, qualifica, agenda, organiza, encaminha |

### FAQs

Claras, tranquilizadoras, honestas, **anti-fricção**. Cada pergunta antecipa uma objeção real; cada resposta a desarma sem rodeio.

**Tom:** "Faz, sim. Funciona assim. Aqui está o que muda no seu time." Não "Excelente pergunta! Nossa plataforma oferece..."

### Conteúdo institucional

Seguro, aspiracional, consistente, **sem ser pomposo**. Institucional fala "quem somos e por que existimos"; produto fala "o que faz e o resultado". Nunca trocar os dois.

> **Quanto de ambição cabe no institucional**
>
> Aqui a marca pode soltar a ambição um pouco mais — mas continua provando, não anunciando.

## Palavras de poder

Verbos e adjetivos que **carregam ambição com prova**. Use quando a copy precisar do "salto" de energia, sem cair em exagero.

```
clone · transforme · amplie · automatize · potencialize · incansavelmente
inteligente · 24/7 · sem amarras · ambição · crescer · escalar · avançar
conquistar · impulsionar · evoluir · multiplicar
```

## Campos semânticos da marca

Vocabulário próprio que tece consistência entre páginas, sem cair em jargão:

```
crescer · acelerar · vender · converter · escalar · operar melhor
atender melhor · automatizar · organizar · ganhar velocidade
ter controle · ampliar equipe sem ampliar custo · marketing · vendas
performance · ambição · resultado · inteligência · evolução · avanço
```

## Frases e territórios verbais aprovados

- **"Crescimento que realmente importa."**
- **"Ambição inteligente."**
- **"Vender com Umbler."**
- **"Operação comercial inteligente."**
- **"Sempre à altura da ambição."**

Use literalmente ou como ponto de partida para variações fiéis ao mesmo espírito.

## Regra dura — sem em-dash em pt-BR

Em copy visível ao usuário, use vírgula, ponto, dois-pontos ou parênteses — nunca `—`.

> **Por que o em-dash está banido da copy pt-BR**
>
> `—` (em-dash) **não é natural** em português brasileiro. Soa estrangeiro/acadêmico.

| | Exemplo |
| --- | --- |
| ❌ | "Distribuição por regra, handoff IA↔humano no momento certo — e histórico no CRM sem copiar e colar." |
| ✅ | "Distribuição por regra, handoff IA↔humano no momento certo, com histórico no CRM sem copiar e colar." |

- Hífen curto `-` em palavras compostas (multi-canal, pós-venda) continua permitido.
- Escopo: **toda copy visível** ao usuário — headlines, sub-headlines, manifestos, body, CTAs, meta tags, tooltips.
- A doc do DS pode usar em-dash livremente (é texto técnico, não marketing).

> **Como a regra do em-dash é validada (audit-antipatterns)**
>
> Esta regra é validada automaticamente pelo `audit-antipatterns.mjs` (regra `em-dash-copy`) em rotas de landing real — `app/(landing)/**`, `app/(home)/**`, `content/docs/marketing/showcase/**`. A doc técnica (`content/docs/**`) fica livre porque não é copy visível ao usuário final, é material de referência. Para exceções pedagógicas em landing, use a pragma `{/* audit-ignore: em-dash-copy */}`.

---

## Anti-patterns de copy

Os erros que **achatam** a marca — desvios de posição, não bugs gramaticais. Evite-os explicitamente em copy, design, conteúdo e produto.

## Reduções de marca

### Reduzir Umbler a "chatbot"

> ❌ "O melhor chatbot do mercado para WhatsApp."

**Faça em vez:** "Plataforma de crescimento com CRM + IA, ancorada no WhatsApp."

> **Por que chatbot é feature, não marca**
>
> Chatbot é **uma feature**, não a marca. Umbler é a infraestrutura de crescimento que inclui agentes IA + CRM + automação + atendimento. Apequenar a categoria é o caminho mais rápido pra cair no preço de mercado de chatbot (R$ 49/mês).

### Reduzir Umbler a "CRM tradicional"

> ❌ "Gestão de relacionamento com seus clientes."

**Faça em vez:** "CRM que não parece CRM" ou "A estrutura comercial que cresce com você."

> **Por que não posicionar na categoria CRM tradicional**
>
> CRM tradicional é o que a Umbler **substitui**, não o que a Umbler **é**. A categoria tradicional carrega bagagem ruim: chato, burocrático, "ninguém usa". Posicionar dentro dela é abrir mão da diferenciação.

### Esquecer o WhatsApp

> ❌ "Também integramos com WhatsApp."

O WhatsApp é o **canal central** da operação Umbler — não secundário.

> **Por que o WhatsApp é posição, não integração**
>
> Marcas concorrentes têm WhatsApp como um conector entre outros. A Umbler nasceu sobre ele. Copy que trata o canal como "também integramos com WhatsApp" perde a posição.

### Tratar IA como buzzword

> ❌ "Inteligência artificial de ponta para revolucionar seu atendimento."

**Faça em vez:** "Agentes IA treinados com o conhecimento da sua empresa, respondendo no WhatsApp 24h."

> **Por que IA só aparece com uso aplicado**
>
> A força da IA na Umbler é o **uso aplicado e operacional** (responde no WhatsApp, qualifica, agenda, encaminha). Toda vez que a IA aparece como adjetivo de marketing sem o uso por trás, vira hype cosmético — exatamente o que a marca rejeita.

## Erros de tom

### Deixar a marca burocrática

> ❌ "Nossa solução oferece..."

A Umbler quer parecer **força**, não peso morto. Nada de copy administrativa ou manual.

> **Por que copy burocrática mata a posição**
>
> Copy administrativa, manual, "nossa solução oferece" — tudo isso joga a marca pra categoria errada (software corporativo legado). Sai daqui.

### Deixar engraçada demais

> ❌ Memes, emojis em série, gírias forçadas.

Humor é permitido (5% da mistura), mas **dark, fino e inteligente** — nunca piada de stand-up.

> **Por que o humor tem teto de 5%**
>
> Copy engraçadinha demais custa credibilidade. Persona Umbler é gestor sob pressão; ele não tem paciência pra cute.

### Ignorar a ambição

> ❌ "Uma ferramenta a mais para te ajudar no dia a dia."

A marca é **seríssima, forte, ambiciosa** — nunca "humilde ajudinha".

> **Por que ambição zero afasta a persona**
>
> Copy que se posiciona como "humilde ajudinha" entrega ambição zero — e ambição zero é exatamente o que a persona NÃO está procurando. Quem busca Umbler quer crescer, não ter "uma ajudinha".

### Heroína da própria narrativa

> ❌ "Revolucionamos a forma como empresas vendem."

**Faça em vez:** "Você cresce sobre uma infraestrutura inteligente. A Umbler arma você."

> **Por que a Umbler é mentora e não heroína**
>
> A Umbler é **mentora**, não heroína. O cliente é o herói da história de crescimento. Quando a marca rouba a cena, o leitor não se vê na narrativa — e sai sem se conectar.

## Erros de prova

### "Revolucionário" sem prova

> ❌ "Revolucionário", "disruptivo", "transformador", "inovador".

**Faça em vez:** mostre o número, o caso, o screenshot. "60% mais conversão" vence "revolucionário" todo dia.

> **Por que adjetivos gratuitos perdem duas vezes**
>
> A palavra "revolucionário" (e amigos) é gratuita. Qualquer um pode usar. Quando a Umbler usa, perde por não conseguir provar — e perde duas vezes porque agora soa como qualquer concorrente.

### Integração total que não existe

**Copy não pode prometer integração que ainda não existe.** Se duas partes ainda não conversam, diga "trabalhamos com [produto A] e [produto B]" — não "integrados em uma única plataforma" — até que efetivamente conversem.

> **Contexto: produtos ainda em costura**
>
> A Umbler está costurando produtos (Agente IA + CRM + Chatbot + Email + Cloud) ao longo do tempo. Algumas conexões já são reais; outras ainda não. Prometer integração inexistente fura confiança na primeira pergunta de pré-venda.

### Promessas vagas

> ❌ "Resultados incríveis em poucos dias."
> ❌ "Transformação digital para sua empresa."

A Umbler tem números (`+60 mil empresas`, `Meta Business Partner`) — use eles.

> **Por que promessa sem corpo soa vazia**
>
> Promessas sem corpo (sem número, sem mecanismo, sem caso) são lidas como vazias mesmo quando são verdadeiras.

## O teste final

Antes de publicar, leia a copy candidata e pergunte:

1. Isso parece coisa que **a Umbler** diz? (Ou poderia ser de outra marca?)
2. Tem algum dos anti-patterns acima?
3. A persona-alvo (gestor sob pressão) leria isso e **acreditaria**?

Se um dos três responde "não", refaça.

---

## Headlines (conversão)

Headline é a peça **mais cara** da landing: se ele falha, todo o resto fica sem leitor.

## Frameworks expert

### Schwartz — Mass Desire

> O headline **não cria desejo**. Canaliza desejo que já existe no mercado.

Desejos existentes na persona-alvo Umbler:

- "Crescer receita sem crescer headcount"
- "Não perder mais vendas no WhatsApp"
- "Escalar operação sem complexidade"
- "Provar pra liderança que o investimento em IA gerou retorno"

**Aplicação.** Antes de escrever, pergunte: qual desejo desta lista o headline canaliza? Se nenhum, está inventando.

### Hopkins — Specificity Doctrine

> Específico vence genérico, sempre.

| Genérico | Específico |
| --- | --- |
| "Resposta rápida" | "Resposta em 3 segundos" |
| "Mais conversão" | "60% mais conversão" |
| "Muitas empresas confiam" | "+60 mil empresas confiam" |
| "Atende rápido" | "Responde 24h, sem você dormir mal" |

Números, durações, quantidades, condições — qualquer coisa que **demonstre medição real** carrega credibilidade.

### Halbert — Starving Crowd Test

> Se o headline pudesse ser de qualquer concorrente, é genérico.

**Teste.** Substitua "Umbler" por "[Concorrente X]" no headline. Faz sentido? Então o headline não tem identidade.

> "Para equipes que não aceitam perder vendas" — só faz sentido com Umbler atrás (canal WhatsApp + cultura ambição).
>
> "A melhor plataforma para sua empresa" — qualquer um pode dizer.

Pergunta secundária do Halbert: **"O que tira o sono do Sales Manager às 2 da manhã?"** O headline ataca esse desejo.

### Ogilvy — Research-First

> Headlines baseados nos dados do ICP, não em intuição.

Ler [Personas](https://umbler-ds.vercel.app/docs/marketing/conversion/personas) e [Mensagem](https://umbler-ds.vercel.app/docs/marketing/conversion/mensagem) antes de redigir. Os pilares e dores já estão mapeados — o headline canaliza um deles.

### Sugarman — Slippery Slide

> O headline existe **APENAS** para fazer o leitor ler o subheadline.

> "A Umbler é o CRM com IA mais usado do Brasil." — terminou, ninguém precisa ler o subheadline.
>
> Vs. "Clone seu melhor SDR com IA." — agora o leitor quer saber **como**.

> **A psicologia do Slippery Slide e os sinais de problema**
>
> Se o leitor pode parar após o headline sem sentir curiosidade, falhou. Headline não é manifesto fechado em si mesmo; é gatilho para a próxima linha. **Sinal de problema:** headline que é frase completa, sem brecha — informa tudo e não deixa pergunta aberta.
> 
> No framework do Ogilvy, o sinal de problema equivalente: se o headline veio de brainstorm criativo sem checar persona, provavelmente está errado.

## Fórmulas em português B2B SaaS

Cinco esqueletos testados:

## Lead types — qual usar quando

> **Como o awareness determina o lead type**
>
> Awareness level determina o tipo de **abertura** da página — errar o tipo afasta a persona. Regra prática: se o leitor já está logado mentalmente na Umbler, vai direto pro **Offer Lead**. Se está descobrindo o problema, **Story** ou **Problem-Solution**. **Promise Lead** funciona melhor com leitor experiente que já comparou opções.

## O teste final do headline

Quatro perguntas, em ordem:

1. **Canaliza desejo existente** da persona? (Schwartz)
2. **É específico** o suficiente pra dar credibilidade? (Hopkins)
3. **Não poderia ser de outro?** (Halbert)
4. **Cria curiosidade pro subheadline?** (Sugarman)

Se uma resposta é "não", reescreva. As 4 são portões — não pode pular nenhum.

---

## Checklist de copy/conversão

Toda LP, antes de ir pro ar (ou pra tradução, ou pra A/B test), passa por esta revisão humana.

> **O que o review humano valida (e o que ele não é)**
>
> Não é "ler de novo procurando erro de digitação" — é confirmar que **a peça faz o que precisa fazer**: cada item do checklist corresponde a uma decisão persuasiva, de marca ou técnica que precisa estar de pé antes do deploy.

## Checklist de review

### Hero e mensagem
- [ ] Hero comunica valor em menos de 5 segundos
- [ ] Headline passa no [Starving Crowd Test](https://umbler-ds.vercel.app/docs/marketing/conversion/headlines#halbert-starving-crowd-test) (não poderia ser de qualquer concorrente)
- [ ] Sub-headline expande a promessa em termos concretos, sem repetir o headline
- [ ] CTA primário é ação concreta, não "Saiba mais"

### Social proof
- [ ] Social proof aparece **antes do terceiro scroll**
- [ ] Pelo menos um sinal de credibilidade (Meta Business Partner, +60k empresas, logo cloud)
- [ ] Testimonials, se houver, são específicos (números, função, empresa) — não genéricos

### Estrutura
- [ ] Sequência de seções segue lógica persuasiva ([ver](https://umbler-ds.vercel.app/docs/marketing/conversion/estrutura#lógica-de-persuasão-páginas-importantes))
- [ ] Cada seção tem **propósito persuasivo claro** — nenhuma seção "decorativa"
- [ ] Tension-release está alternando (não 5 seções de alívio seguidas)
- [ ] Manifesto (se houver) está posicionado antes do pricing, não logo no início

### Voz e copy
- [ ] Copy alinhada com [tom Umbler](https://umbler-ds.vercel.app/docs/marketing/brand/voice) (mistura 40/25/20/10/5)
- [ ] Sem em-dash (`—`) em copy pt-BR ([regra dura](https://umbler-ds.vercel.app/docs/marketing/brand/voice#regra-dura-—-sem-em-dash-em-pt-br))
- [ ] Sem buzzwords vazias ("revolucionário" sem prova, "transforme seu negócio")
- [ ] Vocabulário da persona, não vocabulário interno do produto

### CTAs
- [ ] CTAs visíveis com contraste suficiente
- [ ] Texto do CTA é ação concreta (Experimente, Falar com vendas, Agendar demo)
- [ ] CTA aparece em momentos estratégicos (hero, após manifesto, pricing, fim)

### Mobile
- [ ] Responsividade impecável em iPhone 13 e Samsung Galaxy
- [ ] Hero mobile: texto acima, visual abaixo
- [ ] CTA sticky ou floating no scroll
- [ ] Tipografia mantém hierarquia em telas pequenas

### Motion e visual
- [ ] Animações suaves, não excessivas
- [ ] Máximo 2-3 wow moments (não fadiga visual)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Site **não parece colagem** de bibliotecas (efeitos coesos, não aleatórios)

### Técnico
- [ ] Build passa (`npm run build`)
- [ ] tsc sem erros (`npx tsc --noEmit`)
- [ ] Audit antipatterns ok
- [ ] Meta title ≤ 60 caracteres, meta description ≤ 155 caracteres
- [ ] Schema.org structured data presente (se aplicável)
- [ ] Imagens com alt text

## Anti-patterns gerais

Erros que sozinhos **disqualificam** a LP. Encontrou um — refaça antes de subir.

### Estruturais

- **Feature-first sem benefício.** "Módulo de qualificação de leads" como título de seção. O leitor não compra módulos, compra resultados.
- **Headlines genéricas.** "Solução completa para sua empresa" — qualquer SaaS dizendo a mesma coisa.
- **Excesso de seções sem propósito.** Se uma seção pode sair sem perda perceptível, sai.
- **Abrir com jargão.** "Plataforma omnichannel de relacionamento com automação de fluxos" — o leitor fechou.

### Copy

- **CTA vago.** "Saiba mais", "Clique aqui", "Entre em contato".
- **Falar só de tecnologia.** Sem mostrar resultado, virou pitch deck interno.
- **Social proof sem credibilidade.** "Muitas empresas confiam" (quantas? quais?).
- **Esconder o benefício principal.** Se o leitor precisa rolar pra entender o que o produto faz, hero falhou.

### Marca

- **Parecer automação rasa.** "Bot que responde sozinho!" — Umbler é IA aplicada, não bot.
- **Parecer CRM burocrático.** Tom administrativo, copy formal demais.
- **IA como gimmick.** "Powered by AI 🤖" — chamar atenção pra IA sem mostrar uso.
- **Marca heroína.** "Revolucionamos sua operação" — o herói é o cliente, não a Umbler.

### Conteúdo

- **Placeholder / lorem ipsum.** Inaceitável em revisão. Já era pra ter sido substituído.
- **Imagem stock sem relação com produto.** Hero com foto de "equipe sorrindo em escritório" não comunica nada.
- **Logo de cliente inventado.** Se o logo aparece, a empresa precisa ser cliente real e ter autorizado.

## Sinal de "pronto"

Não é "ficou bonito" e não é "tá perfeito". É:

1. **Cada seção tem motivo de existir** — você consegue defender por que está lá
2. **A persona-alvo se reconhece** no hero
3. **A peça passa nas 5 perguntas** do [decision framework](https://umbler-ds.vercel.app/docs/marketing/brand/decision-framework)
4. **Tecnicamente impecável** (build, tsc, audit ok)

> **Quando o problema não é a copy — suba uma camada**
>
> Se você ainda está reescrevendo a mesma seção pela 4ª vez, talvez o problema não é a copy — é a **lógica anterior** (persona errada, pilar errado, sequência errada). Suba uma camada antes de continuar puxando palavras.
---

## Recursos vivos

- **Registry shadcn**: `https://umbler-ds.vercel.app/r/<nome>.json` — instale qualquer componente com `npx shadcn@latest add`
- **Catálogo de componentes (llms.txt)**: https://umbler-ds.vercel.app/llms.txt — referência rápida de props
- **Foundations**: https://umbler-ds.vercel.app/docs/foundations — cores, tipografia, espaçamento, motion
- **Docs completas**: https://umbler-ds.vercel.app/docs

## Como este arquivo é gerado

Gerado automaticamente por `scripts/build-umbler-md.mjs` a partir de:
- `.claude-plugin/skills/umbler-ds/SKILL.md`
- `app/tokens.css`
- `content/docs/marketing/brand/voice.mdx`
- `content/docs/marketing/brand/anti-patterns.mdx`
- `content/docs/marketing/conversion/headlines.mdx`
- `content/docs/marketing/conversion/checklist.mdx`

Última geração: build do repo umbler-ds. Edite as fontes (não o output).
