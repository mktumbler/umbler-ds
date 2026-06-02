import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-medium rounded-full',
  {
    variants: {
      variant: {
        brand:   'bg-brand-100   text-brand-700   dark:bg-brand-500/15   dark:text-brand-300',
        success: 'bg-success-100 text-success-900 dark:bg-success-500/15 dark:text-success-300',
        warning: 'bg-warning-300 text-neutral-800 dark:bg-warning-500/15 dark:text-warning-300',
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

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, variant, size, dot, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {dot && (
        <span className="size-1.5 rounded-full bg-current opacity-70" aria-hidden />
      )}
      {children}
    </span>
  );
}
