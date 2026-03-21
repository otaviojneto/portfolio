import React from "react";
import brand from "../../icons/brand_nt.svg";
import hamburguer from "../../icons/hamburguer.svg";
import close from "../../icons/close.svg";

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
    <div className="mx-auto flex max-w-[1200px] justify-center px-5">
      <div className="fixed left-1/2 top-5 z-10 flex w-[60%] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-[60px] bg-white px-10 py-2 shadow-[0_10px_36px_0_rgba(0,0,0,0.16),0_0_0_1px_rgba(0,0,0,0.06)] max-[1088px]:left-[3%] max-[1088px]:w-[94%] max-[1088px]:translate-x-0 max-[1088px]:px-5">
        <img
          src={img ?? brand}
          alt=""
          className="h-20 w-20 rounded-full border border-[#d2d2d2] max-[1088px]:h-10 max-[1088px]:w-10"
        />

        <nav>
          <ul className="flex list-none max-[1088px]:hidden">
            {links.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => onNavigate?.(item.path)}
                  className="cursor-pointer rounded-lg border-none bg-transparent p-5 text-base font-semibold no-underline transition duration-300 ease-in-out hover:rounded-lg hover:bg-[#f1f1f1] active:bg-[#f1f1f1]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-expanded={openMenu}
            aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
            className="hidden max-[1088px]:block"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src={hamburguer} alt="menu" className="block" />
          </button>
        </nav>

        <ul
          className={`hidden max-[1088px]:absolute max-[1088px]:left-0 max-[1088px]:right-0 max-[1088px]:top-0 max-[1088px]:z-20 max-[1088px]:block max-[1088px]:list-none max-[1088px]:overflow-hidden max-[1088px]:rounded-[30px] max-[1088px]:bg-white max-[1088px]:px-5 max-[1088px]:shadow-[0_10px_36px_0_rgba(0,0,0,0.16),0_0_0_1px_rgba(0,0,0,0.06)] ${openMenu
            ? "max-[1088px]:animate-[nav-slide-down_0.2s_ease-in-out_forwards] z-50"
            : "max-[1088px]:animate-[nav-slide-up_0.2s_ease-in-out_forwards]"
            }`}
        >
          <li className="max-[1088px]:flex max-[1088px]:list-none max-[1088px]:items-center max-[1088px]:justify-between max-[1088px]:bg-transparent max-[1088px]:py-2">
            <img
              src={img ?? brand}
              alt=""
              className="h-10 w-10 rounded-full border border-[#d2d2d2]"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              className="hidden max-[1088px]:block"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <img src={close} alt="menu" />
            </button>
          </li>

          {openMenu &&
            links.map((item) => (
              <li
                key={item.name}
                className="max-[1088px]:border-b max-[1088px]:border-[#d2d2d2] max-[1088px]:last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => {
                    onNavigate?.(item.path);
                    setOpenMenu(false);
                  }}
                  className="flex h-10 w-full cursor-pointer items-center border-none bg-transparent text-base font-semibold no-underline"
                >
                  {item.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
