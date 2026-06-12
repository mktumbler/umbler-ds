/**
 * Manifesto do registry shadcn do Umbler DS.
 *
 * Esta é a ÚNICA fonte de metadados do registry. O código-fonte NUNCA é
 * copiado aqui — o gerador (build-registry.mjs) lê os arquivos .tsx reais
 * em disco e injeta o conteúdo (`content`) automaticamente. Assim os .tsx
 * permanecem como fonte da verdade e os JSONs nunca divergem.
 *
 * Para adicionar um componente novo: declare uma entrada abaixo apontando
 * para o(s) arquivo(s)-fonte. O gerador faz o resto.
 *
 * Campos por item:
 *   name        - slug usado em /r/<name> e no `npx shadcn add`
 *   type        - registry:ui (componente) | registry:lib (utilitário)
 *   description - descrição curta exibida pelo CLI
 *   files       - caminhos relativos à raiz do projeto (lidos do disco)
 *   dependencies         - pacotes npm que o consumidor precisa instalar
 *   registryDependencies - outros itens DESTE registry (por nome; o gerador
 *                          resolve para URLs completas)
 */

/** Base pública do registry — usada para resolver registryDependencies. */
export const REGISTRY_BASE = 'https://umbler-ds.vercel.app/r';

const CVA = 'class-variance-authority';
const PHOSPHOR = '@phosphor-icons/react';

