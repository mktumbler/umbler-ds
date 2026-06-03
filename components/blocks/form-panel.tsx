/**
 * FormPanel — card centralizado para formulários "criar / editar X".
 *
 * Estrutura padrão observada em Console legacy:
 *   ┌──────────────────────────────────────────────┐
 *   │  Título                                      │
 *   │  Descrição opcional…                         │
 *   ├──────────────────────────────────────────────┤
 *   │  <campos do form…>                           │
 *   ├──────────────────────────────────────────────┤
 *   │  [Submit full-width]                         │  ← footer com CTA
 *   └──────────────────────────────────────────────┘
 *
 * Aparece em:
 *   • Console → Novo filtro de email
 *   • Console → Novo grupo de email
 *   • Modal Subdomínio (variação enxuta)
 *
 * Usa Card do DS — sem hand-roll.
 */

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface FormPanelProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Slot do rodapé. Geralmente um <Button> de submit. Renderiza full-width por padrão. */
  footer?: React.ReactNode;
  /** Quando true, o footer ocupa 100% da largura (default). Quando false, fica à direita. */
  footerFullWidth?: boolean;
}

export function FormPanel({
  title,
  description,
  footer,
  footerFullWidth = true,
  className,
  children,
  ...props
}: FormPanelProps) {
  return (
    <Card className={cn('max-w-2xl mx-auto', className)}>
      <form {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-5">{children}</CardContent>
        {footer && (
          <CardFooter
            className={cn(
              footerFullWidth
                ? '[&>*]:w-full flex-col items-stretch'
                : 'justify-end',
            )}
          >
            {footer}
          </CardFooter>
        )}
      </form>
    </Card>
  );
}
