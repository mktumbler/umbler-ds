interface SpacingItem {
  name: string;
  px: number;
  token: string;
}

interface SpacingScaleProps {
  items: SpacingItem[];
}

export function SpacingScale({ items }: SpacingScaleProps) {
  const max = Math.max(...items.map((i) => i.px));
  return (
    <div className="not-prose flex flex-col gap-2 my-6">
      {items.map((i) => (
        <div
          key={i.name}
          className="grid grid-cols-[80px_1fr_120px] items-center gap-3 text-sm"
        >
          <span className="font-mono text-xs opacity-70">{i.px}px</span>
          <div className="h-3 rounded-sm bg-[#1a5cff]/30 dark:bg-[#1a5cff]/50">
            <div
              className="h-full rounded-sm bg-[#1a5cff]"
              style={{ width: `${(i.px / max) * 100}%` }}
            />
          </div>
          <code className="text-xs opacity-60">{i.token}</code>
        </div>
      ))}
    </div>
  );
}
