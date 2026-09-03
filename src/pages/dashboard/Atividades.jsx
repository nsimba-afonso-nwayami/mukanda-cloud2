import LayoutDashboard from "./components/LayoutDashboard";
import ActivityView from "./components/ActivityView";

const activities = [
  {
    id: 1,
    user: {
      id: 1,
      name: "João Manuel",
      email: "joao.manuel@empresa.ao",
      department: "Administração",
    },
    action: "upload",
    resourceType: "file",
    resource: "Relatório Financeiro 2026.pdf",
    location: "Documentos / Financeiro",
    date: "Hoje, 10:42",
    ip: "192.168.1.20",
    status: "success",
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Ana Maria",
      email: "ana.maria@empresa.ao",
      department: "Recursos Humanos",
    },
    action: "edit",
    resourceType: "file",
    resource: "Lista de Funcionários.xlsx",
    location: "Documentos / Recursos Humanos",
    date: "Hoje, 09:18",
    ip: "192.168.1.35",
    status: "success",
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Carlos José",
      email: "carlos.jose@empresa.ao",
      department: "Financeiro",
    },
    action: "create_folder",
    resourceType: "folder",
    resource: "Relatórios 2026",
    location: "Documentos / Financeiro",
    date: "Hoje, 08:56",
    ip: "192.168.1.42",
    status: "success",
  },
  {
    id: 4,
    user: {
      id: 1,
      name: "João Manuel",
      email: "joao.manuel@empresa.ao",
      department: "Administração",
    },
    action: "share",
    resourceType: "folder",
    resource: "Documentos Jurídicos",
    location: "Documentos",
    date: "Ontem, 16:30",
    ip: "192.168.1.20",
    status: "success",
  },
  {
    id: 5,
    user: {
      id: 2,
      name: "Ana Maria",
      email: "ana.maria@empresa.ao",
      department: "Recursos Humanos",
    },
    action: "rename",
    resourceType: "file",
    resource: "Contrato de Trabalho 2026.pdf",
    location: "Documentos / Recursos Humanos",
    date: "Ontem, 15:12",
    ip: "192.168.1.35",
    status: "success",
  },
  {
    id: 6,
    user: {
      id: 5,
      name: "Maria Teresa",
      email: "maria.teresa@empresa.ao",
      department: "Jurídico",
    },
    action: "delete",
    resourceType: "file",
    resource: "Documento Interno.pdf",
    location: "Documentos / Jurídico",
    date: "Ontem, 14:05",
    ip: "192.168.1.51",
    status: "success",
  },
  {
    id: 7,
    user: {
      id: 4,
      name: "Pedro António",
      email: "pedro.antonio@empresa.ao",
      department: "Comercial",
    },
    action: "login",
    resourceType: "system",
    resource: "Acesso ao sistema",
    location: "Mukanda Cloud",
    date: "12 Ago, 09:30",
    ip: "192.168.1.67",
    status: "success",
  },
  {
    id: 8,
    user: {
      id: 3,
      name: "Carlos José",
      email: "carlos.jose@empresa.ao",
      department: "Financeiro",
    },
    action: "download",
    resourceType: "file",
    resource: "Relatório Anual 2025.pdf",
    location: "Documentos / Financeiro",
    date: "11 Ago, 17:42",
    ip: "192.168.1.42",
    status: "success",
  },
];

export default function Atividades() {
  return (
    <>
      <title>Atividades | Mukanda Cloud</title>

      <LayoutDashboard title="Atividades">
        <section>
          <ActivityView activities={activities} />
        </section>
      </LayoutDashboard>
    </>
  );
}
