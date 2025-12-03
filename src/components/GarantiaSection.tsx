import { ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const GarantiaSection = () => {
  return (
    <section className="py-20 md:py-24 gradient-tech relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/30 shadow-glow animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  Garantia de Qualidade Totalpan
                </h2>
              </div>
            </div>

            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Nossas espátulas são fabricadas seguindo padrões industriais rigorosos.
              Caso haja defeito de fabricação, oferecemos suporte imediato e substituição.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">
                    Substituição Garantida
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    Troca imediata em caso de defeito de fabricação
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">
                    Suporte Especializado
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    Equipe técnica pronta para atender
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

export default GarantiaSection;
