/**
 * GET /api/email/[template]
 *
 * Renderiza um template de email para HTML e devolve como text/html.
 * Usado pelo EmailPreview nos docs (iframe) e para download direto.
 *
 * Templates disponíveis: welcome | campaign | notification
 */

import { render } from '@react-email/render';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import React from 'react';

type Params = { template: string };

const TEMPLATES: Record<string, () => Promise<React.ComponentType<Record<string, unknown>>>> = {
  welcome:      () => import('@/emails/templates/welcome').then((m) => m.default),
  campaign:     () => import('@/emails/templates/campaign').then((m) => m.default),
  notification: () => import('@/emails/templates/notification').then((m) => m.default),
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { template } = await params;
  const loader = TEMPLATES[template];

  if (!loader) {
    return NextResponse.json(
      { error: `Template "${template}" não encontrado. Disponíveis: ${Object.keys(TEMPLATES).join(', ')}` },
      { status: 404 },
    );
  }

  const Component = await loader();
  const html = await render(React.createElement(Component as React.ComponentType));

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      // permite download do HTML quando chamado com ?download=1
      'Cache-Control': 'no-store',
    },
  });
}
