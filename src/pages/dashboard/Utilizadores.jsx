import LayoutDashboard from "./components/LayoutDashboard";
import UsersView from "./components/UsersView";

const users = [
  {
    id: 1,
    name: "João Manuel",
    email: "joao.manuel@empresa.ao",
    department: "Administração",
    role: "Administrador",
    status: "active",
    lastAccess: "Hoje, 10:42",
  },
  {
    id: 2,
    name: "Ana Maria",
    email: "ana.maria@empresa.ao",
    department: "Recursos Humanos",
    role: "Editor",
    status: "active",
    lastAccess: "Hoje, 09:18",
  },
  {
    id: 3,
    name: "Carlos José",
    email: "carlos.jose@empresa.ao",
    department: "Financeiro",
    role: "Editor",
    status: "active",
    lastAccess: "Ontem, 16:30",
  },
  {
    id: 4,
    name: "Pedro António",
    email: "pedro.antonio@empresa.ao",
    department: "Comercial",
    role: "Visualizador",
    status: "pending",
    lastAccess: "Ainda não acedeu",
  },
  {
    id: 5,
    name: "Maria Teresa",
    email: "maria.teresa@empresa.ao",
    department: "Jurídico",
    role: "Visualizador",
    status: "suspended",
    lastAccess: "12 Ago, 15:40",
  },
];

export default function Utilizadores() {
  return (
    <>
      <title>Utilizadores | Mukanda Cloud</title>

      <LayoutDashboard title="Utilizadores">
        <section>
          <UsersView
            users={users}
            onCreateUser={() => console.log("Novo utilizador")}
          />
        </section>
      </LayoutDashboard>
    </>
  );
}
