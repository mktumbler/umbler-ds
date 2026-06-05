import {
  ArrowRight,
  Robot,
  Brain,
  Plugs,
  ChatCircleDots,
  Sparkle,
  ShieldCheck,
  Lightning,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroBackground } from '@/components/ui/hero-background';
import { LogoCloud } from '@/components/ui/logo-cloud';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * /showcase/produto: LP arquetípica de Produto (recorte: Agente IA).
 *
 * Segue a sequência Solution Aware do spec marketing/page-types/produto.mdx:
 *   Hero (com mock de produto) -> Logo Cloud -> Feature Cards 3-col ->
 *   Feature Showcase (2 alternados) -> Steps 01/02/03 -> IA vs Chatbot ->
 *   FAQ -> CTA Banner.
 *
 * Layout dark fixo via app/(landing)/layout.tsx.
 */

const features3 = [
  {
    icon: Brain,
    title: 'Treinado com o conhecimento da sua empresa',
    desc: 'Sobe PDFs, sites, planilhas. O agente responde dentro do tom da marca, sem alucinar.',
  },
  {
    icon: ChatCircleDots,
    title: 'Conversa que não parece bot',
    desc: 'Memória por contato, contexto entre mensagens, handoff suave para humano quando precisa.',
  },
  {
    icon: Plugs,
    title: 'Plugado no que você já usa',
    desc: 'WhatsApp Oficial, CRM Umbler, planilhas, sistemas externos via webhook. Sem stack paralela.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Sobe a base',
    desc: 'PDFs, links, planilhas. O agente aprende em minutos, não em meses.',
  },
  {
    n: '02',
    title: 'Define o comportamento',
    desc: 'Persona, tom, regras de escalonamento. Sem prompt engineering misterioso.',
  },
  {
    n: '03',
    title: 'Conecta e publica',
    desc: 'WhatsApp Oficial liga, conversas começam. Você acompanha tudo no CRM.',
  },
];

const faqs = [
  {
    q: 'E se o agente alucinar e mandar algo errado pro cliente?',
    a: 'Você define exatamente o que ele pode dizer. Fora do escopo, ele escala pra humano automaticamente. Logs auditáveis em todas as conversas.',
  },
  {
    q: 'Quanto tempo pra colocar no ar?',
    a: 'Setup básico em uma tarde. Refinamento contínuo durante a primeira semana. Sem projeto de 3 meses.',
  },
  {
    q: 'Funciona em qual canal?',
    a: 'WhatsApp Oficial é o foco. Suporte para Instagram DM e Webchat já no plano. E-mail e voice estão no roadmap.',
  },
  {
    q: 'E se meu time não quiser usar IA no atendimento?',
    a: 'O agente roda em paralelo, não substitui ninguém. Atende quem chega fora do horário, qualifica antes do humano entrar. O time aceita rápido quando vê a fila enxugar.',
  },
  {
    q: 'Posso testar sem cartão?',
    a: 'Sim. 7 dias de trial, todos os recursos liberados. Cancela quando quiser, sem cobrança.',
  },
];

