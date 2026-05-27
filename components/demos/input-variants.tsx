'use client';

import { Input, InputGroup, InputLabel, InputHint } from '@/components/ui/input';
import { MagnifyingGlass, Envelope, Eye, EyeSlash, Lock } from '@phosphor-icons/react';
import { useState } from 'react';

// ── Estados ───────────────────────────────────────────────────────────────────

export function InputStatesDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <InputGroup>
        <InputLabel htmlFor="default">Default</InputLabel>
        <Input id="default" placeholder="seu@email.com" />
        <InputHint>Texto auxiliar opcional.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="error-input">Com erro</InputLabel>
        <Input id="error-input" state="error" defaultValue="email-invalido" />
        <InputHint state="error">E-mail inválido. Verifique o formato.</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="success-input">Validado</InputLabel>
        <Input id="success-input" state="success" defaultValue="adriano@umbler.com" />
        <InputHint state="success">E-mail disponível!</InputHint>
      </InputGroup>

      <InputGroup>
        <InputLabel htmlFor="disabled-input">Desabilitado</InputLabel>
        <Input id="disabled-input" disabled defaultValue="somente leitura" />
      </InputGroup>
    </div>
  );
}

// ── Tamanhos ──────────────────────────────────────────────────────────────────

export function InputSizesDemo() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Input size="sm" placeholder="Small — 32px" />
      <Input size="md" placeholder="Medium — 40px (padrão)" />
      <Input size="lg" placeholder="Large — 48px" />
    </div>
  );
}

// ── Com ícones e slots ────────────────────────────────────────────────────────

export function InputSlotsDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      {/* Ícone à esquerda */}
      <Input
        placeholder="Buscar…"
        leftElement={<MagnifyingGlass size={16} />}
      />

      {/* Ícone à esquerda + direita */}
      <Input
        placeholder="seu@email.com"
        leftElement={<Envelope size={16} />}
        rightElement={<Lock size={16} />}
      />

      {/* Toggle de senha */}
      <InputGroup>
        <InputLabel htmlFor="password">Senha</InputLabel>
        <Input
          id="password"
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
