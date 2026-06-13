import {
  ArrowRight,
  WhatsappLogo,
  Robot,
  SealCheck,
  Star,
  CheckCircle,
  Lightning,
  ShieldCheck,
  CurrencyDollar,
  HeadCircuit,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import {
  HeroBlock,
  HeroContent,
  HeroEyebrow,
  HeroHeadline,
  HeroSubtext,
  HeroCTAGroup,
} from '@/components/blocks/hero-block';
import { FeatureSplit } from '@/components/blocks/feature-split';
import { TestimonialBlock } from '@/components/blocks/testimonial-block';
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

// ── Mockups vivos (feitos com primitivos do DS) ───────────────────────────────

function WhatsAppConversationMock() {
  return (
    <Card variant="elevated" className="max-w-md">
      <div className="flex items-center gap-3 border-b border-border bg-surface-subtle px-5 py-4">
        <Avatar name="Maria Souza" size="md" />
        <div className="flex-1">
          <p className="text-body-sm font-medium text-foreground">Maria Souza</p>
          <p className="text-caption text-foreground-muted">online agora</p>
        </div>
        <Tag variant="success" size="sm">IA respondendo</Tag>
      </div>
      <CardContent className="flex flex-col gap-3 px-5 py-6">
        <div className="self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-surface-subtle px-4 py-2.5 text-body-sm text-foreground">
          Oi, vocês entregam para Porto Alegre?
        </div>
        <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-2.5 text-body-sm text-white">
          Sim, Maria. Entrega no mesmo dia se o pedido fechar até 14h.
          Quer que eu te ajude a montar o pedido?
        </div>
        <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-2.5 text-body-sm text-white">
          Posso passar para a Ana, do time de vendas, se preferir falar com uma pessoa.
        </div>
        <p className="mt-2 text-caption text-foreground-subtle">02:47 · Madrugada de terça</p>
      </CardContent>
    </Card>
  );
}

function FunnelDashboardMock() {
  const rows = [
    { label: 'Conversas iniciadas', value: '1.284', delta: '+12%' },
    { label: 'Qualificadas pelo agente', value: '742',   delta: '+18%' },
    { label: 'Passaram para vendas',  value: '218',   delta: '+9%'  },
    { label: 'Viraram pedido',         value: '94',    delta: '+22%' },
  ];
  return (
    <Card variant="elevated" className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-h4">Funil de conversas</CardTitle>
          <Tag variant="brand" size="sm">últimos 7 dias</Tag>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pb-6">
        {rows.map((r, i) => {
          const width = [100, 72, 32, 18][i];
          return (
            <div key={r.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-body-sm">
                <span className="text-foreground-muted">{r.label}</span>
                <span className="flex items-baseline gap-2">
                  <span className="font-mono font-medium text-foreground tabular-nums">{r.value}</span>
                  <span className="text-caption font-medium text-success-500">{r.delta}</span>
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface-subtle">
                <div
                  className="h-full rounded-full bg-brand-500 transition-[width] duration-[var(--duration-slow)] ease-out"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function DistributionRulesMock() {
  const rules = [
    { trigger: 'Cliente diz "quero comprar"', goesTo: 'Ana · Vendas',     status: 'success' as const },
    { trigger: 'Cliente cita um plano Pro',   goesTo: 'Bruno · Comercial', status: 'success' as const },
    { trigger: 'Reclamação ou cancelamento',  goesTo: 'Carla · Sucesso',   status: 'warning' as const },
    { trigger: 'Pergunta técnica',            goesTo: 'Diego · Suporte',   status: 'brand'   as const },
  ];
  return (
    <Card variant="elevated" className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-h4">Regras de distribuição</CardTitle>
          <Tag variant="success" size="sm">4 ativas</Tag>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pb-6">
        {rules.map((r) => (
          <div
            key={r.trigger}
            className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface-subtle px-4 py-3"
          >
            <p className="eyebrow">quando</p>
            <p className="text-body-sm text-foreground">{r.trigger}</p>
            <div className="mt-1 flex items-center gap-2">
              <ArrowRight size={12} weight="bold" className="text-foreground-subtle" />
              <Tag variant={r.status} size="sm">{r.goesTo}</Tag>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ── Dados ─────────────────────────────────────────────────────────────────────

// [PREENCHER: trocar pelos nomes reais de clientes Talk  -  idealmente SVGs no /public/showcase/logos/]
const trustedClients = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5', 'Cliente 6'];

const benefits = [
  {
    icon: <Lightning weight="duotone" className="text-brand-500" size={22} />,
    title: 'Resposta em segundos',
    body: 'A primeira resposta sai antes do cliente trocar de aba. Latência média abaixo de 10s.',
  },
  {
    icon: <ShieldCheck weight="duotone" className="text-brand-500" size={22} />,
    title: 'Meta Business Partner',
    body: 'Conexão oficial com a API do WhatsApp. Sem risco de bloqueio do seu número.',
  },
  {
    icon: <CurrencyDollar weight="duotone" className="text-brand-500" size={22} />,
    title: 'Sem custo de implantação',
    body: 'Você cola o conteúdo da empresa e o agente aprende. Não chama agência, não chama dev.',
  },
  {
    icon: <HeadCircuit weight="duotone" className="text-brand-500" size={22} />,
    title: 'IA que sabe a hora de parar',
    body: 'O agente passa pro humano quando a conversa pede. Você define a regra, ele obedece.',
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

      {/* 1. Hero  -  pill de novidade (Cassis), dual-CTA (Talentify), trust score (Cryptix) */}
      <HeroBlock background="sweep" className="px-6 pt-16 pb-12 md:pt-24">
        <HeroContent>
          <a
            href="#novidades"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-caption font-medium text-foreground-muted shadow-sm transition-colors duration-[var(--duration-fast)] hover:text-foreground"
          >
            {/* audit-ignore: badge-hand-roll, indicador decorativo (ponto verde live), nao e badge */}
            <span className="flex size-2 rounded-full bg-success-500" />
            Novo agente IA v2 com transferência por contexto
            <ArrowRight size={12} weight="bold" />
          </a>
          <HeroEyebrow>
            <SealCheck weight="fill" className="mr-1.5 inline-block align-text-bottom text-brand-500" size={14} />
            Meta Business Partner oficial
          </HeroEyebrow>
          <HeroHeadline>
            Pare de perder vendas no WhatsApp por demora na resposta
          </HeroHeadline>
          <HeroSubtext>
            O Umbler Talk coloca um agente de IA treinado com o conhecimento da sua empresa
            para responder, qualificar e encaminhar clientes 24 horas por dia. Seu time
            humano entra só quando vale.
          </HeroSubtext>
          <HeroCTAGroup>
            <Button variant="primary" size="lg" className="shadow-cta">
              Experimente por 7 dias
            </Button>
            <Button variant="ghost" size="lg">
              Já vendo no WhatsApp e quero escalar
              <ArrowRight className="size-4" />
            </Button>
          </HeroCTAGroup>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-body-sm text-foreground-muted">
            <span className="flex items-center gap-1.5">
              {/* [PREENCHER: trocar 4,9 pelo score real do Reclame Aqui] */}
              <Star size={16} weight="fill" className="text-warning-400" />
              <span className="font-semibold text-foreground">4,9</span>
              no Reclame Aqui
            </span>
            <span className="hidden text-foreground-subtle md:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-success-500" />
              +60 mil empresas no Talk
            </span>
            <span className="hidden text-foreground-subtle md:inline">·</span>
            <span>Sem cartão para começar</span>
          </div>
        </HeroContent>
      </HeroBlock>

      {/* 2. Prova social textual  -  substitui LogoCloud até termos SVGs reais (Cassis) */}
      <section className="border-y border-border bg-surface-subtle py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="eyebrow mb-6">Empresas que vendem mais com o Talk</p>
          {/* [PREENCHER: trocar nomes placeholder por logos SVG reais em /public/showcase/logos/] */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {trustedClients.map((name) => (
              <span key={name} className="font-mono text-body-sm tracking-tight text-foreground-muted">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature deep-dive 1  -  texto à esquerda, mock de conversa à direita */}
      <FeatureSplit
        eyebrow="Atendimento 24h"
        title="Responde enquanto seu time dorme"
        body="O agente cobre madrugadas, finais de semana e feriados. Aquele cliente que perguntou o preço às 2h da manhã não precisa esperar até o dia seguinte para receber resposta."
        bullets={[
          'Latência média abaixo de 10 segundos na primeira resposta',
          'Encaminha para o time humano só quando o contexto pede',
          'Tom de voz treinado com o conteúdo da sua empresa',
        ]}
        cta={{ label: 'Ver como treinar o agente', href: '#como-funciona' }}
        visual={<WhatsAppConversationMock />}
        className="bg-surface"
      />

      {/* 4. Feature deep-dive 2  -  invertido (Cryptix split alternado) */}
      <FeatureSplit
        eyebrow="Vendas qualificadas"
        title="Qualifica antes de entregar pro vendedor"
        body="Coleta dados, entende a intenção e só transfere quando a conversa realmente merece atenção do time. O vendedor pega o cliente quase pronto para fechar."
        bullets={[
          'Filtra curiosos antes de chegar no funil',
          'Relatório de conversão por etapa em tempo real',
          'Histórico completo da conversa quando o humano assume',
        ]}
        cta={{ label: 'Ver os relatórios', href: '#relatorios' }}
        visual={<FunnelDashboardMock />}
        reverse
        className="bg-surface-subtle"
      />

      {/* 5. Feature deep-dive 3  -  voltando à esquerda */}
      <FeatureSplit
        eyebrow="Distribuição por regra"
        title="Cada conversa para o atendente certo"
        body="Defina critérios por produto, região ou estágio do funil. O Talk encaminha automaticamente, sem que ninguém precise olhar a caixa compartilhada para escolher quem responde."
        bullets={[
          'Round-robin entre vendedores da mesma fila',
          'Filas separadas por equipe (vendas, suporte, sucesso)',
          'Histórico unificado, sem fazer cliente repetir nada',
        ]}
        cta={{ label: 'Ver tipos de regra', href: '#regras' }}
        visual={<DistributionRulesMock />}
        className="bg-surface"
      />

      {/* 6. Quote oversized (Cassis)  -  quebra de ritmo antes do "como funciona" */}
      <TestimonialBlock
        // [PREENCHER: trocar por depoimento real de cliente Talk]
        testimonial={{
          quote: 'A gente parou de perder venda fora do horário. O retorno foi no primeiro mês.',
          author: 'Nome do cliente',
          role: 'Cargo',
          company: 'Empresa cliente',
          avatarInitials: 'NC',
        }}
        stars={5}
        variant="centered"
        className="bg-gradient-to-b from-surface-subtle to-surface"
      />

      {/* 7. Como funciona  -  3 cards com Tag de fase e número grande */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-max)]">
          <SectionHeader
            eyebrow="Como funciona"
            headline="Do cadastro ao primeiro atendimento em menos de 10 minutos"
            sub="Três passos. Nenhum deles pede que você abra um terminal."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: 'Passo 1',
                icon: <Robot weight="duotone" className="text-brand-500" size={28} />,
                title: 'Treine o agente',
                body: 'Cole o site, PDF do catálogo ou perguntas frequentes. O agente aprende o negócio em minutos.',
                badge: 'Sem código',
              },
              {
                tag: 'Passo 2',
                icon: <WhatsappLogo weight="duotone" className="text-brand-500" size={28} />,
                title: 'Conecte o WhatsApp',
                body: 'Escaneie o QR code ou conecte via API oficial. Seu número atual, sem precisar trocar.',
                badge: 'Meta Business Partner',
              },
              {
                tag: 'Passo 3',
                icon: <SealCheck weight="duotone" className="text-brand-500" size={28} />,
                title: 'Atenda sem dormir',
                body: 'O agente responde, qualifica e encaminha. O time humano entra só quando a conversa pede.',
                badge: 'Live 24/7',
              },
            ].map((s) => (
              <Card key={s.tag} variant="default" className="p-2">
                <CardHeader>
                  <Tag variant="brand" size="sm">{s.tag}</Tag>
                  <div className="mt-4">{s.icon}</div>
                  <CardTitle className="mt-3 text-h4">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4 pb-6">
                  <p className="text-body-sm text-foreground-muted">{s.body}</p>
                  <div className="mt-auto">
                    <Tag variant="success" size="sm">
                      <CheckCircle size={12} weight="fill" className="mr-1" />
                      {s.badge}
                    </Tag>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Por que Talk  -  grid 2x2 compacto (Cryptix benefits) */}
      <section className="bg-surface-subtle px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[var(--container-max)]">
          <SectionHeader
            eyebrow="Por que Talk"
            headline="A diferença está no que a IA decide não responder"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
                  {b.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-body-sm text-foreground-muted">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing  -  toggle Monthly/Yearly já é nativo do PricingTable (Cryptix) */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-max)]">
          <SectionHeader
            eyebrow="Planos"
            headline="Comece a responder em segundos"
            sub="Sem cartão de crédito para começar. Cancele quando quiser."
          />
          <div className="mt-12">
            {/* [PREENCHER: confirmar preços e copy dos planos com o time de produto] */}
            <PricingTable
              plans={UMBLER_PLANS}
              defaultPeriod="monthly"
              footer={
                <p className="mt-6 text-center text-body-sm text-foreground-muted">
                  Todos os planos incluem 7 dias de teste grátis. Sem compromisso.
                </p>
              }
            />
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQSection
        eyebrow="Dúvidas frequentes"
        headline="Respondemos antes de você precisar perguntar"
        items={faqItems}
      />

      {/* 11. CTA final */}
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
