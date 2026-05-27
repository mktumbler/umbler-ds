import { EmptyState } from '@/components/ui/empty-state';
import { Button } from '@/components/ui/button';
import {
  FolderOpen,
  MagnifyingGlass,
  CloudSlash,
  Bell,
  Plus,
} from '@phosphor-icons/react/dist/ssr';

// ── Exemplos contextuais ──────────────────────────────────────────────────────

export function EmptyStateExamplesDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Sem resultados de busca */}
      <div className="rounded-lg border border-neutral-700/50 bg-neutral-800">
        <EmptyState
          icon={<MagnifyingGlass size={24} />}
          title="Nenhum resultado"
          description='Não encontramos nada para "wordpress staging". Tente outros termos.'
        />
      </div>

      {/* Lista vazia */}
      <div className="rounded-lg border border-neutral-700/50 bg-neutral-800">
        <EmptyState
          icon={<FolderOpen size={24} />}
          title="Nenhum site ainda"
          description="Crie seu primeiro site e comece a publicar em minutos."
          action={
            <Button size="sm">
              <Plus size={16} />
              Criar site
            </Button>
          }
        />
      </div>

      {/* Sem conexão */}
      <div className="rounded-lg border border-neutral-700/50 bg-neutral-800">
        <EmptyState
          icon={<CloudSlash size={24} />}
          title="Sem conexão"
          description="Não foi possível carregar os dados. Verifique sua conexão e tente novamente."
          action={
            <Button size="sm" variant="secondary">
              Tentar novamente
            </Button>
          }
        />
      </div>

      {/* Notificações */}
      <div className="rounded-lg border border-neutral-700/50 bg-neutral-800">
        <EmptyState
          icon={<Bell size={24} />}
          title="Tudo em dia"
          description="Você não tem notificações pendentes. Volte mais tarde."
        />
      </div>
    </div>
  );
}

// ── Sem ícone ─────────────────────────────────────────────────────────────────

export function EmptyStateSimpleDemo() {
  return (
    <div className="rounded-lg border border-neutral-700/50 bg-neutral-800">
      <EmptyState
        title="Nenhum domínio configurado"
        description="Adicione um domínio para começar a usar e-mail profissional."
        action={
          <Button size="sm">
            <Plus size={16} />
            Adicionar domínio
          </Button>
        }
      />
    </div>
  );
}
