'use client';

import { useState } from 'react';

interface ColorSwatchProps {
  label: string;
  value: string;
  token?: string;
  emphasis?: boolean;
}

export function ColorSwatch({ label, value, token, emphasis }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="not-prose group min-w-0">
      <button
        type="button"
        onClick={handleCopy}
        title={copied ? 'Copiado!' : (token ?? label)}
        className="relative w-full block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-lg"
      >
        <div
          className={`h-12 w-full rounded-lg transition-transform duration-[var(--duration-fast)] group-hover:scale-[1.03] ${
            emphasis ? 'ring-2 ring-offset-2 ring-offset-surface ring-brand-500' : ''
          }`}
          style={{ background: value }}
        />
        {/* Copied overlay */}
        <div
          className={`absolute inset-0 rounded-lg flex items-center justify-center transition-opacity duration-[var(--duration-fast)] bg-black/45 ${
            copied ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-caption font-semibold text-white">Copiado!</span>
        </div>
      </button>

      <div className="mt-1.5 px-0.5 space-y-0.5">
        <p className="text-caption font-semibold leading-tight text-foreground-muted break-words">{label}</p>
        <p className="text-caption font-mono leading-tight text-foreground-subtle">{value}</p>
      </div>
    </div>
  );
}
