'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export const tagVariants = cva(
  'inline-flex items-center gap-1 font-medium rounded-full',
  {
    variants: {
      variant: {
        brand:   'bg-brand-100   text-brand-700   dark:bg-brand-500/15   dark:text-brand-300',
        success: 'bg-success-100 text-success-900 dark:bg-success-500/15 dark:text-success-300',
        warning: 'bg-warning-100 text-warning-900 dark:bg-warning-500/15 dark:text-warning-300',
        error:   'bg-error-100   text-error-900   dark:bg-error-500/15   dark:text-error-300',
        neutral: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700    dark:text-neutral-300',
      },
      size: {
        sm: 'px-2 py-0.5 text-[11px]',
        md: 'px-2.5 py-1 text-xs',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
);

export interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Tag({ children, variant, size, onRemove, disabled, className }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)}>
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          className="ml-0.5 rounded-full opacity-60 hover:opacity-100 focus:outline-none transition-opacity"
          aria-label="Remover"
        >
          <X size={size === 'sm' ? 10 : 12} weight="bold" />
        </button>
      )}
    </span>
  );
}
