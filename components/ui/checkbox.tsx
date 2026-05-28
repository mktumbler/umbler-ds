import { type InputHTMLAttributes } from 'react';
import { Minus } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  state?: 'default' | 'error';
}

// ── Checkbox ──────────────────────────────────────────────────────────────────

export function Checkbox({
  className,
  label,
  description,
  state = 'default',
  ...props
}: CheckboxProps) {
  return (
    <label className={cn(
      'group inline-flex gap-2.5 cursor-pointer has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed',
      description ? 'items-start' : 'items-center',
    )}>
      <div className="relative flex shrink-0 items-center justify-center">
        <input
          type="checkbox"
          className={cn(
            'peer h-4 w-4 cursor-pointer appearance-none rounded border bg-surface',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
            'disabled:cursor-not-allowed',
            'transition-colors duration-[var(--duration-fast)] ease-out',
            'checked:bg-brand-500 checked:border-brand-500',
            'indeterminate:bg-brand-500 indeterminate:border-brand-500',
            state === 'error'
              ? 'border-error-500'
              : 'border-border hover:border-border-strong',
            className,
          )}
          {...props}
        />
        {/*
         * Check icon — desenhado via stroke-dasharray.
         * Quando o input não está checked: pathLength inteiro está como
         * dashoffset → linha invisível. Ao marcar, o offset vai a 0 com
         * ease-spring, "desenhando" o tick. Ao desmarcar, ele "apaga"
         * (offset volta a 24) — visualmente o tick recua do fim para o início.
         */}
        <svg
          width={12}
          height={12}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className={cn(
            'pointer-events-none absolute text-white',
            '[&_path]:[stroke-dasharray:24] [&_path]:[stroke-dashoffset:24]',
            '[&_path]:transition-[stroke-dashoffset] [&_path]:duration-[var(--duration-normal)] [&_path]:ease-spring',
            'peer-checked:[&_path]:[stroke-dashoffset:0]',
          )}
        >
          <path
            d="M 3.5 8.5 L 7 11.5 L 12.5 5"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={24}
          />
        </svg>
        {/* Minus icon — visible when indeterminate */}
        <Minus
          size={10}
          weight="bold"
          className="pointer-events-none absolute text-white opacity-0 peer-indeterminate:opacity-100 transition-opacity"
        />
      </div>
      {(label || description) && (
        <div>
          {label && (
            <span
              className={cn(
                'block text-sm font-medium leading-none',
                state === 'error' ? 'text-error-400' : 'text-foreground-secondary',
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="block mt-1 text-xs text-foreground-muted leading-snug">{description}</span>
          )}
        </div>
      )}
    </label>
  );
}
