'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'plano',
    q: 'Como mudo de plano?',
    a: 'Acesse Conta → Plano e escolha o novo. A cobrança é proporcional ao tempo restante do ciclo atual.',
  },
  {
    id: 'cancelar',
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Não há multa de fidelidade. Sua conta segue ativa até o fim do ciclo já pago.',
  },
  {
    id: 'suporte',
    q: 'Como entro em contato com o suporte?',
    a: 'Chat no painel, e-mail (suporte@umbler.com) ou WhatsApp. Resposta em até 15 minutos em horário comercial.',
  },
];

export function AccordionSingle() {
  return (
    <Accordion type="single" collapsible defaultValue="plano" className="w-full max-w-md">
      {faqs.map((f) => (
        <AccordionItem key={f.id} value={f.id}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" defaultValue={['plano', 'cancelar']} className="w-full max-w-md">
      {faqs.map((f) => (
        <AccordionItem key={f.id} value={f.id}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
