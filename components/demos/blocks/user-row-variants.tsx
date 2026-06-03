'use client';

import { useState } from 'react';
import { Eye, DotsThree } from '@phosphor-icons/react/dist/ssr';
import { Badge } from '@/components/ui/badge';
import { UserRow } from '@/components/blocks/user-row';

/* ──────────────────────────────────────────────────────────
   Básico — réplica do "Talk → Contatos"
   ────────────────────────────────────────────────────────── */
export function UserRowBasicDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface divide-y divide-border">
      <UserRow
        avatar={{ name: 'Jana Silva' }}
        name="Jana"
        meta="- há 12 minutos"
        subtitle="+55 19 99576-4300"
        tags={<Badge variant="brand" shape="tag">Proposta</Badge>}
        action={
          <button className="text-foreground-muted hover:text-foreground" aria-label="Ver">
            <Eye size={18} />
          </button>
        }
      />
      <UserRow
        avatar={{ name: 'Nathan Costa' }}
        name="Nathan"
        meta="- há 2 horas"
        subtitle="+55 31 98756-5581"
        tags={<Badge variant="error" shape="tag">Teste</Badge>}
        action={
          <button className="text-foreground-muted hover:text-foreground" aria-label="Ver">
            <Eye size={18} />
          </button>
        }
      />
      <UserRow
        avatar={{ name: 'Fernando Lima' }}
        name="Fernando"
        meta="- há 4 horas"
        subtitle="+55 51 99370-3086"
        tags={
          <>
            <Badge variant="warning" shape="tag">Indif.</Badge>
            <Badge variant="success" shape="tag">Sales</Badge>
          </>
        }
        action={
          <button className="text-foreground-muted hover:text-foreground" aria-label="Mais opções">
            <DotsThree size={20} />
          </button>
        }
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Com checkbox de seleção
   ────────────────────────────────────────────────────────── */
export function UserRowSelectableDemo() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => (v: boolean) => setSelected((s) => ({ ...s, [id]: v }));

  return (
    <div className="rounded-lg border border-border bg-surface divide-y divide-border">
      <UserRow
        selectable
        selected={selected.jana}
        onSelectedChange={toggle('jana')}
        avatar={{ name: 'Jana Silva' }}
        name="Jana"
        meta="- há 12 minutos"
        subtitle="+55 19 99576-4300"
        tags={<Badge variant="brand" shape="tag">Proposta</Badge>}
      />
      <UserRow
        selectable
        selected={selected.nathan}
        onSelectedChange={toggle('nathan')}
        avatar={{ name: 'Nathan Costa' }}
        name="Nathan"
        meta="- há 2 horas"
        subtitle="+55 31 98756-5581"
        tags={<Badge variant="error" shape="tag">Teste</Badge>}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Clicável — réplica do "Nova conversa" modal
   ────────────────────────────────────────────────────────── */
export function UserRowInteractiveDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface divide-y divide-border">
      <UserRow
        interactive
        onClick={() => alert('Abrir conversa com Jana')}
        avatar={{ name: 'Jana Silva' }}
        name="Jana"
        meta="- há 14 minutos"
        subtitle="+55 19 99576-4300"
        tags={<Badge variant="brand" shape="tag">Proposta</Badge>}
      />
      <UserRow
        interactive
        onClick={() => alert('Abrir conversa com Nathan')}
        avatar={{ name: 'Nathan Costa' }}
        name="Nathan"
        meta="- há 3 horas"
        subtitle="+55 31 98756-5581"
        tags={<Badge variant="error" shape="tag">Teste</Badge>}
      />
      <UserRow
        interactive
        onClick={() => alert('Abrir conversa com Fernando')}
        avatar={{ name: 'Fernando Lima' }}
        name="Fernando"
        meta="- há 4 horas"
        subtitle="+55 51 99370-3086"
        tags={
          <>
            <Badge variant="warning" shape="tag">Indif.</Badge>
            <Badge variant="success" shape="tag">Sales</Badge>
          </>
        }
      />
    </div>
  );
}
