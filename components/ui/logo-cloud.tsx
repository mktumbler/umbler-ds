import { cn } from '@/lib/utils';

/**
 * LogoCloud — grade de logos de empresas para social proof em landings.
 *
 * Recebe um array de logos (path para imagem em /public + alt text).
 * Aplica tratamento visual padrão: grayscale + opacity baixa + hover
 * que volta à cor original. Funciona em fundo claro ou dark.
 *
 * Os arquivos vivem em /public/showcase/logos/ (ou outra pasta que o
 * projeto definir) e são carregados via <img>. SVGs são ideais — ficam
 * nítidos em qualquer tamanho e respondem ao grayscale CSS.
 *
 * @example
 *   <LogoCloud
 *     label="+60 mil empresas confiam na Umbler"
 *     logos={[
 *       { src: '/showcase/logos/unimed.svg', alt: 'Unimed' },
 *       { src: '/showcase/logos/triider.svg', alt: 'Triider' },
 *     ]}
 *   />
 */

export interface LogoCloudItem {
  src: string;
  alt: string;
  /** Altura máxima em px. Default 32. Use 24-40 conforme a marca. */
  maxHeight?: number;
}

export interface LogoCloudProps {
  /** Texto curto acima da grade (ex: "+60 mil empresas confiam"). */
  label?: string;
  /** Lista de logos a exibir. Idealmente 4-8 itens. */
  logos: LogoCloudItem[];
  /** Tema: 'light' (fundo claro) ou 'dark' (fundo escuro). Default 'dark'. */
  tone?: 'light' | 'dark';
  /** Classe extra no wrapper. */
  className?: string;
}

export function LogoCloud({
  label,
  logos,
  tone = 'dark',
  className,
}: LogoCloudProps) {
  const labelColor = tone === 'dark' ? 'text-white/40' : 'text-foreground-muted';
  const logoOpacity = tone === 'dark' ? 'opacity-50' : 'opacity-70';

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
      <div className={cn('grid items-center justify-items-center gap-x-8 gap-y-10', cols)}>
        {logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            style={{ maxHeight: logo.maxHeight ?? 32 }}
            className={cn(
              'w-auto max-w-[140px] object-contain grayscale transition-all duration-[var(--duration-normal)] hover:grayscale-0',
              logoOpacity,
              'hover:opacity-100',
            )}
          />
        ))}
      </div>
    </div>
  );
}
