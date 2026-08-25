import { Link } from "react-router-dom";
import Button from "../../components/Button";
import NotFoundBg from "../../assets/img/notfound.jpg";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Mukanda Cloud</title>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${NotFoundBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/90"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-cyan-500">404</h1>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Página não encontrada
          </h2>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            A página que procura não existe ou foi movida para outro endereço.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button to="/" variant="primary" fullWidth>
              Voltar ao início
            </Button>

            <Button
              to="/suporte"
              variant="secondary"
              fullWidth
            >
              Suporte
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
