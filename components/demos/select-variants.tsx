import { Select } from '@/components/ui/select';
import { InputGroup, InputLabel, InputHint } from '@/components/ui/input';

// ── Estados ───────────────────────────────────────────────────────────────────

export function SelectStatesDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="sel-default">Plano</InputLabel>
        <Select id="sel-default">
          <option value="">Selecione um plano…</option>
          <option value="starter">Starter — R$ 19/mês</option>
          <option value="pro">Pro — R$ 49/mês</option>
          <option value="enterprise">Enterprise — Sob consulta</option>
        </Select>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="sel-error">Região</InputLabel>
        <Select id="sel-error" state="error">
          <option value="">Selecione uma região…</option>
          <option value="br">Brasil</option>
          <option value="us">Estados Unidos</option>
        </Select>
        <InputHint state="error">Selecione uma região para continuar.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="sel-success">Framework</InputLabel>
        <Select id="sel-success" state="success" defaultValue="next">
          <option value="next">Next.js</option>
          <option value="nuxt">Nuxt</option>
          <option value="astro">Astro</option>
          <option value="remix">Remix</option>
        </Select>
        <InputHint state="success">Configuração compatível detectada.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="sel-disabled">Servidor</InputLabel>
        <Select id="sel-disabled" disabled defaultValue="br-sp">
          <option value="br-sp">São Paulo — BR</option>
        </Select>
      </InputGroup>
    </div>
  );
}

// ── Tamanhos ──────────────────────────────────────────────────────────────────

export function SelectSizesDemo() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Select size="sm">
        <option>Small — 32px</option>
      </Select>
      <Select size="md">
        <option>Medium — 40px (padrão)</option>
      </Select>
      <Select size="lg">
        <option>Large — 48px</option>
      </Select>
    </div>
  );
}
