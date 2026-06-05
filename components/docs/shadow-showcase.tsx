interface ShadowItem {
  name: string;
  token: string;
}

interface ShadowShowcaseProps {
  items: ShadowItem[];
}

export function ShadowShowcase({ items }: ShadowShowcaseProps) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-6 my-8 p-8 rounded-xl bg-surface-subtle">
      {items.map((i) => (
        <div key={i.name} className="flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 rounded-lg bg-surface"
            style={{ boxShadow: `var(${i.token})` }}
          />
          <div className="flex flex-col items-center text-sm">
            <span className="font-medium text-foreground">{i.name}</span>
            <code className="text-xs text-foreground-muted mt-0.5">{i.token}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
