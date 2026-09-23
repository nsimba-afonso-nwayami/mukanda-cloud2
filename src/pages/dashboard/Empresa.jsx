import LayoutDashboard from "./components/LayoutDashboard";
import EmpresaView from "./components/EmpresaView";

export default function Empresa() {
  return (
    <>
      <title>Empresa | Mukanda Cloud</title>

      <LayoutDashboard title="Empresa">
        <section>
          <EmpresaView />
        </section>
      </LayoutDashboard>
    </>
  );
}
