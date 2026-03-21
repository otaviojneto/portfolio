import React from "react";

export type HeroProps = {
  id: string;
};

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="relative pb-8 md:pb-0 flex h-[70dvh] w-full items-center justify-center bg-[#0a001b] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[100px] before:w-full before:bg-white before:content-[''] before:[border-radius:60%_60%_0_0] max-[1088px]:h-[76dvh] max-[1088px]:px-5!"
    >
      <div className="relative z-10 flex flex-col gap-3 max-w-[800px]">
        <h1 className="font-semibold text-center md:text-left text-xl text-white! opacity-0 [animation:hero-fade-in-up_1s_ease-out_forwards] [animation-delay:0.5s]">
          Seja Bem vindo!
        </h1>

        <p className="text-center md:text-left text-justify text-base text-white! opacity-0 [animation:hero-fade-in-up_1s_ease-out_forwards] [animation-delay:1s] max-[1088px]:text-sm">
          Meu nome é Neto Lourenço, sou desenvolvedor front-end com mais de 5 anos de experiência, especializado em React e no ecossistema moderno de JavaScript.
          Atuo na criação de interfaces modernas, intuitivas e performáticas, sempre com foco na experiência do usuário, qualidade de código e escalabilidade das aplicações.
          Estou em constante evolução, buscando aprimorar minhas habilidades e acompanhar as melhores práticas do mercado para desenvolver soluções cada vez mais completas e bem estruturadas.
        </p>
      </div>
    </div>
  );
};

export default Hero;
