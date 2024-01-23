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
            <p className="font-medium">
              Hero & Resume[Page] Background from Behance:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-royalPurpleText"
                href="https://www.behance.net/gallery/92232693/Software-development-programming-coding-concept-blue"
              >
                https://www.behance.net/gallery/92232693/Software-development-programming-coding-concept-blue
              </Link>
            </p>
          </li>
          <li className="w-full">
            <p className="font-medium">
              About Illustration from Freepik:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-royalPurpleText"
                href="https://br.freepik.com/fotos-gratis/programador-ocupado-digitando-e-mails-em-ia-geradora-de-laptop-iluminado_42213829.htm#page=2&query=programacao&position=3&from_view=keyword&track=sph&uuid=f32f9277-41a1-41fe-9621-0327ec1092a5"
              >
                https://br.freepik.com/fotos-gratis/programador-ocupado-digitando-e-mails-em-ia-geradora-de-laptop-iluminado_42213829.htm#page=2&query=programacao&position=3&from_view=keyword&track=sph&uuid=f32f9277-41a1-41fe-9621-0327ec1092a5
              </Link>
            </p>
          </li>
          <li className="w-full">
            <p className="font-medium">
              Resume[Section] Background from:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-royalPurpleText"
                href="https://pixabay.com/pt/illustrations/espa%C3%A7o-nebulosa-estrelas-cosmos-7709489/"
              >
                https://pixabay.com/pt/illustrations/espa%C3%A7o-nebulosa-estrelas-cosmos-7709489/
              </Link>
            </p>
          </li>
          <li className="w-full">
            <p className="font-medium">
              Beautiful Patterns from Toptal:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-royalPurpleText"
                href="https://www.toptal.com/designers/subtlepatterns/"
              >
                https://www.toptal.com/designers/subtlepatterns/
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
