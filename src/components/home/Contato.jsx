import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-slate-950 py-20 md:py-24 overflow-hidden border-b border-blue-900/30"
    >
      {/* Brilho de fundo ambiental */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Informações de Contacto */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Vamos transformar a gestão dos seus{" "}
              <span className="text-cyan-500">documentos?</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              Tem dúvidas sobre o Mukanda Cloud, os nossos planos ou pretende
              uma solução adaptada à sua empresa? Fale connosco.
            </p>

            {/* Lista de Contactos */}
            <div className="mt-10 space-y-6">
              {/* Email */}
              <a
                href="mailto:suporte@mukandacloud.com"
                className="flex items-start gap-4 group w-fit"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <i className="fas fa-envelope text-lg"></i>
                </div>

                <div>
                  <p className="text-white font-semibold group-hover:text-cyan-500 transition-colors">
                    Email
                  </p>

                  <p className="mt-0.5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    suporte@mukandacloud.com
                  </p>
                </div>
              </a>

              {/* Telefone */}
              <a
                href="tel:+244900000000"
                className="flex items-start gap-4 group w-fit"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <i className="fas fa-phone text-lg"></i>
                </div>

                <div>
                  <p className="text-white font-semibold group-hover:text-cyan-500 transition-colors">
                    Telefone
                  </p>

                  <p className="mt-0.5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    +244 900 000 000
                  </p>
                </div>
              </a>

              {/* Localização */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Luanda%2C%20Angola"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group w-fit"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <i className="fas fa-location-dot text-lg"></i>
                </div>

                <div>
                  <p className="text-white font-semibold group-hover:text-cyan-500 transition-colors">
                    Localização
                  </p>

                  <p className="mt-0.5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    Luanda, Angola
                  </p>
                </div>
              </a>
            </div>

            {/* Link Suporte */}
            <div className="mt-10">
              <Link
                to="/suporte"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition-colors font-medium text-sm group"
              >
                Visitar centro de suporte
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-slate-900 border border-blue-900/40 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-7 text-center">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Entre em contacto
              </h3>

              <p className="mt-2 text-slate-400 text-sm">
                Envie-nos uma mensagem e entraremos em contacto consigo.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="O seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="nome@empresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Assunto
                </label>

                <input
                  id="assunto"
                  type="text"
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  rows={5}
                  placeholder="Escreva a sua mensagem..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                />
              </div>

              {/* Botão */}
              <Button type="submit" variant="primary" fullWidth>
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
