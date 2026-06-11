import type { ReactNode } from 'react';

/**
 * VariantGrid + VariantCard: galeria visual de variantes para páginas de componente.
 *
 * Princípio: cada variante respira em seu próprio card, com label discreta acima
 * do exemplo. Ao contrário do <ComponentPreview> (que enfileira N exemplos numa
 * caixa só), aqui cada exemplo tem espaço próprio — o olho compara melhor.
 *
 * Densidade: usar `columns` para controlar quantos por linha.
 *   - 2 → exemplos grandes (composições, CTAs em contexto)
 *   - 3 → padrão (variantes principais, sizes)
 *   - 4 → variantes pequenas (badges, kbds, ícones)
 *
 * Background:
 *   - default → bg-surface-subtle (padrão)
 *   - dark → bg-neutral-900 (para componentes que vivem em dark — heros, CTAs)
 *   - grid → fundo com grid sutil (para mostrar alinhamento/centralização)
 */

interface VariantGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function VariantGrid({ children, columns = 3 }: VariantGridProps) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`not-prose my-8 grid grid-cols-1 gap-4 ${colClass}`}>
      {children}
    </div>
  );
}

interface VariantCardProps {
  children: ReactNode;
  label: string;
  /** Descrição opcional — uma linha curta sobre quando usar. */
  hint?: string;
  /** Fundo do exemplo. `dark` é útil pra CTAs / heros. */
  tone?: 'default' | 'dark' | 'grid';
  /** Altura mínima do canvas — ajuste se a variante precisa de mais espaço (ex: composições). */
  minHeight?: number;
}

export function VariantCard({
  children,
  label,
  hint,
  tone = 'default',
  minHeight = 120,
}: VariantCardProps) {
  // `dark` junto do fundo escuro: os tokens semânticos dos filhos
  // (text-foreground etc.) resolvem pros valores dark mesmo com a doc em light.
  const toneClass =
    tone === 'dark'
      ? 'dark bg-[var(--color-neutral-950)]'
      : tone === 'grid'
      ? 'bg-surface bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:16px_16px]'
      : 'bg-surface-subtle';

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Header: label + hint opcional */}
      <div className="border-b border-border bg-surface px-4 py-2.5">
        <p className="text-caption font-semibold uppercase tracking-wider text-foreground-muted">
          {label}
        </p>
        {hint ? (
          <p className="mt-0.5 text-caption text-foreground-subtle">{hint}</p>
        ) : null}
      </div>
      {/* Canvas: o exemplo */}
      <div
        className={`flex items-center justify-center p-8 ${toneClass}`}
        style={{ minHeight }}
      >
        {children}
      </div>
    </div>
  );
}
