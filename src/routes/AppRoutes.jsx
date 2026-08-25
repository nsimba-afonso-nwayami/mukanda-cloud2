import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";

// 
//import PrivateRoute from "../routes/PrivateRoute";

//Site
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Seguranca from "../pages/site/Seguranca";
import Suporte from "../pages/site/Suporte";
import Privacidade from "../pages/site/Privacidade";
import NotFound from "../pages/site/NotFound";

//Autenticação
import Login from "../pages/auth/Login";
import Cadastrar from "../pages/auth/Cadastrar";
import RecuperarPassword from "../pages/auth/RecuperarPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerificarEmail from "../pages/auth/VerificarEmail";
import AcessoNegado from "../pages/auth/AcessoNegado";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/politica-privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/*Rotas de autenticação*/}
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/recuperar-password" element={<RecuperarPassword />} />
      <Route path="/redefinir-password" element={<ResetPassword />} />
      <Route path="/verificar-email" element={<VerificarEmail />} />
      <Route path="/acesso-negado" element={<AcessoNegado />} />

      {/*Rotas do dashboard*/}
      
    </Routes>
  );
}
