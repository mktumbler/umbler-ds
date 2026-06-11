import { FeatureSplit } from '@/components/blocks/feature-split';
import { ChatCircle, Users, Lock } from '@phosphor-icons/react/dist/ssr';

/**
 * Mock visual padrão para os demos — caixa com gradiente sutil que dá ideia
 * do espaço sem competir com o texto. No consumer real, troque por screenshot
 * de produto, ilustração ou CardAurora.
 */
function MockVisual({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-brand-50 to-surface-subtle p-8 dark:from-brand-500/10 dark:to-neutral-900">
      <div className="flex h-full flex-col items-center justify-center gap-4 text-brand-500 dark:text-brand-300">
        <Icon size={56} weight="duotone" />
        <p className="text-body-sm font-medium text-foreground-muted">{label}</p>
      </div>
    </div>
  );
}

export function FeatureSplitDefaultDemo() {
  return (
    <FeatureSplit
      eyebrow="Caixa de entrada"
      title="Nosso WhatsApp recebe muitas mensagens"
      body="O Umbler Talk concentra todas as conversas numa caixa só, com múltiplos atendentes operando ao mesmo tempo sem se atrapalhar."
      bullets={[
        'Caixa de entrada única para todo o time',
        'Atribuição automática por fila ou skill',
        'Histórico completo do cliente em cada conversa',
      ]}
      cta={{ label: 'Experimente grátis', href: '#' }}
      visual={<MockVisual icon={ChatCircle} label="Mock — Caixa unificada" />}
    />
  );
}

export function FeatureSplitReverseDemo() {
  return (
    <FeatureSplit
      reverse
      eyebrow="Times"
      title="Quando um funcionário tira férias, ninguém sabe responder o cliente"
      body="As conversas ficam atribuídas ao time, não à pessoa. Saída, férias ou turno trocando — o cliente continua sendo atendido."
      bullets={[
        'Filas por equipe (vendas, suporte, sucesso)',
        'Round-robin automático entre online',
        'Reatribuição em 1 clique quando alguém sai',
      ]}
      cta={{ label: 'Experimente grátis', href: '#' }}
      visual={<MockVisual icon={Users} label="Mock — Distribuição entre times" />}
    />
  );
}

export function FeatureSplitMinimalDemo() {
  return (
    <FeatureSplit
      eyebrow="Privacidade"
      title="Privacidade e permissões granulares"
      body="Cada atendente vê só o que precisa. Conversas privadas ficam privadas, mesmo com vários acessos."
      visual={<MockVisual icon={Lock} label="Mock — Controle de acessos" />}
    />
  );
}
