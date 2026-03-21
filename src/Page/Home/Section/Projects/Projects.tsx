import React, { useEffect, useRef, useState } from "react";
import ShowcaseCard from "../../../../Components/ShowcaseCard";
import lmh from "../../../../assets/lmh.jpg";
import petz from "../../../../assets/petz.jpg";
import travel from "../../../../assets/365.jpg";
import jeep from "../../../../assets/jeep.jpg";
import subido from "../../../../assets/video-us.mp4";

export type ProjectsProps = {
  id: string;
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projects = [
    {
      title: "Universo Subido (Pedro Sobral)",
      description: "Desenvolvimento de uma plataforma educacional robusta, utilizada por uma comunidade ativa de alunos, com foco em performance, usabilidade e retenção. O projeto envolveu a construção de interfaces dinâmicas, integração com múltiplos serviços e otimização da experiência do usuário em larga escala.",
      buttonLink: "https://www.subir.com.br/",
      isVideo: true,
      videoUrl: subido,
      imageUrl: lmh,
    },
    {
      title: "Petz",
      description:
        "Plataforma de e-commerce para vendas de produtos. Meu foco foi na área de pedidos, criando um sistema onde os usuários podem acompanhar seus pedidos após a reserva, incluindo detalhes sobre a compra, forma de pagamento e status da entrega.",
      buttonLink: "https://www.petz.com.br/",
      imageUrl: petz,
      reverse: true,
    },
    {
      title: "Lmh Consultoria",
      description:
        "Plataforma especializada em consultoria imobiliária, que disponibiliza os serviços de orientação jurídica e análise documental em vendas e locações de imóveis,  assegurando que cada negociação ocorra com total segurança. Com um sistema intuitivo, os usuários podem pesquisar, ver fotos e descrições detalhadas dos imóveis disponíveis para locação e venda de nossos clientes, garantindo uma experiência transparente e confiável no mercado imobiliário.",
      buttonLink: "https://www.lmhconsultoria.com/",
      imageUrl: lmh,
    },
    {
      title: "Travel365",
      description:
        "Plataforma de hospedagem para hotéis, conectando viajantes a experiências únicas. Com foco em e-commerce, oferece uma jornada completa, desde a pesquisa e comparação até a reserva final, garantindo praticidade, segurança e as melhores ofertas para sua viagem.",
      buttonLink: "https://app.otabuilder.com/ganhepontoslivelo",
      imageUrl: travel,
      reverse: true
    },
    {
      title: "Jeep",
      description:
        "Criação de uma landing page para um cliente da Jeep, do grupo FCA (Fiat Chrysler Automobiles). Além disso, atuei no suporte ao time criativo durante todo o período de implementação do projeto, garantindo a coerência visual e a funcionalidade do site.",
      buttonLink: "https://www.jeep.com.br/commander/",
      imageUrl: jeep,
    },
  ];
  return (
    <section
      id={id}
      className="scroll-mt-20 bg-white pt-10"
    >
      <div className="mx-auto! max-w-[1150px] px-5! md:px-0! flex flex-col gap-10">
        <h1 className="text-4xl font-semibold text-center">Projetos</h1>
        {projects.map((project) => (
          <RevealOnScroll key={project.title}>
            <ShowcaseCard
              reverse={project.reverse}
              buttonLink={project.buttonLink}
              description={project.description}
              imageUrl={project.imageUrl}
              isVideo={project.isVideo}
              videoUrl={project.videoUrl}
              title={project.title}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;
