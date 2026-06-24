import {
  ArrowRight,
  Lightning,
  ChatCircleDots,
  Sparkle,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CTABanner,
  CTAEyebrow,
  CTAHeadline,
  CTAHeadlineMuted,
  CTASubtext,
  CTASubtextMuted,
  CTAActions,
} from '@/components/blocks/cta-banner';

/* ──────────────────────────────────────────────────────────────────────────
   1. PREMIUM — gradient-premium + glow + eyebrow + dual CTA
   Padrão de fechamento das LPs /showcase/produto e /showcase/solucao.
   Máximo impacto, posição final da página.
   ────────────────────────────────────────────────────────────────────────── */
export function CTABannerPremium() {
  return (
    <CTABanner variant="premium" className="w-full py-16">
      <CTAEyebrow>
        <p className="eyebrow">7 dias grátis, sem cartão, sem multa</p>
      </CTAEyebrow>
      <CTAHeadline>
        Coloque um agente atendendo<br />ainda esta semana
      </CTAHeadline>
      <CTASubtext>
        Você sobe a base, define o tom, conecta o WhatsApp. A gente cuida do resto.
      </CTASubtext>
      <CTAActions>
        <Button size="xl" variant="primary">
          Começar agora <ArrowRight size={20} weight="bold" />
        </Button>
        <Button size="xl" variant="ghost">
          <Lightning size={20} weight="duotone" /> Ver demo de 2 min
        </Button>
      </CTAActions>
    </CTABanner>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   2. GLOW — neutral-950 + radial glow brand + badge + 1 CTA
   Mais sutil, boa alternativa quando o premium é forte demais
   ou a página já tem gradiente em outra seção.
   ────────────────────────────────────────────────────────────────────────── */
export function CTABannerGlow() {
  return (
    <CTABanner variant="glow" className="w-full py-16">
      <CTAEyebrow>
        <Badge variant="brand"><Sparkle size={11} weight="fill" />Novo plano Pro</Badge>
      </CTAEyebrow>
      <CTAHeadline>
        Pronto para<br />escalar o atendimento?
      </CTAHeadline>
      <CTASubtext>
        Agentes IA + equipe humana no mesmo painel. Sem DevOps, sem setup complicado.
      </CTASubtext>
      <CTAActions>
        <Button size="xl" variant="primary">
          Criar conta grátis <ArrowRight size={20} weight="bold" />
        </Button>
      </CTAActions>
    </CTABanner>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   3. SIMPLE — surface-subtle com borda, adapta light/dark
   Para CTAs de meio de página, entre seções de conteúdo,
   ou em páginas de documentação / blog.
   ────────────────────────────────────────────────────────────────────────── */
export function CTABannerSimple() {
  return (
    <CTABanner variant="simple" className="w-full py-14">
      <CTAHeadlineMuted>
        Experimente o Umbler<br />sem compromisso
      </CTAHeadlineMuted>
      <CTASubtextMuted>
        14 dias completos, sem cartão. Cancele quando quiser.
      </CTASubtextMuted>
      <CTAActions>
        <Button size="lg" variant="primary">
          Testar grátis <ArrowRight size={18} />
        </Button>
        <Button size="lg" variant="outline">
          <ChatCircleDots size={18} /> Falar com vendas
        </Button>
      </CTAActions>
    </CTABanner>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   4. BRAND — brand-600 sólido, máximo contraste
   Para campanhas pontuais, banners de upsell, notificações de upgrade.
   Não usar como fechamento padrão — reservar para contextos de urgência.
   ────────────────────────────────────────────────────────────────────────── */
export function CTABannerBrand() {
  return (
    <CTABanner variant="brand" className="w-full py-14">
      <CTAHeadline>
        Automatize hoje,<br />pague só quando crescer
      </CTAHeadline>
      <CTASubtext>
        Plano Starter de R$ 197/mês. Upgrade com 1 clique, sem burocracia.
      </CTASubtext>
      <CTAActions>
        <Button size="xl" className="bg-white text-brand-600 hover:bg-white/90">
          Ver planos <ArrowRight size={20} weight="bold" />
        </Button>
      </CTAActions>
    </CTABanner>
  );
}
