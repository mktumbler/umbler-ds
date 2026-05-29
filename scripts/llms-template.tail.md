## Ícones

Use `@phosphor-icons/react` (já instalado). Prefira o subset SSR onde possível:
```tsx
import { Globe, ArrowRight, Check } from '@phosphor-icons/react';
import { Check } from '@phosphor-icons/react/dist/ssr'; // server components
```

## Patterns de seção (site marketing)

Importar de `@/components/demos/patterns/site/`:
- `FeatureGridSection` — grid 3 colunas com ícones Phosphor e eyebrow
- `FeatureSplitSection` — texto + mock de dashboard lado a lado
- `FeatureBentoSection` — layout assimétrico com CardAurora em fundo escuro

Fundo de hero/seção:
```tsx
import { HeroBackground } from '@/components/ui/hero-background';
// variantes: sweep (hero), cloud (seção secundária), wedge (features), arc (CTA)
```

## Eyebrow / caption

Para texto de label acima de títulos em seções de marketing:
```tsx
<p className="eyebrow">INFRAESTRUTURA · CRESCIMENTO</p>
```
Aplica: 0.75rem, weight 500, letter-spacing 0.2em, uppercase + gradiente da marca (light: azul sólido, dark: gradient brand).
