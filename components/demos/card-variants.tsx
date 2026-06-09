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
import {
  ArrowRight,
  Globe,
  EnvelopeSimple,
  CloudArrowUp,
  ChartLineUp,
  Users,
  Bell,
  CheckCircle,
  ArrowUpRight,
  Robot,
  Gauge,
  Clock,
} from '@phosphor-icons/react/dist/ssr';

// ─── Variantes base ────────────────────────────────────────────

export function CardDefault() {
  return (
    <Card variant="default" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Default</CardTitle>
        <CardDescription>Uso geral em dashboards e listas.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-foreground-muted">Conteúdo principal do card.</p>
      </CardContent>
    </Card>
  );
}

export function CardElevated() {
  return (
    <Card variant="elevated" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Elevated</CardTitle>
        <CardDescription>Maior hierarquia visual, destaques.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-foreground-muted">Conteúdo principal do card.</p>
      </CardContent>
    </Card>
  );
}

export function CardGhost() {
  return (
    <Card variant="ghost" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Ghost</CardTitle>
        <CardDescription>Agrupamento sutil, sem peso visual.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-foreground-muted">Conteúdo principal do card.</p>
      </CardContent>
    </Card>
  );
}

export function CardOutline() {
  return (
    <Card variant="outline" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Outline</CardTitle>
        <CardDescription>Borda explícita, fundo transparente.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-foreground-muted">Conteúdo principal do card.</p>
      </CardContent>
    </Card>
  );
}

// ─── Cards de métrica (stat cards) ────────────────────────────

