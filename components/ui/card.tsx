import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Card root ─────────────────────────────────────────────────────────────────

const cardVariants = cva('rounded-lg overflow-hidden flex flex-col', {
  variants: {
    variant: {
      default:  'bg-neutral-800 border border-neutral-600/50 shadow-sm transition-[box-shadow,transform] duration-[var(--duration-normal)] ease-out hover:-translate-y-0.5 hover:shadow-md',
      elevated: 'bg-neutral-800 border border-neutral-600/30 shadow-xl transition-[box-shadow,transform] duration-[var(--duration-normal)] ease-out hover:-translate-y-1 hover:shadow-2xl',
      ghost:    'bg-neutral-800/40 border border-neutral-600/20',
      outline:  'bg-transparent border border-neutral-600',
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
    <div ref={ref} className={cn('px-6 pt-6 pb-2', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

// ── CardTitle ─────────────────────────────────────────────────────────────────

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-heading text-[1.125rem] font-medium text-neutral-50 leading-snug', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

// ── CardDescription ───────────────────────────────────────────────────────────

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-1.5 text-sm text-neutral-400 leading-relaxed', className)} {...props} />
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
      className={cn('px-6 pt-4 pb-6 flex items-center gap-3 border-t border-neutral-600/40', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export { cardVariants };
