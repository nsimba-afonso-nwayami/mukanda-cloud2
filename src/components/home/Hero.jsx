import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Button from "../../components/Button";

import HeroBg1 from "../../assets/img/hero1.jpg";
import HeroBg2 from "../../assets/img/hero2.jpg";
import HeroBg3 from "../../assets/img/hero3.jpg";

export default function Hero() {
  const slides = [
    {
      image: HeroBg1,
      title: "A sua empresa na nuvem, de forma simples e segura",
      description:
        "Centralize documentos, controle acessos e partilhe informações importantes em uma única plataforma empresarial.",
    },
    {
      image: HeroBg2,
      title: "Gestão inteligente de arquivos corporativos",
      description:
        "Organize, encontre e proteja todos os seus documentos com tecnologia cloud moderna e acessível.",
    },
    {
      image: HeroBg3,
      title: "Mais segurança, produtividade e colaboração",
      description:
        "Dê à sua equipa uma solução profissional para trabalhar de qualquer lugar com total controlo.",
    },
  ];

  return (
    <section className="relative h-screen min-h-160 max-h-225 w-full overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        grabCursor={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center flex items-center pt-20 md:pt-16"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlays de Gradiente para Contraste */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/40" />

              {/* Luzes de Fundo (Glows) */}
              <div className="absolute top-1/3 left-10 md:left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-700/15 rounded-full blur-[100px] pointer-events-none" />

              {/* Conteúdo Principal */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-3xl">
                  {/* Título */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Descrição */}
                  <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Botões de Ação */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
                    <Button to="/cadastrar">
                      Começar agora
                    </Button>

                    <Button to="/#como-funciona" variant="secondary">
                      Ver como funciona
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilização da paginação do Swiper */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          background: #334155;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #06b6d4;
          width: 28px;
          border-radius: 9999px;
          opacity: 1;
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.5);
        }
        .hero-swiper .swiper-pagination {
          bottom: 28px !important;
        }
      `}</style>
    </section>
  );
}
