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
 *   │  [Submit full-width]                         │  ← actions (CTA do formulário)
 *   └──────────────────────────────────────────────┘
 *
 * Aparece em:
 *   • Console → Novo filtro de email
 *   • Console → Novo grupo de email
 *   • Modal Subdomínio (variação enxuta)
 *
 * Usa Card do DS — sem hand-roll.
 *
 * Rhythm vertical: gap-5 (20px, escala "médio") — ver /docs/foundations/spacing.
 */

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface FormPanelProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Slot do rodapé (CTA do form). Geralmente um <Button> de submit. */
  actions?: React.ReactNode;
  /** Quando true, o conteúdo do slot actions ocupa 100% da largura (default). Quando false, alinha à direita. */
  actionsFullWidth?: boolean;
}

export function FormPanel({
  title,
  description,
  actions,
  actionsFullWidth = true,
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
        {actions && (
          <CardFooter
            className={cn(
              actionsFullWidth
                ? '[&>*]:w-full flex-col items-stretch'
                : 'justify-end',
            )}
          >
            {actions}
          </CardFooter>
        )}
      </form>
    </Card>
  );
}
