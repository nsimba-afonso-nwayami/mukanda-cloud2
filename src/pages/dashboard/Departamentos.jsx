import LayoutDashboard from "./components/LayoutDashboard";
import DepartmentsView from "./components/DepartmentsView";

export default function Departamentos() {
  return (
    <>
      <title>Departamentos | Mukanda Cloud</title>

      <LayoutDashboard title="Departamentos">
        <section>
          <DepartmentsView />
        </section>
      </LayoutDashboard>
    </>
  );
}
