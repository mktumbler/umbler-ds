/**
 * Template: Boas-vindas
 * Enviado quando o usuário cria uma conta Umbler.
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

export interface WelcomeEmailProps {
  firstName?: string;
  ctaUrl?: string;
}

export default function WelcomeEmail({
  firstName = 'Rafael',
  ctaUrl = 'https://app.umbler.com/sites/new',
}: WelcomeEmailProps) {
  return (
    <EmailLayout preview={`Bem-vindo à Umbler, ${firstName}! Sua conta está pronta.`}>
      {/* Eyebrow */}
      <Section style={{ marginBottom: '24px' }}>
        <EmailBadge color={t.brand}>Conta criada</EmailBadge>
      </Section>

      {/* Título */}
      <Heading
        as="h1"
        style={{
          fontFamily:  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize:    '28px',
          fontWeight:  700,
          lineHeight:  '36px',
          color:       t.white,
          margin:      '0 0 16px',
        }}
      >
        Bem-vindo, {firstName}!
      </Heading>

      <EmailText>
        Estamos felizes em ter você aqui. Sua conta Umbler está pronta — agora é hora de
        criar seu primeiro site e colocá-lo no ar em minutos.
      </EmailText>

      {/* CTA */}
      <Section style={{ margin: '32px 0' }}>
        <EmailButton href={ctaUrl}>
          Criar meu primeiro site →
        </EmailButton>
      </Section>

      <EmailDivider />

      {/* Próximos passos */}
      <Heading
        as="h2"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize:   '16px',
          fontWeight: 600,
          color:      t.white,
          margin:     '0 0 16px',
        }}
      >
        O que você pode fazer agora
      </Heading>

      {/* Passo 1 */}
      <Section
        style={{
          backgroundColor: `${t.brand}11`,
          border:          `1px solid ${t.brand}33`,
          borderRadius:    '8px',
          padding:         '16px',
          marginBottom:    '12px',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:   '14px',
            fontWeight: 600,
            color:      t.white,
            margin:     '0 0 4px',
          }}
        >
          🌐 Registre seu domínio
        </Text>
        <EmailText small muted style={{ margin: 0 }}>
          Escolha um domínio .com.br ou internacional e vincule ao seu site em segundos.
        </EmailText>
      </Section>

      {/* Passo 2 */}
      <Section
        style={{
          backgroundColor: `${t.brand}11`,
          border:          `1px solid ${t.brand}33`,
          borderRadius:    '8px',
          padding:         '16px',
          marginBottom:    '12px',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:   '14px',
            fontWeight: 600,
            color:      t.white,
            margin:     '0 0 4px',
          }}
        >
          🚀 Publique seu site
        </Text>
        <EmailText small muted style={{ margin: 0 }}>
          Use nossos templates prontos ou faça upload do seu projeto. SSL gratuito incluso.
        </EmailText>
      </Section>

      {/* Passo 3 */}
      <Section
        style={{
          backgroundColor: `${t.brand}11`,
          border:          `1px solid ${t.brand}33`,
          borderRadius:    '8px',
          padding:         '16px',
          marginBottom:    '24px',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:   '14px',
            fontWeight: 600,
            color:      t.white,
            margin:     '0 0 4px',
          }}
        >
          📧 Configure seus e-mails
        </Text>
        <EmailText small muted style={{ margin: 0 }}>
          Crie endereços profissionais como contato@seudominio.com.br com um clique.
        </EmailText>
      </Section>

      <EmailText muted small>
        Qualquer dúvida, estamos no{' '}
        <a href="https://umbler.com/suporte" style={{ color: t.brand }}>
          suporte
        </a>{' '}
        ou no chat do painel. Bom trabalho!
      </EmailText>
    </EmailLayout>
  );
}
