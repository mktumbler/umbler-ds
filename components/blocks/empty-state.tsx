/**
 * EmptyState — bloco pra comunicar "ainda não há nada aqui" ou
 * "essa coisa não está conectada/configurada".
 *
 * Estrutura: ícone/ilustração + título + descrição + ações.
 *
 * Aparece em:
 *   • Console → DNS "Seus emails não estão conectados à Umbler"
 *   • Modal "Para usar sites e emails você vai precisar de um domínio"
 *   • UmblerClub → Backup promo (variação marketing)
 *   • Talk → listagens vazias (sem conversas, sem contatos)
 *
 * Não é Marketing — pra promo card com split + ilustração + benefits,
 * use o futuro <MarketingBanner/>.
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const emptyStateVariants = cva(
  'flex flex-col items-center justify-center gap-4 text-center',
  {
    variants: {
      size: {
        sm: 'py-8 px-4',
        md: 'py-12 px-6',
        lg: 'py-20 px-8',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface EmptyStateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof emptyStateVariants> {
  /** Ícone ou ilustração no topo. Recomendado: ícone 48–64px ou SVG. */
  media?: React.ReactNode;
  /** Título principal. Required. */
  title: React.ReactNode;
  /** Descrição abaixo do título. Opcional. */
  description?: React.ReactNode;
  /** Slot de ações (botões). Renderiza em linha, centralizado. */
  actions?: React.ReactNode;
  /**
   * Nível semântico do título. Use de acordo com a hierarquia da página:
   * `h2` no topo de uma rota, `h3` (default) em tabs/sections, `h4` em cards.
   */
  as?: 'h2' | 'h3' | 'h4' | 'p';
}

export function EmptyState({
  media,
  title,
  description,
  actions,
  size,
  as: Heading = 'h3',
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div className={cn(emptyStateVariants({ size }), className)} {...props}>
      {media && (
        <div className="flex items-center justify-center text-foreground-muted" aria-hidden="true">
          {media}
        </div>
      )}
      <div className="max-w-prose space-y-2">
        <Heading className="font-sans text-h4 text-foreground">{title}</Heading>
        {description && (
          <p className="text-body-sm text-foreground-muted leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}
