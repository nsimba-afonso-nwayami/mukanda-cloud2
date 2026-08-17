import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SuporteBg from "../../assets/img/suporte.jpg";

export default function Suporte() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${SuporteBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      {/* Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Precisa de
              <span className="text-cyan-500"> ajuda?</span>
            </h1>

            <p className="mt-7 text-lg text-slate-300 leading-relaxed max-w-xl">
              Estamos aqui para ajudar. Encontre respostas para as suas dúvidas
              ou entre diretamente em contacto com a nossa equipa de suporte.
            </p>

            <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
              Se está com dificuldades para utilizar o Mukanda Cloud, configurar
              a sua conta ou gerir os seus documentos, fale connosco. A nossa
              equipa está pronta para ajudar.
            </p>

            {/* Canais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {/* Email */}
              <a
                href="mailto:suporte@mukandacloud.com"
                className="group bg-slate-900/90 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/50 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                  <i className="fas fa-envelope"></i>
                </div>

                <p className="mt-4 text-white font-semibold">Email</p>

                <p className="mt-1 text-sm text-slate-500">
                  suporte@mukandacloud.com
                </p>
              </a>

              {/* Telefone */}
              <a
                href="tel:+244900000000"
                className="group bg-slate-900/90 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/50 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                  <i className="fas fa-headset"></i>
                </div>

                <p className="mt-4 text-white font-semibold">Suporte</p>

                <p className="mt-1 text-sm text-slate-500">+244 900 000 000</p>
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              <HashLink
                to="/#contato"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition font-medium"
              >
                Contactar a equipa
                <i className="fas fa-arrow-right text-sm"></i>
              </HashLink>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition font-medium"
              >
                Voltar à página inicial
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Área de ajuda */}
          <div className="relative">
            <div className="bg-slate-900/90 backdrop-blur-md border border-blue-900/50 rounded-3xl p-8 md:p-10">
              {/* Cabeçalho */}
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-2xl">
                  <i className="fas fa-life-ring"></i>
                </div>

                <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white">
                  Como podemos ajudar?
                </h2>

                <p className="mt-3 text-slate-400">
                  Encontre rapidamente a área onde precisa de ajuda.
                </p>
              </div>

              {/* Opções */}
              <div className="mt-8 space-y-4">
                <HashLink
                  to="/#como-funciona"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-blue-900/40 hover:border-cyan-500/50 transition"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <i className="fas fa-circle-question"></i>
                  </div>

                  <div className="flex-1">
                    <p className="text-white font-medium">Como funciona?</p>

                    <p className="text-sm text-slate-500 mt-1">
                      Saiba como utilizar o Mukanda Cloud.
                    </p>
                  </div>

                  <i className="fas fa-chevron-right text-slate-600 group-hover:text-cyan-500 transition"></i>
                </HashLink>

                <Link
                  to="/seguranca"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-blue-900/40 hover:border-cyan-500/50 transition"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <i className="fas fa-shield-halved"></i>
                  </div>

                  <div className="flex-1">
                    <p className="text-white font-medium">Segurança</p>

                    <p className="text-sm text-slate-500 mt-1">
                      Conheça os recursos de proteção.
                    </p>
                  </div>

                  <i className="fas fa-chevron-right text-slate-600 group-hover:text-cyan-500 transition"></i>
                </Link>

                <HashLink
                  to="/#contato"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-blue-900/40 hover:border-cyan-500/50 transition"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <i className="fas fa-comments"></i>
                  </div>

                  <div className="flex-1">
                    <p className="text-white font-medium">Falar com a equipa</p>

                    <p className="text-sm text-slate-500 mt-1">
                      Entre em contacto connosco.
                    </p>
                  </div>

                  <i className="fas fa-chevron-right text-slate-600 group-hover:text-cyan-500 transition"></i>
                </HashLink>
              </div>

              {/* Status */}
              <div className="mt-8 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>

                <span className="text-sm text-slate-300">
                  A nossa equipa está pronta para ajudar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
