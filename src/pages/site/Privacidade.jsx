import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import NossaPrivacidade from "../../components/privacidade/NossaPrivacidade";

export default function Privacidade() {
  return (
    <>
      <title>Privacidade | Mukanda Cloud 2</title>

      <NossaPrivacidade/>

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
