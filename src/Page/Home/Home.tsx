import React, { useRef } from "react";
import About from "./Section/About";
import Hero from "./Section/Hero";
import Projects from "./Section/Projects";
import Footer from "./Section/Footer";
import Nav from "../../Components/Nav";

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
