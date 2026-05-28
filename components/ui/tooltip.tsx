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
        'z-50 max-w-xs rounded-md px-2.5 py-1.5',
        'bg-tooltip-bg text-tooltip-fg',
        'text-caption shadow-lg',
        'will-change-[opacity,transform]',
        // Slide direcional: combina data-side (Radix) + data-state.
        // Radix v1 desmonta o Content imediatamente no close, então
        // só animamos a entrada (delayed-open + instant-open).
        'data-[side=top]:data-[state=delayed-open]:animate-tooltip-from-bottom',
        'data-[side=top]:data-[state=instant-open]:animate-tooltip-from-bottom',
        'data-[side=bottom]:data-[state=delayed-open]:animate-tooltip-from-top',
        'data-[side=bottom]:data-[state=instant-open]:animate-tooltip-from-top',
        'data-[side=left]:data-[state=delayed-open]:animate-tooltip-from-right',
        'data-[side=left]:data-[state=instant-open]:animate-tooltip-from-right',
        'data-[side=right]:data-[state=delayed-open]:animate-tooltip-from-left',
        'data-[side=right]:data-[state=instant-open]:animate-tooltip-from-left',
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-tooltip-bg" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
