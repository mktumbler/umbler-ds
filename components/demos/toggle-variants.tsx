'use client';

import { Toggle } from '@/components/ui/toggle';

// ─── Tamanhos ──────────────────────────────────────────────────────────────────

export function ToggleSm() {
  return <Toggle size="sm" defaultChecked />;
}

export function ToggleMd() {
  return <Toggle size="md" defaultChecked />;
}

// ─── Estados ──────────────────────────────────────────────────────────────────

export function ToggleOn() {
  return <Toggle defaultChecked />;
}

export function ToggleOff() {
  return <Toggle />;
}

export function ToggleDisabledOn() {
  return <Toggle checked disabled />;
}

export function ToggleDisabledOff() {
  return <Toggle checked={false} disabled />;
}

// ─── Com label ────────────────────────────────────────────────────────────────

export function ToggleWithLabel() {
  return (
    <Toggle
      label="Notificações por e-mail"
      defaultChecked
    />
  );
}

export function ToggleWithDescription() {
  return (
    <Toggle
      label="Autenticação em dois fatores"
      description="Aumenta a segurança da sua conta com verificação extra."
      defaultChecked
    />
  );
}

// ─── Composição: card de configurações ────────────────────────────────────────

export function ToggleSettingsCard() {
  return (
    <div className="flex max-w-sm flex-col divide-y divide-border rounded-xl border border-border bg-surface">
      {[
        {
          label: 'Notificações por e-mail',
          description: 'Alertas e resumos semanais.',
          checked: true,
        },
        {
          label: 'Modo escuro automático',
          description: 'Segue o tema do sistema operacional.',
          checked: false,
        },
        {
          label: 'Autenticação em dois fatores',
          description: 'Verificação extra no login.',
          checked: true,
        },
      ].map((item) => (
        <div key={item.label} className="flex items-start justify-between px-4 py-3.5">
          <div className="mr-4">
            <p className="text-body-sm font-medium text-foreground">{item.label}</p>
            <p className="mt-0.5 text-caption text-foreground-muted">{item.description}</p>
          </div>
          <Toggle defaultChecked={item.checked} size="sm" />
        </div>
      ))}
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────────────────────

export function ToggleSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Toggle size="sm" defaultChecked />
        <span className="text-caption text-foreground-muted">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle size="md" defaultChecked />
        <span className="text-caption text-foreground-muted">md</span>
      </div>
    </div>
  );
}

export function ToggleWithLabelDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <Toggle
        label="Notificações por e-mail"
        description="Receba alertas e resumos diretamente no seu e-mail."
        defaultChecked
      />
      <Toggle
        label="Tema escuro"
        description="Alterna entre o tema claro e escuro da interface."
      />
      <Toggle
        label="Autenticação em dois fatores"
        description="Aumente a segurança da sua conta com verificação extra."
        defaultChecked
      />
    </div>
  );
}

export function ToggleStatesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Toggle defaultChecked />
        <span className="text-caption text-foreground-muted">Ligado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle />
        <span className="text-caption text-foreground-muted">Desligado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle checked disabled />
        <span className="text-caption text-foreground-muted">Ligado desabilitado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle checked={false} disabled />
        <span className="text-caption text-foreground-muted">Desligado desabilitado</span>
      </div>
    </div>
  );
}
