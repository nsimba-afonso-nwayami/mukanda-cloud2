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
        "Organize, encontre e proteja todos os seus documentos com tecnologia cloud moderna.",
    },

    {
      image: HeroBg3,
      title: "Mais segurança, produtividade e colaboração",
      description:
        "Dê à sua equipa uma solução profissional para trabalhar de qualquer lugar.",
    },
  ];

  return (
    <section className="relative h-screen min-h-175 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/80"></div>

              {/* Glow */}
              <div className="absolute top-1/4 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button to="/cadastrar" iconRight="fas fa-arrow-right">
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
    </section>
  );
}
