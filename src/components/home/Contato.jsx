import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Informações */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Vamos transformar a gestão dos seus
              <span className="text-cyan-500"> documentos?</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
              Tem dúvidas sobre o Mukanda Cloud, os nossos planos ou pretende
              uma solução adaptada à sua empresa? Fale connosco.
            </p>

            {/* Contactos */}
            <div className="mt-10 space-y-6">
              {/* Email */}
              <a
                href="mailto:suporte@mukandacloud.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                  <i className="fas fa-envelope"></i>
                </div>

                <div>
                  <p className="text-white font-medium group-hover:text-cyan-500 transition">
                    Email
                  </p>

                  <p className="mt-1 text-slate-400 group-hover:text-slate-300 transition">
                    suporte@mukandacloud.com
                  </p>
                </div>
              </a>

              {/* Telefone */}
              <a
                href="tel:+244900000000"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                  <i className="fas fa-phone"></i>
                </div>

                <div>
                  <p className="text-white font-medium group-hover:text-cyan-500 transition">
                    Telefone
                  </p>

                  <p className="mt-1 text-slate-400 group-hover:text-slate-300 transition">
                    +244 900 000 000
                  </p>
                </div>
              </a>

              {/* Localização */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Luanda%2C%20Angola"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                  <i className="fas fa-location-dot"></i>
                </div>

                <div>
                  <p className="text-white font-medium group-hover:text-cyan-500 transition">
                    Localização
                  </p>

                  <p className="mt-1 text-slate-400 group-hover:text-slate-300 transition">
                    Luanda, Angola
                  </p>
                </div>
              </a>
            </div>

            {/* Link suporte */}
            <div className="mt-10">
              <Link
                to="/suporte"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition font-medium"
              >
                Visitar centro de suporte
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-slate-900 border border-blue-900/40 rounded-2xl p-6 md:p-8">
            {/* Cabeçalho centralizado */}
            <div className="mb-7 text-center">
              <h3 className="text-2xl font-bold text-white">
                Entre em contacto
              </h3>

              <p className="mt-2 text-slate-400">
                Envie-nos uma mensagem e entraremos em contacto consigo.
              </p>
            </div>

            <form className="space-y-5">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="O seu nome"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="nome@empresa.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Assunto
                </label>

                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mensagem
                </label>

                <textarea
                  rows="5"
                  placeholder="Escreva a sua mensagem..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-blue-900/50 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 transition resize-none"
                ></textarea>
              </div>

              {/* Botão */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
