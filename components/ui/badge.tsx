import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-medium rounded-full',
  {
    variants: {
      variant: {
        brand: 'bg-brand-500/15 text-brand-300',
        success: 'bg-success-500/15 text-success-300',
        warning: 'bg-warning-500/15 text-warning-300',
        error: 'bg-error-500/15 text-error-300',
        neutral: 'bg-neutral-700 text-neutral-300',
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
