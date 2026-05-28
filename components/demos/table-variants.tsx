'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const invoices = [
  { id: 'UMB-2401', plano: 'Talk Pro',  cliente: 'Acme S.A.',     status: 'Pago',     valor: 'R$ 1.890,00' },
  { id: 'UMB-2402', plano: 'Talk Lite', cliente: 'João Vendas',   status: 'Pendente', valor: 'R$ 290,00'   },
  { id: 'UMB-2403', plano: 'Talk Pro',  cliente: 'Loja Verão',    status: 'Pago',     valor: 'R$ 1.890,00' },
  { id: 'UMB-2404', plano: 'Hosting',   cliente: 'Studio Aqui',   status: 'Atrasado', valor: 'R$ 49,90'    },
  { id: 'UMB-2405', plano: 'Talk Pro',  cliente: 'Bistrô do Tio', status: 'Pago',     valor: 'R$ 1.890,00' },
];

function StatusBadge({ status }: { status: string }) {
  const variant: Record<string, 'success' | 'warning' | 'error' | 'neutral'> = {
    Pago: 'success',
    Pendente: 'warning',
    Atrasado: 'error',
  };
  return <Badge variant={variant[status] ?? 'neutral'}>{status}</Badge>;
}

export function TableBasic() {
  return (
    <Table>
      <TableCaption>Faturas de Maio/2026.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fatura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Plano</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((i) => (
          <TableRow key={i.id}>
            <TableCell className="font-medium">{i.id}</TableCell>
            <TableCell>{i.cliente}</TableCell>
            <TableCell className="text-foreground-muted">{i.plano}</TableCell>
            <TableCell><StatusBadge status={i.status} /></TableCell>
            <TableCell className="text-right tabular-nums">{i.valor}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right tabular-nums">R$ 6.009,90</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export function TableZebraDense() {
  return (
    <Table zebra dense>
      <TableHeader>
        <TableRow>
          <TableHead>Fatura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((i) => (
          <TableRow key={i.id}>
            <TableCell className="font-medium">{i.id}</TableCell>
            <TableCell>{i.cliente}</TableCell>
            <TableCell><StatusBadge status={i.status} /></TableCell>
            <TableCell className="text-right tabular-nums">{i.valor}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TableInteractive() {
  return (
    <Table interactive>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Plano</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 3).map((i) => (
          <TableRow key={i.id} onClick={() => alert(`Abrir ${i.id}`)}>
            <TableCell className="font-medium">{i.cliente}</TableCell>
            <TableCell className="text-foreground-muted">{i.plano}</TableCell>
            <TableCell><StatusBadge status={i.status} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
