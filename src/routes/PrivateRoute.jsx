import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-400">
          <i className="fas fa-spinner fa-spin text-cyan-500"></i>
          <span className="text-sm"> A verificar sessão... </span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/entrar" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
