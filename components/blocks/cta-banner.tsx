/**
 * CTABanner — seção de chamada-para-ação ao final (ou meio) de landing pages.
 *
 * 4 variantes de background:
 *   premium — gradient-premium (azul-escuro) + gradient-glow sobreposto (padrão Umbler LP)
 *   glow    — neutral-950 + glow radial brand central (mais sutil)
 *   simple  — surface-subtle com borda, adaptável light/dark (para CTAs de meio de página)
 *   brand   — brand-500 sólido, máximo contraste
 *
 * Composição:
 *   <CTABanner variant="premium">
 *     <CTAEyebrow> ... </CTAEyebrow>   (opcional — pill de trust / feature)
 *     <CTAHeadline> ... </CTAHeadline>
 *     <CTASubtext> ... </CTASubtext>   (opcional)
 *     <CTAActions> ... </CTAActions>   (botões)
 *   </CTABanner>
 *
 * Aparece em:
 *   • /showcase/produto, /showcase/solucao, /showcase/pricing (pré-bloco)
 *   • Qualquer LP Umbler como fechamento de conversão
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

// ── Root ─────────────────────────────────────────────────────────────────────

export type CTABannerVariant = 'premium' | 'glow' | 'simple' | 'brand';

export interface CTABannerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CTABannerVariant;
}

export function CTABanner({
  variant = 'premium',
  className,
  children,
  ...props
}: CTABannerProps) {
  const base = 'relative isolate overflow-hidden px-6 py-24';

  const variantClass = {
    premium: '',       // fundo via style inline (usa CSS var)
    glow:    'bg-[var(--color-neutral-950)]',
    simple:  'bg-surface-subtle',
    brand:   'bg-brand-600',
  }[variant];

  return (
    <section
      className={cn(base, variantClass, className)}
      style={
        variant === 'premium'
          ? { background: 'var(--gradient-premium)' }
          : undefined
      }
      {...props}
    >
      {/* Glow overlay presente no premium e glow */}
      {(variant === 'premium' || variant === 'glow') && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'var(--gradient-glow)' }}
        />
      )}

      {/* Borda sutil no simple */}
      {variant === 'simple' && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border"
        />
      )}

      <div className="relative mx-auto max-w-3xl text-center">{children}</div>
    </section>
  );
}

// ── Eyebrow (pill de trust / badge de feature) ────────────────────────────────

export function CTAEyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-6 flex justify-center', className)} {...props}>
      {children}
    </div>
  );
}

/** Pill pré-montado no estilo das LPs Umbler (glass, icon + texto). */
export function CTATrustPill({
  icon,
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { icon?: React.ReactNode }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-caption text-white/70 backdrop-blur',
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
}

// ── Headline ──────────────────────────────────────────────────────────────────

export function CTAHeadline({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'mb-6 font-heading text-display-lg text-white text-balance',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

/** Variante clara para CTABanner variant="simple" (adapta ao tema). */
export function CTAHeadlineMuted({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('mb-4 font-heading text-display text-foreground text-balance', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

// ── Subtext ───────────────────────────────────────────────────────────────────

export function CTASubtext({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mb-10 text-body-lg text-white/70 text-pretty', className)}
      {...props}
    >
      {children}
    </p>
  );
}

/** Variante para banner "simple" — usa cor semântica em vez de white/70. */
export function CTASubtextMuted({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mb-8 text-body-lg text-foreground-muted text-pretty', className)}
      {...props}
    >
      {children}
    </p>
  );
}

// ── Actions ───────────────────────────────────────────────────────────────────

export function CTAActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-wrap items-center justify-center gap-3', className)}
      {...props}
    >
      {children}
    </div>
  );
}
