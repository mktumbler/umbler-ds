/**
 * Changelog — timeline de mudanças recentes do DS.
 * Lê de data/changelog.json (mantido manualmente, formato semelhante a Conventional Commits).
 */

import changelogData from '../../data/changelog.json';
import { Badge } from '@/components/ui/badge';

type EntryType = 'feat' | 'fix' | 'refactor' | 'chore' | 'docs';
type BadgeVariant = 'brand' | 'success' | 'warning' | 'error' | 'neutral';

interface ChangelogEntry {
  date: string;
  type: EntryType;
  scope: string;
  title: string;
  description: string;
}

const typeMeta: Record<EntryType, { label: string; variant: BadgeVariant }> = {
  feat:     { label: 'Novo',        variant: 'success' },
  fix:      { label: 'Correção',    variant: 'warning' },
  refactor: { label: 'Refatoração', variant: 'brand'   },
  chore:    { label: 'Manutenção',  variant: 'neutral' },
  docs:     { label: 'Docs',        variant: 'brand'   },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function Changelog({ limit }: { limit?: number }) {
  const entries = (changelogData as ChangelogEntry[]).slice(0, limit);

  return (
    <ol className="not-prose my-8 space-y-4 border-l border-border pl-5">
      {entries.map((e, i) => (
        <li key={i} className="relative">
          {/* Ponto na timeline */}
          <span
            aria-hidden
            className="absolute -left-[27px] top-2 h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-surface"
          />

          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge variant={typeMeta[e.type].variant} shape="tag">
                {typeMeta[e.type].label}
              </Badge>
              <span className="text-caption font-mono text-foreground-muted">
                {e.scope}
              </span>
              <span className="ml-auto text-caption text-foreground-subtle">
                {formatDate(e.date)}
              </span>
            </div>
            <h4 className="mb-1 text-body font-semibold text-foreground">
              {e.title}
            </h4>
            <p className="text-body-sm text-foreground-muted leading-relaxed">
              {e.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
