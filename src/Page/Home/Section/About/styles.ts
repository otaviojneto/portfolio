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
  background-blend-mode: darken;
  background-color: #ffffff;
  background-image: url(${notePhone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 280px;
  margin-top: -52px;
  width: 100%;
  z-index: 1;

  @media (max-width: 1088px) {
    background-image: url(${notePhoneMobile});
    margin-top: -20px;
    height: 200px;
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
