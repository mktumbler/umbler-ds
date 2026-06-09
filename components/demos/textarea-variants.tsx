import { Textarea } from '@/components/ui/textarea';
import { InputGroup, InputLabel, InputHint } from '@/components/ui/input';

// ── Individuais — estados ─────────────────────────────────────────────────────

export function TextareaDefault() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-default">Mensagem</InputLabel>
      <Textarea id="ta-ind-default" placeholder="Escreva sua mensagem..." />
      <InputHint>Texto auxiliar opcional.</InputHint>
    </InputGroup>
  );
}

export function TextareaError() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-error">Descrição</InputLabel>
      <Textarea id="ta-ind-error" state="error" defaultValue="Conteúdo inválido aqui." />
      <InputHint state="error">O campo não pode ter menos de 20 caracteres.</InputHint>
    </InputGroup>
  );
}

export function TextareaSuccess() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-success">Descrição</InputLabel>
      <Textarea id="ta-ind-success" state="success" defaultValue="Descrição dentro do limite aceito." />
      <InputHint state="success">Tudo certo!</InputHint>
    </InputGroup>
  );
}

export function TextareaDisabled() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-disabled">Anotações</InputLabel>
      <Textarea id="ta-ind-disabled" disabled defaultValue="Somente leitura." />
    </InputGroup>
  );
}

// ── Individuais — tamanhos e resize ───────────────────────────────────────────

export function TextareaRows3() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-rows3">Comentário (3 linhas)</InputLabel>
      <Textarea id="ta-ind-rows3" rows={3} placeholder="Pequeno — 3 linhas..." />
    </InputGroup>
  );
}

export function TextareaRows6() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-rows6">Descrição (6 linhas)</InputLabel>
      <Textarea id="ta-ind-rows6" rows={6} placeholder="Médio — 6 linhas..." />
    </InputGroup>
  );
}

export function TextareaNoResize() {
  return (
    <InputGroup>
      <InputLabel htmlFor="ta-ind-noresize">Sem resize</InputLabel>
      <Textarea
        id="ta-ind-noresize"
        rows={4}
        className="resize-none"
        placeholder="Este textarea não pode ser redimensionado."
      />
    </InputGroup>
  );
}

// ── Legacy — mantidos para retrocompat ───────────────────────────────────────

export function TextareaStatesDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="ta-default">Default</InputLabel>
        <Textarea id="ta-default" placeholder="Escreva sua mensagem..." />
        <InputHint>Texto auxiliar opcional.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="ta-error">Com erro</InputLabel>
        <Textarea
          id="ta-error"
          state="error"
          defaultValue="Conteúdo inválido aqui."
        />
        <InputHint state="error">O campo não pode ter menos de 20 caracteres.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="ta-success">Validado</InputLabel>
        <Textarea
          id="ta-success"
          state="success"
          defaultValue="Descrição dentro do limite aceito."
        />
        <InputHint state="success">Tudo certo!</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="ta-disabled">Desabilitado</InputLabel>
        <Textarea id="ta-disabled" disabled defaultValue="Somente leitura." />
      </InputGroup>
    </div>
  );
}

export function TextareaResizeDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="ta-rows3">3 linhas (rows=3)</InputLabel>
        <Textarea id="ta-rows3" rows={3} placeholder="Pequeno — 3 linhas..." />
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="ta-rows6">6 linhas (rows=6)</InputLabel>
        <Textarea id="ta-rows6" rows={6} placeholder="Médio — 6 linhas..." />
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="ta-noresize">Sem resize</InputLabel>
        <Textarea
          id="ta-noresize"
          rows={4}
          className="resize-none"
          placeholder="Este textarea não pode ser redimensionado."
        />
      </InputGroup>
    </div>
  );
}
