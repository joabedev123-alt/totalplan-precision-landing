import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-spatula1/01.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/20 rounded-full mb-4 md:mb-6 animate-fade-up opacity-0 backdrop-blur-sm border border-primary/10" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-white/90">
              Utensílios Profissionais de Confeitaria
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-up opacity-0 drop-shadow-lg" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Espátulas Culinárias{" "}
            <span className="text-gradient">TOTALPAN</span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">
              Precisão que Transforma suas Criações
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-up opacity-0 drop-shadow-md" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Utensílios de alta performance desenvolvidos para confeiteiros e chefs que exigem
            qualidade, durabilidade e precisão perfeita em cada criação.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
              <a
                href="https://wa.me/5519994826736"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
