import {
  ArrowRight,
  WhatsappLogo,
  Robot,
  ClockCountdown,
  GitFork,
  ListChecks,
  ChartBar,
  Plugs,
  SealCheck,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import {
  HeroBlock,
  HeroContent,
  HeroEyebrow,
  HeroHeadline,
  HeroSubtext,
  HeroCTAGroup,
} from '@/components/blocks/hero-block';
import { StatGrid } from '@/components/blocks/stat-grid';
import {
  FeatureCardGrid,
  FeatureCard,
} from '@/components/blocks/feature-card-grid';
import { PricingTable, UMBLER_PLANS } from '@/components/blocks/pricing-table';
import { FAQSection } from '@/components/blocks/faq-section';
import {
  CTABanner,
  CTAEyebrow,
  CTATrustPill,
  CTAHeadline,
  CTASubtext,
  CTAActions,
} from '@/components/blocks/cta-banner';

// ── Dados ─────────────────────────────────────────────────────────────────────

const stats = [
  { n: '+60 mil', label: 'empresas usando o Talk' },
  { n: '24/7',    label: 'atendimento sem interrupção' },
  { n: '<10s',    label: 'tempo médio de primeira resposta' },
];

const features = [
  {
    icon: <ClockCountdown weight="duotone" className="text-brand-500" size={24} />,
    title: 'Responde fora do horário',
    description:
      'O agente cobre madrugadas, finais de semana e feriados. Sua empresa nunca mais deixa mensagem sem resposta.',
  },
  {
    icon: <Robot weight="duotone" className="text-brand-500" size={24} />,
    title: 'Qualifica antes de passar pro humano',
    description:
      'Coleta dados, entende a intenção e só transfere quando a conversa realmente merece atenção do time.',
  },
  {
    icon: <ListChecks weight="duotone" className="text-brand-500" size={24} />,
    title: 'Histórico completo de cada conversa',
    description:
      'Toda troca fica registrada. O time retoma o atendimento do ponto exato onde parou, sem pedir pro cliente repetir nada.',
  },
  {
    icon: <GitFork weight="duotone" className="text-brand-500" size={24} />,
    title: 'Distribui por regra entre o time',
    description:
      'Defina critérios como produto, região e estágio do funil. O Talk encaminha para o atendente certo automaticamente.',
  },
  {
    icon: <ChartBar weight="duotone" className="text-brand-500" size={24} />,
    title: 'Relatório de conversão em tempo real',
    description:
      'Veja quantas conversas viraram venda, onde o funil trava e qual atendente performa melhor.',
  },
  {
    icon: <Plugs weight="duotone" className="text-brand-500" size={24} />,
    title: 'Integra com seu CRM',
    description:
      'Conecte o Talk ao CRM que você já usa e mantenha o pipeline atualizado sem trabalho manual.',
  },
];

const steps = [
  {
    n: '01',
    icon: <Robot weight="duotone" className="text-brand-500" size={32} />,
    title: 'Treine o agente',
    body: 'Cole o site, PDF do catálogo ou perguntas frequentes. O agente aprende o negócio em minutos, sem linha de código.',
  },
  {
    n: '02',
    icon: <WhatsappLogo weight="duotone" className="text-brand-500" size={32} />,
    title: 'Conecte o WhatsApp',
    body: 'Escaneie o QR code ou integre via API oficial. Seu número atual, sem precisar trocar.',
  },
  {
    n: '03',
    icon: <SealCheck weight="duotone" className="text-brand-500" size={32} />,
    title: 'Atenda enquanto você dorme',
    body: 'O agente responde, qualifica e encaminha. O time humano só entra quando a conversa pede atenção real.',
  },
];

const faqItems = [
  {
    q: 'Preciso saber programar para treinar o agente?',
    a: 'Não. Você cola o conteúdo da sua empresa (site, PDF, FAQ) e o agente aprende. Sem linha de código, sem chamar o dev.',
  },
  {
    q: 'A IA pode falar besteira para o meu cliente?',
    a: 'O agente responde só com o que você treinou. O que ele não sabe, encaminha para o atendente humano em vez de inventar.',
  },
  {
    q: 'Funciona com o meu número de WhatsApp atual?',
    a: 'Sim. Você conecta o número que já usa, sem precisar trocar ou pagar pela migração.',
  },
  {
    q: 'E se eu quiser cancelar?',
    a: 'Cancela a qualquer momento, sem multa e sem burocracia. Nenhuma letra miúda.',
  },
  {
    q: 'Como o agente sabe quando passar para o humano?',
    a: 'Você define as regras: palavra-chave, intenção de compra, solicitação explícita. O agente encaminha na hora, sem delay.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TalkLandingPage() {
  return (
    <main>

      {/* 1. Hero */}
      <HeroBlock background="sweep">
        <HeroContent>
          <HeroEyebrow>
            <SealCheck weight="fill" className="inline-block mr-1.5 align-text-bottom" size={14} />
            Meta Business Partner oficial
          </HeroEyebrow>
          <HeroHeadline>
            Pare de perder vendas no WhatsApp por demora na resposta
          </HeroHeadline>
          <HeroSubtext>
            O Umbler Talk coloca um agente de IA treinado com o conhecimento da
            sua empresa para responder, qualificar e encaminhar clientes 24 horas
            por dia. Seu time humano entra só quando vale.
          </HeroSubtext>
          <HeroCTAGroup>
            <Button variant="primary" size="lg" className="shadow-cta">
              Experimente por 7 dias
            </Button>
            <Button variant="ghost" size="lg">
              Falar com vendas
              <ArrowRight className="size-4" />
            </Button>
          </HeroCTAGroup>
        </HeroContent>
      </HeroBlock>

      {/* 2. Prova social */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <StatGrid stats={stats} columns={3} />
        </div>
      </section>

      {/* 3. Features */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <SectionHeader
            eyebrow="O que o Talk faz por você"
            headline="Atendimento com cara de empresa grande, custo de startup"
            sub="Seis resultados que seus clientes vão sentir na primeira semana."
          />
          <div className="mt-12">
            <FeatureCardGrid columns={3}>
              {features.map((f) => (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </FeatureCardGrid>
          </div>
        </div>
      </section>

      {/* 4. Como funciona */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <SectionHeader
            eyebrow="Como funciona"
            headline="Do cadastro ao primeiro atendimento em menos de 10 minutos"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-subtle p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-caption font-semibold text-foreground-muted">{s.n}</span>
                  {s.icon}
                </div>
                <h3 className="text-h4 font-medium text-foreground">{s.title}</h3>
                <p className="text-body-sm text-foreground-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <SectionHeader
            eyebrow="Planos"
            headline="Comece a responder em segundos"
            sub="Sem cartão de crédito para começar. Cancele quando quiser."
          />
          <div className="mt-12">
            <PricingTable
              plans={UMBLER_PLANS}
              defaultPeriod="monthly"
              footer={
                <p className="text-body-sm text-foreground-muted text-center mt-6">
                  Todos os planos incluem 7 dias de teste grátis. Sem compromisso.
                </p>
              }
            />
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQSection
        eyebrow="Dúvidas frequentes"
        headline="Respondemos antes de você precisar perguntar"
        items={faqItems}
      />

      {/* 7. CTA Final */}
      <CTABanner variant="brand">
        <CTAEyebrow>Sem cartão de crédito</CTAEyebrow>
        <CTATrustPill>+60 mil empresas confiam no Talk</CTATrustPill>
        <CTAHeadline>Experimente por 7 dias sem pagar nada</CTAHeadline>
        <CTASubtext>
          Configure em menos de 10 minutos. Se não gostar, cancela com um clique,
          sem explicação e sem multa.
        </CTASubtext>
        <CTAActions>
          <Button variant="primary" size="lg">
            Criar conta grátis
          </Button>
          <Button variant="ghost" size="lg">
            Falar com vendas
          </Button>
        </CTAActions>
      </CTABanner>

    </main>
  );
}
