import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import NossoSuporte from "../../components/suporte/NossoSuporte";

export default function Suporte() {
  return (
    <>
      <title>Suporte | Mukanda Cloud 2</title>

      <NossoSuporte />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
