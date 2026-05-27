import { cva, type VariantProps } from 'class-variance-authority';
import { type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { InputLabel, InputHint, InputGroup } from '@/components/ui/input';

// ── Variants ──────────────────────────────────────────────────────────────────

export const textareaVariants = cva(
  [
    'w-full rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500',
    'border transition-[border-color,box-shadow] duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'resize-y px-3 py-2.5 text-sm min-h-[80px]',
  ].join(' '),
  {
    variants: {
      state: {
        default: 'border-neutral-600/70 hover:border-neutral-500 focus:border-brand-500 focus:ring-brand-500/30',
        error:   'border-error-500 focus:border-error-500 focus:ring-error-500/30',
        success: 'border-success-500 focus:border-success-500 focus:ring-success-500/30',
      },
    },
    defaultVariants: { state: 'default' },
  },
);

// ── Textarea ──────────────────────────────────────────────────────────────────

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  state?: 'default' | 'error' | 'success';
}

export function Textarea({ className, state, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ state }), className)}
      {...props}
    />
  );
}

// Re-export sub-components for convenience
export { InputLabel, InputHint, InputGroup };
