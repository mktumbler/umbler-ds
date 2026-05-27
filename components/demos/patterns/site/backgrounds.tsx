import { HeroBackground, type HeroBgVariant } from '@/components/ui/hero-background';

const VARIANTS: Array<{ name: HeroBgVariant; label: string; description: string }> = [
  { name: 'sweep',        label: 'Sweep',        description: 'Grande diagonal cruzada — impacto máximo, ideal para hero principal.' },
  { name: 'cloud',        label: 'Cloud',        description: 'Distribuído horizontalmente — suave, para seções secundárias.' },
  { name: 'wedge',        label: 'Wedge',        description: 'Cunhas geométricas — mais estruturado, combina com layouts grid.' },
  { name: 'arc',          label: 'Arc',          description: 'Arco diagonal com triângulos — dinâmico, para CTA e features.' },
  { name: 'cap',          label: 'Cap',          description: 'Concentrado no topo — discreto, para seções de transição.' },
  { name: 'arc-flip',     label: 'Arc Flip',     description: 'Arc invertido verticalmente — glow na parte inferior.' },
  { name: 'sweep-invert', label: 'Sweep Invert', description: 'Sweep 180° — composição espelhada com direção contrária.' },
  { name: 'cap-mirror',   label: 'Cap Mirror',   description: 'Cap espelhado horizontalmente — glow concentrado à esquerda.' },
];

function BgPreview({ name, label, description }: { name: HeroBgVariant; label: string; description: string }) {
  return (
    <div className="not-prose flex flex-col gap-3">
      <HeroBackground
        variant={name}
        className="rounded-xl w-full"
        style={{ height: '280px' }}
      >
        <div className="flex flex-col items-center justify-center h-[280px] gap-3 text-center px-6">
          <p className="eyebrow">Background</p>
          <p className="font-heading text-2xl text-white font-medium" style={{ letterSpacing: '-0.03rem' }}>
            {label}
          </p>
        </div>
      </HeroBackground>
      <div>
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{label}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export function HeroBgGridDemo() {
  return (
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-8">
      {VARIANTS.map((v) => (
        <BgPreview key={v.name} {...v} />
      ))}
    </div>
  );
}

export function HeroBgSweepDemo() {
  return (
    <HeroBackground variant="sweep" className="rounded-2xl not-prose" style={{ minHeight: '420px' }}>
      <div className="flex flex-col items-center justify-center text-center px-8 py-20 gap-6">
        <p className="eyebrow">Infraestrutura · Crescimento · Ambição</p>
        <h1
          className="font-heading text-white"
          style={{ fontSize: 'var(--text-display-xl)', fontWeight: 500, letterSpacing: '-0.2rem', lineHeight: 1 }}
        >
          Opere em alta
        </h1>
        <p className="text-body-lg text-white/60 max-w-lg leading-relaxed">
          CRM, agentes de IA e automação conectados — para você escalar sem apagar incêndios.
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-2">
          <a href="#" className="inline-flex items-center gap-2 bg-brand-500 text-white font-medium px-5 py-2.5 rounded-md text-sm hover:bg-brand-600 transition-colors">
            Começar agora
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-medium px-5 py-2.5 rounded-md text-sm hover:bg-white/5 transition-colors">
            Ver demo
          </a>
        </div>
      </div>
    </HeroBackground>
  );
}
