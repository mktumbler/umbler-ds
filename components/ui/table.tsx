/**
 * Table — compound semântico em cima dos elementos nativos do HTML.
 *
 * Fica em <table> + <thead>/<tbody>/<tr>/<th>/<td>/<caption>, mas com
 * estilo, tokens e comportamento do DS:
 *   • zebra        — alterna a cor das linhas pares
 *   • dense        — padding compacto pra listagens
 *   • bordered     — bordas internas (default = só horizontais)
 *   • interactive  — hover destaca a linha; usar em listas clicáveis
 *
 * Compose:
 *   <Table>
 *     <TableCaption>...</TableCaption>
 *     <TableHeader>
 *       <TableRow>
 *         <TableHead>Nome</TableHead>
 *         ...
 *       </TableRow>
 *     </TableHeader>
 *     <TableBody>
 *       <TableRow><TableCell>...</TableCell>...</TableRow>
 *     </TableBody>
 *   </Table>
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ── Contexto pra propagar variantes pros descendentes ────────────────────────

type TableVariantCtx = {
  zebra?: boolean;
  dense?: boolean;
  bordered?: boolean;
  interactive?: boolean;
};

const TableContext = React.createContext<TableVariantCtx>({});

// ── Root ─────────────────────────────────────────────────────────────────────

const tableVariants = cva(
  'w-full caption-bottom text-body-sm text-foreground border-collapse',
);

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants>,
    TableVariantCtx {}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, zebra, dense, bordered, interactive, ...props }, ref) => (
    <TableContext.Provider value={{ zebra, dense, bordered, interactive }}>
      <div className="w-full overflow-x-auto rounded-lg border border-border bg-surface">
        <table
          ref={ref}
          className={cn(tableVariants(), className)}
          {...props}
        />
      </div>
    </TableContext.Provider>
  ),
);
Table.displayName = 'Table';

// ── Header ───────────────────────────────────────────────────────────────────

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'bg-surface-raised text-foreground-muted [&_tr]:border-b [&_tr]:border-border',
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

// ── Body ─────────────────────────────────────────────────────────────────────

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0',
      className,
    )}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

// ── Footer (sumários, totais) ────────────────────────────────────────────────

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t border-border bg-surface-raised font-semibold text-foreground',
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

// ── Row ──────────────────────────────────────────────────────────────────────

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const { zebra, interactive } = React.useContext(TableContext);
  return (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border transition-colors duration-[var(--duration-fast)]',
        zebra && 'even:bg-surface-raised/40',
        interactive && 'cursor-pointer hover:bg-control-hover',
        'data-[state=selected]:bg-brand-500/10',
        className,
      )}
      {...props}
    />
  );
});
TableRow.displayName = 'TableRow';

// ── Head cell ────────────────────────────────────────────────────────────────

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { dense, bordered } = React.useContext(TableContext);
  return (
    <th
      ref={ref}
      className={cn(
        'text-left align-middle font-semibold text-foreground-muted',
        'whitespace-nowrap',
        dense ? 'h-9 px-3 text-caption' : 'h-11 px-4',
        bordered && 'border-r border-border last:border-r-0',
        '[&:has([role=checkbox])]:w-px [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  );
});
TableHead.displayName = 'TableHead';

// ── Body cell ────────────────────────────────────────────────────────────────

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { dense, bordered } = React.useContext(TableContext);
  return (
    <td
      ref={ref}
      className={cn(
        'align-middle text-foreground',
        dense ? 'py-2 px-3' : 'py-3 px-4',
        bordered && 'border-r border-border last:border-r-0',
        '[&:has([role=checkbox])]:w-px [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  );
});
TableCell.displayName = 'TableCell';

// ── Caption ──────────────────────────────────────────────────────────────────

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-3 text-caption text-foreground-muted', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';
