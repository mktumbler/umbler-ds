import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import {
  Info,
  CheckCircle,
  Warning,
  XCircle,
  X,
} from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

// ── Variants ──────────────────────────────────────────────────────────────────

const alertVariants = cva(
  'relative flex gap-3 rounded-lg border px-4 py-3.5 text-sm animate-alert-in',
  {
    variants: {
      variant: {
        info:    'bg-brand-50   border-brand-500/25   text-brand-700   dark:bg-brand-500/10   dark:border-brand-500/30   dark:text-brand-200',
        success: 'bg-success-50 border-success-500/25 text-success-600 dark:bg-success-500/10 dark:border-success-500/30 dark:text-success-300',
        warning: 'bg-warning-50 border-warning-500/25 text-warning-600 dark:bg-warning-500/10 dark:border-warning-500/30 dark:text-warning-300',
        error:   'bg-error-50   border-error-500/25   text-error-600   dark:bg-error-500/10   dark:border-error-500/30   dark:text-error-300',
      },
    },
    defaultVariants: { variant: 'info' },
  },
);

const iconMap = {
  info:    Info,
  success: CheckCircle,
  warning: Warning,
  error:   XCircle,
} as const;

// ── Alert ────────────────────────────────────────────────────────────────────

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: boolean;
  onClose?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, icon = true, onClose, children, ...props }, ref) => {
    const Icon = iconMap[variant ?? 'info'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon && (
          <Icon
            size={20}
            weight="fill"
            className="mt-0.5 shrink-0"
            aria-hidden
          />
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <span className="block font-semibold leading-snug mb-0.5">{title}</span>
          )}
          {children && (
            <div className="leading-relaxed opacity-85">{children}</div>
          )}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="shrink-0 mt-0.5 opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  },
);
Alert.displayName = 'Alert';
