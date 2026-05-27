import { Spinner } from '@/components/ui/spinner';

export function SpinnerSizesDemo() {
  const sizes = [
    { size: 'sm', label: 'sm — 14px' },
    { size: 'md', label: 'md — 16px' },
    { size: 'lg', label: 'lg — 20px' },
    { size: 'xl', label: 'xl — 24px' },
  ] as const;

  return (
    <div className="flex items-end gap-8">
      {sizes.map(({ size, label }) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <Spinner size={size} className="text-brand-500 dark:text-brand-300" />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpinnerColorsDemo() {
  const colors = [
    { className: 'text-brand-500 dark:text-brand-300', label: 'brand' },
    { className: 'text-success-500', label: 'success-500' },
    { className: 'text-warning-500', label: 'warning-500' },
    { className: 'text-error-500', label: 'error-500' },
    { className: 'text-neutral-400', label: 'neutral-400' },
  ];

  return (
    <div className="flex items-end gap-8">
      {colors.map(({ className, label }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <Spinner size="lg" className={className} />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}
