import LayoutDashboard from "./components/LayoutDashboard";
import SharedView from "./components/SharedView";

const sharedItems = [
  {
    id: 1,
    name: "Relatório Financeiro 2026.pdf",
    type: "pdf",
    size: "2.4 MB",
    sharedBy: "João Manuel",
    sharedAt: "Hoje, 10:42",
    location: "Documentos / Financeiro",
    itemType: "file",
  },
  {
    id: 2,
    name: "Contrato de Prestação de Serviços.docx",
    type: "word",
    size: "845 KB",
    sharedBy: "Ana Maria",
    sharedAt: "Hoje, 09:18",
    location: "Documentos / Contratos",
    itemType: "file",
  },
  {
    id: 3,
    name: "Mapa de Vendas.xlsx",
    type: "excel",
    size: "1.2 MB",
    sharedBy: "Carlos José",
    sharedAt: "Ontem, 14:12",
    location: "Documentos / Vendas",
    itemType: "file",
  },
  {
    id: 4,
    name: "Projetos 2026",
    type: "folder",
    sharedBy: "Pedro António",
    sharedAt: "Ontem, 11:30",
    location: "Meu espaço / Projetos",
    itemType: "folder",
  },
  {
    id: 5,
    name: "Documentos Jurídicos",
    type: "folder",
    sharedBy: "Ana Maria",
    sharedAt: "12 Ago, 15:40",
    location: "Meu espaço / Documentos",
    itemType: "folder",
  },
];

export default function Partilhados() {
  return (
    <>
      <title>Partilhados | Mukanda Cloud</title>

      <LayoutDashboard title="Partilhados">
        <section>
          <SharedView sharedItems={sharedItems} />
        </section>
      </LayoutDashboard>
    </>
  );
}
