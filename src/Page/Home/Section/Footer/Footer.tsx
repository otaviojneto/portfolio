import React from "react";
import * as S from "./styles";
import { Container } from "../../styles";
import Title from "../../../../Components/Title";
import linkedin from "../../../../icons/linkedin.svg";
import github from "../../../../icons/github.svg";

const Footer: React.FC = () => {
  return (
    <S.ContainerFooter>
      <Container>
        <S.ContentFooter>
          <div>
            <Title color="#ffffff" size="20px" description="Neto Loureço" />

            <S.Text>Acesse meu curriculum:</S.Text>

            <S.Link
              target="_blank"
              href="https://drive.google.com/file/d/1XjLTAT-O00yMffyp2NLSj7xP1r0caWPH/view?usp=sharing"
            >
              Curriculum
            </S.Link>
          </div>
          <div>
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
          </div>
        </S.ContentFooter>
      </Container>
    </S.ContainerFooter>
  );
};

export default Footer;
