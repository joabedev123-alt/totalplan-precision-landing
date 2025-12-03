import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VantagensSection from "@/components/VantagensSection";
import SobreSection from "@/components/SobreSection";
import CatalogoSection from "@/components/CatalogoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Totalpan - Espátulas Profissionais para Confeitaria e Culinária</title>
        <meta
          name="description"
          content="Espátulas profissionais de alta performance Totalpan. Aço inoxidável premium, ergonomia e durabilidade para confeitaria, bolos, chapas e culinária profissional. Entrega para todo o Brasil."
        />
        <meta
          name="keywords"
          content="espátulas culinárias, espátulas confeitaria, espátulas para bolos, espátulas chapa, utensílios culinários, ferramentas confeitaria, Totalpan"
        />
        <link rel="canonical" href="https://totalpan.com.br" />

        {/* Open Graph */}
        <meta property="og:title" content="Totalpan - Espátulas Profissionais Culinárias" />
        <meta property="og:description" content="Utensílios de alta performance para profissionais da confeitaria e culinária que exigem qualidade e precisão perfeita." />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Totalpan",
            "description": "Espátulas profissionais de alta performance para confeitaria, bolos e culinária",
            "url": "https://totalpan.com.br",
            "telephone": "+5519994826736",
            "email": "vendas@rfcampanaro.com.br",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Maranhão, 123",
              "addressLocality": "Amparo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <VantagensSection />
          <SobreSection />
          <CatalogoSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