export function CardStat() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-caption uppercase tracking-wider text-foreground-muted">Conversas hoje</p>
            <p className="mt-1 font-heading text-h2 text-foreground tabular-nums">1.284</p>
            <div className="mt-2 flex items-center gap-1 text-success-500">
              <ArrowUpRight size={14} weight="bold" />
              <span className="text-body-sm font-medium">+12% vs ontem</span>
            </div>
          </div>
          <div className="flex size-10 items-center justify-center rounded-xl bg-brand-500/10">
            <ChartLineUp size={20} className="text-brand-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CardStatGrid() {
  const stats = [
    { label: 'Atendentes online', value: '8',    icon: Users,        trend: null },
    { label: 'Fila de espera',    value: '3',     icon: Clock,        trend: null },
    { label: 'Resolvidos hoje',   value: '142',   icon: CheckCircle,  trend: '+5%' },
    { label: 'Tempo médio',       value: '4min',  icon: Gauge,        trend: null },
  ];
  return (
    <div className="grid w-full max-w-lg grid-cols-2 gap-3">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <Card key={s.label} variant="default">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <p className="text-caption text-foreground-muted">{s.label}</p>
                <Icon size={14} className="text-foreground-subtle" />
              </div>
              <p className="mt-1 font-heading text-h3 text-foreground tabular-nums">{s.value}</p>
              {s.trend && (
                <p className="mt-1 text-caption text-success-500">{s.trend}</p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// ─── Card de produto / feature ────────────────────────────────

export function CardProduct() {
  return (
    <Card variant="default" className="w-full max-w-xs">
      <CardHeader>
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-brand-500/10">
            <Globe size={18} className="text-brand-500" />
          </div>
          <Badge variant="brand">Popular</Badge>
        </div>
        <CardTitle>WordPress Hosting</CardTitle>
        <CardDescription>
          Hospedagem otimizada para WordPress com deploy automático.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5">
          {['SSL gratuito', 'Backups diários', 'Painel simplificado'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-body-sm text-foreground-muted">
              <CheckCircle size={14} weight="fill" className="shrink-0 text-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-body-sm text-foreground-muted">
          A partir de <strong className="text-foreground">R$ 19/mês</strong>
        </span>
        <Button size="sm">
          Saiba mais <ArrowRight size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── Card de notificação ───────────────────────────────────────

export function CardNotification() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-5">
        <div className="flex gap-4">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
            <Bell size={16} className="text-brand-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <p className="text-body-sm font-medium text-foreground">Nova conversa atribuída</p>
              <span className="shrink-0 text-caption text-foreground-muted">2min</span>
            </div>
            <p className="mt-0.5 text-body-sm text-foreground-muted truncate">
              Cliente: João Silva — Pergunta sobre plano Pro
            </p>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="warning" dot>Aguardando</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Card de agente IA ────────────────────────────────────────

export function CardAgent() {
  return (
    <Card variant="elevated" className="w-full max-w-xs">
      <CardHeader>
        <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand-500">
          <Robot size={20} className="text-white" />
        </div>
        <CardTitle>Agente de Suporte</CardTitle>
        <CardDescription>
          Responde dúvidas de cobrança e planos com base na base de conhecimento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-body-sm">
          <span className="text-foreground-muted">Conversas esse mês</span>
          <span className="font-medium tabular-nums text-foreground">2.841</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-body-sm">
          <span className="text-foreground-muted">Taxa de resolução</span>
          <Badge variant="success">87%</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Ver detalhes <ArrowRight size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── Card horizontal ───────────────────────────────────────────

export function CardHorizontal() {
  return (
    <Card className="w-full max-w-md flex-row items-center">
      <div className="shrink-0 border-r border-border p-5">
        <div className="flex size-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
          <Globe size={24} />
        </div>
      </div>
      <div className="min-w-0 flex-1 px-5 py-4">
        <p className="text-body-sm font-semibold text-foreground">umbler.com</p>
        <p className="mt-0.5 truncate text-caption text-foreground-muted">Plano Pro · Ativo · Expira em 245 dias</p>
      </div>
      <div className="shrink-0 pr-5">
        <Badge variant="success" dot>Ativo</Badge>
      </div>
    </Card>
  );
}

// ─── Grade 3-up de produtos ────────────────────────────────────

const products = [
  {
    icon: Globe,
    badge: { label: 'Popular', variant: 'brand' as const },
    title: 'WordPress Hosting',
    description: 'Infraestrutura otimizada com deploy fácil.',
    price: 'R$ 19/mês',
  },
  {
    icon: EnvelopeSimple,
    badge: { label: 'Novo', variant: 'success' as const },
    title: 'E-mail Profissional',
    description: 'E-mail com domínio próprio e antispam.',
    price: 'R$ 9/mês',
  },
  {
    icon: CloudArrowUp,
    badge: null,
    title: 'Deploy Automático',
    description: 'Integração com GitHub e GitLab.',
    price: 'Incluído',
  },
];

export function CardProductGrid() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {products.map(({ icon: Icon, badge, title, description, price }) => (
        <Card key={title} variant="default">
          <CardHeader>
            <div className="mb-3 flex items-start justify-between gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <Icon size={18} />
              </div>
              {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between">
            <span className="text-body-sm font-medium text-foreground">{price}</span>
            <Button variant="ghost" size="sm">
              Ver <ArrowRight size={12} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────

export function CardVariantsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {(
        [
          { variant: 'default',  label: 'Default',  desc: 'Uso geral em dashboards.' },
          { variant: 'elevated', label: 'Elevated',  desc: 'Maior hierarquia visual.' },
          { variant: 'ghost',    label: 'Ghost',     desc: 'Agrupamento sutil.' },
          { variant: 'outline',  label: 'Outline',   desc: 'Borda explícita, fundo transparente.' },
        ] as const
      ).map(({ variant, label, desc }) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{label}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground-muted">Conteúdo principal do card.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

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
        <ul className="space-y-1.5 text-sm text-foreground-secondary">
          {['SSL gratuito', 'Backups diários', 'Painel simplificado'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-foreground-muted">A partir de <strong className="text-foreground">R$ 19/mês</strong></span>
        <Button size="sm">Saiba mais <ArrowRight size={14} /></Button>
      </CardFooter>
    </Card>
  );
}

export function CardProductsDemo() { return <CardProductGrid />; }

export function CardHorizontalDemo() { return <CardHorizontal />; }
