---
description: Varre o repo atrás de hand-rolls que duplicam componentes do Umbler DS
---

Rode a auditoria de anti-patterns do Umbler DS no projeto atual.

## 1. Execute o auditor

```bash
node ${CLAUDE_PLUGIN_ROOT}/scripts/audit-antipatterns.mjs
```

O script varre os caminhos comuns (`components/`, `app/`, `src/`, MDX em `content/`) procurando 4 padrões de hand-roll:

| Regra | Detecta | Como corrigir |
|---|---|---|
| `button-hand-roll` | `<button>` com classes que duplicam `<Button>` | Importe `Button` do DS |
| `badge-hand-roll` | `<span>` com classes que duplicam `<Badge>` | Importe `Badge` ou `Tag` |
| `eyebrow-hand-roll` | `<p>` com `uppercase tracking-wide text-brand-*` | Use classe `.eyebrow` |
| `alert-hand-roll` | div imitando layout de Alert | Importe `Alert` |

## 2. Para cada ofensor reportado

Mostre ao usuário:
- Arquivo + linha
- Trecho ofensor
- Como deve ficar (com import correto do DS)

## 3. Se o usuário pedir, aplique os fixes

Para cada hand-roll:
1. Adicione o import do componente do DS (se necessário)
2. Substitua o JSX inline pelo componente

## 4. Casos pedagógicos legítimos

Se um trecho for **intencionalmente** um hand-roll (ex: doc mostrando "DON'T do this"), instrua o usuário a marcar com:

```tsx
{/* audit-ignore: <rule-id> — motivo curto */}
```

O auditor pula a linha seguinte ao comentário.

## 5. Saída

Reporte:
- ✅ "0 ofensores" se limpo
- 🟡 "N ofensores" com tabela e oferta de auto-fix
