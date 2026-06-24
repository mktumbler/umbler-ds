import Image from 'next/image';
import { HeroBackground } from '@/components/ui/hero-background';
import { StatGrid } from '@/components/blocks/stat-grid';
import { FeatureSplit } from '@/components/blocks/feature-split';
import { TestimonialGrid, type TestimonialItem } from '@/components/blocks/testimonial-grid';
import { PricingTable, type Plan } from '@/components/blocks/pricing-table';
import { FAQSection } from '@/components/blocks/faq-section';
import {
  CTABanner,
  CTAHeadline,
  CTASubtext,
  CTAActions,
  CTAEyebrow,
} from '@/components/blocks/cta-banner';
import { SiteFooter } from '@/components/blocks/site-footer';
import { CardAurora } from '@/components/ui/card-aurora';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button-variants';
import {
  ChatCircle,
  Robot,
  Megaphone,
  ChartLineUp,
  Lightning,
  Globe,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';
import { LogoCloud } from '@/components/blocks/logo-cloud';
import { ShowcaseHeroContent } from './hero-content';
import { ShowcaseNav } from './showcase-nav';
import { IntegrationsSection } from './integrations-section';
import {
  FadeInSection,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from './motion-wrappers';

const LOGOS = [
  { src: '/showcase/logos/logo-unimed.png',     alt: 'Unimed',     maxHeight: 68 },
  { src: '/showcase/logos/logo-triider.png',    alt: 'Triider',    maxHeight: 60 },
  { src: '/showcase/logos/logo-cora.png',       alt: 'Cora',       maxHeight: 56 },
  { src: '/showcase/logos/logo-cna.png',        alt: 'CNA',        maxHeight: 64 },
  { src: '/showcase/logos/logo-anima.webp',     alt: 'Ânima',      maxHeight: 60 },
  { src: '/showcase/logos/logo-linker.png',     alt: 'Linker',     maxHeight: 56 },
  { src: '/showcase/logos/logo-carol.png',      alt: 'Carol',      maxHeight: 60 },
  { src: '/showcase/logos/logo-uniasselvi.webp', alt: 'Uniasselvi', maxHeight: 60 },
  { src: '/showcase/logos/logo-unipar.png',     alt: 'Unipar',     maxHeight: 60 },
];

// ── Dados ──────────────────────────────────────────────────────────────────────

const STATS = [
  { n: '+15k', label: 'empresas usam o Talk hoje' },
  { n: '-40%', label: 'no tempo médio de atendimento' },
  { n: '4,9/5', label: 'avaliação média de satisfação' },
];

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    pitch: '2 atendentes incluídos',
    priceMonthly: 89,
    priceYearly: 69,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'Caixa unificada de WhatsApp',    included: true },
      { label: 'Histórico completo por conversa', included: true },
      { label: 'App mobile para atendentes',      included: true },
      { label: 'Chatbot visual sem código',        included: false },
      { label: 'Campanhas em massa',               included: false },
      { label: 'Agentes IA',                       included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    pitch: 'por atendente (mín. 2)',
    priceMonthly: 99,
    priceYearly: 79,
    popular: true,
    ctaLabel: 'Testar grátis',
    features: [
      { label: 'Caixa unificada de WhatsApp',    included: true },
      { label: 'Histórico completo por conversa', included: true },
      { label: 'App mobile para atendentes',      included: true },
      { label: 'Chatbot visual sem código',        included: true },
      { label: 'Campanhas em massa',               included: true },
      { label: 'Agentes IA',                       included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    pitch: 'por atendente (mín. 2)',
    priceMonthly: null,
    priceYearly: null,
    ctaLabel: 'Falar com especialista',
    features: [
      { label: 'Caixa unificada de WhatsApp',    included: true },
      { label: 'Histórico completo por conversa', included: true },
      { label: 'App mobile para atendentes',      included: true },
      { label: 'Chatbot visual sem código',        included: true },
      { label: 'Campanhas em massa',               included: true },
      { label: 'Agentes IA',                       included: true },
    ],
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Antes a gente perdia venda porque dois atendentes respondiam o mesmo cliente com informações diferentes. Com o Talk, cada conversa tem um dono e o histórico nunca some.',
    author: 'Rodrigo Menezes',
    role: 'Gerente Comercial',
    company: 'Clínica Vida Plena',
    stars: 5,
  },
  {
    quote: 'Configurei o chatbot em uma tarde, sem escrever uma linha de código. Agora ele qualifica os leads fora do horário e o time chega de manhã com uma fila de contatos prontos.',
    author: 'Beatriz Carvalho',
    role: 'Proprietária',
    company: 'Studio Bê Estética',
    stars: 5,
  },
  {
    quote: 'O relatório por atendente mudou como eu gestiono o time. Consigo ver quem demora mais pra responder e agir antes que o cliente desista.',
    author: 'Felipe Drummond',
    role: 'Head of Customer Success',
    company: 'Construtora Ativa',
    stars: 5,
  },
];

const FAQS = [
  {
    q: 'Preciso de um número de WhatsApp novo?',
    a: 'Não. Você conecta o número que já usa hoje via QR Code, em menos de 5 minutos. Nenhuma migração de contatos necessária.',
  },
  {
    q: 'Quantos atendentes posso adicionar?',
    a: 'O plano Basic inclui 2 atendentes. No Professional e Enterprise, você adiciona quantos precisar (mínimo 2) e paga por atendente ativo no mês.',
  },
  {
    q: 'Funciona com Instagram e outros canais?',
    a: 'Sim. O Talk é omnichannel: WhatsApp, Instagram DM, Webchat e e-mail num único painel. Cada canal com seu histórico separado.',
  },
  {
    q: 'O que acontece com as conversas se um atendente sair?',
    a: 'Todo o histórico fica na conta da empresa, nunca no celular do atendente. Quando alguém sai, o acesso é revogado em segundos e as conversas continuam visíveis para o restante da equipe.',
  },
  {
    q: 'Posso testar antes de pagar?',
    a: 'Sim, 7 dias grátis com acesso completo ao plano Professional. Sem cartão de crédito, sem compromisso.',
  },
];

// ── Visuais ────────────────────────────────────────────────────────────────────

function ChatMock() {
  const conversations = [
    { name: 'Marcos Oliveira', msg: 'Quero saber mais sobre...', time: '14:32', unread: 2, active: true },
    { name: 'Ana Ferreira',    msg: 'Boa tarde! Vi o anúncio',   time: '14:18', unread: 0, active: false },
    { name: 'Thiago Costa',   msg: 'Quando consigo testar?',    time: '13:55', unread: 1, active: false },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-error-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
        <span className="ml-2 text-caption text-foreground-muted">Umbler Talk</span>
      </div>
      <div className="flex h-56">
        <div className="w-44 shrink-0 space-y-0.5 border-r border-border bg-surface-subtle p-2">
          {conversations.map((c) => (
            <div
              key={c.name}
              className={`flex items-start gap-2 rounded-lg px-2 py-1.5 ${c.active ? 'bg-brand-500/10' : ''}`}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-caption font-semibold text-brand-700">
                {c.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="truncate text-caption font-medium text-foreground">{c.name}</span>
                  <span className="shrink-0 text-caption text-foreground-subtle">{c.time}</span>
                </div>
                <p className="truncate text-caption text-foreground-muted">{c.msg}</p>
              </div>
              {c.unread > 0 && (
                <span className="size-4 flex shrink-0 items-center justify-center rounded-full bg-brand-500 text-caption text-white">
                  {c.unread}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col justify-between p-3">
          <div className="space-y-2">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-surface-subtle px-3 py-2 text-caption text-foreground">
                Quero saber mais sobre os planos
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand-500 px-3 py-2 text-caption text-white">
                Claro! Qual o tamanho da sua equipe?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-surface-subtle px-3 py-2 text-caption text-foreground">
                Somos 5 atendentes hoje
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
            <span className="flex-1 text-caption text-foreground-muted">Digite uma mensagem...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricsMock() {
  const kpis = [
    { label: 'TMA',       value: '3m 42s', delta: '-28%', positive: true },
    { label: 'Satisfação', value: '4,9/5',  delta: '+0,3', positive: true },
    { label: 'Abertos',   value: '14',     delta: '-3',   positive: true },
  ];
  const bars = [40, 65, 50, 80, 55, 90, 70];
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-error-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
        <span className="ml-2 text-caption text-foreground-muted">Talk: Relatórios</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {kpis.map((s) => (
            <div key={s.label} className="rounded-xl bg-surface-subtle p-2.5">
              <p className="text-caption text-foreground-muted">{s.label}</p>
              <p className="text-body font-semibold text-foreground">{s.value}</p>
              <p className={`text-caption font-medium ${s.positive ? 'text-success-600' : 'text-error-500'}`}>
                {s.delta}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-2 text-caption text-foreground-muted">Atendimentos por dia</p>
          <div className="flex h-14 items-end gap-1.5">
            {bars.map((h, i) => (
              <div key={i} className="relative flex-1 rounded-sm bg-brand-500/15">
                <div
                  className="absolute inset-x-0 bottom-0 rounded-sm bg-brand-500"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex justify-between text-caption text-foreground-subtle">
            {days.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Página ─────────────────────────────────────────────────────────────────────

export default function ShowcasePage() {
  return (
    <main className="bg-neutral-950 text-foreground">

      <ShowcaseNav />

      {/* Hero: background SVG blob + conteúdo animado */}
      <HeroBackground
        variant="sweep-invert"
        className="px-6 pb-20 pt-32 [--hero-blur:clamp(8px,5cqw,40px)]"
      >
        <ShowcaseHeroContent />
      </HeroBackground>

      {/* Product mockup: screenshot real do painel do Talk */}
      <FadeInSection className="bg-neutral-950 px-6 pb-24 pt-0">
        <div className="relative mx-auto -mt-12 max-w-[1100px]">
          {/* glow de marca atrás do mockup */}
          <div
            aria-hidden
            className="absolute -inset-x-12 -top-8 bottom-12 -z-0 rounded-[3rem] opacity-60 blur-[80px]"
            style={{ background: 'var(--gradient-glow)' }}
          />
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-error-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
              <span className="ml-2 text-caption text-neutral-400">Umbler Talk</span>
            </div>
            <Image
              src="/showcase/app.png"
              alt="Painel do Umbler Talk: caixa de entrada unificada, conversa em andamento e detalhes do contato"
              width={5160}
              height={2760}
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </FadeInSection>

      {/* LogoCloud */}
      <FadeInSection>
        <LogoCloud
          variant="marquee"
          tone="dark"
          label="+15 mil empresas usam o Talk"
          logos={LOGOS}
          className="border-y border-white/5 bg-neutral-950 py-10"
        />
      </FadeInSection>

      {/* Stats */}
      <FadeInSection>
        <StatGrid
          stats={STATS}
          columns={3}
          tone="brand"
          className="border-y border-white/5 bg-neutral-950"
        />
      </FadeInSection>

      {/* Features: Bento grid com CardAurora */}
      <section id="features" className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-[1100px]">

          <FadeInSection className="mx-auto mb-12 max-w-xl text-center">
            <p className="eyebrow mb-3">Funcionalidades</p>
            <h2 className="mb-4 font-heading text-display text-white text-balance">
              Construído para quem não pode perder nenhuma conversa
            </h2>
            <p className="text-body-lg text-neutral-400">
              Caixa unificada, chatbot sem código e agentes IA num único painel para toda a equipe.
            </p>
          </FadeInSection>

          {/* Bento principal 2x2 + 2 */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ minHeight: '420px', gridTemplateRows: 'auto auto' }}
          >
            <StaggerItem className="md:col-span-2 md:row-span-2">
              <CardAurora
                icon={<ChatCircle size={22} weight="fill" />}
                label="Caixa unificada"
                title="Toda a equipe num único painel. Nunca mais conversa perdida."
                description="Distribua conversas por atendente, veja status em tempo real e mantenha o histórico completo mesmo quando alguém sai da equipe."
                blob="sweep"
                rotation="diagonal"
                className="h-full min-h-[280px]"
              />
            </StaggerItem>
            <StaggerItem>
              <CardAurora
                icon={<Robot size={22} weight="fill" />}
                label="Chatbot sem código"
                title="Qualifique leads fora do horário, sem escrever uma linha"
                blob="prism"
                rotation="default"
                className="h-full min-h-[140px]"
              />
            </StaggerItem>
            <StaggerItem>
              <CardAurora
                icon={<Lightning size={22} weight="fill" />}
                label="Agentes IA"
                title="IA que resolve sozinha e passa pra equipe quando precisa"
                blob="prism"
                rotation="diagonal"
                className="h-full min-h-[140px]"
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Segunda linha de cards */}
          <StaggerContainer className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StaggerItem>
              <CardAurora
                icon={<Megaphone size={22} weight="fill" />}
                label="Campanhas em massa"
                title="Mensagens personalizadas para listas segmentadas"
                blob="prism"
                rotation="default"
                className="h-full min-h-[120px]"
              />
            </StaggerItem>
            <StaggerItem>
              <CardAurora
                icon={<ChartLineUp size={22} weight="fill" />}
                label="Relatórios"
                title="TMA, volume e satisfação por atendente"
                blob="prism"
                rotation="diagonal"
                className="h-full min-h-[120px]"
              />
            </StaggerItem>
            <StaggerItem>
              <CardAurora
                icon={<Globe size={22} weight="fill" />}
                label="Omnichannel"
                title="WhatsApp, Instagram, Webchat e e-mail num só lugar"
                blob="prism"
                rotation="default"
                className="h-full min-h-[120px]"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Split 1 */}
      <FadeInSection>
        <FeatureSplit
          eyebrow="Caixa unificada"
          title="Toda a equipe atende, ninguém pisa no calo do outro"
          body="Chega de dois atendentes respondendo o mesmo cliente com informações diferentes, ou mensagem sem resposta porque ninguém viu. O Talk distribui as conversas, mostra quem está atendendo e mantém o histórico completo para qualquer pessoa da equipe continuar."
          bullets={[
            'Atribuição de conversa por atendente ou automática por fila',
            'Histórico completo: mesmo que o atendente saia, a conversa fica',
            'Status de leitura e resposta em tempo real para gestores',
          ]}
          cta={{ label: 'Testar grátis', href: 'https://a.umbler.com/talk' }}
          visual={<ChatMock />}
          className="bg-surface px-6 py-24"
        />
      </FadeInSection>

      {/* Feature Split 2 */}
      <FadeInSection>
        <FeatureSplit
          eyebrow="Relatórios"
          title="Saiba quem atende bem e quem precisa de ajuda"
          body="Tempo médio de atendimento, volume por canal, avaliação de satisfação e desempenho por atendente. Tudo atualizado em tempo real, sem planilha manual nem exportação toda segunda-feira."
          bullets={[
            'Métricas por atendente: TMA, volume e avaliação de satisfação',
            'Alertas automáticos quando o tempo de resposta passa do limite',
            'Exportação de relatórios para CSV ou integração via API',
          ]}
          cta={{ label: 'Testar grátis', href: 'https://a.umbler.com/talk' }}
          visual={<MetricsMock />}
          reverse
          className="bg-neutral-950 px-6 py-24"
        />
      </FadeInSection>

      {/* Integrações */}
      <IntegrationsSection />

      {/* Depoimentos */}
      <section id="testimonials">
      <FadeInSection>
        <TestimonialGrid
          eyebrow="Depoimentos"
          headline="Quem usa, recomenda"
          subheadline="Mais de 15 mil empresas organizam o atendimento com o Umbler Talk."
          testimonials={TESTIMONIALS}
          variant="wall"
          className="bg-surface"
        />
      </FadeInSection>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <FadeInSection className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow mb-3">Planos</p>
            <h2 className="mb-3 font-heading text-display text-balance text-white">
              Comece com 2 atendentes, escale sem migrar
            </h2>
            <p className="text-body-lg text-neutral-400">
              Todos os planos incluem 7 dias de teste grátis. Sem cartão de crédito.
            </p>
          </FadeInSection>
          <FadeInSection>
            <PricingTable
              plans={PLANS}
              defaultPeriod="yearly"
              footer={
                <p className="mt-6 text-center text-caption text-foreground-muted">
                  Preços em reais. Planos Professional e Enterprise cobrados por atendente ativo.
                  Cancele quando quiser, sem multa.
                </p>
              }
            />
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <FadeInSection>
        <FAQSection
          eyebrow="Dúvidas"
          headline="Perguntas frequentes"
          items={FAQS}
          defaultOpen={0}
          className="bg-surface"
        />
      </FadeInSection>

      {/* CTA Final */}
      <ScaleIn>
        <CTABanner variant="glow">
          <CTAEyebrow>
            <p className="eyebrow">Sem cartão, cancele quando quiser</p>
          </CTAEyebrow>
          <CTAHeadline>
            Pare de perder venda no WhatsApp. Comece hoje.
          </CTAHeadline>
          <CTASubtext>
            7 dias grátis com acesso completo. Configure em minutos, sem precisar de TI.
          </CTASubtext>
          <CTAActions>
            <a
              href="https://a.umbler.com/talk"
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
      </ScaleIn>

      {/* Footer */}
      <SiteFooter
        tagline="A infraestrutura por trás dos negócios que crescem."
        columns={[
          {
            title: 'Produtos',
            links: [
              { label: 'Umbler Talk',  href: 'https://umbler.com/talk' },
              { label: 'Umbler Mail',  href: 'https://umbler.com/mail' },
              { label: 'Hospedagem',   href: 'https://umbler.com/hospedagem' },
            ],
          },
          {
            title: 'Recursos',
            links: [
              { label: 'Documentação', href: 'https://umbler-ds.vercel.app/docs' },
              { label: 'Status',        href: 'https://status.umbler.com' },
              { label: 'Blog',          href: 'https://umbler.com/blog' },
            ],
          },
          {
            title: 'Empresa',
            links: [
              { label: 'Sobre a Umbler', href: 'https://umbler.com/sobre' },
              { label: 'Contato',         href: 'https://umbler.com/contato' },
              { label: 'Privacidade',     href: 'https://umbler.com/privacidade' },
            ],
          },
        ]}
        social={[]}
        copyright="© 2026 Umbler. Todos os direitos reservados."
        legal={[
          { label: 'Termos de uso', href: 'https://umbler.com/termos' },
          { label: 'Privacidade',    href: 'https://umbler.com/privacidade' },
        ]}
      />
    </main>
  );
}
