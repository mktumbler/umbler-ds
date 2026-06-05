'use client';

import { useState } from 'react';
import { ArrowRight, Check, X, Star } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

/**
 * Pricing Plans: bloco cliente isolado pra encapsular o estado do toggle
 * mensal/anual sem precisar marcar a página inteira como 'use client'.
 *
 * 3 cards: Starter, Pro (destacado), Enterprise.
 * Pro tem borda brand + badge "Mais escolhido" + elevação maior.
 * Enterprise não tem preço numérico, CTA é "Falar com vendas".
 */

type Period = 'monthly' | 'yearly';

interface Plan {
  id: string;
  name: string;
  pitch: string;
  priceMonthly: number | null; // null = "Sob consulta"
  priceYearly: number | null;
  popular?: boolean;
  ctaLabel: string;
  features: { label: string; included: boolean }[];
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    pitch: 'Para times pequenos começando com WhatsApp profissional',
    priceMonthly: 197,
    priceYearly: 177,
    ctaLabel: 'Testar 7 dias grátis',
    features: [
      { label: '1 número WhatsApp Oficial', included: true },
      { label: 'Até 3 atendentes', included: true },
      { label: 'CRM básico (contatos, histórico)', included: true },
      { label: '500 conversas/mês incluídas', included: true },
      { label: 'Agente IA', included: false },
      { label: 'Distribuição automática', included: false },
      { label: 'API + integrações custom', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    pitch: 'Para empresas que querem operação madura, IA e automação',
    priceMonthly: 497,
    priceYearly: 447,
    popular: true,
    ctaLabel: 'Testar 7 dias grátis',
    features: [
      { label: '3 números WhatsApp Oficial', included: true },
      { label: 'Atendentes ilimitados', included: true },
      { label: 'CRM completo + funis', included: true },
      { label: '5.000 conversas/mês incluídas', included: true },
      { label: 'Agente IA (1 incluso)', included: true },
      { label: 'Distribuição automática', included: true },
      { label: 'API + integrações custom', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    pitch: 'Para operações com volume, compliance e integrações dedicadas',
    priceMonthly: null,
    priceYearly: null,
    ctaLabel: 'Falar com vendas',
    features: [
      { label: 'Números ilimitados', included: true },
      { label: 'Atendentes ilimitados', included: true },
      { label: 'CRM + workflows customizados', included: true },
      { label: 'Conversas ilimitadas', included: true },
      { label: 'Agentes IA ilimitados', included: true },
      { label: 'Distribuição automática', included: true },
      { label: 'API + integrações custom', included: true },
    ],
  },
];

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR');
}

export function PricingPlans() {
  const [period, setPeriod] = useState<Period>('yearly');

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Toggle mensal/anual: segmented control com badge de desconto */}
      <div className="mb-12 flex justify-center">
        <div
          role="tablist"
          aria-label="Período de cobrança"
          className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-subtle p-1"
        >
          {(['monthly', 'yearly'] as const).map((p) => {
            const active = period === p;
            return (
              <button
                key={p}
                role="tab"
                aria-selected={active}
                onClick={() => setPeriod(p)}
                className={cn(
                  'relative inline-flex h-10 items-center gap-2 rounded-full px-5 text-body-sm font-medium transition-colors duration-[var(--duration-fast)]',
                  active
                    ? 'bg-surface text-foreground shadow-sm'
                    : 'text-foreground-muted hover:text-foreground',
                )}
              >
                {p === 'monthly' ? 'Mensal' : 'Anual'}
                {p === 'yearly' && (
                  <Badge variant="success" shape="pill" className="text-[10px]">
                    -10%
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards de plano */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const isPro = plan.popular;
          const price = period === 'monthly' ? plan.priceMonthly : plan.priceYearly;

          return (
            <div
              key={plan.id}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-surface p-8 transition-shadow duration-[var(--duration-normal)]',
                isPro
                  ? 'border-brand-500 shadow-xl shadow-brand-500/10 lg:scale-[1.02]'
                  : 'border-border hover:border-border-strong',
              )}
            >
              {isPro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="brand" shape="pill" className="px-3 py-1 text-xs shadow-md">
                    <Star size={12} weight="fill" /> Mais escolhido
                  </Badge>
                </div>
              )}

              {/* Nome + pitch */}
              <h3 className="text-h3 font-heading text-foreground">{plan.name}</h3>
              <p className="mt-2 min-h-[3rem] text-body-sm text-foreground-muted text-pretty">
                {plan.pitch}
              </p>

              {/* Preço */}
              <div className="mt-6 mb-8">
                {price === null ? (
                  <>
                    <p className="font-heading text-display text-foreground">
                      Sob consulta
                    </p>
                    <p className="mt-2 text-body-sm text-foreground-muted">
                      Plano dedicado, com SLA negociado
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-body-sm font-medium text-foreground-muted">R$</span>
                      <span className="font-heading text-display text-foreground tabular-nums">
                        {formatPrice(price)}
                      </span>
                      <span className="text-body text-foreground-muted">/mês</span>
                    </div>
                    <p className="mt-2 text-body-sm text-foreground-muted">
                      {period === 'yearly'
                        ? `Cobrado anualmente (R$ ${formatPrice(price * 12)}/ano)`
                        : 'Cobrado mensalmente, sem fidelidade'}
                    </p>
                  </>
                )}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                variant={isPro ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.ctaLabel}
                <ArrowRight size={18} weight="bold" />
              </Button>

              {/* Features */}
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    {f.included ? (
                      <Check
                        size={18}
                        weight="bold"
                        className="mt-0.5 shrink-0 text-brand-500"
                      />
                    ) : (
                      <X
                        size={18}
                        weight="regular"
                        className="mt-0.5 shrink-0 text-foreground-subtle"
                      />
                    )}
                    <span
                      className={cn(
                        'text-body-sm',
                        f.included ? 'text-foreground' : 'text-foreground-subtle line-through',
                      )}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Nota de rodapé */}
      <p className="mt-10 text-center text-caption text-foreground-muted">
        Todos os planos incluem trial de 7 dias sem cartão. Cancele quando quiser.
      </p>
    </div>
  );
}
