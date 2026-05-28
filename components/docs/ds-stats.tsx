/**
 * DSStats — contadores do que existe no DS.
 * Lê do manifesto do registry (única fonte da verdade) em build time.
 */

import { items as registryItems } from '../../scripts/registry.manifest.mjs';

const componentCount = registryItems.filter(
  (i: { type?: string }) => !i.type || i.type === 'registry:ui',
).length;

const stats = [
  { value: componentCount, label: 'Componentes UI', hint: 'Botões, inputs, overlays e mais' },
  { value: 6,              label: 'Foundations',    hint: 'Cores, tipografia, espaçamento, radius, sombras, motion' },
  { value: 3,              label: 'Templates de email', hint: 'Boas-vindas, campanha, transacional' },
  { value: 3,              label: 'Patterns de site',  hint: 'Feature grid, split e bento' },
];

export function DSStats() {
  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-lg border border-border bg-surface p-4"
        >
          <div className="mb-3 text-display font-bold text-brand-500 leading-none tracking-tight">
            {s.value}
          </div>
          <div className="mb-1 text-body-sm font-semibold text-foreground">
            {s.label}
          </div>
          <div className="text-caption text-foreground-muted leading-snug">
            {s.hint}
          </div>
        </div>
      ))}
    </div>
  );
}
