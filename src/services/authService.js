import { api } from "./api";

// Login
export const login = async (data) => {
  const response = await api.post("auth/login/", data);
  return response.data;
};

// Logout
export const logout = async () => {
  const response = await api.post("auth/logout/");
  return response.data;
};

// Registro
export const register = async (data) => {
  const response = await api.post("auth/register/", data);
  return response.data;
};

// Perfil do usuário autenticado
export const getProfile = async () => {
  const response = await api.get("auth/profile/");
  return response.data;
};
