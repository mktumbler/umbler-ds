'use client';

import { useState } from 'react';
import { Input, InputGroup, InputLabel, InputHint } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  MagnifyingGlass,
  Envelope,
  Eye,
  EyeSlash,
  Lock,
  Phone,
  User,
  At,
  X,
  CurrencyDollar,
  MagnifyingGlassMinus,
} from '@phosphor-icons/react';

// ─── Estados individuais ───────────────────────────────────────

export function InputDefault() {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputLabel htmlFor="i-default">E-mail</InputLabel>
      <Input id="i-default" placeholder="seu@email.com" />
      <InputHint>Usaremos para enviar o link de acesso.</InputHint>
    </InputGroup>
  );
}

export function InputError() {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputLabel htmlFor="i-error">E-mail</InputLabel>
      <Input id="i-error" state="error" defaultValue="nao-e-email" />
      <InputHint state="error">Formato inválido. Ex: nome@empresa.com</InputHint>
    </InputGroup>
  );
}

export function InputSuccess() {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputLabel htmlFor="i-success">E-mail</InputLabel>
      <Input id="i-success" state="success" defaultValue="adriano@umbler.com" />
      <InputHint state="success">E-mail disponível!</InputHint>
    </InputGroup>
  );
}

export function InputDisabled() {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputLabel htmlFor="i-disabled">Plano atual</InputLabel>
      <Input id="i-disabled" disabled defaultValue="Pro — R$ 497/mês" />
      <InputHint>Altere em Configurações de cobrança.</InputHint>
    </InputGroup>
  );
}

// ─── Tamanhos ─────────────────────────────────────────────────

export function InputSizeSm() {
  return <Input size="sm" placeholder="Small — 32px" className="w-full max-w-xs" />;
}
export function InputSizeMd() {
  return <Input size="md" placeholder="Medium — 40px (padrão)" className="w-full max-w-xs" />;
}
export function InputSizeLg() {
  return <Input size="lg" placeholder="Large — 48px" className="w-full max-w-xs" />;
}

// ─── Slots (ícones) ────────────────────────────────────────────

export function InputIconLeft() {
  return (
    <Input
      placeholder="Buscar contato..."
      leftElement={<MagnifyingGlass size={16} />}
      className="w-full max-w-xs"
    />
  );
}

export function InputIconRight() {
  return (
    <Input
      placeholder="dominio.com.br"
      rightElement={<At size={16} />}
      className="w-full max-w-xs"
    />
  );
}

export function InputIconBoth() {
  return (
    <Input
      placeholder="seu@email.com"
      leftElement={<Envelope size={16} />}
      rightElement={<Lock size={16} />}
      className="w-full max-w-xs"
    />
  );
}

export function InputIconCurrency() {
  return (
    <Input
      type="number"
      placeholder="0,00"
      leftElement={<CurrencyDollar size={16} />}
      className="w-full max-w-xs"
    />
  );
}

// ─── Password toggle ─────────────────────────────────────────

export function InputPassword() {
  const [show, setShow] = useState(false);
  return (
    <InputGroup className="w-full max-w-xs">
      <InputLabel htmlFor="i-pwd">Senha</InputLabel>
      <Input
        id="i-pwd"
        type={show ? 'text' : 'password'}
        placeholder="••••••••"
        leftElement={<Lock size={16} />}
        rightElement={
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="pointer-events-auto text-foreground-muted transition-colors hover:text-foreground focus:outline-none"
            aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {show ? <EyeSlash size={16} /> : <Eye size={16} />}
          </button>
        }
      />
    </InputGroup>
  );
}

// ─── Search bar com clear ──────────────────────────────────────

export function InputSearch() {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Buscar..."
      leftElement={<MagnifyingGlass size={16} />}
      rightElement={
        value ? (
          <button
            type="button"
            onClick={() => setValue('')}
            className="pointer-events-auto text-foreground-muted transition-colors hover:text-foreground focus:outline-none"
            aria-label="Limpar busca"
          >
            <X size={14} />
          </button>
        ) : null
      }
      className="w-full max-w-xs"
    />
  );
}

