import { PricingTable, UMBLER_PLANS, SAAS_PLANS } from '@/components/blocks/pricing-table';

/* ──────────────────────────────────────────────────────────────────────────
   1. Umbler — planos padrão do produto (Starter / Pro / Enterprise)
   Idêntico ao /showcase/pricing mas como bloco portável.
   ────────────────────────────────────────────────────────────────────────── */
export function PricingTableUmblerDemo() {
  return <PricingTable plans={UMBLER_PLANS} />;
}

/* ──────────────────────────────────────────────────────────────────────────
   2. SaaS — planos genéricos (Free / Growth / Scale)
   Mostra que o bloco é data-driven: troca os planos, mantém a UI.
   ────────────────────────────────────────────────────────────────────────── */
export function PricingTableSaasDemo() {
  return <PricingTable plans={SAAS_PLANS} defaultPeriod="monthly" />;
}
