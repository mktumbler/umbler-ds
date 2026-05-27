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
        'relative shrink-0 rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
        track,
        isChecked ? 'bg-brand-500' : 'bg-neutral-700',
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
    <div className={cn('flex items-start gap-3', className)}>
      {switchButton}
      {/* pt-1.5 compensa a diferença entre o centro do switch (12 px) e
          o centro visual do cap-height do label (~7 px) ≈ 5 px de offset */}
      <div className="pt-1.5">
        {label && (
          <p className="text-sm font-medium text-neutral-200 leading-none">{label}</p>
        )}
        {description && (
          <p className={cn('text-xs text-neutral-500 leading-snug', label && 'mt-1')}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
