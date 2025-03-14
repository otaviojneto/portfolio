import React from "react";
import Title from "../../../../Components/Title";
import { Container } from "../../styles";
import * as S from "./styles";

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
            <Title
              color="#ffffff"
              size="14px"
              description="Perfis Profissionais"
            />
            <S.SocialMedias>
              <S.BorderIcon
                target="_blank"
                href="https://github.com/otaviojneto"
              >
                <S.IconGitHub />
              </S.BorderIcon>

              <S.BorderIcon
                target="_blank"
                href="https://www.linkedin.com/in/otavio-lourenco-neto/"
              >
                <S.IconLinkedin size={20} />
              </S.BorderIcon>
            </S.SocialMedias>
          </div>
        </S.ContentFooter>
      </Container>
    </S.ContainerFooter>
  );
};
export default Footer;
