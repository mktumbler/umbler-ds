/**
 * Template: Campanha / Feature Announcement
 * Email de marketing para anunciar novidades, promoções ou features.
 */

import { Heading, Img, Row, Column, Section, Text } from '@react-email/components';
import {
  EmailBadge,
  EmailButton,
  EmailDivider,
  EmailLayout,
  EmailText,
  t,
} from '../components/layout';

export interface CampaignEmailProps {
  firstName?: string;
  featureTitle?: string;
  featureDescription?: string;
  ctaUrl?: string;
  ctaLabel?: string;
}

export default function CampaignEmail({
  firstName = 'Rafael',
  featureTitle = 'Apresentando o Umbler Talk 2.0',
  featureDescription = 'Atendimento multicanal com IA nativa — WhatsApp, Instagram e site em um só lugar, com respostas automáticas que soam como humanas.',
  ctaUrl = 'https://umbler.com/talk',
  ctaLabel = 'Conhecer o Umbler Talk 2.0',
}: CampaignEmailProps) {
  return (
    <EmailLayout preview={`${featureTitle} — novidade para você, ${firstName}`}>
      {/* Eyebrow */}
      <Section style={{ marginBottom: '24px' }}>
        <EmailBadge color={t.brand}>Novidade</EmailBadge>
      </Section>

      {/* Hero visual — gradiente simulado com borda */}
      <Section
        style={{
          background:   `linear-gradient(135deg, #0d1f5c 0%, #030614 60%)`,
          borderRadius: '10px',
          border:       `1px solid ${t.brand}44`,
          padding:      '40px 32px',
          marginBottom: '32px',
          textAlign:    'center',
        }}
      >
        <Text
          style={{
            fontFamily:  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:    '48px',
            margin:      '0 0 8px',
            lineHeight:  '1',
          }}
        >
          ✦
        </Text>
        <Heading
          as="h1"
          style={{
            fontFamily:  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:    '26px',
            fontWeight:  700,
            lineHeight:  '34px',
            color:       t.white,
            margin:      '0 0 12px',
          }}
        >
          {featureTitle}
        </Heading>
        <Text
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize:   '15px',
            lineHeight: '24px',
            color:      t.fgMuted,
            margin:     0,
          }}
        >
          {featureDescription}
        </Text>
      </Section>

      <EmailText>
        Olá, {firstName}! Temos uma novidade que vai mudar a forma como você se
        relaciona com seus clientes.
      </EmailText>

      {/* CTA principal */}
      <Section style={{ margin: '24px 0 32px' }}>
        <EmailButton href={ctaUrl}>{ctaLabel}</EmailButton>
      </Section>

      <EmailDivider />

      {/* 3 benefícios */}
      <Heading
        as="h2"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize:   '16px',
          fontWeight: 600,
          color:      t.white,
          margin:     '0 0 20px',
        }}
      >
        Por que você vai amar
      </Heading>

      {[
        { icon: '⚡', title: 'Respostas em segundos', desc: 'IA treinada com o seu conteúdo responde automaticamente no WhatsApp e Instagram.' },
        { icon: '📊', title: 'Painel unificado', desc: 'Todos os canais em uma única tela — sem abrir 5 aplicativos diferentes.' },
        { icon: '🔒', title: 'LGPD em dia', desc: 'Dados dos seus clientes protegidos e armazenados em servidores no Brasil.' },
      ].map(({ icon, title, desc }) => (
        <Row key={title} style={{ marginBottom: '16px' }}>
          <Column style={{ width: '40px', verticalAlign: 'top' }}>
            <Text style={{ fontSize: '22px', margin: 0 }}>{icon}</Text>
          </Column>
          <Column style={{ verticalAlign: 'top' }}>
            <Text
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize:   '14px',
                fontWeight: 600,
                color:      t.white,
                margin:     '0 0 2px',
              }}
            >
              {title}
            </Text>
            <EmailText small muted style={{ margin: 0 }}>
              {desc}
            </EmailText>
          </Column>
        </Row>
      ))}

      <EmailDivider />

      <EmailText muted small>
        Você está recebendo este e-mail porque tem uma conta Umbler. Para não receber
        mais novidades,{' '}
        <a href="https://umbler.com/unsubscribe" style={{ color: t.fgMuted }}>
          cancele sua inscrição
        </a>
        .
      </EmailText>
    </EmailLayout>
  );
}
