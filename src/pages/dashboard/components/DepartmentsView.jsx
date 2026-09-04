import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import ModalSmall from "./ModalSmall";

const initialDepartments = [
  {
    id: 1,
    name: "Administração",
    description: "Gestão administrativa e estratégica da empresa.",
    manager: "João Manuel",
    users: 8,
    createdAt: "12 Ago, 2026",
  },
  {
    id: 2,
    name: "Recursos Humanos",
    description: "Gestão de pessoas, recrutamento e documentação.",
    manager: "Ana Maria",
    users: 12,
    createdAt: "12 Ago, 2026",
  },
  {
    id: 3,
    name: "Financeiro",
    description: "Gestão financeira, contabilidade e faturação.",
    manager: "Carlos José",
    users: 7,
    createdAt: "11 Ago, 2026",
  },
  {
    id: 4,
    name: "Comercial",
    description: "Gestão de vendas, clientes e oportunidades.",
    manager: "Pedro António",
    users: 10,
    createdAt: "10 Ago, 2026",
  },
  {
    id: 5,
    name: "Jurídico",
    description: "Gestão de contratos e documentação jurídica.",
    manager: "Maria Teresa",
    users: 5,
    createdAt: "08 Ago, 2026",
  },
];

const emptyForm = {
  name: "",
  description: "",
  manager: "",
};

