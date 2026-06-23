import type { Metadata } from 'next';
import { LenisProvider } from './lenis-provider';

export const metadata: Metadata = {
  title: 'Umbler Showcase',
  description: 'Landing demonstrativa construída com o Umbler Design System.',
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-surface text-foreground">
      <LenisProvider>
        {children}
      </LenisProvider>
    </div>
  );
}
