import React from "react";
import Nav from "../../../../Components/Nav";
import * as S from "./styles";

const Hero: React.FC = () => {
  return (
    <S.ContainerMe>
      <Nav />

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
