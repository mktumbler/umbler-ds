/**
 * EmailLayout — wrapper base para todos os templates Umbler.
 *
 * Cores hardcoded por necessidade: clientes de email não suportam
 * CSS custom properties. Os valores correspondem aos tokens do DS:
 *   #030614 = neutral-950 (fundo escuro)
 *   #0a0f20 = neutral-900 (card/container)
 *   #1a2240 = border escuro
 *   #1a5cff = brand-500
 *   #c4cfe8 = foreground (texto principal)
 *   #8b9cc8 = foreground-muted
 */

import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { ReactNode } from 'react';

/* ── tokens ──────────────────────────────────────────────────────────────── */
export const t = {
  bg:           '#030614',
  surface:      '#0a0f20',
  surfaceRaised:'#111827',
  border:       '#1a2240',
  brand:        '#1a5cff',
  brandDark:    '#1448cc',
  fg:           '#c4cfe8',
  fgMuted:      '#8b9cc8',
  fgSubtle:     '#4a5a80',
  white:        '#ffffff',
  success:      '#22c55e',
  warning:      '#f59e0b',
  error:        '#ef4444',
} as const;

/* ── tipos ───────────────────────────────────────────────────────────────── */
export interface EmailLayoutProps {
  preview: string;
  children: ReactNode;
}

/* ── sub-componentes exportados ──────────────────────────────────────────── */

/** Linha divisória sutil */
export function EmailDivider() {
  return (
    <Hr
      style={{
        borderColor: t.border,
        borderTopWidth: 1,
        margin: '24px 0',
      }}
    />
  );
}

/** Texto de corpo padrão */
export function EmailText({
  children,
  muted = false,
  small = false,
  style = {},
}: {
  children: ReactNode;
  muted?: boolean;
  small?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Text
      style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize:   small ? '13px' : '15px',
        lineHeight: small ? '20px' : '24px',
        color:      muted ? t.fgMuted : t.fg,
        margin:     '0 0 16px',
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

/** Botão CTA principal */
export function EmailButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const isPrimary = variant === 'primary';
  return (
    <Link
      href={href}
      style={{
        display:         'inline-block',
        backgroundColor: isPrimary ? t.brand : 'transparent',
        color:           t.white,
        fontFamily:      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize:        '14px',
        fontWeight:      600,
        lineHeight:      '1',
        textDecoration:  'none',
        borderRadius:    '8px',
        padding:         isPrimary ? '12px 24px' : '11px 23px',
        border:          isPrimary ? 'none' : `1px solid ${t.border}`,
      }}
    >
      {children}
    </Link>
  );
}

/** Badge/label colorido (status) */
export function EmailBadge({
  children,
  color = t.brand,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        display:         'inline-block',
        backgroundColor: `${color}22`,
        color,
        fontFamily:      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize:        '11px',
        fontWeight:      600,
        letterSpacing:   '0.05em',
        textTransform:   'uppercase',
        borderRadius:    '4px',
        padding:         '3px 8px',
      }}
    >
      {children}
    </span>
  );
}

/* ── layout principal ────────────────────────────────────────────────────── */

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily={['Arial', 'sans-serif']}
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{preview}</Preview>

      <Body style={{ backgroundColor: t.bg, margin: 0, padding: 0 }}>
        {/* Container central */}
        <Container
          style={{
            maxWidth:   '600px',
            margin:     '0 auto',
            padding:    '0 16px',
          }}
        >
          {/* Header */}
          <Section style={{ padding: '32px 0 24px' }}>
            <Img
              src="https://umbler-ds.vercel.app/umbler-logo-dark.svg"
              alt="Umbler"
              width={100}
              height={24}
              style={{ display: 'block' }}
            />
          </Section>

          {/* Conteúdo */}
          <Section
            style={{
              backgroundColor: t.surface,
              borderRadius:    '12px',
              border:          `1px solid ${t.border}`,
              padding:         '40px',
              overflow:        'hidden',
            }}
          >
            {children}
          </Section>

          {/* Footer */}
          <Section style={{ padding: '24px 0 40px' }}>
            <Text
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize:   '12px',
                lineHeight: '18px',
                color:      t.fgSubtle,
                textAlign:  'center',
                margin:     '0 0 8px',
              }}
            >
              Umbler · Av. Presidente Kennedy, 861 — Blumenau, SC
            </Text>
            <Text
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize:   '12px',
                lineHeight: '18px',
                color:      t.fgSubtle,
                textAlign:  'center',
                margin:     0,
              }}
            >
              <Link href="https://umbler.com/unsubscribe" style={{ color: t.fgSubtle }}>
                Cancelar inscrição
              </Link>
              {' · '}
              <Link href="https://umbler.com/privacy" style={{ color: t.fgSubtle }}>
                Privacidade
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
