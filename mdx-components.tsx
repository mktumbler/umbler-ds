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
import {
  BadgeVariantsDemo, BadgeDotsDemo, BadgeShapesDemo,
  BadgePillBrand, BadgePillSuccess, BadgePillWarning, BadgePillError, BadgePillNeutral,
  BadgeSolidBrand, BadgeSolidSuccess, BadgeSolidWarning, BadgeSolidError,
  BadgeTagNeutral, BadgeTagBrand, BadgeTagSuccess, BadgeTagWarning, BadgeTagError,
  BadgeDotBrand, BadgeDotSuccess, BadgeDotWarning, BadgeDotError, BadgeDotNeutral,
  BadgeIconSuccess, BadgeIconError, BadgeIconWarning, BadgeIconBrand, BadgeIconPending,
  BadgeInTableRow, BadgeNotificationCounter, BadgeFloatingOnCard, BadgeReleaseLog, BadgeTaskCard,
} from '@/components/demos/badge-variants';
import { TagVariantsDemo } from '@/components/demos/tag-variants';
import { TagInputDemo, TagInputWithInputDemo, TagInputStatesDemo } from '@/components/demos/tag-input-variants';
import {
  AvatarSizesDemo, AvatarFallbacksDemo, AvatarGroupDemo,
  AvatarXs, AvatarSm, AvatarMd, AvatarLg, AvatarXl,
  AvatarPhoto, AvatarInitials, AvatarIcon,
  AvatarGroupMax3, AvatarGroupSm,
} from '@/components/demos/avatar-variants';
import {
  CardVariantsDemo, CardCompositionDemo, CardProductsDemo, CardHorizontalDemo,
  CardDefault, CardElevated, CardGhost, CardOutline,
  CardStat, CardStatGrid, CardProduct, CardNotification, CardAgent,
  CardHorizontal, CardProductGrid,
} from '@/components/demos/card-variants';
import { CardAuroraRotationsDemo, CardAuroraPrismDemo, CardAuroraBentoDemo } from '@/components/demos/card-aurora-demo';
import { SeparatorDemo } from '@/components/demos/separator-kbd-variants';
import {
  InputStatesDemo, InputSizesDemo, InputSlotsDemo,
  InputDefault, InputError, InputSuccess, InputDisabled,
  InputSizeSm, InputSizeMd, InputSizeLg,
  InputIconLeft, InputIconRight, InputIconBoth, InputIconCurrency,
  InputPassword, InputSearch,
  InputLoginForm, InputProfileForm, InputSettingsRow,
} from '@/components/demos/input-variants';
import {
  AlertVariantsDemo, AlertSimpleDemo, AlertDismissibleDemo, AlertNoIconDemo,
  AlertInfo, AlertSuccess, AlertWarning, AlertError,
  AlertInfoSimple, AlertSuccessSimple, AlertWarningSimple, AlertErrorSimple,
  AlertDismissibleStatic, AlertInfoNoIcon, AlertErrorNoIcon,
} from '@/components/demos/alert-variants';
import {
  TextareaStatesDemo, TextareaResizeDemo,
  TextareaDefault, TextareaError, TextareaSuccess, TextareaDisabled,
  TextareaRows3, TextareaRows6, TextareaNoResize,
} from '@/components/demos/textarea-variants';
import {
  CheckboxStatesDemo, CheckboxGroupDemo, CheckboxErrorDemo, CheckboxIndeterminateDemo,
  CheckboxDefault, CheckboxChecked, CheckboxDisabled, CheckboxDisabledChecked,
  CheckboxError, CheckboxWithDescription, CheckboxIndeterminate,
  CheckboxGroupNotifications, CheckboxFormConsent, CheckboxFilterPanel,
} from '@/components/demos/checkbox-variants';
import {
  RadioGroupDemo, RadioOrientationDemo,
  RadioVerticalPlans, RadioHorizontalBilling, RadioVerticalRegion, RadioPricingSelector,
} from '@/components/demos/radio-variants';
import {
  ToggleSizesDemo, ToggleWithLabelDemo, ToggleStatesDemo,
  ToggleSm, ToggleMd, ToggleOn, ToggleOff, ToggleDisabledOn, ToggleDisabledOff,
  ToggleWithLabel, ToggleWithDescription, ToggleSettingsCard,
} from '@/components/demos/toggle-variants';
import {
  SelectStatesDemo, SelectSizesDemo,
  SelectDefault, SelectError, SelectSuccess, SelectDisabled,
  SelectSizeSm, SelectSizeMd, SelectSizeLg,
  SelectTableFilter, SelectDeployForm,
} from '@/components/demos/select-variants';
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
import { HeroBlockMinimal, HeroBlockDualCTA, HeroBlockSweep, HeroBlockWithBackground, HeroBlockSplit, HeroBlockAnnouncement } from '@/components/demos/blocks/hero-block-variants';
import { PricingTableUmblerDemo, PricingTableSaasDemo } from '@/components/demos/blocks/pricing-table-variants';
import { CTABannerPremium, CTABannerGlow, CTABannerSimple, CTABannerBrand } from '@/components/demos/blocks/cta-banner-variants';
import { FAQSectionProdutoDemo, FAQSectionPricingDemo, StatGrid4UpDemo, StatGrid3UpDemo, TestimonialCenteredDemo, TestimonialCardDemo } from '@/components/demos/blocks/section-blocks-variants';
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
    BadgeVariantsDemo, BadgeDotsDemo, BadgeShapesDemo,
    BadgePillBrand, BadgePillSuccess, BadgePillWarning, BadgePillError, BadgePillNeutral,
    BadgeSolidBrand, BadgeSolidSuccess, BadgeSolidWarning, BadgeSolidError,
    BadgeTagNeutral, BadgeTagBrand, BadgeTagSuccess, BadgeTagWarning, BadgeTagError,
    BadgeDotBrand, BadgeDotSuccess, BadgeDotWarning, BadgeDotError, BadgeDotNeutral,
    BadgeIconSuccess, BadgeIconError, BadgeIconWarning, BadgeIconBrand, BadgeIconPending,
    BadgeInTableRow, BadgeNotificationCounter, BadgeFloatingOnCard, BadgeReleaseLog, BadgeTaskCard,
    TagVariantsDemo,
    TagInputDemo,
    TagInputWithInputDemo,
    TagInputStatesDemo,
    AvatarSizesDemo,
    AvatarFallbacksDemo,
    AvatarGroupDemo,
    AvatarXs,
    AvatarSm,
    AvatarMd,
    AvatarLg,
    AvatarXl,
    AvatarPhoto,
    AvatarInitials,
    AvatarIcon,
    AvatarGroupMax3,
    AvatarGroupSm,
    CardVariantsDemo, CardCompositionDemo, CardProductsDemo, CardHorizontalDemo,
    CardDefault, CardElevated, CardGhost, CardOutline,
    CardStat, CardStatGrid, CardProduct, CardNotification, CardAgent,
    CardHorizontal, CardProductGrid,
    CardAuroraRotationsDemo,
    CardAuroraPrismDemo,
    CardAuroraBentoDemo,
    SeparatorDemo,
    InputStatesDemo, InputSizesDemo, InputSlotsDemo,
    InputDefault, InputError, InputSuccess, InputDisabled,
    InputSizeSm, InputSizeMd, InputSizeLg,
    InputIconLeft, InputIconRight, InputIconBoth, InputIconCurrency,
    InputPassword, InputSearch,
    InputLoginForm, InputProfileForm, InputSettingsRow,
    AlertVariantsDemo,
    AlertSimpleDemo,
    AlertDismissibleDemo,
    AlertNoIconDemo,
    AlertInfo,
    AlertSuccess,
    AlertWarning,
    AlertError,
    AlertInfoSimple,
    AlertSuccessSimple,
    AlertWarningSimple,
    AlertErrorSimple,
    AlertDismissibleStatic,
    AlertInfoNoIcon,
    AlertErrorNoIcon,
    TextareaStatesDemo,
    TextareaResizeDemo,
    TextareaDefault,
    TextareaError,
    TextareaSuccess,
    TextareaDisabled,
    TextareaRows3,
    TextareaRows6,
    TextareaNoResize,
    CheckboxStatesDemo,
    CheckboxGroupDemo,
    CheckboxErrorDemo,
    CheckboxIndeterminateDemo,
    CheckboxDefault,
    CheckboxChecked,
    CheckboxDisabled,
    CheckboxDisabledChecked,
    CheckboxError,
    CheckboxWithDescription,
    CheckboxIndeterminate,
    CheckboxGroupNotifications,
    CheckboxFormConsent,
    CheckboxFilterPanel,
    RadioGroupDemo,
    RadioOrientationDemo,
    RadioVerticalPlans,
    RadioHorizontalBilling,
    RadioVerticalRegion,
    RadioPricingSelector,
    ToggleSizesDemo,
    ToggleWithLabelDemo,
    ToggleStatesDemo,
    ToggleSm,
    ToggleMd,
    ToggleOn,
    ToggleOff,
    ToggleDisabledOn,
    ToggleDisabledOff,
    ToggleWithLabel,
    ToggleWithDescription,
    ToggleSettingsCard,
    SelectStatesDemo,
    SelectSizesDemo,
    SelectDefault,
    SelectError,
    SelectSuccess,
    SelectDisabled,
    SelectSizeSm,
    SelectSizeMd,
    SelectSizeLg,
    SelectTableFilter,
    SelectDeployForm,
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
    HeroBlockMinimal,
    HeroBlockDualCTA,
    HeroBlockSweep,
    HeroBlockWithBackground,
    HeroBlockSplit,
    HeroBlockAnnouncement,
    PricingTableUmblerDemo,
    PricingTableSaasDemo,
    CTABannerPremium,
    CTABannerGlow,
    CTABannerSimple,
    CTABannerBrand,
    FAQSectionProdutoDemo,
    FAQSectionPricingDemo,
    StatGrid4UpDemo,
    StatGrid3UpDemo,
    TestimonialCenteredDemo,
    TestimonialCardDemo,
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
