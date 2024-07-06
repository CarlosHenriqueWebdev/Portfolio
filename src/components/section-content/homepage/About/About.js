import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
    <div className="overflow-hidden ">
      <div className="py-[100px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px]">
        <ul className="flex flex-wrap gap-[16px]">
          {contactInfo
            .filter((mapItem) => mapItem.display)
            .map((mapItem, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${mapItem.name} ${t("accessibilityText8")}`}
                  className="hover:brightness-90"
                  href={mapItem.url}
                >
                  <Image
                    aria-hidden={true}
                    className={`w-[28px] h-[28px]`}
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

        <div className="grid md:grid-cols-2 gap-[32px]">
          <div className="md:text-start flex flex-col gap-[16px] ">
            <div className="font-bold flex flex-col gap-[24px]">
              <h2 id="aboutHeadingText" className="font-bold text-[1.5rem]">
                {t("aboutText1")}
              </h2>

              <h3 className="visually-hidden">{t("aboutText2")}</h3>

              <motion.div
                aria-hidden="true"
                className="!text-white75 text-[1.25rem]"
              >
                <TextAnimationAboutHeading text={t("aboutText2")} />
              </motion.div>
            </div>

            <div className="grid gap-[12px] h-fit md:mx-0">
              <div>
                <p>
                  <Trans
                    i18nKey={t("aboutText3")} // optional -> fallbacks to defaults if not provided
                    components={{ bold: <strong /> }}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="order-[-1]">
            <div className="h-fit grid gap-[12px] justify-items-center md:justify-items-start lg:gap-[8px]">
              <div className={`relative w-full block h-full`}>
                <Image
                  src="/assets/img2.jpg"
                  alt={t("alText5")}
                  width={0}
                  height={0}
                  unoptimized
                  aria-hidden={true}
                  className={`${
                    isAboutImageLoading ? "opacity-0 h-[200px]" : "opacity-1"
                  }  w-full h-full object-cover rounded-[4px]`}
                  onLoad={handleAboutImageLoad}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h3 className="font-bold text-[1.25rem]">{t("skillsText1")}</h3>

          <ul className="grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 w-full">
            {t("skillsData", { returnObjects: true }).map((mapItem) => (
              <li
                aria-label={`${mapItem.name}, ${t("accessibilityText10")}`}
                key={mapItem.id}
                className="bg-color03 text-[white] px-[16px] py-[12px] flex gap-[8px] items-center w-full h-full font-medium"
              >
                <Image
                  aria-hidden={true}
                  className={`w-[20px] h-[20px]`}
                  src={mapItem.imageSrc}
                  alt={`${mapItem.name} Logo`}
                  width={0}
                  height={0}
                  unoptimized
                />
                <p className="w-fit">{mapItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
