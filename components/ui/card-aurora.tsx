import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ── Blob SVG shapes ──────────────────────────────────────────
   Duas formas distintas, ambas usando fill/stroke de tokens.
   Aplicam blur + translate via style inline (transforms compostos).
───────────────────────────────────────────────────────────── */

/** Shape A — curvas amplas (baseada no SVG 1920×945 do prototype) */
function BlobSweep() {
  return (
    <svg
      viewBox="0 0 1920 945"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M637,3c410,318,836,466,1310,486"
        className="stroke-brand-800"
        strokeWidth="80"
        strokeLinecap="round"
      />
      <path
        d="M-7,105c230,316,1128,804,1918,592"
        className="stroke-brand-800"
        strokeWidth="240"
        strokeLinecap="round"
      />
      <path
        d="M39.3 396.8C8.5 374.4-18.5 353.1-40.7 333L39.3 396.8C322.1 601.6 933.9 887.4 1269.3 983L736.9 953L39.3 396.8Z"
        className="fill-brand-300"
      />
      <path
        d="M2127.8 120.9c31.8 1.9 60.6 2.4 85.6 1.2l-85.6-1.2c-291.7-17.5-839.3-157.2-1107.1-273.3l360.5 263.1 746.6 10.2Z"
        className="fill-brand-300"
      />
    </svg>
  );
}

/** Shape B — triângulos geométricos (baseada no SVG 427×427 do prototype) */
function BlobPrism() {
  return (
    <svg
      viewBox="0 0 427 427"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M190 -99L-88.7 5.2-78 155.4 190-99Z"       className="fill-brand-800" />
      <path d="M297.2 481.2L486.3 439.8 461 322.5 297.2 481.2Z" className="fill-brand-800" />
      <path d="M351.3 0C160.8 321.5 57.2 295-18 328.5-18 328.5-71.5 476.5 94 445 264.5 425.5 262.3 257.5 351.3 0Z" className="fill-brand-800" />
      <path d="M170.5 339.5L-69 430 27 469.5 170.5 339.5Z" className="fill-brand-200" />
    </svg>
  );
}

/* ── Tipos ───────────────────────────────────────────────────── */

export type AuroraBlobShape   = 'sweep' | 'prism';
export type AuroraBlobRotation = 'default' | 'diagonal' | 'spin';

export interface CardAuroraProps extends HTMLAttributes<HTMLDivElement> {
  /** Ícone exibido no topo do card (ex: <Globe size={22} />) */
  icon?: ReactNode;
  /** Micro-label em caps acima do título */
  label?: string;
  /** Título principal — usa font-heading */
  title: string;
  /** Descrição em corpo muted */
  description?: string;
  /**
   * Forma do blob de fundo.
   * - `sweep`  curvas amplas que "varrem" o card (padrão)
   * - `prism`  triângulos geométricos que preenchem o card
   */
  blob?: AuroraBlobShape;
  /**
   * Ângulo / animação do blob.
   * - `default`   leve rotação de -6°
   * - `diagonal`  rotação acentuada de -35°
   * - `spin`      rotação contínua de 360° (CSS animation)
   */
  rotation?: AuroraBlobRotation;
}

/* ── Configurações por modo ──────────────────────────────────── */

const blobStyleMap: Record<
  AuroraBlobShape,
  Record<AuroraBlobRotation, React.CSSProperties>
> = {
  sweep: {
    default:  { position: 'absolute', top: '50%', left: '50%', width: '1920px', height: '945px', opacity: 0.5, filter: 'blur(60px)',  transform: 'translate(-50%, -50%) rotate(-6deg)' },
    diagonal: { position: 'absolute', top: '50%', left: '50%', width: '1920px', height: '945px', opacity: 0.5, filter: 'blur(60px)',  transform: 'translate(-50%, -50%) rotate(-35deg)' },
    spin:     { position: 'absolute', top: '50%', left: '50%', width: '1920px', height: '945px', opacity: 0.7, filter: 'blur(72px)',  animation: 'aurora-spin 14s linear infinite' },
  },
  prism: {
    default:  { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, filter: 'blur(40px)' },
    diagonal: { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, filter: 'blur(40px)' },
    spin:     { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7, filter: 'blur(40px)', animation: 'aurora-spin 14s linear infinite' },
  },
};

/* ── Componente ──────────────────────────────────────────────── */

export function CardAurora({
  icon,
  label,
  title,
  description,
  blob = 'sweep',
  rotation = 'default',
  className,
  children,
  ...props
}: CardAuroraProps) {
  const blobStyle = blobStyleMap[blob][rotation];

  return (
    <div
      className={cn(
        /* base */
        'relative overflow-hidden rounded-xl cursor-default',
        /* fundo + borda inset */
        'bg-neutral-900 ring-1 ring-inset ring-brand-200/20',
        /* shadow sutil */
        'shadow-lg',
        className,
      )}
      {...props}
    >
      {/* Linha de glow no topo */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-10 h-px w-[170px] -translate-x-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgb(107 153 255 / 0.55) 50%, transparent 100%)',
        }}
      />

      {/* Blob de fundo */}
      <span aria-hidden className="pointer-events-none" style={blobStyle}>
        {blob === 'sweep' ? <BlobSweep /> : <BlobPrism />}
      </span>

      {/* Conteúdo — ícone no topo, texto no rodapé */}
      <div className="relative z-10 flex h-full flex-col p-9">
        {icon && (
          <div className="mb-auto w-fit rounded-xl bg-neutral-950 p-3 text-brand-200 shadow-[5px_5px_60px_var(--color-neutral-800)]">
            {icon}
          </div>
        )}

        {children ?? (
          <div className={cn(icon ? 'mt-6' : '')}>
            {label && (
              <p className="mb-1.5 text-[0.65rem] font-normal uppercase tracking-[0.1em] text-neutral-50/40">
                {label}
              </p>
            )}
            <h3 className="font-heading text-[1.6rem] font-medium leading-snug text-neutral-50">
              {title}
            </h3>
            {description && (
              <p className="mt-1.5 text-base leading-[1.55] text-neutral-50/50">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
