import { HashLink } from "react-router-hash-link";
import Button from "../../components/Button";

export default function Planos() {
  const plans = [
    {
      name: "Essencial",
      description: "Para pequenas equipas que estão a começar.",
      price: "5.000",
      period: "/mês",
      storage: "50 GB",
      features: [
        "Armazenamento na nuvem",
        "Gestão de pastas e arquivos",
        "Partilha de documentos",
        "Controlo de acesso",
      ],
      featured: false,
    },

    {
      name: "Profissional",
      description: "Para empresas que precisam de mais controlo.",
      price: "10.000",
      period: "/mês",
      storage: "250 GB",
      features: [
        "Tudo do plano Essencial",
        "Gestão de utilizadores",
        "Permissões avançadas",
        "Partilha segura de arquivos",
        "Suporte prioritário",
      ],
      featured: true,
    },

    {
      name: "Empresarial",
      description: "Para empresas com maiores necessidades.",
      price: "25.000",
      period: "/mês",
      storage: "1 TB",
      features: [
        "Tudo do plano Profissional",
        "Mais espaço de armazenamento",
        "Gestão avançada de equipas",
        "Controlo completo de permissões",
        "Suporte dedicado",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="planos"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Um plano para cada
            <span className="text-cyan-500"> necessidade</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Escolha a solução que melhor se adapta ao tamanho da sua empresa e
            tenha os seus documentos sempre disponíveis e protegidos.
          </p>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 border transition duration-300 ${
                plan.featured
                  ? "bg-slate-900 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] lg:-translate-y-3"
                  : "bg-slate-900/70 border-blue-900/40 hover:border-blue-700"
              }`}
            >
              {/* Plano recomendado */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold whitespace-nowrap">
                    Mais escolhido
                  </span>
                </div>
              )}

              {/* Nome */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

                <p className="mt-3 text-slate-400 min-h-12">
                  {plan.description}
                </p>
              </div>

              {/* Preço */}
              <div className="mt-8 text-center">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-sm text-slate-400 mb-2">Kz</span>

                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>

                  <span className="text-slate-500 mb-2">{plan.period}</span>
                </div>

                <p className="mt-3 text-cyan-500 font-medium">
                  {plan.storage} de armazenamento
                </p>
              </div>

              {/* Botão */}
              <Button
                to="/cadastrar"
                variant={plan.featured ? "primary" : "secondary"}
                fullWidth
                className="mt-8"
              >
                Começar agora
              </Button>

              {/* Separador */}
              <div className="h-px bg-blue-900/40 my-8"></div>

              {/* Recursos */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-white">Inclui:</p>

                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <i className="fas fa-check text-cyan-500 mt-1"></i>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Informação inferior */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Precisa de uma solução personalizada para a sua empresa?
          </p>

          <HashLink
            to="/#contato"
            className="inline-flex items-center gap-2 mt-3 text-cyan-500 hover:text-cyan-300 transition font-medium"
          >
            Fale com a nossa equipa
            <i className="fas fa-arrow-down text-sm"></i>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
