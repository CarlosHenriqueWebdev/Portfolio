import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { buttonAnimationStyles } from "@/components/utils/buttonStyle";
import { motion } from "framer-motion";
import { TextAnimationAboutHeading } from "@/components/utils/textAnimations";
import { contactInfo } from "./contactInfo";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const [isAboutImageLoading, setIsAboutImageLoading] = useState(true);

  const handleAboutImageLoad = () => {
    setIsAboutImageLoading(false);
  };

  return (
    <div className="overflow-hidden bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div>
          <div>
            <h2
              id="aboutHeadingText"
              className="text-center font-bold text-[1.625rem] mb-[32px]"
            >
              {t("aboutText1")}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[32px]">
          <div className="sm:text-center md:text-start">
            <div className="mb-[16px] font-bold text-[1.5rem]  text-cornflowerBlueText">
              <h3 className="visually-hidden">{t("aboutText2")}</h3>

              <motion.div aria-hidden="true">
                <TextAnimationAboutHeading text={t("aboutText2")} />
              </motion.div>
            </div>

            <div className="grid gap-[12px] max-w-[640px] mx-auto h-fit md:mx-0">
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
                <p>{t("aboutText6")}</p>
              </div>
            </div>
          </div>

          <div className="order-[-1]">
            <div className="h-fit grid gap-[12px] justify-items-center md:justify-items-start lg:gap-[8px]">
              <div
                className={`relative w-full block ${
                  isAboutImageLoading ? "h-[500px]" : "h-full"
                }`}
              >
                <Image
                  src="/assets/about-illustration.png"
                  alt={t("alText5")}
                  width={0} // Set your desired width
                  height={0} // Set your desired height
                  unoptimized
                  className={`${
                    isAboutImageLoading ? "opacity-0" : "opacity-1"
                  } max-w-[500px] mx-auto md:max-w-full w-full h-full object-cover border-solid border-[2px] border-[black]`}
                  onLoad={handleAboutImageLoad}
                />

                {isAboutImageLoading && (
                  <div className="absolute top-0 max-w-[500px] md:max-w-full w-full h-[500px] object-cover border-solid border-[2px] border-cornflowerBlue"></div>
                )}
              </div>

              <ul className="flex flex-wrap gap-[12px]">
                {contactInfo
                  .filter((mapItem) => mapItem.display)
                  .map((mapItem, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${mapItem.name} ${t(
                          "accessibilityText8"
                        )}`}
                        className={`${buttonAnimationStyles} block  p-[12px] bg-[black] border-solid active:scale-[0.95] ${
                          itemIndex % 2 === 0
                            ? "border-cornflowerBlue"
                            : "border-royalPurple"
                        } border-[2px] rounded-[50%] before:bg-[white] before:rounded-[50%] !w-[52px] !h-[52px] flex justify-center`}
                        href={mapItem.url}
                      >
                        <Image
                          aria-hidden={true}
                          className={`w-[20px] sm:w-[24px]`}
                          src={mapItem.imageSrc}
                          alt={mapItem.name}
                          width={0}
                          height={0}
                          unoptimized
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
