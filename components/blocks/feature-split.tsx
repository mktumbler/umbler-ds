/**
 * FeatureSplit — seção de feature em duas colunas (texto + visual).
 *
 * Padrão problema/solução das LPs Umbler: à esquerda, o argumento (eyebrow,
 * título, parágrafo, bullets, CTA); à direita, um visual (mock, imagem,
 * ilustração ou qualquer ReactNode). Use `reverse` pra alternar lados
 * entre seções consecutivas e criar ritmo visual.
 *
 * O visual é um slot — passe um <img>, um mock customizado, um CardAurora,
 * o que fizer sentido. O bloco só estrutura.
 *
 * @example
 *   <FeatureSplit
 *     eyebrow="Times"
 *     title="Quando um funcionário tira férias…"
 *     body="O Umbler Talk distribui as conversas entre o time."
 *     bullets={['Filas por equipe', 'Round-robin automático']}
 *     cta={{ label: 'Experimente grátis', href: '/signup' }}
 *     visual={<img src="/mock-teams.png" alt="" />}
 *   />
 */

import * as React from 'react';
import { ArrowRight, Check } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export interface FeatureSplitCTA {
  label: string;
  href: string;
}

export interface FeatureSplitProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Linha curta acima do título (categoria/feature). */
  eyebrow?: string;
  /** H2 da seção. */
  title: React.ReactNode;
  /** Parágrafo de suporte abaixo do título. */
  body?: React.ReactNode;
  /** Lista de bullets com ícone de check. */
  bullets?: React.ReactNode[];
  /** CTA inline (texto + seta). Para CTA grande, use children. */
  cta?: FeatureSplitCTA;
  /** Conteúdo do lado direito — qualquer ReactNode. */
  visual: React.ReactNode;
  /** Inverte os lados (visual à esquerda, texto à direita). */
  reverse?: boolean;
}

export function FeatureSplit({
  eyebrow,
  title,
  body,
  bullets,
  cta,
  visual,
  reverse = false,
  className,
  children,
  ...props
}: FeatureSplitProps) {
  return (
    <section
      className={cn('not-prose px-4 py-16 md:py-24', className)}
      {...props}
    >
      <div
        className={cn(
          'mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16',
        )}
      >
        <div className={cn(reverse && 'lg:order-2')}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="font-heading text-h2 text-foreground mb-5 [letter-spacing:-0.04em]">
            {title}
          </h2>
          {body && (
            <p className="text-body text-foreground-muted leading-relaxed mb-8">
              {body}
            </p>
          )}
          {bullets && bullets.length > 0 && (
            <ul className="mb-8 flex flex-col gap-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-300">
                    <Check size={11} weight="bold" />
                  </span>
                  <span className="text-body-sm text-foreground-muted leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center gap-2 text-body-sm font-medium text-brand-500 transition-colors duration-[var(--duration-fast)] hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
            >
              {cta.label}
              <ArrowRight size={14} weight="bold" />
            </a>
          )}
          {children}
        </div>

        <div className={cn(reverse && 'lg:order-1')}>{visual}</div>
      </div>
    </section>
  );
}
