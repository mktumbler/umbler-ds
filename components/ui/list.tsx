/**
 * List — lista vertical genérica em compound.
 *
 * Cobre o "list group" tradicional: itens em coluna com slots opcionais
 * de leading (ícone/avatar) e trailing (ação/timestamp/badge). Itens
 * podem ser interativos (cursor pointer + hover) sem deixar de ser
 * `<li>` semântico — o handler vai onde fizer sentido (link/botão real
 * por dentro, ou onClick no próprio item pra casos simples).
 *
 * Variantes (no <List>, propagadas via Context):
 *   • dividers   — separador entre itens
 *   • bordered   — borda externa + cantos arredondados (vira um "cartão de lista")
 *   • dense      — padding reduzido
 *   • interactive— hover destaca o item; combine com onClick no <ListItem>
 *
 * Compose:
 *   <List bordered dividers>
 *     <ListItem>
 *       <ListItemLeading><Avatar ... /></ListItemLeading>
 *       <ListItemContent>
 *         <ListItemTitle>Acme S.A.</ListItemTitle>
 *         <ListItemDescription>3 conversas abertas</ListItemDescription>
 *       </ListItemContent>
 *       <ListItemTrailing>
 *         <Badge>Pago</Badge>
 *       </ListItemTrailing>
 *     </ListItem>
 *   </List>
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

// ── Contexto pra propagar variantes pros descendentes ───────────────────────

type ListVariantCtx = {
  dividers?: boolean;
  bordered?: boolean;
  dense?: boolean;
  interactive?: boolean;
};

const ListContext = React.createContext<ListVariantCtx>({});

// ── Root ────────────────────────────────────────────────────────────────────

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    ListVariantCtx {}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, dividers, bordered, dense, interactive, ...props }, ref) => (
    <ListContext.Provider value={{ dividers, bordered, dense, interactive }}>
      <ul
        ref={ref}
        className={cn(
          'flex flex-col',
          bordered && 'overflow-hidden rounded-lg border border-border bg-surface',
          className,
        )}
        {...props}
      />
    </ListContext.Provider>
  ),
);
List.displayName = 'List';

// ── Item ────────────────────────────────────────────────────────────────────

export interface ListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * Marca esse item específico como interativo (override do contexto).
   * Se não passar, herda do `<List interactive>`.
   */
  interactive?: boolean;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, interactive: itemInteractive, onClick, ...props }, ref) => {
    const ctx = React.useContext(ListContext);
    const interactive = itemInteractive ?? ctx.interactive ?? !!onClick;
    return (
      <li
        ref={ref}
        onClick={onClick}
        className={cn(
          'flex items-center gap-3 text-foreground',
          ctx.dense ? 'px-3 py-2 text-body-sm' : 'px-4 py-3 text-body',
          ctx.dividers && 'border-b border-border last:border-b-0',
          interactive && [
            'cursor-pointer transition-colors duration-[var(--duration-fast)]',
            'hover:bg-control-hover',
            'focus-visible:bg-control-hover focus-visible:outline-none',
          ],
          className,
        )}
        // Acessibilidade: itens interativos viram focáveis por teclado
        {...(interactive ? { tabIndex: 0, role: 'button' as const } : null)}
        {...props}
      />
    );
  },
);
ListItem.displayName = 'ListItem';

// ── Leading (avatar/ícone à esquerda) ───────────────────────────────────────

export const ListItemLeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex shrink-0 items-center justify-center text-foreground-muted',
      '[&>svg]:h-5 [&>svg]:w-5',
      className,
    )}
    {...props}
  />
));
ListItemLeading.displayName = 'ListItemLeading';

// ── Content (título + descrição) ────────────────────────────────────────────

export const ListItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('min-w-0 flex-1', className)} {...props} />
));
ListItemContent.displayName = 'ListItemContent';

// ── Title ───────────────────────────────────────────────────────────────────

export const ListItemTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('truncate font-medium text-foreground', className)}
    {...props}
  />
));
ListItemTitle.displayName = 'ListItemTitle';

// ── Description ─────────────────────────────────────────────────────────────

export const ListItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('truncate text-caption text-foreground-muted', className)}
    {...props}
  />
));
ListItemDescription.displayName = 'ListItemDescription';

// ── Trailing (ação/badge/timestamp à direita) ───────────────────────────────

export const ListItemTrailing = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ml-auto flex shrink-0 items-center gap-2 text-caption text-foreground-muted',
      '[&>svg]:h-4 [&>svg]:w-4',
      className,
    )}
    {...props}
  />
));
ListItemTrailing.displayName = 'ListItemTrailing';
