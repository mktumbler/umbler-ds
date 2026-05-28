import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  defaultVariants: { size: 'md' },
});

const sizeMap = { sm: 14, md: 16, lg: 20, xl: 24 };

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const px = sizeMap[size ?? 'md'];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className={cn('animate-spin', className)}
      aria-hidden
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
