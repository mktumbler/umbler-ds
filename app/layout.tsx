import './global.css';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Umbler Design System',
    template: '%s · Umbler DS',
  },
  description:
    'Design system Umbler — referência de diretrizes de marca, componentes e padrões.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xfo2jkh.css" />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-sans-inter), var(--font-sans)',
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
