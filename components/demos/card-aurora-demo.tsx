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
    <div className="flex flex-wrap gap-5">
      <CardAurora
        icon={<Lightning size={22} />}
        label="Automação"
        title="Agentes IA no WhatsApp"
        description="Atendimento 24h sem parar, treinado com o seu negócio."
        blob="sweep"
        rotation="default"
        className="w-[300px] h-[260px]"
      />
      <CardAurora
        icon={<Globe size={22} />}
        label="Domínios"
        title="Registro e gestão"
        description="Todos os TLDs com DNS gerenciado na Umbler."
        blob="sweep"
        rotation="diagonal"
        className="w-[300px] h-[260px]"
      />
      <CardAurora
        icon={<Sparkle size={22} />}
        label="Animado"
        title="Aurora contínuo"
        description="SVG girando 360° com blur — efeito aurora perpétuo."
        blob="sweep"
        rotation="spin"
        className="w-[300px] h-[260px]"
      />
    </div>
  );
}

/* ── Blob prism ───────────────────────────────────────────────── */
export function CardAuroraPrismDemo() {
  return (
    <div className="flex flex-wrap gap-5">
      <CardAurora
        icon={<MapPin size={22} />}
        label="Hospedagem"
        title="Infraestrutura global"
        description="Servidores no Brasil e no mundo para sua aplicação voar."
        blob="prism"
        rotation="default"
        className="w-[300px] h-[260px]"
      />
      <CardAurora
        icon={<ShieldCheck size={22} />}
        label="Segurança"
        title="SSL e DMARC inclusos"
        description="Proteção completa para seu domínio e reputação de envio."
        blob="prism"
        rotation="spin"
        className="w-[300px] h-[260px]"
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
        label="Plataforma"
        title="Tudo que sua empresa precisa para crescer online"
        description="Hospedagem, email, domínios e agentes IA em um só lugar."
        blob="sweep"
        rotation="default"
        style={{ gridColumn: 'span 2' }}
      />

      {/* tall — col 3, rows 1-2 */}
      <CardAurora
        icon={<ShieldCheck size={22} />}
        label="Segurança"
        title="SSL e DMARC inclusos"
        description="Proteção completa para seu domínio e reputação de envio."
        blob="prism"
        rotation="default"
        style={{ gridRow: 'span 2' }}
      />

      {/* col 1, row 2 */}
      <CardAurora
        icon={<Lightning size={22} />}
        label="Automação"
        title="Agentes IA 24h"
        description="Treinado com o seu negócio."
        blob="sweep"
        rotation="diagonal"
      />

      {/* col 2, row 2 */}
      <CardAurora
        icon={<Envelope size={22} />}
        label="Email"
        title="Entrega garantida"
        description="Alta reputação de envio."
        blob="sweep"
        rotation="spin"
      />
    </div>
  );
}
