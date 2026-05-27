import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background:
          'radial-gradient(ellipse at top, rgb(26 92 255 / 0.08) 0%, transparent 60%)',
      }}
    >
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'var(--text-display-xl)',
            fontWeight: 'var(--text-display-xl--font-weight)',
            letterSpacing: 'var(--text-display-xl--letter-spacing)',
            lineHeight: 'var(--text-display-xl--line-height)',
            marginBottom: '1.5rem',
          }}
        >
          Design System
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            opacity: 0.7,
            marginBottom: '2.5rem',
          }}
        >
          Tokens, componentes e padrões. Sempre à altura da ambição.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'no-underline')}
          >
            Abrir documentação <ArrowRight size={16} weight="bold" />
          </Link>

          <Link
            href="/docs/foundations/colors"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'no-underline')}
          >
            Ver tokens
          </Link>
        </div>
      </div>
    </main>
  );
}
