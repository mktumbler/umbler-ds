import { type InputHTMLAttributes, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

// ── Radio ─────────────────────────────────────────────────────────────────────

export function Radio({ className, label, description, ...props }: RadioProps) {
  return (
    <label className="group inline-flex items-start gap-2.5 cursor-pointer has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed">
      <div className="relative mt-0.5 flex shrink-0 items-center justify-center">
        <input
          type="radio"
          className={cn(
            'peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-neutral-600 bg-neutral-900',
            'checked:border-brand-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
            'disabled:cursor-not-allowed',
            'transition-colors duration-150',
            'hover:border-neutral-400',
            className,
          )}
          {...props}
        />
        {/* Central dot — visible when checked */}
        <span className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-brand-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
      {(label || description) && (
        <div>
          {label && (
            <p className="text-sm font-medium leading-none text-neutral-200">{label}</p>
          )}
          {description && (
            <p className="mt-1 text-xs text-neutral-500 leading-snug">{description}</p>
          )}
        </div>
      )}
    </label>
  );
}

// ── RadioGroup ────────────────────────────────────────────────────────────────

export function RadioGroup({
  className,
  label,
  orientation = 'vertical',
  children,
  ...props
}: RadioGroupProps) {
  return (
    <div {...props}>
      {label && (
        <p className="text-sm font-medium text-neutral-200 mb-2">{label}</p>
      )}
      <div
        role="radiogroup"
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col gap-3' : 'flex-row flex-wrap gap-4',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
