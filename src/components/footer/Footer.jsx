import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-900/50 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Marca */}
          <div className="col-span-1 md:col-span-1 lg:pr-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-xl tracking-tight mb-5 hover:opacity-90 transition-opacity"
            >
              Mukanda
              <span className="text-cyan-500">Cloud</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Gestão segura de arquivos empresariais na nuvem. Organize,
              partilhe e proteja os seus documentos num único lugar.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-blue-900/30 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all shadow-sm"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-blue-900/30 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all shadow-sm"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-blue-900/30 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all shadow-sm"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Produto
            </h3>
            <div className="space-y-4">
              <HashLink
                to="/#o-que-e-o-mukanda-cloud"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                O que é?
              </HashLink>
              <HashLink
                to="/#como-funciona"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Como funciona
              </HashLink>
              <HashLink
                to="/#planos"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Planos
              </HashLink>
              <HashLink
                to="/#contato"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Contacto
              </HashLink>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Empresa
            </h3>
            <div className="space-y-4">
              <Link
                to="/sobre"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Sobre nós
              </Link>
              <Link
                to="/seguranca"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Segurança
              </Link>
              <Link
                to="/suporte"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Suporte
              </Link>
              <Link
                to="/politica-privacidade"
                className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Privacidade
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-400 group cursor-pointer">
                <i className="fas fa-envelope text-cyan-500 mt-1 group-hover:text-cyan-300 transition-colors"></i>
                <span className="group-hover:text-slate-300 transition-colors">
                  suporte@mukandacloud.com
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400 group cursor-pointer">
                <i className="fas fa-phone text-cyan-500 mt-1 group-hover:text-cyan-300 transition-colors"></i>
                <span className="group-hover:text-slate-300 transition-colors">
                  +244 900 000 000
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400 group cursor-pointer">
                <i className="fas fa-location-dot text-cyan-500 mt-1 group-hover:text-cyan-300 transition-colors"></i>
                <span className="group-hover:text-slate-300 transition-colors">
                  Luanda, Angola
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-blue-900/40 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Mukanda Cloud. Todos os direitos
            reservados.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-right">
            Plataforma de gestão documental empresarial.
          </p>
        </div>
      </div>
    </footer>
  );
}
