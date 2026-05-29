'use client';

/**
 * Sheet (Drawer) — painel lateral sobre Radix Dialog.
 *
 * Mesmo paradigma do Dialog (modal centralizado), mas o conteúdo entra
 * deslizando de uma das bordas. Bom pra:
 *   • painéis de detalhe (resumo da conversa, detalhe do domínio…)
 *   • drawer de notificações
 *   • menu mobile
 *   • formulários laterais (sem perder o contexto da página)
 *
 * Compose:
 *   <Sheet>
 *     <SheetTrigger asChild><Button>Abrir</Button></SheetTrigger>
 *     <SheetContent side="right">
 *       <SheetHeader>
 *         <SheetTitle>Detalhes</SheetTitle>
 *         <SheetDescription>...</SheetDescription>
 *       </SheetHeader>
 *       ...
 *       <SheetFooter>
 *         <SheetClose asChild><Button variant="secondary">Cancelar</Button></SheetClose>
 *         <Button>Salvar</Button>
 *       </SheetFooter>
 *     </SheetContent>
 *   </Sheet>
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetPortal = DialogPrimitive.Portal;
export const SheetClose = DialogPrimitive.Close;

// ── Overlay ─────────────────────────────────────────────────────────────────

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
      'transition-opacity duration-[var(--duration-normal)] ease-out',
      'data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

// ── Content ─────────────────────────────────────────────────────────────────
// Posicionamento + animação por lado. Tamanhos sensatos por padrão; o
// consumidor pode sobrescrever via className (max-w-*, h-*).

const sheetVariants = cva(
  cn(
    'fixed z-50 flex flex-col gap-4 bg-surface shadow-2xl',
    'border-border',
    'focus:outline-none',
  ),
  {
    variants: {
      side: {
        right: cn(
          'inset-y-0 right-0 h-full w-full sm:max-w-md border-l',
          'data-[state=open]:animate-sheet-in-right',
          'data-[state=closed]:animate-sheet-out-right',
        ),
        left: cn(
          'inset-y-0 left-0 h-full w-full sm:max-w-md border-r',
          'data-[state=open]:animate-sheet-in-left',
          'data-[state=closed]:animate-sheet-out-left',
        ),
        top: cn(
          'inset-x-0 top-0 w-full max-h-[85vh] border-b',
          'data-[state=open]:animate-sheet-in-top',
          'data-[state=closed]:animate-sheet-out-top',
        ),
        bottom: cn(
          'inset-x-0 bottom-0 w-full max-h-[85vh] border-t',
          'data-[state=open]:animate-sheet-in-bottom',
          'data-[state=closed]:animate-sheet-out-bottom',
        ),
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  /** Mostra o botão de fechar (X) no canto superior direito. Default true. */
  showClose?: boolean;
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = 'right', showClose = true, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), 'p-6', className)}
      {...props}
    >
      {children}
      {showClose && (
        <DialogPrimitive.Close
          aria-label="Fechar"
          className={cn(
            'absolute right-4 top-4 inline-flex size-7 items-center justify-center rounded-md',
            'text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-out',
            'hover:bg-control-hover hover:text-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
          )}
        >
          <X size={16} weight="bold" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

// ── Header / Footer / Title / Description ──────────────────────────────────

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-1.5 pr-8', className)} {...props} />
  );
}

export function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mt-auto flex flex-col-reverse gap-2 border-t border-border pt-4 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  );
}

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('font-sans text-h4 font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-body-sm text-foreground-muted', className)}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

// ── Body (área rolável entre header e footer) ──────────────────────────────

export function SheetBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('-mx-6 flex-1 overflow-y-auto px-6 text-body-sm text-foreground', className)}
      {...props}
    />
  );
}
