import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Tailwind-merge customizado para entender as classes de tamanho de texto
 * do DS (text-body-lg, text-body-sm, text-display-*, etc.) como font-size,
 * evitando que sejam tratadas como conflito de cor com text-white, text-brand-* etc.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display',
        'text-display-lg',
        'text-display-xl',
        'text-display-2xl',
        'text-h1',
        'text-h2',
        'text-h3',
        'text-h4',
        'text-body-lg',
        'text-body',
        'text-body-sm',
        'text-caption',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
