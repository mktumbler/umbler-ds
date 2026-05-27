import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ColorSwatch } from '@/components/docs/color-swatch';
import { ColorPalette } from '@/components/docs/color-palette';
import { TypeScale } from '@/components/docs/type-scale';
import { TokenTable } from '@/components/docs/token-table';
import { SpacingScale } from '@/components/docs/spacing-scale';
import { RadiusShowcase } from '@/components/docs/radius-showcase';
import { ShadowShowcase } from '@/components/docs/shadow-showcase';
import { ComponentPreview } from '@/components/docs/component-preview';
import { DurationDemo, EasingDemo } from '@/components/docs/motion-demo';
import { SpinnerSizesDemo, SpinnerColorsDemo } from '@/components/demos/spinner-variants';
import { BadgeVariantsDemo, BadgeSizesDemo, BadgeDotsDemo } from '@/components/demos/badge-variants';
import { TagVariantsDemo, TagInputDemo } from '@/components/demos/tag-variants';
import { AvatarSizesDemo, AvatarFallbacksDemo, AvatarGroupDemo } from '@/components/demos/avatar-variants';
import { CardVariantsDemo, CardCompositionDemo, CardProductsDemo, CardHorizontalDemo } from '@/components/demos/card-variants';
import { CardAuroraRotationsDemo, CardAuroraPrismDemo, CardAuroraBentoDemo } from '@/components/demos/card-aurora-demo';
import { SeparatorDemo } from '@/components/demos/separator-kbd-variants';
import { InputStatesDemo, InputSizesDemo, InputSlotsDemo } from '@/components/demos/input-variants';
import { AlertVariantsDemo, AlertSimpleDemo, AlertDismissibleDemo, AlertNoIconDemo } from '@/components/demos/alert-variants';
import { TextareaStatesDemo, TextareaResizeDemo } from '@/components/demos/textarea-variants';
import { CheckboxStatesDemo, CheckboxGroupDemo, CheckboxErrorDemo, CheckboxIndeterminateDemo } from '@/components/demos/checkbox-variants';
import { RadioGroupDemo, RadioOrientationDemo } from '@/components/demos/radio-variants';
import { ToggleSizesDemo, ToggleWithLabelDemo, ToggleStatesDemo } from '@/components/demos/toggle-variants';
import { SelectStatesDemo, SelectSizesDemo } from '@/components/demos/select-variants';
import { SkeletonPrimitivesDemo, SkeletonCardDemo, SkeletonToggleDemo } from '@/components/demos/skeleton-variants';
import { EmptyStateExamplesDemo, EmptyStateSimpleDemo } from '@/components/demos/empty-state-variants';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ColorSwatch,
    ColorPalette,
    TypeScale,
    TokenTable,
    SpacingScale,
    RadiusShowcase,
    ShadowShowcase,
    ComponentPreview,
    DurationDemo,
    EasingDemo,
    SpinnerSizesDemo,
    SpinnerColorsDemo,
    BadgeVariantsDemo,
    BadgeSizesDemo,
    BadgeDotsDemo,
    TagVariantsDemo,
    TagInputDemo,
    AvatarSizesDemo,
    AvatarFallbacksDemo,
    AvatarGroupDemo,
    CardVariantsDemo,
    CardCompositionDemo,
    CardProductsDemo,
    CardHorizontalDemo,
    CardAuroraRotationsDemo,
    CardAuroraPrismDemo,
    CardAuroraBentoDemo,
    SeparatorDemo,
    InputStatesDemo,
    InputSizesDemo,
    InputSlotsDemo,
    AlertVariantsDemo,
    AlertSimpleDemo,
    AlertDismissibleDemo,
    AlertNoIconDemo,
    TextareaStatesDemo,
    TextareaResizeDemo,
    CheckboxStatesDemo,
    CheckboxGroupDemo,
    CheckboxErrorDemo,
    CheckboxIndeterminateDemo,
    RadioGroupDemo,
    RadioOrientationDemo,
    ToggleSizesDemo,
    ToggleWithLabelDemo,
    ToggleStatesDemo,
    SelectStatesDemo,
    SelectSizesDemo,
    SkeletonPrimitivesDemo,
    SkeletonCardDemo,
    SkeletonToggleDemo,
    EmptyStateExamplesDemo,
    EmptyStateSimpleDemo,
    ...components,
  };
}
