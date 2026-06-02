/**
 * DSStack — grid de cartões mostrando o stack técnico do DS.
 * Versões puxadas do package.json em build time via import direto.
 */

import pkg from '../../package.json';

interface StackItem {
  name: string;
  version: string;
  description: string;
  url: string;
  category: 'core' | 'styling' | 'docs' | 'distribution' | 'tooling';
}

const categoryLabel: Record<StackItem['category'], string> = {
  core:         'Core',
  styling:      'Estilo',
  docs:         'Documentação',
  distribution: 'Distribuição',
  tooling:      'Ferramentas',
};

const categoryColor: Record<StackItem['category'], string> = {
  core:         'text-brand-400',
  styling:      'text-info-500',
  docs:         'text-warning-500',
  distribution: 'text-success-500',
  tooling:      'text-foreground-muted',
};

function v(name: keyof typeof pkg.dependencies | keyof typeof pkg.devDependencies): string {
  const deps = { ...pkg.dependencies, ...pkg.devDependencies } as Record<string, string>;
  return (deps[name as string] ?? '—').replace(/^[\^~]/, '');
}

const stack: StackItem[] = [
  { name: 'Next.js',            version: v('next'),                       description: 'App Router + Server Components',  url: 'https://nextjs.org',          category: 'core' },
  { name: 'React',              version: v('react'),                      description: 'UI runtime',                       url: 'https://react.dev',           category: 'core' },
  { name: 'TypeScript',         version: v('typescript'),                 description: 'Type safety end-to-end',           url: 'https://typescriptlang.org',  category: 'core' },
  { name: 'Tailwind CSS',       version: v('tailwindcss'),                description: '@theme + utility-first',           url: 'https://tailwindcss.com',     category: 'styling' },
  { name: 'class-variance-authority', version: v('class-variance-authority'), description: 'Variantes type-safe',         url: 'https://cva.style',           category: 'styling' },
  { name: 'Phosphor Icons',     version: v('@phosphor-icons/react'),      description: 'Biblioteca de ícones',             url: 'https://phosphoricons.com',   category: 'styling' },
  { name: 'Fumadocs',           version: v('fumadocs-ui'),                description: 'Engine de docs MDX',               url: 'https://fumadocs.vercel.app', category: 'docs' },
  { name: 'Radix UI',           version: v('@radix-ui/react-dialog'),     description: 'Primitivos a11y para overlays',    url: 'https://radix-ui.com',        category: 'distribution' },
  { name: 'shadcn registry',    version: '—',                             description: 'Distribuição via /r/[component]',  url: 'https://ui.shadcn.com',       category: 'distribution' },
  { name: 'react-email',        version: v('@react-email/components'),    description: 'Templates de email HTML-safe',     url: 'https://react.email',         category: 'distribution' },
];

export function DSStack() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {stack.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-border bg-surface p-4 transition-colors hover:border-brand-500/40"
        >
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="text-body font-semibold text-foreground">
              {item.name}
            </span>
            <span className={`text-caption font-mono ${categoryColor[item.category]}`}>
              {item.version !== '—' ? `v${item.version}` : ''}
            </span>
          </div>
          <p className="mb-2 text-body-sm text-foreground-muted">{item.description}</p>
          <span className="eyebrow">
            {categoryLabel[item.category]}
          </span>
        </a>
      ))}
    </div>
  );
}
