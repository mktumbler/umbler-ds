/**
 * HeroBlock — seção de hero composable para landing pages.
 *
 * Compound components:
 *   <HeroBlock>                 — wrapper <section> com fundo opcional
 *     <HeroContent>             — centraliza conteúdo (centered layout)
 *       <HeroEyebrow>           — linha acima do título (badge, texto, pill)
 *       <HeroHeadline>          — <h1> principal
 *       <HeroSubtext>           — parágrafo de suporte
 *       <HeroCTAGroup>          — linha de botões
 *     </HeroContent>
 *     <HeroVisual>              — área de imagem/mock (centered)
 *   </HeroBlock>
 *
 * Para layout split, use className no HeroBlock + HeroText / HeroVisual
 * lado a lado via grid.
 *
 * Aparece em:
 *   • /showcase/produto, /showcase/solucao, /showcase/pricing
 *   • Qualquer LP de segmento Umbler
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

// ── Root ─────────────────────────────────────────────────────────────────────

export interface HeroBlockProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Fundo decorativo pré-montado.
   * `sweep`  → radial-gradient brand sutil no topo.
   * `glow`   → glow central suave.
   * `none`   → sem fundo (use HeroBackground externamente se precisar de blob).
   */
  background?: 'none' | 'sweep' | 'glow';
}

export function HeroBlock({
  background = 'none',
  className,
  children,
  ...props
}: HeroBlockProps) {
  const bgClass =
    background === 'sweep'
      ? '[background:radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklch,var(--color-brand-500)_18%,transparent),transparent)]'
      : background === 'glow'
      ? '[background:radial-gradient(50%_40%_at_50%_0%,color-mix(in_oklch,var(--color-brand-400)_10%,transparent),transparent)]'
      : '';

  return (
    <section
      className={cn('relative isolate overflow-hidden', bgClass, className)}
      {...props}
    >
      {children}
    </section>
  );
}

// ── Content centrado ──────────────────────────────────────────────────────────

export function HeroContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-3xl flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Eyebrow ───────────────────────────────────────────────────────────────────

export function HeroEyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-5 flex items-center justify-center', className)} {...props}>
      {children}
    </div>
  );
}

// ── Headline ──────────────────────────────────────────────────────────────────

export function HeroHeadline({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('font-heading text-h1 text-foreground', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

// ── Subtext ───────────────────────────────────────────────────────────────────

export function HeroSubtext({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-4 text-body-lg text-foreground-muted', className)}
      {...props}
    >
      {children}
    </p>
  );
}

// ── CTA Group ─────────────────────────────────────────────────────────────────

export function HeroCTAGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mt-8 flex flex-wrap items-center justify-center gap-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Visual (bloco de imagem / mock) ───────────────────────────────────────────

export function HeroVisual({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('relative mt-12', className)} {...props}>
      {children}
    </div>
  );
}

// ── Texto (lado esquerdo do split) ────────────────────────────────────────────

export function HeroText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col items-start', className)}
      {...props}
    >
      {children}
    </div>
  );
}
