import Link from 'next/link';

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
          Design System v2.0
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
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
          Diretrizes de marca, tokens, componentes e padrões — fonte única
          de verdade para construir produtos Umbler.
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
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
              borderRadius: '0.625rem',
              background: '#1a5cff',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 250ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            Abrir documentação →
          </Link>

          <Link
            href="/docs/foundations/colors"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
              borderRadius: '0.625rem',
              border: '1px solid color-mix(in oklch, currentColor 20%, transparent)',
              color: 'inherit',
              textDecoration: 'none',
              transition: 'all 250ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            Ver tokens
          </Link>
        </div>
      </div>
    </main>
  );
}
