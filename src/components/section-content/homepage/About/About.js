import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonAnimationStyles } from "@/components/utils/buttonStyle";
import { AnimatePresence, motion } from "framer-motion";
import { TextAnimationAboutHeading } from "@/components/utils/textAnimations";
import { contactInfo } from "./contactInfo";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const About = ({ setElementHovered, updateCursorShape }) => {
  const { t } = useTranslation();

  const animatedText = "Web Developer";

  return (
    <div className="overflow-hidden bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full pt-[72px] pb-[48px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div>
          <div>
            <h2 className="text-center font-bold text-[26px] mb-[32px]">
              {t("aboutText1")}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[32px] lg:gap-[24px]">
          <div>
            <div className="h-fit grid gap-[12px] justify-items-center md:justify-items-start lg:gap-[8px]">
              <Image
                aria-hidden={true}
                className="max-w-[500px] md:max-w-full w-full h-full object-cover border-solid border-[2px] border-[black]"
                src="/about-illustration.png"
                alt="Estrela Icone"
                width={0}
                height={0}
                unoptimized
              />

              <div className="flex flex-wrap gap-[12px]">
                {contactInfo
                  .filter((mapItem) => mapItem.display)
                  .map((mapItem, itemIndex) => (
                    <Link
                      className={`${buttonAnimationStyles} w-fit h-fit p-[12px] bg-[black] border-solid ${
                        itemIndex % 2 === 0
                          ? "border-primaryBlue"
                          : "border-royalAmethyst"
                      } border-[2px] rounded-[50%] before:bg-[white] before:rounded-[50%]`}
                      href={mapItem.url}
                      onMouseEnter={(e) =>
                        updateCursorShape(
                          e.currentTarget,
                          `${itemIndex % 2 === 0 ? "primaryBlue" : ""}`
                        )
                      }
                      onMouseLeave={() => setElementHovered(null)}
                    >
                      <Image
                        aria-hidden={true}
                        className={`w-[20px] sm:w-[24px]`}
                        src={mapItem.imageSrc}
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <div className="sm:text-center md:text-start">
            <div className="mb-[16px] font-bold text-[24px] strokeme text-primaryBlue">
              <motion.div>
                <TextAnimationAboutHeading
                  text={t("aboutText2")}
                />
              </motion.div>
            </div>

            <div className="grid gap-[12px] max-w-[640px] mx-auto h-fit">
              <div>
                <p>
                  <Trans
                    i18nKey={t("aboutText3")} // optional -> fallbacks to defaults if not provided
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>

              <div>
                <p>
                  <Trans
                    i18nKey={t("aboutText4")} // optional -> fallbacks to defaults if not provided
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>

              <div>
                <p>
                  <Trans
                    i18nKey={t("aboutText5")} // optional -> fallbacks to defaults if not provided
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>

              <div>
                <p>
                  If my approach resonates with you or if you have a project in
                  mind, let's connect and bring your ideas to life together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
