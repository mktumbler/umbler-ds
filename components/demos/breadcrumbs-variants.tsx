'use client';

import { House } from '@phosphor-icons/react';
import {
  Breadcrumbs,
  BreadcrumbCurrent,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumbs';

export function BreadcrumbsBasic() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Início</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/docs/components">Componentes</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbCurrent>Breadcrumbs</BreadcrumbCurrent>
    </Breadcrumbs>
  );
}

export function BreadcrumbsCustomSeparator() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Início</BreadcrumbItem>
      <BreadcrumbSeparator>
        <span aria-hidden className="text-foreground-muted">/</span>
      </BreadcrumbSeparator>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbSeparator>
        <span aria-hidden className="text-foreground-muted">/</span>
      </BreadcrumbSeparator>
      <BreadcrumbCurrent>Foundations</BreadcrumbCurrent>
    </Breadcrumbs>
  );
}

export function BreadcrumbsWithIcon() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/" aria-label="Início">
        <House size={14} weight="fill" />
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/docs/components">Componentes</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbCurrent>Button</BreadcrumbCurrent>
    </Breadcrumbs>
  );
}
