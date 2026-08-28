import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LoginBg from "../../assets/img/login2.jpg";

export default function Login() {
  return (
    <>
      <title>Entrar | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${LoginBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Formulário */}
        <div className="relative z-10 w-full max-w-sm">
          <div className="bg-slate-950/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
            {/* Cabeçalho */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-lg font-semibold"
              >
                Mukanda Cloud
              </Link>

              <h1 className="mt-6 text-2xl font-bold text-white">
                Bem-vindo de volta
              </h1>

              <p className="mt-1.5 text-sm text-slate-400">
                Entre na sua conta para continuar.
              </p>
            </div>

            {/* Formulário */}
            <form className="mt-6 space-y-4">
              {/* Email */}
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

              {/* Palavra-passe */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Palavra-passe
                  </label>

                  <Link
                    to="/recuperar-password"
                    className="text-xs text-cyan-500 hover:text-cyan-300 transition"
                  >
                    Esqueceu-se?
                  </Link>
                </div>

                <div className="relative">
                  <i className="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                  />
                </div>
              </div>

              {/* Botão */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Entrar
              </Button>
            </form>

            {/* Cadastro */}
            <div className="mt-5 pt-5 border-t border-white/10 text-center">
              <p className="text-xs text-slate-400">Ainda não tem uma conta?</p>

              <Link
                to="/cadastrar"
                className="inline-block mt-1.5 text-sm text-cyan-500 font-medium hover:text-cyan-300 transition"
              >
                Criar uma conta
              </Link>
            </div>
          </div>

          {/* Voltar */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 mt-5 text-xs text-slate-500 hover:text-white transition"
          >
            <i className="fas fa-arrow-left"></i>
            Voltar para o Mukanda Cloud
          </Link>
        </div>
      </section>
    </>
  );
}
