import { Link, useLocation } from "react-router-dom";

export default function SidebarDashboard({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition";

  const normalStyle = "text-slate-400 hover:text-white hover:bg-slate-900";

  const activeStyle = "bg-cyan-500/10 text-cyan-500 border border-cyan-500/10";

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0
          w-64 h-screen
          bg-slate-950
          border-r border-blue-900/40
          z-50
          flex flex-col
          p-5
          overflow-y-auto
          transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* FECHAR NO MOBILE */}
        <button
          type="button"
          className="
            md:hidden
            absolute top-5 right-5
            text-slate-500
            hover:text-white
            transition
          "
          onClick={() => setSidebarOpen(false)}
          aria-label="Fechar menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <div className="mb-8 px-2 pt-2">
          <Link
            to="/dashboard"
            className="inline-flex items-center"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="text-lg font-semibold tracking-tight text-white">
              Mukanda
              <span className="text-cyan-500"> Cloud</span>
            </span>
          </Link>

          <p className="mt-2 text-xs text-slate-500">Gestão documental</p>
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="flex-1 space-y-1">
          {/* Dashboard */}
          <Link
            to="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-gauge-high w-5"></i>
            Dashboard
          </Link>

          {/* Documentos */}
          <Link
            to="/dashboard/documentos"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/documentos") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-file-lines w-5"></i>
            Documentos
          </Link>

          {/* Pastas */}
          <Link
            to="/dashboard/pastas"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/pastas") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-folder w-5"></i>
            Pastas
          </Link>

          {/* Partilhados */}
          <Link
            to="/dashboard/partilhados"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/partilhados") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-share-nodes w-5"></i>
            Partilhados
          </Link>

          {/* Utilizadores */}
          <Link
            to="/dashboard/utilizadores"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/utilizadores") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-users w-5"></i>
            Utilizadores
          </Link>

          {/* Permissões */}
          <Link
            to="/dashboard/permissoes"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/permissoes") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-user-lock w-5"></i>
            Permissões
          </Link>

          {/* Atividade */}
          <Link
            to="/dashboard/atividade"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/atividade") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-clock-rotate-left w-5"></i>
            Atividade
          </Link>

          {/* Armazenamento */}
          <Link
            to="/dashboard/armazenamento"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/armazenamento") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-hard-drive w-5"></i>
            Armazenamento
          </Link>

          {/* Configurações */}
          <Link
            to="/dashboard/configuracoes"
            onClick={() => setSidebarOpen(false)}
            className={`${linkStyle} ${
              isActive("/dashboard/configuracoes") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-gear w-5"></i>
            Configurações
          </Link>
        </nav>

        {/* ARMAZENAMENTO */}
        <div className="mt-6 pt-5 border-t border-blue-900/40">
          <div className="px-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-300">
                Armazenamento
              </p>

              <Link
                to="/dashboard/armazenamento"
                className="text-xs text-cyan-500 hover:text-cyan-300 transition"
              >
                Gerir
              </Link>
            </div>

            <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-[64%] rounded-full bg-cyan-500"></div>
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">6,4 GB utilizados</span>

              <span className="text-slate-500">de 10 GB</span>
            </div>
          </div>
        </div>

        {/* LOGOUT */}
        <div className="pt-4 mt-4 border-t border-blue-900/40">
          <button
            type="button"
            className="
              w-full
              cursor-pointer
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-sm font-medium
              text-slate-400
              hover:text-white
              hover:bg-slate-900
              transition
            "
          >
            <i className="fas fa-arrow-right-from-bracket w-5"></i>
            Sair da conta
          </button>
        </div>
      </aside>

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          className="
            fixed inset-0
            bg-slate-950/70
            backdrop-blur-sm
            z-40
            md:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
