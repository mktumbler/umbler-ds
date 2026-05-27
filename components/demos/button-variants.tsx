'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MagnifyingGlass, Gear } from '@phosphor-icons/react';

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}

export function ButtonIconsDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">
        <ArrowRight size={18} />
        Get Started
      </Button>
      <Button variant="primary">
        Get Started
        <ArrowRight size={18} />
      </Button>
      <Button variant="secondary">
        <MagnifyingGlass size={18} />
        Search
      </Button>
      <Button variant="secondary">
        Search
        <MagnifyingGlass size={18} />
      </Button>
      <Button variant="ghost" iconOnly aria-label="Configurações">
        <Gear size={20} />
      </Button>
    </div>
  );
}

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">Salvar</Button>
      <Button variant="primary" loading>Salvar</Button>
      <Button variant="primary" disabled>Salvar</Button>
      <Button variant="secondary">Cancelar</Button>
      <Button variant="secondary" disabled>Cancelar</Button>
      <Button variant="danger">Excluir</Button>
      <Button variant="danger" disabled>Excluir</Button>
    </div>
  );
}
