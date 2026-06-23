import { cn } from '@/lib/utils';

const DEFAULT_AVATARS = [
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=11',
  'https://i.pravatar.cc/40?img=19',
  'https://i.pravatar.cc/40?img=27',
];

export interface SocialProofPillProps {
  count?: string;
  label?: string;
  avatars?: string[];
  className?: string;
}

export function SocialProofPill({
  count = '+15k',
  label = 'empresas usam hoje',
  avatars = DEFAULT_AVATARS,
  className,
}: SocialProofPillProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-2 py-1 backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex -space-x-1.5">
        {avatars.map((src, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            width={28}
            height={28}
            className="size-7 rounded-full border-2 border-[rgb(3,6,20)] object-cover"
          />
        ))}
      </div>
      <p className="pr-1.5 text-caption text-white/60">
        <span className="font-semibold text-white">{count}</span>{' '}
        {label}
      </p>
    </div>
  );
}
