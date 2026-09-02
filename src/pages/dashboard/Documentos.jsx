import LayoutDashboard from "./components/LayoutDashboard";
import FilesView from "./components/FilesView";

const documents = [
  {
    id: 1,
    name: "Relatório Financeiro 2026.pdf",
    type: "pdf",
    size: "2.4 MB",
    date: "Hoje, 10:42",
    location: "Documentos / Financeiro",
  },
  {
    id: 2,
    name: "Contrato de Prestação de Serviços.docx",
    type: "word",
    size: "845 KB",
    date: "Hoje, 09:18",
    location: "Documentos / Contratos",
  },
  {
    id: 3,
    name: "Apresentação Institucional.pptx",
    type: "powerpoint",
    size: "4.8 MB",
    date: "Ontem, 16:30",
    location: "Documentos / Institucional",
  },
  {
    id: 4,
    name: "Mapa de Vendas.xlsx",
    type: "excel",
    size: "1.2 MB",
    date: "Ontem, 14:12",
    location: "Documentos / Vendas",
  },
  {
    id: 5,
    name: "Fotografia da equipa.jpg",
    type: "image",
    size: "3.6 MB",
    date: "Ontem, 11:05",
    location: "Imagens",
  },
  {
    id: 6,
    name: "Política de Privacidade.pdf",
    type: "pdf",
    size: "1.1 MB",
    date: "12 Ago, 15:40",
    location: "Documentos / Jurídico",
  },
  {
    id: 7,
    name: "Lista de Funcionários.xlsx",
    type: "excel",
    size: "720 KB",
    date: "12 Ago, 10:24",
    location: "Documentos / RH",
  },
  {
    id: 8,
    name: "Manual do Utilizador.docx",
    type: "word",
    size: "2.1 MB",
    date: "11 Ago, 17:08",
    location: "Documentos / Manuais",
  },
  {
    id: 9,
    name: "Logotipo da empresa.png",
    type: "image",
    size: "540 KB",
    date: "11 Ago, 09:42",
    location: "Imagens",
  },
  {
    id: 10,
    name: "Documento interno.dat",
    type: "default",
    size: "320 KB",
    date: "10 Ago, 14:20",
    location: "Documentos",
  },
];

export default function Documentos() {
  return (
    <>
      <title>Documentos | Mukanda Cloud</title>

      <LayoutDashboard title="Documentos">
        <section>
          <FilesView files={documents} />
        </section>
      </LayoutDashboard>
    </>
  );
}
