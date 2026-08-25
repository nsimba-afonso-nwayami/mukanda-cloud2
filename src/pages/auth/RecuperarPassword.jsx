import { Link } from "react-router-dom";
import Button from "../../components/Button";
import RecoverPasswordBg from "../../assets/img/recover-password.jpg";

export default function RecuperarPassword() {
  return (
    <>
      <title>Recuperar senha | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${RecoverPasswordBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-sm">
          {/* Formulário */}
          <div className="bg-slate-950/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
            {/* Cabeçalho */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-lg font-semibold"
              >
                Mukanda Cloud
              </Link>

              <div className="mx-auto mt-7 w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                <i className="fas fa-key"></i>
              </div>

              <h1 className="mt-5 text-2xl font-bold text-white">
                Recuperar senha
              </h1>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Informe o email associado à sua conta e enviaremos as instruções
                para redefinir a sua senha.
              </p>
            </div>

            {/* Formulário */}
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email
                </label>

                <div className="relative">
                  <i className="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                  <input
                    type="email"
                    placeholder="nome@empresa.com"
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Enviar instruções
              </Button>
            </form>

            {/* Voltar para login */}
            <div className="mt-5 pt-5 border-t border-white/10 text-center">
              <Link
                to="/entrar"
                className="inline-flex items-center justify-center gap-2 text-sm text-cyan-500 hover:text-cyan-300 transition"
              >
                <i className="fas fa-arrow-left text-xs"></i>
                Voltar para entrar
              </Link>
            </div>
          </div>

          {/* Página inicial */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 mt-5 text-xs text-slate-500 hover:text-white transition"
          >
            <i className="fas fa-house"></i>
            Mukanda Cloud
          </Link>
        </div>
      </section>
    </>
  );
}
