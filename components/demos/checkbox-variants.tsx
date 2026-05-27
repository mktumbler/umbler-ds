'use client';

import { useEffect, useRef } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

// ── Estados ───────────────────────────────────────────────────────────────────

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

// ── Indeterminate (client wrapper) ────────────────────────────────────────────

export function CheckboxIndeterminateDemo() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = true;
    }
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <label className="inline-flex items-start gap-2.5 cursor-pointer">
        <div className="relative mt-0.5 flex shrink-0 items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-neutral-600 bg-neutral-900
              checked:bg-brand-500 checked:border-brand-500
              indeterminate:bg-brand-500 indeterminate:border-brand-500
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
              disabled:cursor-not-allowed
              transition-colors duration-150"
          />
          {/* Minus icon for indeterminate */}
          <svg
            className="pointer-events-none absolute w-2.5 h-2.5 text-white opacity-0 peer-indeterminate:opacity-100 transition-opacity"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path d="M2 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium leading-none text-neutral-200">Indeterminate</p>
          <p className="mt-1 text-xs text-neutral-500 leading-snug">
            Selecione todos os itens abaixo.
          </p>
        </div>
      </label>
    </div>
  );
}

// ── Grupo com labels e descriptions ──────────────────────────────────────────

export function CheckboxGroupDemo() {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-sm font-medium text-neutral-200 mb-2">Notificações</legend>
      <Checkbox
        label="E-mails de marketing"
        description="Receba novidades, promoções e dicas da Umbler."
      />
      <Checkbox
        label="Alertas de segurança"
        description="Notificações sobre acessos e alterações na conta."
        defaultChecked
      />
      <Checkbox
        label="Resumo semanal"
        description="Um relatório com as métricas do seu site toda segunda-feira."
        defaultChecked
      />
      <Checkbox
        label="Atualizações de produto"
        description="Saiba quando novos recursos forem lançados."
      />
    </fieldset>
  );
}

// ── Estado de erro ────────────────────────────────────────────────────────────

export function CheckboxErrorDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        state="error"
        label="Aceito os termos de uso"
        description="Você precisa aceitar os termos para continuar."
      />
    </div>
  );
}
