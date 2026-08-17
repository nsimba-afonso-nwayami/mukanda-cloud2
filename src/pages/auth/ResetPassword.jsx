import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ResetPasswordBg from "../../assets/img/reset-password.jpg";

export default function ResetPassword() {
  return (
    <>
      <title>Redefinir senha | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${ResetPasswordBg})`,
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
                <span className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
                  <i className="fas fa-cloud text-slate-950 text-sm"></i>
                </span>
                Mukanda Cloud
              </Link>

              <div className="mx-auto mt-7 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                <i className="fas fa-lock"></i>
              </div>

              <h1 className="mt-5 text-2xl font-bold text-white">
                Redefinir senha
              </h1>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Defina uma nova senha para voltar a aceder à sua conta.
              </p>
            </div>

            {/* Formulário */}
            <form className="mt-6 space-y-4">
              {/* Nova senha */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nova senha
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

              {/* Confirmar senha */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Confirmar nova senha
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

              {/* Botão */}
              <Button type="submit" variant="primary" fullWidth>
                Redefinir senha
              </Button>
            </form>

            {/* Login */}
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
