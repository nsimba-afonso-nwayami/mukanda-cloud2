import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getProfile,
  login as loginService,
  logout as logoutService,
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    try {
      const profile = await getProfile();

      console.log("Perfil do usuário:", profile);

      setUser(profile);
    } catch (error) {
      console.log("Sessão não autenticada.");

      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (data) => {
    const response = await loginService(data);

    console.log("Resposta do login:", response);

    setUser(response.user);

    return response;
  };

  const logout = async () => {
    try {
      await logoutService();
    } catch (error) {
      console.error("Erro ao terminar sessão:", error);
    } finally {
      // Limpa imediatamente o usuário do estado global
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    loadUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth deve ser utilizado dentro de um AuthProvider."
    );
  }

  return context;
}

