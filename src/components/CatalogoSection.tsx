import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

// Import all product images dynamically
const productImages = import.meta.glob('../pastadeprodutos/espatula para codificação/*.jpg', { eager: true, as: 'url' });
const productImages02 = import.meta.glob('../assets/Espatulas02/*.jpg', { eager: true, as: 'url' });
const productImages04 = import.meta.glob('../assets/espatulas04/*.jpg', { eager: true, as: 'url' });

const productsData = [

  {
    "id": "1150",
    "nome": "Espátula Profissional 1150",
    "descricao": "Construção/Pintura",
    "sizes": [
      "02",
      "04",
      "06",
      "08",
      "10",
      "12"
    ],
    "image": "1150-06.jpg"
  },
  {
    "id": "1414",
    "nome": "Espátula Profissional 1414",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12",
      "14"
    ],
    "image": "1414-12.jpg"
  },
  {
    "id": "1419",
    "nome": "Espátula Profissional 1419",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12"
    ],
    "image": "1419-12.jpg"
  },
  {
    "id": "1501",
    "nome": "Espátula Profissional 1501",
    "descricao": "Lanche",
    "sizes": [
      "10",
      "12"
    ],
    "image": "1501-10  ou  1501-12.jpg"
  },
  {
    "id": "1502",
    "nome": "Espátula Profissional 1502",
    "descricao": "Lanche",
    "sizes": [
      "10",
      "12"
    ],
    "image": "1502-10 ou 1502-12.jpg"
  },
  {
    "id": "1503",
    "nome": "TRIÂNGULO MARCADOR",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "1503-01.jpg"
  },
  {
    "id": "1505",
    "nome": "GARRA DE URSO PARA CARNES",
    "descricao": "Churrasco",
    "sizes": [
      "12"
    ],
    "image": "1505-05.jpg"
  },
  {
    "id": "1507",
    "nome": "Espátula Profissional 1507",
    "descricao": "Confeitaria",
    "sizes": [
      "12",
      "18",
      "22"
    ],
    "image": "1507-18.jpg"
  },
  {
    "id": "1508",
    "nome": "Espátula Profissional 1508",
    "descricao": "Pizzaria",
    "sizes": [
      "10",
      "11",
      "12",
      "15",
      "25"
    ],
    "image": "1508-10.jpg"
  },
  {
    "id": "1510",
    "nome": "Espátula Profissional 1510",
    "descricao": "Pizzaria",
    "sizes": [
      "06",
      "10",
      "12"
    ],
    "image": "1510-12.jpg"
  },
  {
    "id": "1511",
    "nome": "Espátula Profissional 1511",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12"
    ],
    "image": "1511-12.jpg"
  },
  {
    "id": "1514",
    "nome": "Espátula Profissional 1514",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12",
      "14",
      "16"
    ],
    "image": "1514-10 (2).jpg"
  },
  {
    "id": "1518",
    "nome": "ESPÁTULA HAMBURGUER",
    "descricao": "Chapa/Hamburguer",
    "sizes": [
      "Tamanho Único 11"
    ],
    "image": "1518-11.jpg"
  },
  {
    "id": "1519",
    "nome": "Espátula Profissional 1519",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12",
      "14",
      "16"
    ],
    "image": "1519-08.jpg"
  },
  {
    "id": "1601",
    "nome": "Espátula Profissional 1601",
    "descricao": "Espátula profissional de alta qualidade. Disponível em diversos tamanhos.",
    "sizes": [
      "10",
      "12"
    ],
    "image": "1601-10.jpg"
  },
  {
    "id": "1602",
    "nome": "Espátula Profissional 1602",
    "descricao": "Espátula profissional de alta qualidade. Disponível em diversos tamanhos.",
    "sizes": [
      "10",
      "12"
    ],
    "image": "1602-10.jpg"
  },
  {
    "id": "1610",
    "nome": "ESPÁTULA RASPAR CONGELADOR",
    "descricao": "Congelador",
    "sizes": [
      "04"
    ],
    "image": "1610-04.jpg"
  },
  {
    "id": "1614",
    "nome": "Espátula Profissional 1614",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12"
    ],
    "image": "1614-08.jpg"
  },
  {
    "id": "1619",
    "nome": "Espátula Profissional 1619",
    "descricao": "Lanche",
    "sizes": [
      "08",
      "10",
      "12"
    ],
    "image": "1619-08.jpg"
  },
  {
    "id": "1714",
    "nome": "CABO DE BAQUELITE RESISTENTE À ALTAS TEMPERATURAS",
    "descricao": "Lanche",
    "sizes": [
      "12"
    ],
    "image": "1714-12.jpg"
  },
  {
    "id": "1715",
    "nome": "CABO DE BAQUELITE RESISTENTE À ALTAS TEMPERATURAS 1715",
    "descricao": "Espátula profissional de alta qualidade. Disponível em diversos tamanhos.",
    "sizes": [
      "12"
    ],
    "image": "1715-12.jpg"
  },
  {
    "id": "2500",
    "nome": "Espátula Profissional 2500",
    "descricao": "Confeitaria",
    "sizes": [
      "10",
      "15"
    ],
    "image": "2500-15.jpg"
  },
  {
    "id": "2501",
    "nome": "ESPÁTULA CONFEITAR",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único 15"
    ],
    "image": "2501-15.jpg"
  },
  {
    "id": "2503-01",
    "nome": "Espátula Profissional 2503-01",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2503-01.jpg"
  },
  {
    "id": "2503-02",
    "nome": "Espátula Profissional 2503-02",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2503-02.jpg"
  },
  {
    "id": "2503-03",
    "nome": "Espátula Profissional 2503-03",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2503-03.jpg"
  },
  {
    "id": "2503-04",
    "nome": "Espátula Profissional 2503-04",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2503-04.jpg"
  },
  {
    "id": "2504-01",
    "nome": "Banhar Profissional 2504-01",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2504-01.jpg"
  },
  {
    "id": "2504-02",
    "nome": "Garfo Banhar duas pontas 2504-02",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2504-02.jpg"
  },
  {
    "id": "2504-03",
    "nome": "Garfo Banhar três pontas 2504-03",
    "descricao": "Confeitaria",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2504-03.jpg"
  },
  {
    "id": "2505",
    "nome": "Espátula Profissional 2505",
    "descricao": "Torta",
    "sizes": [
      "06"
    ],
    "image": "2505-06.jpg"
  },
  {
    "id": "2511",
    "nome": "Espátula Profissional 2511",
    "descricao": "Confeitaria",
    "sizes": [
      "05"
    ],
    "image": "2511-05.jpg"
  },
  {
    "id": "2513",
    "nome": "Espátula Profissional 2513",
    "descricao": "Confeitaria",
    "sizes": [
      "06"
    ],
    "image": "2513-06.jpg"
  },
  {
    "id": "2514",
    "nome": "ESPÁTULA LAZANHA",
    "descricao": "Cozinha",
    "sizes": [
      "Tamanho Único 7cm"
    ],
    "image": "2514-07.jpg"
  },
  {
    "id": "2515",
    "nome": "Espátula Profissional 2515",
    "descricao": "Descamar",
    "sizes": [
      "05",
      "07"
    ],
    "image": "2515-07 (1).jpg"
  },
  {
    "id": "2516/07",
    "nome": "ESPÁTULA COZINHA",
    "descricao": "Cozinha",
    "sizes": [
      "07"
    ],
    "image": "2516-07.jpg"
  },
  {
    "id": "2516/10",
    "nome": "ESPÁTULA COZINHA",
    "descricao": "Cozinha",
    "sizes": [
      "10"
    ],
    "image": "2516-10.jpg"
  },
  {
    "id": "2517",
    "nome": "Espátula Profissional 2517",
    "descricao": "Pizzaria / Cortar e Servir",
    "sizes": [
      "17"
    ],
    "image": "2517-17.jpg"
  },
  {
    "id": "2518",
    "nome": "Espátula Profissional 2518",
    "descricao": "Lanche",
    "sizes": [
      "12",
      "14"
    ],
    "image": "2518-14.jpg"
  },
  {
    "id": "2520/6",
    "nome": "ESPÁTULA FRITURA",
    "descricao": "Peixe",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2520-06.jpg"
  },
  {
    "id": "2520/07",
    "nome": "ESPÁTULA FRITURA",
    "descricao": "Fritura",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "2520-07.jpg"
  },
  {
    "id": "2521",
    "nome": "Espátula Profissional 2521",
    "descricao": "Confeitaria",
    "sizes": [
      "10",
      "15",
      "20"
    ],
    "image": "2521-15.jpg"
  },
  {
    "id": "2522",
    "nome": "Espátula Profissional 2522",
    "descricao": "Confeitaria",
    "sizes": [
      "10",
      "15",
      "20"
    ],
    "image": "2522-15(2).jpg"
  },
  {
    "id": "2526",
    "nome": "Espátula Profissional 2526",
    "descricao": "Esfiha",
    "sizes": [
      "12"
    ],
    "image": "2526-12.jpg"
  },
  {
    "id": "2527",
    "nome": "Espátula Profissional 2527",
    "descricao": "Esfiha",
    "sizes": [
      "12"
    ],
    "image": "2527-12.jpg"
  },
  {
    "id": "2528",
    "nome": "Espátula Profissional 2528",
    "descricao": "Confeitaria",
    "sizes": [
      "20",
      "25",
      "30",
      "35",
      "40"
    ],
    "image": "2528-25.jpg"
  },
  {
    "id": "2530",
    "nome": "Espátula Profissional 2530",
    "descricao": "Confeitaria",
    "sizes": [
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40"
    ],
    "image": "2530-40.jpg"
  },
  {
    "id": "2531",
    "nome": "Espátula Profissional 2531",
    "descricao": "Confeitaria",
    "sizes": [
      "15",
      "20",
      "25",
      "30",
      "35",
      "40"
    ],
    "image": "2531-25.jpg"
  },
  {
    "id": "2532",
    "nome": "Espátula Profissional 2532",
    "descricao": "Confeitaria",
    "sizes": [
      "10",
      "15",
      "20",
      "25",
      "30",
      "35"
    ],
    "image": "2532-20.jpg"
  },
  {
    "id": "2536",
    "nome": "Espátula Profissional 2536",
    "descricao": "Confeitaria",
    "sizes": [
      "20",
      "25",
      "30",
      "35",
      "40",
      "45"
    ],
    "image": "2536-30.jpg"
  },
  {
    "id": "2537",
    "nome": "Espátula Profissional 2537",
    "descricao": "Confeitaria",
    "sizes": [
      "20",
      "25",
      "30",
      "35",
      "40",
      "45"
    ],
    "image": "2537-30.jpg"
  },
  {
    "id": "3500",
    "nome": "ESPÁTULA MANTEIGA",
    "descricao": "Cozinha",
    "sizes": [
      "Tamanho Único 10cm"
    ],
    "image": "3500-04.jpg"
  },
  {
    "id": "3528",
    "nome": "Espátula Profissional 3528",
    "descricao": "Serrilhadas",
    "sizes": [
      "20",
      "25",
      "30",
      "35",
      "40",
      "45"
    ],
    "image": "4520-10.jpg"
  },
  {
    "id": "4520",
    "nome": "Faca Fiambre 4520",
    "descricao": "Fiambre",
    "sizes": [
      "08\"",
      "10\"",
      "12\"",
      "14\"",
      "16\""
    ],
    "image": "4520-10.jpg"
  },
  {
    "id": "4530",
    "nome": "Espátula Profissional 4530",
    "descricao": "Faca de Pão",
    "sizes": [
      "08\"",
      "10\""
    ],
    "image": "4530-08.jpg"
  },
  {
    "id": "6510/10",
    "nome": "Cortador Profissional 6510",
    "descricao": "Pizzaria",
    "sizes": [
      "10"
    ],
    "image": "6510-10.jpg"
  },
  {
    "id": "6510/07",
    "nome": "Cortador Profissional 6510",
    "descricao": "Pizzaria",
    "sizes": [
      "07"
    ],
    "image": "6510-07.jpg"
  },
  {
    "id": "6516",
    "nome": "Cortador Profissional 6516",
    "descricao": "Pizzaria",
    "sizes": [
      "50"
    ],
    "image": "6516-50.jpg"
  },
  {
    "id": "6520",
    "nome": "CARRETILHA CORTAR MASSAS",
    "descricao": "Panificação",
    "sizes": [
      "05"
    ],
    "image": "6520-05.jpg"
  },
  {
    "id": "6530",
    "nome": "CARRETILHA FECHAR MASSAS",
    "descricao": "Panificação",
    "sizes": [
      "05"
    ],
    "image": "6530-05.jpg"
  },
  {
    "id": "6550",
    "nome": "CARRETINHA DUPLA CORTAR E FECHAR MASSAS",
    "descricao": "Panificação",
    "sizes": [
      "05"
    ],
    "image": "6550-05.jpg"
  },
  {
    "id": "9510",
    "nome": "Martelo Profissional 9510",
    "descricao": "MARTELO AMACIADOR DE CARNE EM ALUMINIO FUNDIDO.",
    "sizes": [
      "Tamanho Único"
    ],
    "image": "9510-10.jpg"
  },
  {
    "id": "9512",
    "nome": "PLACA SALVA BOLO ou PARA PIZZAS",
    "descricao": "Confeitaria",
    "sizes": [
      "30"
    ],
    "image": "9512-30.jpg"
  },
  {
    "id": "9545",
    "nome": "PÁ LISA C/ CABO 90CM",
    "descricao": "Pizzaria",
    "sizes": [
      "30",
      "35",
      "40",
      "45"
    ],
    "image": "PÁ LISA  (9550).jpg"
  },
  {
    "id": "9550",
    "nome": "PÁ LISA C/ CABO 1,70M",
    "descricao": "Pizzaria",
    "sizes": [
      "30",
      "35",
      "40",
      "45"
    ],
    "image": "PÁ LISA  (9550).jpg"
  },
  {
    "id": "CABOS",
    "nome": "CABOS COLORIDOS PARA TODOS OS ITENS",
    "descricao": "COR E QUANTIDADE SOB CONSULTA",
    "sizes": [
      "Consultar"
    ],
    "image": "CABOS COLORIDOS 2.jpg"
  }
];

