import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import NossaSeguranca from "../../components/seguranca/NossaSeguranca";

export default function Seguranca() {
  return (
    <>
      <title>Segurança | Mukanda Cloud 2</title>

      <NossaSeguranca />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
