'use client';

/**
 * Toast — feedback transitório sobre sonner.
 *
 * `<Toaster />` é o container que vive na raiz da app (uma vez só).
 * Para disparar, importe `toast` daqui (re-exportado de sonner) ou os
 * helpers tipados em `toast.success` / `.error` / `.warning` / `.info`.
 *
 * Estilo casado com tokens do DS (cores, radius, sombras, motion).
 */

import * as React from 'react';
import { Toaster as Sonner, toast as sonnerToast, type ToasterProps } from 'sonner';
import {
  Info,
  CheckCircle,
  Warning,
  XCircle,
} from '@phosphor-icons/react/dist/ssr';

export type { ToasterProps };

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-right"
      duration={4000}
      closeButton
      richColors={false}
      icons={{
        info:    <Info size={18} weight="fill" />,
        success: <CheckCircle size={18} weight="fill" />,
        warning: <Warning size={18} weight="fill" />,
        error:   <XCircle size={18} weight="fill" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'group flex items-start gap-3 rounded-lg border border-border bg-surface-raised text-foreground shadow-xl px-4 py-3 text-body-sm',
          title:       'font-semibold leading-snug',
          description: 'text-foreground-muted leading-relaxed',
          actionButton:
            'rounded-md bg-brand-500 px-2.5 py-1 text-caption font-semibold text-white hover:bg-brand-600',
          cancelButton:
            'rounded-md px-2.5 py-1 text-caption font-semibold text-foreground-muted hover:text-foreground',
          closeButton:
            'border border-border bg-surface text-foreground-muted hover:text-foreground',
          icon: 'shrink-0 mt-0.5',
          success: '[--toast-icon-color:var(--color-success-500)]',
          error:   '[--toast-icon-color:var(--color-error-500)]',
          warning: '[--toast-icon-color:var(--color-warning-500)]',
          info:    '[--toast-icon-color:var(--color-brand-500)]',
        },
      }}
      {...props}
    />
  );
}

// Re-exporta o toast() — assim consumidor só importa daqui.
export const toast = sonnerToast;
