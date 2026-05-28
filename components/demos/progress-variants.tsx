'use client';

import { useEffect, useState } from 'react';
import { Progress, ProgressCircle } from '@/components/ui/progress';

export function ProgressLinear() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-caption text-foreground-muted">
          <span>Upload de mídia</span>
          <span className="tabular-nums">64%</span>
        </div>
        <Progress value={64} />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-caption text-foreground-muted">
          <span>Quota do plano</span>
          <span className="tabular-nums">92%</span>
        </div>
        <Progress value={92} tone="warning" />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-caption text-foreground-muted">
          <span>Verificação concluída</span>
          <span className="tabular-nums">100%</span>
        </div>
        <Progress value={100} tone="success" size="sm" />
      </div>
    </div>
  );
}

export function ProgressIndeterminate() {
  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <p className="text-caption text-foreground-muted">Sincronizando contatos…</p>
      <Progress />
    </div>
  );
}

export function ProgressAnimated() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(v => (v >= 100 ? 0 : v + 7));
    }, 350);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <div className="flex justify-between text-caption text-foreground-muted">
        <span>Processamento</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

export function ProgressCircleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={32} size="sm" />
        <span className="text-caption text-foreground-muted">sm — 32%</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={64} showLabel />
        <span className="text-caption text-foreground-muted">md — com label</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={88} size="lg" tone="success" showLabel />
        <span className="text-caption text-foreground-muted">lg — success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle size="lg" />
        <span className="text-caption text-foreground-muted">indeterminado</span>
      </div>
    </div>
  );
}