export default function DepartmentsView() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filteredDepartments = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return departments;

    return departments.filter(
      (department) =>
        department.name.toLowerCase().includes(term) ||
        department.description.toLowerCase().includes(term) ||
        department.manager.toLowerCase().includes(term),
    );
  }, [departments, search]);

  const totalUsers = useMemo(() => {
    return departments.reduce(
      (total, department) => total + department.users,
      0,
    );
  }, [departments]);

  const openCreateModal = () => {
    setEditingDepartment(null);
    setForm(emptyForm);
    setIsModalOpen(true);
  };

  const openEditModal = (department) => {
    setEditingDepartment(department);

    setForm({
      name: department.name,
      description: department.description,
      manager: department.manager,
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingDepartment(null);
    setForm(emptyForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      toast.error("Informe o nome do departamento.");
      return;
    }

    if (editingDepartment) {
      setDepartments((current) =>
        current.map((department) =>
          department.id === editingDepartment.id
            ? {
                ...department,
                name: form.name.trim(),
                description: form.description.trim(),
                manager: form.manager.trim(),
              }
            : department,
        ),
      );

      toast.success("Departamento atualizado com sucesso.");
    } else {
      const newDepartment = {
        id: Date.now(),
        name: form.name.trim(),
        description: form.description.trim(),
        manager: form.manager.trim() || "Não definido",
        users: 0,
        createdAt: "Agora",
      };

      setDepartments((current) => [newDepartment, ...current]);

      toast.success("Departamento criado com sucesso.");
    }

    closeModal();
  };

  const handleDelete = (department) => {
    if (department.users > 0) {
      toast.error(
        "Não é possível eliminar um departamento que possui utilizadores.",
      );
      return;
    }

    const confirmed = window.confirm(
      `Tem certeza que deseja eliminar o departamento "${department.name}"?`,
    );

    if (!confirmed) return;

    setDepartments((current) =>
      current.filter((item) => item.id !== department.id),
    );

    toast.success("Departamento eliminado com sucesso.");
  };

  return (
    <>
      <div className="space-y-6">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Departamentos
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Organize os utilizadores da empresa por departamentos.
            </p>
          </div>

          <Button
            iconLeft="fas fa-plus"
            onClick={openCreateModal}
          >
            Novo departamento
          </Button>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                <i className="fas fa-building"></i>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Departamentos
                </p>

                <p className="text-xl font-semibold text-white mt-1">
                  {departments.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <i className="fas fa-users"></i>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Utilizadores distribuídos
                </p>

                <p className="text-xl font-semibold text-white mt-1">
                  {totalUsers}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista */}
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl overflow-hidden">
          {/* Pesquisa */}
          <div className="p-5 border-b border-blue-900/40">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-sm"></i>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Pesquisar departamento..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-900 border border-blue-900/40 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-900/30">
                  <th className="text-left px-5 py-4 text-xs font-medium text-slate-500">
                    Departamento
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-medium text-slate-500">
                    Responsável
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-medium text-slate-500">
                    Utilizadores
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-medium text-slate-500">
                    Criado em
                  </th>

                  <th className="w-24 px-5 py-4"></th>
                </tr>
              </thead>

              <tbody>
                {filteredDepartments.map((department) => (
                  <tr
                    key={department.id}
                    className="border-b border-blue-900/20 last:border-b-0 hover:bg-slate-900/40 transition"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                          <i className="fas fa-building text-sm"></i>
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {department.name}
                          </p>

                          <p className="text-xs text-slate-500 mt-1 max-w-xs truncate">
                            {department.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-300">
                        {department.manager}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                        <i className="fas fa-users text-xs text-slate-600"></i>
                        {department.users}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-500">
                        {department.createdAt}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => openEditModal(department)}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-500 hover:bg-slate-900 transition"
                          aria-label={`Editar ${department.name}`}
                        >
                          <i className="fas fa-pen text-xs"></i>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(department)}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-slate-900 transition"
                          aria-label={`Eliminar ${department.name}`}
                        >
                          <i className="fas fa-trash text-xs"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden divide-y divide-blue-900/20">
            {filteredDepartments.map((department) => (
              <div
                key={department.id}
                className="p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-building text-sm"></i>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">
                      {department.name}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      {department.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div>
                    <p className="text-[11px] text-slate-600">
                      Responsável
                    </p>

                    <p className="text-xs text-slate-300 mt-1">
                      {department.manager}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-600">
                      Utilizadores
                    </p>

                    <p className="text-xs text-slate-300 mt-1">
                      {department.users}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-blue-900/20">
                  <span className="text-[11px] text-slate-600">
                    Criado em {department.createdAt}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => openEditModal(department)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-500 hover:bg-slate-900 transition"
                      aria-label={`Editar ${department.name}`}
                    >
                      <i className="fas fa-pen text-xs"></i>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(department)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-slate-900 transition"
                      aria-label={`Eliminar ${department.name}`}
                    >
                      <i className="fas fa-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sem resultados */}
          {filteredDepartments.length === 0 && (
            <div className="py-16 px-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 border border-blue-900/40 flex items-center justify-center text-slate-600">
                <i className="fas fa-building"></i>
              </div>

              <h3 className="text-sm font-medium text-white mt-4">
                Nenhum departamento encontrado
              </h3>

              <p className="text-xs text-slate-500 mt-2">
                Tente pesquisar por outro nome ou crie um novo
                departamento.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <ModalSmall
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          editingDepartment
            ? "Editar departamento"
            : "Novo departamento"
        }
        icon="fas fa-building"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Nome */}
          <div>
            <label
              htmlFor="department-name"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Nome do departamento
            </label>

            <input
              id="department-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex.: Marketing"
              className="w-full h-11 px-4 rounded-xl bg-slate-900 border border-blue-900/40 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition"
            />
          </div>

          {/* Descrição */}
          <div>
            <label
              htmlFor="department-description"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Descrição
            </label>

            <textarea
              id="department-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Descreva a função deste departamento..."
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-blue-900/40 text-sm text-white placeholder:text-slate-600 outline-none resize-none focus:border-cyan-500/50 transition"
            />
          </div>

          {/* Responsável */}
          <div>
            <label
              htmlFor="department-manager"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Responsável
            </label>

            <input
              id="department-manager"
              name="manager"
              type="text"
              value={form.manager}
              onChange={handleChange}
              placeholder="Nome do responsável"
              className="w-full h-11 px-4 rounded-xl bg-slate-900 border border-blue-900/40 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition"
            />
          </div>

          {/* Ações */}
          <div className="flex flex-col-reverse sm:flex-row gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              className="flex-1"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              iconLeft={
                editingDepartment
                  ? "fas fa-save"
                  : "fas fa-plus"
              }
              className="flex-1"
            >
              {editingDepartment
                ? "Guardar alterações"
                : "Criar departamento"}
            </Button>
          </div>
        </form>
      </ModalSmall>
    </>
  );
}