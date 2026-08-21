import Button from "../../components/Button";

export default function ComoFunciona() {
  const steps = [
    {
      icon: "fas fa-user-plus",
      title: "Crie a sua conta",
      description:
        "Registe a sua empresa e configure o seu espaço de trabalho no Mukanda Cloud de forma rápida e simples.",
    },
    {
      icon: "fas fa-cloud-arrow-up",
      title: "Organize os seus arquivos",
      description:
        "Faça upload dos seus documentos, crie pastas e estruture os seus arquivos de acordo com as necessidades da sua empresa.",
    },
    {
      icon: "fas fa-users",
      title: "Trabalhe em equipa",
      description:
        "Partilhe documentos, defina permissões e permita que cada membro da equipa tenha acesso apenas ao que precisa.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative bg-slate-900 py-20 md:py-24 overflow-hidden border-b border-blue-900/30"
    >
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Comece a trabalhar na nuvem{" "}
            <span className="text-cyan-500">em poucos passos</span>
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed">
            O Mukanda Cloud foi pensado para tornar a gestão dos seus documentos
            simples, segura e acessível para toda a sua equipa.
          </p>
        </div>

        {/* Etapas */}
        <div className="relative mt-20">
          {/* Linha de conexão */}
          <div className="hidden lg:block absolute top-16 left-[16%] right-[16%] h-px bg-blue-700/40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                {/* Ícone */}
                <div className="relative mx-auto w-32 h-32 rounded-full bg-slate-950 border border-blue-700/50 flex items-center justify-center group-hover:border-cyan-500/50 transition duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 text-2xl group-hover:scale-105 group-hover:bg-cyan-500/20 transition duration-300">
                    <i className={step.icon}></i>
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="mt-8 text-xl font-semibold text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed max-w-sm mx-auto text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-5 text-base">
            Pronto para simplificar a gestão dos seus documentos?
          </p>

          <Button to="/cadastrar" iconRight="fas fa-arrow-right">
            Criar a minha conta
          </Button>
        </div>
      </div>
    </section>
  );
}
