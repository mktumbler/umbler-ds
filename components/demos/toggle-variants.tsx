'use client';

import { Toggle } from '@/components/ui/toggle';

// ── Tamanhos ──────────────────────────────────────────────────────────────────

export function ToggleSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Toggle size="sm" defaultChecked />
        <span className="text-xs text-neutral-500">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle size="md" defaultChecked />
        <span className="text-xs text-neutral-500">md</span>
      </div>
    </div>
  );
}

// ── Com label e description ────────────────────────────────────────────────────

export function ToggleWithLabelDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
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

// ── Estados ───────────────────────────────────────────────────────────────────

export function ToggleStatesDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <Toggle defaultChecked />
        <span className="text-xs text-neutral-500">Ligado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle />
        <span className="text-xs text-neutral-500">Desligado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle checked disabled />
        <span className="text-xs text-neutral-500">Ligado desabilitado</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Toggle checked={false} disabled />
        <span className="text-xs text-neutral-500">Desligado desabilitado</span>
      </div>
    </div>
  );
}
