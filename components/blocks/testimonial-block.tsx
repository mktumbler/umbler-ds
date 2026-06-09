/**
 * TestimonialBlock — depoimento único com estrelas, blockquote e autor.
 *
 * Composição:
 *   <TestimonialBlock testimonial={{ quote, author, role, company }} />
 *
 * Props:
 *   testimonial — { quote, author, role, company? }
 *   stars       — 1-5 (padrão: 5)
 *   variant     — 'centered' | 'card' (padrão: 'centered')
 *
 * Aparece em:
 *   • /showcase/solucao (centered, text-display, 5 estrelas)
 */

import * as React from 'react';
import { Star } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarInitials?: string;
}

export interface TestimonialBlockProps extends React.HTMLAttributes<HTMLElement> {
  testimonial: TestimonialData;
  stars?: 1 | 2 | 3 | 4 | 5;
  /** centered — blockquote grande centrado (padrão). card — card com borda. */
  variant?: 'centered' | 'card';
}

export function TestimonialBlock({
  testimonial,
  stars = 5,
  variant = 'centered',
  className,
  ...props
}: TestimonialBlockProps) {
  const { quote, author, role, company, avatarInitials } = testimonial;

  const starRow = (
    <div className="mb-6 flex justify-center gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} size={20} className="text-warning-400" weight="fill" />
      ))}
    </div>
  );

  const authorRow = (
    <div className="flex flex-col items-center gap-1">
      {avatarInitials && (
        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-semibold text-brand-500">
          {avatarInitials}
        </div>
      )}
      <p className="text-body font-medium text-foreground">{author}</p>
      <p className="text-body-sm text-foreground-muted">
        {role}{company ? ` · ${company}` : ''}
      </p>
    </div>
  );

  if (variant === 'card') {
    return (
      <section className={cn('px-6 py-16', className)} {...props}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-10 shadow-sm">
          {starRow}
          <blockquote className="font-heading text-display text-foreground text-balance text-center">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="mt-8 text-center">{authorRow}</div>
        </div>
      </section>
    );
  }

  // variant === 'centered' (default)
  return (
    <section className={cn('px-6 py-24', className)} {...props}>
      <div className="mx-auto max-w-3xl text-center">
        {starRow}
        <blockquote className="font-heading text-display text-foreground text-balance">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-8">{authorRow}</div>
      </div>
    </section>
  );
}
