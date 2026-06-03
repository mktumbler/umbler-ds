'use client';

import { Input, InputLabel } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { TagInput } from '@/components/ui/tag-input';
import { useState } from 'react';
import { FormPanel } from '@/components/blocks/form-panel';

/* ──────────────────────────────────────────────────────────
   Padrão — Novo grupo de email
   ────────────────────────────────────────────────────────── */
export function FormPanelGroupDemo() {
  const [membros, setMembros] = useState<string[]>([]);
  return (
    <FormPanel
      title="Novo grupo de email"
      description="Envie uma mensagem para o email de um grupo e todos os membros recebem."
      footer={<Button type="submit">Salvar</Button>}
      onSubmit={(e) => {
        e.preventDefault();
        alert('Grupo criado');
      }}
    >
      <div>
        <InputLabel htmlFor="nome">Nome</InputLabel>
        <Input id="nome" placeholder="Ex: time de vendas" />
      </div>
      <div>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          placeholder="desenvolvedores"
          rightElement={<span className="text-foreground-muted text-caption">@floricultura.com.br</span>}
        />
      </div>
      <div>
        <InputLabel htmlFor="membros">Membros</InputLabel>
        <TagInput
          id="membros"
          value={membros}
          onChange={setMembros}
          placeholder="Selecione os membros"
        />
      </div>
    </FormPanel>
  );
}

/* ──────────────────────────────────────────────────────────
   Variante — Novo filtro de email (steps numerados)
   ────────────────────────────────────────────────────────── */
export function FormPanelFilterDemo() {
  return (
    <FormPanel
      title="Novo filtro de email"
      description="Organize as mensagens da sua caixa através de condições e ações."
      footer={<Button type="submit">Salvar</Button>}
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <InputLabel htmlFor="nome-filtro">Nome</InputLabel>
        <Input id="nome-filtro" placeholder='Ex: "redirecionar cobranças"' />
      </div>
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <InputLabel htmlFor="campo">Os emails que estiverem no campo</InputLabel>
          <Select id="campo" defaultValue="de">
            <option value="de">De:</option>
            <option value="para">Para:</option>
            <option value="assunto">Assunto:</option>
          </Select>
        </div>
        <div className="flex-[2]">
          <Input placeholder="Selecione os emails" />
        </div>
      </div>
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <InputLabel htmlFor="acao">Devem</InputLabel>
          <Select id="acao" defaultValue="copia">
            <option value="copia">enviar cópia para</option>
            <option value="arquivar">arquivar</option>
            <option value="apagar">apagar</option>
          </Select>
        </div>
        <div className="flex-[2]">
          <Input placeholder="Selecione os emails" />
        </div>
      </div>
    </FormPanel>
  );
}

/* ──────────────────────────────────────────────────────────
   Footer à direita — quando o submit não é a única ação principal
   ────────────────────────────────────────────────────────── */
export function FormPanelInlineFooterDemo() {
  return (
    <FormPanel
      title="Editar contato"
      footerFullWidth={false}
      footer={
        <>
          <Button variant="secondary">Cancelar</Button>
          <Button type="submit">Salvar alterações</Button>
        </>
      }
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <InputLabel htmlFor="contact-nome">Nome</InputLabel>
        <Input id="contact-nome" defaultValue="Jana Silva" />
      </div>
      <div>
        <InputLabel htmlFor="contact-tel">Telefone</InputLabel>
        <Input id="contact-tel" defaultValue="+55 19 99576-4300" />
      </div>
    </FormPanel>
  );
}
