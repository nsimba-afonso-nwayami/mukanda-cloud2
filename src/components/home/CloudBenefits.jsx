export default function CloudBenefits() {
  const benefits = [
    {
      icon: "fas fa-shield-halved",
      title: "Segurança empresarial",
      description:
        "Mantenha os documentos da sua empresa protegidos com controle de acesso e uma infraestrutura preparada para os seus dados.",
    },
    {
      icon: "fas fa-folder-tree",
      title: "Organização inteligente",
      description:
        "Estruture arquivos e pastas de forma simples para que a sua equipa encontre rapidamente o que precisa.",
    },
    {
      icon: "fas fa-users",
      title: "Colaboração eficiente",
      description:
        "Partilhe documentos e facilite o trabalho em equipa, mantendo as informações acessíveis às pessoas certas.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Mais produtividade",
      description:
        "Reduza o tempo perdido a procurar documentos e concentre a sua equipa no que realmente importa.",
    },
  ];

  return (
    <section
      id="o-que-e-o-mukanda-cloud"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Introdução */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-wider">
            Mukanda Cloud
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
            O seu negócio merece uma
            <span className="text-cyan-500"> nuvem mais inteligente</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Uma solução criada para empresas que precisam de mais organização,
            segurança e controlo sobre os seus documentos e informações.
          </p>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-blue-900/40 rounded-2xl p-7 text-center hover:border-cyan-500/50 transition duration-300"
            >
              {/* Ícone */}
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-xl group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                <i className={benefit.icon}></i>
              </div>

              {/* Título */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Frase inferior */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-slate-400">
            <i className="fas fa-cloud text-cyan-500"></i>
            <span>Arquivos centralizados</span>
          </div>

          <span className="hidden md:block text-blue-700">•</span>

          <div className="flex items-center gap-2 text-slate-400">
            <i className="fas fa-lock text-cyan-500"></i>
            <span>Acesso controlado</span>
          </div>

          <span className="hidden md:block text-blue-700">•</span>

          <div className="flex items-center gap-2 text-slate-400">
            <i className="fas fa-bolt text-cyan-500"></i>
            <span>Mais produtividade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
