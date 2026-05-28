/**
 * Breadcrumbs — trilha de navegação hierárquica.
 *
 * Componente composto (compound) por motivo semântico: o consumidor controla
 * exatamente o que vira link vs texto da página atual, e pode inserir
 * separadores customizados ou usar o default.
 *
 * Estrutura recomendada:
 *   <Breadcrumbs>
 *     <BreadcrumbItem href="/">Início</BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbCurrent>Componentes</BreadcrumbCurrent>
 *   </Breadcrumbs>
 */

import * as React from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export const Breadcrumbs = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="Trilha de navegação"
    className={className}
    {...props}
  >
    <ol className="flex flex-wrap items-center gap-1.5 text-body-sm">
      {children}
    </ol>
  </nav>
));
Breadcrumbs.displayName = 'Breadcrumbs';

interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

/** Link clicável dentro da trilha. */
export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, href, ...props }, ref) => (
    <li ref={ref} className="inline-flex items-center">
      <a
        href={href}
        className={cn(
          'text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-out',
          'hover:text-foreground focus-visible:text-foreground',
          'focus-visible:outline-none focus-visible:underline',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

/** Último item — página atual. Não-clicável, com aria-current. */
export const BreadcrumbCurrent = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <li ref={ref} className="inline-flex items-center">
    <span
      aria-current="page"
      className={cn('font-medium text-foreground', className)}
      {...props}
    >
      {children}
    </span>
  </li>
));
BreadcrumbCurrent.displayName = 'BreadcrumbCurrent';

/** Separador entre itens. Default: chevron. */
export function BreadcrumbSeparator({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li aria-hidden className={cn('text-foreground-subtle/60', className)}>
      {children ?? <CaretRight size={12} weight="bold" />}
    </li>
  );
}
