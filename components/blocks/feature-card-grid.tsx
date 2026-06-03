/**
 * FeatureCardGrid — bloco de grid n-up de feature cards.
 *
 * Composição: <FeatureCardGrid> + <FeatureCard> (compound). Cada card é
 * ícone + título + descrição, opcionalmente envolvendo um link.
 *
 * Aparece em:
 *   • Site → Arquivos (UmblerClub): cards FTPS / Git Remote / Git SSH
 *   • Dashboard UmblerClub: cards Umbler Talk / Hospedar site / Criar emails
 *   • Landing patterns: FeatureGridSection (3-col features)
 *
 * Composição usa Card do DS — sem hand-roll.
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// ── Grid wrapper ────────────────────────────────────────────────────────────

const gridVariants = cva('grid gap-4', {
  variants: {
    columns: {
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

export interface FeatureCardGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export function FeatureCardGrid({
  className,
  columns,
  ...props
}: FeatureCardGridProps) {
  return (
    <div className={cn(gridVariants({ columns }), className)} {...props} />
  );
}

// ── Item ────────────────────────────────────────────────────────────────────

export interface FeatureCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Renderiza o card como link (mantém estilo de Card, adiciona hover). */
  href?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  className,
  ...props
}: FeatureCardProps) {
  const content = (
    <Card
      className={cn(
        'h-full text-center transition-colors duration-[var(--duration-fast)]',
        href && 'hover:border-brand-400 cursor-pointer',
        className,
      )}
      {...props}
    >
      <CardContent className="flex flex-col items-center gap-3 p-6 pt-6">
        {icon && (
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-300">
            {icon}
          </span>
        )}
        <CardTitle className="text-center">{title}</CardTitle>
        {description && (
          <CardDescription className="text-center">{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg">
        {content}
      </a>
    );
  }

  return content;
}
