import { DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

interface Asset {
  label: string;
  desc: string;
  file: string;
  /** Classe de fundo da área de preview (lockups já trazem o próprio fundo). */
  tile: string;
}

function AssetCard({ label, desc, file, tile }: Asset) {
  const filename = file.split('/').pop() ?? 'asset.svg';
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className={cn('flex items-center justify-center p-8', tile)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={file} alt={label} className="h-20 w-auto max-w-full" />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-body-sm font-medium text-foreground">{label}</p>
          <p className="truncate text-caption text-foreground-muted">{desc}</p>
        </div>
        <a
          href={file}
          download={filename}
          className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'shrink-0')}
        >
          <DownloadSimple size={16} weight="bold" />
          SVG
        </a>
      </div>
    </div>
  );
}

const LOCKUPS: Asset[] = [
  {
    label: 'Fundo claro',
    desc: 'Logo escuro (#0A0F20) sobre branco',
    file: '/brand/umbler-lockup-light.svg',
    tile: 'bg-neutral-200',
  },
  {
    label: 'Fundo escuro',
    desc: 'Logo branco + "u" em gradiente',
    file: '/brand/umbler-lockup-dark.svg',
    tile: 'bg-neutral-200',
  },
  {
    label: 'Fundo marca',
    desc: 'Sobre azul da marca (#1A5CFF)',
    file: '/brand/umbler-lockup-brand.svg',
    tile: 'bg-neutral-200',
  },
];

export function BrandLockups() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LOCKUPS.map((a) => (
        <AssetCard key={a.file} {...a} />
      ))}
    </div>
  );
}

export function BrandSymbol() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <AssetCard
        label='Símbolo "u"'
        desc="Crescente em gradiente, para favicons e avatares"
        file="/brand/umbler-symbol.svg"
        tile="bg-neutral-950"
      />
    </div>
  );
}
