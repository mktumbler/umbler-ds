import { Badge } from '@/components/ui/badge';

const variants = ['brand', 'success', 'warning', 'error', 'neutral'] as const;
const variantLabels: Record<string, string> = {
  brand: 'Brand',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  neutral: 'Neutral',
};

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variantLabels[variant]}
        </Badge>
      ))}
    </div>
  );
}

export function BadgeDotsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant} dot>
          {variantLabels[variant]}
        </Badge>
      ))}
    </div>
  );
}

export function BadgeShapesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {variants.map((variant) => (
          <Badge key={variant} variant={variant} shape="pill">
            pill
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {variants.map((variant) => (
          <Badge key={variant} variant={variant} shape="tag">
            tag
          </Badge>
        ))}
      </div>
    </div>
  );
}
