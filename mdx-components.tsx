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
import { VariantGrid, VariantCard } from '@/components/docs/variant-grid';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DurationDemo, EasingDemo } from '@/components/docs/motion-demo';
import { SpinnerSizes, SpinnerColors } from '@/components/demos/spinner-variants';
import { BadgeVariantsDemo, BadgeDotsDemo, BadgeShapesDemo } from '@/components/demos/badge-variants';
import { TagVariantsDemo } from '@/components/demos/tag-variants';
import { TagInputDemo, TagInputWithInputDemo, TagInputStatesDemo } from '@/components/demos/tag-input-variants';
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
import { KbdSizes, KbdSingleKeys, KbdSequences } from '@/components/demos/kbd-variants';
import { TooltipBasic, TooltipSides, TooltipRich } from '@/components/demos/tooltip-variants';
import { DialogBasic, DialogDestructive, DialogWithForm } from '@/components/demos/dialog-variants';
import { TabsBasic, TabsWithIcons, TabsDisabled } from '@/components/demos/tabs-variants';
import { DropdownBasic, DropdownWithLabel, DropdownCheckboxesAndRadios } from '@/components/demos/dropdown-variants';
import { FeatureGridSection, FeatureSplitSection, FeatureBentoSection } from '@/components/demos/patterns/site/features';
import { FeatureCardGrid3UpDemo, FeatureCardGrid2UpDemo, FeatureCardGridLinksDemo } from '@/components/demos/blocks/feature-card-grid-variants';
import { UserRowBasicDemo, UserRowSelectableDemo, UserRowInteractiveDemo } from '@/components/demos/blocks/user-row-variants';
import { DataListPageFullDemo, DataListPageMinimalDemo, PageHeaderSoloDemo } from '@/components/demos/blocks/data-list-page-variants';
import { EmptyStateDnsDemo, EmptyStateInfoOnlyDemo, EmptyStateCompactDemo, EmptyStateLargeDemo } from '@/components/demos/blocks/empty-state-variants';
import { FormPanelGroupDemo, FormPanelFilterDemo, FormPanelInlineFooterDemo } from '@/components/demos/blocks/form-panel-variants';
import { HeroBgGridDemo, HeroBgSweepDemo } from '@/components/demos/patterns/site/backgrounds';
import { EmailPreview } from '@/components/docs/email-preview';
import { DSStack } from '@/components/docs/ds-stack';
import { DSStats } from '@/components/docs/ds-stats';
import { Changelog } from '@/components/docs/changelog';
import { Roadmap } from '@/components/docs/roadmap';
import { FoundationsOverview } from '@/components/docs/foundations-overview';

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
    VariantGrid,
    VariantCard,
    Button,
    Badge,
    DurationDemo,
    EasingDemo,
    SpinnerSizes,
    SpinnerColors,
    BadgeVariantsDemo,
    BadgeDotsDemo,
    BadgeShapesDemo,
    TagVariantsDemo,
    TagInputDemo,
    TagInputWithInputDemo,
    TagInputStatesDemo,
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
    KbdSizes,
    KbdSingleKeys,
    KbdSequences,
    TooltipBasic,
    TooltipSides,
    TooltipRich,
    DialogBasic,
    DialogDestructive,
    DialogWithForm,
    TabsBasic,
    TabsWithIcons,
    TabsDisabled,
    DropdownBasic,
    DropdownWithLabel,
    DropdownCheckboxesAndRadios,
    FeatureGridSection,
    FeatureSplitSection,
    FeatureBentoSection,
    FeatureCardGrid3UpDemo,
    FeatureCardGrid2UpDemo,
    FeatureCardGridLinksDemo,
    UserRowBasicDemo,
    UserRowSelectableDemo,
    UserRowInteractiveDemo,
    DataListPageFullDemo,
    DataListPageMinimalDemo,
    PageHeaderSoloDemo,
    EmptyStateDnsDemo,
    EmptyStateInfoOnlyDemo,
    EmptyStateCompactDemo,
    EmptyStateLargeDemo,
    FormPanelGroupDemo,
    FormPanelFilterDemo,
    FormPanelInlineFooterDemo,
    HeroBgGridDemo,
    HeroBgSweepDemo,
    EmailPreview,
    DSStack,
    DSStats,
    Changelog,
    Roadmap,
    FoundationsOverview,
    ...components,
  };
}
