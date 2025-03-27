import React from "react";
import Title from "../../../../Components/Title";
import { Container } from "../../styles";
import * as S from "./styles";

export type FooterProps = {
  id: string;
};

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <S.ContainerFooter id={id}>
      <Container>
        <Title color="#ffffff" size="24px" description="Contato" />
        <S.ContentFooter>
          <S.LinkCurriculum>
            <Title color="#ffffff" size="20px" description="Neto Loureço" />

            <S.Text>Acesse meu curriculum:</S.Text>

            <S.Link
              target="_blank"
              href="https://drive.google.com/file/d/1rZGaDaEa-e7D0YJkaH6vSwbSihsUMOzb/view?usp=sharing"
            >
              Curriculum
            </S.Link>
          </S.LinkCurriculum>

          <div>
            <Title color="#ffffff" size="14px" description="Mídias Sociais" />
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

              <S.BorderIcon
                target="_blank"
                href="https://api.whatsapp.com/send?phone=13981402317"
              >
                <S.IconWhatsApp size={20} />
              </S.BorderIcon>
            </S.SocialMedias>
          </div>
        </S.ContentFooter>
      </Container>
    </S.ContainerFooter>
  );
};
export default Footer;
