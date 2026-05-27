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
        <Badge key={variant} variant={variant} size="md">
          {variantLabels[variant]}
        </Badge>
      ))}
    </div>
  );
}

export function BadgeSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {variants.map((variant) => (
        <div key={variant} className="flex items-center gap-2">
          <Badge variant={variant} size="sm">
            {variantLabels[variant]}
          </Badge>
          <Badge variant={variant} size="md">
            {variantLabels[variant]}
          </Badge>
        </div>
      ))}
    </div>
  );
}

export function BadgeDotsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant} size="md" dot>
          {variantLabels[variant]}
        </Badge>
      ))}
    </div>
  );
}
