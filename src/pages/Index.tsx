import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VantagensSection from "@/components/VantagensSection";
import SobreSection from "@/components/SobreSection";
import CatalogoSection from "@/components/CatalogoSection";
import EspecificacoesSection from "@/components/EspecificacoesSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import GarantiaSection from "@/components/GarantiaSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TotalPlan - Espátulas Profissionais para Construção e Acabamento</title>
        <meta
          name="description"
          content="Espátulas profissionais de alta performance TotalPlan. Aço inoxidável premium, ergonomia e durabilidade para acabamento perfeito. Entrega para todo o Brasil."
        />
        <meta
          name="keywords"
          content="espátulas profissionais, ferramentas construção, acabamento, massa corrida, epóxi, cimento queimado, TotalPlan"
        />
        <link rel="canonical" href="https://totalplan.com.br" />

        {/* Open Graph */}
        <meta property="og:title" content="TotalPlan - Espátulas Profissionais" />
        <meta property="og:description" content="Ferramentas de alta performance para profissionais que exigem qualidade e acabamento perfeito." />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TotalPlan",
            "description": "Espátulas profissionais de alta performance para construção e acabamento",
            "url": "https://totalplan.com.br",
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
          <EspecificacoesSection />
          <DepoimentosSection />
          <GarantiaSection />
          <CTASection />
          <FAQSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
