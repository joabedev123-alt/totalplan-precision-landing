import { Shield, Zap, Award, Target, Layers, Factory } from "lucide-react";

const vantagens = [
  {
    icon: Shield,
    title: "Aço Inoxidável Premium",
    description: "Lâminas fabricadas com aço inoxidável de alta qualidade para máxima durabilidade.",
  },
  {
    icon: Zap,
    title: "Alta Durabilidade",
    description: "Resistência excepcional ao desgaste, garantindo vida útil prolongada.",
  },
  {
    icon: Award,
    title: "Acabamento Profissional",
    description: "Resultados impecáveis em cada aplicação com precisão milimétrica.",
  },
  {
    icon: Target,
    title: "Ergonomia e Performance",
    description: "Design ergonômico que reduz fadiga e aumenta produtividade.",
  },
  {
    icon: Layers,
    title: "Diversas Aplicações",
    description: "Modelos para massa corrida, epóxi, cimento queimado e muito mais.",
  },
  {
    icon: Factory,
    title: "Produção Industrial",
    description: "Fabricação com padrões rigorosos de controle de qualidade TotalPlan.",
  },
];

const VantagensSection = () => {
  return (
    <section id="vantagens" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            VANTAGENS TÉCNICAS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Tecnologia que Faz a <span className="text-gradient">Diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Descubra por que profissionais exigentes escolhem as espátulas TotalPlan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vantagens.map((vantagem, index) => (
            <div
              key={vantagem.title}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-card-hover animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <vantagem.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {vantagem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {vantagem.description}
                </p>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VantagensSection;
