/**
 * Template: Confirmação de e-mail
 * Transacional de onboarding — verificação de endereço com código + link.
 */

import { Heading, Section, Text } from '@react-email/components';
import {
  EmailBadge,
  EmailButton,
  EmailDivider,
  EmailLayout,
  EmailText,
  t,
} from '../components/layout';

export interface ConfirmationEmailProps {
  firstName?: string;
  confirmUrl?: string;
  code?: string;
  expiresIn?: string;
}

export default function ConfirmationEmail({
  firstName = 'Rafael',
  confirmUrl = 'https://app.umbler.com/confirm?token=exemplo',
  code = '482 916',
  expiresIn = '24 horas',
}: ConfirmationEmailProps) {
  return (
    <EmailLayout preview={`Confirme seu e-mail para ativar sua conta Umbler — código ${code}`}>
      {/* Eyebrow */}
      <Section style={{ marginBottom: '24px' }}>
        <EmailBadge color={t.success}>Quase lá</EmailBadge>
      </Section>

      {/* Título */}
      <Heading
        as="h1"
        style={{
          fontFamily: t.fontStack,
          fontSize:   '24px',
          fontWeight: 600,
          lineHeight: '32px',
          color:      t.white,
          margin:     '0 0 12px',
        }}
      >
        Confirme seu e-mail
      </Heading>

      <EmailText>
        Olá, {firstName}. Falta um passo para ativar sua conta: confirme que este endereço
        é seu. Clique no botão ou use o código abaixo.
      </EmailText>

      {/* CTA */}
      <Section style={{ margin: '0 0 24px' }}>
        <EmailButton href={confirmUrl}>Confirmar e-mail</EmailButton>
      </Section>

      {/* Código alternativo */}
      <Section
        style={{
          backgroundColor: t.surfaceRaised,
          border:          `1px solid ${t.border}`,
          borderRadius:    '10px',
          padding:         '20px',
          margin:          '0 0 24px',
          textAlign:       'center',
        }}
      >
        <Text
          style={{
            fontFamily:    t.fontStack,
            fontSize:      '12px',
            color:         t.fgMuted,
            margin:        '0 0 8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Ou digite este código
        </Text>
        <Text
          style={{
            fontFamily:    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
            fontSize:      '28px',
            fontWeight:    600,
            letterSpacing: '0.15em',
            color:         t.white,
            margin:        0,
          }}
        >
          {code}
        </Text>
      </Section>

      <EmailText muted small>
        O código expira em <strong style={{ color: t.fg }}>{expiresIn}</strong>.
      </EmailText>

      <EmailDivider />

      <EmailText muted small style={{ margin: 0 }}>
        Não criou uma conta na Umbler? Pode ignorar este e-mail com segurança — nada será
        ativado sem a confirmação.
      </EmailText>
    </EmailLayout>
  );
}
