import Button from "../../components/Button";
import PrivacidadeBg from "../../assets/img/privacidade.jpg";

export default function NossaPrivacidade() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${PrivacidadeBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      {/* Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              A sua informação
              <span className="text-cyan-500"> continua a ser sua.</span>
            </h1>

            <p className="mt-7 text-lg text-slate-300 leading-relaxed max-w-xl">
              No Mukanda Cloud, tratamos os dados da sua empresa com
              responsabilidade, transparência e respeito pela privacidade.
            </p>

            <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
              A nossa plataforma foi pensada para que a sua empresa tenha
              controlo sobre os seus documentos e possa definir quem pode aceder
              às informações armazenadas no sistema.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5">
                <i className="fas fa-user-shield text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold">Privacidade</p>

                <p className="mt-1 text-sm text-slate-500">
                  Respeito pelos seus dados
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5">
                <i className="fas fa-database text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold">Controlo</p>

                <p className="mt-1 text-sm text-slate-500">
                  Os dados sob sua gestão
                </p>
              </div>

              <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5">
                <i className="fas fa-eye text-cyan-500 text-xl"></i>

                <p className="mt-3 text-white font-semibold">Transparência</p>

                <p className="mt-1 text-sm text-slate-500">
                  Informação clara e acessível
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                to="/cadastrar"
                variant="primary"
                iconRight="fas fa-arrow-right"
                className="px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                Começar agora
              </Button>

              <Button
                to="/seguranca"
                variant="secondary"
                iconRight="fas fa-shield-halved"
                className="px-8 py-4 rounded-xl"
              >
                Ver segurança
              </Button>
            </div>
          </div>

          {/* Área visual */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card principal */}
              <div className="bg-slate-900/90 backdrop-blur-md border border-blue-900/50 rounded-3xl p-8">
                {/* Cabeçalho */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center">
                      <i className="fas fa-user-shield text-slate-950"></i>
                    </div>

                    <div>
                      <p className="text-white font-semibold">Privacidade</p>

                      <p className="text-sm text-slate-500">Mukanda Cloud</p>
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
                </div>

                {/* Linha */}
                <div className="h-px bg-blue-900/40 my-8"></div>

                {/* Elementos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                      <i className="fas fa-file-shield"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Dados protegidos
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        Informações sob controlo
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500"></i>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                      <i className="fas fa-users-gear"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Acesso controlado
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        Permissões por utilizador
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500"></i>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-blue-900/30">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                      <i className="fas fa-hand"></i>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Controlo empresarial
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        Gestão dos seus documentos
                      </p>
                    </div>

                    <i className="fas fa-circle-check text-cyan-500"></i>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-8 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3">
                  <i className="fas fa-lock text-cyan-500"></i>

                  <span className="text-sm text-slate-300">
                    A sua privacidade é uma prioridade
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
