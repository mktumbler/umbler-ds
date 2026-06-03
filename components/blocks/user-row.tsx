/**
 * UserRow / ContactRow — linha de listagem de pessoa/contato.
 *
 * Composição: Avatar (DS) + bloco de texto (nome + meta + subtitle) +
 * Badges (DS) + slot de ação. Variante `selectable` adiciona Checkbox (DS)
 * à esquerda.
 *
 * Aparece em:
 *   • Talk → Conversas: avatar + nome + última mensagem + tags + horário
 *   • Talk → Contatos: avatar + nome + telefone + tags + ações
 *   • Talk → Nova conversa modal: avatar + nome + telefone + tag (clicável)
 *   • Talk → Notificações: avatar + texto + data + close
 *
 * Composição usa Avatar + Checkbox do DS — sem hand-roll.
 */

import * as React from 'react';
import { Avatar, type AvatarProps } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export interface UserRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Props passadas direto pro <Avatar/>. */
  avatar?: AvatarProps;
  /** Nome principal. */
  name: React.ReactNode;
  /** Texto secundário ao lado do nome (ex: "- há 15 minutos"). */
  meta?: React.ReactNode;
  /** Linha de texto abaixo do nome (ex: telefone, email, prévia de mensagem). */
  subtitle?: React.ReactNode;
  /** Badges/Tags exibidos à direita do texto, antes da ação. */
  tags?: React.ReactNode;
  /** Slot de ação à extrema direita (botão, ícone, dropdown trigger). */
  action?: React.ReactNode;
  /** Renderiza Checkbox à esquerda. */
  selectable?: boolean;
  /** Estado controlado do checkbox. Requer onSelectedChange. */
  selected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  /** Linha clicável (vira hover sutil + cursor pointer). */
  interactive?: boolean;
}

export function UserRow({
  avatar,
  name,
  meta,
  subtitle,
  tags,
  action,
  selectable,
  selected,
  onSelectedChange,
  interactive,
  className,
  onKeyDown,
  ...props
}: UserRowProps) {
  const handleKeyDown = interactive
    ? (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          (e.currentTarget as HTMLElement).click();
        }
        onKeyDown?.(e);
      }
    : onKeyDown;

  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className={cn(
        'flex items-center gap-3 px-4 py-3 transition-colors duration-[var(--duration-fast)]',
        interactive &&
          'cursor-pointer rounded-md hover:bg-control-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {selectable && (
        <Checkbox
          checked={selected}
          onChange={(e) => onSelectedChange?.(e.currentTarget.checked)}
        />
      )}

      {avatar && <Avatar {...avatar} />}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="truncate text-body-sm font-medium text-foreground">{name}</span>
          {meta && (
            <span className="shrink-0 text-caption text-foreground-muted">{meta}</span>
          )}
        </div>
        {subtitle && (
          <div className="truncate text-caption text-foreground-muted">{subtitle}</div>
        )}
      </div>

      {tags && <div className="flex shrink-0 items-center gap-1.5">{tags}</div>}

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
