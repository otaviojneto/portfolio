import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const ContainerMe = styled.div`
  align-items: center;
  background-color: #0a001b;
  display: flex;
  height: 70vh;
  justify-content: center;
  position: relative;
  width: 100%;

  &::before {
    background-color: #ffffff;
    border-radius: 60% 60% 0 0;
    content: "";
    height: 100px;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  @media (max-width: 1088px) {
    padding-inline: 20px;
  }
`;

export const AboutMe = styled.div`
  max-width: 800px;

  @media (max-width: 1088px) {
    margin-top: -200px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 500;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: 0.5s; // Delay para aparecer depois de algum tempo
`;

export const Text = styled.p`
  color: #ffffff;
  margin-top: 10px;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: 1s; // Delay para o texto aparecer depois do título
`;
