'use client';

/**
 * EmailPreview — exibe um template de email em iframe dentro dos docs.
 * Inclui botão de download do HTML e toggle de viewport (desktop/mobile).
 */

import { useState } from 'react';

const VIEWPORTS = [
  { label: 'Desktop', width: '100%', icon: '🖥' },
  { label: 'Mobile',  width: '375px', icon: '📱' },
] as const;

interface EmailPreviewProps {
  template: 'welcome' | 'campaign' | 'notification';
  height?: number;
}

export function EmailPreview({ template, height = 600 }: EmailPreviewProps) {
  const [viewport, setViewport] = useState<typeof VIEWPORTS[number]>(VIEWPORTS[0]);

  const src = `/api/email/${template}`;

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-surface">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        {/* Viewport toggles */}
        <div className="flex gap-1">
          {VIEWPORTS.map((v) => (
            <button
              key={v.label}
              onClick={() => setViewport(v)}
              title={v.label}
              className={[
                'flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors',
                viewport.label === v.label
                  ? 'bg-brand-500/15 text-brand-400'
                  : 'text-foreground-muted hover:text-foreground',
              ].join(' ')}
            >
              <span>{v.icon}</span>
              <span>{v.label}</span>
            </button>
          ))}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-2">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            Abrir ↗
          </a>
          <a
            href={src}
            download={`umbler-email-${template}.html`}
            className="flex items-center gap-1.5 rounded-md bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-400 transition-colors hover:bg-brand-500/25"
          >
            ⬇ Download HTML
          </a>
        </div>
      </div>

      {/* Frame area — fundo cinza simula tela de email client */}
      <div
        className="flex justify-center bg-neutral-200 p-6 transition-all duration-[var(--duration-normal)]"
        style={{ minHeight: height }}
      >
        <iframe
          src={src}
          title={`Preview do template ${template}`}
          style={{
            width:        viewport.width,
            height:       height,
            border:       'none',
            borderRadius: '4px',
            boxShadow:    '0 4px 24px rgba(0,0,0,0.18)',
            transition:   'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
