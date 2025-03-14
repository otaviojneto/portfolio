import React from "react";
import * as S from "./styles";

export type HeroProps = {
  id: string;
};

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <S.ContainerMe id={id}>
      <S.AboutMe>
        <S.Title>Bem vindo!</S.Title>

        <S.Text>
          Meu Nome Neto Lourenço, sou desenvolvedor front-end com mais de 3 anos
          de experiência focado em React. Tenho expertise na criação de
          interfaces intuitivas e eficientes, priorizando performance e
          escalabilidade. Além disso, estou sempre buscando aprimorar minhas
          habilidades, explorando novas tecnologias para criar soluções de alta
          qualidade.
        </S.Text>
      </S.AboutMe>
    </S.ContainerMe>
  );
};

export default Hero;
