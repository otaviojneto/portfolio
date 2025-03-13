import React from "react";
import * as S from "./styles";
import Title from "../../../../Components/Title";
import { Container } from "../../styles";
import ShowcaseCard from "../../../../Components/ShowcaseCard";
import lmh from "../../../../assets/lmh.jpg";
import petz from "../../../../assets/petz.jpg";
import travel from "../../../../assets/365.jpg";
import jeep from "../../../../assets/jeep.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Lmh",
      description:
        "Plataforma especializada em consultoria imobiliária, que disponibiliza os serviços de orientação jurídica e análise documental em vendas e locações de imóveis,  assegurando que cada negociação ocorra com total segurança. Com um sistema intuitivo, os usuários podem pesquisar, ver fotos e descrições detalhadas dos imóveis disponíveis para locação e venda de nossos clientes, garantindo uma experiência transparente e confiável no mercado imobiliário.",
      buttonLink: "https://www.lmhconsultoria.com/",
      buttonText: "Ver Site",
      imageUrl: lmh,
    },
    {
      title: "Petz",
      description:
        "Plataforma de e-commerce para vendas de produtos. Meu foco foi na área de pedidos, criando um sistema onde os usuários podem acompanhar seus pedidos após a reserva, incluindo detalhes sobre a compra, forma de pagamento e status da entrega.",
      buttonLink: "https://www.petz.com.br/",
      buttonText: "Ver Site",
      imageUrl: petz,
      reverse: true,
    },
    {
      title: "Travel365",
      description:
        "Plataforma de hospedagem para hotéis, conectando viajantes a experiências únicas. Com foco em e-commerce, oferece uma jornada completa – desde a pesquisa e comparação até a reserva final, garantindo praticidade, segurança e as melhores ofertas para sua viagem.",
      buttonLink: "https://app.otabuilder.com/ganhepontoslivelo",
      buttonText: "Ver Site",
      imageUrl: travel,
    },
    {
      title: "Jeep",
      description:
        "Criação de uma landing page para um cliente da Jeep, do grupo FCA (Fiat Chrysler Automobiles). Além disso, atuei no suporte ao time criativo durante todo o período de implementação do projeto, garantindo a coerência visual e a funcionalidade do site.",
      buttonLink: "https://www.jeep.com.br/commander/",
      buttonText: "Ver Site",
      imageUrl: jeep,
      reverse: true,
    },
  ];
  return (
    <S.ContainerProjects>
      <Container>
        <Title description="Projetos" />
        {projects.map((project) => (
          <ShowcaseCard
            reverse={project.reverse}
            buttonLink={project.buttonLink}
            buttonText={project.buttonText}
            description={project.description}
            imageUrl={project.imageUrl}
            title={project.title}
          />
        ))}
      </Container>
    </S.ContainerProjects>
  );
};

export default Projects;
