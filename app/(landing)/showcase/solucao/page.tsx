import {
  ArrowRight,
  Clock,
  Robot,
  CalendarCheck,
  ChatCircleDots,
  UserCircle,
  Buildings,
  ArrowFatRight,
  Star,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LogoCloud } from '@/components/blocks/logo-cloud';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * /showcase/solucao: LP arquetípica de Solução por Segmento.
 *
 * Segmento demonstrativo: Imobiliárias.
 * Spec em marketing/page-types/solucao.mdx.
 *
 * Sequência:
 *   Hero (dor setorial) → Logo Cloud do setor →
 *   Pain Cards (3 dores em linguagem do setor) →
 *   Feature Showcase (2 features com lente imobiliária) →
 *   Stats (resultados do setor) → Testimonial →
 *   FAQ setorial → CTA Banner
 *
 * Layout dark fixo via app/(landing)/layout.tsx.
 * 100% server component. Sem estado de cliente.
 */

const pains = [
  {
    icon: Clock,
    before: 'Lead no portal às 11h. Primeiro contato às 14h. Já foi pro concorrente.',
    after: 'Resposta automática em menos de 2 minutos, 24h por dia, com o nome do imóvel que ele clicou.',
    label: 'Tempo de resposta',
  },
  {
    icon: CalendarCheck,
    before: 'Corretor esquece de ligar de volta. Cliente desaparece. Visita nunca acontece.',
    after: 'Follow-up automático em D+1, D+3 e D+7. O agente IA retoma sem o corretor precisar lembrar.',
    label: 'Follow-up manual',
  },
  {
    icon: UserCircle,
    before: '"Vou pensar." O lead some. Ninguém sabe se foi preço, localização ou concorrência.',
    after: 'O agente qualifica o lead antes de passar pro corretor: bairro, orçamento, prazo de compra. Nada de visita inútil.',
    label: 'Qualificação de leads',
  },
];

