import { ColorSwatch } from './color-swatch';

interface ColorScale {
  step: string;
  value: string;
  emphasis?: boolean;
}

interface ColorPaletteProps {
  title: string;
  description?: string;
  prefix: string;
  scale: ColorScale[];
}

export function ColorPalette({ title, description, prefix, scale }: ColorPaletteProps) {
  return (
    <section className="not-prose my-8">
      <div className="mb-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {description && <p className="text-sm opacity-60 mt-1">{description}</p>}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(62px,1fr))] gap-2">
        {scale.map((s) => (
          <ColorSwatch
            key={s.step}
            label={`${prefix}-${s.step}`}
            value={s.value}
            token={`--color-${prefix}-${s.step}`}
            emphasis={s.emphasis}
          />
        ))}
      </div>
    </section>
  );
}
