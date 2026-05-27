import { Separator } from '@/components/ui/separator';

export function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      {/* Horizontal */}
      <div className="space-y-3">
        <p className="text-sm text-neutral-300">Conteúdo acima</p>
        <Separator />
        <p className="text-sm text-neutral-300">Conteúdo abaixo</p>
      </div>

      {/* Com label */}
      <Separator label="ou continue com" />

      {/* Vertical */}
      <div className="flex items-center gap-4 h-8">
        <span className="text-sm text-neutral-300">Esquerda</span>
        <Separator orientation="vertical" />
        <span className="text-sm text-neutral-300">Direita</span>
      </div>
    </div>
  );
}
