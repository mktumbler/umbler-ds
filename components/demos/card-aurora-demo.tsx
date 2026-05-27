import { CardAurora } from '@/components/ui/card-aurora';
import {
  Lightning,
  Globe,
  Sparkle,
  MapPin,
  RocketLaunch,
  ShieldCheck,
  Envelope,
} from '@phosphor-icons/react/dist/ssr';

/* ── Variações de rotação com blob sweep ─────────────────────── */
export function CardAuroraRotationsDemo() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <CardAurora
        icon={<Lightning size={22} />}
        label="Agentes de IA"
        title="IA com contexto, não com hype"
        description="Treinado com o seu negócio. Opera no WhatsApp enquanto você escala."
        blob="sweep"
        rotation="default"
        className="h-[260px]"
      />
      <CardAurora
        icon={<Globe size={22} />}
        label="Infraestrutura"
        title="Sua operação à altura da ambição"
        description="CRM, atendimento e automação conectados — sem fragmentação."
        blob="sweep"
        rotation="diagonal"
        className="h-[260px]"
      />
      <CardAurora
        icon={<Sparkle size={22} />}
        label="Crescimento"
        title="Estrutura que sustenta quem não para"
        description="A Umbler equipa. O crescimento é seu."
        blob="sweep"
        rotation="spin"
        className="h-[260px]"
      />
    </div>
  );
}

/* ── Blob prism ───────────────────────────────────────────────── */
export function CardAuroraPrismDemo() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <CardAurora
        icon={<MapPin size={22} />}
        label="Hospedagem"
        title="Onde empresas ambiciosas sustentam crescimento"
        description="Servidores no Brasil. Performance real, sem esperar a infraestrutura alcançar."
        blob="prism"
        rotation="default"
        className="h-[260px]"
      />
      <CardAurora
        icon={<ShieldCheck size={22} />}
        label="Domínios & Email"
        title="Reputação que a operação não pode perder"
        description="SSL, DMARC e DNS gerenciados — a base que protege quem cresce."
        blob="prism"
        rotation="spin"
        className="h-[260px]"
      />
    </div>
  );
}

/* ── Bento Grid ───────────────────────────────────────────────── */
export function CardAuroraBentoDemo() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '240px 240px',
        gap: '16px',
        maxWidth: '900px',
      }}
    >
      {/* wide — col 1-2, row 1 */}
      <CardAurora
        icon={<RocketLaunch size={22} />}
        label="Infraestrutura"
        title="Estrutura à altura de quem não para de crescer"
        description="Hospedagem, email, domínios e agentes IA — conectados, não fragmentados."
        blob="sweep"
        rotation="default"
        style={{ gridColumn: 'span 2' }}
      />

      {/* tall — col 3, rows 1-2 */}
      <CardAurora
        icon={<ShieldCheck size={22} />}
        label="Domínios & Email"
        title="Reputação que sustenta a operação"
        description="SSL, DMARC e DNS — a base que protege quem cresce."
        blob="prism"
        rotation="default"
        style={{ gridRow: 'span 2' }}
      />

      {/* col 1, row 2 */}
      <CardAurora
        icon={<Lightning size={22} />}
        label="Agentes de IA"
        title="IA com contexto real"
        description="Treinado com o seu negócio."
        blob="sweep"
        rotation="diagonal"
      />

      {/* col 2, row 2 */}
      <CardAurora
        icon={<Envelope size={22} />}
        label="Email"
        title="Reputação que não se perde"
        description="Alta entregabilidade. Sem surpresas."
        blob="sweep"
        rotation="spin"
      />
    </div>
  );
}
