import Link from 'next/link';
import { ArrowRight, Sparkle, Cube, Robot } from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

const PATHS = [
  {
    href: '/docs/marca',
    icon: Sparkle,
    title: 'Central de Marca',
    desc: 'Para colaboradores: baixe logos e símbolos, escreva copy e e-mail na voz da Umbler, siga as diretrizes da marca.',
    cta: 'Abrir Central de Marca',
    primary: true,
  },
  {
    href: '/docs',
    icon: Cube,
    title: 'Componentes e tokens',
    desc: 'Para devs: foundations, componentes, blocks de LP e patterns. Instaláveis via registry shadcn.',
    cta: 'Ver documentação',
    primary: false,
  },
  {
    href: '/docs/para-ia',
    icon: Robot,
    title: 'Para IAs',
    desc: 'Está consumindo o DS com uma IA? Briefing de marca, catálogo técnico e registry num só lugar.',
    cta: 'Entrar pra máquinas',
    primary: false,
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_rgb(26_92_255_/_0.08)_0%,_transparent_60%)] p-8">
      <div className="mx-auto w-full max-w-[960px] text-center">
        <h1 className="mb-6 text-display-xl">Umbler Design System</h1>

        <p className="mx-auto mb-12 max-w-[620px] text-body-lg text-foreground-muted text-pretty">
          A base de marca da Umbler num só lugar. Comece pelo caminho que é o seu.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 text-left">
          {PATHS.map(({ href, icon: Icon, title, desc, cta, primary }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'group flex flex-col rounded-2xl border p-6 no-underline transition-colors',
                primary
                  ? 'border-brand-500/40 bg-brand-500/[0.04] hover:border-brand-500/70'
                  : 'border-border bg-surface hover:border-foreground-muted/40',
              )}
            >
              <Icon
                size={24}
                weight="duotone"
                className={cn('mb-4', primary ? 'text-brand-500' : 'text-foreground-muted')}
              />
              <h2 className="mb-2 text-h4 text-foreground">{title}</h2>
              <p className="mb-6 flex-1 text-body-sm text-foreground-muted">{desc}</p>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-body-sm font-medium',
                  primary ? 'text-brand-500' : 'text-foreground',
                )}
              >
                {cta}
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
