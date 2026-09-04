import LayoutDashboard from "./components/LayoutDashboard";
import StorageView from "./components/StorageView";

export default function Armazenamento() {
  return (
    <>
      <title>Armazenamento | Mukanda Cloud</title>

      <LayoutDashboard title="Armazenamento">
        <section>
          <StorageView />
        </section>
      </LayoutDashboard>
    </>
  );
}
