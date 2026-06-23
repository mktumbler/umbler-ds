'use client';

import { motion } from 'framer-motion';
import {
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
  TelegramLogo,
  Lightning,
  Briefcase,
  EnvelopeSimple,
  Code,
  Globe,
} from '@phosphor-icons/react/dist/ssr';

type PhosphorIcon = typeof WhatsappLogo;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const CATEGORIES = [
  { Icon: WhatsappLogo, label: 'WhatsApp Business API', color: '#25D366' },
  { Icon: InstagramLogo, label: 'Instagram e Facebook Direct', color: '#E1306C' },
  { Icon: Globe, label: 'Webchat e e-mail', color: '#6366F1' },
  { Icon: Lightning, label: 'Zapier, Make e n8n', color: '#FF6B35' },
  { Icon: Briefcase, label: 'CRMs e ERPs via API', color: '#FF7A59' },
];

const ORBIT_ICONS = [
  { Icon: WhatsappLogo, color: '#25D366', r: 90,  theta: -55  },
  { Icon: InstagramLogo, color: '#E1306C', r: 90,  theta: 130  },
  { Icon: FacebookLogo,  color: '#1877F2', r: 150, theta: -145 },
  { Icon: TelegramLogo,  color: '#229ED9', r: 150, theta: 40   },
  { Icon: Lightning,     color: '#FF6B35', r: 150, theta: -15  },
  { Icon: Briefcase,     color: '#FF7A59', r: 210, theta: -80  },
  { Icon: EnvelopeSimple,color: '#6366F1', r: 210, theta: 175  },
  { Icon: Code,          color: '#8B5CF6', r: 210, theta: 15   },
];

function OrbitIcon({
  Icon,
  color,
  r,
  theta,
  delay,
}: {
  Icon: PhosphorIcon;
  color: string;
  r: number;
  theta: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-neutral-900"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-20px',
        marginTop: '-20px',
        transform: `rotate(${theta}deg) translateX(${r}px) rotate(${-theta}deg)`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease, delay }}
    >
      <Icon size={18} weight="fill" style={{ color }} />
    </motion.div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row">

          {/* Left:text + list */}
          <motion.div
            className="shrink-0 lg:w-[420px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="eyebrow mb-4">Integrações</p>
            <h2 className="mb-4 font-heading text-display text-balance text-white">
              Conectado a tudo que sua equipe já usa
            </h2>
            <p className="text-body-lg text-neutral-400 mb-8">
              O Talk se integra aos canais e ferramentas que você já usa.
              Sem migração, sem planilha de dados. Uma central que recebe tudo.
            </p>

            <div className="space-y-5 border-t border-white/10 pt-8">
              {CATEGORIES.map(({ Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                    <Icon size={16} weight="fill" style={{ color }} />
                  </div>
                  <span className="text-body text-neutral-300">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                  <span className="text-body-sm font-semibold text-neutral-400">+</span>
                </div>
                <span className="text-body text-neutral-500">e muito mais</span>
              </div>
            </div>
          </motion.div>

          {/* Right:orbit visual (hidden on small screens) */}
          <div className="hidden sm:flex flex-1 justify-center">
            <motion.div
              className="relative h-[480px] w-[480px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease, delay: 0.1 }}
            >
              {/* Glow layers */}
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300/10 blur-xl" />

              {/* Rings */}
              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

              {/* Center:Umbler symbol */}
              <motion.div
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <img
                  src="/brand/umbler-symbol-light.svg"
                  alt="Umbler"
                  className="h-8 w-8"
                />
              </motion.div>

              {/* Orbit icons */}
              {ORBIT_ICONS.map(({ Icon, color, r, theta }, i) => (
                <OrbitIcon
                  key={`${r}-${theta}`}
                  Icon={Icon}
                  color={color}
                  r={r}
                  theta={theta}
                  delay={0.05 * i + 0.2}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
