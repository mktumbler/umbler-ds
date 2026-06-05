import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

/**
 * FoundationsOverview — preview compacto dos 6 foundations na home da doc.
 * Cada card é um link para a página completa de cada token.
 */

interface CardProps {
  href: string;
  title: string;
  description: string;
  preview: React.ReactNode;
}

function FoundationCard({ href, title, description, preview }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-surface p-4 no-underline transition-colors duration-[var(--duration-fast)] hover:border-border-strong"
    >
      <div className="flex h-16 items-center justify-center rounded-md bg-surface-subtle p-3">
        {preview}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-body font-semibold text-foreground">{title}</h3>
          <p className="text-caption text-foreground-muted mt-0.5">{description}</p>
        </div>
        <ArrowRight
          size={16}
          weight="bold"
          className="mt-1 shrink-0 text-foreground-subtle transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>
    </Link>
  );
}

export function FoundationsOverview() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <FoundationCard
        href="/docs/foundations/colors"
        title="Colors"
        description="Brand, neutrals, status, semânticos"
        preview={
          <div className="flex gap-1.5">
            {/* audit-ignore: badge-hand-roll — swatches de cor, não badges */}
            <span className="h-9 w-9 rounded-md bg-brand-300" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-md bg-brand-500" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-md bg-brand-700" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-md bg-success-500" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-md bg-warning-500" />
          </div>
        }
      />

      <FoundationCard
        href="/docs/foundations/typography"
        title="Typography"
        description="P22 Mackinac + Inter, 10 níveis"
        preview={
          <div className="flex items-baseline gap-2">
            <span className="text-h2 font-heading leading-none">Aa</span>
            <span className="text-body text-foreground-muted leading-none">Aa</span>
            <span className="text-caption text-foreground-subtle leading-none">Aa</span>
          </div>
        }
      />

      <FoundationCard
        href="/docs/foundations/spacing"
        title="Spacing"
        description="Base 4px, 16 steps + rhythm 3-níveis"
        preview={
          <div className="flex h-full w-full flex-col justify-center gap-1.5">
            <span className="h-1.5 w-1/4 rounded-sm bg-brand-500/40" />
            <span className="h-1.5 w-1/2 rounded-sm bg-brand-500/60" />
            <span className="h-1.5 w-3/4 rounded-sm bg-brand-500/80" />
          </div>
        }
      />

      <FoundationCard
        href="/docs/foundations/radius"
        title="Radius"
        description="sm, md, lg, xl, 2xl, 3xl, full"
        preview={
          <div className="flex items-center gap-2">
            {/* audit-ignore: badge-hand-roll — swatches de radius, não badges */}
            <span className="h-9 w-9 rounded-sm border border-brand-500/40 bg-brand-500/15" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-md border border-brand-500/40 bg-brand-500/15" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-lg border border-brand-500/40 bg-brand-500/15" />
            {/* audit-ignore: badge-hand-roll */}
            <span className="h-9 w-9 rounded-full border border-brand-500/40 bg-brand-500/15" />
          </div>
        }
      />

      <FoundationCard
        href="/docs/foundations/shadows"
        title="Shadows"
        description="xs → xl + glow, adaptados ao tema"
        preview={
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-md bg-surface shadow-sm" />
            <span className="h-9 w-9 rounded-md bg-surface shadow-md" />
            <span className="h-9 w-9 rounded-md bg-surface shadow-lg" />
          </div>
        }
      />

      <FoundationCard
        href="/docs/foundations/motion"
        title="Motion"
        description="Durations + easings tokenizados"
        preview={
          <div className="flex w-full items-center gap-2">
            <span className="text-caption font-mono text-foreground-muted">fast</span>
            <span className="h-px flex-1 bg-brand-500/40" />
            <span className="text-caption font-mono text-foreground-muted">normal</span>
            <span className="h-px flex-1 bg-brand-500/60" />
            <span className="text-caption font-mono text-foreground-muted">slow</span>
          </div>
        }
      />
    </div>
  );
}
