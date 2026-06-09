'use client';

import { useEffect, useRef } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

// ─── Estados individuais ───────────────────────────────────────────────────────

export function CheckboxDefault() {
  return <Checkbox label="Aceitar notificações" />;
}

export function CheckboxChecked() {
  return <Checkbox label="Aceitar notificações" defaultChecked />;
}

export function CheckboxDisabled() {
  return <Checkbox label="Opção desabilitada" disabled />;
}

export function CheckboxDisabledChecked() {
  return <Checkbox label="Selecionado bloqueado" defaultChecked disabled />;
}

export function CheckboxError() {
  return (
    <Checkbox
      state="error"
      label="Aceito os termos de uso"
      description="Você precisa aceitar os termos para continuar."
    />
  );
}

export function CheckboxWithDescription() {
  return (
    <Checkbox
      label="Alertas de segurança"
      description="Notificações sobre acessos e alterações na conta."
      defaultChecked
    />
  );
}

// ─── Indeterminate ────────────────────────────────────────────────────────────

export function CheckboxIndeterminate() {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);
  return (
    <label className="inline-flex cursor-pointer items-start gap-2.5">
      <div className="relative flex shrink-0 items-center justify-center">
        <input
          ref={ref}
          type="checkbox"
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-border bg-surface
            checked:border-brand-500 checked:bg-brand-500
            indeterminate:border-brand-500 indeterminate:bg-brand-500
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
            transition-colors duration-[var(--duration-fast)]"
        />
        <svg
          className="pointer-events-none absolute h-2.5 w-2.5 text-white opacity-0 transition-opacity peer-indeterminate:opacity-100"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path d="M2 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="text-body-sm font-medium leading-none text-foreground">Selecionar todos</p>
        <p className="mt-1 text-caption leading-snug text-foreground-muted">
          Alguns itens selecionados.
        </p>
      </div>
    </label>
  );
}

// ─── Grupo de notificações ────────────────────────────────────────────────────

export function CheckboxGroupNotifications() {
  return (
    <fieldset className="flex max-w-sm flex-col gap-3">
      <legend className="mb-2 text-body-sm font-semibold text-foreground">Notificações</legend>
      <Checkbox
        label="E-mails de marketing"
        description="Novidades, promoções e dicas da Umbler."
      />
      <Checkbox
        label="Alertas de segurança"
        description="Acessos suspeitos e alterações na conta."
        defaultChecked
      />
      <Checkbox
        label="Resumo semanal"
        description="Métricas do seu site toda segunda-feira."
        defaultChecked
      />
      <Checkbox
        label="Atualizações de produto"
        description="Saiba quando novos recursos forem lançados."
      />
    </fieldset>
  );
}

// ─── Composição: consentimento em form ────────────────────────────────────────

export function CheckboxFormConsent() {
  return (
    <div className="flex max-w-sm flex-col gap-3 rounded-xl border border-border bg-surface p-5">
      <p className="text-body-sm font-semibold text-foreground">Finalizar cadastro</p>
      <div className="mt-1 flex flex-col gap-2">
        <Checkbox defaultChecked label="Aceito os Termos de Uso e Política de Privacidade" />
        <Checkbox label="Quero receber novidades e ofertas por e-mail" />
      </div>
    </div>
  );
}

// ─── Composição: painel de filtros ────────────────────────────────────────────

export function CheckboxFilterPanel() {
  return (
    <div className="w-48 rounded-xl border border-border bg-surface p-4">
      <p className="mb-3 text-caption font-semibold uppercase tracking-wider text-foreground-muted">
        Segmentos
      </p>
      <div className="flex flex-col gap-2">
        {['E-commerce', 'Saúde', 'Imobiliário', 'Educação', 'Financeiro'].map((item, i) => (
          <Checkbox key={item} label={item} defaultChecked={i < 2} />
        ))}
      </div>
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────────────────────

export function CheckboxStatesDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="Desmarcado" description="Estado padrão do checkbox." />
      <Checkbox label="Marcado" defaultChecked />
      <Checkbox label="Desabilitado" disabled />
      <Checkbox label="Desabilitado marcado" defaultChecked disabled />
    </div>
  );
}

export function CheckboxIndeterminateDemo() {
  return <CheckboxIndeterminate />;
}

export function CheckboxGroupDemo() {
  return <CheckboxGroupNotifications />;
}

export function CheckboxErrorDemo() {
  return <CheckboxError />;
}
