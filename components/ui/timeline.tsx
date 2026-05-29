/**
 * Timeline — feed de eventos ordenados no tempo.
 *
 * Ideal pra logs de atividade, changelogs, histórico de operações e
 * auditoria. Compound semântico em cima de <ol>/<li>, com indicador
 * (dot) e linha conectora gerada via pseudo-elemento.
 *
 * Variantes:
 *   • compact — espaçamento reduzido pra listas densas (changelog, logs).
 *
 * Compose:
 *   <Timeline>
 *     <TimelineItem>
 *       <TimelineDot />
 *       <TimelineContent>
 *         <TimelineTime>há 5 min</TimelineTime>
 *         <TimelineTitle>Push em main</TimelineTitle>
 *         <p>...</p>
 *       </TimelineContent>
 *     </TimelineItem>
 *   </Timeline>
 *
 * O `<TimelineDot>` aceita `tone` (default | brand | success | warning |
 * error) e a prop `icon` pra colocar um ícone Phosphor (ou qualquer
 * ReactNode) dentro de um dot maior.
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ── Contexto pra variantes propagarem pros descendentes ─────────────────────

type TimelineVariantCtx = {
  compact?: boolean;
};

const TimelineContext = React.createContext<TimelineVariantCtx>({});

// ── Root ────────────────────────────────────────────────────────────────────

export interface TimelineProps
  extends React.OlHTMLAttributes<HTMLOListElement>,
    TimelineVariantCtx {}

export const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, compact, ...props }, ref) => (
    <TimelineContext.Provider value={{ compact }}>
      <ol
        ref={ref}
        className={cn('relative flex flex-col', className)}
        {...props}
      />
    </TimelineContext.Provider>
  ),
);
Timeline.displayName = 'Timeline';

// ── Item ────────────────────────────────────────────────────────────────────
// Estrutura: [dot col | content col]. A coluna do dot tem largura fixa e
// desenha a linha conectora via ::before posicionado nela.

export const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => {
  const { compact } = React.useContext(TimelineContext);
  return (
    <li
      ref={ref}
      className={cn(
        'relative grid grid-cols-[1.5rem_1fr] gap-x-3',
        // linha conectora — desce até o próximo item
        'before:absolute before:left-[0.6875rem] before:top-2 before:bottom-0',
        'before:w-px before:bg-border before:content-[""]',
        // último item: sem linha
        'last:before:hidden',
        compact ? 'pb-3' : 'pb-6 last:pb-0',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
});
TimelineItem.displayName = 'TimelineItem';

// ── Dot ─────────────────────────────────────────────────────────────────────

const dotVariants = cva(
  // base: dot pequeno, alinhado verticalmente com a primeira linha do conteúdo
  'relative z-[1] mt-1.5 inline-flex shrink-0 items-center justify-center rounded-full bg-surface ring-2',
  {
    variants: {
      tone: {
        default: 'ring-border [&_svg]:text-foreground-muted',
        brand:   'ring-brand-500 [&_svg]:text-brand-500',
        success: 'ring-success-500 [&_svg]:text-success-500',
        warning: 'ring-warning-500 [&_svg]:text-warning-500',
        error:   'ring-error-500 [&_svg]:text-error-500',
      },
      filled: {
        true: '',
        false: '',
      },
      withIcon: {
        true:  'h-6 w-6',
        false: 'h-3 w-3',
      },
    },
    compoundVariants: [
      // dot sólido (sem ícone) pinta o miolo
      { withIcon: false, filled: true, tone: 'default', className: 'bg-foreground-muted' },
      { withIcon: false, filled: true, tone: 'brand',   className: 'bg-brand-500' },
      { withIcon: false, filled: true, tone: 'success', className: 'bg-success-500' },
      { withIcon: false, filled: true, tone: 'warning', className: 'bg-warning-500' },
      { withIcon: false, filled: true, tone: 'error',   className: 'bg-error-500' },
    ],
    defaultVariants: {
      tone: 'default',
      filled: true,
      withIcon: false,
    },
  },
);

export interface TimelineDotProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>,
    VariantProps<typeof dotVariants> {
  /** Ícone opcional renderizado dentro do dot (vira automaticamente um dot maior). */
  icon?: React.ReactNode;
}

export const TimelineDot = React.forwardRef<HTMLSpanElement, TimelineDotProps>(
  ({ className, tone, filled, icon, ...props }, ref) => {
    const withIcon = !!icon;
    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(dotVariants({ tone, filled, withIcon }), className)}
        {...props}
      >
        {icon ? (
          <span className="grid h-3.5 w-3.5 place-items-center [&>svg]:h-3.5 [&>svg]:w-3.5">
            {icon}
          </span>
        ) : null}
      </span>
    );
  },
);
TimelineDot.displayName = 'TimelineDot';

// ── Content ─────────────────────────────────────────────────────────────────

export const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { compact } = React.useContext(TimelineContext);
  return (
    <div
      ref={ref}
      className={cn(
        'min-w-0 text-body-sm text-foreground',
        compact ? 'pt-0.5' : 'pt-0.5',
        className,
      )}
      {...props}
    />
  );
});
TimelineContent.displayName = 'TimelineContent';

// ── Title ───────────────────────────────────────────────────────────────────

export const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-body font-semibold text-foreground', className)}
    {...props}
  />
));
TimelineTitle.displayName = 'TimelineTitle';

// ── Time ────────────────────────────────────────────────────────────────────

export interface TimelineTimeProps
  extends React.TimeHTMLAttributes<HTMLTimeElement> {}

export const TimelineTime = React.forwardRef<HTMLTimeElement, TimelineTimeProps>(
  ({ className, ...props }, ref) => (
    <time
      ref={ref}
      className={cn(
        'block text-caption text-foreground-muted tabular-nums',
        className,
      )}
      {...props}
    />
  ),
);
TimelineTime.displayName = 'TimelineTime';
