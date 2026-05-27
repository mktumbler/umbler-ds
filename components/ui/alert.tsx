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
  'relative flex gap-3 rounded-lg border px-4 py-3.5 text-sm',
  {
    variants: {
      variant: {
        info:    'bg-brand-500/10 border-brand-500/30 text-brand-200',
        success: 'bg-success-500/10 border-success-500/30 text-success-200',
        warning: 'bg-warning-500/10 border-warning-500/30 text-warning-200',
        error:   'bg-error-500/10 border-error-500/30 text-error-200',
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
            size={18}
            weight="fill"
            className="mt-0.5 shrink-0"
            aria-hidden
          />
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold leading-snug mb-0.5">{title}</p>
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
