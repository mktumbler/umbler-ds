'use client';

import { MagnifyingGlass, Plus, Eye, DotsThree } from '@phosphor-icons/react/dist/ssr';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { Avatar } from '@/components/ui/avatar';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import {
  DataListPage,
  PageHeader,
  DataToolbar,
} from '@/components/blocks/data-list-page';

const contatos = [
  { name: 'Jana',     phone: '+55 19 99576-4300', since: '12 minutos',  tag: { variant: 'brand'   as const, label: 'Proposta' } },
  { name: 'Nathan',   phone: '+55 31 98756-5581', since: '2 horas',     tag: { variant: 'error'   as const, label: 'Teste'    } },
  { name: 'Fernando', phone: '+55 51 99370-3086', since: '4 horas',     tag: { variant: 'warning' as const, label: 'Indif.'   } },
  { name: 'Amandah',  phone: '+55 51 98653-0667', since: '4 horas',     tag: { variant: 'success' as const, label: 'Sales'    } },
];

/* ──────────────────────────────────────────────────────────
   Réplica do "Talk → Contatos"
   ────────────────────────────────────────────────────────── */
export function DataListPageFullDemo() {
  return (
    <DataListPage
      header={
        <PageHeader
          title="Contatos"
          count={4743}
          description="Aqui você pode gerenciar as informações dos seus contatos e acessar os históricos de mensagens."
        />
      }
      toolbar={
        <DataToolbar
          actions={<Button><Plus size={16} weight="bold" /> Adicionar contato</Button>}
        >
          <Input
            placeholder="Pesquisar"
            leftElement={<MagnifyingGlass size={16} />}
            className="max-w-xs"
          />
          <Select defaultValue="todos" className="w-32">
            <option value="todos">Todos</option>
            <option value="ativos">Ativos</option>
            <option value="inativos">Inativos</option>
          </Select>
          <Select defaultValue="etiquetas" className="w-36">
            <option value="etiquetas">Etiquetas</option>
            <option value="propostas">Propostas</option>
            <option value="sales">Sales</option>
          </Select>
        </DataToolbar>
      }
    >
      <Table interactive>
        <TableHeader>
          <TableRow>
            <TableHead>Contato</TableHead>
            <TableHead>Etiquetas</TableHead>
            <TableHead className="w-px text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contatos.map((c) => (
            <TableRow key={c.name}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar name={c.name} size="sm" />
                  <div>
                    <div className="text-body-sm font-medium text-foreground">
                      {c.name} <span className="font-normal text-foreground-muted">— há {c.since}</span>
                    </div>
                    <div className="text-caption text-foreground-muted">{c.phone}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Tag variant={c.tag.variant}>{c.tag.label}</Tag>
              </TableCell>
              <TableCell className="text-right">
                <button className="text-foreground-muted hover:text-foreground" aria-label="Ver">
                  <Eye size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataListPage>
  );
}

/* ──────────────────────────────────────────────────────────
   Variação: sem count, sem description
   ────────────────────────────────────────────────────────── */
export function DataListPageMinimalDemo() {
  return (
    <DataListPage
      header={<PageHeader title="Chatbots" />}
      toolbar={
        <DataToolbar
          actions={<Button><Plus size={16} weight="bold" /> Novo chatbot</Button>}
        >
          <Input
            placeholder="Pesquisar"
            leftElement={<MagnifyingGlass size={16} />}
            className="max-w-xs"
          />
        </DataToolbar>
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Atualizado em</TableHead>
            <TableHead className="w-px text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Fluxo de boas-vindas</TableCell>
            <TableCell className="text-foreground-muted">há 3 dias</TableCell>
            <TableCell className="text-right">
              <button className="text-foreground-muted hover:text-foreground" aria-label="Mais">
                <DotsThree size={20} />
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Triagem de suporte</TableCell>
            <TableCell className="text-foreground-muted">há 2 meses</TableCell>
            <TableCell className="text-right">
              <button className="text-foreground-muted hover:text-foreground" aria-label="Mais">
                <DotsThree size={20} />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DataListPage>
  );
}

/* ──────────────────────────────────────────────────────────
   Só PageHeader — para reuso em qualquer página
   ────────────────────────────────────────────────────────── */
export function PageHeaderSoloDemo() {
  return (
    <PageHeader
      title="Agentes de IA"
      count={744}
      description="Aqui você consegue criar, configurar e treinar os seus agentes de IA."
      trailing={<Button>Novo agente</Button>}
    />
  );
}
