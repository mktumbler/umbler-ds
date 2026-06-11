import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Card root ─────────────────────────────────────────────────────────────────

const cardVariants = cva('rounded-lg overflow-hidden flex flex-col', {
  variants: {
    variant: {
      default:  'bg-surface border border-border shadow-sm transition-[box-shadow] duration-[var(--duration-normal)] ease-out hover:shadow-md',
      elevated: 'bg-surface border border-border/60 shadow-xl transition-[box-shadow] duration-[var(--duration-normal)] ease-out hover:shadow-2xl',
      ghost:    'bg-surface/40 border border-border/40',
      outline:  'bg-transparent border border-border-strong',
    },
  },
  defaultVariants: { variant: 'default' },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  ),
);
Card.displayName = 'Card';

// ── CardHeader ────────────────────────────────────────────────────────────────

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 px-6 pt-6 pb-2', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

// ── CardTitle ─────────────────────────────────────────────────────────────────

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-sans text-[1.125rem] font-medium text-foreground leading-snug', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

// ── CardDescription ───────────────────────────────────────────────────────────

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-foreground-muted leading-relaxed', className)} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

// ── CardContent ───────────────────────────────────────────────────────────────

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 pt-2 pb-5 flex-1', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

// ── CardFooter ────────────────────────────────────────────────────────────────

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 pt-4 pb-6 flex items-center gap-3 border-t border-border', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export { cardVariants };
