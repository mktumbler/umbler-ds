/**
 * DataListPage — bloco composto pra páginas de listagem.
 *
 * Estrutura recorrente em 5+ telas do Talk (Contatos, Chatbots, Agentes de
 * IA, Campanhas, Relatórios) e no Console legacy (Histórico financeiro,
 * Contas de email):
 *
 *   ┌──────────────────────────────────────────────┐
 *   │  Título  4743                                │   ← PageHeader (title + count + description)
 *   │  Descrição da página…                        │
 *   ├──────────────────────────────────────────────┤
 *   │  [search]  [filtros]  [sort]  [+ CTA]        │   ← DataToolbar
 *   ├──────────────────────────────────────────────┤
 *   │  <Table /> ou lista                          │   ← children
 *   └──────────────────────────────────────────────┘
 *
 * Exportado como três peças independentes (PageHeader, DataToolbar,
 * DataListPage) — o consumer compõe. PageHeader e DataToolbar também
 * funcionam isolados em outras páginas que não sejam listagem.
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

// ── PageHeader ──────────────────────────────────────────────────────────────

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  /** Contador exibido ao lado do título (ex: total de itens). */
  count?: React.ReactNode;
  /** Texto descritivo abaixo do título. */
  description?: React.ReactNode;
  /** Slot opcional à direita (ações de página, dropdown, etc.). */
  trailing?: React.ReactNode;
}

export function PageHeader({
  title,
  count,
  description,
  trailing,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn('flex items-start justify-between gap-4', className)}
      {...props}
    >
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <h1 className="font-heading text-h2 text-foreground">{title}</h1>
          {count !== undefined && count !== null && (
            <span className="text-h4 font-medium text-foreground-muted tabular-nums">{count}</span>
          )}
        </div>
        {description && (
          <p className="mt-2 text-body-sm text-foreground-muted leading-relaxed max-w-prose">
            {description}
          </p>
        )}
      </div>
      {trailing && <div className="shrink-0">{trailing}</div>}
    </header>
  );
}

// ── DataToolbar ─────────────────────────────────────────────────────────────

export interface DataToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Slot da esquerda (geralmente search + filtros). */
  children: React.ReactNode;
  /** Slot da direita (CTA primária + overflow). */
  actions?: React.ReactNode;
}

export function DataToolbar({
  children,
  actions,
  className,
  ...props
}: DataToolbarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-3',
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">{children}</div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

// ── DataListPage wrapper ────────────────────────────────────────────────────

export interface DataListPageProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  toolbar?: React.ReactNode;
  /** Conteúdo principal — geralmente <Table/> ou lista de <UserRow/>. */
  children: React.ReactNode;
}

export function DataListPage({
  header,
  toolbar,
  children,
  className,
  ...props
}: DataListPageProps) {
  return (
    <section className={cn('flex flex-col gap-6', className)} {...props}>
      {header}
      {toolbar}
      <div>{children}</div>
    </section>
  );
}
