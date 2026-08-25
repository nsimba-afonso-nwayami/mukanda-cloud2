import Button from "../../components/Button";
import ParallaxBg from "../../assets/img/parallax.jpg";

export default function Parallax() {
  return (
    <section
      className="relative min-h-125 bg-fixed bg-cover bg-center overflow-hidden flex items-center border-b border-blue-900/30"
      style={{
        backgroundImage: `url(${ParallaxBg})`,
      }}
    >
      {/* Overlay e brilho de contraste */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[1px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ícone com destaque central */}
          <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 text-2xl shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <i className="fas fa-cloud"></i>
          </div>

          {/* Título */}
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Os seus documentos.{" "}
            <span className="text-cyan-500">Sempre consigo.</span>
          </h2>

          {/* Descrição */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tenha os seus arquivos organizados, protegidos e acessíveis quando
            precisar. Leve a gestão documental da sua empresa para a nuvem.
          </p>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              to="/cadastrar"
              variant="primary"
            >
              Começar agora
            </Button>

            <Button
              to="/#contato"
              variant="secondary"
            >
              Falar com a equipa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
