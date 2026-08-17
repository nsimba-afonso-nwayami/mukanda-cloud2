import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-white font-bold text-xl mb-5"
            >
              Mukanda
              <span className="text-cyan-500"> Cloud</span>
            </Link>

            <p className="text-slate-400 leading-relaxed">
              Gestão segura de arquivos empresariais na nuvem. Organize,
              partilhe e proteja os seus documentos num único lugar.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-500 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Produto</h3>

            <div className="space-y-3">
              <HashLink
                to="/#o-que-e-o-mukanda-cloud"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                O que é?
              </HashLink>

              <HashLink
                to="/#como-funciona"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Como funciona
              </HashLink>

              <HashLink
                to="/#planos"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Planos
              </HashLink>

              <HashLink
                to="/#contato"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Contacto
              </HashLink>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Empresa</h3>

            <div className="space-y-3">
              <Link
                to="/sobre"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Sobre nós
              </Link>

              <Link
                to="/seguranca"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Segurança
              </Link>

              <Link
                to="/suporte"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Suporte
              </Link>

              <Link
                to="/politica-privacidade"
                className="block text-slate-400 hover:text-cyan-500 transition"
              >
                Privacidade
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contacto</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <i className="fas fa-envelope text-cyan-500"></i>

                <span>suporte@mukandacloud.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <i className="fas fa-phone text-cyan-500"></i>

                <span>+244 900 000 000</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <i className="fas fa-location-dot text-cyan-500"></i>

                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Mukanda Cloud. Todos os direitos
            reservados.
          </p>

          <p className="text-slate-500 text-sm">
            Plataforma de gestão documental empresarial.
          </p>
        </div>
      </div>
    </footer>
  );
}
