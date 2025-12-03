import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import spatula10 from "@/assets/spatula-10cm.jpg";
import spatula15 from "@/assets/spatula-15cm.jpg";
import spatula20 from "@/assets/spatula-20cm.jpg";
import spatula30 from "@/assets/spatula-30cm.jpg";
import spatulaEpoxy from "@/assets/spatula-epoxy.jpg";
import spatulaFlexible from "@/assets/spatula-flexible.jpg";

const produtos = [
  {
    id: 1,
    nome: "Espátula Profissional 10cm",
    descricao: "Ideal para acabamentos detalhados e áreas de difícil acesso.",
    beneficios: ["Precisão máxima", "Lâmina temperada", "Cabo ergonômico"],
    imagem: spatula10,
  },
  {
    id: 2,
    nome: "Espátula Multiuso 15cm",
    descricao: "Versátil para diversas aplicações no dia a dia profissional.",
    beneficios: ["Uso geral", "Alta resistência", "Flexibilidade ideal"],
    imagem: spatula15,
  },
  {
    id: 3,
    nome: "Espátula para Massa Corrida 20cm",
    descricao: "Desenvolvida especialmente para aplicação de massa corrida.",
    beneficios: ["Distribuição uniforme", "Lâmina larga", "Acabamento liso"],
    imagem: spatula20,
  },
  {
    id: 4,
    nome: "Espátula Industrial 30cm",
    descricao: "Para grandes superfícies e trabalhos de alta demanda.",
    beneficios: ["Grande cobertura", "Produtividade", "Durabilidade extrema"],
    imagem: spatula30,
  },
  {
    id: 5,
    nome: "Espátula para Epóxi / Cimento Queimado",
    descricao: "Especializada para revestimentos de alta performance.",
    beneficios: ["Resistente a químicos", "Lâmina especial", "Acabamento premium"],
    imagem: spatulaEpoxy,
  },
  {
    id: 6,
    nome: "Espátula Flexível",
    descricao: "Flexibilidade superior para acabamentos delicados.",
    beneficios: ["Ultra flexível", "Controle preciso", "Cantos arredondados"],
    imagem: spatulaFlexible,
  },
];

const CatalogoSection = () => {
  return (
    <section id="catalogo" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            LINHA DE PRODUTOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Catálogo de <span className="text-gradient">Espátulas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Linha completa para todas as necessidades de acabamento profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {produtos.map((produto, index) => (
            <div
              key={produto.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-card-hover animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {produto.nome}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {produto.descricao}
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {produto.beneficios.map((beneficio) => (
                    <span
                      key={beneficio}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {beneficio}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group/btn" asChild>
                  <a
                    href={`https://wa.me/5519994826736?text=Olá! Tenho interesse na ${produto.nome}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Quero este modelo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogoSection;
