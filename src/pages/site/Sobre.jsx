import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import QuemSomos from "../../components/sobre/QuemSomos";

export default function Sobre() {
  return (
    <>
      <title>Sobre | Mukanda Cloud 2</title>

      <QuemSomos />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
