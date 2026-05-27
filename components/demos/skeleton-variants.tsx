'use client';

import { useState } from 'react';
import { Skeleton, SkeletonText, SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

// ── Primitivos ────────────────────────────────────────────────────────────────

export function SkeletonPrimitivesDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      {/* Texto */}
      <SkeletonText lines={4} />

      {/* Avatar + texto */}
      <div className="flex items-center gap-3">
        <Skeleton circle height="h-10" width="w-10" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton height="h-3.5" width="w-2/5" />
          <Skeleton height="h-3" width="w-1/3" />
        </div>
      </div>

      {/* Imagem placeholder */}
      <Skeleton height="h-36" width="w-full" />

      {/* Badges */}
      <div className="flex gap-2">
        <Skeleton height="h-6" width="w-16" className="rounded-full" />
        <Skeleton height="h-6" width="w-20" className="rounded-full" />
        <Skeleton height="h-6" width="w-14" className="rounded-full" />
      </div>
    </div>
  );
}

// ── Card skeleton ─────────────────────────────────────────────────────────────

export function SkeletonCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

// ── Toggle loading/loaded ─────────────────────────────────────────────────────

export function SkeletonToggleDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => setLoading((v) => !v)}
      >
        {loading ? 'Simular carregado' : 'Simular loading'}
      </Button>

      {loading ? (
        <div className="rounded-lg border border-neutral-700/50 bg-neutral-800 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Skeleton circle height="h-10" width="w-10" />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton height="h-3.5" width="w-2/5" />
              <Skeleton height="h-3" width="w-1/4" />
            </div>
          </div>
          <SkeletonText lines={2} />
        </div>
      ) : (
        <div className="rounded-lg border border-neutral-600/50 bg-neutral-800 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-300 font-semibold text-sm">
              AC
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-100">Adriano Costa</p>
              <p className="text-xs text-neutral-400">adriano@umbler.com</p>
            </div>
          </div>
          <p className="text-sm text-neutral-300">Conta ativa · Plano Pro</p>
        </div>
      )}
    </div>
  );
}
