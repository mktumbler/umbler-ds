'use client';

/**
 * Progress — indicador de progresso linear e circular.
 *
 * Linear é construído sobre Radix Progress (acessível: role/progressbar +
 * aria-valuenow/min/max). Circular é um SVG independente — mesma API.
 *
 * Modos:
 *   • determinado:    passe `value` (0–max). Mostra o quanto já progrediu.
 *   • indeterminado:  omita `value` (ou passe `null`). Anima loop.
 */

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ── Variants (linear) ────────────────────────────────────────────────────────

const trackVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-control',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

const indicatorVariants = cva(
  'h-full w-full transition-transform duration-[var(--duration-base)] ease-out',
  {
    variants: {
      tone: {
        brand:   'bg-brand-500',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        error:   'bg-error-500',
      },
    },
    defaultVariants: { tone: 'brand' },
  },
);

export interface ProgressProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'value'>,
    VariantProps<typeof trackVariants>,
    VariantProps<typeof indicatorVariants> {
  /** 0–max. Omita ou passe null para modo indeterminado. */
  value?: number | null;
  max?: number;
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, size, tone, ...props }, ref) => {
  const isIndeterminate = value === null || value === undefined;
  const pct = isIndeterminate ? 0 : Math.min(Math.max(value, 0), max) / max * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={isIndeterminate ? null : value}
      max={max}
      className={cn(trackVariants({ size }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          indicatorVariants({ tone }),
          isIndeterminate && 'animate-progress-indeterminate origin-left',
        )}
        style={
          isIndeterminate
            ? undefined
            : { transform: `translateX(-${100 - pct}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = 'Progress';

// ── Circular ─────────────────────────────────────────────────────────────────

const circularSizeMap = {
  sm: { box: 28, stroke: 3 },
  md: { box: 40, stroke: 4 },
  lg: { box: 56, stroke: 5 },
} as const;

const toneStrokeMap = {
  brand:   'stroke-brand-500',
  success: 'stroke-success-500',
  warning: 'stroke-warning-500',
  error:   'stroke-error-500',
} as const;

export interface ProgressCircleProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'> {
  value?: number | null;
  max?: number;
  size?: keyof typeof circularSizeMap;
  tone?: keyof typeof toneStrokeMap;
  /** Mostra o valor em % no centro. Só para modo determinado. */
  showLabel?: boolean;
}

export const ProgressCircle = React.forwardRef<SVGSVGElement, ProgressCircleProps>(
  ({ className, value, max = 100, size = 'md', tone = 'brand', showLabel, ...props }, ref) => {
    const { box, stroke } = circularSizeMap[size];
    const radius = (box - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const isIndeterminate = value === null || value === undefined;
    const pct = isIndeterminate ? 0 : Math.min(Math.max(value, 0), max) / max;
    const dashOffset = circumference * (1 - pct);

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          ref={ref}
          width={box}
          height={box}
          viewBox={`0 0 ${box} ${box}`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={isIndeterminate ? undefined : value ?? undefined}
          className={cn(
            'transition-[stroke-dashoffset] duration-[var(--duration-base)] ease-out',
            isIndeterminate && 'animate-spin',
            className,
          )}
          {...props}
        >
          {/* track */}
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            strokeWidth={stroke}
            className="stroke-control fill-none"
          />
          {/* indicator */}
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            strokeWidth={stroke}
            strokeLinecap="round"
            className={cn('fill-none', toneStrokeMap[tone])}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: isIndeterminate ? circumference * 0.75 : dashOffset,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>

        {showLabel && !isIndeterminate && (
          <span className="absolute text-caption font-semibold tabular-nums text-foreground">
            {Math.round(pct * 100)}%
          </span>
        )}
      </div>
    );
  },
);
ProgressCircle.displayName = 'ProgressCircle';
