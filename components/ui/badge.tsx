import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-medium',
  {
    variants: {
      variant: {
        brand:   'bg-brand-100   text-brand-700   dark:bg-brand-500/15   dark:text-brand-300',
        success: 'bg-success-100 text-success-900 dark:bg-success-500/15 dark:text-success-300',
        warning: 'bg-warning-100 text-warning-900 dark:bg-warning-500/15 dark:text-warning-300',
        error:   'bg-error-100   text-error-900   dark:bg-error-500/15   dark:text-error-300',
        neutral: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700    dark:text-neutral-300',
        /**
         * Variantes "solid": preenchimento opaco com a cor da marca/estado, texto branco.
         * Uso: badges flutuantes sobre bordas/superfícies coloridas (ex: badge "Popular"
         * sobre card com borda brand-500), ou destaque de alto contraste em landings.
         * Sem translucidez em dark, fundo permanece sólido pra não vazar a borda atrás.
         */
        'brand-solid':   'bg-brand-500   text-white',
        'success-solid': 'bg-success-500 text-white',
        'warning-solid': 'bg-warning-500 text-white',
        'error-solid':   'bg-error-500   text-white',
      },
      shape: {
        /** Pílula arredondada (padrão) — uso geral em UI. */
        pill: 'rounded-full px-2.5 py-1 text-xs',
        /** Etiqueta retangular caps + tracking — release tags, status de roadmap, type pills em changelogs. */
        tag:  'rounded px-2 py-0.5 text-caption font-semibold uppercase tracking-wide',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      shape:   'pill',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, variant, shape, dot, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, shape }), className)}>
      {dot && (
        <span className="size-1.5 rounded-full bg-current opacity-70" aria-hidden />
      )}
      {children}
    </span>
  );
}
