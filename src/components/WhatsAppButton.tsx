import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5519994826736?text=Olá! Gostaria de mais informações sobre as espátulas Totalpan."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-none"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />
        </a>
    );
};

export default WhatsAppButton;
