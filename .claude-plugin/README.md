# Umbler DS — Claude Code Plugin

Plugin oficial do Umbler Design System para Claude Code. Empacota:

- **1 skill** — contexto completo do DS (convenções, tokens, regras críticas, catálogo)
- **4 slash commands** — `/umbler-init`, `/umbler-add`, `/umbler-audit`, `/umbler-block`
- **1 hook** — auto-audit após edição de `.tsx`/`.mdx`
- **1 script** — `audit-antipatterns.mjs` portátil

## Instalação

Pelo Claude Code, abra **Diretório → Plugins → Sua organização** e instale o **Umbler DS**.

Ou via CLI:

```bash
/plugin add umbler-ds
```

## Uso rápido

Em um projeto Next.js + Tailwind v4:

```
/umbler-init                    # bootstrap (tokens + cn + components.json)
/umbler-add button              # adiciona um componente
/umbler-add dialog
/umbler-audit                   # verifica hand-rolls
```

Quando precisar de um organismo composto:

```
/umbler-block                   # fluxo Interface Inventory → bloco
```

## Estrutura

```
.claude-plugin/
├── plugin.json                  manifest
├── marketplace.json             marketplace standalone
├── skills/
│   └── umbler-ds/SKILL.md       contexto do DS
├── commands/
│   ├── umbler-init.md
│   ├── umbler-add.md
│   ├── umbler-audit.md
│   └── umbler-block.md
├── hooks/
│   └── hooks.json               auto-audit on edit
└── scripts/
    └── audit-antipatterns.mjs   portátil
```

## Versionamento

A versão do plugin segue a versão do DS. Ao publicar release nova do DS:

1. Atualizar `version` em `plugin.json`
2. Atualizar `version` em `marketplace.json`
3. Commit + tag + push

Se você adotou o plugin, o catálogo de componentes vem sempre fresh via WebFetch de `https://umbler-ds.vercel.app/llms.txt` — não precisa atualizar o plugin pra ver novos componentes da registry.

## Convenções de evolução

- **Não quebre slash commands existentes** — se mudar comportamento, libere flag `--legacy` ou versione o comando
- **Skill é fonte da verdade** das regras — mantenha sincronizada com `CLAUDE.md` do repo
- **Hook é warning, não bloqueio** — pre-commit no repo DS bloqueia, hook do plugin só avisa
