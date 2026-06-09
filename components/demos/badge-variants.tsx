'use client';

import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  XCircle,
  Warning,
  Sparkle,
  GitBranch,
  Tag,
  Bell,
  ArrowUp,
  Hourglass,
  Star,
} from '@phosphor-icons/react';

// ─── Pill: 5 semânticas ────────────────────────────────────────

export function BadgePillBrand()   { return <Badge variant="brand">Brand</Badge>; }
export function BadgePillSuccess() { return <Badge variant="success">Success</Badge>; }
export function BadgePillWarning() { return <Badge variant="warning">Warning</Badge>; }
export function BadgePillError()   { return <Badge variant="error">Error</Badge>; }
export function BadgePillNeutral() { return <Badge variant="neutral">Neutral</Badge>; }

// ─── Solid: 4 opacas ──────────────────────────────────────────

export function BadgeSolidBrand()   { return <Badge variant="brand-solid">Brand</Badge>; }
export function BadgeSolidSuccess() { return <Badge variant="success-solid">Success</Badge>; }
export function BadgeSolidWarning() { return <Badge variant="warning-solid">Warning</Badge>; }
export function BadgeSolidError()   { return <Badge variant="error-solid">Error</Badge>; }

// ─── Shape tag ────────────────────────────────────────────────

export function BadgeTagNeutral() { return <Badge variant="neutral" shape="tag">Draft</Badge>; }
export function BadgeTagBrand()   { return <Badge variant="brand"   shape="tag">v2.1.0</Badge>; }
export function BadgeTagSuccess() { return <Badge variant="success" shape="tag">Produção</Badge>; }
export function BadgeTagWarning() { return <Badge variant="warning" shape="tag">Beta</Badge>; }
export function BadgeTagError()   { return <Badge variant="error"   shape="tag">Deprecated</Badge>; }

// ─── Com dot ──────────────────────────────────────────────────

export function BadgeDotSuccess() { return <Badge variant="success" dot>Ativo</Badge>; }
export function BadgeDotWarning() { return <Badge variant="warning" dot>Pendente</Badge>; }
export function BadgeDotError()   { return <Badge variant="error"   dot>Falhou</Badge>; }
export function BadgeDotNeutral() { return <Badge variant="neutral" dot>Inativo</Badge>; }
export function BadgeDotBrand()   { return <Badge variant="brand"   dot>Online</Badge>; }

// ─── Com ícone ────────────────────────────────────────────────

export function BadgeIconSuccess() {
  return <Badge variant="success"><CheckCircle size={12} weight="fill" />Aprovado</Badge>;
}
export function BadgeIconError() {
  return <Badge variant="error"><XCircle size={12} weight="fill" />Recusado</Badge>;
}
export function BadgeIconWarning() {
  return <Badge variant="warning"><Warning size={12} weight="fill" />Atenção</Badge>;
}
export function BadgeIconBrand() {
  return <Badge variant="brand"><Sparkle size={12} weight="fill" />Novo</Badge>;
}
export function BadgeIconPending() {
  return <Badge variant="neutral"><Hourglass size={12} weight="fill" />Em análise</Badge>;
}

// ─── Composições em contexto ──────────────────────────────────

export function BadgeInTableRow() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between rounded-lg border border-border bg-surface px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
          <GitBranch size={14} className="text-brand-500" />
        </div>
        <div>
          <p className="text-body-sm font-medium text-foreground">feat/novo-componente</p>
          <p className="text-caption text-foreground-muted">Aberto há 2 dias</p>
        </div>
      </div>
      <Badge variant="success" dot>Aprovado</Badge>
    </div>
  );
}

export function BadgeNotificationCounter() {
  return (
    <div className="relative inline-flex">
      <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface">
        <Bell size={20} className="text-foreground-muted" />
      </div>
      {/* audit-ignore: badge-hand-roll: counter bubble não é Badge do DS, é pattern separado de notification dot */}
      <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white">
        3
      </span>
    </div>
  );
}

export function BadgeFloatingOnCard() {
  return (
    <div className="relative w-48 rounded-2xl border border-brand-500 bg-surface p-5 pt-7 shadow-xl shadow-brand-500/10">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <Badge variant="brand-solid" shape="pill" className="px-3 shadow-md">
          <Star size={11} weight="fill" />Mais popular
        </Badge>
      </div>
      <p className="text-body-sm font-semibold text-foreground">Pro</p>
      <p className="mt-1 text-caption text-foreground-muted">Para equipes</p>
    </div>
  );
}

export function BadgeReleaseLog() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {[
        { version: 'v2.3.0',      status: 'Produção', variant: 'success' as const },
        { version: 'v2.4.0-beta', status: 'Beta',     variant: 'warning' as const },
        { version: 'v3.0.0-rc',   status: 'RC',       variant: 'brand'   as const },
      ].map((r) => (
        <div key={r.version} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag size={14} className="text-foreground-muted" />
            <span className="font-mono text-body-sm text-foreground">{r.version}</span>
          </div>
          <Badge variant={r.variant} shape="tag">{r.status}</Badge>
        </div>
      ))}
    </div>
  );
}

export function BadgeTaskCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border border-border bg-surface p-4">
      <div className="flex items-center justify-between">
        <p className="text-body-sm font-medium text-foreground">Migrar banco de produção</p>
        <Badge variant="error"><ArrowUp size={11} weight="bold" />Alta</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="neutral" dot>Em progresso</Badge>
        <Badge variant="brand" shape="tag">Backend</Badge>
      </div>
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────

const variants = ['brand', 'success', 'warning', 'error', 'neutral'] as const;
const variantLabels: Record<string, string> = {
  brand: 'Brand', success: 'Success', warning: 'Warning', error: 'Error', neutral: 'Neutral',
};

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((v) => <Badge key={v} variant={v}>{variantLabels[v]}</Badge>)}
    </div>
  );
}
export function BadgeDotsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((v) => <Badge key={v} variant={v} dot>{variantLabels[v]}</Badge>)}
    </div>
  );
}
export function BadgeShapesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        {variants.map((v) => <Badge key={v} variant={v} shape="pill">pill</Badge>)}
      </div>
      <div className="flex flex-wrap gap-3">
        {variants.map((v) => <Badge key={v} variant={v} shape="tag">tag</Badge>)}
      </div>
    </div>
  );
}
