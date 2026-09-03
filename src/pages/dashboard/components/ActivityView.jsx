import { useMemo, useState } from "react";
import Button from "../../../components/Button";

const actionConfig = {
  login: {
    label: "Iniciou sessão",
    icon: "fas fa-right-to-bracket",
    className: "text-cyan-400 bg-cyan-500/10",
  },

  logout: {
    label: "Terminou sessão",
    icon: "fas fa-right-from-bracket",
    className: "text-slate-400 bg-slate-500/10",
  },

  upload: {
    label: "Enviou um arquivo",
    icon: "fas fa-upload",
    className: "text-cyan-400 bg-cyan-500/10",
  },

  download: {
    label: "Descarregou um arquivo",
    icon: "fas fa-download",
    className: "text-blue-400 bg-blue-500/10",
  },

  create_folder: {
    label: "Criou uma pasta",
    icon: "fas fa-folder-plus",
    className: "text-cyan-400 bg-cyan-500/10",
  },

  edit: {
    label: "Editou um arquivo",
    icon: "fas fa-file-pen",
    className: "text-amber-400 bg-amber-500/10",
  },

  rename: {
    label: "Renomeou um recurso",
    icon: "fas fa-i-cursor",
    className: "text-amber-400 bg-amber-500/10",
  },

  share: {
    label: "Partilhou um recurso",
    icon: "fas fa-share-nodes",
    className: "text-purple-400 bg-purple-500/10",
  },

  delete: {
    label: "Eliminou um recurso",
    icon: "fas fa-trash",
    className: "text-red-400 bg-red-500/10",
  },
};

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ActivityView({ activities = [] }) {
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [actionFilter, setActionFilter] = useState("");
  const [resourceFilter, setResourceFilter] = useState("");

  const users = useMemo(() => {
    return [
      ...new Map(
        activities.map((activity) => [activity.user.id, activity.user]),
      ).values(),
    ];
  }, [activities]);

  const filteredActivities = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesSearch =
        !normalizedSearch ||
        activity.user.name.toLowerCase().includes(normalizedSearch) ||
        activity.resource.toLowerCase().includes(normalizedSearch) ||
        activity.location.toLowerCase().includes(normalizedSearch);

      const matchesUser =
        !userFilter || String(activity.user.id) === userFilter;

      const matchesAction = !actionFilter || activity.action === actionFilter;

      const matchesResource =
        !resourceFilter || activity.resourceType === resourceFilter;

      return matchesSearch && matchesUser && matchesAction && matchesResource;
    });
  }, [activities, search, userFilter, actionFilter, resourceFilter]);

  const clearFilters = () => {
    setSearch("");
    setUserFilter("");
    setActionFilter("");
    setResourceFilter("");
  };

  const hasFilters = search || userFilter || actionFilter || resourceFilter;

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Atividades</h2>

          <p className="mt-1 text-sm text-slate-500">
            Consulte o histórico de ações realizadas no espaço da empresa.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-blue-900/40 bg-slate-950 px-3 py-2 text-xs text-slate-500">
            {filteredActivities.length}{" "}
            {filteredActivities.length === 1 ? "atividade" : "atividades"}
          </span>
        </div>
      </div>

      {/* Filtros */}
      <div className="rounded-2xl border border-blue-900/40 bg-slate-950 p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(240px,1fr)_180px_180px_160px_auto]">
          {/* Pesquisa */}
          <div className="relative">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-600"></i>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquisar atividade..."
              className="w-full rounded-xl border border-blue-900/40 bg-slate-900 py-2.5 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500/50"
            />
          </div>

          {/* Utilizador */}
          <select
            value={userFilter}
            onChange={(event) => setUserFilter(event.target.value)}
            className="rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none transition focus:border-cyan-500/50"
          >
            <option value="">Todos os utilizadores</option>

            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          {/* Ação */}
          <select
            value={actionFilter}
            onChange={(event) => setActionFilter(event.target.value)}
            className="rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none transition focus:border-cyan-500/50"
          >
            <option value="">Todas as ações</option>

            {Object.entries(actionConfig).map(([key, action]) => (
              <option key={key} value={key}>
                {action.label}
              </option>
            ))}
          </select>

          {/* Recurso */}
          <select
            value={resourceFilter}
            onChange={(event) => setResourceFilter(event.target.value)}
            className="rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none transition focus:border-cyan-500/50"
          >
            <option value="">Todos os recursos</option>
            <option value="file">Arquivos</option>
            <option value="folder">Pastas</option>
            <option value="system">Sistema</option>
          </select>

          {/* Limpar */}
          {hasFilters && (
            <Button
              variant="ghost"
              iconLeft="fas fa-filter-circle-xmark"
              onClick={clearFilters}
            >
              Limpar
            </Button>
          )}
        </div>
      </div>

      {/* Lista */}
      {filteredActivities.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-blue-900/40 bg-slate-950">
          {/* Cabeçalho desktop */}
          <div className="hidden border-b border-blue-900/40 bg-slate-900/50 px-5 py-3 lg:grid lg:grid-cols-[minmax(220px,1.4fr)_minmax(220px,1fr)_180px_130px] lg:items-center lg:gap-4">
            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Utilizador
            </span>

            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Ação
            </span>

            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Recurso
            </span>

            <span className="text-right text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Data
            </span>
          </div>

          <div className="divide-y divide-blue-900/20">
            {filteredActivities.map((activity) => {
              const action =
                actionConfig[activity.action] || actionConfig.login;

              return (
                <div
                  key={activity.id}
                  className="px-5 py-4 transition hover:bg-slate-900/40"
                >
                  {/* Desktop */}
                  <div className="hidden lg:grid lg:grid-cols-[minmax(220px,1.4fr)_minmax(220px,1fr)_180px_130px] lg:items-center lg:gap-4">
                    {/* Utilizador */}
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900/40 text-[11px] font-semibold text-cyan-400">
                        {getInitials(activity.user.name)}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {activity.user.name}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-slate-600">
                          {activity.user.department}
                        </p>
                      </div>
                    </div>

                    {/* Ação */}
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${action.className}`}
                      >
                        <i className={`${action.icon} text-xs`}></i>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-slate-300">{action.label}</p>

                        <p className="mt-0.5 text-xs text-slate-600">
                          {activity.ip}
                        </p>
                      </div>
                    </div>

                    {/* Recurso */}
                    <div className="min-w-0">
                      <p className="truncate text-sm text-slate-300">
                        {activity.resource}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-slate-600">
                        {activity.location}
                      </p>
                    </div>

                    {/* Data */}
                    <div className="text-right">
                      <p className="text-xs text-slate-400">{activity.date}</p>

                      <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-emerald-400">
                        <i className="fas fa-circle text-[5px]"></i>
                        Concluída
                      </span>
                    </div>
                  </div>

                  {/* Mobile / Tablet */}
                  <div className="lg:hidden">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                        <i className={`${action.icon} text-sm`}></i>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                          <p className="text-sm font-medium text-white">
                            {activity.user.name}
                          </p>

                          <span className="text-xs text-slate-600">
                            {activity.date}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-slate-400">
                          {action.label}
                        </p>

                        <div className="mt-2 rounded-lg bg-slate-900 px-3 py-2">
                          <p className="truncate text-xs text-slate-300">
                            {activity.resource}
                          </p>

                          <p className="mt-1 truncate text-[11px] text-slate-600">
                            {activity.location}
                          </p>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] text-slate-600">
                            {activity.user.department}
                          </span>

                          <span className="text-slate-800">•</span>

                          <span className="text-[10px] text-slate-600">
                            IP {activity.ip}
                          </span>

                          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-emerald-400">
                            <i className="fas fa-circle text-[5px]"></i>
                            Concluída
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-blue-900/40 bg-slate-950">
          <div className="px-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
              <i className="fas fa-clock-rotate-left text-xl"></i>
            </div>

            <h3 className="mt-4 text-sm font-semibold text-white">
              Nenhuma atividade encontrada
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              Não existem atividades que correspondam aos filtros selecionados.
            </p>

            {hasFilters && (
              <div className="mt-5">
                <Button
                  variant="outline"
                  iconLeft="fas fa-filter-circle-xmark"
                  onClick={clearFilters}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
