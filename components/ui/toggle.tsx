'use client';

import { useState, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: 'sm' | 'md';
  className?: string;
}

// ── Size config ───────────────────────────────────────────────────────────────

const sizeConfig = {
  sm: {
    track: 'w-8 h-5',
    thumb: 'w-3.5 h-3.5',
    translateOff: 'translate-x-[3px]',
    translateOn:  'translate-x-[15px]',
  },
  md: {
    track: 'w-10 h-6',
    thumb: 'w-4 h-4',
    translateOff: 'translate-x-[4px]',
    translateOn:  'translate-x-[20px]',
  },
} as const;

// ── Toggle ────────────────────────────────────────────────────────────────────

export function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  description,
  size = 'md',
  className,
}: ToggleProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : internalChecked;
  const { track, thumb, translateOff, translateOn } = sizeConfig[size];

  function handleClick() {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  }

  const switchButton = (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'relative shrink-0 rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        track,
        isChecked ? 'bg-brand-500' : 'bg-control-track',
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled && 'cursor-pointer',
        !label && !description && className,
      )}
    >
      <span
        className={cn(
          'block rounded-full bg-white shadow-sm transition-transform duration-150',
          thumb,
          isChecked ? translateOn : translateOff,
          'absolute top-1/2 -translate-y-1/2',
        )}
      />
    </button>
  );

  if (!label && !description) return switchButton;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {switchButton}
      <div>
        {label && (
          <span className="block text-sm font-medium text-foreground-secondary leading-none">{label}</span>
        )}
        {description && (
          <span className={cn('block text-xs text-foreground-muted leading-snug', label && 'mt-0.5')}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
