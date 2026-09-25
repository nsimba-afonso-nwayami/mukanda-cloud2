import { api } from "./api";

// Listar empresas
export const getEmpresas = async () => {
  const response = await api.get("empresas/");
  return response.data;
};

// Obter empresa
export const getEmpresa = async (id) => {
  const response = await api.get(`empresas/${id}/`);
  return response.data;
};

// Criar empresa
export const createEmpresa = async (data) => {
  const response = await api.post("empresas/", data);
  return response.data;
};

// Atualizar empresa
export const updateEmpresa = async (id, data) => {
  const response = await api.put(`empresas/${id}/`, data);
  return response.data;
};

// Atualização parcial
export const patchEmpresa = async (id, data) => {
  const response = await api.patch(`empresas/${id}/`, data);
  return response.data;
};

// Excluir empresa
export const deleteEmpresa = async (id) => {
  const response = await api.delete(`empresas/${id}/`);
  return response.data;
};

// Diretórios Azure
export const getEmpresaAzureDirectories = async (id) => {
  const response = await api.get(`empresas/${id}/azure_directories/`);
  return response.data;
};

// Estrutura completa
export const getEmpresaEstruturaCompleta = async (id) => {
  const response = await api.get(`empresas/${id}/estrutura_completa/`);
  return response.data;
};

// Funcionários da empresa
export const getEmpresaFuncionarios = async (id) => {
  const response = await api.get(`empresas/${id}/funcionarios/`);
  return response.data;
};

// Pastas da empresa
export const getEmpresaPastas = async (id) => {
  const response = await api.get(`empresas/${id}/pastas/`);
  return response.data;
};

// Informações SMB
export const getEmpresaSmbInfo = async (id) => {
  const response = await api.get(`empresas/${id}/smb_info/`);
  return response.data;
};

// Script SMB
export const getEmpresaSmbScript = async (id) => {
  const response = await api.get(`empresas/${id}/smb_script/`);
  return response.data;
};
