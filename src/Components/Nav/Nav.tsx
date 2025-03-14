import React from "react";
import * as S from "./styles";
import brand from "../../icons/brand_nt.svg";
import hamburguer from "../../icons/hamburguer.svg";
import close from "../../icons/close.svg";
import { Container } from "../../Page/Home/styles";

export type NavProps = {
  img?: string | undefined;
  onNavigate?: (section: string) => void;
};

const links = [
  { name: "Início", path: "portfolio" },
  { name: "Sobre", path: "about" },
  { name: "Projetos", path: "projects" },
  { name: "Contato", path: "contact" },
];

const Nav: React.FC<NavProps> = ({ img, onNavigate }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Container flexCenter>
      <S.ContainerNav>
        <S.Brand src={img ?? brand} />

        <nav>
          <S.UlDesktop>
            {links.map((item) => (
              <S.List key={item.name}>
                <S.Link as="button" onClick={() => onNavigate?.(item.path)}>
                  {item.name}
                </S.Link>
              </S.List>
            ))}
          </S.UlDesktop>

          <S.Icon
            onClick={() => setOpenMenu(!openMenu)}
            src={hamburguer}
            alt="menu"
          />

          <S.MenuMobile open={openMenu}>
            <S.UlMobile>
              <S.Brand src={img ?? brand} />

              <S.Icon
                onClick={() => setOpenMenu(!openMenu)}
                src={close}
                alt="menu"
              />
            </S.UlMobile>

            {openMenu &&
              links.map((item) => (
                <S.List key={item.name}>
                  <S.LinkMobile
                    as="button"
                    onClick={() => {
                      onNavigate?.(item.path);
                      setOpenMenu(false);
                    }}
                  >
                    {item.name}
                  </S.LinkMobile>
                </S.List>
              ))}
          </S.MenuMobile>
        </nav>
      </S.ContainerNav>
    </Container>
  );
};

export default Nav;
