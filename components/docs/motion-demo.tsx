'use client';

import { useState } from 'react';

// ── Duration demo ─────────────────────────────────────────────────────────────

const durations = [
  { name: 'Fast',   value: '150ms', token: '--duration-fast',   ms: 150 },
  { name: 'Normal', value: '250ms', token: '--duration-normal', ms: 250 },
  { name: 'Slow',   value: '400ms', token: '--duration-slow',   ms: 400 },
  { name: 'Slower', value: '600ms', token: '--duration-slower', ms: 600 },
];

export function DurationDemo() {
  const [active, setActive]     = useState(false);
  const [animated, setAnimated] = useState(false);

  function play() {
    if (animated) return;
    setAnimated(true);
    setActive(true);
    // after slowest animation finishes, snap back instantly
    setTimeout(() => {
      setActive(false);
      setTimeout(() => setAnimated(false), 150);
    }, 900);
  }

  return (
    <div className="not-prose my-4">
      <div className="space-y-2">
        {durations.map((d) => (
          <div key={d.name} className="flex items-center gap-4">
            <div className="w-20 shrink-0">
              <p className="text-xs font-semibold text-fd-foreground/80">{d.name}</p>
              <p className="text-[10px] font-mono text-fd-foreground/45">{d.value}</p>
            </div>
            <div className="relative flex-1 h-10 bg-fd-muted rounded-lg overflow-hidden">
              <div
                className="absolute top-1/2 w-5 h-5 rounded-full bg-brand-500 shadow-sm"
                style={{
                  left: active ? 'calc(100% - 28px)' : '8px',
                  transform: 'translateY(-50%)',
                  transition: active
                    ? `left ${d.ms}ms cubic-bezier(0.22, 1, 0.36, 1)`
                    : 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={play}
        disabled={animated}
        className="mt-4 px-4 py-1.5 text-xs font-semibold rounded-lg bg-brand-500 text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-default cursor-pointer transition-colors duration-150"
      >
        {animated ? 'Animando…' : '▶ Play'}
      </button>
    </div>
  );
}

// ── Easing demo ───────────────────────────────────────────────────────────────

const easings = [
  {
    name: 'ease-out',
    token: '--ease-out',
    bezier: 'cubic-bezier(0.22, 1, 0.36, 1)',
    description: 'Entradas — rápido no início, desacelera suave',
  },
  {
    name: 'ease-in-out',
    token: '--ease-in-out',
    bezier: 'cubic-bezier(0.45, 0, 0.55, 1)',
    description: 'Transições contínuas — acelera e desacelera igual',
  },
  {
    name: 'ease-spring',
    token: '--ease-spring',
    bezier: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    description: 'Bounce sutil — ultrapassa e volta',
  },
];

const EASING_DURATION = 600;

export function EasingDemo() {
  const [active, setActive]     = useState(false);
  const [animated, setAnimated] = useState(false);

  function play() {
    if (animated) return;
    setAnimated(true);
    setActive(true);
    setTimeout(() => {
      setActive(false);
      setTimeout(() => setAnimated(false), 150);
    }, EASING_DURATION + 400);
  }

  return (
    <div className="not-prose my-4">
      <div className="space-y-2">
        {easings.map((e) => (
          <div key={e.name} className="flex items-center gap-4">
            <div className="w-32 shrink-0">
              <p className="text-xs font-semibold text-fd-foreground/80">{e.name}</p>
              <p className="text-[10px] text-fd-foreground/45 leading-tight mt-0.5">{e.description}</p>
            </div>
            <div className="relative flex-1 h-10 bg-fd-muted rounded-lg overflow-hidden">
              <div
                className="absolute top-1/2 w-5 h-5 rounded-full bg-brand-500 shadow-sm"
                style={{
                  left: active ? 'calc(100% - 28px)' : '8px',
                  transform: 'translateY(-50%)',
                  transition: active
                    ? `left ${EASING_DURATION}ms ${e.bezier}`
                    : 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={play}
        disabled={animated}
        className="mt-4 px-4 py-1.5 text-xs font-semibold rounded-lg bg-brand-500 text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-default cursor-pointer transition-colors duration-150"
      >
        {animated ? 'Animando…' : '▶ Play'}
      </button>
    </div>
  );
}
