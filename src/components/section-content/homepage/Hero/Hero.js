import Image from "next/image";
import React, { useState, useEffect } from "react";
import Sparkle from "react-sparkle";
import { AnimatePresence, motion } from "framer-motion";
import {
  TextAnimationHeadingEnglish,
  TextAnimationHeadingPortuguese,
} from "@/components/utils/textAnimations";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useLanguageChange from "@/hooks/useLanguageChange";
import { Trans } from "react-i18next";

const Hero = ({
  setElementHovered,
  updateCursorShape,
  buttonClassName,
  sizeHandleButtonHover,
  sizeHandleButtonLeave,
}) => {
  const { t } = useTranslation();

  const { currentLanguage } = useLanguageChange();

  const [sparkleIsHovered, setsparkleIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setsparkleIsHovered(true);
    sizeHandleButtonHover();
  };

  const handleMouseLeave = () => {
    setsparkleIsHovered(false);
    sizeHandleButtonLeave();
  };

  const animatedTextPortuguese = "Eu sou [Null],uma Desenvolvedora Web";
  const animatedTextEnglish = "I'm [Null],a Web Developer";

  return (
    <div className="overflow-hidden border-b-[6px] border-solid border-primaryBlue">
      <div
        className={`hero-shadow bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/hero.png)]`}
      >
        <div
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
          }}
        >
          <div className="px-[24px] lg:px-[48px] py-[72px]">
            <div className="grid gap-[8px]">
              <span className="strokeme text-white85">
                {t("heroText1")}
              </span>

              <div className="font-bold text-[24px] sm:text-[28px]">
                <motion.div>
                  {currentLanguage === "en" ? (
                    <TextAnimationHeadingEnglish text={animatedTextEnglish} />
                  ) : (
                    <TextAnimationHeadingPortuguese
                      text={animatedTextPortuguese}
                    />
                  )}
                </motion.div>
              </div>

              <p className="strokeme text-[20px] text-royalAmethyst font-bold">
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

              <div className="w-fit h-fit relative">
                <motion.button whileTap={{ scale: 0.95 }}>
                  <ScrollLink
                    className="cursor-pointer sm:text-[20px] font-bold flex items-start sm:items-center gap-[8px] mt-[8px]"
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
                      src="/star.svg"
                      alt="Estrela Icone"
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
                className={`${buttonClassName} flex gap-[8px] items-center`}
                onMouseEnter={(e) => updateCursorShape(e.currentTarget)}
                onMouseLeave={() => setElementHovered(null)}
                to={"projectsSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
              >
                {t("heroText5")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/arrow.svg"
                  alt="Estrela Icone"
                  width={0}
                  height={0}
                  unoptimized
                />
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} !border-primaryBlue before:!bg-primaryBlue flex gap-[8px] items-center`}
                onMouseEnter={(e) =>
                  updateCursorShape(e.currentTarget, "primaryBlue")
                }
                onMouseLeave={() => setElementHovered(null)}
                to={"resumeSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
              >
                {t("heroText6")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/arrow.svg"
                  alt="Estrela Icone"
                  width={0}
                  height={0}
                  unoptimized
                />
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                onMouseEnter={(e) =>
                  updateCursorShape(e.currentTarget, "lightViolet")
                }
                onMouseLeave={() => setElementHovered(null)}
                to={"contactSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
              >
                {t("heroText7")}
                <Image
                  aria-hidden={true}
                  className="w-[12px] h-[12px] rotate-[90deg]"
                  src="/arrow.svg"
                  alt="Estrela Icone"
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
