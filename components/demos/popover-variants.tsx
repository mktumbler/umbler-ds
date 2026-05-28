'use client';

import * as React from 'react';
import { Gear, Question } from '@phosphor-icons/react';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input, InputGroup, InputLabel } from '@/components/ui/input';

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-body-sm text-foreground">
          Popover ancorado no botão. Clique fora ou aperte <kbd>Esc</kbd> pra fechar.
        </p>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverWithForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Gear size={16} weight="bold" /> Configurar
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-body-sm font-semibold text-foreground">Limites</p>
            <p className="text-caption text-foreground-muted">
              Ajuste os limites de uso do agente.
            </p>
          </div>
          <InputGroup>
            <InputLabel>Mensagens/hora</InputLabel>
            <Input type="number" defaultValue={120} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Sessões simultâneas</InputLabel>
            <Input type="number" defaultValue={4} />
          </InputGroup>
          <div className="flex justify-end gap-2 pt-1">
            <PopoverClose asChild>
              <Button variant="ghost" size="sm">Cancelar</Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button size="sm">Salvar</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverIconTrigger() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Sobre cobrança"
          className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground-muted hover:text-foreground"
        >
          <Question size={16} weight="bold" />
        </button>
      </PopoverTrigger>
      <PopoverContent arrow>
        <p className="text-body-sm font-semibold text-foreground">Como funciona a cobrança?</p>
        <p className="mt-1 text-caption text-foreground-muted">
          Cobramos pelo uso a cada início de mês. Você pode mudar de plano ou pausar a qualquer momento sem multa.
        </p>
      </PopoverContent>
    </Popover>
  );
}
