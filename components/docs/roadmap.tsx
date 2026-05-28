/**
 * Roadmap — status visual das ondas do DS.
 * Manutenção: editar a const ROADMAP abaixo.
 */

type Status = 'done' | 'progress' | 'planned';

interface Wave {
  id:     string;
  title:  string;
  status: Status;
  items:  string[];
}

const ROADMAP: Wave[] = [
  {
    id: 'onda-1', title: 'Onda 1 — Foundations', status: 'done',
    items: ['Colors', 'Typography', 'Spacing', 'Radius', 'Shadows', 'Motion'],
  },
  {
    id: 'onda-2', title: 'Onda 2 — Primitivos', status: 'progress',
    items: ['Button ✓', 'Badge ✓', 'Tag ✓', 'Avatar ✓', 'Separator ✓', 'Kbd ✓', 'Spinner ✓', 'Button group', 'FAB'],
  },
  {
    id: 'onda-3', title: 'Onda 3 — Inputs', status: 'progress',
    items: ['Checkbox ✓', 'Radio ✓', 'Toggle ✓', 'Input ✓', 'Textarea ✓', 'Select ✓', 'Input group', 'Validation states', 'Combobox', 'DatePicker'],
  },
  {
    id: 'onda-4', title: 'Onda 4 — Containers & feedback', status: 'progress',
    items: ['Card ✓', 'CardAurora ✓', 'Alert ✓', 'Skeleton ✓', 'Accordion ✓', 'List group', 'Toast', 'Progress'],
  },
  {
    id: 'onda-5', title: 'Onda 5 — Overlays', status: 'progress',
    items: ['Tooltip ✓', 'Dialog ✓', 'Tabs ✓', 'Dropdown ✓', 'Popover ✓'],
  },
  {
    id: 'onda-6', title: 'Onda 6 — Navigation', status: 'progress',
    items: ['Breadcrumbs ✓', 'Pagination ✓', 'Navs'],
  },
  {
    id: 'onda-7', title: 'Onda 7 — Data display', status: 'planned',
    items: ['Table', 'Timeline', 'List'],
  },
  {
    id: 'onda-8', title: 'Onda 8 — Específicos Umbler/Talk', status: 'planned',
    items: ['ChatBubble', 'ConversationList', 'AgentAvatar', 'StatusPill'],
  },
  {
    id: 'onda-9', title: 'Onda 9 — Patterns', status: 'progress',
    items: ['Hero ✓', 'Feature Grid ✓', 'Feature Split ✓', 'Feature Bento ✓', 'Pricing', 'CTA Footer'],
  },
  {
    id: 'email', title: 'Email Marketing', status: 'progress',
    items: ['Welcome ✓', 'Campaign ✓', 'Notification ✓', 'Password reset', 'Digest semanal'],
  },
];

const statusBadge: Record<Status, { label: string; classes: string }> = {
  done:     { label: 'Concluído',    classes: 'bg-success-500/15 text-success-500' },
  progress: { label: 'Em progresso', classes: 'bg-brand-500/15 text-brand-400'    },
  planned:  { label: 'Planejado',    classes: 'bg-neutral-500/15 text-foreground-muted' },
};

export function Roadmap() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {ROADMAP.map((wave) => {
        const badge = statusBadge[wave.status];
        return (
          <div
            key={wave.id}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h4 className="text-body font-semibold text-foreground">
                {wave.title}
              </h4>
              <span className={`rounded px-2 py-0.5 text-caption font-semibold uppercase tracking-wide ${badge.classes}`}>
                {badge.label}
              </span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {wave.items.map((item) => {
                const done = item.endsWith(' ✓');
                return (
                  <li
                    key={item}
                    className={[
                      'rounded px-2 py-1 text-caption',
                      done
                        ? 'bg-success-500/10 text-success-500 line-through decoration-success-500/40'
                        : wave.status === 'done'
                          ? 'bg-success-500/10 text-success-500'
                          : 'bg-neutral-500/10 text-foreground-muted',
                    ].join(' ')}
                  >
                    {done ? item.slice(0, -2) : item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
