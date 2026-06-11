# Análise do Umbler DS — validação estratégica

> Documento para revisão. Escrito numa sessão autônoma de auditoria (2026-06-10).
> Responde às 5 perguntas levantadas + a direção de reequilíbrio (LP/e-mail/marca) e simplificação.

## TL;DR

1. **Skill vs plugin** → Não troque um pelo outro. A **skill é o núcleo** (e já é portátil); o **plugin é o "power-up"** opcional pra quem usa Claude Code (é a única forma de entregar hook + slash commands). Recomendação: manter o plugin, mas tratar a skill como produto independente e enxugar de 4 → 2 comandos.
2. **Consumibilidade** → Componentes: **funcionam em produção** (testado, HTTP 200, deps resolvem). Blocks: **eram um buraco** (404) — **corrigido nesta sessão** (11 blocks agora no registry).
3. **Valor** → Sim, gera valor — *condicionado a adoção*. O sistema é sólido; o risco existencial é "quantos produtos reais consomem". Hoje: 1 piloto. A maior alavanca não é mais código, é **colocar 1 produto real consumindo em produção**.
4. **Reequilíbrio** → O DS pendia pra produto/app. Reordenei a navegação e reenquadrei a entrada pra liderar com **LP, e-mail e tokens de marca** (o propósito original).
5. **Simplicidade** → A tela de início tinha ~5 formas de instalar. Agora tem **1 comando** + um guia "por onde começar" por objetivo.

---

## 1. Skill vs Plugin

**Fato técnico que costuma faltar na discussão:** não é "ou um, ou outro". Um plugin *contém* uma skill. O plugin do Umbler DS empacota:

| Item | Só plugin entrega? | Valor real |
|---|---|---|
| **Skill** (contexto auto-injetado + aponta pro llms.txt) | Não (skill roda sozinha) | **Alto** — é 80% do valor |
| **/umbler-audit + hook auto-audit** (script executável) | **Sim** | Alto e diferenciado — texto não roda script |
| /umbler-init, /umbler-add | Sim | Baixo — são wrappers finos de `npx shadcn add` que a skill já ensina |
| /umbler-block | Sim | Médio — é um playbook; poderia virar conteúdo de skill |

**Conclusão:**
- Trocar "plugin → só skill" **jogaria fora o hook e os comandos**. Quem propôs isso provavelmente não sabe que skill não roda script nem expõe slash command.
- Mas a skill **deve ser usável sozinha** — pra agentes fora do Claude Code (Cursor, Windsurf, agente próprio), que **não conseguem** instalar o plugin. Pra eles o caminho é `llms.txt` + a skill como regra/contexto.

**Recomendação:**
1. Manter o plugin como a distribuição completa pro Claude Code.
2. Garantir que a skill seja autocontida e publicável à parte (já está perto disso).
3. **Enxugar de 4 → 2 comandos:** fundir `/umbler-init` + `/umbler-add` num só (`/umbler-add` detecta se precisa bootstrapar), e manter `/umbler-audit`. `/umbler-block` vira seção da skill.
4. Reduzir duplicação: `CLAUDE.md` (repo) e `SKILL.md` (plugin) se sobrepõem — eleger a SKILL como fonte das convenções e o CLAUDE como operação do repo.

---

## 2. Consumibilidade (o requisito existencial)

**Componentes — OK, validado em produção:**
```
GET /r/button.json        → 200 (deps: utils, spinner resolvem p/ URL absoluta)
GET /r/umbler-ui.json     → 200 (agregador instala tudo)
GET /r/tokens.json        → 200
GET /llms.txt             → 200 (24KB, catálogo p/ agentes)
```
O endpoint é dinâmico (`app/r/[component]/route.ts` lê `registry/*.json`). `npx shadcn add <url>` copia o código pro projeto consumidor. Stack-alvo: **Next.js + Tailwind v4** (não roda em v3).

**Blocks — era o buraco, agora fechado:**
- Antes: 11 blocks documentados mas **fora do registry** → `npx shadcn add .../r/hero-block` dava 404. O `/umbler-add` ainda *prometia* um caminho `/r/blocks/` inexistente.
- Agora: os 11 blocks entraram em `scripts/registry.manifest.mjs` como `type: registry:block`, com as dependências corretas. Caem em `components/blocks/` e puxam os componentes que compõem. Ficam **fora** do agregador `umbler-ui` (instale o que precisar).

