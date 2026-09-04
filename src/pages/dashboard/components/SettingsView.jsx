import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import ModalSmall from "./ModalSmall";
import { settingsSchema } from "../../../validations/settingsSchema";
import { passwordSchema } from "../../../validations/passwordSchema";

const initialUser = {
  name: "João Manuel",
  email: "joao.manuel@empresa.ao",
  phone: "+244 924 000 000",
  department: "Administração",
  role: "Administrador",
};

export default function SettingsView() {
  const [user, setUser] = useState(initialUser);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const {
    register: registerUser,
    handleSubmit: handleUserSubmit,
    formState: { errors: userErrors, isSubmitting: isSavingUser },
  } = useForm({
    resolver: yupResolver(settingsSchema),
    defaultValues: initialUser,
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    reset: resetPassword,
    formState: { errors: passwordErrors, isSubmitting: isChangingPassword },
  } = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmitUser = async (data) => {
    try {
      // Futuramente:
      // await userService.updateProfile(data);

      setUser(data);

      toast.success("Informações atualizadas com sucesso.");
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          "Não foi possível atualizar as informações.",
      );
    }
  };

  const onSubmitPassword = async (data) => {
    try {
      // Futuramente:
      // await authService.changePassword({
      //   old_password: data.old_password,
      //   new_password: data.new_password,
      // });

      console.log("Alterar senha:", {
        old_password: data.old_password,
        new_password: data.new_password,
      });

      toast.success("Senha alterada com sucesso.");

      resetPassword();
      setIsPasswordModalOpen(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.detail || "Não foi possível alterar a senha.",
      );
    }
  };

  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <div className="space-y-8">
        {/* Informações da conta */}
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-blue-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-500">
                <i className="fas fa-user"></i>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">
                  Informações da conta
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Consulte e atualize os seus dados pessoais.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleUserSubmit(onSubmitUser)} className="p-6">
            {/* Perfil */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 mb-6 border-b border-blue-900/30">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-lg font-semibold">
                {initials}
              </div>

              <div>
                <p className="text-base font-medium text-white">{user.name}</p>

                <p className="text-sm text-slate-500 mt-1">{user.role}</p>

                <p className="text-xs text-slate-600 mt-1">{user.department}</p>
              </div>
            </div>

            {/* Campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Nome completo
                </label>

                <input
                  id="name"
                  type="text"
                  {...registerUser("name")}
                  className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                    userErrors.name ? "border-red-500/50" : "border-blue-900/40"
                  } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
                  placeholder="Nome completo"
                />

                {userErrors.name && (
                  <p className="text-xs text-red-400 mt-2">
                    {userErrors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  {...registerUser("email")}
                  className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                    userErrors.email
                      ? "border-red-500/50"
                      : "border-blue-900/40"
                  } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
                  placeholder="email@empresa.ao"
                />

                {userErrors.email && (
                  <p className="text-xs text-red-400 mt-2">
                    {userErrors.email.message}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Telefone
                </label>

                <input
                  id="phone"
                  type="tel"
                  {...registerUser("phone")}
                  className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                    userErrors.phone
                      ? "border-red-500/50"
                      : "border-blue-900/40"
                  } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
                  placeholder="+244 900 000 000"
                />

                {userErrors.phone && (
                  <p className="text-xs text-red-400 mt-2">
                    {userErrors.phone.message}
                  </p>
                )}
              </div>

              {/* Departamento */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Departamento
                </label>

                <input
                  id="department"
                  type="text"
                  {...registerUser("department")}
                  className="w-full h-11 px-4 rounded-xl bg-slate-900 border border-blue-900/40 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition"
                  placeholder="Departamento"
                />
              </div>

              {/* Cargo */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Cargo
                </label>

                <input
                  id="role"
                  type="text"
                  value={user.role}
                  disabled
                  className="w-full h-11 px-4 rounded-xl bg-slate-900/60 border border-blue-900/40 text-sm text-slate-500 outline-none cursor-not-allowed"
                />

                <p className="text-[11px] text-slate-600 mt-2">
                  O cargo é definido pelo administrador da empresa.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6 pt-6 border-t border-blue-900/30">
              <Button
                type="submit"
                loading={isSavingUser}
                loadingText="A guardar..."
                iconLeft="fas fa-save"
              >
                Guardar alterações
              </Button>
            </div>
          </form>
        </div>

        {/* Segurança */}
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-blue-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-500">
                <i className="fas fa-lock"></i>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">Segurança</h2>

                <p className="text-xs text-slate-500 mt-1">
                  Proteja a sua conta mantendo a senha atualizada.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-white">Palavra-passe</p>

                <p className="text-xs text-slate-500 mt-1">
                  Altere a senha utilizada para entrar na sua conta.
                </p>
              </div>

              <Button
                variant="outline"
                iconLeft="fas fa-key"
                onClick={() => setIsPasswordModalOpen(true)}
              >
                Alterar senha
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de alteração de senha */}
      <ModalSmall
        isOpen={isPasswordModalOpen}
        onClose={() => {
          resetPassword();
          setIsPasswordModalOpen(false);
        }}
        title="Alterar senha"
        icon="fas fa-key"
      >
        <form
          onSubmit={handlePasswordSubmit(onSubmitPassword)}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="old_password"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Senha atual
            </label>

            <input
              id="old_password"
              type="password"
              {...registerPassword("old_password")}
              className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                passwordErrors.old_password
                  ? "border-red-500/50"
                  : "border-blue-900/40"
              } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
              placeholder="Digite a sua senha atual"
              autoComplete="current-password"
            />

            {passwordErrors.old_password && (
              <p className="text-xs text-red-400 mt-2">
                {passwordErrors.old_password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="new_password"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Nova senha
            </label>

            <input
              id="new_password"
              type="password"
              {...registerPassword("new_password")}
              className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                passwordErrors.new_password
                  ? "border-red-500/50"
                  : "border-blue-900/40"
              } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
              placeholder="Digite a nova senha"
              autoComplete="new-password"
            />

            {passwordErrors.new_password && (
              <p className="text-xs text-red-400 mt-2">
                {passwordErrors.new_password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-xs font-medium text-slate-400 mb-2"
            >
              Confirmar nova senha
            </label>

            <input
              id="confirm_password"
              type="password"
              {...registerPassword("confirm_password")}
              className={`w-full h-11 px-4 rounded-xl bg-slate-900 border ${
                passwordErrors.confirm_password
                  ? "border-red-500/50"
                  : "border-blue-900/40"
              } text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition`}
              placeholder="Repita a nova senha"
              autoComplete="new-password"
            />

            {passwordErrors.confirm_password && (
              <p className="text-xs text-red-400 mt-2">
                {passwordErrors.confirm_password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetPassword();
                setIsPasswordModalOpen(false);
              }}
              className="flex-1"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              loading={isChangingPassword}
              loadingText="A alterar..."
              iconLeft="fas fa-check"
              className="flex-1"
            >
              Alterar senha
            </Button>
          </div>
        </form>
      </ModalSmall>
    </>
  );
}
