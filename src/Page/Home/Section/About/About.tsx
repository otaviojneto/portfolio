import React from "react";
import * as S from "./styles";
import Title from "../../../../Components/Title";
import { Container } from "../../styles";
import Badge from "../../../../Components/Badge";

export type AboutProps = {
  id: string;
};

const About: React.FC<AboutProps> = ({ id }) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Next.Js",
    "Styled-components",
    "Tailwind",
    "SASS",
    "Bootstrap",
    "Firebase",
    "Git",
    "GraphQL",
    "Storybook",
    "Jest",
    "Testing Library",
    "Vite",
    "Scrum",
    "Kanban",
    "Figma",
    "Vercel",
    "MySQL",
    "npm",
    "Yarn",
  ];

  return (
    <S.ContainerAbout id={id}>
      <S.Image />
      <Container>
        <S.About>
          <Title align="center" size="40px" description="Sobre mim" />

          <S.Text>
            Aqui você encontrará mais informações sobre mim, o que eu faço e
            minhas habilidades atuais, principalmente em termos de programação e
            tecnologia.
          </S.Text>

          <S.Experience>
            <S.BaseDescription>
              <Title size="20px" description="Venha me conhecer!" />

              <p>
                Sou um Desenvolvedor Web focado em Frontend, especializado na
                construção e no gerenciamento do Front-end de sites e
                aplicativos web para impulsionar o sucesso dos produtos. Confira
                alguns dos meus trabalhos na seção Projetos. Estou aberto a
                novas oportunidades onde eu possa contribuir, aprender e
                crescer. Se você tiver uma oportunidade que corresponda às
                minhas habilidades e experiência, não hesite em entrar em
                contato!
              </p>
            </S.BaseDescription>
            <S.BaseDescription>
              <Title size="20px" description="Minhas Skills" />

              <S.Skills>
                {skills.map((skills, index) => (
                  <Badge key={index} text={skills} />
                ))}
              </S.Skills>
            </S.BaseDescription>
          </S.Experience>
        </S.About>
      </Container>
    </S.ContainerAbout>
  );
};

export default About;
