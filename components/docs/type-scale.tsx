interface TypeRow {
  name: string;
  size: string;
  weight: number | string;
  sample: string;
  letterSpacing?: string;
  className?: string;
  font?: 'sans' | 'mono' | 'heading';
}

interface TypeScaleProps {
  rows: TypeRow[];
}

export function TypeScale({ rows }: TypeScaleProps) {
  return (
    <div className="not-prose flex flex-col divide-y divide-black/5 dark:divide-white/5 border-t border-b border-black/5 dark:border-white/5">
      {rows.map((r) => (
        <div
          key={r.name}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-6 items-baseline"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">{r.name}</span>
            <span className="text-xs font-mono opacity-60">
              {r.size} · {r.weight}
            </span>
          </div>
          <div
            style={{
              fontSize: r.size,
              fontWeight: r.weight,
              fontFamily:
                r.font === 'mono'
                  ? 'var(--font-mono-jetbrains), var(--font-mono)'
                  : r.font === 'heading'
                  ? 'var(--font-heading)'
                  : 'var(--font-sans-inter), var(--font-sans)',
              lineHeight: 1.1,
              letterSpacing: r.letterSpacing,
            }}
          >
            {r.sample}
          </div>
        </div>
      ))}
    </div>
  );
}
