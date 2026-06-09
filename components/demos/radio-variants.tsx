import { Radio, RadioGroup } from '@/components/ui/radio';

// ─── Grupos individuais ────────────────────────────────────────────────────────

export function RadioVerticalPlans() {
  return (
    <RadioGroup label="Plano" orientation="vertical">
      <Radio name="plans-v" value="starter" label="Starter"
        description="Para projetos pessoais e sites simples." />
      <Radio name="plans-v" value="pro" label="Pro"
        description="Para agências e times que precisam de escala." defaultChecked />
      <Radio name="plans-v" value="enterprise" label="Enterprise"
        description="SLA dedicado e integrações custom." disabled />
    </RadioGroup>
  );
}

export function RadioHorizontalBilling() {
  return (
    <RadioGroup label="Ciclo de cobrança" orientation="horizontal">
      <Radio name="billing-h" value="monthly" label="Mensal" />
      <Radio name="billing-h" value="quarterly" label="Trimestral" defaultChecked />
      <Radio name="billing-h" value="annual" label="Anual" />
    </RadioGroup>
  );
}

export function RadioVerticalRegion() {
  return (
    <RadioGroup label="Região do servidor" orientation="vertical">
      <Radio name="region-v" value="br-sp" label="Brasil — São Paulo" defaultChecked />
      <Radio name="region-v" value="us-east" label="EUA — Leste" />
      <Radio name="region-v" value="eu-west" label="Europa — Oeste" />
    </RadioGroup>
  );
}

// ─── Composição: seletor de plano com preço ───────────────────────────────────

export function RadioPricingSelector() {
  return (
    <div className="flex max-w-sm flex-col gap-2 rounded-xl border border-border bg-surface p-4">
      <p className="mb-1 text-body-sm font-semibold text-foreground">Escolha seu plano</p>
      {[
        { value: 'starter', label: 'Starter',    price: 'R$ 197/mês',  checked: false },
        { value: 'pro',     label: 'Pro',         price: 'R$ 447/mês',  checked: true  },
        { value: 'ent',     label: 'Enterprise',  price: 'Sob consulta', checked: false },
      ].map((p) => (
        <label
          key={p.value}
          className="flex cursor-pointer items-center justify-between rounded-lg border border-border px-3 py-2.5 hover:border-brand-400 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/5 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <input
              type="radio"
              name="pricing-selector"
              value={p.value}
              defaultChecked={p.checked}
              className="accent-brand-500"
            />
            <span className="text-body-sm font-medium text-foreground">{p.label}</span>
          </div>
          <span className="text-caption text-foreground-muted">{p.price}</span>
        </label>
      ))}
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────────────────────

export function RadioGroupDemo() { return <RadioVerticalPlans />; }
export function RadioOrientationDemo() { return <RadioHorizontalBilling />; }
