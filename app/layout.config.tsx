import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { UmblerLogo } from '@/components/ui/umbler-logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <UmblerLogo width={80} />,
  },
  links: [],
};
