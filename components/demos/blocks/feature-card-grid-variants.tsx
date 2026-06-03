import {
  FolderSimple,
  GitBranch,
  Terminal,
  ChatCircle,
  Globe,
  Lightning,
} from '@phosphor-icons/react/dist/ssr';
import { FeatureCardGrid, FeatureCard } from '@/components/blocks/feature-card-grid';

/* ──────────────────────────────────────────────────────────
   3-up — réplica do "Site → Arquivos" do UmblerClub
   ────────────────────────────────────────────────────────── */
export function FeatureCardGrid3UpDemo() {
  return (
    <FeatureCardGrid columns={3}>
      <FeatureCard
        icon={<FolderSimple size={24} weight="duotone" />}
        title="FTPS"
        description="As boas e velhas contas de FTP, só que com segurança."
      />
      <FeatureCard
        icon={<GitBranch size={24} weight="duotone" />}
        title="Git Remote"
        description="Utilize uma git-url para publicar seu site com apenas um push."
      />
      <FeatureCard
        icon={<Terminal size={24} weight="duotone" />}
        title="Git via SSH"
        description="Execute comandos git dentro da pasta do site via SSH."
      />
    </FeatureCardGrid>
  );
}

/* ──────────────────────────────────────────────────────────
   2-up — variação compacta
   ────────────────────────────────────────────────────────── */
export function FeatureCardGrid2UpDemo() {
  return (
    <FeatureCardGrid columns={2}>
      <FeatureCard
        icon={<ChatCircle size={24} weight="duotone" />}
        title="Omnichannel"
        description="WhatsApp, e-mail e chat unificados numa caixa de entrada."
      />
      <FeatureCard
        icon={<Lightning size={24} weight="duotone" />}
        title="Performance"
        description="Infraestrutura que escala com você, sem dor de cabeça."
      />
    </FeatureCardGrid>
  );
}

/* ──────────────────────────────────────────────────────────
   Como link clicável — variação interativa
   ────────────────────────────────────────────────────────── */
export function FeatureCardGridLinksDemo() {
  return (
    <FeatureCardGrid columns={3}>
      <FeatureCard
        href="#"
        icon={<Globe size={24} weight="duotone" />}
        title="Hospedar site"
        description="WordPress ou PHP com poucos cliques."
      />
      <FeatureCard
        href="#"
        icon={<ChatCircle size={24} weight="duotone" />}
        title="Criar emails"
        description="Gere valor para o seu negócio com um email profissional."
      />
      <FeatureCard
        href="#"
        icon={<Lightning size={24} weight="duotone" />}
        title="Registrar domínio"
        description='Domínios ".com.br" e ".com" a preço de custo.'
      />
    </FeatureCardGrid>
  );
}
