import Button from "../../components/Button";
import SobreBg from "../../assets/img/sobre.jpg";

export default function QuemSomos() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center overflow-hidden flex items-center border-b border-blue-900/30"
      style={{
        backgroundImage: `url(${SobreBg})`,
      }}
    >
      {/* Overlay de contraste */}
      <div className="absolute inset-0 bg-slate-950/90" />

      {/* Glow ambiental de fundo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo Principal */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Uma nova forma de{" "}
              <span className="text-cyan-500">gerir os seus documentos.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              O Mukanda Cloud é uma plataforma de gestão e armazenamento de
              arquivos desenvolvida para ajudar empresas a organizar, proteger e
              partilhar os seus documentos de forma simples, segura e eficiente.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Acreditamos que a informação de uma empresa deve estar organizada,
              acessível e protegida. Por isso, criámos uma solução cloud pensada
              para centralizar documentos e facilitar a colaboração entre
              equipas.
            </p>

            {/* Cartões de Destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-cloud text-cyan-500 text-xl"></i>
                <p className="mt-3 text-white font-semibold text-base">
                  Na nuvem
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Acesso aos seus arquivos
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-shield-halved text-cyan-500 text-xl"></i>
                <p className="mt-3 text-white font-semibold text-base">
                  Segurança
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Proteção dos seus dados
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-users text-cyan-500 text-xl"></i>
                <p className="mt-3 text-white font-semibold text-base">
                  Colaboração
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Trabalho em equipa
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                to="/cadastrar"
                variant="primary"
                iconRight="fas fa-arrow-right"
              >
                Começar agora
              </Button>

              <Button
                to="/#contato"
                variant="secondary"
                iconRight="fas fa-headset"
              >
                Fale connosco
              </Button>
            </div>
          </div>

          {/* Área Visual (Mockup Card) */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-slate-900/90 backdrop-blur-md border border-blue-900/50 rounded-3xl p-8 shadow-2xl shadow-cyan-950/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                      <i className="fas fa-cloud text-lg"></i>
                    </div>

                    <div>
                      <p className="text-white font-semibold">Mukanda Cloud</p>
                      <p className="text-xs text-slate-400">
                        Gestão empresarial
                      </p>
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                </div>

                <div className="h-px bg-blue-900/40 my-8" />

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-cyan-400">
                      <i className="fas fa-folder"></i>
                    </div>

                    <div className="flex-1">
                      <div className="h-2.5 w-32 bg-slate-700 rounded-full"></div>
                      <div className="h-2 w-20 bg-slate-800 rounded-full mt-2"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                      <i className="fas fa-file-lines"></i>
                    </div>

                    <div className="flex-1">
                      <div className="h-2.5 w-40 bg-slate-700 rounded-full"></div>
                      <div className="h-2 w-24 bg-slate-800 rounded-full mt-2"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-cyan-400">
                      <i className="fas fa-users"></i>
                    </div>

                    <div className="flex-1">
                      <div className="h-2.5 w-28 bg-slate-700 rounded-full"></div>
                      <div className="h-2 w-16 bg-slate-800 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3">
                  <i className="fas fa-circle-check text-cyan-500"></i>

                  <span className="text-xs sm:text-sm text-slate-300">
                    Documentos protegidos e sincronizados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
