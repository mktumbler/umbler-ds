interface RadiusItem {
  name: string;
  value: string;
  token: string;
}

interface RadiusShowcaseProps {
  items: RadiusItem[];
}

export function RadiusShowcase({ items }: RadiusShowcaseProps) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 my-6">
      {items.map((i) => (
        <div key={i.name} className="flex flex-col items-center gap-2 text-sm">
          <div
            className="w-20 h-20 bg-brand-500/15 border border-brand-500/40"
            style={{ borderRadius: i.value }}
          />
          <div className="flex flex-col items-center">
            <span className="font-medium text-foreground">{i.name}</span>
            <code className="text-caption text-foreground-muted">{i.value}</code>
            <code className="text-caption text-foreground-subtle mt-0.5">{i.token}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
