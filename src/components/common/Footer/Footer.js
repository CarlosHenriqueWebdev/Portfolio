import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropDownHeadingRef = useRef(null);

  useEffect(() => {
    if (isDropdownOpen && dropDownHeadingRef.current) {
      dropDownHeadingRef.current.focus();
    }
  }, [isDropdownOpen]);

  return (
    <div className="text-center px-[24px] lg:px-[48px] py-[48px] text-[18px] font-medium">
      <div className="flex gap-[4px] mx-auto w-fit">
        <p>
          &copy; {new Date().getFullYear()} {t("footerText1")}{" "}
        </p>

        <button
          aria-label={
            isDropdownOpen ? t("accessibilityText6") : t("accessibilityText7")
          }
          className="text-cornflowerBlueText underline flex items-center gap-[8px]"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {t("footerText2")}

          <Image
            aria-hidden="true"
            className={`w-[12px] transition-all rotate-[90deg]`}
            src="/arrow-purple.svg"
            alt={t("altText1")}
            width="0"
            height="0"
            unoptimized
          />
        </button>
      </div>

      <div
        className={`mt-[32px] px-[24px] lg:px-[48px] bg-[white] rounded-[8px] text-[black] p-[24px] border-solid border-[4px] border-cornflowerBlue w-fit mx-auto hidden ${
          isDropdownOpen ? "!block" : ""
        }`}
      >
        <h2
          tabIndex="-1"
          ref={dropDownHeadingRef}
          id="attributionFocusSr"
          className="text-[22px] font-black"
        >
          Attributions
        </h2>

        <ul className="mt-[24px] flex flex-col w-full !text-start items-center gap-[16px]">
          <li className="w-full">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-royalPurpleText"
              href="https://br.freepik.com/vetores-gratis/fundo-de-tecnologia-de-conexao-de-rede-de-terra-digital-global_6864941.htm#from_view=detail_alsolike"
            >
              Hero and Resume Image from starline on Freepik
            </Link>
          </li>

          <li className="w-full">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-royalPurpleText"
              href="https://br.freepik.com/fotos-gratis/uma-pessoa-digitando-no-teclado-do-computador-a-noite-gerado-por-ia_42191506.htm#page=3&query=Keyboard&position=5&from_view=search&track=sph&uuid=57a3dd1d-f9d9-43f8-b260-ade742cb266f"
            >
              About Image from vecstock on Freepik
            </Link>
          </li>

          <li className="w-full">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-royalPurpleText"
              href="https://br.freepik.com/vetores-gratis/interior-de-quarto-de-menino-adolescente-computadores-na-mesa_8924570.htm#query=Programa%C3%A7%C3%A3o&position=47&from_view=search&track=sph&uuid=971d2afb-231a-430f-a18c-2e74520c43c3"
            >
              Image Above Contact from upklyak on Freepik
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
