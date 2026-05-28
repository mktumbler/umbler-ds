'use client';

/**
 * Pagination — navegação entre páginas de uma lista.
 *
 * Lógica de range com ellipsis: mostra 1 ... atual-1 atual atual+1 ... última.
 * Se a distância for pequena, mostra todas sem ellipsis.
 *
 * Não-controlado por padrão: chama onPageChange(n) e cabe ao consumidor
 * atualizar o estado externo (URL, estado de listagem, etc.).
 */

import * as React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Quantas páginas visíveis ao redor da atual. Default: 1. */
  siblings?: number;
  className?: string;
}

const ELLIPSIS = '...' as const;

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/** Calcula os números visíveis com ellipsis nas pontas se necessário. */
function getRange(page: number, totalPages: number, siblings: number): Array<number | typeof ELLIPSIS> {
  const totalNumbers = siblings * 2 + 5; // 1 + ... + 2*sib + atual + ... + last
  if (totalNumbers >= totalPages) return range(1, totalPages);

  const leftSibling  = Math.max(page - siblings, 1);
  const rightSibling = Math.min(page + siblings, totalPages);

  const showLeftEllipsis  = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const left = range(1, 3 + siblings * 2);
    return [...left, ELLIPSIS, totalPages];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const right = range(totalPages - (2 + siblings * 2), totalPages);
    return [1, ELLIPSIS, ...right];
  }
  return [1, ELLIPSIS, ...range(leftSibling, rightSibling), ELLIPSIS, totalPages];
}

const itemBase = cn(
  'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2',
  'text-body-sm font-medium',
  'transition-colors duration-[var(--duration-fast)] ease-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
);

export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblings = 1,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getRange(page, totalPages, siblings);
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <nav aria-label="Paginação" className={cn('flex items-center gap-1', className)}>
      <button
        type="button"
        disabled={!canPrev}
        onClick={() => canPrev && onPageChange(page - 1)}
        aria-label="Página anterior"
        className={cn(
          itemBase,
          'gap-1 text-foreground-muted',
          canPrev && 'hover:bg-control-hover hover:text-foreground cursor-pointer',
          !canPrev && 'opacity-40 cursor-not-allowed',
        )}
      >
        <CaretLeft size={14} weight="bold" />
        <span className="hidden sm:inline">Anterior</span>
      </button>

      {pages.map((p, i) =>
        p === ELLIPSIS ? (
          <span
            key={`ellipsis-${i}`}
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center text-foreground-muted"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === page ? 'page' : undefined}
            onClick={() => onPageChange(p)}
            className={cn(
              itemBase,
              p === page
                ? 'bg-brand-500/14 text-brand-300'
                : 'text-foreground hover:bg-control-hover cursor-pointer',
            )}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={!canNext}
        onClick={() => canNext && onPageChange(page + 1)}
        aria-label="Próxima página"
        className={cn(
          itemBase,
          'gap-1 text-foreground-muted',
          canNext && 'hover:bg-control-hover hover:text-foreground cursor-pointer',
          !canNext && 'opacity-40 cursor-not-allowed',
        )}
      >
        <span className="hidden sm:inline">Próxima</span>
        <CaretRight size={14} weight="bold" />
      </button>
    </nav>
  );
}
