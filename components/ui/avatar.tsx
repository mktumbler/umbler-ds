'use client';

import { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { User } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const avatarVariants = cva(
  'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-neutral-700 text-neutral-300 font-medium',
  {
    variants: {
      size: {
        xs: 'size-6 text-[10px]',
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
        xl: 'size-16 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const iconSizeMap: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
}

export function Avatar({ src, alt, name, size = 'md', className }: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const resolvedSize = size ?? 'md';

  return (
    <span className={cn(avatarVariants({ size }), className)}>
      {src && !imgError ? (
        <img
          src={src}
          alt={alt ?? name ?? 'avatar'}
          className="size-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : name ? (
        <span aria-label={name}>{getInitials(name)}</span>
      ) : (
        <User size={iconSizeMap[resolvedSize]} aria-hidden />
      )}
    </span>
  );
}

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarProps['size'];
  className?: string;
}

export function AvatarGroup({ avatars, max, size = 'md', className }: AvatarGroupProps) {
  const visible = max !== undefined ? avatars.slice(0, max) : avatars;
  const overflow = max !== undefined ? avatars.length - max : 0;

  return (
    <div className={cn('flex items-center', className)}>
      {visible.map((avatar, i) => (
        <Avatar
          key={i}
          {...avatar}
          size={size}
          className={cn('ring-2 ring-fd-background', i !== 0 && '-ml-2')}
        />
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            avatarVariants({ size }),
            'ring-2 ring-fd-background -ml-2 bg-neutral-600 text-neutral-200'
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}
