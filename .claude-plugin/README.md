# Umbler DS — Claude Code Plugin

Plugin oficial do Umbler Design System para Claude Code. Empacota:

- **1 skill** — contexto completo do DS (convenções, tokens, regras críticas, catálogo, fluxo de criação de blocos)
- **2 slash commands** — `/umbler-add` (com bootstrap automático), `/umbler-audit`
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
/umbler-add umbler-ui           # primeira vez: bootstrap automático + tudo
/umbler-add hero-block          # blocks avulsos
/umbler-add dialog
/umbler-audit                   # verifica hand-rolls
```

Pra criar um bloco novo no DS, peça "quero criar um bloco" — o fluxo (Interface Inventory + regra do 3) está na skill.

## Estrutura

```
.claude-plugin/
├── plugin.json                  manifest
├── marketplace.json             marketplace standalone
├── skills/
│   └── umbler-ds/SKILL.md       contexto do DS
├── commands/
│   ├── umbler-add.md
│   └── umbler-audit.md
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
- **Skill é fonte da verdade** das convenções de uso do DS — o `CLAUDE.md` do repo aponta pra cá e só guarda operação do repo (build, estrutura, criação de componente)
- **Hook é warning, não bloqueio** — pre-commit no repo DS bloqueia, hook do plugin só avisa
