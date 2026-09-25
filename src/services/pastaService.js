import { api } from "./api";

// Listar pastas
export const getPastas = async () => {
  const response = await api.get("pastas/");
  return response.data;
};

// Obter pasta
export const getPasta = async (id) => {
  const response = await api.get(`pastas/${id}/`);
  return response.data;
};

// Criar pasta
export const createPasta = async (data) => {
  const response = await api.post("pastas/", data);
  return response.data;
};

// Atualizar pasta
export const updatePasta = async (id, data) => {
  const response = await api.put(`pastas/${id}/`, data);
  return response.data;
};

// Atualização parcial
export const patchPasta = async (id, data) => {
  const response = await api.patch(`pastas/${id}/`, data);
  return response.data;
};

// Excluir pasta
export const deletePasta = async (id) => {
  const response = await api.delete(`pastas/${id}/`);
  return response.data;
};

// Criar subpasta
export const createSubpasta = async (data) => {
  const response = await api.post(
    "pastas/criar_subpasta/",
    data
  );

  return response.data;
};

// Informações Azure
export const getPastaAzureInfo = async (id) => {
  const response = await api.get(`pastas/${id}/azure_info/`);
  return response.data;
};

// Informações SMB
export const getPastaSmbInfo = async (id) => {
  const response = await api.get(`pastas/${id}/smb_info/`);
  return response.data;
};

// Script SMB
export const getPastaSmbScript = async (id) => {
  const response = await api.get(`pastas/${id}/smb_script/`);
  return response.data;
};

// Subpastas
export const getPastaSubpastas = async (id) => {
  const response = await api.get(`pastas/${id}/subpastas/`);
  return response.data;
};
