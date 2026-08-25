import Button from "../../components/Button";
import SegurancaBg from "../../assets/img/seguranca.jpg";

export default function NossaSeguranca() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center overflow-hidden flex items-center border-b border-blue-900/30"
      style={{
        backgroundImage: `url(${SegurancaBg})`,
      }}
    >
      {/* Overlay de contraste */}
      <div className="absolute inset-0 bg-slate-950/90" />

      {/* Glow ambiental de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo Principal */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Os seus dados,{" "}
              <span className="text-cyan-500">
                protegidos em todos os momentos.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              A segurança dos documentos da sua empresa é uma prioridade. O
              Mukanda Cloud foi desenvolvido para proporcionar um ambiente
              seguro para armazenar, gerir e partilhar os seus arquivos.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Com controlo de acessos e permissões, a sua empresa consegue
              definir quem pode visualizar, editar ou gerir cada documento,
              mantendo as informações importantes sempre sob controlo.
            </p>

            {/* Cartões de Destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-shield-halved text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold text-base">
                  Proteção
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Os seus arquivos protegidos
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-user-lock text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold text-base">
                  Acessos
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Controlo sobre os utilizadores
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                <i className="fas fa-key text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold text-base">
                  Permissões
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Cada acesso no seu lugar
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                to="/cadastrar"
                variant="primary"
              >
                Começar agora
              </Button>

              <Button
                to="/#contato"
                variant="secondary"
              >
                Fale connosco
              </Button>
            </div>
          </div>

          {/* Área visual (Mockup Card) */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-slate-900/90 backdrop-blur-md border border-blue-900/50 rounded-3xl p-8 shadow-2xl shadow-cyan-950/20">
                {/* Cabeçalho do Card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                      <i className="fas fa-shield-halved text-lg"></i>
                    </div>

                    <div>
                      <p className="text-white font-semibold">Segurança</p>
                      <p className="text-xs text-slate-400">Mukanda Cloud</p>
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                </div>

                <div className="h-px bg-blue-900/40 my-8" />

                {/* Lista de itens de Segurança */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                      <i className="fas fa-user-shield"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Controlo de acesso
                      </p>

                      <p className="text-xs text-slate-400 mt-0.5">
                        Utilizadores autorizados
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500 shrink-0"></i>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                      <i className="fas fa-lock"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Documentos protegidos
                      </p>

                      <p className="text-xs text-slate-400 mt-0.5">
                        Gestão segura dos arquivos
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500 shrink-0"></i>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30 hover:border-cyan-500/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                      <i className="fas fa-user-lock"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Permissões
                      </p>

                      <p className="text-xs text-slate-400 mt-0.5">
                        Acesso conforme a função
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500 shrink-0"></i>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-8 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3">
                  <i className="fas fa-shield-halved text-cyan-500"></i>

                  <span className="text-xs sm:text-sm text-slate-300">
                    Ambiente protegido e controlado
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
