/**
 * Template: Recuperação de senha
 * Transacional de segurança — link único com expiração.
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

export interface PasswordResetEmailProps {
  firstName?: string;
  resetUrl?: string;
  expiresIn?: string;
  requestIp?: string;
  requestDate?: string;
}

export default function PasswordResetEmail({
  firstName = 'Rafael',
  resetUrl = 'https://app.umbler.com/reset?token=exemplo',
  expiresIn = '1 hora',
  requestIp = '189.4.85.12 (Blumenau, SC)',
  requestDate = '10/06/2026 às 14:32',
}: PasswordResetEmailProps) {
  return (
    <EmailLayout preview={`Redefina sua senha Umbler — o link expira em ${expiresIn}`}>
      {/* Eyebrow */}
      <Section style={{ marginBottom: '24px' }}>
        <EmailBadge color={t.brandLight}>Segurança da conta</EmailBadge>
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
        Redefinir sua senha
      </Heading>

      <EmailText>
        Olá, {firstName}. Recebemos um pedido para redefinir a senha da sua conta Umbler.
        Se foi você, clique no botão abaixo para criar uma senha nova.
      </EmailText>

      {/* CTA */}
      <Section style={{ margin: '0 0 24px' }}>
        <EmailButton href={resetUrl}>Criar nova senha</EmailButton>
      </Section>

      <EmailText muted small>
        O link expira em <strong style={{ color: t.fg }}>{expiresIn}</strong> e só pode ser
        usado uma vez.
      </EmailText>

      <EmailDivider />

      {/* Detalhes do pedido */}
      <Section
        style={{
          backgroundColor: t.surfaceRaised,
          border:          `1px solid ${t.border}`,
          borderRadius:    '10px',
          padding:         '16px 20px',
          marginBottom:    '24px',
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
          Detalhes do pedido
        </Text>
        <EmailText small style={{ margin: '0 0 4px' }}>
          {requestDate}
        </EmailText>
        <EmailText small muted style={{ margin: 0 }}>
          IP: {requestIp}
        </EmailText>
      </Section>

      {/* Nota de segurança */}
      <Section
        style={{
          backgroundColor: `${t.warning}11`,
          border:          `1px solid ${t.warning}33`,
          borderRadius:    '8px',
          padding:         '16px',
          marginBottom:    '24px',
        }}
      >
        <Text
          style={{
            fontFamily: t.fontStack,
            fontSize:   '13px',
            color:      t.warning,
            fontWeight: 600,
            margin:     '0 0 4px',
          }}
        >
          🔒 Não foi você?
        </Text>
        <EmailText small muted style={{ margin: 0 }}>
          Ignore este e-mail — sua senha continua a mesma. Se os pedidos se repetirem,
          fale com o{' '}
          <a href="https://umbler.com/suporte" style={{ color: t.fgMuted }}>
            suporte
          </a>
          . A Umbler nunca pede sua senha por e-mail.
        </EmailText>
      </Section>

      <EmailText muted small style={{ margin: 0 }}>
        Se o botão não funcionar, copie e cole este link no navegador:{' '}
        <a href={resetUrl} style={{ color: t.brandLight, wordBreak: 'break-all' }}>
          {resetUrl}
        </a>
      </EmailText>
    </EmailLayout>
  );
}
