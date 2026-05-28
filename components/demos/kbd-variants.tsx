import { Kbd, KbdSequence } from '@/components/ui/kbd';

export function KbdSizes() {
  return (
    <div className="flex items-end gap-4">
      <Kbd size="sm">Esc</Kbd>
      <Kbd size="md">Esc</Kbd>
      <Kbd size="lg">Esc</Kbd>
    </div>
  );
}

export function KbdSingleKeys() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>↵</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
    </div>
  );
}

export function KbdSequences() {
  return (
    <div className="flex flex-col gap-3 text-body-sm text-foreground-muted">
      <div className="flex items-center gap-3">
        <span className="w-40">Abrir busca</span>
        <KbdSequence keys={['⌘', 'K']} />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-40">Salvar</span>
        <KbdSequence keys={['Ctrl', 'S']} separator="+" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-40">Paleta de comandos</span>
        <KbdSequence keys={['Ctrl', 'Shift', 'P']} separator="+" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-40">Atalho composto</span>
        <KbdSequence keys={['G', 'I']} />
      </div>
    </div>
  );
}
