import { Link, useNavigate } from "react-router-dom";

export default function HeaderDashboard({
  sidebarOpen,
  setSidebarOpen,
  title,
}) {
  const navigate = useNavigate();

  return (
    <header
      className="
        fixed top-0 right-0 left-0 md:left-64
        h-20
        bg-slate-950/95
        backdrop-blur-xl
        border-b border-blue-900/40
        z-30
        flex items-center justify-between
        px-6 lg:px-8
      "
    >
      {/* ESQUERDA */}
      <div className="flex items-center gap-4">
        {/* Menu mobile */}
        <button
          type="button"
          className="
            md:hidden
            text-xl
            text-slate-400
            hover:text-cyan-500
            transition
          "
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Voltar */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            w-9 h-9
            rounded-lg
            cursor-pointer
            border border-blue-900/40
            bg-slate-900
            text-slate-400
            flex items-center justify-center
            hover:text-cyan-500
            hover:border-cyan-500/40
            hover:bg-slate-800
            transition
          "
          aria-label="Voltar"
          title="Voltar"
        >
          <i className="fas fa-arrow-left text-sm"></i>
        </button>

        <div className="hidden sm:block h-7 w-px bg-blue-900/50"></div>

        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>

      {/* DIREITA */}
      <div className="flex items-center gap-4">
        {/* Utilizador */}
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-white">Utilizador</p>

          <p className="text-xs text-slate-500">Conta empresarial</p>
        </div>

        {/* Perfil */}
        <Link
          to="/dashboard/configuracoes"
          className="
            w-10 h-10
            rounded-full
            bg-slate-900
            border border-blue-900/50
            flex items-center justify-center
            text-cyan-500
            hover:border-cyan-500/50
            hover:bg-slate-800
            transition
          "
          aria-label="Configurações da conta"
        >
          <i className="fas fa-user text-sm"></i>
        </Link>
      </div>
    </header>
  );
}
