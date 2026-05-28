'use client';

import * as React from 'react';
import {
  CaretDown,
  Copy,
  PencilSimple,
  Plus,
  Share,
  Trash,
  Sun,
  Moon,
  Desktop,
} from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { Button } from '@/components/ui/button';

export function DropdownBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          Ações
          <CaretDown size={14} weight="bold" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <PencilSimple size={14} weight="bold" />
          Editar
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy size={14} weight="bold" />
          Duplicar
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share size={14} weight="bold" />
          Compartilhar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>
          <Trash size={14} weight="bold" />
          Excluir
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownWithLabel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Plus size={14} weight="bold" />
          Novo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Criar</DropdownMenuLabel>
        <DropdownMenuItem>Projeto</DropdownMenuItem>
        <DropdownMenuItem>Site</DropdownMenuItem>
        <DropdownMenuItem>Banco de dados</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Importar</DropdownMenuLabel>
        <DropdownMenuItem>De um repositório Git</DropdownMenuItem>
        <DropdownMenuItem>De um arquivo .zip</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownCheckboxesAndRadios() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityLog, setShowActivityLog] = React.useState(false);
  const [theme, setTheme] = React.useState('system');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Preferências
          <CaretDown size={14} weight="bold" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Painel</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Barra de status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityLog}
          onCheckedChange={setShowActivityLog}
        >
          Log de atividade
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <Sun size={14} weight="bold" /> Claro
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <Moon size={14} weight="bold" /> Escuro
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <Desktop size={14} weight="bold" /> Sistema
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
