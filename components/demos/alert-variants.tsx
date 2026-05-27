'use client';

import { useState } from 'react';
import { Alert } from '@/components/ui/alert';

// ── Variantes ─────────────────────────────────────────────────────────────────

export function AlertVariantsDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Alert variant="info" title="Informação">
        Sua conta foi migrada para o novo painel. Nenhuma ação é necessária.
      </Alert>
      <Alert variant="success" title="Publicado com sucesso">
        O site <strong>meusite.com.br</strong> está no ar e já pode ser acessado.
      </Alert>
      <Alert variant="warning" title="Renovação próxima">
        Seu domínio expira em <strong>7 dias</strong>. Renove para evitar interrupção.
      </Alert>
      <Alert variant="error" title="Falha no deploy">
        Não foi possível conectar ao repositório. Verifique as permissões do webhook.
      </Alert>
    </div>
  );
}

// ── Sem título ────────────────────────────────────────────────────────────────

export function AlertSimpleDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Alert variant="info">Sua sessão expira em 30 minutos.</Alert>
      <Alert variant="warning">SSL pendente — verificação de DNS em andamento.</Alert>
      <Alert variant="success">Backup concluído às 03:00.</Alert>
      <Alert variant="error">Sem créditos disponíveis para envio de SMS.</Alert>
    </div>
  );
}

// ── Dismissível ───────────────────────────────────────────────────────────────

const initialAlerts = [
  { id: 1, variant: 'info'    as const, title: 'Novidade',         text: 'O painel agora suporta múltiplas contas. Explore em Configurações.' },
  { id: 2, variant: 'warning' as const, title: 'Atenção',          text: 'Backup automático desabilitado no plano atual.' },
  { id: 3, variant: 'success' as const, title: 'Deploy concluído', text: 'umbler.com · v2.4.1 publicado há 2 minutos.' },
];

export function AlertDismissibleDemo() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const dismiss = (id: number) => setAlerts((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="flex flex-col gap-3">
      {alerts.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-4 text-neutral-500 text-sm">
          <span>Todos os alertas dispensados.</span>
          <button
            type="button"
            onClick={() => setAlerts(initialAlerts)}
            className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
          >
            Restaurar
          </button>
        </div>
      ) : (
        alerts.map((a) => (
          <Alert
            key={a.id}
            variant={a.variant}
            title={a.title}
            onClose={() => dismiss(a.id)}
          >
            {a.text}
          </Alert>
        ))
      )}
    </div>
  );
}

// ── Sem ícone ─────────────────────────────────────────────────────────────────

export function AlertNoIconDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Alert variant="info" icon={false} title="Informação sem ícone">
        Útil quando o ícone é redundante ou o contexto é claro.
      </Alert>
      <Alert variant="error" icon={false}>
        Token de autenticação inválido ou expirado.
      </Alert>
    </div>
  );
}