**Ressalvas honestas:**
- Distribuição é **copy-based** (shadcn): atualização não é automática — roda `add` de novo. Existe o esqueleto de um pacote `@umbler/ui` (npm) pra um canal versionado no futuro, mas ainda não é o caminho oficial.
- Só foi validado de ponta a ponta num **piloto**. Falta um consumo real em produção.

---

## 3. Valor — gera valor do jeito que está?

**Sim, com uma condição.** O sistema em si está maduro: tokens completos, ~35 componentes, 11 blocks, guidelines de marca/conversão, templates de e-mail, catálogo pra IA. A engenharia de distribuição funciona.

**O valor real aparece quando é consumido** — e é aí que mora o risco. Um DS sem adoção é um artefato bonito com valor latente. Hoje há 1 piloto e nenhum produto de produção declarado consumindo.

**Onde o valor é concreto:**
- **Anti-drift:** um produto novo nasce no padrão da marca sem decisão de cor/tipo/espaço.
- **Velocidade de LP:** hero + pricing + cta + faq prontos = uma landing em horas, não dias.
- **Alavanca de IA:** `llms.txt` + skill fazem agentes gerarem UI on-brand — exatamente o propósito original.

**A maior alavanca agora não é código — é adoção.** Sugestão: escolher **uma LP real** da Umbler e montá-la 100% com o DS. Isso (a) prova o valor, (b) expõe o atrito real, (c) vira o melhor showcase.

---

## 4. Reequilíbrio: produto → LP / e-mail / marca

O propósito original (encurtar caminho de LPs, centralizar a marca, tokens pra e-mail/IA/materiais) estava ofuscado por um foco em componentes de produto. Mudanças desta sessão:

- **Navegação reordenada:** `Foundations → Marketing → Email → Blocks → Components → Patterns`. Marca e LP sobem; componentes de produto descem.
- **Tela de início reenquadrada:** abre com "base de marca pra LP, e-mail e produto" e um guia *por objetivo* (montar LP / criar e-mail / usar tokens / pegar componente).
- **Home** com tagline alinhada ao propósito.
- **Índice de Blocks** agora lidera com os blocks de **Landing/Marketing** (estavam ausentes da tabela) e separa os de produto.

**Recomendações pra pesar ainda mais nesse lado (validar):**
- Tornar o **showcase de LP** real e linkado da home (hoje "em breve").
- Expandir e-mail: mais templates (boas-vindas, recuperação, fatura) e um guia de tokens→inline.
- Criar uma página **"Tokens para outros materiais"** (Figma, IA, apresentações) — o lado "materiais da empresa" do propósito ainda é fraco.

---

## 5. O que mudou nesta sessão

- Versões alinhadas (plugin/marketplace/`@umbler/ui` → 0.2.0).
- README reescrito (de ~200 linhas stale → enxuto e factual): corrigido `tokens.css`, fontes (Mackinac), Fumadocs 15, roadmap real.
- CLAUDE.md corrigido (Fumadocs, caminho do registry, roadmap, passo de criação de componente).
- `colors.mdx` enxuto + migrado pra `VariantGrid`.
- Arquivo-lixo `.nexterr.html` removido do git.
- Registry ressincronizado (badge ganhou variantes `*-solid`; button alinhado à fonte).
- **11 blocks adicionados ao registry** (consumibilidade).
- `/umbler-add` e docs corrigidos (caminho de blocks que dava 404).
- Tela de início simplificada + navegação reequilibrada + índice de blocks reescrito.

## 6. Próximos passos sugeridos (pra validar com você)

1. **Adoção:** montar 1 LP real da Umbler 100% no DS (maior alavanca de valor).
2. ~~**Plugin:** fundir `/umbler-init` em `/umbler-add`; mover `/umbler-block` pra skill (4 → 2 comandos).~~ ✅ Feito (plugin v0.3.0).
3. ~~**E-mail/materiais:** expandir templates + página de tokens pra Figma/IA.~~ ✅ Feito (password-reset, confirmation, Tokens em e-mail, Tokens fora do código).
4. **Atualização versionada:** decidir se o canal `@umbler/ui` (npm) vira oficial ou se copy-based basta.
