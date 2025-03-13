import React from "react";
import * as S from "./styles";
import Hero from "./Section/Hero";
import About from "./Section/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
