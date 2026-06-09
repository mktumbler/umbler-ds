import { Select } from '@/components/ui/select';
import { InputGroup, InputLabel, InputHint } from '@/components/ui/input';

// ─── Estados ──────────────────────────────────────────────────────────────────

export function SelectDefault() {
  return (
    <InputGroup>
      <InputLabel htmlFor="sel-d">Plano</InputLabel>
      <Select id="sel-d">
        <option value="">Selecione um plano…</option>
        <option value="starter">Starter</option>
        <option value="pro">Pro</option>
        <option value="enterprise">Enterprise</option>
      </Select>
    </InputGroup>
  );
}

export function SelectError() {
  return (
    <InputGroup>
      <InputLabel htmlFor="sel-e">Região</InputLabel>
      <Select id="sel-e" state="error">
        <option value="">Selecione uma região…</option>
        <option value="br">Brasil</option>
        <option value="us">Estados Unidos</option>
      </Select>
      <InputHint state="error">Selecione uma região para continuar.</InputHint>
    </InputGroup>
  );
}

export function SelectSuccess() {
  return (
    <InputGroup>
      <InputLabel htmlFor="sel-s">Framework</InputLabel>
      <Select id="sel-s" state="success" defaultValue="next">
        <option value="next">Next.js</option>
        <option value="nuxt">Nuxt</option>
        <option value="astro">Astro</option>
      </Select>
      <InputHint state="success">Configuração compatível detectada.</InputHint>
    </InputGroup>
  );
}

export function SelectDisabled() {
  return (
    <InputGroup>
      <InputLabel htmlFor="sel-dis">Servidor</InputLabel>
      <Select id="sel-dis" disabled defaultValue="br-sp">
        <option value="br-sp">São Paulo — BR</option>
      </Select>
    </InputGroup>
  );
}

// ─── Tamanhos ─────────────────────────────────────────────────────────────────

export function SelectSizeSm() {
  return (
    <Select size="sm">
      <option>Starter</option>
      <option>Pro</option>
    </Select>
  );
}

export function SelectSizeMd() {
  return (
    <Select size="md">
      <option>Starter</option>
      <option>Pro</option>
    </Select>
  );
}

export function SelectSizeLg() {
  return (
    <Select size="lg">
      <option>Starter</option>
      <option>Pro</option>
    </Select>
  );
}

// ─── Composição: filtro de tabela ─────────────────────────────────────────────

export function SelectTableFilter() {
  return (
    <div className="flex max-w-sm items-center gap-3">
      <Select size="sm" className="w-32">
        <option>Todos</option>
        <option>Ativo</option>
        <option>Inativo</option>
      </Select>
      <Select size="sm" className="w-36">
        <option>Últimos 7 dias</option>
        <option>Últimos 30 dias</option>
        <option>Este ano</option>
      </Select>
    </div>
  );
}

// ─── Composição: formulário de deploy ────────────────────────────────────────

export function SelectDeployForm() {
  return (
    <div className="flex max-w-sm flex-col gap-4 rounded-xl border border-border bg-surface p-5">
      <p className="text-body-sm font-semibold text-foreground">Configurar deploy</p>
      <InputGroup>
        <InputLabel htmlFor="deploy-region">Região</InputLabel>
        <Select id="deploy-region" defaultValue="br-sp">
          <option value="br-sp">Brasil — São Paulo</option>
          <option value="us-east">EUA — Leste</option>
          <option value="eu-west">Europa — Oeste</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="deploy-php">Versão PHP</InputLabel>
        <Select id="deploy-php" defaultValue="82">
          <option value="74">PHP 7.4</option>
          <option value="81">PHP 8.1</option>
          <option value="82">PHP 8.2</option>
          <option value="83">PHP 8.3</option>
        </Select>
      </InputGroup>
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────────────────────

export function SelectStatesDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <SelectDefault />
      <SelectError />
      <SelectSuccess />
      <SelectDisabled />
    </div>
  );
}

export function SelectSizesDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <SelectSizeSm />
      <SelectSizeMd />
      <SelectSizeLg />
    </div>
  );
}
