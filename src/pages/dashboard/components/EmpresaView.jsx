import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import FormField from "../../../components/FormField";
import { empresaSchema } from "../../../validations/empresaSchema";

const initialCompany = {
  name: "HOSSIDEV",
  nif: "5412345678",
  email: "contacto@hossidev.com",
  phone: "+244 924 000 000",
  website: "www.hossidev.com",
  address: "Luanda, Angola",
};

export default function EmpresaView() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(empresaSchema),
    defaultValues: initialCompany,
  });

  const onSubmit = async (data) => {
    try {
      console.log("Dados da empresa:", data);

      // Aqui entra depois a chamada à API.
      await new Promise((resolve) => setTimeout(resolve, 500));

      toast.success("Informações da empresa atualizadas.");
    } catch (error) {
      toast.error("Não foi possível atualizar as informações.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div>
        <h2 className="text-lg font-semibold text-white">
          Informações da empresa
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Atualize os dados da empresa associados à sua conta.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Informações principais */}
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-blue-900/40">
            <h3 className="text-sm font-semibold text-white">
              Dados da empresa
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Informações principais da organização.
            </p>
          </div>

          <div className="p-5">
            {/* Identificação */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-blue-900/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                <i className="fas fa-building text-xl"></i>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Perfil da empresa
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Mantenha os dados da organização atualizados.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
              <FormField
                label="Nome da empresa"
                name="name"
                register={register}
                error={errors.name}
                placeholder="Nome da empresa"
                required
              />

              <FormField
                label="NIF"
                name="nif"
                register={register}
                error={errors.nif}
                placeholder="Número de identificação fiscal"
                required
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                register={register}
                error={errors.email}
                placeholder="email@empresa.com"
                required
              />

              <FormField
                label="Telefone"
                name="phone"
                type="tel"
                register={register}
                error={errors.phone}
                placeholder="+244 900 000 000"
                required
              />

              <FormField
                label="Website"
                name="website"
                register={register}
                error={errors.website}
                placeholder="www.empresa.com"
              />

              <FormField
                label="Endereço"
                name="address"
                register={register}
                error={errors.address}
                placeholder="Luanda, Angola"
                required
              />
            </div>
          </div>
        </div>

        {/* Conta */}
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-blue-900/40">
            <h3 className="text-sm font-semibold text-white">
              Conta da empresa
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Informações da conta no Mukanda Cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-blue-900/30">
            <AccountInfo
              icon="fas fa-layer-group"
              label="Plano atual"
              value="Profissional"
            />

            <AccountInfo
              icon="fas fa-circle-check"
              label="Estado"
              value="Ativa"
              valueClass="text-emerald-400"
            />

            <AccountInfo
              icon="fas fa-calendar"
              label="Conta criada"
              value="12 Ago, 2026"
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            loading={isSubmitting}
            loadingText="A guardar..."
            iconLeft="fas fa-save"
          >
            Guardar alterações
          </Button>
        </div>
      </form>
    </div>
  );
}

function AccountInfo({ icon, label, value, valueClass = "text-slate-300" }) {
  return (
    <div className="p-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
          <i className={`${icon} text-sm`}></i>
        </div>

        <div>
          <p className="text-[11px] text-slate-600 uppercase tracking-wide">
            {label}
          </p>

          <p className={`text-sm mt-1 ${valueClass}`}>{value}</p>
        </div>
      </div>
    </div>
  );
}
