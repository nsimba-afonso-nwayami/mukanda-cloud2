import { Link } from "react-router-dom";
import Button from "../../components/Button";
import EmailVerifiedBg from "../../assets/img/email-verified.jpg";

export default function VerificarEmail() {
  return (
    <>
      <title>Verificar e-mail | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${EmailVerifiedBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-sm">
          <div className="bg-slate-950/45 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
            {/* Logo */}
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

              {/* Ícone */}
              <div className="mx-auto mt-8 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-xl">
                <i className="fas fa-envelope-circle-check"></i>
              </div>

              {/* Título */}
              <h1 className="mt-5 text-2xl font-bold text-white">
                Verifique o seu e-mail
              </h1>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Enviámos um link de verificação para o seu endereço de e-mail.
                Aceda à sua caixa de entrada e confirme a sua conta.
              </p>
            </div>

            {/* Informação */}
            <div className="mt-6 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <i className="fas fa-circle-info text-cyan-500 mt-0.5"></i>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Não encontrou o e-mail? Verifique também a pasta de
                  <span className="text-slate-300"> spam </span>
                  ou
                  <span className="text-slate-300"> lixo eletrónico</span>.
                </p>
              </div>
            </div>

            {/* Ações */}
            <div className="mt-6 space-y-3">
              <Button type="button" variant="primary" fullWidth iconRight="fas fa-rotate-right">
                Redefinir senha
              </Button>

              <Button type="button" variant="secondary" fullWidth iconLeft="fas fa-arrow-left">
                Voltar para entrar
              </Button>
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
