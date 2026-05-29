'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetBody,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input, InputLabel } from '@/components/ui/input';
import {
  List,
  ListItem,
  ListItemLeading,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
} from '@/components/ui/list';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle, WarningCircle, ChatCircle } from '@phosphor-icons/react/dist/ssr';

export function SheetBasic() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Abrir painel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detalhes do domínio</SheetTitle>
          <SheetDescription>
            Configurações de DNS, redirecionamentos e certificado SSL.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-1">
              <InputLabel>Domínio</InputLabel>
              <Input defaultValue="acme.com.br" readOnly />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel>Servidor primário</InputLabel>
              <Input defaultValue="ns1.umbler.com" />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel>Servidor secundário</InputLabel>
              <Input defaultValue="ns2.umbler.com" />
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Salvar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetSides() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Painel à direita</SheetTitle>
            <SheetDescription>Padrão para detalhes e formulários laterais.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu lateral</SheetTitle>
            <SheetDescription>Bom pra navegação em mobile.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Banner de aviso</SheetTitle>
            <SheetDescription>Notícias importantes que ocupam toda a largura.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Action sheet</SheetTitle>
            <SheetDescription>Sobe a partir do rodapé — ideal pra mobile.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function SheetNotifications() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Bell size={16} /> Notificações
          <Badge variant="brand" size="sm" className="ml-1">4</Badge>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Notificações</SheetTitle>
          <SheetDescription>4 novas atualizações desde sua última visita.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <List dividers interactive className="-mx-6">
            <ListItem onClick={() => {}}>
              <ListItemLeading><CheckCircle weight="fill" className="text-success-500" /></ListItemLeading>
              <ListItemContent>
                <ListItemTitle>Deploy concluído</ListItemTitle>
                <ListItemDescription>v2.14.0 publicada em produção</ListItemDescription>
              </ListItemContent>
              <ListItemTrailing>há 5 min</ListItemTrailing>
            </ListItem>
            <ListItem onClick={() => {}}>
              <ListItemLeading><WarningCircle weight="fill" className="text-warning-500" /></ListItemLeading>
              <ListItemContent>
                <ListItemTitle>Quota próxima do limite</ListItemTitle>
                <ListItemDescription>Banco do staging em 82%</ListItemDescription>
              </ListItemContent>
              <ListItemTrailing>há 1 h</ListItemTrailing>
            </ListItem>
            <ListItem onClick={() => {}}>
              <ListItemLeading><ChatCircle weight="fill" className="text-brand-500" /></ListItemLeading>
              <ListItemContent>
                <ListItemTitle>Nova mensagem de Acme S.A.</ListItemTitle>
                <ListItemDescription>"Olá, vocês oferecem suporte 24h?"</ListItemDescription>
              </ListItemContent>
              <ListItemTrailing>há 2 h</ListItemTrailing>
            </ListItem>
            <ListItem onClick={() => {}}>
              <ListItemLeading><Bell weight="fill" className="text-foreground-muted" /></ListItemLeading>
              <ListItemContent>
                <ListItemTitle>Manutenção programada</ListItemTitle>
                <ListItemDescription>Sábado às 23h, ~15 min</ListItemDescription>
              </ListItemContent>
              <ListItemTrailing>ontem</ListItemTrailing>
            </ListItem>
          </List>
        </SheetBody>
        <SheetFooter>
          <Button variant="ghost" className="w-full sm:w-auto">Marcar todas como lidas</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
