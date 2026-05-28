import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sizeMap = {
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const spinnerVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  defaultVariants: { size: 'md' },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  /**
   * "orbit"  — dois pontos orbitando (loader padrão Umbler).
   * "arc"    — arco giratório, ideal para uso inline em botões.
   */
  variant?: 'orbit' | 'arc';
  /** Cor do ponto A (azul). Qualquer valor CSS. Padrão: var(--color-loader-a) */
  colorA?: string;
  /** Cor do ponto B (salmão). Qualquer valor CSS. Padrão: var(--color-loader-b) */
  colorB?: string;
  className?: string;
}

interface OrbitProps {
  px: number;
  colorA?: string;
  colorB?: string;
}

function OrbitDots({
  px,
  colorA = 'var(--color-loader-a)',
  colorB = 'var(--color-loader-b)',
}: OrbitProps) {
  const r = px / 2;
  const orbit = r * 0.55;
  const dotA = r * 0.22;
  const dotB = r * 0.18;

  return (
    <svg
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      fill="none"
      aria-hidden
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      <circle cx={r} cy={r - orbit} r={dotA} fill={colorA}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${r} ${r}`}
          to={`360 ${r} ${r}`}
          dur="900ms"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={r} cy={r + orbit} r={dotB} fill={colorB}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${r} ${r}`}
          to={`360 ${r} ${r}`}
          dur="900ms"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function Spinner({ size = 'md', variant = 'orbit', colorA, colorB, className }: SpinnerProps) {
  const px = sizeMap[size ?? 'md'];

  if (variant === 'arc') {
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        className={cn('animate-spin', className)}
        aria-hidden
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }

  return (
    <span className={cn('inline-flex items-center justify-center', className)}>
      <OrbitDots px={px} colorA={colorA} colorB={colorB} />
    </span>
  );
}
