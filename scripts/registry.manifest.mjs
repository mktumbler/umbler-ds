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
    files: [{ src: 'app/tokens.css', target: 'tokens.css', type: 'registry:file' }],
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
];

/** Itens do tipo registry:ui que entram no agregador "umbler-ui". */
export const AGGREGATOR = {
  name: 'umbler-ui',
  type: 'registry:ui',
  description: 'Instala todo o Umbler DS de uma vez: componentes, utilitários e tokens. Use para bootstrapar um projeto novo.',
};
