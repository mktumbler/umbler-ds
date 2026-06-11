'use client';

import { LogoCloud } from '@/components/blocks/logo-cloud';

/**
 * Demos do LogoCloud para a doc.
 * Os SVGs em /showcase/logos são wordmarks placeholder — troque pelos
 * logos reais dos clientes no projeto consumer.
 */

const LOGOS = [
  { src: '/showcase/logos/unimed.svg', alt: 'Unimed' },
  { src: '/showcase/logos/triider.svg', alt: 'Triider' },
  { src: '/showcase/logos/cora.svg', alt: 'Cora' },
  { src: '/showcase/logos/cna.svg', alt: 'CNA' },
  { src: '/showcase/logos/anima.svg', alt: 'Ânima' },
  { src: '/showcase/logos/linker.svg', alt: 'Linker' },
];

export function LogoCloudGridDemo() {
  return (
    <div className="dark w-full rounded-xl bg-neutral-950 px-6 py-12">
      <LogoCloud label="+60 mil empresas confiam na Umbler" logos={LOGOS} />
    </div>
  );
}

export function LogoCloudMarqueeDemo() {
  return (
    <div className="dark w-full rounded-xl bg-neutral-950 px-6 py-12">
      <LogoCloud
        variant="marquee"
        speed={25}
        label="+60 mil empresas confiam na Umbler"
        logos={LOGOS}
      />
    </div>
  );
}
