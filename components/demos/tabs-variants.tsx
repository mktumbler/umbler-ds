'use client';

import { ChartLine, Gear, Users } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Visão geral</TabsTrigger>
        <TabsTrigger value="activity">Atividade</TabsTrigger>
        <TabsTrigger value="members">Membros</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <p className="text-body-sm text-foreground-muted">
          Resumo do projeto: 12 deploys este mês, 98,4% de uptime, 3 domínios ativos.
        </p>
      </TabsContent>
      <TabsContent value="activity">
        <p className="text-body-sm text-foreground-muted">
          Últimas atividades aparecem aqui em ordem cronológica reversa.
        </p>
      </TabsContent>
      <TabsContent value="members">
        <p className="text-body-sm text-foreground-muted">
          Lista de membros com permissões e último acesso.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsWithIcons() {
  return (
    <Tabs defaultValue="metrics" className="w-full">
      <TabsList>
        <TabsTrigger value="metrics">
          <ChartLine size={16} weight="bold" />
          Métricas
        </TabsTrigger>
        <TabsTrigger value="team">
          <Users size={16} weight="bold" />
          Equipe
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Gear size={16} weight="bold" />
          Configurações
        </TabsTrigger>
      </TabsList>

      <TabsContent value="metrics" className="rounded-lg border border-border bg-surface p-4">
        <p className="text-body-sm text-foreground">
          Painel de métricas com gráficos de performance.
        </p>
      </TabsContent>
      <TabsContent value="team" className="rounded-lg border border-border bg-surface p-4">
        <p className="text-body-sm text-foreground">
          Convide novos membros e ajuste papéis.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="rounded-lg border border-border bg-surface p-4">
        <p className="text-body-sm text-foreground">
          Configurações gerais do projeto.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsDisabled() {
  return (
    <Tabs defaultValue="active" className="w-full">
      <TabsList>
        <TabsTrigger value="active">Ativo</TabsTrigger>
        <TabsTrigger value="archived">Arquivado</TabsTrigger>
        <TabsTrigger value="locked" disabled>
          Bloqueado
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-body-sm text-foreground-muted">Items ativos no momento.</p>
      </TabsContent>
      <TabsContent value="archived">
        <p className="text-body-sm text-foreground-muted">Items movidos para arquivo.</p>
      </TabsContent>
    </Tabs>
  );
}
