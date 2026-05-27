'use client';

import { Avatar, AvatarGroup } from '@/components/ui/avatar';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export function AvatarSizesDemo() {
  return (
    <div className="flex items-end gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <Avatar size={size} name="Ana Lima" />
          <span className="text-[11px] text-neutral-400">{size}</span>
        </div>
      ))}
    </div>
  );
}

export function AvatarFallbacksDemo() {
  return (
    <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-3">
        <Avatar
          size="md"
          src="https://i.pravatar.cc/150?img=3"
          alt="Foto de perfil"
          name="João Silva"
        />
        <span className="text-[11px] text-neutral-400">Com foto</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Avatar size="md" name="Ana Lima" />
        <span className="text-[11px] text-neutral-400">Iniciais</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Avatar size="md" />
        <span className="text-[11px] text-neutral-400">Ícone</span>
      </div>
    </div>
  );
}

const groupAvatars = [
  { name: 'Ana Lima', src: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Bruno Costa' },
  { name: 'Carla Dias', src: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Diego Melo' },
  { name: 'Eva Rocha', src: 'https://i.pravatar.cc/150?img=9' },
];

export function AvatarGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <AvatarGroup avatars={groupAvatars} max={3} size="md" />
      <span className="text-[11px] text-neutral-400">5 avatars, max=3</span>
    </div>
  );
}
