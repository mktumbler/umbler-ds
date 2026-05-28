'use client';

/**
 * Popover — overlay contextual com conteúdo rico (texto, ações, formulários).
 *
 * Diferenças vs. Tooltip e Dropdown:
 *   - Tooltip: apenas texto curto, abre no hover/focus, não clicável internamente.
 *   - Dropdown: lista de ações com navegação por teclado (setas).
 *   - Popover: container livre, clicável por dentro, abre no clique. Ideal para
 *     mini-formulários, picks de cor/data, ações secundárias com explicação.
 */

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

const contentStyles = cn(
  'z-50 w-72 rounded-lg border border-border bg-surface p-4 shadow-xl',
  'origin-[var(--radix-popover-content-transform-origin)]',
  'transition-[opacity,transform] duration-[var(--duration-fast)] ease-out',
  'data-[state=closed]:opacity-0 data-[state=closed]:scale-95',
  'data-[state=open]:opacity-100 data-[state=open]:scale-100',
  'outline-none',
);

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    /** Renderiza uma setinha apontando pro trigger. Default: false. */
    arrow?: boolean;
  }
>(({ className, align = 'center', sideOffset = 6, arrow = false, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(contentStyles, className)}
      {...props}
    >
      {children}
      {arrow && <PopoverPrimitive.Arrow className="fill-surface stroke-border" />}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
