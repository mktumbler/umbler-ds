'use client';

import {
  List,
  ListItem,
  ListItemLeading,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
} from '@/components/ui/list';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Folder,
  File,
  Image as ImageIcon,
  CaretRight,
  ChatCircle,
  Bell,
  Gear,
  Lock,
} from '@phosphor-icons/react/dist/ssr';

export function ListBasic() {
  return (
    <List bordered dividers>
      <ListItem>
        <ListItemLeading><Folder weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Documentos</ListItemTitle>
          <ListItemDescription>42 arquivos</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>2 MB</ListItemTrailing>
      </ListItem>
      <ListItem>
        <ListItemLeading><ImageIcon weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Imagens</ListItemTitle>
          <ListItemDescription>318 itens</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>148 MB</ListItemTrailing>
      </ListItem>
      <ListItem>
        <ListItemLeading><File weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Faturas</ListItemTitle>
          <ListItemDescription>12 arquivos</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>3 MB</ListItemTrailing>
      </ListItem>
    </List>
  );
}

export function ListInteractive() {
  return (
    <List bordered dividers interactive>
      <ListItem onClick={() => alert('Abrir conversa Acme')}>
        <ListItemLeading>
          <Avatar size="sm" name="Acme Comercial" />
        </ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Acme S.A.</ListItemTitle>
          <ListItemDescription>Última mensagem há 5 min</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>
          <Badge variant="brand">3</Badge>
          <CaretRight />
        </ListItemTrailing>
      </ListItem>
      <ListItem onClick={() => alert('Abrir conversa João')}>
        <ListItemLeading>
          <Avatar size="sm" name="João Vendas" />
        </ListItemLeading>
        <ListItemContent>
          <ListItemTitle>João Vendas</ListItemTitle>
          <ListItemDescription>Aguardando resposta</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>
          <Badge variant="warning">!</Badge>
          <CaretRight />
        </ListItemTrailing>
      </ListItem>
      <ListItem onClick={() => alert('Abrir conversa Loja Verão')}>
        <ListItemLeading>
          <Avatar size="sm" name="Loja Verão" />
        </ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Loja Verão</ListItemTitle>
          <ListItemDescription>Resolvida há 1 h</ListItemDescription>
        </ListItemContent>
        <ListItemTrailing>
          <CaretRight />
        </ListItemTrailing>
      </ListItem>
    </List>
  );
}

export function ListDense() {
  return (
    <List bordered dividers dense interactive>
      <ListItem onClick={() => alert('Notificações')}>
        <ListItemLeading><Bell weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Notificações</ListItemTitle>
        </ListItemContent>
        <ListItemTrailing>
          <Badge variant="brand">12</Badge>
        </ListItemTrailing>
      </ListItem>
      <ListItem onClick={() => alert('Mensagens')}>
        <ListItemLeading><ChatCircle weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Mensagens</ListItemTitle>
        </ListItemContent>
        <ListItemTrailing>
          <Badge variant="brand">3</Badge>
        </ListItemTrailing>
      </ListItem>
      <ListItem onClick={() => alert('Configurações')}>
        <ListItemLeading><Gear weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Configurações</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem onClick={() => alert('Segurança')}>
        <ListItemLeading><Lock weight="fill" /></ListItemLeading>
        <ListItemContent>
          <ListItemTitle>Segurança</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </List>
  );
}

export function ListFlat() {
  return (
    <List dividers>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Push em <span className="font-mono text-body-sm">main</span></ListItemTitle>
          <ListItemDescription>Adriano · há 5 min · 4 commits</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Merge da PR #318</ListItemTitle>
          <ListItemDescription>Adriano · há 42 min · 8 commits</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Release v2.13.0</ListItemTitle>
          <ListItemDescription>Adriano · há 4 dias</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
  );
}
