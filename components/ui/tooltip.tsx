'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 max-w-xs rounded-md border border-border bg-surface px-2.5 py-1.5',
        'text-caption text-foreground shadow-lg',
        'origin-[var(--radix-tooltip-content-transform-origin)]',
        'transition-[opacity,transform] duration-150 ease-out',
        'data-[state=closed]:opacity-0 data-[state=closed]:scale-95',
        'data-[state=delayed-open]:opacity-100 data-[state=delayed-open]:scale-100',
        'data-[state=instant-open]:opacity-100 data-[state=instant-open]:scale-100',
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-surface" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
