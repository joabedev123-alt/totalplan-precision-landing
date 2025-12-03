import { Check } from "lucide-react";

const especificacoes = [
  {
    categoria: "Tipo de Aço",
    valor: "Inoxidável AISI 420",
    descricao: "Alta resistência à corrosão e durabilidade excepcional",
  },
  {
    categoria: "Tratamento da Lâmina",
    valor: "Têmpera Especial",
    descricao: "Processo térmico que garante dureza e flexibilidade ideais",
  },
  {
    categoria: "Ergonomia do Cabo",
    valor: "Design Anatômico",
    descricao: "Formato que reduz fadiga e proporciona máximo controle",
  },
  {
    categoria: "Flexibilidade",
    valor: "Calibrada por Modelo",
    descricao: "Cada modelo possui flexibilidade otimizada para sua aplicação",
  },
  {
    categoria: "Resistência à Corrosão",
    valor: "Classe Superior",
    descricao: "Proteção contra oxidação em ambientes agressivos",
  },
  {
    categoria: "Precisão",
    valor: "Milimétrica",
    descricao: "Bordas retificadas para acabamento perfeito",
  },
];

const aplicacoes = [
  "Massa Corrida",
  "Gesso",
  "Epóxi",
  "Cimento Queimado",
  "Textura",
  "Rejunte",
  "Argamassa",
  "PVA",
];

const EspecificacoesSection = () => {
  return (
    <section id="especificacoes" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            DETALHES TÉCNICOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Especificações <span className="text-gradient">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Engenharia de precisão em cada detalhe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Specs Grid */}
          <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {especificacoes.map((spec, index) => (
              <div
                key={spec.categoria}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {spec.categoria}
                  </span>
                  <span className="font-display font-bold text-primary">
                    {spec.valor}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {spec.descricao}
                </p>
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Applications */}
          <div className="bg-card rounded-2xl p-8 border border-border animate-slide-left opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Aplicações Recomendadas
            </h3>
            <p className="text-muted-foreground mb-8">
              Nossas espátulas são desenvolvidas para atender às mais diversas 
              necessidades de acabamento profissional:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {aplicacoes.map((app) => (
                <div
                  key={app}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{app}</span>
                </div>
              ))}
            </div>
            
            {/* Technical Note */}
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Nota Técnica:</strong> Todas as 
                especificações seguem padrões industriais rigorosos e são testadas 
                em laboratório para garantir máxima qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecificacoesSection;
