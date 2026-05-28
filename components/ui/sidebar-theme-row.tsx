/**
 * SidebarThemeRow — injeta o link "Sobre o DS" ao lado esquerdo do
 * ThemeToggle dentro da linha de controles do rodapé da sidebar.
 *
 * O Fumadocs renderiza o slot `themeSwitch.component` na mesma linha
 * flex que já contém o ThemeToggle por padrão. Sobrescrevendo esse
 * slot com um Fragment {link + ThemeToggle}, mantemos o toggle no
 * lado direito (via ms-auto) e ganhamos o espaço da esquerda pro link.
 *
 * Como `themeSwitch.component` SUBSTITUI o toggle default, precisamos
 * re-renderizar o ThemeToggle nós mesmos importando do Fumadocs.
 */

import Link from 'next/link';
import { Info } from '@phosphor-icons/react/dist/ssr';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';

export function SidebarThemeRow() {
  return (
    <>
      <Link
        href="/docs/sobre"
        className="
          inline-flex items-center gap-1.5
          text-[12px] text-fd-muted-foreground
          px-1.5 py-1 rounded-md
          transition-colors
          hover:text-fd-foreground
        "
      >
        <Info size={13} weight="regular" className="opacity-80" />
        Sobre o DS
      </Link>
      <ThemeToggle className="ms-auto p-0" mode="light-dark" />
    </>
  );
}
