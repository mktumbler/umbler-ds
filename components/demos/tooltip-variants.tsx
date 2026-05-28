'use client';

import { Question } from '@phosphor-icons/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export function TooltipBasic() {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex items-center gap-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Passe o mouse</Button>
          </TooltipTrigger>
          <TooltipContent>Texto auxiliar do tooltip</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              aria-label="Ajuda"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground-muted hover:text-foreground"
            >
              <Question size={16} weight="bold" />
            </button>
          </TooltipTrigger>
          <TooltipContent>O que isso significa?</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

export function TooltipSides() {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>Lado: {side}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function TooltipRich() {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Detalhes</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[260px] p-3">
          <p className="text-body-sm font-medium text-foreground">Plano Pro</p>
          <p className="mt-1 text-caption text-foreground-muted">
            Limite de 100 mil requests/mês, suporte por chat e domínio personalizado incluso.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
