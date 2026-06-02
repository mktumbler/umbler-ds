'use client';

import { useState } from 'react';
import { Tag } from '@/components/ui/tag';

const allVariants = ['brand', 'success', 'warning', 'error', 'neutral'] as const;
const variantLabels: Record<string, string> = {
  brand: 'Brand',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  neutral: 'Neutral',
};

export function TagVariantsDemo() {
  const [visible, setVisible] = useState(new Set(allVariants as unknown as string[]));

  const remove = (v: string) =>
    setVisible((prev) => {
      const next = new Set(prev);
      next.delete(v);
      return next;
    });

  return (
    <div className="flex flex-wrap items-center gap-3 min-h-[32px]">
      {allVariants.filter((v) => visible.has(v)).map((variant) => (
        <Tag key={variant} variant={variant} onRemove={() => remove(variant)}>
          {variantLabels[variant]}
        </Tag>
      ))}
      {visible.size === 0 && (
        <button
          type="button"
          onClick={() => setVisible(new Set(allVariants as unknown as string[]))}
          className="text-xs text-neutral-400 hover:text-neutral-100 transition-colors"
        >
          Restaurar tags
        </button>
      )}
    </div>
  );
}
