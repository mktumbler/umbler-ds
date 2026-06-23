/**
 * TestimonialGrid — grade de depoimentos de clientes.
 *
 * Variantes:
 *   wall     — 3 colunas de cards empilhados, estilo "wall of love" (padrão)
 *   featured — 1 card destaque à esquerda + grade de cards menores à direita
 *
 * Props:
 *   testimonials — array de TestimonialItem
 *   eyebrow      — texto acima do título
 *   headline     — título da seção
 *   subheadline  — subtítulo
 *   variant      — 'wall' | 'featured' (padrão: 'wall')
 *
 * Uso típico:
 *   <TestimonialGrid
 *     eyebrow="Depoimentos"
 *     headline="Quem usa, recomenda"
 *     testimonials={TALK_TESTIMONIALS}
 *   />
 */

import * as React from 'react';
import { Star } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  stars?: 1 | 2 | 3 | 4 | 5;
}

export interface TestimonialGridProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  /** 'wall' = 3 colunas empilhadas | 'featured' = 1 destaque + grid menor */
  variant?: 'wall' | 'featured';
}

// ── Sub-componentes internos ───────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} weight="fill" className="text-warning-400" />
      ))}
    </div>
  );
}

function Author({ t }: { t: TestimonialItem }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar src={t.avatarSrc} name={t.author} size="sm" />
      <div>
        <cite className="not-italic text-body-sm font-medium text-foreground">
          {t.author}
        </cite>
        <p className="text-caption text-foreground-muted">
          {t.role}{t.company ? ` · ${t.company}` : ''}
        </p>
      </div>
    </div>
  );
}

// ── Variante Wall of Love ──────────────────────────────────────────────────────

function WallVariant({ testimonials }: { testimonials: TestimonialItem[] }) {
  const cols = 3;
  const columns: TestimonialItem[][] = Array.from({ length: cols }, () => []);
  testimonials.forEach((t, i) => columns[i % cols].push(t));

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {columns.map((col, ci) => (
        <div key={ci} className="space-y-3">
          {col.map((t, ti) => (
            <Card key={ti} className="border-0 shadow-none bg-surface-subtle">
              <CardContent className="flex flex-col gap-4 p-6">
                {t.stars && <Stars count={t.stars} />}
                <blockquote className="flex-1">
                  <p className="text-body text-foreground">{t.quote}</p>
                </blockquote>
                <Author t={t} />
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Variante Featured ─────────────────────────────────────────────────────────

function FeaturedVariant({ testimonials }: { testimonials: TestimonialItem[] }) {
  const [main, ...rest] = testimonials;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
      {main && (
        <Card className="flex flex-col gap-6 p-6 sm:col-span-2 lg:row-span-2">
          {main.stars && <Stars count={main.stars} />}
          <blockquote className="flex-1">
            <p className="text-xl font-medium leading-relaxed text-foreground">
              {main.quote}
            </p>
          </blockquote>
          <Author t={main} />
        </Card>
      )}
      {rest.slice(0, 3).map((t, i) => (
        <Card key={i} className={cn('flex flex-col gap-4 p-6', i === 0 && 'md:col-span-2')}>
          {t.stars && <Stars count={t.stars} />}
          <blockquote className="flex-1">
            <p className="text-body text-foreground">{t.quote}</p>
          </blockquote>
          <Author t={t} />
        </Card>
      ))}
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────

export function TestimonialGrid({
  eyebrow,
  headline,
  subheadline,
  testimonials,
  variant = 'wall',
  className,
  ...props
}: TestimonialGridProps) {
  return (
    <section className={cn('px-6 py-24', className)} {...props}>
      <div className="mx-auto max-w-[1100px] space-y-12">
        {(eyebrow || headline || subheadline) && (
          <div className="text-center">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {headline && (
              <h2 className="font-heading text-h2 text-foreground">{headline}</h2>
            )}
            {subheadline && (
              <p className="mt-4 text-body-lg text-foreground-muted">{subheadline}</p>
            )}
          </div>
        )}
        {variant === 'wall'
          ? <WallVariant testimonials={testimonials} />
          : <FeaturedVariant testimonials={testimonials} />
        }
      </div>
    </section>
  );
}
