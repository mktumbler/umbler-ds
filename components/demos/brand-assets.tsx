import { DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

interface Asset {
  label: string;
  desc: string;
  file: string;
  /** Classe de fundo da área de preview. */
  tile: string;
  /** Classe de tamanho aplicada na imagem do preview. */
  imgClass?: string;
}

function AssetCard({ label, desc, file, tile, imgClass }: Asset) {
  const filename = file.split('/').pop() ?? 'asset.svg';
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className={cn('flex items-center justify-center p-8', tile)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={file} alt={label} className={cn('w-auto max-w-full', imgClass ?? 'h-12')} />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-body-sm font-medium text-foreground">{label}</p>
          <p className="truncate text-caption text-foreground-muted">{desc}</p>
        </div>
        <a
          href={file}
          download={filename}
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'shrink-0 no-underline',
          )}
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
    desc: 'Wordmark escuro (#0A0F20)',
    file: '/brand/umbler-wordmark-dark.svg',
    tile: 'bg-white',
    imgClass: 'h-12',
  },
  {
    label: 'Fundo escuro',
    desc: 'Wordmark branco + "u" em gradiente',
    file: '/brand/umbler-wordmark-light.svg',
    tile: 'bg-neutral-950',
    imgClass: 'h-12',
  },
  {
    label: 'Fundo marca',
    desc: 'Sobre azul Umbler (#1A5CFF)',
    file: '/brand/umbler-wordmark-light.svg',
    tile: 'bg-[#1A5CFF]',
    imgClass: 'h-12',
  },
];

const SYMBOLS: Asset[] = [
  {
    label: 'Fundo claro',
    desc: 'Símbolo escuro + crescente em gradiente',
    file: '/brand/umbler-symbol-dark.svg',
    tile: 'bg-white',
    imgClass: 'h-16',
  },
  {
    label: 'Fundo escuro',
    desc: 'Símbolo branco + crescente em gradiente',
    file: '/brand/umbler-symbol-light.svg',
    tile: 'bg-neutral-950',
    imgClass: 'h-16',
  },
  {
    label: 'Fundo marca',
    desc: 'Sobre azul Umbler (#1A5CFF)',
    file: '/brand/umbler-symbol-light.svg',
    tile: 'bg-[#1A5CFF]',
    imgClass: 'h-16',
  },
];

export function BrandLockups() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LOCKUPS.map((a, i) => (
        <AssetCard key={`${a.file}-${i}`} {...a} />
      ))}
    </div>
  );
}

export function BrandSymbol() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SYMBOLS.map((a, i) => (
        <AssetCard key={`${a.file}-${i}`} {...a} />
      ))}
    </div>
  );
}
