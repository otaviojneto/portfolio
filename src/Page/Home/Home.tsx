import React from "react";
import About from "./Section/About";
import Hero from "./Section/Hero";
import Projects from "./Section/Projects";
import Footer from "./Section/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
