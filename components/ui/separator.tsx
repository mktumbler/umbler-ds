import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const separatorVariants = cva('shrink-0 bg-neutral-600/50', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical:   'w-px self-stretch',
    },
  },
  defaultVariants: { orientation: 'horizontal' },
});

export interface SeparatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  label?: string;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation, label, ...props }, ref) => {
    if (label && orientation !== 'vertical') {
      return (
        <div ref={ref} className={cn('flex items-center gap-3', className)} {...props}>
          <div className="h-px flex-1 bg-neutral-600/50" />
          <span className="text-xs text-neutral-500 font-medium shrink-0">{label}</span>
          <div className="h-px flex-1 bg-neutral-600/50" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation ?? 'horizontal'}
        className={cn(separatorVariants({ orientation }), className)}
        {...props}
      />
    );
  },
);
Separator.displayName = 'Separator';
