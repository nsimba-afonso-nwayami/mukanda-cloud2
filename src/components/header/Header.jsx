import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "../../components/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
          >
            Mukanda
            <span className="text-cyan-500">Cloud</span>
          </Link>

          {/* Menu Principal Nav */}
          <nav
            className={`
              fixed md:static
              top-0 right-0 z-50
              h-screen md:h-auto
              w-80 md:w-auto
              bg-slate-950 md:bg-transparent
              border-l border-blue-900/50 md:border-none
              flex flex-col md:flex-row
              items-start md:items-center
              gap-6 md:gap-8
              p-8 md:p-0
              transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
            `}
          >
            {/* Header Mobile Interno (Botão de Fechar) */}
            <div className="w-full flex justify-between items-center pb-4 border-b border-blue-900/40 md:hidden">
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                Navegação
              </span>
              <button
                onClick={closeMenu}
                className="text-slate-400 hover:text-cyan-500 text-xl p-1 transition-colors cursor-pointer"
                aria-label="Fechar menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <HashLink
              onClick={closeMenu}
              to="/#o-que-e-o-mukanda-cloud"
              className="text-slate-300 hover:text-cyan-300 text-sm font-medium transition-colors py-1"
            >
              O que é?
            </HashLink>

            <HashLink
              onClick={closeMenu}
              to="/#como-funciona"
              className="text-slate-300 hover:text-cyan-300 text-sm font-medium transition-colors py-1"
            >
              Como funciona
            </HashLink>

            <HashLink
              onClick={closeMenu}
              to="/#planos"
              className="text-slate-300 hover:text-cyan-300 text-sm font-medium transition-colors py-1"
            >
              Planos
            </HashLink>

            <HashLink
              onClick={closeMenu}
              to="/#contato"
              className="text-slate-300 hover:text-cyan-300 text-sm font-medium transition-colors py-1"
            >
              Contato
            </HashLink>

            {/* Ações Mobile */}
            <div className="w-full flex flex-col gap-3 md:hidden pt-6 mt-2 border-t border-blue-900/40">
              <Link
                to="/entrar"
                onClick={closeMenu}
                className="w-full text-center px-4 py-2.5 rounded-lg border border-blue-700 text-slate-200 text-sm font-medium hover:border-cyan-500 hover:text-cyan-300 transition-all"
              >
                Entrar
              </Link>

              <Link
                to="/cadastrar"
                onClick={closeMenu}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Criar conta
              </Link>
            </div>
          </nav>

          {/* Ações Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button to="/entrar" variant="secondary" onClick={closeMenu}>
              Entrar
            </Button>

            <Button to="/cadastrar" variant="primary" onClick={closeMenu}>
              Criar conta
            </Button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-slate-300 hover:text-cyan-500 text-xl p-2 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Overlay Backdrop - Desfoca 100% da viewport no mobile */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 w-screen h-screen bg-slate-950/80 backdrop-blur-md z-40 md:hidden transition-all duration-300"
        />
      )}
    </>
  );
}
