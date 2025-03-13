import styled from "styled-components";
import notePhone from "../../../../assets/notePhone.jpg";
import notePhoneMobile from "../../../../assets/notePoneMobile.jpg";

export const ContainerAbout = styled.section`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Image = styled.div`
  background-color: #0a001b;
  background-image: url(${notePhone});
  background-size: cover;
  background-blend-mode: luminosity;
  height: 347px;
  margin-top: -82px;
  width: 860px;
  z-index: 1;

  @media (max-width: 1088px) {
    background-color: #ffffff;
    background-image: url(${notePhoneMobile});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -20px;
    height: 200px;
    width: 100%;
  }
`;

export const About = styled.div`
  margin-top: 50px;
`;

export const Experience = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  margin-top: 40px;

  @media (max-width: 1088px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const BaseDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
