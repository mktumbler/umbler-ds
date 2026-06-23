import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/button',
        permanent: false,
      },
      // ── Reorg de IA: conteúdo de marca migrou para /docs/marca ──
      { source: '/docs/brand', destination: '/docs/marca', permanent: true },
      { source: '/docs/downloads', destination: '/docs/marca/assets', permanent: true },
      { source: '/docs/marketing', destination: '/docs/marca', permanent: true },
      { source: '/docs/marketing/brand/:path*', destination: '/docs/marca/voz/:path*', permanent: true },
      { source: '/docs/marketing/conversion/:path*', destination: '/docs/marca/copy/:path*', permanent: true },
      { source: '/docs/marketing/page-types/:path*', destination: '/docs/marca/copy/estrutura', permanent: true },
      // tipos-de-pagina foi removida; conteúdo de estrutura de LP vive em copy/estrutura
      { source: '/docs/marca/tipos-de-pagina/:path*', destination: '/docs/marca/copy/estrutura', permanent: true },
      { source: '/docs/marca/tipos-de-pagina', destination: '/docs/marca/copy/estrutura', permanent: true },
      { source: '/docs/marketing/showcase', destination: '/docs/marca/showcase', permanent: true },
      { source: '/docs/email', destination: '/docs/marca/emails', permanent: true },
      { source: '/docs/email/:path*', destination: '/docs/marca/emails/:path*', permanent: true },
      { source: '/docs/plugin', destination: '/docs/para-ia/plugin', permanent: true },
      // Atalhos amigáveis para os públicos
      { source: '/marca', destination: '/docs/marca', permanent: false },
      { source: '/para-ia', destination: '/docs/para-ia', permanent: false },
    ];
  },
};

export default withMDX(config);
