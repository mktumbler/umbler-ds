import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
        Umbler <span style={{ opacity: 0.5 }}>DS</span>
      </span>
    ),
  },
  links: [
    {
      text: 'Documentação',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
