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
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            border: '1px solid rgb(26 92 255 / 0.3)',
            borderRadius: '9999px',
            color: 'rgb(107 153 255)',
            marginBottom: '2rem',
          }}
        >
          Design System · Infraestrutura visual
        </div>

        <h1
          style={{
            fontSize: 'var(--text-display-lg)',
            fontWeight: 'var(--text-display-lg--font-weight)',
            letterSpacing: 'var(--text-display-lg--letter-spacing)',
            lineHeight: 'var(--text-display-lg--line-height)',
            marginBottom: '1.5rem',
            background:
              'linear-gradient(180deg, currentColor 0%, color-mix(in oklch, currentColor 60%, transparent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Umbler Design System
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            opacity: 0.7,
            marginBottom: '2.5rem',
          }}
        >
          Tokens, componentes e padrões — a infraestrutura visual que equipa
          times a construir produtos à altura da ambição.
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
