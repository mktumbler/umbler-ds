import { Spinner } from '@/components/ui/spinner';

export function SpinnerOrbitSizes() {
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
          <Spinner size={size} />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpinnerOrbitColors() {
  const variants = [
    {
      label: 'brand gradient (padrão)',
      colorA: '#8BBCF8',
      colorB: '#F8C4B8',
    },
    {
      label: 'brand sólido',
      colorA: '#1A5CFF',
      colorB: '#5B8EFF',
    },
    {
      label: 'neutro',
      colorA: '#6b7280',
      colorB: '#9ca3af',
    },
  ];

  return (
    <div className="flex items-center gap-10">
      {variants.map(({ label, colorA, colorB }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <Spinner size="xl" colorA={colorA} colorB={colorB} />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpinnerArc() {
  const sizes = [
    { size: 'sm', label: 'sm' },
    { size: 'md', label: 'md' },
    { size: 'lg', label: 'lg' },
    { size: 'xl', label: 'xl' },
  ] as const;

  return (
    <div className="flex items-end gap-8">
      {sizes.map(({ size, label }) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <Spinner size={size} variant="arc" className="text-brand-400" />
          <span className="text-[11px] text-neutral-400">{label}</span>
        </div>
      ))}
    </div>
  );
}
