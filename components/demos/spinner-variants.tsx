import { Spinner } from '@/components/ui/spinner';

export function SpinnerSizes() {
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
          <Spinner size={size} className="text-brand-400" />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpinnerColors() {
  const variants = [
    { label: 'brand',    className: 'text-brand-400' },
    { label: 'success',  className: 'text-success-500' },
    { label: 'error',    className: 'text-error-500' },
    { label: 'muted',    className: 'text-foreground-muted' },
  ];

  return (
    <div className="flex items-center gap-10">
      {variants.map(({ label, className }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <Spinner size="xl" className={className} />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}
