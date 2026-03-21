import React from "react";
import notePhone from "../../../../assets/notePhone.jpg";
import notePhoneMobile from "../../../../assets/notePoneMobile.jpg";
import Badge from "../../../../Components/Badge/Badge";

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
    "React Native",
    "Next.Js",
    "Styled-components",
    "Tailwind",
    "Material UI",
    "Shadcn UI",
    "Preline UI",
    "SASS",
    "Bootstrap",
    "Firebase",
    "Git",
    "GraphQL",
    "Storybook",
    "TanStack Query",
    "Jest",
    "Testing Library",
    "Vitest",
    "Vite",
    "Scrum",
    "Kanban",
    "Figma",
    "Vercel",
    "MySQL",
    "npm",
    "Yarn",
    "pnpm"
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center gap-10 bg-white"
    >
      <div
        className="z-[1] -mt-[52px] h-[280px] w-full bg-white bg-blend-darken bg-contain bg-center bg-no-repeat max-[1088px]:-mt-[20px] max-[1088px]:h-[200px] [background-image:var(--about-hero-bg)] max-[1088px]:[background-image:var(--about-hero-bg-sm)]"
        style={
          {
            "--about-hero-bg": `url(${notePhone})`,
            "--about-hero-bg-sm": `url(${notePhoneMobile})`,
          } as React.CSSProperties
        }
        aria-hidden
      />
      <div className="max-w-6xl mx-auto">
        <div className="mt-[50px] flex flex-col px-5! md:px-0! items-center gap-5 max-[1088px]:[&_h1]:text-left max-[1088px]:[&_h1]:text-[28px]">
          <h1 className="text-center text-4xl font-semibold">Sobre mim</h1>

          <p className="text-center! text-lg max-[1088px]:text-left">
            Aqui você encontrará mais informações sobre mim, o que eu faço e minhas habilidades atuais, principalmente em programação e tecnologia.
          </p>

          <div className="grid grid-cols-2 gap-[120px] max-[1088px]:grid-cols-1 max-[1088px]:gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-semibold">Quem sou eu</h1>

              <p className="text-justify text-base md:text-sm ">
                Sou Desenvolvedor Web com foco em Frontend, especializado na criação e evolução de interfaces modernas, performáticas e escaláveis para sites e aplicações web. Trabalho com abordagem mobile-first, garantindo experiências consistentes e intuitivas em qualquer dispositivo.
              </p>

              <p className="text-justify text-base md:text-sm ">
                Também atuo no desenvolvimento de aplicativos com React Native, levando soluções do web para o mobile com eficiência e qualidade.<br />
              </p>
              <p className="text-justify text-base md:text-sm ">
                Tenho experiência em transformar ideias em produtos digitais bem estruturados, com foco na experiência do usuário e boas práticas de desenvolvimento.<br />
              </p>
              <p className="text-justify text-base md:text-sm ">
                Você pode conferir alguns dos meus projetos na seção de portfólio. Estou aberto a novas oportunidades onde eu possa contribuir, aprender e crescer profissionalmente. Se houver uma oportunidade alinhada ao meu perfil, será um prazer conversar!
              </p>

            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-semibold">Minhas Skills</h1>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skills, index) => (
                  <Badge key={index} text={skills} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