const features = [
  {
    eyebrow: 'Atendimento inicial',
    title: 'Do portal direto pro WhatsApp, sem perder um segundo',
    description:
      'O lead clicou num imóvel no portal às 23h? O agente IA responde na hora, manda as fotos, pergunta o bairro preferido e agenda a visita, tudo pelo WhatsApp. Seu corretor acorda com a visita já marcada.',
    items: [
      'Integração com os principais portais imobiliários',
      'Resposta em até 2 minutos, qualquer hora',
      'Envio automático de fotos e tour virtual',
      'Captura de orçamento e prazo de compra',
      'Passa pro corretor só quando o lead está qualificado',
    ],
    visual: (
      <div className="relative flex min-h-[340px] flex-col gap-3 rounded-xl bg-surface p-5">
        <p className="text-caption text-foreground-muted">Portal Imobiliário → WhatsApp</p>
        {[
          { from: 'portal', msg: 'Novo lead: "Apartamento 3 quartos, Moema, até R$ 800k"', time: '23:02' },
          { from: 'bot',   msg: '👋 Oi! Vi que você se interessou pelo apto na Rua X. Quando prefere visitar? Semana que vem?', time: '23:02' },
          { from: 'lead',  msg: 'Sábado de manhã ficaria ótimo', time: '23:04' },
          { from: 'bot',   msg: '✅ Agendado para sábado às 10h! A Ana (sua corretora) vai confirmar amanhã cedo.', time: '23:04' },
        ].map((bubble, i) => (
          <div
            key={i}
            className={`flex max-w-[85%] flex-col gap-1 ${bubble.from === 'lead' ? 'ml-auto items-end' : 'items-start'}`}
          >
            {bubble.from === 'portal' ? (
              <div className="rounded-lg bg-surface-subtle px-3 py-2 text-caption text-foreground-muted">
                {bubble.msg}
              </div>
            ) : (
              <div
                className={`rounded-2xl px-3.5 py-2 text-body-sm ${
                  bubble.from === 'lead'
                    ? 'bg-[#25D366] text-white'
                    : 'bg-surface-raised text-foreground'
                }`}
              >
                {bubble.msg}
              </div>
            )}
            <span className="text-[10px] text-foreground-subtle">{bubble.time}</span>
          </div>
        ))}
        <div className="mt-auto flex items-center gap-2 rounded-lg border border-border bg-surface-subtle px-3 py-2 text-caption text-foreground-subtle">
          <Robot size={14} className="text-brand-500" /> Agente IA: respondeu em 47s
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Gestão da carteira',
    title: 'Nenhum comprador em silêncio por mais de 72 horas',
    description:
      'O CRM da Umbler sabe o estágio de cada comprador: visitou, fez proposta, está em análise de crédito. O agente IA dispara o follow-up certo na hora certa, sem o corretor monitorar nada.',
    items: [
      'Pipeline visual por estágio de compra',
      'Follow-up automático por D+1, D+3, D+7',
      'Alertas quando comprador fica mais de 72h sem resposta',
      'Histórico de mensagens por imóvel visitado',
      'Relatório semanal por corretor: quem está esquecendo leads',
    ],
    visual: (
      <div className="relative min-h-[340px] rounded-xl bg-surface p-5">
        <p className="mb-4 text-caption text-foreground-muted">Pipeline da semana</p>
        {[
          { stage: 'Contato feito',     count: 24, color: 'bg-neutral-400' },
          { stage: 'Qualificado',        count: 17, color: 'bg-brand-500' },
          { stage: 'Visita agendada',    count: 9,  color: 'bg-brand-400' },
          { stage: 'Proposta enviada',   count: 4,  color: 'bg-success-500' },
          { stage: 'Contrato assinado',  count: 2,  color: 'bg-success-600' },
        ].map((row) => (
          <div key={row.stage} className="mb-3">
            <div className="mb-1 flex justify-between text-caption text-foreground-muted">
              <span>{row.stage}</span>
              <span className="font-medium text-foreground">{row.count}</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-raised">
              <div
                className={`h-1.5 rounded-full ${row.color}`}
                style={{ width: `${(row.count / 24) * 100}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mt-4 rounded-lg border border-warning-500/20 bg-warning-500/10 px-3 py-2 text-caption text-warning-300">
          ⚠ 3 leads sem resposta há mais de 72h. Follow-up automático ativado
        </div>
      </div>
    ),
  },
];

const stats = [
  { n: '4,2 min', label: 'tempo médio de 1ª resposta (era 3h)' },
  { n: '2,8x', label: 'mais visitas agendadas por corretor/mês' },
  { n: '38%', label: 'redução de leads desperdiçados na semana' },
];

const testimonial = {
  quote:
    'Antes a gente perdia lead porque o corretor estava em visita e não via a mensagem. Hoje o agente qualifica, agenda e passa o lead pronto. Minha equipe fecha mais sem trabalhar mais.',
  author: 'Renata M.',
  role: 'Diretora Comercial',
  company: 'Imobiliária Premium SP',
};

const comparison = [
  { feature: 'Resposta 24h no WhatsApp',             umbler: true,  crm: false },
  { feature: 'Agente IA que qualifica leads',         umbler: true,  crm: false },
  { feature: 'Follow-up automático por estágio',      umbler: true,  crm: false },
  { feature: 'Integração com portais imobiliários',   umbler: true,  crm: true  },
  { feature: 'Pipeline visual de vendas',             umbler: true,  crm: true  },
  { feature: 'Atendimento pós-venda e pós-locação',   umbler: true,  crm: false },
  { feature: 'Multi-atendente sem custo por assento', umbler: true,  crm: false },
];

const faqs = [
  {
    q: 'Funciona com leads de OLX, Viva Real e Zap Imóveis?',
    a: 'Sim. A Umbler captura leads dos principais portais via webhook ou e-mail de notificação. O agente IA já responde com os dados do imóvel que o lead clicou, sem copiar e colar.',
  },
  {
    q: 'O agente IA consegue enviar fotos e tour virtual?',
    a: 'Sim. Você cadastra os imóveis com fotos e links de tour. O agente seleciona automaticamente conforme o interesse declarado pelo comprador no bate-papo.',
  },
  {
    q: 'E se o lead pedir para falar com um humano?',
    a: 'O agente transfere imediatamente para o corretor responsável, com todo o histórico da conversa já no contexto. Zero fricção pra quem quer atendimento humano.',
  },
  {
    q: 'Funciona para locação além de compra e venda?',
    a: 'Sim. Você configura fluxos separados para locação (com qualificação de perfil de locatário, documentos, garantias) e venda. O mesmo sistema atende os dois.',
  },
  {
    q: 'Meu time de corretores precisa aprender algum sistema novo?',
    a: 'O corretor continua no WhatsApp. O que muda é que os leads chegam qualificados e com visita marcada. A Umbler trabalha nos bastidores.',
  },
];

export default function SolucaoLanding() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 bg-[var(--color-neutral-950)] px-6 pt-32 pb-20 text-center">
        {/* Sweep background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, var(--color-brand-500) 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-3xl">
          <Badge variant="brand" shape="tag" className="mb-6">
            <Buildings size={12} weight="fill" /> Para Imobiliárias
          </Badge>
          <h1 className="font-heading text-display-lg text-white text-balance md:text-display-xl">
            Lead chegou.<br />Resposta em 2 minutos.<br />Visita marcada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-white/70 text-pretty">
            Seus leads de portal somem porque o concorrente respondeu primeiro. A Umbler responde
            em menos de 2 minutos, qualifica o comprador e agenda a visita, enquanto seu corretor
            está em campo.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Testar 7 dias grátis
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              <ChatCircleDots size={20} weight="duotone" /> Falar com especialista
            </Button>
          </div>
          <p className="mt-5 text-caption text-white/40">
            Sem cartão de crédito · Imobiliárias de 2 a 200 corretores
          </p>
        </div>
      </section>

      {/* ── Logo Cloud ──────────────────────────────────────── */}
      <section className="bg-surface-subtle px-6 py-14">
        <LogoCloud
          tone="light"
          label="Imobiliárias que já fecham mais com a Umbler"
          logos={[
            { src: '/showcase/logos/unimed.svg',  alt: 'Unimed'   },
            { src: '/showcase/logos/triider.svg', alt: 'Triider'  },
            { src: '/showcase/logos/cora.svg',    alt: 'Cora'     },
            { src: '/showcase/logos/cna.svg',     alt: 'CNA'      },
            { src: '/showcase/logos/anima.svg',   alt: 'Ânima'    },
            { src: '/showcase/logos/linker.svg',  alt: 'Linker'   },
          ]}
        />
      </section>

      {/* ── Pain Cards ──────────────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <p className="eyebrow">O problema que você vive todo dia</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              A maioria dos leads de portal some em menos de 5 minutos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-foreground-muted text-pretty">
              Não é falta de lead: é falta de resposta rápida. 78% dos compradores fecham com a
              primeira imobiliária que retornou. Tempo de resposta é receita.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <div key={pain.label} className="rounded-2xl border border-border bg-surface-subtle p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Icon size={20} className="text-brand-500" weight="duotone" />
                  </div>
                  <p className="mb-2 text-body-sm font-semibold text-foreground">{pain.label}</p>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-error-500/10 px-3 py-2.5 text-body-sm text-foreground-muted">
                      <span className="mb-1 block text-caption font-semibold uppercase tracking-wider text-error-400">
                        Antes
                      </span>
                      {pain.before}
                    </div>
                    <div className="flex justify-center">
                      <ArrowFatRight size={16} className="text-brand-500" weight="fill" />
                    </div>
                    <div className="rounded-lg bg-success-500/10 px-3 py-2.5 text-body-sm text-foreground-muted">
                      <span className="mb-1 block text-caption font-semibold uppercase tracking-wider text-success-400">
                        Com Umbler
                      </span>
                      {pain.after}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Showcase alternado ───────────────────────── */}
      {features.map((feat, i) => (
        <section
          key={feat.eyebrow}
          className={`px-6 py-24 ${i % 2 === 0 ? 'bg-surface-subtle' : 'bg-surface'}`}
        >
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
            {/* Texto: par/ímpar alterna lado */}
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="eyebrow">{feat.eyebrow}</p>
              <h2 className="font-heading text-display text-foreground text-balance">
                {feat.title}
              </h2>
              <p className="mt-4 text-body text-foreground-muted text-pretty">
                {feat.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {feat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-foreground">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-500" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>{feat.visual}</div>
          </div>
        </section>
      ))}

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="bg-surface-subtle px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-12 text-center text-body text-foreground-muted">
            Média de imobiliárias no plano Pro após 90 dias de uso
          </p>
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-display text-brand-500 md:text-display-lg">
                  {s.n}
                </p>
                <p className="mx-auto mt-2 max-w-[14rem] text-caption uppercase tracking-wider text-foreground-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="text-warning-400" weight="fill" />
            ))}
          </div>
          <blockquote className="font-heading text-display text-foreground text-balance">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="text-body font-medium text-foreground">{testimonial.author}</p>
            <p className="text-body-sm text-foreground-muted">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="bg-surface-subtle px-6 py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center">
            <p className="eyebrow">Comparação direta</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Umbler vs CRM imobiliário tradicional
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 py-4 text-left font-medium text-foreground">Recurso</th>
                  <th className="px-6 py-4 text-center font-medium text-brand-500">Umbler</th>
                  <th className="px-6 py-4 text-center font-medium text-foreground-muted">CRM tradicional</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-subtle'}`}
                  >
                    <td className="px-6 py-3.5 text-foreground">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      {row.umbler ? (
                        <CheckCircle size={20} className="mx-auto text-brand-500" weight="fill" />
                      ) : (
                        <XCircle size={20} className="mx-auto text-foreground-subtle" weight="regular" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.crm ? (
                        <CheckCircle size={20} className="mx-auto text-foreground-muted" weight="fill" />
                      ) : (
                        <XCircle size={20} className="mx-auto text-foreground-subtle" weight="regular" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="eyebrow">Dúvidas do setor</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Perguntas que toda imobiliária faz
            </h2>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-surface">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="px-6">
                <AccordionTrigger className="text-left text-body-lg font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-foreground-muted">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────── */}
      <section
        className="relative px-6 py-32"
        style={{ background: 'var(--gradient-premium)' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'var(--gradient-glow)' }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-caption text-white/70 backdrop-blur">
            <Buildings size={14} weight="fill" /> Especialistas em atendimento imobiliário pelo WhatsApp
          </div>
          <h2 className="mb-6 font-heading text-display-lg text-white text-balance">
            Sua imobiliária pode responder mais rápido que a concorrência a partir de hoje
          </h2>
          <p className="mb-10 text-body-lg text-white/70 text-pretty">
            7 dias de teste sem cartão de crédito. Configure em menos de 1 hora com nosso time de
            onboarding especializado em imobiliárias.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Testar 7 dias grátis
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              <ChatCircleDots size={20} weight="duotone" /> Falar com especialista imobiliário
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-caption text-white/40 md:flex-row">
          <p>© Umbler · LP de Solução demonstrativa. Segmento Imobiliário</p>
          <div className="flex gap-6">
            <a href="/showcase" className="hover:text-white/70">← Home showcase</a>
            <a href="/docs/marca/tipos-de-pagina/solucao" className="hover:text-white/70">
              Ver spec na doc
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
