import LayoutDashboard from "./components/LayoutDashboard";
import SettingsView from "./components/SettingsView";

export default function Configuracoes() {
  return (
    <>
      <title>Configurações | Mukanda Cloud</title>

      <LayoutDashboard title="Configurações">
        <section>
          <SettingsView />
        </section>
      </LayoutDashboard>
    </>
  );
}
