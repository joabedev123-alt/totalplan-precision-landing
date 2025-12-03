import { Building2, Mail, Phone, MapPin, FileText } from "lucide-react";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-12 md:py-32 gradient-tech relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-foreground text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              QUEM SOMOS
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Conheça a <span className="text-gradient">Totalpan</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Há anos no mercado, a Totalpan fornece espátulas de alto desempenho para
              profissionais da confeitaria, gastronomia e culinária. Nosso foco é unir
              <strong className="text-primary-foreground"> tecnologia, precisão e durabilidade</strong> para
              garantir o melhor resultado possível em cada criação culinária.
            </p>
            <p className="text-primary-foreground/70 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Cada espátula Totalpan é desenvolvida com rigorosos padrões industriais,
              utilizando materiais de primeira linha e processos de fabricação de ponta
              para entregar utensílios que superam expectativas na cozinha profissional.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 animate-slide-left opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">Razão Social</h3>
                  <p className="text-primary-foreground/70">Totalpan Utensílios Culinários</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">CNPJ</h3>
                  <p className="text-primary-foreground/70">49.865.103/0001-03</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">E-mail</h3>
                  <a href="mailto:vendas@rfcampanaro.com.br" className="text-primary hover:underline">
                    vendas@rfcampanaro.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">Telefone</h3>
                  <a href="tel:+5519994826736" className="text-primary hover:underline">
                    (19) 99482-6736
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">Endereço</h3>
                  <p className="text-primary-foreground/70">
                    Rua Maranhão, 123 – Jardim Brasil, Amparo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
