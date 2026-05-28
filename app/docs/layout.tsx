import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { baseOptions } from '@/app/layout.config';
import { SidebarMetaLinks } from '@/components/ui/sidebar-meta-links';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        footer: <SidebarMetaLinks />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
