import { useMemo, useState } from "react";
import Button from "../../../components/Button";

const storageData = {
  used: 68.4,
  total: 100,
  files: 248,
  folders: 32,
  shared: 47,
};

const plans = [
  {
    id: "basic",
    name: "Básico",
    storage: 100,
    price: "5.000 Kz",
    period: "/mês",
    description: "Para pequenas equipas e empresas.",
    features: [
      "100 GB de armazenamento",
      "Até 10 utilizadores",
      "Partilha de ficheiros",
      "Gestão de pastas",
    ],
  },
  {
    id: "professional",
    name: "Profissional",
    storage: 500,
    price: "12.500 Kz",
    period: "/mês",
    description: "Mais espaço para equipas em crescimento.",
    features: [
      "500 GB de armazenamento",
      "Até 30 utilizadores",
      "Partilha avançada",
      "Gestão de permissões",
      "Histórico de atividades",
    ],
    recommended: true,
  },
  {
    id: "business",
    name: "Empresarial",
    storage: 1000,
    price: "20.000 Kz",
    period: "/mês",
    description: "Para empresas que precisam de mais capacidade.",
    features: [
      "1 TB de armazenamento",
      "Utilizadores ilimitados",
      "Permissões avançadas",
      "Histórico de atividades",
      "Maior capacidade de partilha",
    ],
  },
];

export default function StorageView() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const usagePercentage = useMemo(() => {
    return Math.min((storageData.used / storageData.total) * 100, 100);
  }, []);

  const remainingStorage = storageData.total - storageData.used;

  const formatStorage = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)} TB`;
    }

    return `${value} GB`;
  };

  const handleUpgrade = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="space-y-8">
      {/* Resumo do armazenamento */}
      <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-6 lg:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-500">
                <i className="fas fa-database"></i>
              </div>

              <div>
                <p className="text-sm font-medium text-white">Armazenamento</p>

                <p className="text-xs text-slate-500 mt-1">
                  Espaço utilizado pela sua empresa
                </p>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-semibold text-white">
                  {storageData.used}
                </span>

                <span className="text-sm text-slate-500 mb-1">
                  GB utilizados
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-2">
                de {formatStorage(storageData.total)} disponíveis
              </p>
            </div>
          </div>

          <div className="lg:text-right">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10 text-xs font-medium text-cyan-500">
              <i className="fas fa-check-circle"></i>
              Plano atual
            </span>

            <p className="text-lg font-semibold text-white mt-3">Básico</p>

            <p className="text-xs text-slate-500 mt-1">
              100 GB de armazenamento
            </p>
          </div>
        </div>

        {/* Barra de utilização */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-500">
              Utilização do armazenamento
            </span>

            <span className="text-xs font-medium text-slate-300">
              {usagePercentage.toFixed(1)}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-blue-900/30">
            <div
              className="h-full bg-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${usagePercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-slate-500">
              {storageData.used} GB usados
            </span>

            <span className="text-xs text-slate-500">
              {remainingStorage.toFixed(1)} GB disponíveis
            </span>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <i className="fas fa-file"></i>
            </div>

            <div>
              <p className="text-xs text-slate-500">Ficheiros</p>

              <p className="text-xl font-semibold text-white mt-1">
                {storageData.files}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <i className="fas fa-folder"></i>
            </div>

            <div>
              <p className="text-xs text-slate-500">Pastas</p>

              <p className="text-xl font-semibold text-white mt-1">
                {storageData.folders}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <i className="fas fa-share-alt"></i>
            </div>

            <div>
              <p className="text-xs text-slate-500">Itens partilhados</p>

              <p className="text-xl font-semibold text-white mt-1">
                {storageData.shared}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Planos */}
      <div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-white">
            Aumentar armazenamento
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Escolha um plano com mais espaço para continuar a guardar os
            ficheiros da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {plans.map((plan) => {
            const isCurrent = plan.id === "basic";

            return (
              <div
                key={plan.id}
                className={`relative bg-slate-950 rounded-2xl p-6 border transition ${
                  plan.recommended ? "border-cyan-500/40" : "border-blue-900/40"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-5 -translate-y-1/2">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-[11px] font-semibold">
                      Recomendado
                    </span>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium text-white">{plan.name}</p>

                  <p className="text-xs text-slate-500 mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-semibold text-white">
                      {plan.price}
                    </span>

                    <span className="text-xs text-slate-500 mb-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="mt-5 py-4 border-y border-blue-900/30">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-database text-cyan-500 text-sm"></i>

                    <span className="text-sm font-medium text-white">
                      {formatStorage(plan.storage)}
                    </span>

                    <span className="text-xs text-slate-500">
                      de armazenamento
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <i className="fas fa-check text-cyan-500 text-xs mt-1"></i>

                      <span className="text-sm text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  {isCurrent ? (
                    <Button variant="outline" fullWidth disabled>
                      Plano atual
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      iconLeft="fas fa-arrow-up"
                      onClick={() => handleUpgrade(plan)}
                    >
                      Escolher plano
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Informação adicional */}
      <div className="bg-slate-950 border border-blue-900/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-900/40 flex items-center justify-center text-slate-400 shrink-0">
          <i className="fas fa-info-circle"></i>
        </div>

        <div>
          <p className="text-sm font-medium text-white">
            Precisa de mais espaço?
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Pode aumentar o armazenamento da sua empresa a qualquer momento
            através de um novo plano.
          </p>
        </div>
      </div>

      {/* Simulação de confirmação */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-slate-950 border border-blue-900/40 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Confirmar plano
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Está prestes a selecionar o plano {selectedPlan.name}.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-blue-900/40 text-slate-500 hover:text-white transition"
                aria-label="Fechar"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-blue-900/30">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Plano</span>

                <span className="text-sm font-medium text-white">
                  {selectedPlan.name}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-slate-400">Armazenamento</span>

                <span className="text-sm font-medium text-cyan-500">
                  {formatStorage(selectedPlan.storage)}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-slate-400">Valor</span>

                <span className="text-sm font-medium text-white">
                  {selectedPlan.price}
                  <span className="text-xs text-slate-500">
                    {" "}
                    {selectedPlan.period}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setSelectedPlan(null)}
                className="flex-1"
              >
                Cancelar
              </Button>

              <Button
                iconLeft="fas fa-credit-card"
                onClick={() => {
                  console.log("Assinar plano:", selectedPlan);
                  setSelectedPlan(null);
                }}
                className="flex-1"
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
