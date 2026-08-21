export default function CloudBenefits() {
  const benefits = [
    {
      icon: "fas fa-shield-halved",
      title: "Segurança empresarial",
      description:
        "Mantenha os documentos da sua empresa protegidos com controle de acesso rigoroso e infraestrutura dedicada.",
    },
    {
      icon: "fas fa-folder-tree",
      title: "Organização inteligente",
      description:
        "Estruture arquivos e pastas de forma intuitiva para que a sua equipa encontre rapidamente qualquer documento.",
    },
    {
      icon: "fas fa-users",
      title: "Colaboração eficiente",
      description:
        "Partilhe documentos e melhore o trabalho em equipa, garantindo o acesso seguro apenas às pessoas autorizadas.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Mais produtividade",
      description:
        "Elimine o tempo perdido na procura de ficheiros e mantenha o foco da sua equipa no crescimento do negócio.",
    },
  ];

  return (
    <section
      id="o-que-e-o-mukanda-cloud"
      className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-b border-blue-900/30"
    >
      {/* Luz de fundo atmosférica */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* Introdução */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase font-semibold tracking-widest text-cyan-500 mb-3 block">
            Mukanda Cloud
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
            O seu negócio merece uma{" "}
            <span className="text-cyan-500">nuvem mais inteligente</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Uma solução criada para empresas que precisam de organização,
            segurança reforçada e controlo total sobre os seus documentos
            corporativos.
          </p>
        </div>

        {/* Grid de Benefícios Centralizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 border border-blue-900/40 rounded-xl p-6 md:p-7 text-center hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] flex flex-col items-center"
            >
              {/* Container do Ícone */}
              <div className="w-12 h-12 mx-auto rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-lg group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-all duration-300">
                <i className={benefit.icon}></i>
              </div>

              {/* Título */}
              <h3 className="mt-6 text-lg font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destaques Inferiores */}
        <div className="mt-16 pt-8 border-t border-blue-900/30 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
          <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
            <i className="fas fa-cloud text-cyan-500 text-base"></i>
            <span>Arquivos centralizados</span>
          </div>

          <span className="hidden md:block text-blue-900">•</span>

          <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
            <i className="fas fa-lock text-cyan-500 text-base"></i>
            <span>Acesso controlado</span>
          </div>

          <span className="hidden md:block text-blue-900">•</span>

          <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
            <i className="fas fa-bolt text-cyan-500 text-base"></i>
            <span>Mais produtividade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
