import styled from "styled-components";

export const ContainerMe = styled.div`
  align-items: center;
  background-color: #0a001b;
  display: flex;
  height: 100vh;
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

  @media (max-width: 768px) {
    padding-inline: 20px;
  }
`;

export const AboutMe = styled.div`
  max-width: 800px;

  @media (max-width: 768px) {
    margin-top: -200px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 500;
`;

export const Text = styled.p`
  color: #ffffff;
  margin-top: 10px;
`;
