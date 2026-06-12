# Referências criativas pra LPs

Esta pasta tem **inspirações de layout, ritmo e copy** raspadas de LPs que funcionam bem.
O `/umbler-lp` lê estes arquivos antes de gerar pra ampliar o repertório criativo.

## O que essas referências SÃO

- Padrões de estrutura (ordem das seções, densidade, ritmo)
- Truques de copy (loops abertos, especificidade numérica, headlines na dor)
- Ideias de layout (split assimétrico, cards com peso visual diferente, tipografia oversized)
- Provas sociais com formato não-genérico (rating embutido no card, foto + logo da empresa)

## O que essas referências NÃO SÃO

- **NÃO** são fonte de marca. Fonte, cor, radius, sombra, motion → tudo vem do Umbler DS.
- **NÃO** são template a copiar. Pegamos a *ideia* (ex.: "card de testimonial com foto + nota").
- **NÃO** sobrescrevem `UMBLER.md` ou `products.md`. Conflito → vence Umbler.

## Como o /umbler-lp usa isso

1. Lê **todos** os arquivos `references/*.md` (exceto este README) antes de gerar.
2. Para cada seção da estrutura canônica, escolhe **uma** ideia criativa de uma das referências.
3. Aplica usando blocks e tokens do DS — nunca hand-roll CSS pra imitar o visual da referência.
4. Combina padrões de fontes diferentes na mesma LP (não cola um site inteiro).

## Como adicionar uma nova referência

```bash
# Raspar via firecrawl ou WebFetch, salvar como markdown limpo
.claude-plugin/knowledge/references/<nome-do-site>.md
```

Cada arquivo deve abrir com:
- **URL original**
- **Vibe em uma frase**
- **3-5 padrões úteis** (com nome curto, ex.: "loop aberto no hero")

Depois vem o conteúdo bruto da LP (texto, na ordem das seções) — a IA precisa do contexto cru pra entender o ritmo.
