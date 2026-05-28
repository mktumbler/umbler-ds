/**
 * SidebarMetaLinks — bloco de links secundários renderizado no rodapé
 * da sidebar do Fumadocs (acima do theme toggle).
 *
 * Separa as páginas "sobre o produto" (Sobre o DS, Marca, Downloads)
 * do conteúdo principal de navegação (Foundations, Components, etc.).
 * Estilo intencionalmente sutil — texto menor e cor muted — para
 * sinalizar hierarquia secundária sem competir com o tree principal.
 */

import Link from 'next/link';
import { Sparkle, DownloadSimple } from '@phosphor-icons/react/dist/ssr';

/**
 * "Sobre o DS" não está aqui — ele vive inline ao lado do theme toggle
 * (ver app/docs/layout.tsx, prop themeSwitch.component) por ter
 * hierarquia mais alta que os outros dois links secundários.
 */
const links = [
  { href: '/docs/brand',     label: 'A Marca Umbler', icon: Sparkle },
  { href: '/docs/downloads', label: 'Downloads',      icon: DownloadSimple },
] as const;

export function SidebarMetaLinks() {
  return (
    <nav
      aria-label="Links secundários"
      /**
       * order-first → o SidebarFooter do Fumadocs é um `flex flex-col`
       * que renderiza a linha do theme toggle primeiro e o slot `footer`
       * (este componente) depois. `order-first` reordena via CSS pra que
       * estes links apareçam ACIMA da linha do toggle.
       *
       * mb-2 + border-b → divisor sutil entre estes links e o toggle.
       */
      className="order-first flex flex-col gap-0.5 mb-2 pb-2 border-b border-fd-border/60"
    >
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="
            flex items-center gap-2.5 px-2 py-1.5 rounded-md
            text-[13px] text-fd-muted-foreground
            transition-colors
            hover:bg-fd-accent hover:text-fd-accent-foreground
          "
        >
          <Icon size={14} weight="regular" className="opacity-70" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
