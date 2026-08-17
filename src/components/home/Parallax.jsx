import Button from "../../components/Button";
import ParallaxBg from "../../assets/img/parallax.jpg";

export default function Parallax() {
  return (
    <section
      className="relative min-h-125 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${ParallaxBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-cyan-500/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 min-h-125 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          {/* Ícone */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 text-2xl">
            <i className="fas fa-cloud"></i>
          </div>

          {/* Título */}
          <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white leading-tight">
            Os seus documentos.
            <span className="text-cyan-500"> Sempre consigo.</span>
          </h2>

          {/* Descrição */}
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tenha os seus arquivos organizados, protegidos e acessíveis quando
            precisar. Leve a gestão documental da sua empresa para a nuvem.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
            <Button
              to="/cadastrar"
              variant="primary"
              iconRight="fas fa-arrow-right"
            >
              Começar agora
            </Button>

            <Button
              to="/#contato"
              variant="secondary"
              iconRight="fas fa-headset"
            >
              Falar com a equipa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
