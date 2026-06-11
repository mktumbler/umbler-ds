import type { ReactNode } from 'react';

interface ComponentPreviewProps {
  children: ReactNode;
  title?: string;
  background?: 'default' | 'grid' | 'dark';
}

export function ComponentPreview({
  children,
  title,
  background = 'default',
}: ComponentPreviewProps) {
  const bgClass =
    background === 'grid'
      ? "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
      : background === 'dark'
      ? 'dark bg-neutral-900'
      : '';

  return (
    <div className="not-prose my-6 rounded-lg border border-border overflow-hidden">
      {title ? (
        <div className="px-4 py-2 text-caption font-medium text-foreground-muted border-b border-border bg-surface-subtle">
          {title}
        </div>
      ) : null}
      <div
        className={`flex flex-wrap items-center justify-center gap-4 p-8 ${bgClass}`}
      >
        {children}
      </div>
    </div>
  );
}
