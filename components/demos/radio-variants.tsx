import { Radio, RadioGroup } from '@/components/ui/radio';

// ── Grupo vertical com descriptions ───────────────────────────────────────────

export function RadioGroupDemo() {
  return (
    <RadioGroup label="Plano" orientation="vertical">
      <Radio
        name="plan-demo"
        value="starter"
        label="Starter"
        description="Ideal para projetos pessoais e sites simples."
      />
      <Radio
        name="plan-demo"
        value="pro"
        label="Pro"
        description="Para agências e desenvolvedores que precisam de mais poder."
        defaultChecked
      />
      <Radio
        name="plan-demo"
        value="enterprise"
        label="Enterprise"
        description="Recursos avançados, SLA e suporte dedicado."
        disabled
      />
    </RadioGroup>
  );
}

// ── Grupo horizontal ──────────────────────────────────────────────────────────

export function RadioOrientationDemo() {
  return (
    <RadioGroup label="Ciclo de cobrança" orientation="horizontal">
      <Radio name="billing-demo" value="monthly" label="Mensal" />
      <Radio name="billing-demo" value="quarterly" label="Trimestral" defaultChecked />
      <Radio name="billing-demo" value="annual" label="Anual" />
    </RadioGroup>
  );
}
