/**
 * Template: Notificação transacional
 * Confirmação de pagamento / fatura emitida.
 */

import { Column, Heading, Row, Section, Text } from '@react-email/components';
import {
  EmailBadge,
  EmailButton,
  EmailDivider,
  EmailLayout,
  EmailText,
  t,
} from '../components/layout';

export interface NotificationEmailProps {
  firstName?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  plan?: string;
  amount?: string;
  ctaUrl?: string;
}

export default function NotificationEmail({
  firstName = 'Rafael',
  invoiceNumber = 'FAT-2025-0042',
  invoiceDate = '28/05/2025',
  dueDate = '05/06/2025',
  plan = 'Umbler Pro · 10 sites',
  amount = 'R$ 119,90',
  ctaUrl = 'https://app.umbler.com/billing',
}: NotificationEmailProps) {
  return (
    <EmailLayout
      preview={`Fatura ${invoiceNumber} disponível · ${amount} com vencimento em ${dueDate}`}
    >
      {/* Eyebrow */}
      <Section style={{ marginBottom: '24px' }}>
        <EmailBadge color={t.brandLight}>Fatura emitida</EmailBadge>
      </Section>

      {/* Título */}
      <Heading
        as="h1"
        style={{
          fontFamily: t.fontStack,
          fontSize:   '24px',
          fontWeight: 700,
          lineHeight: '32px',
          color:      t.white,
          margin:     '0 0 12px',
        }}
      >
        Sua fatura está disponível
      </Heading>

      <EmailText>
        Olá, {firstName}. Uma nova fatura foi gerada para a sua conta Umbler. Confira os
        detalhes abaixo e efetue o pagamento até a data de vencimento.
      </EmailText>

      {/* Card da fatura */}
      <Section
        style={{
          backgroundColor: t.surfaceRaised,
          border:          `1px solid ${t.border}`,
          borderRadius:    '10px',
          padding:         '24px',
          margin:          '24px 0',
        }}
      >
        {/* Valor em destaque */}
        <Row style={{ marginBottom: '24px' }}>
          <Column>
            <Text
              style={{
                fontFamily: t.fontStack,
                fontSize:   '13px',
                color:      t.fgMuted,
                margin:     '0 0 4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontFamily: t.fontStack,
                fontSize:   '32px',
                fontWeight: 700,
                color:      t.white,
                margin:     0,
              }}
            >
              {amount}
            </Text>
          </Column>
          <Column style={{ textAlign: 'right', verticalAlign: 'bottom' }}>
            <EmailBadge color={t.warning}>Aguardando pagamento</EmailBadge>
          </Column>
        </Row>

        {/* Detalhes */}
        {[
          { label: 'Número da fatura', value: invoiceNumber },
          { label: 'Emissão', value: invoiceDate },
          { label: 'Vencimento', value: dueDate },
          { label: 'Plano', value: plan },
        ].map(({ label, value }, i) => (
          <Row key={label}>
            <Column
              style={{
                borderTop:  i === 0 ? `1px solid ${t.border}` : 'none',
                borderBottom: `1px solid ${t.border}`,
                padding:    '12px 0',
              }}
            >
              <Text
                style={{
                  fontFamily: t.fontStack,
                  fontSize:   '13px',
                  color:      t.fgMuted,
                  margin:     0,
                }}
              >
                {label}
              </Text>
            </Column>
            <Column
              style={{
                borderTop:    i === 0 ? `1px solid ${t.border}` : 'none',
                borderBottom: `1px solid ${t.border}`,
                padding:      '12px 0',
                textAlign:    'right',
              }}
            >
              <Text
                style={{
                  fontFamily: t.fontStack,
                  fontSize:   '14px',
                  fontWeight: 500,
                  color:      t.fg,
                  margin:     0,
                }}
              >
                {value}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      {/* CTA */}
      <Section style={{ margin: '0 0 32px' }}>
        <EmailButton href={ctaUrl}>Ver e pagar fatura</EmailButton>
      </Section>

      <EmailDivider />

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
          🔒 Segurança
        </Text>
        <EmailText small muted style={{ margin: 0 }}>
          A Umbler nunca pede sua senha ou dados de cartão por e-mail. Em caso de dúvida,
          acesse o painel diretamente em{' '}
          <a href="https://app.umbler.com" style={{ color: t.fgMuted }}>
            app.umbler.com
          </a>
          .
        </EmailText>
      </Section>

      <EmailText muted small>
        Dúvidas sobre a fatura? Acesse o{' '}
        <a href="https://umbler.com/suporte" style={{ color: t.brandLight }}>
          suporte
        </a>{' '}
        ou responda este e-mail.
      </EmailText>
    </EmailLayout>
  );
}
