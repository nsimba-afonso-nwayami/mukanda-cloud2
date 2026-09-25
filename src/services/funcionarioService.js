import { api } from "./api";

// Listar funcionários
export const getFuncionarios = async () => {
  const response = await api.get("funcionarios/");
  return response.data;
};

// Obter funcionário
export const getFuncionario = async (id) => {
  const response = await api.get(`funcionarios/${id}/`);
  return response.data;
};

// Criar funcionário
export const createFuncionario = async (data) => {
  const response = await api.post("funcionarios/", data);
  return response.data;
};

// Atualizar funcionário
export const updateFuncionario = async (id, data) => {
  const response = await api.put(`funcionarios/${id}/`, data);
  return response.data;
};

// Atualização parcial
export const patchFuncionario = async (id, data) => {
  const response = await api.patch(`funcionarios/${id}/`, data);
  return response.data;
};

// Excluir funcionário
export const deleteFuncionario = async (id) => {
  const response = await api.delete(`funcionarios/${id}/`);
  return response.data;
};

// Pastas acessíveis
export const getFuncionarioPastasAcessiveis = async (id) => {
  const response = await api.get(
    `funcionarios/${id}/pastas_acessiveis/`
  );

  return response.data;
};
