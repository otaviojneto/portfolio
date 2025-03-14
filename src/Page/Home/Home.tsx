import React from "react";
import Nav from "../../Components/Nav";
import About from "./Section/About";
import Footer from "./Section/Footer";
import Hero from "./Section/Hero";
import Projects from "./Section/Projects";

const Home: React.FC = () => {
  const handleScrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav onNavigate={handleScrollToSection} />
      <Hero id="portfolio" />
      <About id="about" />
      <Projects id="projects" />
      <Footer id="contact" />
    </>
  );
};

export default Home;
