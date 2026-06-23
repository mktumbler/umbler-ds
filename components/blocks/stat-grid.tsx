/**
 * StatGrid — grid de métricas de impacto para landing pages.
 *
 * Composição:
 *   <StatGrid stats={[{ n: '72%', label: 'conversas resolvidas' }]} />
 *
 * Props:
 *   stats    — array de { n: string; label: string }
 *   note     — nota de contexto opcional acima do grid (ex: "Média após 90 dias")
 *   columns  — 2 | 3 | 4 (padrão: deduzido do número de stats, max 4)
 *   tone     — 'brand' | 'muted' (cor do número grande; padrão: 'brand')
 *
 * Aparece em:
 *   • /showcase/produto (4 stats brand-400)
 *   • /showcase/solucao (3 stats brand-500)
 *   • /showcase/pricing (3 stats brand-500)
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Stat {
  n: string;
  label: string;
}

export type StatGridTone = 'brand' | 'muted';

export interface StatGridProps extends React.HTMLAttributes<HTMLElement> {
  stats: Stat[];
  note?: string;
  columns?: 2 | 3 | 4;
  tone?: StatGridTone;
}

export function StatGrid({
  stats,
  note,
  columns,
  tone = 'brand',
  className,
  ...props
}: StatGridProps) {
  // Deduz colunas pelo número de stats se não informado
  const cols = columns ?? (stats.length <= 2 ? 2 : stats.length === 3 ? 3 : 4);

  const colClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[cols];

  const nClass = tone === 'brand'
    ? 'text-brand-500'
    : 'text-foreground';

  return (
    <section className={cn('px-6 py-20', className)} {...props}>
      <div className="mx-auto max-w-[1100px]">
        {note && (
          <p className="mb-12 text-center text-body text-foreground-muted">{note}</p>
        )}
        <div className={cn('grid grid-cols-1 gap-10 text-center', colClass)}>
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className={cn(
                  'font-heading text-h1 md:text-display tabular-nums',
                  nClass,
                )}
              >
                {s.n}
              </p>
              <p className="mx-auto mt-2 max-w-[14rem] text-caption uppercase tracking-wider text-foreground-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
