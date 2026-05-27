import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type SelectHTMLAttributes } from 'react';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

// ── Variants ──────────────────────────────────────────────────────────────────

const selectVariants = cva(
  [
    'w-full appearance-none rounded-md bg-neutral-900 text-neutral-100',
    'border transition-[border-color,box-shadow] duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'pr-9', // espaço para o caret
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-8  pl-3 text-sm',
        md: 'h-10 pl-3 text-sm',
        lg: 'h-12 pl-4 text-base',
      },
      state: {
        default: 'border-neutral-600/70 hover:border-neutral-500 focus:border-brand-500 focus:ring-brand-500/30',
        error:   'border-error-500   focus:border-error-500   focus:ring-error-500/30',
        success: 'border-success-500 focus:border-success-500 focus:ring-success-500/30',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  },
);

// ── Select ────────────────────────────────────────────────────────────────────

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, size, state, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(selectVariants({ size, state }), className)}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
        <CaretDown size={14} weight="bold" />
      </span>
    </div>
  ),
);
Select.displayName = 'Select';

export { selectVariants };
