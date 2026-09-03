import { useMemo, useState } from "react";
import Button from "../../../components/Button";
import Modal from "../components/Modal";
import FileIcon from "./FileIcon";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getStatus(status) {
  const config = {
    active: {
      label: "Ativo",
      className: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    pending: {
      label: "Pendente",
      className: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    suspended: {
      label: "Suspenso",
      className: "text-red-400 bg-red-500/10 border-red-500/20",
    },
  };

  return config[status] || config.active;
}

const permissionOptions = [
  {
    id: "read",
    label: "Ler",
    description: "Pode visualizar o conteúdo.",
    icon: "fas fa-eye",
  },
  {
    id: "write",
    label: "Escrever",
    description: "Pode adicionar conteúdo.",
    icon: "fas fa-pen",
  },
  {
    id: "rename",
    label: "Renomear",
    description: "Pode alterar o nome.",
    icon: "fas fa-i-cursor",
  },
  {
    id: "edit",
    label: "Editar",
    description: "Pode modificar o conteúdo.",
    icon: "fas fa-file-pen",
  },
  {
    id: "delete",
    label: "Eliminar",
    description: "Pode eliminar o recurso.",
    icon: "fas fa-trash",
  },
];

const initialAccess = [
  {
    id: 1,
    userId: 2,
    resourceId: 1,
    resourceType: "folder",
    permissions: ["read", "write", "edit"],
  },
  {
    id: 2,
    userId: 2,
    resourceId: 101,
    resourceType: "file",
    permissions: ["read", "edit"],
  },
  {
    id: 3,
    userId: 3,
    resourceId: 2,
    resourceType: "folder",
    permissions: ["read", "write"],
  },
  {
    id: 4,
    userId: 4,
    resourceId: 103,
    resourceType: "file",
    permissions: ["read"],
  },
];

export default function PermissionsView({
  users = [],
  folders = [],
  files = [],
}) {
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [resourceFilter, setResourceFilter] = useState("all");

  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id ?? null);

  const [accessList, setAccessList] = useState(initialAccess);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    userId: users[0]?.id ?? "",
    resourceType: "folder",
    resourceId: "",
    permissions: ["read"],
  });

  const [saved, setSaved] = useState(false);

  const departments = useMemo(() => {
    return [...new Set(users.map((user) => user.department))];
  }, [users]);

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !normalizedSearch ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch);

      const matchesDepartment =
        !departmentFilter || user.department === departmentFilter;

      return matchesSearch && matchesDepartment;
    });
  }, [users, search, departmentFilter]);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const selectedAccess = useMemo(() => {
    return accessList.filter((access) => access.userId === selectedUserId);
  }, [accessList, selectedUserId]);

  const availableResources = form.resourceType === "folder" ? folders : files;

  const getResource = (access) => {
    if (access.resourceType === "folder") {
      return folders.find((folder) => folder.id === access.resourceId);
    }

    return files.find((file) => file.id === access.resourceId);
  };

  const getResourceName = (access) => {
    const resource = getResource(access);

    return resource?.name || "Recurso não encontrado";
  };

  const getResourceLocation = (access) => {
    const resource = getResource(access);

    if (!resource) return "";

    if (access.resourceType === "folder") {
      return resource.parentId ? "Pasta" : "Meu espaço";
    }

    return resource.location || "Arquivo";
  };

  const togglePermission = (permissionId) => {
    setForm((current) => {
      const exists = current.permissions.includes(permissionId);

      return {
        ...current,
        permissions: exists
          ? current.permissions.filter((id) => id !== permissionId)
          : [...current.permissions, permissionId],
      };
    });
  };

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setSaved(false);
  };

  const handleOpenModal = () => {
    setForm({
      userId: selectedUserId || users[0]?.id || "",
      resourceType: "folder",
      resourceId: "",
      permissions: ["read"],
    });

    setIsModalOpen(true);
  };

  const handleResourceTypeChange = (event) => {
    setForm((current) => ({
      ...current,
      resourceType: event.target.value,
      resourceId: "",
    }));
  };

  const handleSaveAccess = (event) => {
    event.preventDefault();

    if (!form.userId || !form.resourceId || form.permissions.length === 0) {
      return;
    }

    const existingAccess = accessList.find(
      (access) =>
        access.userId === Number(form.userId) &&
        access.resourceId === Number(form.resourceId) &&
        access.resourceType === form.resourceType,
    );

    if (existingAccess) {
      setAccessList((current) =>
        current.map((access) =>
          access.id === existingAccess.id
            ? {
                ...access,
                permissions: form.permissions,
              }
            : access,
        ),
      );
    } else {
      setAccessList((current) => [
        ...current,
        {
          id: Date.now(),
          userId: Number(form.userId),
          resourceId: Number(form.resourceId),
          resourceType: form.resourceType,
          permissions: form.permissions,
        },
      ]);
    }

    setSelectedUserId(Number(form.userId));
    setSaved(true);
    setIsModalOpen(false);
  };

  const handleRemoveAccess = (accessId) => {
    setAccessList((current) =>
      current.filter((access) => access.id !== accessId),
    );

    setSaved(false);
  };

  const getPermissionLabel = (permissionId) => {
    return (
      permissionOptions.find((permission) => permission.id === permissionId)
        ?.label || permissionId
    );
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Permissões</h2>

          <p className="mt-1 text-sm text-slate-500">
            Controle o acesso dos utilizadores às pastas e arquivos da empresa.
          </p>
        </div>

        <Button iconLeft="fas fa-user-lock" onClick={handleOpenModal}>
          Atribuir acesso
        </Button>
      </div>

      {/* Mensagem */}
      {saved && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          <i className="fas fa-circle-check"></i>

          <span>Permissões atualizadas com sucesso.</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        {/* UTILIZADORES */}
        <aside className="overflow-hidden rounded-2xl border border-blue-900/40 bg-slate-950">
          <div className="border-b border-blue-900/40 p-4">
            <h3 className="text-sm font-semibold text-white">Utilizadores</h3>

            <p className="mt-1 text-xs text-slate-500">
              Selecione quem pretende configurar.
            </p>

            <div className="relative mt-4">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-600"></i>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Pesquisar..."
                className="w-full rounded-xl border border-blue-900/40 bg-slate-900 py-2.5 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500/50"
              />
            </div>

            <select
              value={departmentFilter}
              onChange={(event) => setDepartmentFilter(event.target.value)}
              className="mt-3 w-full rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
            >
              <option value="">Todos os departamentos</option>

              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>

          <div className="max-h-155 overflow-y-auto p-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => {
                const isSelected = user.id === selectedUserId;
                const status = getStatus(user.status);

                const userAccessCount = accessList.filter(
                  (access) => access.userId === user.id,
                ).length;

                return (
                  <button
                    key={user.id}
                    type="button"
                    onClick={() => handleUserSelect(user.id)}
                    className={`w-full rounded-xl border p-3 text-left transition ${
                      isSelected
                        ? "border-cyan-500/20 bg-cyan-500/10"
                        : "border-transparent hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                          isSelected
                            ? "bg-cyan-500 text-slate-950"
                            : "bg-blue-900/40 text-cyan-400"
                        }`}
                      >
                        {getInitials(user.name)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          {user.name}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {user.department}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className={`rounded-full border px-1.5 py-0.5 text-[10px] ${status.className}`}
                          >
                            {status.label}
                          </span>

                          <span className="text-[10px] text-slate-600">
                            {userAccessCount}{" "}
                            {userAccessCount === 1 ? "acesso" : "acessos"}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <i className="fas fa-chevron-right text-xs text-cyan-500"></i>
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-10 text-center">
                <i className="fas fa-user-slash text-xl text-slate-700"></i>

                <p className="mt-3 text-sm text-slate-400">
                  Nenhum utilizador encontrado.
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* ÁREA DE ACESSOS */}
        <main className="min-w-0">
          {selectedUser ? (
            <div className="space-y-5">
              {/* Utilizador selecionado */}
              <div className="rounded-2xl border border-blue-900/40 bg-slate-950 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-400">
                      {getInitials(selectedUser.name)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-white">
                          {selectedUser.name}
                        </h3>

                        <span
                          className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getStatus(selectedUser.status).className}`}
                        >
                          {getStatus(selectedUser.status).label}
                        </span>
                      </div>

                      <p className="mt-1 truncate text-sm text-slate-500">
                        {selectedUser.email}
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        {selectedUser.department} · {selectedUser.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs text-slate-500">
                      Recursos com acesso
                    </p>

                    <p className="mt-1 text-lg font-semibold text-cyan-500">
                      {selectedAccess.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Barra de filtros */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Acessos atribuídos
                  </h3>

                  <p className="mt-1 text-xs text-slate-600">
                    Pastas e arquivos aos quais este utilizador tem acesso.
                  </p>
                </div>

                <select
                  value={resourceFilter}
                  onChange={(event) => setResourceFilter(event.target.value)}
                  className="rounded-xl border border-blue-900/40 bg-slate-950 px-3 py-2 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
                >
                  <option value="all">Todos os recursos</option>
                  <option value="folder">Pastas</option>
                  <option value="file">Arquivos</option>
                </select>
              </div>

              {/* Lista de acessos */}
              {selectedAccess.filter(
                (access) =>
                  resourceFilter === "all" ||
                  access.resourceType === resourceFilter,
              ).length > 0 ? (
                <div className="space-y-3">
                  {selectedAccess
                    .filter(
                      (access) =>
                        resourceFilter === "all" ||
                        access.resourceType === resourceFilter,
                    )
                    .map((access) => {
                      const resource = getResource(access);

                      return (
                        <div
                          key={access.id}
                          className="rounded-2xl border border-blue-900/40 bg-slate-950 p-4 sm:p-5"
                        >
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex min-w-0 items-center gap-3">
                              <FileIcon
                                type={
                                  access.resourceType === "folder"
                                    ? "folder"
                                    : resource?.type || "default"
                                }
                                size="md"
                              />

                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="truncate text-sm font-medium text-white">
                                    {getResourceName(access)}
                                  </p>

                                  <span className="rounded-full border border-blue-900/40 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-500">
                                    {access.resourceType === "folder"
                                      ? "Pasta"
                                      : "Arquivo"}
                                  </span>
                                </div>

                                <p className="mt-1 truncate text-xs text-slate-600">
                                  {getResourceLocation(access)}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              {access.permissions.map((permissionId) => {
                                const permission = permissionOptions.find(
                                  (item) => item.id === permissionId,
                                );

                                return (
                                  <span
                                    key={permissionId}
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/10 bg-cyan-500/5 px-2.5 py-1.5 text-xs text-cyan-400"
                                  >
                                    <i
                                      className={`${permission?.icon || "fas fa-check"} text-[10px]`}
                                    ></i>

                                    {getPermissionLabel(permissionId)}
                                  </span>
                                );
                              })}

                              <button
                                type="button"
                                onClick={() => handleRemoveAccess(access.id)}
                                aria-label={`Remover acesso a ${getResourceName(access)}`}
                                className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-blue-900/40 text-slate-600 transition hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400"
                              >
                                <i className="fas fa-trash text-xs"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-blue-900/40 bg-slate-950">
                  <div className="px-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                      <i className="fas fa-folder-tree text-xl"></i>
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-white">
                      Nenhum acesso atribuído
                    </h3>

                    <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
                      Este utilizador ainda não possui acesso específico a
                      nenhuma pasta ou arquivo.
                    </p>

                    <div className="mt-5">
                      <Button
                        iconLeft="fas fa-user-lock"
                        onClick={handleOpenModal}
                      >
                        Atribuir acesso
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex min-h-100 items-center justify-center rounded-2xl border border-blue-900/40 bg-slate-950">
              <div className="text-center">
                <i className="fas fa-user-lock text-3xl text-slate-700"></i>

                <h3 className="mt-4 text-sm font-semibold text-white">
                  Selecione um utilizador
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Escolha um utilizador para gerir os seus acessos.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL — ATRIBUIR ACESSO */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Atribuir acesso"
        icon="fas fa-user-lock"
      >
        <form onSubmit={handleSaveAccess} className="space-y-5">
          {/* Utilizador */}
          <div>
            <label
              htmlFor="permission-user"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Utilizador
            </label>

            <select
              id="permission-user"
              value={form.userId}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  userId: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none transition focus:border-cyan-500/50"
            >
              <option value="">Selecione um utilizador</option>

              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} · {user.department}
                </option>
              ))}
            </select>
          </div>

          {/* Tipo de recurso */}
          <div>
            <label
              htmlFor="permission-resource-type"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Tipo de recurso
            </label>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    resourceType: "folder",
                    resourceId: "",
                  }))
                }
                className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                  form.resourceType === "folder"
                    ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                    : "border-blue-900/40 bg-slate-900 text-slate-500 hover:text-white"
                }`}
              >
                <i className="fas fa-folder"></i>
                Pasta
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    resourceType: "file",
                    resourceId: "",
                  }))
                }
                className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                  form.resourceType === "file"
                    ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                    : "border-blue-900/40 bg-slate-900 text-slate-500 hover:text-white"
                }`}
              >
                <i className="fas fa-file"></i>
                Arquivo
              </button>
            </div>
          </div>

          {/* Recurso */}
          <div>
            <label
              htmlFor="permission-resource"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              {form.resourceType === "folder" ? "Pasta" : "Arquivo"}
            </label>

            <select
              id="permission-resource"
              value={form.resourceId}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  resourceId: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-blue-900/40 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none transition focus:border-cyan-500/50"
            >
              <option value="">
                Selecione{" "}
                {form.resourceType === "folder" ? "uma pasta" : "um arquivo"}
              </option>

              {availableResources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.name}
                </option>
              ))}
            </select>
          </div>

          {/* Permissões */}
          <div>
            <div className="mb-3">
              <p className="text-xs font-medium text-slate-400">Permissões</p>

              <p className="mt-1 text-xs text-slate-600">
                Defina exatamente o que este utilizador poderá fazer.
              </p>
            </div>

            <div className="space-y-2">
              {permissionOptions.map((permission) => {
                const checked = form.permissions.includes(permission.id);

                return (
                  <label
                    key={permission.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                      checked
                        ? "border-cyan-500/20 bg-cyan-500/5"
                        : "border-blue-900/30 bg-slate-900 hover:border-blue-900/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => togglePermission(permission.id)}
                      className="h-4 w-4 shrink-0 accent-cyan-500"
                    />

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs text-cyan-400">
                      <i className={permission.icon}></i>
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-200">
                        {permission.label}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-600">
                        {permission.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col-reverse gap-2 border-t border-blue-900/30 pt-4 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              iconLeft="fas fa-lock"
              disabled={
                !form.userId ||
                !form.resourceId ||
                form.permissions.length === 0
              }
            >
              Atribuir acesso
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
