'use client';

/**
 * PricingTable — bloco de tabela de preços com toggle mensal/anual.
 *
 * Composição:
 *   <PricingTable plans={PLANS} />
 *
 * Props:
 *   plans         — array de Plan (obrigatório). Use UMBLER_PLANS como
 *                   ponto de partida ou defina os seus.
 *   defaultPeriod — 'monthly' | 'yearly' (padrão: 'yearly')
 *   footer        — ReactNode opcional abaixo dos cards (ex: nota de trial)
 *
 * Aparece em:
 *   • /showcase/pricing (UMBLER_PLANS)
 *   • Qualquer LP de preços Umbler / white-label
 *
 * Nota: mantido como 'use client' por encapsular o estado do toggle
 * mensal/anual. A página pai pode ser Server Component.
 */

import { useState } from 'react';
import { ArrowRight, Check, X, Star } from '@phosphor-icons/react/dist/ssr';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type BillingPeriod = 'monthly' | 'yearly';

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface Plan {
  /** Slug único — usado como key React. */
  id: string;
  /** Nome do plano exibido no card. */
  name: string;
  /** Frase de posicionamento abaixo do nome. */
  pitch: string;
  /** Preço mensal (quando cobrado mensalmente). `null` = "Sob consulta". */
  priceMonthly: number | null;
  /** Preço mensal (quando cobrado anualmente). `null` = "Sob consulta". */
  priceYearly: number | null;
  /** Plano em destaque — borda brand, badge "Mais escolhido", scale-up. */
  popular?: boolean;
  /** Label do CTA. */
  ctaLabel: string;
  /** Lista de features com flag included. */
  features: PlanFeature[];
}

export interface PricingTableProps {
  plans: Plan[];
  defaultPeriod?: BillingPeriod;
  /** Conteúdo após os cards (ex: nota de trial, compliance). */
  footer?: ReactNode;
}

// ── Dados padrão Umbler ───────────────────────────────────────────────────────

export const UMBLER_PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    pitch: 'Para times pequenos começando com WhatsApp profissional',
    priceMonthly: 197,
    priceYearly: 177,
    ctaLabel: 'Testar 7 dias grátis',
    features: [
      { label: '1 número WhatsApp Oficial',         included: true  },
      { label: 'Até 3 atendentes',                   included: true  },
      { label: 'CRM básico (contatos, histórico)',   included: true  },
      { label: '500 conversas/mês incluídas',        included: true  },
      { label: 'Agente IA',                          included: false },
      { label: 'Distribuição automática',            included: false },
      { label: 'API + integrações custom',           included: false },
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
      { label: '3 números WhatsApp Oficial',         included: true  },
      { label: 'Atendentes ilimitados',              included: true  },
      { label: 'CRM completo + funis',               included: true  },
      { label: '5.000 conversas/mês incluídas',      included: true  },
      { label: 'Agente IA (1 incluso)',               included: true  },
      { label: 'Distribuição automática',            included: true  },
      { label: 'API + integrações custom',           included: false },
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
      { label: 'Números ilimitados',                  included: true },
      { label: 'Atendentes ilimitados',               included: true },
      { label: 'CRM + workflows customizados',        included: true },
      { label: 'Conversas ilimitadas',                included: true },
      { label: 'Agentes IA ilimitados',               included: true },
      { label: 'Distribuição automática',             included: true },
      { label: 'API + integrações custom',            included: true },
    ],
  },
];

// ── Planos alternativos para demos ────────────────────────────────────────────

export const SAAS_PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    pitch: 'Para projetos pessoais e experimentação com os limites do produto',
    priceMonthly: 0,
    priceYearly: 0,
    ctaLabel: 'Criar conta grátis',
    features: [
      { label: '1 projeto ativo',          included: true  },
      { label: 'Até 1.000 registros',      included: true  },
      { label: 'Exportação CSV',           included: true  },
      { label: 'Integrações nativas',      included: false },
      { label: 'Membros do time',          included: false },
      { label: 'Suporte prioritário',      included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    pitch: 'Para startups e equipes que precisam de colaboração e escala',
    priceMonthly: 89,
    priceYearly: 79,
    popular: true,
    ctaLabel: 'Começar 14 dias grátis',
    features: [
      { label: 'Projetos ilimitados',      included: true  },
      { label: 'Registros ilimitados',     included: true  },
      { label: 'Exportação CSV',           included: true  },
      { label: 'Integrações nativas',      included: true  },
      { label: 'Até 10 membros',           included: true  },
      { label: 'Suporte prioritário',      included: false },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    pitch: 'Para empresas com SLA, compliance e equipes grandes',
    priceMonthly: null,
    priceYearly: null,
    ctaLabel: 'Falar com vendas',
    features: [
      { label: 'Projetos ilimitados',      included: true },
      { label: 'Registros ilimitados',     included: true },
      { label: 'Exportação CSV',           included: true },
      { label: 'Integrações nativas',      included: true },
      { label: 'Membros ilimitados',       included: true },
      { label: 'Suporte prioritário',      included: true },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR');
}

// ── Componente ────────────────────────────────────────────────────────────────

export function PricingTable({
  plans,
  defaultPeriod = 'yearly',
  footer,
}: PricingTableProps) {
  const [period, setPeriod] = useState<BillingPeriod>(defaultPeriod);

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* ── Toggle mensal / anual ────────────────────────── */}
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
                  <Badge variant="success" className="text-[10px]">
                    -10%
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Grade de cards ──────────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
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
              {/* Badge "Mais escolhido" no popular */}
              {isPro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="brand-solid" className="px-3 py-1 text-xs shadow-md">
                    <Star size={12} weight="fill" /> Mais escolhido
                  </Badge>
                </div>
              )}

              {/* Nome + pitch */}
              <h3 className="font-heading text-h3 text-foreground">{plan.name}</h3>
              <p className="mt-2 min-h-[3rem] text-body-sm text-foreground-muted text-pretty">
                {plan.pitch}
              </p>

              {/* Preço */}
              <div className="mt-6 mb-8">
                {price === null ? (
                  <>
                    <p className="font-heading text-h1 text-foreground">Sob consulta</p>
                    <p className="mt-2 text-body-sm text-foreground-muted">
                      Plano dedicado, com SLA negociado
                    </p>
                  </>
                ) : price === 0 ? (
                  <>
                    <p className="font-heading text-h1 text-foreground">Grátis</p>
                    <p className="mt-2 text-body-sm text-foreground-muted">
                      Sem cartão de crédito
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-body-sm font-medium text-foreground-muted">R$</span>
                      <span className="font-heading text-h1 text-foreground tabular-nums">
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

              {/* Feature list */}
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {f.included ? (
                      <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-brand-500" />
                    ) : (
                      <X size={18} weight="regular" className="mt-0.5 shrink-0 text-foreground-subtle" />
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

      {/* Footer opcional */}
      {footer ? (
        <div className="mt-10">{footer}</div>
      ) : (
        <p className="mt-10 text-center text-caption text-foreground-muted">
          Todos os planos incluem trial de 7 dias sem cartão. Cancele quando quiser.
        </p>
      )}
    </div>
  );
}
