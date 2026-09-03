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
  {
    id: 4,
    name: "Vendas",
    parentId: 1,
    date: "Ontem, 14:12",
  },
  {
    id: 5,
    name: "Jurídico",
    parentId: 1,
    date: "12 Ago, 15:40",
  },
  {
    id: 6,
    name: "Recursos Humanos",
    parentId: 1,
    date: "12 Ago, 10:24",
  },
  {
    id: 7,
    name: "Manuais",
    parentId: 1,
    date: "11 Ago, 17:08",
  },
  {
    id: 8,
    name: "Imagens",
    parentId: null,
    date: "11 Ago, 09:42",
  },
  {
    id: 9,
    name: "Projetos",
    parentId: null,
    date: "10 Ago, 14:20",
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
    folderId: 2,
  },
  {
    id: 102,
    name: "Contrato de Prestação de Serviços.docx",
    type: "word",
    size: "845 KB",
    date: "Hoje, 09:18",
    location: "Meu espaço / Documentos / Contratos",
    folderId: 3,
  },
  {
    id: 103,
    name: "Mapa de Vendas.xlsx",
    type: "excel",
    size: "1.2 MB",
    date: "Ontem, 14:12",
    location: "Meu espaço / Documentos / Vendas",
    folderId: 4,
  },
  {
    id: 104,
    name: "Política de Privacidade.pdf",
    type: "pdf",
    size: "1.1 MB",
    date: "12 Ago, 15:40",
    location: "Meu espaço / Documentos / Jurídico",
    folderId: 5,
  },
  {
    id: 105,
    name: "Lista de Funcionários.xlsx",
    type: "excel",
    size: "720 KB",
    date: "12 Ago, 10:24",
    location: "Meu espaço / Documentos / Recursos Humanos",
    folderId: 6,
  },
  {
    id: 106,
    name: "Manual do Utilizador.docx",
    type: "word",
    size: "2.1 MB",
    date: "11 Ago, 17:08",
    location: "Meu espaço / Documentos / Manuais",
    folderId: 7,
  },
  {
    id: 107,
    name: "Fotografia da equipa.jpg",
    type: "image",
    size: "3.6 MB",
    date: "Ontem, 11:05",
    location: "Meu espaço / Imagens",
    folderId: 8,
  },
  {
    id: 108,
    name: "Logotipo da empresa.png",
    type: "image",
    size: "540 KB",
    date: "11 Ago, 09:42",
    location: "Meu espaço / Imagens",
    folderId: 8,
  },
  {
    id: 109,
    name: "Documento interno.dat",
    type: "default",
    size: "320 KB",
    date: "10 Ago, 14:20",
    location: "Meu espaço / Documentos",
    folderId: 1,
  },
];

export default function Pastas() {
  return (
    <>
      <title>Pastas | Mukanda Cloud</title>

      <LayoutDashboard title="Pastas">
        <section>
          <FoldersView
            folders={folders}
            files={files}
            onCreateFolder={() => console.log("Nova pasta")}
            onUpload={() => console.log("Upload")}
          />
        </section>
      </LayoutDashboard>
    </>
  );
}
