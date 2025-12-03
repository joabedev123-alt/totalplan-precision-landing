import { Mail, Phone, MapPin, FileText } from "lucide-react";
import logo from "/favicon1/Untitled.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="TotalPlan Logo" className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Espátulas profissionais de alta performance para profissionais que
              exigem qualidade, durabilidade e acabamento perfeito.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <FileText className="w-4 h-4" />
              <span>CNPJ: 49.865.103/0001-03</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:vendas@rfcampanaro.com.br"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  vendas@rfcampanaro.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5519994826736"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (19) 99482-6736
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Rua Maranhão, 123<br />
                    Jardim Brasil, Amparo/SP
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#vantagens"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#especificacoes"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Especificações
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} TotalPlan. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Ferramentas profissionais para acabamento de qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
