import LayoutDashboard from "./components/LayoutDashboard";

export default function NotFoundDashboard() {
  return (
    <>
      <title>Página não encontrada | Mukanda Cloud</title>

      <LayoutDashboard title="Página não encontrada">
        <section>
          <h1 className="text-2xl font-bold text-white">Página não encontrada</h1>
          <p className="text-slate-400">
            A página que você está procurando não existe ou foi movida.
          </p>
        </section>
      </LayoutDashboard>
    </>
  );
}
