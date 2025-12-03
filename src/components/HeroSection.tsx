import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-spatula.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Ferramentas de Alta Performance
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Espátulas Profissionais{" "}
              <span className="text-gradient">TOTALPLAN</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground/80">
                Precisão que Transforma o Acabamento
              </span>
            </h1>
            
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Ferramentas de alta performance desenvolvidas para profissionais que exigem 
              qualidade, durabilidade e acabamento perfeito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contato" className="group">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/5519994826736"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-primary-foreground/60 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              📞 (19) 99482-6736
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Espátula Profissional TotalPlan"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-card p-4 rounded-xl shadow-card-hover animate-slide-right opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Qualidade Premium</p>
                  <p className="text-xs text-muted-foreground">Aço Inoxidável</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
