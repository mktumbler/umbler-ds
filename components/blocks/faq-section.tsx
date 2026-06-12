/**
 * FAQSection — seção de perguntas frequentes com Accordion.
 *
 * Composição:
 *   <FAQSection eyebrow="..." headline="..." items={faqs} />
 *
 * Usa o Accordion do DS (Radix UI). Aceita qualquer array de { q, a }.
 *
 * Aparece em:
 *   • /showcase/produto, /showcase/solucao, /showcase/pricing
 */

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  headline: string;
  items: FAQItem[];
}

export function FAQSection({
  eyebrow,
  headline,
  items,
  className,
  ...props
}: FAQSectionProps) {
  return (
    <section
      className={cn('bg-surface-subtle px-6 py-24', className)}
      {...props}
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow={eyebrow} headline={headline} />


        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-surface"
        >
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="px-6">
              <AccordionTrigger className="text-left text-body-lg font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-body text-foreground-muted">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