// ─── Composições reais ─────────────────────────────────────────

/** Mini formulário de login */
export function InputLoginForm() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-border bg-surface p-6">
      <div>
        <p className="text-body font-semibold text-foreground">Entrar na sua conta</p>
        <p className="mt-1 text-caption text-foreground-muted">Bem-vindo de volta</p>
      </div>
      <InputGroup>
        <InputLabel htmlFor="login-email">E-mail</InputLabel>
        <Input id="login-email" type="email" placeholder="seu@email.com" leftElement={<Envelope size={16} />} />
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="login-pwd">Senha</InputLabel>
        <Input id="login-pwd" type="password" placeholder="••••••••" leftElement={<Lock size={16} />} />
      </InputGroup>
      <Button className="w-full">Entrar</Button>
    </div>
  );
}

/** Form de perfil com múltiplos campos */
export function InputProfileForm() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-border bg-surface p-6">
      <p className="text-body font-semibold text-foreground">Dados pessoais</p>
      <div className="grid grid-cols-2 gap-3">
        <InputGroup>
          <InputLabel htmlFor="p-name">Nome</InputLabel>
          <Input id="p-name" placeholder="Adriano" leftElement={<User size={14} />} size="sm" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="p-phone">Telefone</InputLabel>
          <Input id="p-phone" placeholder="(11) 9..." leftElement={<Phone size={14} />} size="sm" />
        </InputGroup>
      </div>
      <InputGroup>
        <InputLabel htmlFor="p-email">E-mail</InputLabel>
        <Input id="p-email" defaultValue="adriano@umbler.com" state="success" leftElement={<Envelope size={16} />} />
        <InputHint state="success">Verificado</InputHint>
      </InputGroup>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button size="sm">Salvar</Button>
      </div>
    </div>
  );
}

/** Input inline em linha de settings */
export function InputSettingsRow() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-4 rounded-lg border border-border bg-surface px-4 py-3">
      <div className="shrink-0">
        <p className="text-body-sm font-medium text-foreground">Nome do workspace</p>
        <p className="text-caption text-foreground-muted">Visível para toda a equipe</p>
      </div>
      <div className="flex items-center gap-2">
        <Input defaultValue="Umbler Talk" size="sm" className="w-40" />
        <Button size="sm" variant="secondary">Salvar</Button>
      </div>
    </div>
  );
}

// ─── Legacy (retrocompat) ─────────────────────────────────────

export function InputStatesDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="s-default">Default</InputLabel>
        <Input id="s-default" placeholder="seu@email.com" />
        <InputHint>Texto auxiliar opcional.</InputHint>
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="s-error">Com erro</InputLabel>
        <Input id="s-error" state="error" defaultValue="email-invalido" />
        <InputHint state="error">E-mail inválido. Verifique o formato.</InputHint>
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="s-success">Validado</InputLabel>
        <Input id="s-success" state="success" defaultValue="adriano@umbler.com" />
        <InputHint state="success">E-mail disponível!</InputHint>
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="s-disabled">Desabilitado</InputLabel>
        <Input id="s-disabled" disabled defaultValue="somente leitura" />
      </InputGroup>
    </div>
  );
}

export function InputSizesDemo() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Input size="sm" placeholder="Small — 32px" />
      <Input size="md" placeholder="Medium — 40px (padrão)" />
      <Input size="lg" placeholder="Large — 48px" />
    </div>
  );
}

export function InputSlotsDemo() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Input placeholder="Buscar..." leftElement={<MagnifyingGlass size={16} />} />
      <Input placeholder="seu@email.com" leftElement={<Envelope size={16} />} rightElement={<Lock size={16} />} />
      <InputGroup>
        <InputLabel htmlFor="s-pwd">Senha</InputLabel>
        <Input
          id="s-pwd"
          type={show ? 'text' : 'password'}
          placeholder="••••••••"
          leftElement={<Lock size={16} />}
          rightElement={
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="pointer-events-auto text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none"
              aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {show ? <EyeSlash size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </InputGroup>
    </div>
  );
}
