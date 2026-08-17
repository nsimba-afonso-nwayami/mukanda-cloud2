import { Link } from "react-router-dom";
import Button from "../../components/Button";
import RegisterBg from "../../assets/img/cadastro.jpg";

export default function Register() {
  return (
    <>
      <title>Criar conta | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
        style={{
          backgroundImage: `url(${RegisterBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Formulário */}
        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-slate-950/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
            {/* Cabeçalho */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-lg font-semibold"
              >
                <span className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
                  <i className="fas fa-cloud text-slate-950 text-sm"></i>
                </span>
                Mukanda Cloud
              </Link>

              <h1 className="mt-6 text-2xl font-bold text-white">
                Criar a sua conta
              </h1>

              <p className="mt-1.5 text-sm text-slate-400">
                Crie o espaço da sua empresa no Mukanda Cloud.
              </p>
            </div>

            {/* Formulário */}
            <form className="mt-6 space-y-4">
              {/* Nome + Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nome
                  </label>

                  <div className="relative">
                    <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Empresa
                  </label>

                  <div className="relative">
                    <i className="fas fa-building absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                    />
                  </div>
                </div>
              </div>

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

              {/* Telefone */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Telefone
                </label>

                <div className="relative">
                  <i className="fas fa-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                  <input
                    type="tel"
                    placeholder="+244 900 000 000"
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                  />
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Palavra-passe */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Palavra-passe
                  </label>

                  <div className="relative">
                    <i className="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                    />
                  </div>
                </div>

                {/* Confirmar */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Confirmar
                  </label>

                  <div className="relative">
                    <i className="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-slate-950/40 border border-white/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:bg-slate-950/60 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Termos */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-0.5 w-4 h-4 accent-cyan-500 cursor-pointer"
                />

                <label
                  htmlFor="terms"
                  className="text-xs text-slate-400 leading-relaxed cursor-pointer"
                >
                  Aceito os{" "}
                  <Link
                    to="/termos"
                    className="text-cyan-500 hover:text-cyan-300 transition"
                  >
                    Termos de utilização
                  </Link>{" "}
                  e a{" "}
                  <Link
                    to="/privacidade"
                    className="text-cyan-500 hover:text-cyan-300 transition"
                  >
                    Política de privacidade
                  </Link>
                  .
                </label>
              </div>

              {/* Botão */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Criar conta
              </Button>
            </form>

            {/* Login */}
            <div className="mt-5 pt-5 border-t border-white/10 text-center">
              <p className="text-xs text-slate-400">Já possui uma conta?</p>

              <Link
                to="/entrar"
                className="inline-block mt-1.5 text-sm text-cyan-500 font-medium hover:text-cyan-300 transition"
              >
                Entrar na minha conta
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
