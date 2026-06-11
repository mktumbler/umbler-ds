import { SiteFooter } from '@/components/blocks/site-footer';
import { UmblerLogo } from '@/components/ui/umbler-logo';
import { LinkedinLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

const COLUMNS = [
  {
    title: 'Produtos',
    links: [
      { label: 'Umbler Talk', href: '#' },
      { label: 'Umbler Cloud', href: '#' },
      { label: 'E-mails', href: '#' },
      { label: 'Registro de domínio', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Central de ajuda', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Documentação', href: '#' },
      { label: 'Comunidade', href: '#' },
    ],
  },
];

const SOCIAL = [
  { label: 'LinkedIn', href: '#', icon: <LinkedinLogo size={16} weight="fill" /> },
  { label: 'Instagram', href: '#', icon: <InstagramLogo size={16} weight="fill" /> },
  { label: 'YouTube', href: '#', icon: <YoutubeLogo size={16} weight="fill" /> },
];

const LEGAL = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos de uso', href: '#' },
  { label: 'Cookies', href: '#' },
];

export function SiteFooterDarkDemo() {
  return (
    <SiteFooter
      logo={<UmblerLogo className="h-7 w-auto text-white" />}
      tagline="A infraestrutura por trás dos negócios que crescem no Brasil."
      columns={COLUMNS}
      social={SOCIAL}
      copyright="© 2026 Umbler. Todos os direitos reservados."
      legal={LEGAL}
    />
  );
}

export function SiteFooterLightDemo() {
  return (
    <SiteFooter
      tone="light"
      logo={<UmblerLogo className="h-7 w-auto" />}
      tagline="A infraestrutura por trás dos negócios que crescem no Brasil."
      columns={COLUMNS}
      social={SOCIAL}
      copyright="© 2026 Umbler. Todos os direitos reservados."
      legal={LEGAL}
    />
  );
}
