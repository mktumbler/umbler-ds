import { ArrowRight, Robot, ChartLineUp, Lightning } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { HeroBackground } from '@/components/ui/hero-background';
import { LogoCloud } from '@/components/ui/logo-cloud';

/**
 * /showcase: landing demonstrativa montada com o Umbler DS.
 *
 * MVP: Hero + LogoCloud + Feature Grid + CTA Banner. Conforme novas seções
 * são adicionadas (Pricing, Manifesto, FAQ), elas vivem aqui.
 *
 * Layout dark fixo via app/(landing)/layout.tsx. Sem cromo Fumadocs.
 */

export default function ShowcasePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ────────────────────────────────────────────── */}
      <HeroBackground variant="sweep" className="min-h-screen">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center md:py-32">
          <p className="eyebrow mb-6">Plataforma de crescimento · CRM · IA</p>

          <h1 className="mb-6 font-heading text-display-lg text-white text-balance md:text-display-xl">
            A estrutura sempre<br />à altura da ambição
          </h1>

          <p className="mb-10 max-w-2xl text-body-lg text-white/70 text-pretty">
            CRM, agentes de IA e automação no WhatsApp, conectados numa só infraestrutura.
            Para empresas que querem crescer, não improvisar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Experimente por 7 dias
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              Falar com vendas
            </Button>
          </div>
        </div>
      </HeroBackground>

      {/* ── Logo Cloud ──────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-16">
        <LogoCloud
          tone="dark"
          label="+60 mil empresas confiam na Umbler"
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

      {/* ── Feature Grid ────────────────────────────────────── */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow mb-4">Como funciona</p>
            <h2 className="font-heading text-display text-foreground text-balance">
              Três peças, uma operação inteligente
            </h2>
            <p className="mt-4 text-body-lg text-foreground-muted text-pretty">
              Não é uma stack de ferramentas. É uma camada única, projetada para conversar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Robot,
                title: 'Agentes de IA',
                desc: 'Treinados com o conhecimento da sua empresa, respondem no WhatsApp 24h sem parecer bot.',
              },
              {
                icon: ChartLineUp,
                title: 'CRM que entende WhatsApp',
                desc: 'Cada conversa vira histórico. Cada lead vira oportunidade rastreável, sem copiar e colar.',
              },
              {
                icon: Lightning,
                title: 'Automação real',
                desc: 'Distribuição por regra, handoff IA↔humano no momento certo, follow-up que não falha.',
              },
            ].map((f) => {
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
          <h2 className="mb-6 font-heading text-display-lg text-white text-balance">
            Pronto pra crescer com estrutura?
          </h2>
          <p className="mb-10 text-body-lg text-white/70 text-pretty">
            Trial de 7 dias. Sem cartão. Cancele quando quiser.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" variant="primary">
              Experimente por 7 dias
              <ArrowRight size={20} weight="bold" />
            </Button>
            <Button size="xl" variant="ghost">
              Agendar demo
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer minimalista ──────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[var(--color-neutral-950)] px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-caption text-white/40 md:flex-row">
          <p>© Umbler · Landing demonstrativa construída com o Umbler Design System</p>
          <a href="/docs/marketing/showcase" className="hover:text-white/70">
            ← Voltar à doc
          </a>
        </div>
      </footer>
    </main>
  );
}
