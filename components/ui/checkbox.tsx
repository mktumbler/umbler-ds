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
    <label className="group inline-flex items-start gap-2.5 cursor-pointer has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed">
      <div className="relative mt-0.5 flex shrink-0 items-center justify-center">
        <input
          type="checkbox"
          className={cn(
            'peer h-4 w-4 cursor-pointer appearance-none rounded border bg-neutral-900',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
            'disabled:cursor-not-allowed',
            'transition-colors duration-150',
            'checked:bg-brand-500 checked:border-brand-500',
            'indeterminate:bg-brand-500 indeterminate:border-brand-500',
            state === 'error'
              ? 'border-error-500'
              : 'border-neutral-600 hover:border-neutral-400',
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
            <p
              className={cn(
                'text-sm font-medium leading-none',
                state === 'error' ? 'text-error-400' : 'text-neutral-200',
              )}
            >
              {label}
            </p>
          )}
          {description && (
            <p className="mt-1 text-xs text-neutral-500 leading-snug">{description}</p>
          )}
        </div>
      )}
    </label>
  );
}
