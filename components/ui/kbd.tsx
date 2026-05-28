import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const kbdVariants = cva(
  'inline-flex items-center justify-center font-mono font-medium ' +
    'border border-border bg-surface text-foreground-muted ' +
    'rounded-md shadow-sm select-none',
  {
    variants: {
      size: {
        sm: 'min-w-5 h-5 px-1 text-[10px]',
        md: 'min-w-6 h-6 px-1.5 text-[11px]',
        lg: 'min-w-7 h-7 px-2 text-xs',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

interface KbdProps extends VariantProps<typeof kbdVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Kbd({ children, size, className }: KbdProps) {
  return (
    <kbd className={cn(kbdVariants({ size }), className)}>{children}</kbd>
  );
}

interface KbdSequenceProps {
  /** Tecla(s) que compõem o atalho. Strings curtas ou ReactNodes. */
  keys: React.ReactNode[];
  /** Separador entre teclas. `' '` para visual de combinação (Cmd K), `'+'` para soma (Ctrl + Shift + P). */
  separator?: '+' | ' ' | React.ReactNode;
  size?: VariantProps<typeof kbdVariants>['size'];
  className?: string;
}

export function KbdSequence({ keys, separator = ' ', size = 'md', className }: KbdSequenceProps) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      {keys.map((key, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && (
            <span className="text-caption text-foreground-muted">
              {separator === ' ' ? null : separator}
            </span>
          )}
          <Kbd size={size}>{key}</Kbd>
        </span>
      ))}
    </span>
  );
}
