interface ShadowItem {
  name: string;
  token: string;
}

interface ShadowShowcaseProps {
  items: ShadowItem[];
}

export function ShadowShowcase({ items }: ShadowShowcaseProps) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-6 my-8 p-8 rounded-xl bg-neutral-100 dark:bg-neutral-900">
      {items.map((i) => (
        <div key={i.name} className="flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 rounded-lg bg-white dark:bg-neutral-800"
            style={{ boxShadow: `var(${i.token})` }}
          />
          <div className="flex flex-col items-center text-sm">
            <span className="font-medium text-neutral-800 dark:text-neutral-100">{i.name}</span>
            <code className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{i.token}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
