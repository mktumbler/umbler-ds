import {
  HeroBlock,
  HeroContent,
  HeroEyebrow,
  HeroHeadline,
  HeroSubtext,
  HeroCTAGroup,
} from '@/components/blocks/hero-block';
import { StatGrid } from '@/components/blocks/stat-grid';
import { FeatureCardGrid, FeatureCard } from '@/components/blocks/feature-card-grid';
import { FeatureSplit } from '@/components/blocks/feature-split';
import { PricingTable, type Plan } from '@/components/blocks/pricing-table';
import { FAQSection } from '@/components/blocks/faq-section';
import {
  CTABanner,
  CTAHeadline,
  CTASubtext,
  CTAActions,
  CTATrustPill,
  CTAEyebrow,
} from '@/components/blocks/cta-banner';
import { SiteFooter } from '@/components/blocks/site-footer';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button-variants';
import { Badge } from '@/components/ui/badge';
import {
  GitBranch,
  Lock,
  Lightning,
  Globe,
  ChartLine,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Clock,
} from '@phosphor-icons/react/dist/ssr';

// ── Dados da página ────────────────────────────────────────────────────────────

const STATS = [
  { n: '99,9%', label: 'uptime garantido em contrato' },
  { n: '< 80 ms', label: 'tempo médio de resposta TTFB' },
  { n: '+40 k', label: 'sites hospedados na plataforma' },
];

const PLANS: Plan[] = [
  {
    id: 'start',
    name: 'Start',
    pitch: '512 MB RAM · 1 GB SSD · 2 vCores',
    priceMonthly: 15,
    priceYearly: 13,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'SSL gratuito (Let\'s Encrypt)', included: true },
      { label: 'Deploy via Git/GitHub',         included: true },
      { label: 'Monitoramento em tempo real',   included: true },
      { label: 'CDN CloudFlare',                included: false },
      { label: 'Acesso SSH',                    included: false },
      { label: 'WordPress pré-configurado',     included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    pitch: '1 GB RAM · 10 GB SSD · 2 vCores',
    priceMonthly: 24,
    priceYearly: 21,
    popular: true,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'SSL gratuito (Let\'s Encrypt)', included: true },
      { label: 'Deploy via Git/GitHub',         included: true },
      { label: 'Monitoramento em tempo real',   included: true },
      { label: 'CDN CloudFlare',                included: true },
      { label: 'Acesso SSH',                    included: true },
      { label: 'WordPress pré-configurado',     included: true },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    pitch: '2 GB RAM · 20 GB SSD · 3 vCores',
    priceMonthly: 39,
    priceYearly: 35,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'SSL gratuito (Let\'s Encrypt)', included: true },
      { label: 'Deploy via Git/GitHub',         included: true },
      { label: 'Monitoramento em tempo real',   included: true },
      { label: 'CDN CloudFlare',                included: true },
      { label: 'Acesso SSH',                    included: true },
      { label: 'WordPress pré-configurado',     included: true },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    pitch: '6 GB RAM · 40 GB SSD · 4 vCores',
    priceMonthly: 150,
    priceYearly: 135,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'SSL gratuito (Let\'s Encrypt)', included: true },
      { label: 'Deploy via Git/GitHub',         included: true },
      { label: 'Monitoramento em tempo real',   included: true },
      { label: 'CDN CloudFlare',                included: true },
      { label: 'Acesso SSH',                    included: true },
      { label: 'WordPress pré-configurado',     included: true },
    ],
  },
];

const FAQS = [
  {
    q: 'Posso hospedar WordPress?',
    a: 'Sim, com instalação em 1 clique e ambiente pré-otimizado para WP (PHP, MySQL e cache já configurados). Sem precisar mexer em nenhum arquivo de servidor.',
  },
  {
    q: 'O que acontece se o meu site crescer e precisar de mais recursos?',
    a: 'Você escala RAM e SSD direto no painel, com 1 clique, sem migrar de servidor. Os recursos sobem em segundos e o site continua no ar durante o processo.',
  },
  {
    q: 'Tenho acesso SSH ao servidor?',
    a: 'Sim, acesso SSH disponível nos planos Growth, Scale e Pro. Você também pode usar FTPS ou fazer deploy via Git sem precisar de SSH.',
  },
  {
    q: 'Como funciona o deploy via Git?',
    a: 'Conecte seu repositório GitHub (ou outro), configure o branch de produção e cada push atualiza o site automaticamente. Sem FTP, sem cópia manual de arquivo.',
  },
  {
    q: 'Há período de teste sem cartão de crédito?',
    a: 'Sim, 7 dias grátis em qualquer plano, sem precisar cadastrar cartão. Se não ficar satisfeito, cancele sem custo.',
  },
];