export default function ProdutoLanding() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ────────────────────────────────────────────── */}
      <HeroBackground variant="sweep" className="min-h-screen">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center md:py-32">
          <Badge variant="brand" shape="pill" className="mb-6">
            <Sparkle size={12} weight="fill" /> Novo: Agente IA Umbler
          </Badge>

          <h1 className="mb-6 font-heading text-display-lg text-white text-balance md:text-display-xl">
            Atendimento que não dorme,<br />time que não cansa
          </h1>

          <p className="mb-10 max-w-2xl text-body-lg text-white/70 text-pretty">
            Agente de IA treinado com o conhecimento da sua empresa, integrado ao WhatsApp e ao CRM.
            Responde, qualifica e escala pra humano quando precisa.
          </p>

          <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Testar 7 dias grátis
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              Ver demo de 2 min
            </Button>
          </div>

          {/* Mock visual do produto */}
          <div className="relative mx-auto w-full max-w-4xl">
            <div className="absolute -inset-4 rounded-3xl bg-brand-500/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-neutral-950)] shadow-2xl">
              {/* Barra superior */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                {/* audit-ignore: badge-hand-roll: dots de janela (traffic light), não badges */}
                <span className="size-2.5 rounded-full bg-error-500/60" />
                {/* audit-ignore: badge-hand-roll: dots de janela (traffic light), não badges */}
                <span className="size-2.5 rounded-full bg-warning-500/60" />
                {/* audit-ignore: badge-hand-roll: dots de janela (traffic light), não badges */}
                <span className="size-2.5 rounded-full bg-success-500/60" />
                <span className="ml-3 text-caption text-white/40">Umbler Talk · Agente IA</span>
              </div>
              {/* Conversa */}
              <div className="space-y-4 p-8 text-left">
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/5 px-4 py-3 text-body text-white/80">
                    Oi! Vi o anúncio de vocês. Atendem em Curitiba?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand-500 px-4 py-3 text-body text-white">
                    Atendemos sim, Marina. Temos unidade no Batel e no Champagnat. Qual fica
                    mais perto de você?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/5 px-4 py-3 text-body text-white/80">
                    Champagnat. Vocês têm horário amanhã de manhã?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand-500 px-4 py-3 text-body text-white">
                    Tenho 9h, 10h30 e 11h disponíveis. Qual prefere?
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 text-caption text-white/40">
                  {/* audit-ignore: badge-hand-roll: dot de status pulsante, não badge */}
                  <span className="inline-flex size-1.5 animate-pulse rounded-full bg-success-500" />
                  Agente respondendo · tempo médio 4s
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroBackground>

      {/* ── Logo Cloud ──────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-16">
        <LogoCloud
          tone="dark"
          label="+2 mil empresas atendem com Agente IA Umbler"
          logos={[
            { src: '/showcase/logos/unimed.svg', alt: 'Unimed' },
            { src: '/showcase/logos/triider.svg', alt: 'Triider' },
            { src: '/showcase/logos/cora.svg', alt: 'Cora' },
            { src: '/showcase/logos/cna.svg', alt: 'CNA' },
            { src: '/showcase/logos/anima.svg', alt: 'Ânima' },
            { src: '/showcase/logos/linker.svg', alt: 'Linker' },
          ]}
        />
      </section>

      {/* ── Feature Cards 3-col ─────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow mb-4">Por que Agente IA Umbler</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Três coisas que chatbot tradicional não faz
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features3.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-surface-subtle p-8 transition-colors duration-[var(--duration-normal)] hover:border-border-strong"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="mb-3 text-h4 font-heading text-foreground">{f.title}</h3>
                  <p className="text-body text-foreground-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Showcase alternados ─────────────────────── */}
      <section className="bg-surface-subtle px-6 py-24">
        <div className="mx-auto max-w-[1200px] space-y-24">
          {/* Feature 1: texto esquerda, visual direita */}
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Conhecimento</p>
              <h3 className="mb-6 font-heading text-display text-foreground text-balance">
                Aprende com o que sua empresa já tem
              </h3>
              <p className="mb-6 text-body-lg text-foreground-muted text-pretty">
                Sobe PDFs de produto, site institucional, planilha de preços, FAQ interno.
                Em minutos o agente sabe responder o que seu time leva semana pra documentar.
              </p>
              <ul className="space-y-3 text-body text-foreground-muted">
                {[
                  'Sem prompt engineering: sobe arquivo e pronto',
                  'Atualização incremental quando muda algo',
                  'Cita a fonte da resposta para auditoria',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-success-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-500/10 blur-2xl" aria-hidden />
              <div className="relative space-y-3 rounded-2xl border border-border bg-surface p-6 shadow-xl">
                {[
                  { name: 'guia-produto.pdf', size: '2.4 MB', status: 'Indexado' },
                  { name: 'tabela-precos-2026.xlsx', size: '180 KB', status: 'Indexado' },
                  { name: 'umbler.com', size: '142 páginas', status: 'Indexado' },
                  { name: 'faq-interno.docx', size: '480 KB', status: 'Processando' },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between rounded-xl border border-border bg-surface-subtle px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                        <Brain size={18} weight="duotone" />
                      </div>
                      <div>
                        <p className="text-body-sm font-medium text-foreground">{doc.name}</p>
                        <p className="text-caption text-foreground-muted">{doc.size}</p>
                      </div>
                    </div>
                    <Badge
                      variant={doc.status === 'Indexado' ? 'success' : 'warning'}
                      shape="pill"
                      dot
                    >
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: visual esquerda, texto direita */}
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-brand-500/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-caption font-semibold uppercase tracking-wider text-foreground-muted">
                    Roteamento ativo
                  </p>
                  <Badge variant="success" shape="pill" dot>
                    Ao vivo
                  </Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Pergunta sobre produto', target: 'Agente IA', delay: '4s' },
                    { label: 'Pedido de orçamento', target: 'Comercial · Marina', delay: '1min' },
                    { label: 'Reclamação ativa', target: 'Suporte · Tier 2', delay: 'imediato' },
                    { label: 'Cancelamento', target: 'Retenção · Pedro', delay: 'imediato' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-surface-subtle px-4 py-3"
                    >
                      <span className="text-body-sm text-foreground">{row.label}</span>
                      <div className="flex items-center gap-2 text-caption">
                        <span className="text-foreground-muted">{row.target}</span>
                        <span className="text-foreground-subtle">·</span>
                        <span className="text-success-500">{row.delay}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-4">Handoff inteligente</p>
              <h3 className="mb-6 font-heading text-display text-foreground text-balance">
                Sabe quando passar pra humano
              </h3>
              <p className="mb-6 text-body-lg text-foreground-muted text-pretty">
                Você define os gatilhos: assunto crítico, intenção de compra, frustração detectada.
                O agente escala automaticamente para o time certo, sem perder contexto.
              </p>
              <ul className="space-y-3 text-body text-foreground-muted">
                {[
                  'Regras por palavra-chave, intenção ou contexto',
                  'Histórico completo entregue ao humano que assume',
                  'Métricas de quantas conversas o agente resolve sozinho',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-success-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps 01/02/03 ──────────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow mb-4">Como começa</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Do upload ao primeiro atendimento, em uma tarde
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-surface-subtle p-8"
              >
                <span className="font-heading text-display-lg text-foreground-subtle">
                  {s.n}
                </span>
                <h3 className="mb-3 mt-4 text-h4 font-heading text-foreground">{s.title}</h3>
                <p className="text-body text-foreground-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison: IA vs Chatbot ───────────────────────── */}
      <section className="bg-surface-subtle px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow mb-4">Agente IA vs. Chatbot tradicional</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Mesma caixa de mensagem, resultado diferente
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface-subtle">
                  <th className="px-6 py-4 text-left text-caption font-semibold uppercase tracking-wider text-foreground-muted">
                    Capacidade
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <Robot size={18} weight="duotone" className="text-brand-500" />
                      <span className="text-body-sm font-semibold text-foreground">Agente IA</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-body-sm font-semibold text-foreground-muted">
                    Chatbot tradicional
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Entende variação de linguagem', true, false],
                  ['Aprende com sua base de conhecimento', true, false],
                  ['Memória entre mensagens', true, false],
                  ['Escala pra humano com contexto', true, false],
                  ['Configura via árvore de decisão', true, true],
                  ['Cita fonte da resposta', true, false],
                ].map(([label, ia, bot]) => (
                  <tr key={label as string} className="border-b border-border last:border-b-0">
                    <td className="px-6 py-4 text-body text-foreground">{label}</td>
                    <td className="px-6 py-4 text-center">
                      {ia ? (
                        <CheckCircle
                          size={22}
                          weight="fill"
                          className="mx-auto text-success-500"
                        />
                      ) : (
                        <XCircle
                          size={22}
                          weight="regular"
                          className="mx-auto text-foreground-subtle"
                        />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {bot ? (
                        <CheckCircle
                          size={22}
                          weight="fill"
                          className="mx-auto text-success-500/60"
                        />
                      ) : (
                        <XCircle
                          size={22}
                          weight="regular"
                          className="mx-auto text-foreground-subtle"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-12 md:grid-cols-4">
          {[
            { n: '72%', label: 'conversas resolvidas sem humano' },
            { n: '4s', label: 'tempo médio de resposta' },
            { n: '24h', label: 'atendimento, todo dia' },
            { n: '3x', label: 'mais leads qualificados' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-display text-brand-400 md:text-display-lg">
                {s.n}
              </p>
              <p className="mt-2 text-caption uppercase tracking-wider text-foreground-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="bg-surface-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Dúvidas honestas</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              O que perguntam antes de assinar
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
            <ShieldCheck size={14} weight="fill" /> 7 dias grátis · sem cartão
          </div>
          <h2 className="mb-6 font-heading text-display-lg text-white text-balance">
            Coloque um agente atendendo<br />ainda esta semana
          </h2>
          <p className="mb-10 text-body-lg text-white/70 text-pretty">
            Você sobe a base, define o tom, conecta o WhatsApp. A gente cuida do resto.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Começar agora
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              <Lightning size={20} weight="duotone" /> Ver demo de 2 min
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-caption text-white/40 md:flex-row">
          <p>© Umbler · LP de Produto demonstrativa construída com o Umbler Design System</p>
          <div className="flex gap-6">
            <a href="/showcase" className="hover:text-white/70">← Home showcase</a>
            <a href="/docs/marketing/page-types/produto" className="hover:text-white/70">
              Ver spec na doc
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
