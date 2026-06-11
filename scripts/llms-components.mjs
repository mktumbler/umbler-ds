/**
 * llms-components.mjs — corpo de cada componente no llms.txt.
 *
 * Map slug → bloco markdown (sem o `### <Pascal>` no topo — o gerador
 * cuida do header). Cada bloco deve conter:
 *   • ```tsx code block``` mostrando import + uso típico (variantes
 *     importantes, compound se houver)
 *   • lista de props/notas
 *
 * Mantém o llms.txt útil pra agentes de IA: foco em "como usar" + tipos
 * de variantes — não documentação de design.
 *
 * Para adicionar um componente novo: declare uma entry abaixo. Se faltar,
 * o gerador (`build-llms.mjs`) reclama e falha.
 */

/** @type {Record<string,string>} */
export const llmsBlocks = {
  // ── Onda 2 — primitivos ──────────────────────────────────────────────────

  spinner: `\`\`\`tsx
import { Spinner } from '@/components/ui/spinner';

<Spinner size="md" className="text-brand-400" />

// Inline em botão
<button disabled>
  <Spinner size="sm" />
  Salvando...
</button>
\`\`\`
- size: \`sm\` | \`md\` | \`lg\` | \`xl\` — padrão: \`md\`
- Usa \`currentColor\` — controle a cor via \`className\` (text-*)`,

  badge: `\`\`\`tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="brand">Novo</Badge>
<Badge variant="success" dot>Online</Badge>
\`\`\`
- variant: \`brand\` | \`success\` | \`warning\` | \`error\` | \`neutral\` — padrão: \`neutral\`
- dot: boolean — adiciona ponto colorido à esquerda`,

  tag: `\`\`\`tsx
import { Tag } from '@/components/ui/tag';

<Tag variant="brand">React</Tag>
<Tag variant="neutral" onRemove={() => {}}>Removível</Tag>
\`\`\`
- variant: \`brand\` | \`success\` | \`warning\` | \`error\` | \`neutral\` — padrão: \`neutral\`
- size: \`sm\` | \`md\` — padrão: \`md\`
- onRemove: () => void — exibe botão X para remoção`,

  'tag-input': `\`\`\`tsx
'use client';
import { useState } from 'react';
import { TagInput } from '@/components/ui/tag-input';

const [tags, setTags] = useState(['Next.js']);
<TagInput value={tags} onChange={setTags} placeholder="Adicionar tag…" />
\`\`\`
- Campo de formulário multi-tag (controlado). Dimensionado igual ao Input.
- value: string[] / onChange: (tags: string[]) => void — controlado
- size: \`sm\` | \`md\` | \`lg\` — padrão: \`md\` (mesma altura do Input)
- state: \`default\` | \`error\` | \`success\` — borda + ring de validação
- tagVariant: cor das tags (padrão \`brand\`); dedupe (padrão true); disabled
- Enter/vírgula adiciona; Backspace com campo vazio remove a última`,

  avatar: `\`\`\`tsx
import { Avatar, AvatarGroup } from '@/components/ui/avatar';

<Avatar src="/foto.jpg" name="Ana Lima" size="md" />
<Avatar name="Carlos" size="lg" />   {/* fallback iniciais */}
<AvatarGroup avatars={[...]} max={3} size="sm" />
\`\`\`
- size: \`xs\` | \`sm\` | \`md\` | \`lg\` | \`xl\` — padrão: \`md\`
- src: string (opcional) — fallback automático para iniciais do \`name\` ou ícone
- AvatarGroup: avatars[] com src/name + max (número máximo antes do +N)`,

  separator: `\`\`\`tsx
import { Separator } from '@/components/ui/separator';

<Separator />
<Separator orientation="vertical" className="h-6" />
\`\`\`
- orientation: \`horizontal\` | \`vertical\` — padrão: \`horizontal\``,

  kbd: `\`\`\`tsx
import { Kbd, KbdSequence } from '@/components/ui/kbd';

<Kbd>⌘</Kbd>
<KbdSequence keys={['⌘', 'K']} />              {/* combinação tipo command palette */}
<KbdSequence keys={['Ctrl', 'Shift', 'P']} separator="+" />
\`\`\`
- Kbd size: \`sm\` | \`md\` | \`lg\` — padrão: \`md\`
- KbdSequence: keys[], separator \`' '\` (visual) ou \`'+'\` (soma)`,

  // ── Onda 3 — inputs ──────────────────────────────────────────────────────

  input: `\`\`\`tsx
import { Input, InputLabel, InputHint, InputGroup } from '@/components/ui/input';

<InputGroup>
  <InputLabel htmlFor="email">E-mail</InputLabel>
  <Input id="email" type="email" placeholder="você@umbler.com" size="md" />
  <InputHint>Usado para login</InputHint>
</InputGroup>

<Input state="error" />
<Input prefix={<Icon />} suffix="@umbler.com" />
\`\`\`
- size: \`sm\` | \`md\` | \`lg\` — padrão: \`md\`
- state: \`default\` | \`error\` | \`success\` | \`disabled\`
- prefix / suffix: ReactNode — slots laterais`,

  textarea: `\`\`\`tsx
import { Textarea } from '@/components/ui/textarea';
import { InputLabel, InputHint, InputGroup } from '@/components/ui/input';

<InputGroup>
  <InputLabel htmlFor="bio">Bio</InputLabel>
  <Textarea id="bio" rows={4} resize="vertical" />
</InputGroup>
\`\`\`
- resize: \`none\` | \`vertical\` | \`horizontal\` | \`both\` — padrão: \`vertical\`
- state: \`default\` | \`error\` | \`success\` | \`disabled\`
- Reusa InputLabel/InputHint/InputGroup do Input`,

  select: `\`\`\`tsx
import { Select } from '@/components/ui/select';

<Select size="md" state="default">
  <option value="">Escolha...</option>
  <option value="a">Opção A</option>
</Select>
\`\`\`
- size: \`sm\` | \`md\` | \`lg\` — padrão: \`md\`
- state: \`default\` | \`error\` | \`disabled\``,

  checkbox: `\`\`\`tsx
import { Checkbox } from '@/components/ui/checkbox';

<Checkbox label="Aceito os termos" />
<Checkbox label="Com descrição" description="Texto explicativo" />
{/* indeterminate via ref nativo */}
<Checkbox ref={ref} label="Parcial" />  {/* ref.current.indeterminate = true */}
<Checkbox state="error" label="Campo obrigatório" />
\`\`\`
- label: string (opcional)
- description: string (opcional) — texto abaixo do label
- state: \`default\` | \`error\` — padrão: \`default\`
- Aceita todos os atributos de \`InputHTMLAttributes<HTMLInputElement>\`
- \`indeterminate\` é atributo nativo do input, definido via ref`,

  radio: `\`\`\`tsx
import { Radio, RadioGroup } from '@/components/ui/radio';

<RadioGroup label="Plano" orientation="vertical">
  <Radio name="plano" value="starter" label="Starter" />
  <Radio name="plano" value="pro" label="Pro" description="Mais recursos" />
</RadioGroup>
\`\`\`
- \`Radio\`: estende \`InputHTMLAttributes<HTMLInputElement>\` + \`label?\` + \`description?\`
- \`RadioGroup\`: \`label?\` + \`orientation?: 'vertical' | 'horizontal'\` — padrão: \`vertical\``,

  toggle: `\`\`\`tsx
import { Toggle } from '@/components/ui/toggle';

<Toggle label="Notificações" size="md" defaultChecked />
<Toggle checked={active} onChange={setActive} description="Texto explicativo" />
\`\`\`
- size: \`sm\` | \`md\` — padrão: \`md\`
- label: string (opcional)
- description: string (opcional)
- checked / defaultChecked / onChange(checked: boolean): controle controlado/não-controlado`,

  // ── Onda 4 — containers & feedback ───────────────────────────────────────

  card: `\`\`\`tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card variant="default">
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição breve</CardDescription>
  </CardHeader>
  <CardContent>conteúdo</CardContent>
  <CardFooter><Button>Ação</Button></CardFooter>
</Card>
\`\`\`
- variant: \`default\` | \`elevated\` | \`ghost\` | \`outline\` — padrão: \`default\``,

  'card-aurora': `\`\`\`tsx
import { CardAurora } from '@/components/ui/card-aurora';

<CardAurora icon={<Globe size={22} />} title="Feature" description="Texto" blob="sweep" rotation="default" />
\`\`\`
- blob: \`sweep\` | \`prism\` — padrão: \`sweep\`
- rotation: \`default\` | \`diagonal\` | \`spin\` — padrão: \`default\`
- icon: ReactNode — ícone no topo do card
- title, description: string`,

  alert: `\`\`\`tsx
import { Alert } from '@/components/ui/alert';

<Alert variant="info" title="Atenção">Mensagem informativa.</Alert>
<Alert variant="success" title="Salvo!" onClose={() => {}} />
<Alert variant="error" icon={false} title="Erro">Algo falhou.</Alert>
\`\`\`
- variant: \`info\` | \`success\` | \`warning\` | \`error\` — padrão: \`info\`
- title: string (opcional) — aparece em negrito acima do conteúdo
- icon: boolean — exibe ícone lateral — padrão: \`true\`
- onClose: () => void — exibe botão X quando definido
- children: ReactNode — corpo da mensagem`,

  skeleton: `\`\`\`tsx
import { Skeleton, SkeletonText, SkeletonAvatar } from '@/components/ui/skeleton';

<Skeleton className="h-4 w-48" />
<SkeletonText lines={3} />
<SkeletonAvatar size="md" />
\`\`\`
- Skeleton: base com shimmer — use className para definir dimensões
- SkeletonText: lines (número de linhas simuladas)
- SkeletonAvatar: size matching avatar sizes`,

  progress: `\`\`\`tsx
import { Progress, ProgressCircle } from '@/components/ui/progress';

<Progress value={64} />                          {/* determinado */}
<Progress value={92} tone="warning" />
<Progress />                                     {/* indeterminado (omita value) */}

<ProgressCircle value={64} size="md" showLabel />
<ProgressCircle size="lg" />                     {/* indeterminado */}
\`\`\`
- value: number | null — omita/null para modo indeterminado
- max: number — padrão: 100
- size: \`sm\` | \`md\` | \`lg\` — padrão: \`md\`
- tone: \`brand\` | \`success\` | \`warning\` | \`error\` — padrão: \`brand\`
- ProgressCircle: \`showLabel\` exibe % no centro`,

  toast: `\`\`\`tsx
// 1) montar o container UMA vez na raiz da app (layout.tsx)
import { Toaster } from '@/components/ui/toast';
<Toaster />

// 2) disparar de qualquer lugar
import { toast } from '@/components/ui/toast';

toast.success('Salvo com sucesso');
toast.error('Falhou', { description: 'Tente novamente' });
toast.warning('Quota quase no limite');
toast.info('Sincronizando...');

// com ação
toast('Item removido', {
  action: { label: 'Desfazer', onClick: () => restore() },
});

// promise: loading → success | error automático
toast.promise(saveDoc(), {
  loading: 'Salvando...',
  success: 'Pronto',
  error: 'Erro ao salvar',
});
\`\`\`
- Construído sobre \`sonner\` — re-exporta o helper \`toast()\` tipado
- Posição default: \`bottom-right\`, duração 4s, com botão de fechar
- Cores semânticas (success/error/warning/info) casadas com tokens do DS`,

  // ── Onda 5 — overlays ────────────────────────────────────────────────────

  tooltip: `\`\`\`tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

// 1) envolver a app/seção UMA vez
<TooltipProvider>
  ...

  <Tooltip>
    <TooltipTrigger asChild><Button iconOnly><Info /></Button></TooltipTrigger>
    <TooltipContent side="top">Texto auxiliar</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`
- side: \`top\` | \`right\` | \`bottom\` | \`left\` — padrão: \`top\`
- Construído sobre Radix UI — posicionamento auto, accessible por padrão
- \`TooltipTrigger asChild\` evita botão extra no DOM`,

  dialog: `\`\`\`tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild><Button>Abrir</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar</DialogTitle>
      <DialogDescription>Essa ação não pode ser desfeita.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="secondary">Cancelar</Button></DialogClose>
      <Button variant="danger">Excluir</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`
- Construído sobre Radix Dialog — overlay, foco preso, ESC fecha
- Modal centralizado com animação fade+scale. Para drawer lateral use \`Sheet\``,

  tabs: `\`\`\`tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Visão geral</TabsTrigger>
    <TabsTrigger value="metrics">Métricas</TabsTrigger>
    <TabsTrigger value="settings">Ajustes</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="metrics">...</TabsContent>
  <TabsContent value="settings">...</TabsContent>
</Tabs>
\`\`\`
- Construído sobre Radix Tabs — gerencia foco/setas por padrão
- Estilo segmented control. Para underline tradicional, sobrescreva via className`,

  dropdown: `\`\`\`tsx
import {
  Dropdown, DropdownTrigger, DropdownContent,
  DropdownItem, DropdownLabel, DropdownSeparator,
  DropdownCheckboxItem, DropdownRadioGroup, DropdownRadioItem,
  DropdownSub, DropdownSubTrigger, DropdownSubContent,
  DropdownShortcut,
} from '@/components/ui/dropdown';

<Dropdown>
  <DropdownTrigger asChild><Button variant="secondary">Ações</Button></DropdownTrigger>
  <DropdownContent>
    <DropdownLabel>Conta</DropdownLabel>
    <DropdownItem>Editar perfil <DropdownShortcut>⌘E</DropdownShortcut></DropdownItem>
    <DropdownCheckboxItem checked>Receber e-mails</DropdownCheckboxItem>
    <DropdownSeparator />
    <DropdownSub>
      <DropdownSubTrigger>Mais</DropdownSubTrigger>
      <DropdownSubContent>
        <DropdownItem>Exportar</DropdownItem>
      </DropdownSubContent>
    </DropdownSub>
  </DropdownContent>
</Dropdown>
\`\`\`
- Construído sobre Radix Dropdown Menu — teclado completo, foco preso
- Suporta itens, labels, separadores, checkbox, radio, submenus, atalhos visuais`,

  popover: `\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

<Popover>
  <PopoverTrigger asChild><Button variant="secondary">Configurar</Button></PopoverTrigger>
  <PopoverContent align="start">
    <h4 className="text-body font-semibold text-foreground">Notificações</h4>
    <p className="text-caption text-foreground-muted">Mini-form, filtros, picks...</p>
  </PopoverContent>
</Popover>
\`\`\`
- side: \`top\` | \`right\` | \`bottom\` | \`left\` — padrão: \`bottom\`
- align: \`start\` | \`center\` | \`end\` — padrão: \`center\`
- Construído sobre Radix Popover. Container clicável (diferente do Tooltip)
- Ideal para mini-forms, filtros, ações secundárias com explicação`,

  accordion: `\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

<Accordion type="single" collapsible defaultValue="a">
  <AccordionItem value="a">
    <AccordionTrigger>Pergunta 1</AccordionTrigger>
    <AccordionContent>Resposta 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Pergunta 2</AccordionTrigger>
    <AccordionContent>Resposta 2</AccordionContent>
  </AccordionItem>
</Accordion>

{/* várias abertas */}
<Accordion type="multiple">...</Accordion>
\`\`\`
- type: \`single\` (uma aberta por vez) | \`multiple\` — obrigatório
- collapsible: boolean — em \`single\`, permite fechar a aberta
- Construído sobre Radix Accordion — animação de altura via vars do Radix`,

  sheet: `\`\`\`tsx
import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription,
  SheetBody, SheetFooter, SheetClose,
} from '@/components/ui/sheet';

<Sheet>
  <SheetTrigger asChild><Button>Abrir painel</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Detalhes da conversa</SheetTitle>
      <SheetDescription>Resumo, anotações e ações.</SheetDescription>
    </SheetHeader>
    <SheetBody>conteúdo rolável</SheetBody>
    <SheetFooter>
      <SheetClose asChild><Button variant="secondary">Fechar</Button></SheetClose>
      <Button>Salvar</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
\`\`\`
- side: \`right\` | \`left\` | \`top\` | \`bottom\` — padrão: \`right\`
- Construído sobre Radix Dialog (mesma a11y do modal) com slide-in por borda
- \`SheetBody\` já tem overflow-y-auto — Header/Footer ficam fixos`,

  // ── Onda 6 — navigation ──────────────────────────────────────────────────

  breadcrumbs: `\`\`\`tsx
import {
  Breadcrumbs, BreadcrumbItem, BreadcrumbCurrent, BreadcrumbSeparator,
} from '@/components/ui/breadcrumbs';

<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem href="/produtos">Produtos</BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbCurrent>Detalhe</BreadcrumbCurrent>
</Breadcrumbs>
\`\`\`
- Compound semântico em \`<nav aria-label="Breadcrumb">\` + \`<ol>\`
- BreadcrumbItem: \`href\` ou onClick (vira link/botão real)
- BreadcrumbCurrent: item ativo (aria-current="page")
- BreadcrumbSeparator: aceita ReactNode pra trocar o "/" default`,

  pagination: `\`\`\`tsx
import { Pagination } from '@/components/ui/pagination';

<Pagination
  page={page}
  pageCount={42}
  onPageChange={setPage}
  siblings={1}
  boundaries={1}
/>
\`\`\`
- page: number (controlado)
- pageCount: number — total de páginas
- onPageChange: (page: number) => void
- siblings: número de páginas mostradas ao redor da atual — padrão: 1
- boundaries: número de páginas mostradas no início/fim — padrão: 1
- Ellipsis (\`…\`) aparece automaticamente quando há gap`,

  // ── Onda 7 — data display ────────────────────────────────────────────────

  table: `\`\`\`tsx
import {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell, TableCaption,
} from '@/components/ui/table';

<Table zebra bordered>
  <TableCaption>Domínios registrados</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Domínio</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Renovação</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>umbler.com</TableCell>
      <TableCell><Badge variant="success">Ativo</Badge></TableCell>
      <TableCell className="text-right tabular-nums">12/2027</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`
- Variantes no \`<Table>\`: \`zebra\`, \`dense\`, \`bordered\`, \`interactive\`
- Compound semântico — gera \`<table><thead><tbody>...\` correto
- TableRow com \`onClick\` em modo \`interactive\` ganha hover/cursor`,

  timeline: `\`\`\`tsx
import {
  Timeline, TimelineItem, TimelineDot,
  TimelineContent, TimelineTitle, TimelineTime,
} from '@/components/ui/timeline';
import { GitBranch } from '@phosphor-icons/react';

<Timeline>
  <TimelineItem>
    <TimelineDot tone="brand" icon={<GitBranch />} />
    <TimelineContent>
      <TimelineTime>há 5 min</TimelineTime>
      <TimelineTitle>Push em main</TimelineTitle>
      <p>3 commits por @ana</p>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineDot tone="success" />
    <TimelineContent>
      <TimelineTime>1h atrás</TimelineTime>
      <TimelineTitle>Deploy concluído</TimelineTitle>
    </TimelineContent>
  </TimelineItem>
</Timeline>

{/* variante compacta pra changelog/logs densos */}
<Timeline compact>...</Timeline>
\`\`\`
- Compound em \`<ol>/<li>\` com linha conectora gerada via pseudo-elemento
- TimelineDot tone: \`default\` | \`brand\` | \`success\` | \`warning\` | \`error\`
- TimelineDot \`icon\` (ReactNode) — dot maior com ícone dentro
- \`<Timeline compact>\` — espaçamento reduzido`,

  list: `\`\`\`tsx
import {
  List, ListItem, ListItemLeading, ListItemContent,
  ListItemTitle, ListItemDescription, ListItemTrailing,
} from '@/components/ui/list';

<List bordered dividers>
  <ListItem onClick={() => open(1)}>
    <ListItemLeading><Avatar name="Acme S.A." /></ListItemLeading>
    <ListItemContent>
      <ListItemTitle>Acme S.A.</ListItemTitle>
      <ListItemDescription>3 conversas abertas</ListItemDescription>
    </ListItemContent>
    <ListItemTrailing>
      <Badge variant="success">Pago</Badge>
    </ListItemTrailing>
  </ListItem>
</List>
\`\`\`
- Variantes no \`<List>\`: \`bordered\` (cartão), \`dividers\` (separa itens), \`dense\`, \`interactive\`
- Item com \`onClick\` ganha \`role=button\` + \`tabIndex=0\` automaticamente
- Slots opcionais: Leading (ícone/avatar), Content (título+desc), Trailing (ação/badge)`,

  // ── Botão (depois dos outros pra coincidir com llms.txt anterior) ────────

  button: `\`\`\`tsx
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button-variants';

<Button variant="primary" size="md">Texto</Button>
<Button variant="primary" loading>Salvando...</Button>
<Button variant="primary" iconOnly><Icon /></Button>
\`\`\`
- variant: \`primary\` | \`secondary\` | \`ghost\` | \`outline\` | \`danger\` — padrão: \`primary\`
- size: \`sm\` | \`md\` | \`lg\` | \`xl\` — padrão: \`md\`
- loading: boolean — mostra spinner e desabilita
- iconOnly: boolean — remove padding lateral, torna quadrado`,

  // ── Marca / patterns ─────────────────────────────────────────────────────

  'umbler-logo': `\`\`\`tsx
import { UmblerLogo } from '@/components/ui/umbler-logo';

<UmblerLogo className="h-8 w-auto" />
\`\`\`
- Adapta automaticamente para light/dark via CSS variables
- Versão dark tem gradiente na letra 'u'`,

  'hero-background': `\`\`\`tsx
import { HeroBackground } from '@/components/ui/hero-background';

<HeroBackground variant="sweep" className="min-h-screen">
  <div className="relative z-10 flex flex-col items-center py-32">
    {/* conteúdo do hero */}
  </div>
</HeroBackground>
\`\`\`
- variant: \`sweep\` | \`cloud\` | \`wedge\` | \`arc\` | \`cap\` | \`arc-flip\` | \`sweep-invert\` | \`cap-mirror\` — padrão: \`sweep\`
- Fundo escuro fixo \`rgb(3,6,20)\` com glow SVG azul (blur + mix-blend-mode)
- Coloque conteúdo em \`relative z-10\` para ficar sobre o blob`,

  // ── Blocks — organismos compostos (instale avulso; caem em components/blocks/) ──

  'hero-block': `Abertura de landing. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/hero-block\`
\`\`\`tsx
import { HeroBlock, HeroContent, HeroEyebrow, HeroHeadline, HeroSubtext, HeroCTAGroup, HeroVisual } from '@/components/blocks/hero-block';
import { Button } from '@/components/ui/button';

<HeroBlock background="glow">
  <HeroContent>
    <HeroEyebrow>Umbler Talk</HeroEyebrow>
    <HeroHeadline>Atenda no WhatsApp com seu time</HeroHeadline>
    <HeroSubtext>Centralize conversas e venda mais.</HeroSubtext>
    <HeroCTAGroup><Button size="lg">Testar grátis</Button></HeroCTAGroup>
  </HeroContent>
  <HeroVisual><img src="/print.png" alt="" /></HeroVisual>
</HeroBlock>
\`\`\`
- background: \`none\` | \`sweep\` | \`glow\` — padrão: \`none\`
- Compound: HeroContent, HeroEyebrow, HeroHeadline, HeroSubtext, HeroCTAGroup, HeroVisual`,

  'cta-banner': `Faixa de conversão pra fim de seção. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/cta-banner\`
\`\`\`tsx
import { CTABanner, CTAHeadline, CTASubtext, CTAActions } from '@/components/blocks/cta-banner';
import { Button } from '@/components/ui/button';

<CTABanner variant="premium">
  <CTAHeadline>Pronto pra começar?</CTAHeadline>
  <CTASubtext>7 dias grátis, sem cartão.</CTASubtext>
  <CTAActions><Button size="lg">Criar conta</Button></CTAActions>
</CTABanner>
\`\`\`
- variant: \`premium\` | \`glow\` | \`simple\` | \`brand\` — padrão: \`premium\`
- Compound: CTAEyebrow, CTATrustPill, CTAHeadline, CTAHeadlineMuted, CTASubtext, CTAActions`,

  'logo-cloud': `Logos de clientes (social proof) pra landings. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/logo-cloud\`
\`\`\`tsx
import { LogoCloud } from '@/components/blocks/logo-cloud';

<LogoCloud
  variant="marquee"
  label="+60 mil empresas confiam na Umbler"
  logos={[{ src: '/logos/unimed.svg', alt: 'Unimed' }]}
/>
\`\`\`
- variant: \`grid\` (grade estática) | \`marquee\` (rolagem infinita CSS, pausa no hover) — padrão: \`grid\`
- speed: segundos por volta do marquee (padrão 30) · tone: \`dark\` | \`light\` · logos: src + alt + maxHeight?
- Marquee usa os keyframes \`marquee\` de tokens.css (instale o item \`tokens\`)`,

  'pricing-table': `Tabela de planos com toggle mensal/anual. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/pricing-table\`
\`\`\`tsx
import { PricingTable, UMBLER_PLANS } from '@/components/blocks/pricing-table';

<PricingTable plans={UMBLER_PLANS} defaultPeriod="yearly" />
\`\`\`
- plans: Plan[] — \`{ id, name, pitch, priceMonthly, priceYearly, popular?, ctaLabel, features: { label, included }[] }\`
- defaultPeriod: \`monthly\` | \`yearly\` — padrão: \`monthly\` · footer?: ReactNode
- UMBLER_PLANS exportado como exemplo pronto`,

  'faq-section': `Seção de FAQ (Accordion) — reduz objeção. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/faq-section\`
\`\`\`tsx
import { FAQSection } from '@/components/blocks/faq-section';

<FAQSection eyebrow="Dúvidas" headline="Perguntas frequentes" items={[{ q: 'Tem teste grátis?', a: 'Sim, 7 dias.' }]} />
\`\`\`
- headline: string (obrigatório) · eyebrow?: string
- items: \`{ q: string, a: string }[]\``,

  'stat-grid': `Grade de métricas (prova com números). Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/stat-grid\`
\`\`\`tsx
import { StatGrid } from '@/components/blocks/stat-grid';

<StatGrid columns={3} stats={[{ n: '+40%', label: 'conversão' }, { n: '2k', label: 'clientes' }, { n: '24/7', label: 'suporte' }]} />
\`\`\`
- stats: \`{ n: string, label: string }[]\`
- columns: \`2\` | \`3\` | \`4\` — padrão: 4 · tone: \`brand\` | \`muted\` · note?: string`,

  'testimonial-block': `Depoimento de cliente. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/testimonial-block\`
\`\`\`tsx
import { TestimonialBlock } from '@/components/blocks/testimonial-block';

<TestimonialBlock variant="card" stars={5} testimonial={{ quote: 'Mudou nosso atendimento.', author: 'Ana Lima', role: 'CEO', company: 'Acme', avatarInitials: 'AL' }} />
\`\`\`
- testimonial: \`{ quote, author, role, company?, avatarInitials? }\`
- variant: \`centered\` | \`card\` — padrão: centered · stars?: 1–5`,

  'feature-card-grid': `Grade de cards de feature. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/feature-card-grid\`
\`\`\`tsx
import { FeatureCardGrid, FeatureCard } from '@/components/blocks/feature-card-grid';
import { ChatCircle } from '@phosphor-icons/react/dist/ssr';

<FeatureCardGrid columns={3}>
  <FeatureCard icon={<ChatCircle />} title="Multiatendimento" description="Vários atendentes, um número." />
</FeatureCardGrid>
\`\`\`
- FeatureCardGrid columns: \`2\` | \`3\` | \`4\` — padrão: 3
- FeatureCard: title (obrigatório), icon?, description?, asChild? (vira link)`,

  'empty-state': `Estado vazio (listagem sem dados / primeiro uso). Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/empty-state\`
\`\`\`tsx
import { EmptyState } from '@/components/blocks/empty-state';
import { Button } from '@/components/ui/button';
import { Tray } from '@phosphor-icons/react/dist/ssr';

<EmptyState media={<Tray size={40} />} title="Nenhum contato ainda" description="Importe ou crie o primeiro." actions={<Button>Novo contato</Button>} />
\`\`\`
- title (obrigatório) · media?, description?, actions?
- size: \`sm\` | \`md\` | \`lg\` — padrão: md · as: \`h2\`|\`h3\`|\`h4\`|\`p\``,

  'form-panel': `Painel de formulário em Card. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/form-panel\`
\`\`\`tsx
import { FormPanel } from '@/components/blocks/form-panel';
import { Input, InputGroup, InputLabel } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

<FormPanel title="Novo filtro" actions={<Button>Salvar</Button>}>
  <InputGroup><InputLabel>Nome</InputLabel><Input /></InputGroup>
</FormPanel>
\`\`\`
- title (obrigatório) · description?, actions? (footer), actionsFullWidth?
- children = os campos do formulário`,

  'user-row': `Linha de contato/usuário (padrão Umbler Talk). Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/user-row\`
\`\`\`tsx
import { UserRow } from '@/components/blocks/user-row';
import { Tag } from '@/components/ui/tag';

<UserRow avatar={{ name: 'Ana Lima' }} name="Ana Lima" meta="há 5 min" subtitle="Última mensagem…" tags={<Tag variant="brand">Proposta</Tag>} selectable onSelectedChange={(s) => {}} />
\`\`\`
- name (obrigatório) · avatar?: AvatarProps, meta?, subtitle?, tags?, actions?
- selectable?, selected?, onSelectedChange? · asChild? (vira link)`,

  'data-list-page': `Esqueleto de tela de listagem CRUD: header + toolbar + corpo. Instale: \`npx shadcn add https://umbler-ds.vercel.app/r/data-list-page\`
\`\`\`tsx
import { DataListPage, PageHeader, DataToolbar } from '@/components/blocks/data-list-page';
import { Button } from '@/components/ui/button';

<DataListPage
  header={<PageHeader title="Contatos" count={128} actions={<Button>Novo</Button>} />}
  toolbar={<DataToolbar actions={<Button variant="ghost">Filtrar</Button>}>{/* busca */}</DataToolbar>}
>
  {/* <Table> ou <List> aqui */}
</DataListPage>
\`\`\`
- DataListPage: header?, toolbar?, children (a lista/tabela)
- PageHeader: title (obrigatório), count?, description?, actions? · DataToolbar: children, actions?`,
};
