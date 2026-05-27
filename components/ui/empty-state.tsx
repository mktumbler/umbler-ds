import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ── EmptyState ────────────────────────────────────────────────────────────────

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  /** 'page' = tela cheia centrada | 'card' = dentro de container (default) */
  size?: 'card' | 'page';
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, size = 'card', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center text-center',
        size === 'page' ? 'min-h-[60vh] px-6 py-20' : 'px-6 py-12',
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex items-center justify-center rounded-full bg-neutral-800 p-4 text-neutral-500 ring-1 ring-neutral-700/60">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-[1.125rem] font-medium text-neutral-100">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-neutral-400 leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  ),
);
EmptyState.displayName = 'EmptyState';
