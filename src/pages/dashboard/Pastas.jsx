import LayoutDashboard from "./components/LayoutDashboard";
import FoldersView from "./components/FoldersView";

const folders = [
  {
    id: 1,
    name: "Documentos",
    parentId: null,
    date: "Hoje, 10:42",
  },
  {
    id: 2,
    name: "Financeiro",
    parentId: 1,
    date: "Hoje, 09:18",
  },
  {
    id: 3,
    name: "Contratos",
    parentId: 1,
    date: "Ontem, 16:30",
  },
];

const files = [
  {
    id: 101,
    name: "Relatório Financeiro 2026.pdf",
    type: "pdf",
    size: "2.4 MB",
    date: "Hoje, 10:42",
    location: "Meu espaço / Documentos / Financeiro",
  },
  {
    id: 102,
    name: "Contrato de Prestação de Serviços.docx",
    type: "word",
    size: "845 KB",
    date: "Hoje, 09:18",
    location: "Meu espaço / Documentos / Contratos",
  },
  {
    id: 103,
    name: "Mapa de Vendas.xlsx",
    type: "excel",
    size: "1.2 MB",
    date: "Ontem, 14:12",
    location: "Meu espaço / Documentos / Vendas",
  },
];

export default function Pastas() {
  return (
    <>
      <title>Pastas | Mukanda Cloud</title>

      <LayoutDashboard title="Pastas">
        <section>
          <FoldersView folders={folders} files={files} />
        </section>
      </LayoutDashboard>
    </>
  );
}
