import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, EnvelopeSimple, CloudArrowUp } from '@phosphor-icons/react/dist/ssr';

// ── Variantes ─────────────────────────────────────────────────────────────────

export function CardVariantsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {(
        [
          { variant: 'default',  label: 'Default',  desc: 'Uso geral — organização de conteúdo em dashboards.' },
          { variant: 'elevated', label: 'Elevated',  desc: 'Maior hierarquia visual — destaques e features.' },
          { variant: 'ghost',    label: 'Ghost',     desc: 'Agrupamento sutil, sem peso visual excessivo.' },
          { variant: 'outline',  label: 'Outline',   desc: 'Borda explícita, fundo transparente — listas.' },
        ] as const
      ).map(({ variant, label, desc }) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{label}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-400">Conteúdo principal do card.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ── Composição completa ───────────────────────────────────────────────────────

export function CardCompositionDemo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>WordPress Hosting</CardTitle>
        <CardDescription>
          Hospedagem otimizada para WordPress com deploy automático e suporte especializado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5 text-sm text-neutral-300">
          {['SSL gratuito', 'Backups diários', 'Painel simplificado'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-neutral-400">A partir de <strong className="text-neutral-100">R$ 19/mês</strong></span>
        <Button size="sm">
          Saiba mais <ArrowRight size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
}

// ── Cards de produto — exemplo real ──────────────────────────────────────────

const products = [
  {
    icon: Globe,
    badge: { label: 'Popular', variant: 'brand' as const },
    title: 'WordPress Hosting',
    description: 'Infraestrutura otimizada com deploy fácil e suporte de verdade para sua agência.',
    price: 'R$ 19/mês',
  },
  {
    icon: EnvelopeSimple,
    badge: { label: 'Novo', variant: 'success' as const },
    title: 'E-mail Profissional',
    description: 'E-mail com domínio próprio, antispam e integração com Google Workspace.',
    price: 'R$ 9/mês',
  },
  {
    icon: CloudArrowUp,
    badge: null,
    title: 'Deploy Automático',
    description: 'Integração com GitHub e GitLab para publicar com um push no repositório.',
    price: 'Incluído',
  },
];

export function CardProductsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {products.map(({ icon: Icon, badge, title, description, price }) => (
        <Card key={title} variant="default" className="group hover:border-neutral-500/70 transition-colors duration-150">
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="p-2 rounded-md bg-brand-500/10 text-brand-300">
                <Icon size={20} />
              </div>
              {badge && <Badge variant={badge.variant} size="sm">{badge.label}</Badge>}
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between">
            <span className="text-sm font-medium text-neutral-200">{price}</span>
            <button className="text-xs text-brand-400 hover:text-brand-300 inline-flex items-center gap-1 transition-colors">
              Saiba mais <ArrowRight size={12} />
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

// ── Card horizontal ───────────────────────────────────────────────────────────

export function CardHorizontalDemo() {
  return (
    <Card className="flex-row items-center max-w-lg">
      <div className="p-5 border-r border-neutral-600/40 shrink-0">
        <div className="size-12 rounded-full bg-brand-500/15 text-brand-300 flex items-center justify-center">
          <Globe size={24} />
        </div>
      </div>
      <div className="flex-1 min-w-0 px-5 py-4">
        <p className="text-sm font-semibold text-neutral-100">WordPress Hosting</p>
        <p className="text-xs text-neutral-400 mt-0.5 truncate">umbler.com · Plano Pro · Ativo</p>
      </div>
      <div className="pr-5 shrink-0">
        <Badge variant="success" dot>Ativo</Badge>
      </div>
    </Card>
  );
}
