import React from "react";
import About from "./Section/About";
import Hero from "./Section/Hero";
import Projects from "./Section/Projects";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
