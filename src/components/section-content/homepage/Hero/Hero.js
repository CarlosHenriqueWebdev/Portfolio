import React from "react";
import { motion } from "framer-motion";
import {
  TextAnimationHeadingEnglish,
  TextAnimationHeadingPortuguese,
} from "@/components/utils/textAnimations";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Trans } from "react-i18next";
import { buttonClassName } from "@/components/utils/buttonStyle";

const Hero = ({ locale }) => {
  const { t } = useTranslation();

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
    <div className="overflow-hidden border-b-[4px] ">
      <div
        className={`hero-shadow bg-fixed h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/assets/img4.webp)]`}
      >
        <div className="bg-black75 py-[100px]">
          <div className="item px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
            <div className="grid gap-[12px]">
              <span aria-hidden="true" className="font-bold text-white75">
                {t("heroText1")}
              </span>

              <div className="font-bold text-[1.75rem]">
                <motion.div aria-hidden="true">
                  {locale === "en" ? (
                    <TextAnimationHeadingEnglish text={animatedTextEnglish} />
                  ) : (
                    <TextAnimationHeadingPortuguese
                      text={animatedTextPortuguese}
                    />
                  )}
                </motion.div>

                <div>
                  {locale === "en" ? (
                    <h1 id="homeHeadingText" className="visually-hidden">
                      {animatedTextEnglish}
                    </h1>
                  ) : (
                    <h1 id="homeHeadingText" className="visually-hidden">
                      {animatedTextPortuguese}
                    </h1>
                  )}
                </div>
              </div>

              <p className="text-[1.25rem] font-bold">{t("heroText2")}</p>

              <div className="max-w-[600px] font-medium">
                <p>
                  <Trans
                    i18nKey={t("heroText3")}
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap mt-[24px] gap-[16px]">
              <ScrollLink
                className={`${buttonClassName} w-fit flex rounded-[4px] bg-color02`}
                to={"projectsSection"}
                smooth={true}
                duration={500}
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("projectsHeadingText")}
              >
                {t("heroText5")}
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} w-fit flex rounded-[4px] bg-[white] text-[black]`}
                to={"resumeSection"}
                smooth={true}
                duration={500}
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("resumeHeadingText")}
              >
                {t("heroText6")}
              </ScrollLink>

              <ScrollLink
                className={`${buttonClassName} w-fit flex rounded-[4px] bg-color02`}
                to={"contactSection"}
                smooth={true}
                duration={500}
                offset={-73}
                tabIndex="0"
                onClick={() => handleButtonClick("contactHeadingText")}
              >
                {t("heroText7")}
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
