import { type InputHTMLAttributes } from 'react';
import { Check, Minus } from '@phosphor-icons/react/dist/ssr';
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
            'transition-colors duration-150',
            'checked:bg-brand-500 checked:border-brand-500',
            'indeterminate:bg-brand-500 indeterminate:border-brand-500',
            state === 'error'
              ? 'border-error-500'
              : 'border-border hover:border-border-strong',
            className,
          )}
          {...props}
        />
        {/* Check icon — visible when checked */}
        <Check
          size={10}
          weight="bold"
          className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"
        />
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
