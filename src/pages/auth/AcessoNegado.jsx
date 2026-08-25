import { Link } from "react-router-dom";
import Button from "../../components/Button";
import AccessDeniedBg from "../../assets/img/access-denied.jpg";

export default function AcessoNegado() {
  return (
    <>
      <title>Acesso negado | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${AccessDeniedBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70"></div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-sm">
          <div className="bg-slate-950/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
            {/* Logo */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-lg font-semibold"
              >
                Mukanda Cloud
              </Link>

              {/* Ícone */}
              <div className="mx-auto mt-8 w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl">
                <i className="fas fa-lock"></i>
              </div>

              {/* Título */}
              <h1 className="mt-5 text-2xl font-bold text-white">
                Acesso negado
              </h1>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Não tem permissão para aceder a esta página ou realizar esta
                ação.
              </p>
            </div>

            {/* Informação */}
            <div className="mt-6 px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10">
              <div className="flex items-start gap-3">
                <i className="fas fa-circle-info text-slate-500 mt-0.5"></i>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Se acredita que isto é um erro, contacte o administrador da
                  sua empresa.
                </p>
              </div>
            </div>

            {/* Ações */}
            <div className="mt-6 space-y-3">
              <Button
                to="/"
                variant="primary"
                fullWidth
                iconLeft="fas fa-house"
              >
                Ir para o início
              </Button>

              <Button
                to="/entrar"
                variant="secondary"
                fullWidth
                iconLeft="fas fa-arrow-right-to-bracket"
              >
                Entrar noutra conta
              </Button>
            </div>
          </div>

          {/* Rodapé */}
          <p className="text-center mt-5 text-xs text-slate-600">
            Mukanda Cloud · Gestão empresarial na nuvem
          </p>
        </div>
      </section>
    </>
  );
}
