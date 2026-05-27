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
    <label className={cn(
      'group inline-flex gap-2.5 cursor-pointer has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed',
      description ? 'items-start' : 'items-center',
    )}>
      <div className="relative flex shrink-0 items-center justify-center">
        <input
          type="radio"
          className={cn(
            'peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-border bg-surface',
            'checked:border-brand-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
            'disabled:cursor-not-allowed',
            'transition-colors duration-150',
            'hover:border-border-strong',
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
            <span className="block text-sm font-medium leading-none text-foreground-secondary">{label}</span>
          )}
          {description && (
            <span className="block mt-1 text-xs text-foreground-muted leading-snug">{description}</span>
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
        <span className="block text-sm font-medium text-foreground-secondary mb-2">{label}</span>
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
