# Logos para o LogoCloud das landings showcase

Coloque aqui os arquivos de logo de clientes que aparecem em
`/showcase`, `/showcase/produto`, etc.

## Formato

- **SVG é o ideal** (vetorial, responde bem a `grayscale` CSS, leve)
- PNG com fundo transparente também serve
- Altura visual recomendada: 24-40px (controlada via prop `maxHeight`)
- Logos devem ter contraste suficiente — preto ou cor sólida, sem
  efeitos que somem em grayscale + opacity 50%

## Como o componente referencia

```tsx
import { LogoCloud } from '@/components/ui/logo-cloud';

<LogoCloud
  label="+60 mil empresas confiam"
  logos={[
    { src: '/showcase/logos/unimed.svg', alt: 'Unimed' },
    { src: '/showcase/logos/triider.svg', alt: 'Triider' },
    // ...
  ]}
/>
```

O componente aplica grayscale + opacity baixa por padrão, com hover
voltando à cor original. Tratamento visual é responsabilidade do
LogoCloud, não dos arquivos.

## Arquivos esperados (no showcase atual)

- `unimed.svg`
- `triider.svg`
- `cora.svg`
- `cna.svg`
- `anima.svg`
- `linker.svg`

Enquanto os arquivos não estão aqui, as landings caem em placeholder
silencioso (broken image alt-text). Não bloqueia build.
