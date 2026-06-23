import { cn } from '@/lib/utils';

/**
 * LogoCloud — logos de empresas para social proof em landings.
 *
 * Duas variantes:
 *   - `grid` (default): grade estática, grayscale + hover colorido
 *   - `marquee`: rolagem horizontal infinita com fade nas bordas,
 *     pausa no hover. CSS puro (keyframes em tokens.css) — sem
 *     dependência de motion/JS.
 *
 * Os arquivos vivem em /public (SVG ideal — nítido e responde ao
 * grayscale CSS) e são carregados via <img>.
 *
 * @example
 *   <LogoCloud
 *     label="+60 mil empresas confiam na Umbler"
 *     logos={[
 *       { src: '/showcase/logos/unimed.svg', alt: 'Unimed' },
 *       { src: '/showcase/logos/triider.svg', alt: 'Triider' },
 *     ]}
 *   />
 *
 *   <LogoCloud variant="marquee" speed={30} logos={logos} />
 */

export interface LogoCloudItem {
  src: string;
  alt: string;
  /** Altura máxima em px. Default 32. Use 24-40 conforme a marca. */
  maxHeight?: number;
}

export interface LogoCloudProps {
  /** Texto curto acima dos logos (ex: "+60 mil empresas confiam"). */
  label?: string;
  /** Lista de logos a exibir. Idealmente 4-8 itens. */
  logos: LogoCloudItem[];
  /** Layout: grade estática ou rolagem infinita. Default 'grid'. */
  variant?: 'grid' | 'marquee';
  /** Só marquee: segundos por volta completa. Default 30. Menor = mais rápido. */
  speed?: number;
  /** Tema: 'light' (fundo claro) ou 'dark' (fundo escuro). Default 'dark'. */
  tone?: 'light' | 'dark';
  /** Classe extra no wrapper. */
  className?: string;
}

export function LogoCloud({
  label,
  logos,
  variant = 'grid',
  speed = 30,
  tone = 'dark',
  className,
}: LogoCloudProps) {
  const labelColor = tone === 'dark' ? 'text-white/40' : 'text-foreground-muted';
  const logoOpacity = tone === 'dark' ? 'opacity-50' : 'opacity-70';

  const logoImg = (logo: LogoCloudItem, keySuffix = '') => (
    <img
      key={`${logo.src}${keySuffix}`}
      src={logo.src}
      alt={logo.alt}
      style={{ maxHeight: logo.maxHeight ?? 32 }}
      className={cn(
        'w-auto max-w-[180px] object-contain grayscale transition-all duration-[var(--duration-normal)] hover:grayscale-0',
        logoOpacity,
        'hover:opacity-100',
      )}
    />
  );

  // 6 logos = grid-cols-6 em md+, 3 em sm, 2 em mobile.
  // 4 logos = grid-cols-4 em md+, 2 em mobile.
  // Default segue 6 como caso mais comum.
  const cols = logos.length === 4
    ? 'grid-cols-2 md:grid-cols-4'
    : logos.length === 8
      ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-8'
      : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6';

  return (
    <div className={cn('mx-auto max-w-[1200px]', className)}>
      {label && (
        <p
          className={cn(
            'mb-10 text-center text-caption uppercase tracking-[0.2em]',
            labelColor,
          )}
        >
          {label}
        </p>
      )}

      {variant === 'marquee' ? (
        <div
          className="group overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
        >
          <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
            {logos.map((l) => logoImg(l))}
            {/* segunda cópia fecha o loop sem corte; escondida de leitores de tela */}
            <div aria-hidden="true" className="flex items-center gap-16">
              {logos.map((l) => logoImg(l, '-dup'))}
            </div>
          </div>
        </div>
      ) : (
        <div className={cn('grid items-center justify-items-center gap-x-8 gap-y-10', cols)}>
          {logos.map((l) => logoImg(l))}
        </div>
      )}
    </div>
  );
}
