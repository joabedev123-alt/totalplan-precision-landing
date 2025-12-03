import { Button } from "./ui/button";
import { MessageCircle, ArrowRight, Check, Truck, Clock, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 gradient-hero relative overflow-hidden">
      {/* Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Pronto para Elevar o Nível do seu{" "}
            <span className="text-gradient">Acabamento?</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Entre em contato agora e descubra como as espátulas TotalPlan
            podem transformar seus projetos.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>Atendimento imediato</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>Orçamento rápido</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>Envio para todo o Brasil</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/5519994826736?text=Olá! Gostaria de mais informações sobre as espátulas TotalPlan."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CTASection;
