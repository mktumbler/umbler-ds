# Catálogo de Produtos Umbler

Base de conhecimento para o comando `/umbler-lp`. Cada entrada define o que a IA precisa saber para gerar uma LP sem perguntar persona ou dor — essas são respostas que o DS já tem.

**Como manter:** quando um produto ganhar novos planos, nova proposta ou nova persona, atualize aqui. O `/umbler-lp` lê este arquivo antes de gerar qualquer coisa.

---

## Umbler Talk

**O que é:** plataforma de atendimento e vendas pelo WhatsApp com agentes de IA. Centraliza conversas de vários números numa caixa compartilhada, permite treinar agentes com o conhecimento da empresa e distribui atendimentos por regra entre o time.

**Personas primárias:**
- Dono de e-commerce pequeno/médio que vende e atende clientes pelo WhatsApp
- Gestor comercial com time de vendas que usa WhatsApp como canal principal
- Responsável pelo atendimento de empresa de serviços (clínica, consultório, imobiliária) que perde agendamento por demora na resposta

**Dores reais:**
- Perde venda porque demora a responder — cliente pergunta o preço e compra do concorrente em segundos
- Atendimento descentralizado: cada vendedor no próprio celular, sem histórico, sem visibilidade
- Fora do horário comercial não tem cobertura — mensagem fica sem resposta até o dia seguinte
- Time grande demais pra volume pequeno, ou volume grande demais pro time atual

**Proposta de valor:**
Agentes de IA treinados com o conhecimento da empresa respondem, qualificam e encaminham 24h por dia. O time humano entra só quando a conversa merece atenção. Resultado: mais vendas, menos sobrecarga, atendimento com cara de empresa grande.

**Diferencial competitivo:**
- Meta Business Partner (credencial oficial do WhatsApp)
- Treina o agente com o conteúdo da própria empresa — sem precisar de dev ou prompt engineering
- Caixa compartilhada com distribuição por regra (não só chatbot — é gestão de atendimento)
- +60 mil empresas na base

**Estrutura canônica de LP:**
1. `hero-block` — headline na dor ("Pare de perder vendas no WhatsApp"), sub proposta, CTA "Experimente por 7 dias" (primary + shadow-cta) + "Falar com vendas" (ghost)
2. `stat-grid` — 3 números: +60 mil empresas / Meta Business Partner / resposta em segundos
3. `feature-card-grid` — 6 cards outcome-first: responde fora do horário / qualifica antes de passar pro humano / histórico de toda conversa / distribui por regra / relatório de conversão / integra com CRM
4. "Como funciona" — 3 passos: treina o agente / conecta o WhatsApp / atende enquanto você dorme
5. `pricing-table` — ver Pricing abaixo
6. `faq-section` — ver FAQ abaixo
7. `cta-banner` — "Experimente por 7 dias, sem cartão"

**Pricing (preencher com valores reais antes de publicar):**
- Starter: grátis — 1 número, caixa compartilhada, respostas rápidas
- Pro: [R$ X]/mês — agente IA 24h, até 5 atendentes, funil de vendas *(destaque)*
- Business: [R$ Y]/mês — atendentes ilimitados, distribuição por regra, relatórios

**FAQ canônico (5 objeções reais do Talk):**
1. "Preciso saber programar pra treinar o agente?" → Não. Você cola o conteúdo da sua empresa (site, PDF, FAQ) e o agente aprende. Sem linha de código.
2. "A IA pode falar besteira pro meu cliente?" → O agente responde só com o que você treinou. O que ele não sabe, ele encaminha pro atendente humano em vez de inventar.
3. "Funciona com meu número de WhatsApp atual?" → Sim. Você conecta o número que já usa — não precisa trocar.
4. "E se eu quiser cancelar?" → Cancela a qualquer momento, sem multa e sem burocracia.
5. "Como o agente sabe quando passar pro humano?" → Você define as regras: palavra-chave, intenção de compra, solicitação explícita. O agente encaminha na hora.

---

## Umbler Hosting

**O que é:** hospedagem de sites e aplicações para agências digitais e desenvolvedores. Painel centralizado, deploy via Git, suporte técnico especializado.

**Personas primárias:**
- Agência digital que hospeda sites de clientes e precisa de painel centralizado
- Desenvolvedor freelancer que quer deploy rápido sem gerenciar servidor

**Dores reais:**
- Cliente reclama que o site está lento e a agência não tem controle
- Suporte da hospedagem demora dias para responder um ticket simples
- Deploy manual, por FTP, que quebra em produção

**Proposta de valor:** [preencher com o time de produto]

**Diferencial competitivo:** [preencher com o time de produto]

**Estrutura canônica de LP:** [a definir — seguir o padrão Talk como base]

**Pricing:** [preencher com valores reais]

**FAQ canônico:** [preencher com objeções reais do suporte]

---

## Produto customizado (não Umbler)

Quando o argumento do `/umbler-lp` não bater com nenhuma entrada acima, o comando deve:

1. Avisar que o produto não está no catálogo
2. Fazer no máximo 3 perguntas objetivas: o que o produto faz, qual a dor que resolve, qual o CTA esperado
3. Gerar a LP com a estrutura canônica padrão (hero + features + pricing placeholder + FAQ placeholder + CTA)
4. Sinalizar claramente no output o que precisa ser preenchido com informação real
