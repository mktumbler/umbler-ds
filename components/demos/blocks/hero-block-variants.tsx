import {
  ArrowRight,
  Sparkle,
  ChatCircleDots,
  Lightning,
  Robot,
  Buildings,
  CheckCircle,
  Star,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroBackground } from '@/components/ui/hero-background';
import {
  HeroBlock,
  HeroContent,
  HeroEyebrow,
  HeroHeadline,
  HeroSubtext,
  HeroCTAGroup,
  HeroVisual,
  HeroText,
} from '@/components/blocks/hero-block';

/* ──────────────────────────────────────────────────────────────────────────
   1. MINIMAL — eyebrow texto + titular + subtexto + 1 CTA
   Quando: hero de produto secundário, página interna, LP simples
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockMinimal() {
  return (
    <HeroBlock className="w-full px-6 py-12">
      <HeroContent>
        <HeroEyebrow>
          <span className="flex items-center gap-1.5 text-caption font-medium text-brand-400">
            <span className="size-1.5 rounded-full bg-brand-400" />
            Design system
          </span>
        </HeroEyebrow>
        <HeroHeadline>
          Construa produtos<br />que encantam
        </HeroHeadline>
        <HeroSubtext>
          Componentes prontos para produção. Tokens coerentes. Do Figma ao Next.js sem fricção.
        </HeroSubtext>
        <HeroCTAGroup>
          <Button size="xl">Começar grátis <ArrowRight size={18} /></Button>
        </HeroCTAGroup>
      </HeroContent>
    </HeroBlock>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   2. DUAL CTA — headline + subtexto + primary + ghost
   Quando: hero principal de produto com ação secundária (ver demo / ver planos)
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockDualCTA() {
  return (
    <HeroBlock className="w-full px-6 py-12">
      <HeroContent>
        <HeroHeadline>
          Atendimento que<br />nunca para
        </HeroHeadline>
        <HeroSubtext>
          WhatsApp, e-mail e chat unificados numa caixa de entrada. Equipe toda alinhada.
        </HeroSubtext>
        <HeroCTAGroup>
          <Button size="xl">Testar grátis <ArrowRight size={18} /></Button>
          <Button size="xl" variant="ghost">Ver demonstração</Button>
        </HeroCTAGroup>
      </HeroContent>
    </HeroBlock>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   3. SWEEP — gradiente radial brand + badge eyebrow + headline colorida
   Quando: hero principal de LP de produto com destaque visual no topo
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockSweep() {
  return (
    <HeroBlock background="sweep" className="w-full px-6 py-12">
      <HeroContent>
        <HeroEyebrow>
          <Badge variant="brand"><Sparkle size={11} weight="fill" />v3.0 disponível</Badge>
        </HeroEyebrow>
        <HeroHeadline>
          Fale com todos,<br />
          <span className="text-brand-400">de um lugar</span>
        </HeroHeadline>
        <HeroSubtext>
          Inbox único para WhatsApp, e-mail e chat. Agentes IA integrados. Um plano só.
        </HeroSubtext>
        <HeroCTAGroup>
          <Button size="xl">Criar conta grátis <ArrowRight size={18} /></Button>
          <Button size="xl" variant="ghost">Ver planos</Button>
        </HeroCTAGroup>
      </HeroContent>
    </HeroBlock>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   4. COM HEROBACKGROUND — blob decorativo + badge + headline + subtext
   Quando: hero com fundo orgânico de blobs (padrão /showcase/produto)
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockWithBackground() {
  return (
    <HeroBlock className="w-full px-6 py-12">
      <HeroBackground variant="cap" className="opacity-70" />
      <HeroContent className="relative z-10">
        <HeroEyebrow>
          <Badge variant="brand-solid"><Robot size={11} weight="fill" />Agente IA</Badge>
        </HeroEyebrow>
        <HeroHeadline>
          Seu agente comercial<br />sempre online
        </HeroHeadline>
        <HeroSubtext>
          Responde, qualifica e vende no WhatsApp 24h. Aprende com o conhecimento da sua empresa.
        </HeroSubtext>
        <HeroCTAGroup>
          <Button size="xl">Ativar agente <ArrowRight size={18} /></Button>
          <Button size="xl" variant="ghost">Ver como funciona</Button>
        </HeroCTAGroup>
      </HeroContent>
    </HeroBlock>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   5. SPLIT — texto à esquerda + mock de produto à direita
   Quando: hero de conversão alta, produto visual, before/after, dashboard mock
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockSplit() {
  return (
    <HeroBlock background="glow" className="w-full px-6 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Texto */}
        <HeroText>
          <div className="mb-5">
            <Badge variant="brand"><Buildings size={11} weight="fill" />Imobiliário</Badge>
          </div>
          <HeroHeadline className="text-left">
            Leads que viram<br />clientes de verdade
          </HeroHeadline>
          <HeroSubtext className="mt-4 text-left">
            Pipeline visual, follow-up automático e agente IA qualificando 24h. Menos planilha, mais contrato.
          </HeroSubtext>
          <HeroCTAGroup className="mt-8 justify-start">
            <Button size="lg">Começar grátis <ArrowRight size={16} /></Button>
            <Button size="lg" variant="outline">Ver demo</Button>
          </HeroCTAGroup>
        </HeroText>

        {/* Mock visual */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          {/* Cabeçalho do mock */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-caption font-semibold text-foreground-muted">Pipeline — Junho</span>
            <Badge variant="success" dot>Ao vivo</Badge>
          </div>
          {/* Linhas de lead */}
          {[
            { name: 'Ana Beatriz', stage: 'Visita agendada', status: 'success' as const },
            { name: 'Carlos Motta', stage: 'Proposta enviada', status: 'warning' as const },
            { name: 'Mariana Luz', stage: 'Novo lead', status: 'brand' as const },
          ].map((lead) => (
            <div
              key={lead.name}
              className="flex items-center justify-between border-t border-white/5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-full bg-brand-500/20 text-[10px] font-bold text-brand-300">
                  {lead.name[0]}
                </div>
                <div>
                  <p className="text-caption font-medium text-foreground">{lead.name}</p>
                  <p className="text-[10px] text-foreground-muted">{lead.stage}</p>
                </div>
              </div>
              <Badge variant={lead.status} dot>
                {lead.status === 'success' ? 'Quente' : lead.status === 'warning' ? 'Morno' : 'Novo'}
              </Badge>
            </div>
          ))}
          {/* Rodapé do mock */}
          <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-brand-500/10 px-3 py-2">
            <CheckCircle size={12} className="text-brand-400" weight="fill" />
            <span className="text-caption text-brand-300">3 leads qualificados hoje pelo agente IA</span>
          </div>
        </div>
      </div>
    </HeroBlock>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   6. ANNOUNCEMENT — pill de anuncio + headline grande + subtext + CTA
   Quando: lançamento de feature, promo, campanha pontual
   ────────────────────────────────────────────────────────────────────────── */
export function HeroBlockAnnouncement() {
  return (
    <HeroBlock background="sweep" className="w-full px-6 py-12">
      <HeroContent>
        {/* Pill de anuncio */}
        <HeroEyebrow>
          <div className="flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1">
            <Badge variant="brand-solid" className="px-2 text-[10px]">
              <Star size={9} weight="fill" />Novo
            </Badge>
            <span className="text-caption text-foreground-muted">
              Agentes IA disponíveis em todos os planos
            </span>
            <ArrowRight size={13} className="text-brand-400" />
          </div>
        </HeroEyebrow>
        <HeroHeadline>
          Da ideia ao ar<br />
          <span className="text-brand-400">em 5 minutos</span>
        </HeroHeadline>
        <HeroSubtext>
          Hospedagem, e-mail e atendimento IA no mesmo painel. Sem DevOps. Sem contrato anual.
        </HeroSubtext>
        <HeroCTAGroup>
          <Button size="xl">
            <Lightning size={18} weight="fill" />Criar conta grátis
          </Button>
          <Button size="xl" variant="ghost">
            Ver planos <ArrowRight size={16} />
          </Button>
        </HeroCTAGroup>
        {/* Social proof */}
        <p className="mt-6 flex items-center gap-2 text-caption text-foreground-muted">
          <CheckCircle size={14} className="text-success-500" weight="fill" />
          Mais de 40.000 empresas confiam na Umbler
        </p>
      </HeroContent>
    </HeroBlock>
  );
}
