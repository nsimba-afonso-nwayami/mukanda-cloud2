import { useMemo, useState } from "react";
import Button from "../../../components/Button";

export default function UsersView({ users = [], onCreateUser }) {
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  /*
   * Departamentos disponíveis
   */
  const departments = useMemo(() => {
    return [...new Set(users.map((user) => user.department))].filter(Boolean);
  }, [users]);

  /*
   * Utilizadores filtrados
   */
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue);

      const matchesDepartment =
        departmentFilter === "all" || user.department === departmentFilter;

      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
    });
  }, [users, search, departmentFilter, roleFilter, statusFilter]);

  /*
   * Iniciais do utilizador
   */
  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  /*
   * Estado do utilizador
   */
  const getStatus = (status) => {
    const statuses = {
      active: {
        label: "Ativo",
        className: "bg-emerald-500/10 text-emerald-400",
        dot: "bg-emerald-400",
      },

      pending: {
        label: "Pendente",
        className: "bg-amber-500/10 text-amber-400",
        dot: "bg-amber-400",
      },

      suspended: {
        label: "Suspenso",
        className: "bg-red-500/10 text-red-400",
        dot: "bg-red-400",
      },
    };

    return statuses[status] || statuses.pending;
  };

  /*
   * Ações
   */
  const handleEdit = (user) => {
    console.log("Editar utilizador:", user);
  };

  const handlePermissions = (user) => {
    console.log("Gerir permissões:", user);
  };

  const handleSuspend = (user) => {
    console.log("Suspender utilizador:", user);
  };

  const handleDelete = (user) => {
    console.log("Eliminar utilizador:", user);
  };

  return (
    <div className="space-y-8">
      {/* CABEÇALHO */}
      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <h2 className="text-lg font-semibold text-white">Utilizadores</h2>

          <p className="mt-1 text-sm text-slate-500">
            Gerencie os membros que têm acesso ao espaço da empresa.
          </p>
        </div>

        <Button iconLeft="fas fa-user-plus" onClick={onCreateUser}>
          Novo utilizador
        </Button>
      </div>

      {/* PESQUISA E FILTROS */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_180px_170px_150px]">
        {/* PESQUISA */}
        <div
          className="
            flex items-center
            w-full
            bg-slate-950
            border border-blue-900/40
            rounded-xl
            overflow-hidden
            focus-within:border-cyan-500/50
            transition
          "
        >
          <i className="fas fa-search text-slate-500 ml-4"></i>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Pesquisar utilizadores..."
            className="
              w-full
              bg-transparent
              px-3 py-3.5
              text-sm
              text-white
              placeholder:text-slate-500
              outline-none
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                mr-3
                text-slate-500
                hover:text-white
                transition
              "
              aria-label="Limpar pesquisa"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {/* DEPARTAMENTO */}
        <select
          value={departmentFilter}
          onChange={(event) => setDepartmentFilter(event.target.value)}
          className="
            w-full
            bg-slate-950
            border border-blue-900/40
            rounded-xl
            px-4 py-3
            text-sm
            text-slate-300
            outline-none
            focus:border-cyan-500/50
            transition
          "
        >
          <option value="all">Departamentos</option>

          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>

        {/* FUNÇÃO */}
        <select
          value={roleFilter}
          onChange={(event) => setRoleFilter(event.target.value)}
          className="
            w-full
            bg-slate-950
            border border-blue-900/40
            rounded-xl
            px-4 py-3
            text-sm
            text-slate-300
            outline-none
            focus:border-cyan-500/50
            transition
          "
        >
          <option value="all">Funções</option>
          <option value="Administrador">Administrador</option>
          <option value="Editor">Editor</option>
          <option value="Visualizador">Visualizador</option>
        </select>

        {/* ESTADO */}
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="
            w-full
            bg-slate-950
            border border-blue-900/40
            rounded-xl
            px-4 py-3
            text-sm
            text-slate-300
            outline-none
            focus:border-cyan-500/50
            transition
          "
        >
          <option value="all">Estados</option>
          <option value="active">Ativos</option>
          <option value="pending">Pendentes</option>
          <option value="suspended">Suspensos</option>
        </select>
      </div>

      {/* RESUMO */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {filteredUsers.length}{" "}
          {filteredUsers.length === 1 ? "utilizador" : "utilizadores"}
        </p>
      </div>

      {/* =====================================================
          DESKTOP
      ===================================================== */}
      <div
        className="
          hidden
          md:block
          bg-slate-950
          border border-blue-900/40
          rounded-2xl
          overflow-hidden
        "
      >
        {/* CABEÇALHO */}
        <div
          className="
            grid
            grid-cols-[minmax(220px,1.5fr)_160px_140px_130px_140px_48px]
            items-center
            gap-4
            px-5 py-3
            border-b border-blue-900/40
            text-xs
            text-slate-600
            uppercase
            tracking-wide
          "
        >
          <span>Utilizador</span>
          <span>Departamento</span>
          <span>Função</span>
          <span>Estado</span>
          <span>Último acesso</span>
          <span></span>
        </div>

        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const status = getStatus(user.status);

            return (
              <div
                key={user.id}
                className="
                  group
                  grid
                  grid-cols-[minmax(220px,1.5fr)_160px_140px_130px_140px_48px]
                  items-center
                  gap-4
                  px-5 py-4
                  border-b border-blue-900/30
                  last:border-b-0
                  hover:bg-slate-900/60
                  transition
                "
              >
                {/* UTILIZADOR */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="
                      w-10 h-10
                      shrink-0
                      rounded-full
                      bg-cyan-500/10
                      border border-cyan-500/10
                      text-cyan-500
                      flex items-center justify-center
                      text-xs
                      font-semibold
                    "
                  >
                    {getInitials(user.name)}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {user.name}
                    </p>

                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* DEPARTAMENTO */}
                <span className="text-sm text-slate-400 truncate">
                  {user.department}
                </span>

                {/* FUNÇÃO */}
                <span className="text-sm text-slate-400 truncate">
                  {user.role}
                </span>

                {/* ESTADO */}
                <span
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    w-fit
                    px-2.5 py-1.5
                    rounded-lg
                    text-xs
                    ${status.className}
                  `}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                  ></span>

                  {status.label}
                </span>

                {/* ÚLTIMO ACESSO */}
                <span className="text-xs text-slate-500">
                  {user.lastAccess}
                </span>

                {/* AÇÕES */}
                <UserActions
                  user={user}
                  onEdit={handleEdit}
                  onPermissions={handlePermissions}
                  onSuspend={handleSuspend}
                  onDelete={handleDelete}
                />
              </div>
            );
          })
        ) : (
          <EmptyState />
        )}
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}
      <div className="md:hidden space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const status = getStatus(user.status);

            return (
              <div
                key={user.id}
                className="
                  bg-slate-950
                  border border-blue-900/40
                  rounded-2xl
                  p-4
                "
              >
                {/* UTILIZADOR */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      w-10 h-10
                      shrink-0
                      rounded-full
                      bg-cyan-500/10
                      border border-cyan-500/10
                      text-cyan-500
                      flex items-center justify-center
                      text-xs
                      font-semibold
                    "
                  >
                    {getInitials(user.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {user.name}
                    </p>

                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>

                  <UserActions
                    user={user}
                    onEdit={handleEdit}
                    onPermissions={handlePermissions}
                    onSuspend={handleSuspend}
                    onDelete={handleDelete}
                  />
                </div>

                {/* DETALHES */}
                <div
                  className="
                    mt-4
                    pt-4
                    border-t border-blue-900/30
                    grid
                    grid-cols-2
                    gap-4
                  "
                >
                  {/* DEPARTAMENTO */}
                  <div>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wide">
                      Departamento
                    </p>

                    <p className="text-xs text-slate-400 mt-1 truncate">
                      {user.department}
                    </p>
                  </div>

                  {/* FUNÇÃO */}
                  <div>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wide">
                      Função
                    </p>

                    <p className="text-xs text-slate-400 mt-1">{user.role}</p>
                  </div>

                  {/* ESTADO */}
                  <div>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wide">
                      Estado
                    </p>

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        mt-1
                        px-2 py-1
                        rounded-lg
                        text-xs
                        ${status.className}
                      `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                      ></span>

                      {status.label}
                    </span>
                  </div>

                  {/* ÚLTIMO ACESSO */}
                  <div>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wide">
                      Último acesso
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {user.lastAccess}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

/* =========================================================
   AÇÕES DO UTILIZADOR
========================================================= */

function UserActions({ user, onEdit, onPermissions, onSuspend, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}
        className="
          w-8 h-8
          flex items-center justify-center
          rounded-lg
          text-slate-600
          hover:text-white
          hover:bg-slate-800
          transition
        "
        aria-label={`Opções de ${user.name}`}
        aria-expanded={open}
      >
        <i className="fas fa-ellipsis-vertical"></i>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            mt-2
            z-40
            w-48
            bg-slate-950
            border border-blue-900/50
            rounded-xl
            shadow-2xl
            p-1.5
          "
        >
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit(user);
            }}
            className="
              w-full
              flex items-center gap-3
              px-3 py-2.5
              rounded-lg
              text-sm text-slate-400
              hover:text-white
              hover:bg-slate-900
              transition
              text-left
            "
          >
            <i className="fas fa-pen w-4 text-center"></i>
            Editar
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onPermissions(user);
            }}
            className="
              w-full
              flex items-center gap-3
              px-3 py-2.5
              rounded-lg
              text-sm text-slate-400
              hover:text-white
              hover:bg-slate-900
              transition
              text-left
            "
          >
            <i className="fas fa-shield-halved w-4 text-center"></i>
            Permissões
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onSuspend(user);
            }}
            className="
              w-full
              flex items-center gap-3
              px-3 py-2.5
              rounded-lg
              text-sm text-slate-400
              hover:text-white
              hover:bg-slate-900
              transition
              text-left
            "
          >
            <i className="fas fa-user-slash w-4 text-center"></i>
            Suspender
          </button>

          <div className="my-1 border-t border-blue-900/30"></div>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDelete(user);
            }}
            className="
              w-full
              flex items-center gap-3
              px-3 py-2.5
              rounded-lg
              text-sm text-red-400
              hover:text-red-300
              hover:bg-red-500/10
              transition
              text-left
            "
          >
            <i className="fas fa-trash w-4 text-center"></i>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   ESTADO VAZIO
========================================================= */

function EmptyState() {
  return (
    <div className="py-16 text-center">
      <div
        className="
          w-14 h-14
          mx-auto
          rounded-2xl
          bg-cyan-500/10
          text-cyan-500
          flex items-center justify-center
        "
      >
        <i className="fas fa-users text-xl"></i>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Nenhum utilizador encontrado.
      </p>

      <p className="mt-1 text-xs text-slate-600">
        Tente alterar os filtros ou a pesquisa.
      </p>
    </div>
  );
}
