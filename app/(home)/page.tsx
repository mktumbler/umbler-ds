import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_rgb(26_92_255_/_0.08)_0%,_transparent_60%)] p-8">
      <div className="mx-auto max-w-[640px] text-center">
        <h1 className="mb-6 text-display-xl">Design System</h1>

        <p className="mb-10 text-body-lg text-foreground-muted text-pretty">
          A base de marca da Umbler. Tokens, componentes e blocks para montar
          landing pages, e-mails e produtos. Rápido e sempre no padrão.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'no-underline')}
          >
            Abrir documentação <ArrowRight size={16} weight="bold" />
          </Link>

          <Link
            href="/docs/foundations/colors"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'no-underline')}
          >
            Ver tokens
          </Link>
        </div>
      </div>
    </main>
  );
}
