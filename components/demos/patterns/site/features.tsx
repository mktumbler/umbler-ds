import {
  Robot,
  ChartLineUp,
  Gear,
  ChatCircle,
  ShieldCheck,
  RocketLaunch,
  Check,
  ArrowRight,
  Globe,
  Sparkle,
  Lightning,
} from '@phosphor-icons/react/dist/ssr';
import { CardAurora } from '@/components/ui/card-aurora';


/* ══════════════════════════════════════════════════════════════
   1. FEATURE GRID — 3 colunas, ícone + título + descrição
══════════════════════════════════════════════════════════════ */
const gridFeatures = [
  {
    icon: Robot,
    title: 'Agentes de IA',
    desc: 'Atendentes treinados com seu negócio. Operam no WhatsApp 24h sem script engessado.',
  },
  {
    icon: ChartLineUp,
    title: 'CRM integrado',
    desc: 'Histórico completo de cada cliente, do primeiro contato ao pós-venda.',
  },
  {
    icon: Gear,
    title: 'Automação',
    desc: 'Fluxos que rodam sozinhos: lead entra, proposta sai, contrato fecha.',
  },
  {
    icon: ChatCircle,
    title: 'Omnichannel',
    desc: 'WhatsApp, e-mail e chat unificados numa única caixa de entrada.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    desc: 'Dados criptografados, backups automáticos e conformidade com a LGPD.',
  },
  {
    icon: RocketLaunch,
    title: 'Deploy instantâneo',
    desc: 'Novo site ou app no ar em minutos. Infraestrutura que escala com você.',
  },
];

export function FeatureGridSection() {
  return (
    <section className="rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-neutral-950 px-8 py-20 not-prose">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <p
          className="eyebrow mb-1"
        >
          Plataforma
        </p>
        <h2
          className="font-heading text-h2 text-neutral-900 dark:text-neutral-50 mb-4"
          style={{ letterSpacing: '-0.05rem' }}
        >
          Tudo que sua operação precisa, num só lugar
        </h2>
        <p className="text-body text-neutral-500 dark:text-neutral-400 leading-relaxed">
          CRM, agentes de IA, automação e atendimento conectados — para você operar em alta, não apagar incêndios.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gridFeatures.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-2 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 dark:text-brand-300">
              <Icon size={20} weight="fill" />
            </div>
            <div>
              <h3 className="font-sans text-h4 text-neutral-900 dark:text-neutral-50 mb-1.5" style={{ fontSize: '1.1rem' }}>
                {title}
              </h3>
              <p className="text-body-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. FEATURE SPLIT — texto esquerda + visual direita
══════════════════════════════════════════════════════════════ */
const splitBullets = [
  'Histórico unificado de cada lead, da primeira mensagem ao contrato',
  'Pipeline visual com etapas customizáveis por equipe',
  'Alertas automáticos para follow-ups sem deixar ninguém cair no esquecimento',
];

export function FeatureSplitSection() {
  return (
    <section className="rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-neutral-950 px-8 py-20 not-prose">
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <p className="eyebrow mb-1">CRM</p>
          <h2
            className="font-heading text-h2 text-neutral-900 dark:text-neutral-50 mb-5"
            style={{ letterSpacing: '-0.05rem' }}
          >
            Cada cliente no lugar certo. Na hora certa.
          </h2>
          <p className="text-body text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
            Chega de planilha, post-it e feeling. O CRM Umbler centraliza toda a jornada do cliente com contexto real para sua equipe e para os agentes de IA.
          </p>
          <ul className="flex flex-col gap-4 mb-10">
            {splitBullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-500/15 flex items-center justify-center text-brand-500 dark:text-brand-300">
                  <Check size={11} weight="bold" />
                </span>
                <span className="text-body-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-brand-500 dark:text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 transition-colors"
          >
            Conhecer o CRM <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        {/* Visual — mock dashboard */}
        <div className="rounded-xl border border-black/8 dark:border-white/8 bg-neutral-50 dark:bg-neutral-900 p-5 shadow-md dark:shadow-none">
          {/* Barra de topo */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
          {/* Pipeline mock */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {['Leads', 'Proposta', 'Fechado'].map((col, i) => (
              <div key={col}>
                <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 mb-2">{col}</p>
                <div className="flex flex-col gap-1.5">
                  {Array.from({ length: i === 0 ? 3 : i === 1 ? 2 : 1 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-md bg-white dark:bg-neutral-800 border border-black/6 dark:border-white/6 p-2"
                    >
                      <div className="h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700 mb-1" style={{ width: `${55 + j * 15}%` }} />
                      <div className="h-1 rounded-full bg-neutral-100 dark:bg-neutral-700/50" style={{ width: '40%' }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[['12', 'Leads'], ['3', 'Fechados'], ['R$ 48k', 'MRR']].map(([val, lbl]) => (
              <div key={lbl} className="rounded-lg bg-white dark:bg-neutral-800 border border-black/6 dark:border-white/6 p-3 text-center">
                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{val}</p>
                <p className="text-[10px] text-neutral-400 dark:text-neutral-500">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. FEATURE BENTO — CardAurora em grid assimétrico
══════════════════════════════════════════════════════════════ */
export function FeatureBentoSection() {
  return (
    <section className="dark rounded-2xl bg-neutral-950 px-8 py-20 not-prose">
      {/* Header */}
      <div className="mx-auto max-w-xl text-center mb-12">
        <p
          className="eyebrow mb-1"
        >
          Diferenciais
        </p>
        <h2
          className="font-heading text-h2 text-neutral-50 mb-4"
          style={{ letterSpacing: '-0.05rem' }}
        >
          Construído para quem não pode parar
        </h2>
      </div>

      {/* Bento */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 auto-rows-fr" style={{ minHeight: '420px' }}>
        {/* Card grande — ocupa 2 colunas e 2 linhas */}
        <div className="md:col-span-2 md:row-span-2">
          <CardAurora
            icon={<Sparkle size={22} weight="fill" />}
            label="IA nativa"
            title="Inteligência que aprende com o seu negócio"
            description="Não é um chatbot genérico. É um agente treinado com seus produtos, processos e tom de voz — que opera no WhatsApp enquanto você escala."
            blob="sweep"
            rotation="diagonal"
            className="h-full"
          />
        </div>
        {/* Card 2 */}
        <CardAurora
          icon={<Globe size={22} weight="fill" />}
          label="Omnichannel"
          title="Uma caixa de entrada para tudo"
          blob="prism"
          rotation="default"
          className="h-full"
        />
        {/* Card 3 */}
        <CardAurora
          icon={<Lightning size={22} weight="fill" />}
          label="Performance"
          title="Infraestrutura que escala com você"
          blob="prism"
          rotation="diagonal"
          className="h-full"
        />
      </div>
    </section>
  );
}
