import type { ReactNode } from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';

/**
 * Metodologia — seção colapsável para prosa explicativa nas páginas de
 * marketing/doc. O conteúdo fica no DOM (agentes de IA leem normalmente),
 * mas não ocupa a tela de quem só quer a regra prática.
 *
 * <details> nativo: zero JS, indexável, acessível.
 */
export function Metodologia({
  title = 'Por que assim (metodologia)',
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <details className="not-prose group my-6 rounded-lg border border-border bg-surface-subtle">
      <summary className="flex cursor-pointer select-none items-center gap-2 px-4 py-3 text-body-sm font-medium text-foreground-muted transition-colors duration-[var(--duration-fast)] hover:text-foreground [&::-webkit-details-marker]:hidden">
        <CaretRight
          size={14}
          weight="bold"
          className="shrink-0 transition-transform duration-[var(--duration-fast)] group-open:rotate-90"
        />
        {title}
      </summary>
      <div className="prose prose-sm max-w-none border-t border-border px-4 py-4 text-foreground-muted [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}
