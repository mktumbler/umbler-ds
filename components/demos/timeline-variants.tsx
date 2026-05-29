'use client';

import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineTitle,
  TimelineTime,
} from '@/components/ui/timeline';
import { Badge } from '@/components/ui/badge';
import {
  GitCommit,
  CheckCircle,
  WarningCircle,
  Rocket,
} from '@phosphor-icons/react/dist/ssr';

export function TimelineActivity() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineDot tone="brand" icon={<Rocket weight="fill" />} />
        <TimelineContent>
          <TimelineTime>há 5 min</TimelineTime>
          <TimelineTitle>Deploy em produção concluído</TimelineTitle>
          <p className="text-foreground-muted">
            Versão <span className="font-mono text-foreground">v2.14.0</span> publicada por{' '}
            <span className="font-medium text-foreground">Adriano Costa</span>. 247 arquivos alterados.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="success" icon={<CheckCircle weight="fill" />} />
        <TimelineContent>
          <TimelineTime>há 18 min</TimelineTime>
          <TimelineTitle>Build #2418 — sucesso</TimelineTitle>
          <p className="text-foreground-muted">
            Pipeline completo em 4m 12s. Testes: 412 passaram, 0 falharam.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="default" icon={<GitCommit weight="fill" />} />
        <TimelineContent>
          <TimelineTime>há 42 min</TimelineTime>
          <TimelineTitle>Merge da PR #318</TimelineTitle>
          <p className="text-foreground-muted">
            feat(timeline): novo componente de feed de atividade. 8 commits, +312/-4 linhas.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="warning" icon={<WarningCircle weight="fill" />} />
        <TimelineContent>
          <TimelineTime>há 2 h</TimelineTime>
          <TimelineTitle>Aviso de quota — staging</TimelineTitle>
          <p className="text-foreground-muted">
            Uso de banco em 82% do limite. Considere expandir antes de novo deploy.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="default" />
        <TimelineContent>
          <TimelineTime>ontem, 18:30</TimelineTime>
          <TimelineTitle>Branch criada: feat/timeline</TimelineTitle>
          <p className="text-foreground-muted">
            Por Adriano Costa a partir de <span className="font-mono text-foreground">main</span>.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function TimelineChangelog() {
  return (
    <Timeline compact>
      <TimelineItem>
        <TimelineDot tone="brand" />
        <TimelineContent>
          <div className="flex flex-wrap items-baseline gap-x-2">
            <Badge variant="brand" size="sm">NEW</Badge>
            <span className="font-mono text-body font-semibold text-foreground">v2.14.0</span>
            <TimelineTime>28 mai 2026</TimelineTime>
          </div>
          <p className="mt-1 text-foreground-muted">
            Componente Timeline adicionado. Suporta dots com ícones, tons semânticos e variante compact.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="success" />
        <TimelineContent>
          <div className="flex flex-wrap items-baseline gap-x-2">
            <Badge variant="success" size="sm">FIX</Badge>
            <span className="font-mono text-body font-semibold text-foreground">v2.13.4</span>
            <TimelineTime>26 mai 2026</TimelineTime>
          </div>
          <p className="mt-1 text-foreground-muted">
            Corrigido alinhamento da legenda na Table quando `dense` está ativo.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="brand" />
        <TimelineContent>
          <div className="flex flex-wrap items-baseline gap-x-2">
            <Badge variant="brand" size="sm">NEW</Badge>
            <span className="font-mono text-body font-semibold text-foreground">v2.13.0</span>
            <TimelineTime>21 mai 2026</TimelineTime>
          </div>
          <p className="mt-1 text-foreground-muted">
            Table compound semântico com variantes zebra, dense, bordered e interactive.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineDot tone="success" />
        <TimelineContent>
          <div className="flex flex-wrap items-baseline gap-x-2">
            <Badge variant="success" size="sm">FIX</Badge>
            <span className="font-mono text-body font-semibold text-foreground">v2.12.2</span>
            <TimelineTime>18 mai 2026</TimelineTime>
          </div>
          <p className="mt-1 text-foreground-muted">
            Toast de loading agora resolve corretamente quando a promise rejeita.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function TimelineMinimal() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineDot tone="brand" />
        <TimelineContent>
          <TimelineTitle>Pedido criado</TimelineTitle>
          <TimelineTime>14:02</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot tone="brand" />
        <TimelineContent>
          <TimelineTitle>Pagamento confirmado</TimelineTitle>
          <TimelineTime>14:05</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot tone="success" filled />
        <TimelineContent>
          <TimelineTitle>Enviado para entrega</TimelineTitle>
          <TimelineTime>15:31</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot tone="default" filled={false} />
        <TimelineContent>
          <TimelineTitle className="text-foreground-muted">Aguardando recebimento</TimelineTitle>
          <TimelineTime>—</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
