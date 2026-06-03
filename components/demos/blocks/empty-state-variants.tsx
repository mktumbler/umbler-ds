'use client';

import {
  EnvelopeSimple,
  Globe,
  ChatCircle,
  MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/blocks/empty-state';

/* ──────────────────────────────────────────────────────────
   Padrão — DNS sem email conectado
   ────────────────────────────────────────────────────────── */
export function EmptyStateDnsDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface">
      <EmptyState
        media={<EnvelopeSimple size={56} weight="duotone" />}
        title="Seus emails não estão conectados à Umbler"
        description="Para começar a receber mensagens neste domínio, conecte os DNSs da Umbler ou aponte os MX de terceiros."
        actions={
          <>
            <Button>Conectar DNS Umbler</Button>
            <Button variant="secondary">Usar DNS de terceiros</Button>
          </>
        }
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Sem ações — só explica o estado
   ────────────────────────────────────────────────────────── */
export function EmptyStateInfoOnlyDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface">
      <EmptyState
        media={<ChatCircle size={56} weight="duotone" />}
        title="Nenhuma conversa por aqui"
        description="Quando alguém entrar em contato pelo WhatsApp, a conversa aparece nessa lista."
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Pequeno — pra dentro de cards/tabelas vazias
   ────────────────────────────────────────────────────────── */
export function EmptyStateCompactDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface">
      <EmptyState
        size="sm"
        media={<MagnifyingGlass size={32} />}
        title="Nada encontrado"
        description='Tente outro termo de busca.'
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Grande — onboarding em página inteira
   ────────────────────────────────────────────────────────── */
export function EmptyStateLargeDemo() {
  return (
    <div className="rounded-lg border border-border bg-surface">
      <EmptyState
        size="lg"
        media={<Globe size={72} weight="duotone" />}
        title="Para usar sites e emails você vai precisar de um domínio"
        description="Informe um domínio que você já possui ou registre um aqui mesmo, a preço de custo."
        actions={
          <>
            <Button>Registrar domínio</Button>
            <Button variant="secondary">Já tenho um</Button>
          </>
        }
      />
    </div>
  );
}
