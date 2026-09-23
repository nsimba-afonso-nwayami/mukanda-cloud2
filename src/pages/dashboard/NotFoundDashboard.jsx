import LayoutDashboard from "./components/LayoutDashboard";
import Button from "../../components/Button";

export default function NotFoundDashboard() {
  return (
    <>
      <title>Página não encontrada | Mukanda Cloud</title>

      <LayoutDashboard title="Página não encontrada">
        <section className="min-h-[calc(100vh-9rem)] flex items-center justify-center">
          <div className="w-full max-w-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <i className="fas fa-file-circle-question text-3xl"></i>
            </div>

            <p className="mt-6 text-sm font-medium text-cyan-500">Erro 404</p>

            <h1 className="mt-2 text-2xl font-semibold text-white">
              Página não encontrada
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              A página que você está procurando não existe, foi movida ou o
              endereço informado está incorreto.
            </p>

            <div className="mt-7 flex justify-center">
              <Button to="/dashboard" iconLeft="fas fa-arrow-left">
                Voltar ao Dashboard
              </Button>
            </div>
          </div>
        </section>
      </LayoutDashboard>
    </>
  );
}
