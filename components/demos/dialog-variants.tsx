'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input, InputLabel } from '@/components/ui/input';

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar ação</DialogTitle>
          <DialogDescription>
            Esta operação não pode ser desfeita. Confirme para continuar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirmar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogDestructive() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Excluir projeto</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir &ldquo;Site institucional&rdquo;?</DialogTitle>
          <DialogDescription>
            Todo o conteúdo, configurações e domínios associados serão removidos
            permanentemente. Você não conseguirá recuperar este projeto depois.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Manter projeto</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="danger">Excluir definitivamente</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogWithForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Editar perfil</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Atualize seus dados públicos. As mudanças são visíveis para outros
            membros da equipe.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <InputLabel htmlFor="dlg-name">Nome</InputLabel>
            <Input id="dlg-name" defaultValue="Adriano Costa" />
          </div>
          <div className="flex flex-col gap-1.5">
            <InputLabel htmlFor="dlg-email">E-mail</InputLabel>
            <Input id="dlg-email" type="email" defaultValue="adriano@umbler.com" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancelar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Salvar</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
