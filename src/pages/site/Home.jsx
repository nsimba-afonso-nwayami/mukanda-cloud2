import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Hero from "../../components/home/Hero";
import CloudBenefits from "../../components/home/CloudBenefits";
import ComoFunciona from "../../components/home/ComoFunciona";
import Planos from "../../components/home/Planos";
import Parallax from "../../components/home/Parallax";
import Contato from "../../components/home/Contato";

export default function Home() {
  return (
    <>
      <title>Mukanda Cloud 2</title>

      <Hero />
      <CloudBenefits />
      <ComoFunciona />
      <Planos />
      <Parallax />
      <Contato />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
