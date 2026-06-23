import { cva } from 'class-variance-authority';

/**
 * CVA para variantes do Button — sem 'use client' para poder ser importado
 * em server components (ex: home page, layouts).
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none cursor-pointer transition-[background-color,border-color,box-shadow,opacity,transform] duration-[var(--duration-fast)] ease-out active:scale-[0.97] active:duration-[var(--duration-instant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white shadow-xs hover:bg-brand-600 active:bg-brand-700 focus-visible:ring-brand-400',
        secondary:
          'bg-brand-50 text-brand-500 hover:bg-brand-100 active:bg-brand-200 focus-visible:ring-brand-400 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 dark:focus-visible:ring-neutral-500',
        ghost:
          'bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 focus-visible:ring-neutral-400 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:active:bg-neutral-700 dark:focus-visible:ring-neutral-500',
        outline:
          'bg-transparent border border-brand-500 text-brand-500 hover:bg-brand-50 hover:border-brand-600 active:bg-brand-100 focus-visible:ring-brand-400 dark:border-brand-500 dark:text-brand-400 dark:hover:bg-brand-500/10 dark:hover:border-brand-400 dark:active:bg-brand-500/20',
        danger:
          'bg-error-500 text-white shadow-xs hover:bg-error-600 active:bg-error-700 focus-visible:ring-error-400',
      },
      // Radius unico em todos os tamanhos (rounded-md ~10px no DS) para
      // consistencia: um botao pequeno e um xl tem o mesmo arredondamento.
      // Tokens do DS sao maiores que Tailwind padrao. Substitui o pill da v0.x.
      size: {
        sm: 'h-8 px-3 text-body-sm rounded-md',
        md: 'h-10 px-4 text-body rounded-md',
        lg: 'h-12 px-6 text-body-lg rounded-md',
        xl: 'h-14 px-8 text-body-lg rounded-md',
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

export type { VariantProps } from 'class-variance-authority';
