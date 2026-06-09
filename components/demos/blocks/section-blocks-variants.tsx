import { FAQSection } from '@/components/blocks/faq-section';
import { StatGrid } from '@/components/blocks/stat-grid';
import { TestimonialBlock } from '@/components/blocks/testimonial-block';

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQS_PRODUTO = [
  {
    q: 'O agente IA substitui meu time de atendimento?',
    a: 'Não. O agente resolve as perguntas repetitivas (horário, preço, status) e qualifica leads. As conversas que exigem julgamento ou empatia são passadas para o humano com contexto completo — sem o cliente precisar repetir nada.',
  },
  {
    q: 'Quanto tempo leva para configurar?',
    a: 'A primeira versão do agente fica pronta em 1-2 dias úteis. Você sobe PDFs, sites ou planilhas, define o tom e conecta o WhatsApp Oficial. O onboarding guiado está incluso em todos os planos.',
  },
  {
    q: 'Funciona com WhatsApp Business (app) ou só Oficial?',
    a: 'Só WhatsApp Business API (oficial). O app pessoal não permite integração de terceiros. Ajudamos com o processo de aprovação da API — geralmente 1-5 dias úteis.',
  },
];

const FAQS_PRICING = [
  {
    q: 'Posso mudar de plano depois?',
    a: 'A qualquer momento, em qualquer direção. Upgrade entra em vigor imediatamente, com cobrança proporcional. Downgrade entra no próximo ciclo, sem penalidade.',
  },
  {
    q: 'Tem multa por cancelamento?',
    a: 'Zero. Plano mensal cancela quando quiser. Anual paga proporcional ao usado, sem multa retroativa.',
  },
  {
    q: 'Preciso de cartão de crédito pro trial?',
    a: 'Não. Cria a conta com e-mail, usa 7 dias completos, decide depois.',
  },
];

export function FAQSectionProdutoDemo() {
  return (
    <FAQSection
      eyebrow="Dúvidas honestas"
      headline="O que perguntam antes de assinar"
      items={FAQS_PRODUTO}
      className="py-10"
    />
  );
}

export function FAQSectionPricingDemo() {
  return (
    <FAQSection
      headline="Perguntas sobre cobrança"
      items={FAQS_PRICING}
      className="py-10"
    />
  );
}

// ─── STAT GRID ────────────────────────────────────────────────────────────────

export function StatGrid4UpDemo() {
  return (
    <StatGrid
      stats={[
        { n: '72%', label: 'conversas resolvidas sem humano' },
        { n: '4s',  label: 'tempo médio de resposta' },
        { n: '24h', label: 'atendimento, todo dia' },
        { n: '3x',  label: 'mais leads qualificados' },
      ]}
      className="bg-surface py-12"
    />
  );
}

export function StatGrid3UpDemo() {
  return (
    <StatGrid
      stats={[
        { n: '40%', label: 'mais leads convertidos em mesma equipe' },
        { n: '3,2x', label: 'ROI médio no primeiro trimestre' },
        { n: '72h',  label: 'tempo médio para primeiro resultado' },
      ]}
      note="Média de clientes no plano Pro após 90 dias de uso"
      className="bg-surface py-12"
    />
  );
}

// ─── TESTIMONIAL ─────────────────────────────────────────────────────────────

const TESTIMONIAL_IMOB = {
  quote:
    'Antes a gente perdia lead porque o corretor estava em visita e não via a mensagem. Hoje o agente qualifica, agenda e passa o lead pronto. Minha equipe fecha mais sem trabalhar mais.',
  author: 'Renata M.',
  role: 'Diretora Comercial',
  company: 'Imobiliária Premium SP',
};

const TESTIMONIAL_SAAS = {
  quote:
    'Migramos de 3 ferramentas diferentes para o Umbler em uma tarde. O time de suporte virou 2x mais rápido sem precisar contratar ninguém.',
  author: 'Felipe A.',
  role: 'CTO',
  company: 'Fintech Nacional',
  avatarInitials: 'FA',
};

export function TestimonialCenteredDemo() {
  return (
    <TestimonialBlock
      testimonial={TESTIMONIAL_IMOB}
      className="bg-surface py-12"
    />
  );
}

export function TestimonialCardDemo() {
  return (
    <TestimonialBlock
      testimonial={TESTIMONIAL_SAAS}
      variant="card"
      className="bg-surface-subtle py-12"
    />
  );
}
