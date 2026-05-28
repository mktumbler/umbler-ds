'use client';

/**
 * Accordion — seções de conteúdo expansíveis/colapsáveis verticalmente.
 *
 * Construído sobre Radix Accordion. Suporta modo single (uma aberta por vez)
 * ou multiple (várias simultâneas). Animação de altura via CSS variables que
 * o Radix expõe (--radix-accordion-content-height).
 */

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-border last:border-b-0', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between gap-4 py-4',
        'text-left text-body font-medium text-foreground',
        'transition-colors duration-[var(--duration-fast)] ease-out',
        'hover:text-brand-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm',
        '[&[data-state=open]>svg]:rotate-180',
        'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
      <CaretDown
        size={16}
        weight="bold"
        aria-hidden
        className="shrink-0 text-foreground-muted transition-transform duration-[var(--duration-base)] ease-out"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    /**
     * Animação de altura: Radix expõe --radix-accordion-content-height na própria
     * Content. Aplicamos no overflow:hidden + data-state pra animar.
     */
    className={cn(
      'overflow-hidden text-body-sm text-foreground-muted',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
    )}
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';
