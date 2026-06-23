'use client';

import { motion } from 'framer-motion';
import {
  HeroContent,
  HeroEyebrow,
  HeroHeadline,
  HeroSubtext,
  HeroCTAGroup,
} from '@/components/blocks/hero-block';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button-variants';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease, delay },
  };
}

export function ShowcaseHeroContent() {
  return (
    <HeroContent>
      <motion.div {...fadeUp(0)}>
        <HeroEyebrow>
          <Badge variant="brand" shape="pill">
            7 dias grátis, sem cartão
          </Badge>
        </HeroEyebrow>
      </motion.div>

      <motion.div {...fadeUp(0.1)}>
        <HeroHeadline className="text-white">
          Seu time perde vendas porque{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'var(--gradient-brand)' }}
          >
            o WhatsApp virou bagunça
          </span>
        </HeroHeadline>
      </motion.div>

      <motion.div {...fadeUp(0.2)}>
        <HeroSubtext className="text-neutral-400">
          O Umbler Talk organiza o atendimento de toda a equipe num único painel.
          Sem perder conversa, sem perder cliente.
        </HeroSubtext>
      </motion.div>

      <motion.div {...fadeUp(0.3)}>
        <HeroCTAGroup>
          <a
            href="https://a.umbler.com/talk"
            className={buttonVariants({ variant: 'primary', size: 'lg' }) + ' shadow-cta'}
          >
            Testar 7 dias grátis
            <ArrowRight size={18} weight="bold" />
          </a>
        </HeroCTAGroup>
      </motion.div>

    </HeroContent>
  );
}
