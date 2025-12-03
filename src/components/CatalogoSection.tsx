import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import spatula01 from "@/assets/spatulas past/01.jpg";
import spatula02 from "@/assets/spatulas past/02.jpg";
import spatula003 from "@/assets/spatulas past/003.jpg";
import spatula04 from "@/assets/spatulas past/04.jpg";
import spatula05 from "@/assets/spatulas past/05.jpg";
import spatula06 from "@/assets/spatulas past/06.jpg";
import spatula09 from "@/assets/spatulas past/09.jpg";
import spatula10 from "@/assets/spatulas past/10.jpg";
import spatula11 from "@/assets/spatulas past/11.jpg";
import spatula12 from "@/assets/spatulas past/12.jpg";
import spatula13 from "@/assets/spatulas past/13.jpg";

import spatula15 from "@/assets/spatulas past/15.jpg";
import spatula16 from "@/assets/spatulas past/16.jpg";
import spatula17 from "@/assets/spatulas past/17.jpg";
import spatula18 from "@/assets/spatulas past/18.jpg";
import spatula19 from "@/assets/spatulas past/19.jpg";
import spatula20 from "@/assets/spatulas past/20.jpg";
import spatula21 from "@/assets/spatulas past/21.jpg";

const produtos = [
  {
    id: 1,
    nome: "Espátula para Confeitaria 8cm",
    descricao: "Ideal para decorações delicadas, detalhes em bolos e trabalhos de precisão em confeitaria.",
    beneficios: ["Precisão máxima", "Lâmina temperada", "Cabo ergonômico"],
    imagem: spatula01,
  },
  {
    id: 2,
    nome: "Espátula Multiuso 10cm",
    descricao: "Perfeita para espalhamento de coberturas, glacês e trabalhos gerais na cozinha.",
    beneficios: ["Uso versátil", "Alta resistência", "Flexibilidade ideal"],
    imagem: spatula02,
  },
  {
    id: 3,
    nome: "Espátula para Bolos 12cm",
    descricao: "Desenvolvida especialmente para cobrir bolos com chantilly, ganache e coberturas cremosas.",
    beneficios: ["Distribuição uniforme", "Lâmina larga", "Acabamento liso"],
    imagem: spatula003,
  },
  {
    id: 4,
    nome: "Espátula para Glacê 15cm",
    descricao: "Tamanho intermediário ideal para aplicação de glacê e coberturas em bolos de médio porte.",
    beneficios: ["Cobertura eficiente", "Equilíbrio perfeito", "Durabilidade"],
    imagem: spatula04,
  },
  {
    id: 5,
    nome: "Espátula para Chapa 20cm",
    descricao: "Para uso em chapas quentes, ideal para hambúrgueres, panquecas e trabalhos em grelha.",
    beneficios: ["Grande cobertura", "Alta produtividade", "Resistência ao calor"],
    imagem: spatula05,
  },
  {
    id: 6,
    nome: "Espátula para Tortas 25cm",
    descricao: "Excelente para cobrir tortas grandes e bolos de festa com precisão profissional.",
    beneficios: ["Acabamento premium", "Lâmina extra larga", "Controle superior"],
    imagem: spatula06,
  },
  {
    id: 7,
    nome: "Espátula para Confeitaria 30cm",
    descricao: "Máxima cobertura para bolos de casamento e trabalhos de grande escala em confeitaria.",
    beneficios: ["Máxima cobertura", "Produtividade elevada", "Resistência superior"],
    imagem: spatula09,
  },
  {
    id: 8,
    nome: "Espátula Angular 10cm",
    descricao: "Especializada para acabamentos em cantos e laterais de bolos com ângulo perfeito.",
    beneficios: ["Ângulo especial", "Lâmina flexível", "Acabamento premium"],
    imagem: spatula10,
  },
  {
    id: 9,
    nome: "Espátula Flexível 12cm",
    descricao: "Flexibilidade superior para trabalhos delicados, mousses e sobremesas cremosas.",
    beneficios: ["Ultra flexível", "Controle preciso", "Cantos arredondados"],
    imagem: spatula11,
  },
  {
    id: 10,
    nome: "Espátula para Massas 15cm",
    descricao: "Desenvolvida especialmente para trabalhar massas, pastas e preparações densas.",
    beneficios: ["Textura perfeita", "Resistência", "Acabamento profissional"],
    imagem: spatula12,
  },
  {
    id: 11,
    nome: "Espátula Dentada 10cm",
    descricao: "Com dentes especiais para criar texturas decorativas em coberturas e glacês.",
    beneficios: ["Efeitos decorativos", "Dentes precisos", "Criatividade"],
    imagem: spatula13,
  },
  {
    id: 13,
    nome: "Espátula para Buttercream 20cm",
    descricao: "Perfeita para aplicar e alisar buttercream em bolos com acabamento profissional.",
    beneficios: ["Acabamento liso", "Lâmina flexível", "Controle total"],
    imagem: spatula15,
  },
  {
    id: 14,
    nome: "Espátula de Canto 8cm",
    descricao: "Formato especial para acabamentos perfeitos em cantos e bordas de bolos.",
    beneficios: ["Cantos perfeitos", "Design especial", "Precisão absoluta"],
    imagem: spatula16,
  },
  {
    id: 15,
    nome: "Espátula para Chantilly 25cm",
    descricao: "Ideal para aplicação e acabamento de chantilly em bolos e tortas.",
    beneficios: ["Superfície lisa", "Lâmina larga", "Acabamento impecável"],
    imagem: spatula17,
  },
  {
    id: 16,
    nome: "Espátula Profissional Inox 12cm",
    descricao: "Fabricada em aço inoxidável de alta qualidade, segura para alimentos e máxima durabilidade.",
    beneficios: ["Aço inoxidável", "Food safe", "Vida útil prolongada"],
    imagem: spatula18,
  },
  {
    id: 17,
    nome: "Espátula para Recheios 10cm",
    descricao: "Especialmente desenvolvida para aplicação de recheios entre camadas de bolos.",
    beneficios: ["Aplicação precisa", "Lâmina resistente", "Fácil limpeza"],
    imagem: spatula19,
  },
  {
    id: 18,
    nome: "Espátula Premium para Confeitaria 18cm",
    descricao: "Versão premium com tecnologia avançada para confeiteiros profissionais exigentes.",
    beneficios: ["Qualidade premium", "Tecnologia avançada", "Performance superior"],
    imagem: spatula20,
  },
  {
    id: 19,
    nome: "Espátula para Decoração 15cm",
    descricao: "Lâmina ultra fina para decorações delicadas e acabamentos que exigem perfeição.",
    beneficios: ["Lâmina ultra fina", "Acabamento delicado", "Controle total"],
    imagem: spatula21,
  },
];

const CatalogoSection = () => {
  return (
    <section id="catalogo" className="py-12 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            LINHA DE PRODUTOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Catálogo de <span className="text-gradient">Espátulas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Linha completa para todas as necessidades de confeitaria e culinária profissional
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
