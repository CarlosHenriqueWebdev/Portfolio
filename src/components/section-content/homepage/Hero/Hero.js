import Image from "next/image";
import React, { useState } from "react";
import Sparkle from "react-sparkle";
import { motion } from "framer-motion";
import {
  TextAnimationHeadingEnglish,
  TextAnimationHeadingPortuguese,
} from "@/components/utils/textAnimations";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useLanguageChange from "@/hooks/useLanguageChange";
import { Trans } from "react-i18next";
import { buttonClassName } from "@/components/utils/buttonStyle";

const Hero = () => {
  const { t } = useTranslation();

  const { whichLanguageIsIt } = useLanguageChange();

  const [sparkleIsHovered, setsparkleIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setsparkleIsHovered(true);
  };

  const handleMouseLeave = () => {
    setsparkleIsHovered(false);
  };

  const handleButtonClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  const animatedTextPortuguese = "Eu sou Carlos, um Desenvolvedor Web";
  const animatedTextEnglish = "I'm Carlos, a Web Developer";

  return (
    <div className="overflow-hidden border-b-[6px] border-solid border-cornflowerBlue">
      <div
        className={`hero-shadow bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/assets/hero.png)]`}
      >
        <div
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
          }}
        >
          <div className="px-[24px] lg:px-[48px] py-[72px] xl:max-w-[1280px] xl:mx-auto">
            <div className="grid gap-[8px]">
              <span aria-hidden="true" className=" text-white85">
                {t("heroText1")}
              </span>

              <div className="font-bold text-[1.5rem] sm:text-[1.75rem]">
                <motion.div aria-hidden="true">
                  {whichLanguageIsIt === "en" ? (
                    <TextAnimationHeadingEnglish text={animatedTextEnglish} />
                  ) : (
                    <TextAnimationHeadingPortuguese
                      text={animatedTextPortuguese}
                    />
                  )}
                </motion.div>

                {whichLanguageIsIt === "en" ? (
                  <h1 id="homeHeadingText" className="visually-hidden">
                    {animatedTextEnglish}
                  </h1>
                ) : (
                  <h1 id="homeHeadingText" className="visually-hidden">
                    {animatedTextPortuguese}
                  </h1>
                )}
              </div>

              <p className=" text-[1.25rem] text-royalPurpleText font-bold">
                {t("heroText2")}
              </p>

              <div className="max-w-[600px]">
                <p>
                  <Trans
                    i18nKey={t("heroText3")} // optional -> fallbacks to defaults if not provided
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>

              <p className="visually-hidden">{t("heroText4")}</p>

              <div aria-hidden="true" className="w-fit h-fit relative">
                <motion.button whileTap={{ scale: 0.95 }} tabIndex="-1">
                  <ScrollLink
                    className="cursor-pointer sm:text-[1.25rem] font-bold flex items-start sm:items-center gap-[8px] mt-[8px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    to={"contactSection"} // Use 'to' instead of 'href'
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Set the duration of the scroll animation in milliseconds
                    offset={-73}
                  >
                    <Image
                      aria-hidden={true}
                      className={`w-[20px] sm:w-[24px]`}
                      src="/assets/star.svg"
                      alt={t("altText8")}
                      width={0}
                      height={0}
                      unoptimized
                    />
                    {t("heroText4")}
                  </ScrollLink>

                  {sparkleIsHovered && <Sparkle count={10} overflowPx={1} />}
                </motion.button>
              </div>
            </div>

            <div className="grid mt-[24px] sm:flex gap-[16px]">
              <ScrollLink
                className={`${buttonClassName} px-[16px] flex gap-[8px] items-center`}
                to={"projectsSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("projectsHeadingText")}
              >
                {t("heroText5")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/assets/arrow.svg"
                  alt={t("altText1")}
                  width={0}
                  height={0}
                  unoptimized
                />
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} px-[16px] !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                to={"resumeSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("resumeHeadingText")}
              >
                {t("heroText6")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/assets/arrow.svg"
                  alt={t("altText1")}
                  width={0}
                  height={0}
                  unoptimized
                />
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} px-[16px] !border-skyBlue before:!bg-skyBlue flex gap-[8px] items-center`}
                to={"contactSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("contactHeadingText")}
              >
                {t("heroText7")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/assets/arrow.svg"
                  alt={t("altText1")}
                  width={0}
                  height={0}
                  unoptimized
                />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
