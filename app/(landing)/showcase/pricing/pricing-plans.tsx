'use client';

/**
 * Wrapper de showcase: renderiza PricingTable com os planos padrão Umbler.
 * A implementação real vive em components/blocks/pricing-table.tsx.
 */

import { PricingTable, UMBLER_PLANS } from '@/components/blocks/pricing-table';

export function PricingPlans() {
  return <PricingTable plans={UMBLER_PLANS} />;
}
