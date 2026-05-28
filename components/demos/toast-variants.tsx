'use client';

import { Button } from '@/components/ui/button';
import { Toaster, toast } from '@/components/ui/toast';

export function ToastPlayground() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast('Mensagem enviada', {
              description: 'O destinatário receberá em alguns segundos.',
            })
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success('Domínio conectado', {
              description: 'umbler.com agora aponta pra sua loja.',
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning('Plano próximo do limite', {
              description: 'Você usou 92% das mensagens do mês.',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error('Falha no pagamento', {
              description: 'Cartão recusado pelo emissor. Tente outro método.',
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info('Atualização disponível', {
              description: 'Nova versão do Umbler Talk pronta para instalar.',
            })
          }
        >
          Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant="ghost"
          onClick={() =>
            toast('Convite enviado para joana@umbler.com', {
              action: { label: 'Desfazer', onClick: () => toast('Convite cancelado') },
            })
          }
        >
          Com ação
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            const id = toast.loading('Publicando alterações…');
            setTimeout(() => toast.success('Publicado!', { id }), 1800);
          }}
        >
          Loading → success
        </Button>
      </div>

      {/* Toaster local pro preview da doc. Em apps reais, montar uma vez no layout raiz. */}
      <Toaster />
    </div>
  );
}
