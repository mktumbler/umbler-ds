import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { baseOptions } from '@/app/layout.config';
import { SidebarMetaLinks } from '@/components/ui/sidebar-meta-links';
import { SidebarThemeRow } from '@/components/ui/sidebar-theme-row';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: false,
        footer: <SidebarMetaLinks />,
      }}
      themeSwitch={{
        component: <SidebarThemeRow />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