/** @type {Array<{name:string,type?:string,description:string,files:string[],dependencies?:string[],registryDependencies?:string[]}>} */
export const items = [
  // --- Utilitário compartilhado (cn customizado com tokens de texto do DS) ---
  {
    name: 'utils',
    type: 'registry:lib',
    description:
      'cn() — clsx + tailwind-merge customizado para entender os tokens de texto do DS (text-display-*, text-body-*, text-caption) como font-size.',
    files: ['lib/utils.ts'],
    dependencies: ['clsx', 'tailwind-merge'],
  },

  // --- Tokens da marca (cores, tipografia, espaçamento, sombras, motion) ---
  {
    name: 'tokens',
    type: 'registry:file',
    description:
      'Tokens da marca Umbler em CSS (@theme do Tailwind v4): cores, tipografia, espaçamento, radius, sombras, motion + tokens semânticos light/dark e utilitário .eyebrow. Importe no CSS de entrada do projeto.',
    files: [{ src: 'app/tokens.css', target: 'app/tokens.css', type: 'registry:file' }],
  },

  // --- Onda 2 — primitivos ---
  {
    name: 'spinner',
    description: 'Indicador de carregamento em arco. Usa currentColor — controle a cor via text-* no pai.',
    files: ['components/ui/spinner.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'badge',
    description: 'Selo compacto de status com variantes de cor, tamanhos e modo dot.',
    files: ['components/ui/badge.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'tag',
    description: 'Etiqueta com variantes, tamanhos e modo removível (input de tags).',
    files: ['components/ui/tag.tsx'],
    dependencies: [CVA, PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'tag-input',
    description: 'Campo de formulário multi-tag, dimensionado igual ao Input, com estados de validação.',
    files: ['components/ui/tag-input.tsx'],
    dependencies: [CVA, PHOSPHOR],
    registryDependencies: ['utils', 'tag'],
  },
  {
    name: 'avatar',
    description: 'Avatar com imagem, fallback de iniciais/ícone, tamanhos e agrupamento.',
    files: ['components/ui/avatar.tsx'],
    dependencies: [CVA, PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'separator',
    description: 'Divisor horizontal/vertical com variantes de espessura e cor.',
    files: ['components/ui/separator.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'section-header',
    description:
      'Cabeçalho canônico de seção: eyebrow + h2 (text-display) + sub. Use quando compor uma seção fora dos blocks que já trazem header próprio (FAQ/Hero).',
    files: ['components/ui/section-header.tsx'],
    registryDependencies: ['utils', 'tokens'],
  },
  {
    name: 'kbd',
    description: 'Representação visual de teclas e atalhos. Inclui KbdSequence para combinações.',
    files: ['components/ui/kbd.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },

  // --- Onda 3 — inputs ---
  {
    name: 'input',
    description: 'Campo de texto com estados, tamanhos, slots de prefixo/sufixo e sub-componentes InputLabel, InputHint, InputGroup.',
    files: ['components/ui/input.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'textarea',
    description: 'Área de texto multilinha com estados e controle de resize. Reusa InputLabel/InputHint/InputGroup do input.',
    files: ['components/ui/textarea.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils', 'input'],
  },
  {
    name: 'select',
    description: 'Select nativo estilizado com estados, tamanhos e ícone de caret.',
    files: ['components/ui/select.tsx'],
    dependencies: [CVA, PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'checkbox',
    description: 'Checkbox com estados checked/indeterminate, descrição e estado de erro.',
    files: ['components/ui/checkbox.tsx'],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'radio',
    description: 'Radio group com orientação horizontal/vertical.',
    files: ['components/ui/radio.tsx'],
    registryDependencies: ['utils'],
  },
  {
    name: 'toggle',
    description: 'Switch on/off com tamanhos, label e estados.',
    files: ['components/ui/toggle.tsx'],
    registryDependencies: ['utils'],
  },

  // --- Onda 4 — containers e feedback ---
  {
    name: 'card',
    description: 'Container de conteúdo com 4 variantes (default, elevated, ghost, outline) e sub-componentes CardHeader, CardTitle, CardDescription, CardContent, CardFooter.',
    files: ['components/ui/card.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'card-aurora',
    description: 'Card decorativo com efeito aurora/glow gradiente. Variações de rotação, modo prism e layout bento.',
    files: ['components/ui/card-aurora.tsx'],
    registryDependencies: ['utils'],
  },
  {
    name: 'alert',
    description: 'Alerta com variantes (info, success, warning, error), modo dismissível e ícones.',
    files: ['components/ui/alert.tsx'],
    dependencies: [CVA, PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'skeleton',
    description: 'Placeholder de carregamento (shimmer) com primitivos para compor cards/listas.',
    files: ['components/ui/skeleton.tsx'],
    registryDependencies: ['utils'],
  },
  {
    name: 'progress',
    description: 'Indicador de progresso linear (Radix) e circular (SVG). Modos determinado/indeterminado, tones semânticos.',
    files: ['components/ui/progress.tsx'],
    dependencies: [CVA, '@radix-ui/react-progress'],
    registryDependencies: ['utils'],
  },
  {
    name: 'toast',
    description: 'Notificação transitória empilhável sobre sonner. Helpers success/error/warning/info, ações e loading com promise.',
    files: ['components/ui/toast.tsx'],
    dependencies: ['sonner', PHOSPHOR],
    registryDependencies: ['utils'],
  },
  // --- Onda 5 — overlays ---
  {
    name: 'tooltip',
    description: 'Tooltip acessível sobre Radix UI. Texto auxiliar exibido no hover/focus com posicionamento automático.',
    files: ['components/ui/tooltip.tsx'],
    dependencies: ['@radix-ui/react-tooltip'],
    registryDependencies: ['utils'],
  },
  {
    name: 'dialog',
    description: 'Janela modal acessível sobre Radix Dialog. Inclui DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose.',
    files: ['components/ui/dialog.tsx'],
    dependencies: ['@radix-ui/react-dialog', PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'tabs',
    description: 'Tabs acessíveis sobre Radix Tabs. Segmented control por padrão; customizável para underline via className.',
    files: ['components/ui/tabs.tsx'],
    dependencies: ['@radix-ui/react-tabs'],
    registryDependencies: ['utils'],
  },
  {
    name: 'dropdown',
    description: 'Menu de ações sobre Radix Dropdown Menu. Suporta itens, labels, separadores, checkbox, radio, submenus e atalhos visuais.',
    files: ['components/ui/dropdown.tsx'],
    dependencies: ['@radix-ui/react-dropdown-menu', PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'popover',
    description: 'Overlay contextual com conteúdo rico sobre Radix Popover. Container clicável por dentro — ideal para mini-forms, picks e ações secundárias com explicação.',
    files: ['components/ui/popover.tsx'],
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: ['utils'],
  },
  {
    name: 'accordion',
    description: 'Seções expansíveis/colapsáveis sobre Radix Accordion. Modos single (uma aberta) e multiple, animação de altura via Radix vars.',
    files: ['components/ui/accordion.tsx'],
    dependencies: ['@radix-ui/react-accordion', PHOSPHOR],
    registryDependencies: ['utils'],
  },

  // --- Onda 6 — navigation ---
  {
    name: 'breadcrumbs',
    description: 'Trilha de navegação hierárquica. Compound (BreadcrumbItem, BreadcrumbCurrent, BreadcrumbSeparator) com separador customizável.',
    files: ['components/ui/breadcrumbs.tsx'],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'pagination',
    description: 'Navegação entre páginas com ellipsis dinâmica. Controlado via page/onPageChange — fácil de sincronizar com URL.',
    files: ['components/ui/pagination.tsx'],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils'],
  },

  // --- Onda 7 — data display ---
  {
    name: 'table',
    description: 'Tabela semântica em compound (Table/Header/Body/Row/Head/Cell/Caption/Footer). Variantes zebra, dense, bordered, interactive.',
    files: ['components/ui/table.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'timeline',
    description: 'Feed de eventos no tempo. Compound (Timeline/Item/Dot/Content/Title/Time) com dot semântico (default/brand/success/warning/error), suporte a ícones e variante compact.',
    files: ['components/ui/timeline.tsx'],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'list',
    description: 'Lista vertical genérica em compound (List/Item/Leading/Content/Title/Description/Trailing). Variantes bordered, dividers, dense e interactive.',
    files: ['components/ui/list.tsx'],
    registryDependencies: ['utils'],
  },
  {
    name: 'sheet',
    description: 'Painel lateral (drawer) sobre Radix Dialog. Desliza de qualquer borda (right/left/top/bottom) e inclui Header/Body/Footer/Close. Usa keyframes próprios de slide.',
    files: ['components/ui/sheet.tsx'],
    dependencies: [CVA, '@radix-ui/react-dialog', PHOSPHOR],
    registryDependencies: ['utils'],
  },

  // --- Botão (depende de spinner + arquivo button-variants) ---
  {
    name: 'button',
    description: 'Botão Umbler DS — 5 variantes (primary, secondary, ghost, outline, danger), 4 tamanhos, loading e icon-only.',
    files: ['components/ui/button.tsx', 'components/ui/button-variants.ts'],
    dependencies: [CVA],
    registryDependencies: ['utils', 'spinner'],
  },

  // --- Marca / patterns ---
  {
    name: 'umbler-logo',
    description: 'Logo Umbler em SVG, adaptável a light/dark via CSS variables.',
    files: ['components/ui/umbler-logo.tsx'],
    registryDependencies: ['utils'],
  },
  {
    name: 'hero-background',
    description: 'Fundo de hero com glow SVG (blur + mix-blend-mode). 8 variantes de blob para seções de marketing.',
    files: ['components/ui/hero-background.tsx'],
    registryDependencies: ['utils'],
  },

  // --- Blocks — organismos compostos (instaláveis avulso; fora do agregador umbler-ui) ---
  // Cada bloco cai em components/blocks/<nome>.tsx e puxa os componentes do DS que usa.
  {
    name: 'hero-block',
    type: 'registry:block',
    description: 'Hero de marketing com eyebrow, título, subtítulo, CTAs e mídia. Variantes de alinhamento e layout split/centered.',
    files: [{ src: 'components/blocks/hero-block.tsx', target: 'components/blocks/hero-block.tsx', type: 'registry:component' }],
    registryDependencies: ['utils'],
  },
  {
    name: 'cta-banner',
    type: 'registry:block',
    description: 'Banner de chamada para ação com variantes premium/glow/simple. Faixa de conversão para fim de página.',
    files: [{ src: 'components/blocks/cta-banner.tsx', target: 'components/blocks/cta-banner.tsx', type: 'registry:component' }],
    registryDependencies: ['utils'],
  },
  {
    name: 'logo-cloud',
    type: 'registry:block',
    description: 'Logos de clientes para social proof em landings. Variantes grid (estática) e marquee (rolagem infinita CSS-only, pausa no hover). Requer os keyframes marquee de tokens.css (item tokens).',
    files: [{ src: 'components/blocks/logo-cloud.tsx', target: 'components/blocks/logo-cloud.tsx', type: 'registry:component' }],
    registryDependencies: ['utils', 'tokens'],
  },
  {
    name: 'pricing-table',
    type: 'registry:block',
    description: 'Tabela de planos com destaque de plano popular, lista de features e CTA por tier.',
    files: [{ src: 'components/blocks/pricing-table.tsx', target: 'components/blocks/pricing-table.tsx', type: 'registry:component' }],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils', 'badge', 'button'],
  },
  {
    name: 'faq-section',
    type: 'registry:block',
    description: 'Seção de perguntas frequentes em cima do Accordion, com título e copy de apoio.',
    files: [{ src: 'components/blocks/faq-section.tsx', target: 'components/blocks/faq-section.tsx', type: 'registry:component' }],
    registryDependencies: ['utils', 'accordion', 'section-header'],
  },
  {
    name: 'stat-grid',
    type: 'registry:block',
    description: 'Grade de métricas/indicadores (número + label + delta) para landings e dashboards.',
    files: [{ src: 'components/blocks/stat-grid.tsx', target: 'components/blocks/stat-grid.tsx', type: 'registry:component' }],
    registryDependencies: ['utils'],
  },
  {
    name: 'testimonial-block',
    type: 'registry:block',
    description: 'Depoimento de cliente com citação, autor, avatar e logo. Variantes de destaque.',
    files: [{ src: 'components/blocks/testimonial-block.tsx', target: 'components/blocks/testimonial-block.tsx', type: 'registry:component' }],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'feature-card-grid',
    type: 'registry:block',
    description: 'Grade de cards de feature (ícone + título + descrição) em cima do Card. Variantes de coluna e ênfase.',
    files: [{ src: 'components/blocks/feature-card-grid.tsx', target: 'components/blocks/feature-card-grid.tsx', type: 'registry:component' }],
    dependencies: [CVA],
    registryDependencies: ['utils', 'card'],
  },
  {
    name: 'empty-state',
    type: 'registry:block',
    description: 'Estado vazio com ícone/ilustração, título, descrição e ação. Variantes de tamanho e a prop `as`.',
    files: [{ src: 'components/blocks/empty-state.tsx', target: 'components/blocks/empty-state.tsx', type: 'registry:component' }],
    dependencies: [CVA],
    registryDependencies: ['utils'],
  },
  {
    name: 'form-panel',
    type: 'registry:block',
    description: 'Painel de formulário em cima do Card — header, corpo de campos e footer de ações.',
    files: [{ src: 'components/blocks/form-panel.tsx', target: 'components/blocks/form-panel.tsx', type: 'registry:component' }],
    registryDependencies: ['utils', 'card'],
  },
  {
    name: 'user-row',
    type: 'registry:block',
    description: 'Linha de usuário/contato com avatar, nome, metadados, checkbox de seleção e ações (padrão Umbler Talk).',
    files: [{ src: 'components/blocks/user-row.tsx', target: 'components/blocks/user-row.tsx', type: 'registry:component' }],
    registryDependencies: ['utils', 'avatar', 'checkbox'],
  },
  {
    name: 'feature-split',
    type: 'registry:block',
    description: 'Seção problema/solução em 2 colunas: texto (eyebrow, título, body, bullets, CTA) à esquerda, visual (slot livre) à direita. Padrão das LPs Umbler — alterne `reverse` entre seções consecutivas pra criar ritmo.',
    files: [{ src: 'components/blocks/feature-split.tsx', target: 'components/blocks/feature-split.tsx', type: 'registry:component' }],
    dependencies: [PHOSPHOR],
    registryDependencies: ['utils'],
  },
  {
    name: 'site-footer',
    type: 'registry:block',
    description: 'Rodapé de site/LP com logo, tagline, colunas de links, social e barra inferior de copyright/legal. Props-driven, dark por padrão.',
    files: [{ src: 'components/blocks/site-footer.tsx', target: 'components/blocks/site-footer.tsx', type: 'registry:component' }],
    registryDependencies: ['utils'],
  },
  {
    name: 'data-list-page',
    type: 'registry:block',
    description: 'Composto de página de listagem: header com título/ações + corpo de lista/tabela. Esqueleto reutilizável de telas CRUD.',
    files: [{ src: 'components/blocks/data-list-page.tsx', target: 'components/blocks/data-list-page.tsx', type: 'registry:component' }],
    registryDependencies: ['utils'],
  },
];

/** Itens do tipo registry:ui que entram no agregador "umbler-ui". */
export const AGGREGATOR = {
  name: 'umbler-ui',
  type: 'registry:ui',
  description: 'Instala todo o Umbler DS de uma vez: componentes, utilitários e tokens. Use para bootstrapar um projeto novo.',
};
