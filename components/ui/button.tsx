'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none cursor-pointer transition-[background-color,border-color,box-shadow,opacity] duration-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white shadow-xs hover:bg-brand-600 active:bg-brand-700 focus-visible:ring-brand-400',
        secondary:
          'bg-neutral-700 text-neutral-100 hover:bg-neutral-600 active:bg-neutral-500 focus-visible:ring-neutral-400',
        ghost:
          'bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100 active:bg-neutral-700 focus-visible:ring-neutral-500',
        outline:
          'bg-transparent border border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 active:bg-neutral-700 focus-visible:ring-neutral-500',
        danger:
          'bg-error-500 text-white shadow-xs hover:bg-error-600 active:bg-error-700 focus-visible:ring-error-400',
      },
      size: {
        sm: 'h-8 px-3 text-body-sm rounded-sm',
        md: 'h-10 px-4 text-body rounded-md',
        lg: 'h-12 px-5 text-body-lg rounded-md',
        xl: 'h-14 px-6 text-body-lg rounded-lg',
      },
      iconOnly: {
        true: 'px-0',
        false: '',
      },
    },
    compoundVariants: [
      { iconOnly: true, size: 'sm', className: 'w-8' },
      { iconOnly: true, size: 'md', className: 'w-10' },
      { iconOnly: true, size: 'lg', className: 'w-12' },
      { iconOnly: true, size: 'xl', className: 'w-14' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconOnly: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  iconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconOnly, loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, iconOnly }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Spinner size={size === 'sm' ? 'sm' : 'md'} />}
      {children}
    </button>
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
