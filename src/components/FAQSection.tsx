import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Quais materiais as espátulas TotalPlan utilizam?",
    resposta:
      "Nossas espátulas são fabricadas com aço inoxidável AISI 420 de alta qualidade, que oferece excelente resistência à corrosão e durabilidade. Os cabos são produzidos com materiais ergonômicos que garantem conforto durante longas jornadas de trabalho.",
  },
  {
    pergunta: "Entregam para o Brasil todo?",
    resposta:
      "Sim! Realizamos entregas para todo o território nacional. Trabalhamos com transportadoras de confiança para garantir que seus produtos cheguem em perfeito estado, independentemente da localização.",
  },
  {
    pergunta: "Qual o prazo de garantia?",
    resposta:
      "Oferecemos garantia contra defeitos de fabricação. Em caso de qualquer problema, nossa equipe de suporte está pronta para realizar a substituição imediata do produto.",
  },
  {
    pergunta: "As espátulas servem para massa corrida, epóxi ou cimento queimado?",
    resposta:
      "Absolutamente! Nossa linha de espátulas foi desenvolvida para atender diversas aplicações profissionais, incluindo massa corrida, gesso, epóxi, cimento queimado, textura, rejunte e muito mais. Temos modelos específicos para cada tipo de acabamento.",
  },
  {
    pergunta: "Como faço um pedido?",
    resposta:
      "Você pode fazer seu pedido de forma rápida e fácil entrando em contato conosco pelo WhatsApp (19) 99482-6736, por e-mail vendas@rfcampanaro.com.br ou solicitando um orçamento diretamente pelo nosso site. Nossa equipe responde rapidamente!",
  },
  {
    pergunta: "Vocês trabalham com revenda?",
    resposta:
      "Sim, trabalhamos com revendedores e oferecemos condições especiais para pedidos em maior quantidade. Entre em contato para conhecer nossa política de revenda e condições comerciais.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
