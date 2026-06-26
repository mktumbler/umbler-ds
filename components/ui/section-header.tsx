import { cn } from '@/lib/utils';

/**
 * SectionHeader — cabeçalho canônico de seção (eyebrow + h2 + subtitle).
 *
 * Use sempre que estiver compondo uma seção de LP/marketing fora dos
 * blocks que já trazem o próprio header (FAQ, Hero). Garante a mesma
 * escala tipográfica das seções nativas (h2 = text-display, 56px).
 *
 * @example
 *   <SectionHeader
 *     eyebrow="Planos"
 *     headline="Pague por mês ou ano"
 *     sub="Cancele a qualquer momento, sem precisar dar explicações."
 *   />
 *   <PricingTable plans={...} />
 */

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: string;
  headline: React.ReactNode;
  sub?: React.ReactNode;
  /** Alinhamento horizontal do bloco. Default 'center'. */
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  headline,
  sub,
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto mb-12 max-w-4xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
      {...props}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-heading text-display text-foreground text-balance">
        {headline}
      </h2>
      {sub && (
        <p
          className={cn(
            'mt-4 text-body-lg text-foreground-muted text-pretty',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
