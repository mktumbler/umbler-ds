import type { Metadata } from 'next';

/**
 * Layout do route group (landing). Forca modo dark fixo, sem cromo de doc.
 *
 * Tudo que entra em /app/(landing)/* herda esta configuração:
 *   • <html className="dark"> aplicado via wrapper
 *   • Sem ThemeToggle
 *   • Sem sidebar Fumadocs
 *   • Background dark direto no body
 *
 * Decisao de design: landings Umbler sao dark-premium por identidade
 * (brand guide § 6). Produto e doc continuam light-first com toggle.
 */

export const metadata: Metadata = {
  title: 'Umbler Showcase',
  description: 'Landing demonstrativa construída com o Umbler Design System.',
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-surface text-foreground">
      {children}
    </div>
  );
}
