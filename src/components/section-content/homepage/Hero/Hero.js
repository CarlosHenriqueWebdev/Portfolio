import Image from "next/image";
import React, { useState } from "react";
import useTranslation from "@/components/utils/useTranslation";
import Sparkle from "react-sparkle";
import { AnimatePresence, motion } from "framer-motion";
import {
  TextAnimationHeadingEnglish,
  TextAnimationHeadingPortuguese,
} from "@/components/utils/textAnimations";
import { heroTranslations } from "@/components/utils/siteTranslations";
import { useLanguage } from "@/components/context/LanguageContext";

const Hero = ({
  setElementHovered,
  updateCursorShape,
  buttonClassName,
  sizeHandleButtonHover,
  sizeHandleButtonLeave,
}) => {
  const { translate: heroTranslation } = useTranslation({
    ...heroTranslations,
  });

  const { language, switchLanguage } = useLanguage();

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
    <div className="border-b-[4px] border-solid border-white25">
      <div
        className={`hero-shadow bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/hero.png)]`}
      >
        <div
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
          }}
          className=""
        >
          <div className="px-[24px] lg:px-[48px] py-[72px]">
            <div className="grid gap-[8px]">
              <span className="strokeme text-white85">
                {heroTranslation("text1")}
              </span>

              <div className="font-bold text-[24px] sm:text-[28px]">
                <motion.div>
                  {language === "en" ? (
                    <TextAnimationHeadingEnglish text={animatedTextEnglish} />
                  ) : (
                    <TextAnimationHeadingPortuguese
                      text={animatedTextPortuguese}
                    />
                  )}
                </motion.div>
              </div>

              <p className="strokeme text-[20px] text-royalAmethyst font-bold">
                {heroTranslation("text5")}
              </p>

              <p className="max-w-[600px]">
                {heroTranslation("text6")}{" "}
                <strong className="strokeme text-royalAmethyst font-bold">
                  {heroTranslation("text9")}
                </strong>{" "}
                {heroTranslation("text8")}{" "}
                <strong className="strokeme text-royalAmethyst font-bold">
                  {heroTranslation("text7")}
                </strong>{" "}
                {heroTranslation("text10")}
                {heroTranslation("text11")}
              </p>

              <div className="w-fit h-fit relative">
                <p
                  className="text-[16px] sm:text-[20px] font-bold flex items-start sm:items-center gap-[8px] mt-[8px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    aria-hidden={true}
                    className={`w-[20px] sm:w-[24px] transition-[300ms] ${
                      sparkleIsHovered ? "scale-[1.2]" : ""
                    }`}
                    src="/star.svg"
                    alt="Estrela Icone"
                    width={0}
                    height={0}
                    unoptimized
                  />
                  {heroTranslation("text12")}
                </p>

                {sparkleIsHovered && <Sparkle count={10} overflowPx={1} />}
              </div>
            </div>

            <div className="grid mt-[24px] sm:flex gap-[16px]">
              <button
                className={`${buttonClassName}`}
                onMouseEnter={(e) => updateCursorShape(e.target)}
                onMouseLeave={() => setElementHovered(null)}
              >
                {heroTranslation("text13")}
              </button>

              <button
                className={`${buttonClassName} !border-primaryBlue before:!bg-primaryBlue`}
                onMouseEnter={(e) => updateCursorShape(e.target, "primaryBlue")}
                onMouseLeave={() => setElementHovered(null)}
              >
                {heroTranslation("text14")}
              </button>

              <button
                className={`${buttonClassName} !border-lightLavender before:!bg-lightLavender`}
                onMouseEnter={(e) =>
                  updateCursorShape(e.target, "lightLavender")
                }
                onMouseLeave={() => setElementHovered(null)}
              >
                {heroTranslation("text15")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
