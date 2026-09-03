import LayoutDashboard from "./components/LayoutDashboard";
import PermissionsView from "./components/PermissionsView";

const users = [
  {
    id: 1,
    name: "João Manuel",
    email: "joao.manuel@empresa.ao",
    department: "Administração",
    role: "Administrador",
    status: "active",
  },
  {
    id: 2,
    name: "Ana Maria",
    email: "ana.maria@empresa.ao",
    department: "Recursos Humanos",
    role: "Editor",
    status: "active",
  },
  {
    id: 3,
    name: "Carlos José",
    email: "carlos.jose@empresa.ao",
    department: "Financeiro",
    role: "Editor",
    status: "active",
  },
  {
    id: 4,
    name: "Pedro António",
    email: "pedro.antonio@empresa.ao",
    department: "Comercial",
    role: "Visualizador",
    status: "pending",
  },
  {
    id: 5,
    name: "Maria Teresa",
    email: "maria.teresa@empresa.ao",
    department: "Jurídico",
    role: "Visualizador",
    status: "suspended",
  },
];

export default function Permissoes() {
  return (
    <>
      <title>Permissões | Mukanda Cloud</title>

      <LayoutDashboard title="Permissões">
        <section>
          <PermissionsView users={users} />
        </section>
      </LayoutDashboard>
    </>
  );
}
