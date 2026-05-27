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

const initialTags = ['Next.js', 'TypeScript', 'Tailwind'];

export function TagInputDemo() {
  const [tags, setTags] = useState(initialTags);
  const [input, setInput] = useState('');

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
    }
    setInput('');
  };

  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <div className="flex flex-wrap gap-2 rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 min-h-[42px]">
        {tags.map((tag) => (
          <Tag key={tag} variant="brand" size="sm" onRemove={() => removeTag(tag)}>
            {tag}
          </Tag>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ',') {
              e.preventDefault();
              addTag();
            }
          }}
          placeholder="Adicionar tag…"
          className="flex-1 min-w-[100px] bg-transparent text-xs text-neutral-100 placeholder:text-neutral-500 outline-none"
        />
      </div>
      <p className="text-[11px] text-neutral-500">Pressione Enter ou vírgula para adicionar</p>
    </div>
  );
}
