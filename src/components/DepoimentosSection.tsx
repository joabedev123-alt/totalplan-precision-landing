import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Carlos Silva",
    profissao: "Mestre de Obras",
    cidade: "São Paulo, SP",
    texto: "As espátulas TotalPlan mudaram completamente meu trabalho. O acabamento ficou muito mais profissional e a durabilidade é impressionante.",
    estrelas: 5,
  },
  {
    id: 2,
    nome: "Roberto Almeida",
    profissao: "Gesseiro",
    cidade: "Campinas, SP",
    texto: "Trabalho com gesso há 15 anos e nunca encontrei espátulas tão boas. A flexibilidade é perfeita e o cabo não escorrega.",
    estrelas: 5,
  },
  {
    id: 3,
    nome: "Marcos Oliveira",
    profissao: "Pintor Profissional",
    cidade: "Amparo, SP",
    texto: "Uso para massa corrida e textura. O resultado é sempre impecável. Recomendo para todos os profissionais.",
    estrelas: 5,
  },
  {
    id: 4,
    nome: "André Costa",
    profissao: "Aplicador de Epóxi",
    cidade: "Jundiaí, SP",
    texto: "Para cimento queimado e epóxi, não tem igual. A espátula desliza perfeitamente e distribui o material de forma uniforme.",
    estrelas: 5,
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            RESULTADOS REAIS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Profissionais que <span className="text-gradient">Confiam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Veja o que dizem os especialistas que utilizam nossas ferramentas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {depoimentos.map((depo, index) => (
            <div
              key={depo.id}
              className="relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-card-hover animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(depo.estrelas)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed pr-12">
                "{depo.texto}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {depo.nome.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{depo.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    {depo.profissao} • {depo.cidade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
