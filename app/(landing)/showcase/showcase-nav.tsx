'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const NAV_LINKS = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#pricing' },
];

export function ShowcaseNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/8 bg-[rgb(3,6,20)]/90 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a href="/showcase" className="font-heading text-xl font-semibold text-white">
          umbler
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://a.umbler.com/talk"
          className={buttonVariants({ variant: 'primary', size: 'sm' })}
        >
          Testar grátis
          <ArrowRight size={14} weight="bold" />
        </a>
      </div>
    </header>
  );
}
