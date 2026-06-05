import { ArrowRight, ShieldCheck, ChatCircleDots } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { PricingPlans } from './pricing-plans';

/**
 * /showcase/pricing: LP arquetípica de Pricing.
 *
 * Spec em marketing/page-types/pricing.mdx. Sequência:
 *   Hero curto -> Pricing Table (toggle + 3 planos) -> Logo Cloud ->
 *   FAQ de preço -> CTA Banner -> Footer.
 *
 * Toggle e cards vivem em ./pricing-plans (client). Resto é server.
 * Layout dark fixo via app/(landing)/layout.tsx.
 */

const faqs = [
  {
    q: 'Posso mudar de plano depois?',
    a: 'A qualquer momento, em qualquer direção. Upgrade entra em vigor imediatamente, com cobrança proporcional. Downgrade entra no próximo ciclo, sem penalidade.',
  },
  {
    q: 'Tem multa por cancelamento?',
    a: 'Zero. Plano mensal cancela quando quiser, sem fidelidade. Anual paga proporcional ao que foi usado, sem multa retroativa.',
  },
  {
    q: 'O que acontece se eu exceder o limite de conversas?',
    a: 'Você é avisado por e-mail aos 80% e 100% do limite. Cobrança extra só com sua aprovação. Nada é cortado no meio de uma conversa em andamento.',
  },
  {
    q: 'Tem desconto para pagamento anual?',
    a: '10% de desconto no anual, cobrado integralmente no início. Equivale a 1,2 meses grátis por ano. Empresas com 5+ atendentes geralmente fazem esta escolha.',
  },
  {
    q: 'Cobram setup fee ou onboarding?',
    a: 'Não. Onboarding guiado está incluso em todos os planos (vídeo + sessão com especialista no Pro e Enterprise). Setup técnico do WhatsApp Oficial fica por nossa conta.',
  },
  {
    q: 'Preciso de cartão de crédito pro trial?',
    a: 'Não. Cria a conta com e-mail, usa 7 dias completos, decide depois. Se não converter, a conta entra em modo somente leitura, sem cobrança automática nunca.',
  },
];

export default function PricingLanding() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Hero curto ──────────────────────────────────────── */}
      <section className="border-b border-white/5 bg-[var(--color-neutral-950)] px-6 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Planos Umbler</p>
          <h1 className="font-heading text-display-lg text-white text-balance md:text-display-xl">
            Preço previsível,<br />sem surpresa no boleto
          </h1>
          <p className="mt-6 text-body-lg text-white/70 text-pretty">
            Comece com o trial de 7 dias, sem cartão. Escolha o plano quando o resultado aparecer
            e cancele quando quiser, sem multa.
          </p>
        </div>
      </section>

      {/* ── Pricing Table ───────────────────────────────────── */}
      <section className="bg-surface px-6 py-20">
        <PricingPlans />
      </section>

      {/* ── Logo Cloud: confiança extra perto da decisão ────── */}
      <section className="bg-surface-subtle px-6 py-16">
        <LogoCloud
          tone="light"
          label="+60 mil empresas operam com a Umbler"
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

      {/* ── Stats de ROI/valor percebido ─────────────────────── */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-12 md:grid-cols-3">
          {[
            { n: '40%', label: 'mais leads convertidos em mesma equipe' },
            { n: '3,2x', label: 'ROI médio no primeiro trimestre' },
            { n: '72h', label: 'tempo médio para primeiro resultado' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-display text-brand-500 md:text-display-lg">
                {s.n}
              </p>
              <p className="mx-auto mt-2 max-w-[14rem] text-caption uppercase tracking-wider text-foreground-muted">
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
            <p className="eyebrow mb-4">Dúvidas honestas sobre cobrança</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              O que perguntam antes de assinar
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-surface"
          >
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
            <ShieldCheck size={14} weight="fill" /> 7 dias grátis, sem cartão, sem multa
          </div>
          <h2 className="mb-6 font-heading text-display-lg text-white text-balance">
            Ainda em dúvida sobre o plano?
          </h2>
          <p className="mb-10 text-body-lg text-white/70 text-pretty">
            Conta o tamanho do seu time e o volume que opera no WhatsApp. A gente recomenda o
            plano certo, sem empurrar feature que você não vai usar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Falar com vendas
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              <ChatCircleDots size={20} weight="duotone" /> Chat ao vivo
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-caption text-white/40 md:flex-row">
          <p>© Umbler · LP de Pricing demonstrativa construída com o Umbler Design System</p>
          <div className="flex gap-6">
            <a href="/showcase" className="hover:text-white/70">← Home showcase</a>
            <a href="/docs/marketing/page-types/pricing" className="hover:text-white/70">
              Ver spec na doc
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