const CatalogoSection = () => {
  const getImageUrl = (filename: string) => {
    // Try to find image in the first folder
    const key1 = `../pastadeprodutos/espatula para codificação/${filename}`;
    if (productImages[key1]) return productImages[key1] as string;

    // Try to find image in the second folder (Espatulas02)
    const key2 = `../assets/Espatulas02/${filename}`;
    if (productImages02[key2]) return productImages02[key2] as string;

    // Try to find image in the third folder (espatulas04)
    const key3 = `../assets/espatulas04/${filename}`;
    if (productImages04[key3]) return productImages04[key3] as string;

    // Return a placeholder or the filename itself if not found
    return filename;
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {productsData.map((produto, index) => (
            <div
              key={produto.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-card-hover animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-muted flex items-center justify-center p-4">
                <img
                  src={getImageUrl(produto.image)}
                  alt={produto.nome}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {produto.nome}
                  </h3>
                  <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                    Ref: {produto.id}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {produto.descricao}
                </p>

                {/* Sizes */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Tamanhos Disponíveis:</span>
                  <div className="flex flex-wrap gap-2">
                    {produto.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                      >
                        {size.match(/["']$|pol$/i) || size === "Tamanho Único" ? size : `${size} cm`}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group/btn" asChild>
                  <a
                    href={`https://wa.me/5519994826736?text=Olá! Tenho interesse na ${produto.nome} (Ref: ${produto.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Cotar no WhatsApp
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
