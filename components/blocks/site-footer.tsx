/**
 * SiteFooter — rodapé de site/LP da Umbler.
 *
 * Estrutura: logo + tagline + colunas de links + social + barra inferior
 * com copyright e links legais. Props-driven; cada coluna é um grupo de
 * links com título.
 *
 * O bloco renderiza dark por padrão (tom usual de footer) — passe
 * `tone="light"` para ficar claro.
 *
 * @example
 *   <SiteFooter
 *     logo={<UmblerLogo />}
 *     tagline="A infraestrutura por trás dos negócios que crescem."
 *     columns={[
 *       { title: 'Produto', links: [{ label: 'Talk', href: '/talk' }] },
 *     ]}
 *     social={[{ label: 'LinkedIn', href: '...', icon: <LinkedinIcon /> }]}
 *     copyright="© 2026 Umbler. Todos os direitos reservados."
 *     legal={[{ label: 'Privacidade', href: '/privacy' }]}
 *   />
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SiteFooterLink {
  label: string;
  href: string;
}

export interface SiteFooterColumn {
  title: string;
  links: SiteFooterLink[];
}

export interface SiteFooterSocial {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Marca: passe o <UmblerLogo /> ou seu próprio. */
  logo?: React.ReactNode;
  /** Linha curta abaixo do logo. */
  tagline?: string;
  /** Colunas de links. Idealmente 3-4. */
  columns: SiteFooterColumn[];
  /** Links sociais com ícone. */
  social?: SiteFooterSocial[];
  /** Texto de copyright na barra inferior. */
  copyright: string;
  /** Links legais (privacidade, termos) na barra inferior. */
  legal?: SiteFooterLink[];
  /** Tom de fundo. Default 'dark'. */
  tone?: 'light' | 'dark';
}

export function SiteFooter({
  logo,
  tagline,
  columns,
  social,
  copyright,
  legal,
  tone = 'dark',
  className,
  ...props
}: SiteFooterProps) {
  const isDark = tone === 'dark';

  return (
    <footer
      className={cn(
        'not-prose',
        isDark && 'dark',
        isDark
          ? 'bg-neutral-950 text-neutral-300'
          : 'border-t border-border bg-surface-subtle text-foreground-muted',
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            {logo && <div className="mb-4">{logo}</div>}
            {tagline && (
              <p className="text-body-sm leading-relaxed max-w-xs">{tagline}</p>
            )}
            {social && social.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 text-current transition-colors duration-[var(--duration-fast)] hover:border-brand-400 hover:text-brand-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="mb-4 text-caption font-semibold uppercase tracking-[0.15em] text-foreground">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-body-sm transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 md:flex-row md:items-center">
          <p className="text-caption">{copyright}</p>
          {legal && legal.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-caption transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