// ── Visuais placeholder ────────────────────────────────────────────────────────

function PainelMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-error-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
        <span className="ml-2 text-caption text-foreground-muted">painel.umbler.com</span>
      </div>
      <div className="flex h-48 items-center justify-center bg-surface-subtle text-caption text-foreground-subtle">
        Screenshot do painel
      </div>
    </div>
  );
}

function GitMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-neutral-950 p-5 font-mono shadow-lg">
      <div className="space-y-1 text-caption">
        <p className="text-success-400">$ git push origin main</p>
        <p className="text-foreground-muted">Enumerating objects: 5, done.</p>
        <p className="text-foreground-muted">Writing objects: 100% (3/3), done.</p>
        <p className="text-brand-300">remote: Deploy iniciado...</p>
        <p className="text-brand-300">remote: Build concluído em 12s</p>
        <p className="text-success-400">remote: Site no ar. ✓</p>
      </div>
    </div>
  );
}

// ── Página ─────────────────────────────────────────────────────────────────────

export default function ShowcasePage() {
  return (
    <main className="bg-neutral-950 text-foreground">

      {/* Hero */}
      <HeroBlock background="sweep" className="px-6 pb-16 pt-24">
        <HeroContent>
          <HeroEyebrow>
            <Badge variant="brand" shape="pill">
              <ShieldCheck size={12} weight="fill" />
              7 dias grátis, sem cartão
            </Badge>
          </HeroEyebrow>
          <HeroHeadline className="text-white">
            Seu site no ar em segundos.{' '}
            <span className="text-brand-300">Sem servidor pra configurar.</span>
          </HeroHeadline>
          <HeroSubtext className="text-neutral-400">
            Hospedagem cloud com SSL automático, deploy via Git e recursos que escalam
            junto com o seu projeto. Você cuida do código. A Umbler cuida da infraestrutura.
          </HeroSubtext>
          <HeroCTAGroup>
            <a
              href="https://account.umbler.com/SignUp?App=UmblerHosting"
              className={buttonVariants({ variant: 'primary', size: 'lg' }) + ' shadow-cta'}
            >
              Testar 7 dias grátis
              <ArrowRight size={18} weight="bold" />
            </a>
            <Button size="lg" variant="ghost" className="text-neutral-300 hover:text-white">
              Ver planos
            </Button>
          </HeroCTAGroup>
        </HeroContent>
      </HeroBlock>

      {/* Stats */}
      <StatGrid
        stats={STATS}
        columns={3}
        tone="brand"
        className="bg-neutral-950 border-y border-white/5"
      />

      {/* Features */}
      <section className="px-6 py-24 bg-neutral-950">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow mb-3 text-center">Infraestrutura</p>
          <h2 className="font-heading text-h2 text-center text-white mb-4">
            Tudo que um dev precisa, sem o que um dev odeia
          </h2>
          <p className="text-body-lg text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Painel simples, deploy automático e recursos que crescem com o projeto.
            Sem cPanel, sem configuração de nginx, sem surpresa.
          </p>
          <FeatureCardGrid columns={3}>
            <FeatureCard
              icon={<GitBranch size={24} className="text-brand-400" />}
              title="Deploy via Git"
              description="Push no branch, site atualiza. Conecte GitHub, GitLab ou Bitbucket em 2 minutos."
            />
            <FeatureCard
              icon={<Lock size={24} className="text-brand-400" />}
              title="SSL automático"
              description="Let's Encrypt configurado e renovado automaticamente. HTTPS ativo em todos os domínios."
            />
            <FeatureCard
              icon={<Globe size={24} className="text-brand-400" />}
              title="CDN CloudFlare"
              description="Ative o CloudFlare com 1 clique. Conteúdo entregue do servidor mais próximo do visitante."
            />
            <FeatureCard
              icon={<ChartLine size={24} className="text-brand-400" />}
              title="Monitoramento em tempo real"
              description="Veja RAM, CPU e disco no painel. Saiba antes do cliente quando algo vai mal."
            />
            <FeatureCard
              icon={<Lightning size={24} className="text-brand-400" />}
              title="WordPress pré-configurado"
              description="Instale WP em 1 clique com PHP e MySQL otimizados. Sem configuração de servidor."
            />
            <FeatureCard
              icon={<Terminal size={24} className="text-brand-400" />}
              title="Acesso SSH e FTPS"
              description="Acesso completo ao servidor quando você precisar. Para devs que gostam de terminal."
            />
          </FeatureCardGrid>
        </div>
      </section>

      {/* Feature Split 1: Painel */}
      <FeatureSplit
        eyebrow="Painel"
        title="Gerenciar 10 sites é tão simples quanto gerenciar 1"
        body="Veja todos os seus projetos num único painel. Acesse logs, métricas, domínios e configurações sem abrir terminal."
        bullets={[
          'Acesso compartilhado por projeto: dê acesso ao cliente sem expor os outros',
          'Métricas de RAM, CPU e disco em tempo real',
          'Gerenciador de domínios e DNS integrado',
        ]}
        cta={{ label: 'Ver o painel', href: 'https://account.umbler.com/SignUp?App=UmblerHosting' }}
        visual={<PainelMock />}
        className="bg-surface px-6 py-24"
      />

      {/* Feature Split 2: Deploy */}
      <FeatureSplit
        eyebrow="Deploy"
        title="Atualize o site sem abrir FTP nunca mais"
        body="Conecte seu repositório e configure o branch de produção. Cada push atualiza o site automaticamente em segundos."
        bullets={[
          'Suporte a GitHub, GitLab e Bitbucket',
          'Deploy automático a cada push no branch configurado',
          'Rollback com 1 clique se algo der errado',
        ]}
        cta={{ label: 'Testar grátis', href: 'https://account.umbler.com/SignUp?App=UmblerHosting' }}
        visual={<GitMock />}
        reverse
        className="bg-neutral-950 px-6 py-24"
      />

      {/* Pricing */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow mb-3 text-center">Planos</p>
          <h2 className="font-heading text-h2 text-center mb-3">
            Comece pequeno. Escale sem migrar
          </h2>
          <p className="text-body-lg text-foreground-muted text-center mb-12 max-w-xl mx-auto">
            Recursos elásticos: suba RAM e SSD no painel conforme o projeto cresce,
            sem precisar mudar de servidor.
          </p>
          <PricingTable
            plans={PLANS}
            defaultPeriod="yearly"
            footer={
              <p className="mt-6 text-center text-caption text-foreground-muted">
                7 dias grátis em qualquer plano. Sem cartão de crédito. Cancele quando quiser.
              </p>
            }
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        eyebrow="Dúvidas"
        headline="Perguntas frequentes"
        items={FAQS}
        defaultOpen={0}
        className="bg-neutral-950"
      />

      {/* CTA Final */}
      <CTABanner variant="premium">
        <CTAEyebrow>
          <CTATrustPill icon={<Clock size={14} />}>
            Pronto em segundos. Sem cartão de crédito.
          </CTATrustPill>
        </CTAEyebrow>
        <CTAHeadline>
          Pare de brigar com servidor.
          <br />
          Comece a entregar.
        </CTAHeadline>
        <CTASubtext>
          Teste 7 dias grátis em qualquer plano. Se não ficar satisfeito, cancele sem custo.
        </CTASubtext>
        <CTAActions>
          <a
            href="https://account.umbler.com/SignUp?App=UmblerHosting"
            className={buttonVariants({ variant: 'primary', size: 'xl' })}
          >
            Testar 7 dias grátis
            <ArrowRight size={20} weight="bold" />
          </a>
          <Button size="xl" variant="ghost" className="text-white/70 hover:text-white">
            Falar com especialista
          </Button>
        </CTAActions>
      </CTABanner>

      {/* Footer */}
      <SiteFooter
        tagline="A infraestrutura por trás dos negócios que crescem."
        columns={[
          {
            title: 'Produtos',
            links: [
              { label: 'Hospedagem', href: 'https://umbler.com/hospedagem' },
              { label: 'Umbler Talk', href: 'https://umbler.com/talk' },
              { label: 'Umbler Mail', href: 'https://umbler.com/mail' },
            ],
          },
          {
            title: 'Recursos',
            links: [
              { label: 'Documentação', href: 'https://umbler-ds.vercel.app/docs' },
              { label: 'Status', href: 'https://status.umbler.com' },
              { label: 'Blog', href: 'https://umbler.com/blog' },
            ],
          },
          {
            title: 'Empresa',
            links: [
              { label: 'Sobre a Umbler', href: 'https://umbler.com/sobre' },
              { label: 'Contato', href: 'https://umbler.com/contato' },
              { label: 'Privacidade', href: 'https://umbler.com/privacidade' },
            ],
          },
        ]}
        social={[]}
        copyright="© 2026 Umbler. Todos os direitos reservados."
        legal={[
          { label: 'Termos de uso', href: 'https://umbler.com/termos' },
          { label: 'Privacidade', href: 'https://umbler.com/privacidade' },
        ]}
      />
    </main>
  );
}
