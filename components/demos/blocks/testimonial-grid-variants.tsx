import { TestimonialGrid, type TestimonialItem } from '@/components/blocks/testimonial-grid';

const SAMPLES: TestimonialItem[] = [
  {
    quote: 'Antes a gente perdia venda porque dois atendentes respondiam o mesmo cliente com informações diferentes. Com o Talk, cada conversa tem um dono e o histórico nunca some.',
    author: 'Rodrigo Menezes',
    role: 'Gerente Comercial',
    company: 'Clínica Vida Plena',
    stars: 5,
  },
  {
    quote: 'Configurei o chatbot em uma tarde, sem escrever uma linha de código. Agora ele qualifica os leads fora do horário e o time chega de manhã com uma fila de contatos prontos.',
    author: 'Beatriz Carvalho',
    role: 'Proprietária',
    company: 'Studio Bê Estética',
    stars: 5,
  },
  {
    quote: 'O relatório por atendente mudou como eu gestiono o time. Consigo ver quem demora mais pra responder e agir antes que o cliente desista.',
    author: 'Felipe Drummond',
    role: 'Head of Customer Success',
    company: 'Construtora Ativa',
    stars: 5,
  },
  {
    quote: 'Nossa equipe cresceu de 3 para 11 atendentes e o painel acompanhou sem dor. Antes a gente usava 3 celulares diferentes. Hoje é tudo centralizado.',
    author: 'Mariana Luz',
    role: 'Diretora de Operações',
    company: 'Escola Transformar',
    stars: 5,
  },
  {
    quote: 'Em 30 dias o tempo de resposta caiu pela metade. O cliente percebe quando a empresa é organizada.',
    author: 'Carlos Henrique Neto',
    role: 'Sócio Fundador',
    company: 'Imobiliária Horizonte',
    stars: 5,
  },
  {
    quote: 'Tentei outras ferramentas antes mas nenhuma era tão simples de configurar. Subimos em um dia e o time adotou sem resistência.',
    author: 'Tatiana Borges',
    role: 'Coordenadora de Atendimento',
    company: 'Clínica OralPlus',
    stars: 5,
  },
];

const FEATURED_SAMPLES: TestimonialItem[] = [
  {
    quote: 'O Talk transformou o atendimento da nossa clínica. Antes cada recepcionista usava o próprio celular com o WhatsApp da empresa. Perdíamos histórico toda vez que alguém saia de férias. Hoje tudo fica na conta da clínica e qualquer uma da equipe consegue dar continuidade.',
    author: 'Rodrigo Menezes',
    role: 'Gerente Comercial',
    company: 'Clínica Vida Plena',
    stars: 5,
  },
  {
    quote: 'Configurei o chatbot em uma tarde, sem escrever uma linha de código.',
    author: 'Beatriz Carvalho',
    role: 'Proprietária',
    company: 'Studio Bê',
    stars: 5,
  },
  {
    quote: 'O relatório por atendente mudou como eu gestiono o time. Ação antes que o cliente desista.',
    author: 'Felipe Drummond',
    role: 'Head of CS',
    company: 'Construtora Ativa',
    stars: 5,
  },
  {
    quote: 'Nossa equipe cresceu de 3 para 11 atendentes e o painel acompanhou sem dor.',
    author: 'Mariana Luz',
    role: 'Diretora de Operações',
    company: 'Escola Transformar',
    stars: 5,
  },
];

export function TestimonialGridWallDemo() {
  return (
    <TestimonialGrid
      eyebrow="Depoimentos"
      headline="Quem usa, recomenda"
      subheadline="Mais de 15 mil empresas organizam o atendimento com o Umbler Talk."
      testimonials={SAMPLES}
      variant="wall"
      className="py-12"
    />
  );
}

export function TestimonialGridFeaturedDemo() {
  return (
    <TestimonialGrid
      eyebrow="Depoimentos"
      headline="Histórico que não some, time que não pisa no calo do outro"
      testimonials={FEATURED_SAMPLES}
      variant="featured"
      className="py-12"
    />
  );
}
