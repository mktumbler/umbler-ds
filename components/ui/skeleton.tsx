import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Skeleton ──────────────────────────────────────────────────────────────────

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Altura em classes Tailwind, ex: "h-4", "h-12". Default: "h-4" */
  height?: string;
  /** Largura em classes Tailwind, ex: "w-32", "w-full". Default: "w-full" */
  width?: string;
  /** true = rounded-full (avatars, ícones). Default: false = rounded-md */
  circle?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, height = 'h-4', width = 'w-full', circle = false, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'animate-pulse bg-neutral-700/60',
        circle ? 'rounded-full' : 'rounded-md',
        height,
        width,
        className,
      )}
      {...props}
    />
  ),
);
Skeleton.displayName = 'Skeleton';

// ── SkeletonText — bloco de linhas de texto ───────────────────────────────────

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number;
  /** Última linha mais curta para simular texto real */
  lastLineShort?: boolean;
}

export function SkeletonText({
  lines = 3,
  lastLineShort = true,
  className,
  ...props
}: SkeletonTextProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)} aria-hidden="true" {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="h-3"
          width={lastLineShort && i === lines - 1 ? 'w-3/5' : 'w-full'}
        />
      ))}
    </div>
  );
}

// ── SkeletonCard — card de carregamento pré-montado ───────────────────────────

export function SkeletonCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-lg border border-neutral-700/50 bg-neutral-800 p-6 flex flex-col gap-4', className)}
      aria-hidden="true"
      {...props}
    >
      <div className="flex items-center gap-3">
        <Skeleton circle height="h-10" width="w-10" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton height="h-3.5" width="w-2/5" />
          <Skeleton height="h-3" width="w-1/4" />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-2 pt-1">
        <Skeleton height="h-8" width="w-24" />
        <Skeleton height="h-8" width="w-16" />
      </div>
    </div>
  );
}
