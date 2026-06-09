'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Kbd } from '@/components/ui/kbd';
import {
  ArrowRight,
  MagnifyingGlass,
  Gear,
  Plus,
  Download,
  Trash,
  Check,
  X,
  Sparkle,
  PaperPlaneTilt,
  Bell,
  Heart,
} from '@phosphor-icons/react';

// ─── Variants (5) ─────────────────────────────────────────────

export function ButtonVariantPrimary()   { return <Button variant="primary">Salvar</Button>; }
export function ButtonVariantSecondary() { return <Button variant="secondary">Cancelar</Button>; }
export function ButtonVariantGhost()     { return <Button variant="ghost">Mais opções</Button>; }
export function ButtonVariantOutline()   { return <Button variant="outline">Compartilhar</Button>; }
export function ButtonVariantDanger()    { return <Button variant="danger">Excluir conta</Button>; }

// ─── Sizes (4) ────────────────────────────────────────────────

export function ButtonSizeSm() { return <Button size="sm">Pequeno</Button>; }
export function ButtonSizeMd() { return <Button size="md">Médio</Button>; }
export function ButtonSizeLg() { return <Button size="lg">Grande</Button>; }
export function ButtonSizeXl() { return <Button size="xl">Hero CTA</Button>; }

// ─── With Icons (5) ───────────────────────────────────────────

export function ButtonIconLeading() {
  return (
    <Button variant="primary">
      <Plus size={18} weight="bold" />
      Novo contato
    </Button>
  );
}
export function ButtonIconTrailing() {
  return (
    <Button variant="primary">
      Continuar
      <ArrowRight size={18} weight="bold" />
    </Button>
  );
}
export function ButtonIconBoth() {
  return (
    <Button variant="outline">
      <Download size={18} />
      Baixar relatório
      <ArrowRight size={16} weight="bold" />
    </Button>
  );
}
export function ButtonIconOnly() {
  return (
    <Button variant="ghost" iconOnly aria-label="Configurações">
      <Gear size={20} />
    </Button>
  );
}
export function ButtonIconOnlyVariants() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost"     iconOnly aria-label="Buscar"><MagnifyingGlass size={18} /></Button>
      <Button variant="secondary" iconOnly aria-label="Notificações"><Bell size={18} /></Button>
      <Button variant="primary"   iconOnly aria-label="Adicionar"><Plus size={18} weight="bold" /></Button>
      <Button variant="danger"    iconOnly aria-label="Excluir"><Trash size={18} /></Button>
    </div>
  );
}

// ─── States (5) ───────────────────────────────────────────────

export function ButtonStateDefault()  { return <Button variant="primary">Salvar alterações</Button>; }
export function ButtonStateHover()    {
  // Forçamos visual de hover via classes utilitárias — não dá pra fixar :hover
  // num exemplo estático. Em produção, o Button real aplica isso com :hover.
  return (
    /* audit-ignore: button-hand-roll: visual estático do estado :hover, não é botão real */
    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 text-body-sm font-medium text-white">
      Salvar alterações
    </button>
  );
}
export function ButtonStateFocus()    {
  return (
    /* audit-ignore: button-hand-roll: visual estático do estado :focus, não é botão real */
    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand-500 px-4 text-body-sm font-medium text-white outline-2 outline-offset-2 outline-brand-500">
      Salvar alterações
    </button>
  );
}
export function ButtonStateLoading()  { return <Button variant="primary" loading>Salvando</Button>; }
export function ButtonStateDisabled() { return <Button variant="primary" disabled>Salvar alterações</Button>; }

// ─── CTA premium (3) — landing patterns ───────────────────────

export function ButtonCtaPrimaryXl() {
  return (
    <Button size="xl" variant="primary">
      Testar 7 dias grátis
      <ArrowRight size={20} weight="bold" />
    </Button>
  );
}
export function ButtonCtaCluster() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xl" variant="primary">
        Começar agora
        <ArrowRight size={20} weight="bold" />
      </Button>
      <Button size="xl" variant="ghost">
        Ver demo
      </Button>
    </div>
  );
}
export function ButtonCtaWithBadge() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Badge variant="brand" shape="pill">
        <Sparkle size={12} weight="fill" /> Lançamento
      </Badge>
      <Button size="xl" variant="primary">
        Conhecer o Agente IA
        <ArrowRight size={20} weight="bold" />
      </Button>
    </div>
  );
}

// ─── Composições reais (4) ────────────────────────────────────

export function ButtonFormFooter() {
  return (
    <div className="flex w-full max-w-sm justify-end gap-2 rounded-lg border border-border bg-surface p-4">
      <Button variant="ghost">Cancelar</Button>
      <Button variant="primary">
        <Check size={16} weight="bold" /> Salvar
      </Button>
    </div>
  );
}

export function ButtonDangerConfirm() {
  return (
    <div className="flex w-full max-w-sm justify-end gap-2 rounded-lg border border-error-500/20 bg-error-500/5 p-4">
      <Button variant="ghost">Cancelar</Button>
      <Button variant="danger">
        <Trash size={16} /> Excluir definitivamente
      </Button>
    </div>
  );
}

export function ButtonToolbar() {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-surface p-1.5">
      <Button variant="ghost" size="sm" iconOnly aria-label="Buscar">
        <MagnifyingGlass size={16} />
      </Button>
      <Button variant="ghost" size="sm" iconOnly aria-label="Adicionar">
        <Plus size={16} weight="bold" />
      </Button>
      <Button variant="ghost" size="sm" iconOnly aria-label="Curtir">
        <Heart size={16} />
      </Button>
      <div className="mx-1 h-5 w-px bg-border" aria-hidden />
      <Button variant="ghost" size="sm" iconOnly aria-label="Notificações">
        <Bell size={16} />
      </Button>
      <Button variant="ghost" size="sm" iconOnly aria-label="Configurações">
        <Gear size={16} />
      </Button>
    </div>
  );
}

export function ButtonWithKbdHint() {
  return (
    <Button variant="primary">
      <PaperPlaneTilt size={16} weight="fill" />
      Enviar
      <Kbd>⌘</Kbd>
      <Kbd>↵</Kbd>
    </Button>
  );
}

// ─── Galerias antigas (mantidas pra retrocompat) ──────────────
// Páginas que ainda referenciam estes nomes continuam funcionando.

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
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
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}

export function ButtonIconsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary"><ArrowRight size={18} />Get Started</Button>
      <Button variant="primary">Get Started<ArrowRight size={18} /></Button>
      <Button variant="ghost" iconOnly aria-label="Configurações"><Gear size={20} /></Button>
    </div>
  );
}

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Salvar</Button>
      <Button variant="primary" loading>Salvar</Button>
      <Button variant="primary" disabled>Salvar</Button>
      <Button variant="danger">Excluir</Button>
      <Button variant="danger" disabled>Excluir</Button>
    </div>
  );
}
