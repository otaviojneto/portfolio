import React from "react";
import * as S from "./styles";
import brand from "../../assets/brand_nt.svg";
import hamburguer from "../../assets/hamburguer.svg";
import close from "../../assets/close.svg";

export type NavProps = {
  img?: string | undefined;
};

const links = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/#about" },
  { name: "Projetos", path: "/#projects" },
  { name: "Contato", path: "/#contact" },
];

const Nav: React.FC<NavProps> = ({ img }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <S.ContainerNav>
      <S.Brand src={img ?? brand} />

      <nav>
        <S.UlDesktop>
          {links.map((item) => (
            <S.List key={item.name}>
              <S.Link href={item.path}>{item.name}</S.Link>
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
                <S.LinkMobile href={item.path}>{item.name}</S.LinkMobile>
              </S.List>
            ))}
        </S.MenuMobile>
      </nav>
    </S.ContainerNav>
  );
};

export default Nav;
