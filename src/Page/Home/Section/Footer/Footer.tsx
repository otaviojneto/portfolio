import React from "react";
import GitHub from "../../../../Components/Icons/Github";
import Linkedin from "../../../../Components/Icons/Linkedin";
import WhatsApp from "../../../../Components/Icons/whatsapp";

export type FooterProps = {
  id: string;
};

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer
      id={id}
      className="relative w-full bg-[#0a001b] pb-5! pt-[130px] before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-[100px] before:w-full before:bg-white before:content-[''] before:[border-radius:0_0_60%_60%] max-[1088px]:[&_h1]:text-center"
    >
      <div className="relative z-10 mx-auto max-w-[1188px] px-5">
        <div className="mt-5 flex justify-between items-start text-white">
          <div>
            <h1 className="text-white text-xl font-semibold leading-4.5">Neto Loureço</h1>

            <p className="my-2.5 text-xs text-white">Acesse meu curriculum</p>

            <a
              className="inline-block cursor-pointer rounded-[5px] border border-white px-4 py-2.5 text-sm font-semibold text-white no-underline transition-transform duration-300 ease-in-out hover:-translate-y-1 max-[1088px]:w-full max-[1088px]:text-center"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1qhR1zJlbDL5_9MXiAMmw_VsZU_KvVnME/view?usp=sharing"
            >
              Curriculum
            </a>
          </div>

          <div>
            <h1 className="text-white text-sm font-semibold">Mídias Sociais</h1>
            <div className="mt-2.5 flex gap-2.5 max-[1088px]:justify-center">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#0a001b]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/otaviojneto"
                aria-label="GitHub"
              >
                <GitHub />
              </a>

              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#0a001b]"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/otavio-lourenco-neto/"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#0a001b]"
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=13981402317"
                aria-label="WhatsApp"
              >
                <WhatsApp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
