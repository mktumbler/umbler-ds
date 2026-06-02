'use client';

/**
 * TagInput — campo de formulário que aceita múltiplas tags.
 *
 * Controlado: receba `value: string[]` e `onChange`. Dimensionado igual ao
 * `Input` (mesmos `size`/`state`), então casa lado-a-lado num formulário.
 * Cresce em altura quando as tags quebram pra próxima linha.
 *
 * Atalhos: Enter ou vírgula adiciona; Backspace (com o campo vazio) remove a última.
 */

import { forwardRef, useState, type KeyboardEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Tag } from '@/components/ui/tag';
import { cn } from '@/lib/utils';

const tagInputVariants = cva(
  [
    'flex flex-wrap items-center gap-2 w-full rounded-md bg-surface',
    'border transition-[border-color,box-shadow] duration-150',
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'min-h-8  px-2  py-1.5 text-sm',
        md: 'min-h-10 px-3  py-2   text-sm',
        lg: 'min-h-12 px-4  py-3   text-base',
      },
      state: {
        default: 'border-border-strong hover:border-brand-400 focus-within:border-brand-500 focus-within:ring-brand-500/30',
        error:   'border-error-500 focus-within:border-error-500 focus-within:ring-error-500/30',
        success: 'border-success-500 focus-within:border-success-500 focus-within:ring-success-500/30',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  },
);

export interface TagInputProps extends VariantProps<typeof tagInputVariants> {
  /** Tags atuais (controlado). */
  value: string[];
  /** Disparado quando a lista de tags muda. */
  onChange: (tags: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Cor das tags. Default: brand. */
  tagVariant?: 'brand' | 'success' | 'warning' | 'error' | 'neutral';
  /** Impede duplicatas. Default: true. */
  dedupe?: boolean;
  id?: string;
  className?: string;
}

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Adicionar…',
      disabled = false,
      size,
      state,
      tagVariant = 'brand',
      dedupe = true,
      id,
      className,
    },
    ref,
  ) => {
    const [draft, setDraft] = useState('');

    const addTag = () => {
      const next = draft.trim();
      if (!next) return;
      if (dedupe && value.includes(next)) {
        setDraft('');
        return;
      }
      onChange([...value, next]);
      setDraft('');
    };

    const removeTag = (tag: string) => onChange(value.filter((t) => t !== tag));

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        addTag();
      } else if (e.key === 'Backspace' && draft === '' && value.length > 0) {
        removeTag(value[value.length - 1]);
      }
    };

    return (
      <div
        className={cn(
          tagInputVariants({ size, state }),
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
      >
        {value.map((tag) => (
          <Tag
            key={tag}
            variant={tagVariant}
            size="sm"
            onRemove={disabled ? undefined : () => removeTag(tag)}
          >
            {tag}
          </Tag>
        ))}
        <input
          ref={ref}
          id={id}
          type="text"
          value={draft}
          disabled={disabled}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[80px] bg-transparent text-foreground placeholder:text-foreground-subtle outline-none disabled:cursor-not-allowed"
        />
      </div>
    );
  },
);
TagInput.displayName = 'TagInput';
