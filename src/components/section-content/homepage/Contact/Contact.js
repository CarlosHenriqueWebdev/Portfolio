import React from "react";
import { contactInfo } from "../About/contactInfo";
import Image from "next/image";
import Form from "./Form";
import { TextAnimationContactHeading } from "@/components/utils/textAnimations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { buttonClassName } from "@/components/utils/buttonStyle";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [didFormSubmit, setDidFormSubmit] = useState(false);

  const handleButtonClick = () => {
    setDidFormSubmit(false);

    const elementAndOffset =
      document.getElementById("contactSection").getBoundingClientRect().top +
      window.scrollY +
      -73;

    window.scrollTo({ top: elementAndOffset, behavior: "smooth" });
  };

  return (
    <div className="border-y-[6px] border-solid border-cornflowerBlue overflow-hidden">
      {!didFormSubmit ? (
        <div>
          <div
            className="w-full h-full pt-[72px] pb-[48px] px-[24px] lg:px-[96px] xl:max-w-[1280px] xl:mx-auto"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.92)`,
            }}
          >
            <div>
              <div className="">
                <div className="h-fit">
                  <motion.div
                    aria-hidden="true"
                    className="text-[1.5rem] font-bold  text-royalPurpleText"
                  >
                    <TextAnimationContactHeading text={t("contactText1")} />
                  </motion.div>

                  <h2
                    id="contactHeadingText"
                    className="text-[1.625rem] font-bold mt-[8px]"
                  >
                    {t("contactText2")}
                  </h2>

                  <p className="mt-[12px]">{t("contactText3")}</p>
                </div>

                <ul className="flex flex-wrap flex-col sm:flex-row gap-[12px] h-fit w-fit mt-[16px]">
                  {contactInfo
                    .filter((mapItem) => mapItem.isForContact)
                    .map((mapItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="w-fit flex gap-[8px] items-start"
                      >
                        <div className="w-[20px] h-[20px] ">
                          <Image
                            aria-hidden={true}
                            className={`w-full h-full`}
                            src={mapItem.whiteImageSrc}
                            alt={mapItem.name}
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>

                        {mapItem.url.startsWith("mailto:") ? (
                          <a
                            aria-label={`${mapItem.name} ${t(
                              "accessibilityText8"
                            )}`}
                            className="text-[0.875rem] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </a>
                        ) : mapItem.url.startsWith("https://wa.me/") ? (
                          <a
                            aria-label={`${mapItem.name} ${t(
                              "accessibilityText8"
                            )}`}
                            className="text-[0.875rem] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </a>
                        ) : (
                          <Link
                            aria-label={`${mapItem.name} ${t(
                              "accessibilityText8"
                            )}`}
                            className="text-[0.875rem] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mt-[32px]">
                <h3 className="visually-hidden">
                  {t("accessibilityText11")}
                </h3>

                <Form
                  didFormSubmit={didFormSubmit}
                  setDidFormSubmit={setDidFormSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[black] w-full h-full grid gap-[24px] py-[72px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              aria-hidden={true}
              className="w-full h-full max-w-[280px] mx-auto object-cover"
              src="/assets/success-illustration.svg"
              alt={t("altText6")}
              width={0}
              height={0}
              unoptimized
            />
          </motion.div>

          <h2
            role="alert"
            className="text-[1.625rem] text-center font-bold text-skyBlueText"
          >
            {t("successText1")}
          </h2>

          <button
            className={`${buttonClassName} w-fit mx-auto !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
            onClick={handleButtonClick}
          >
            <Image
              aria-hidden={true}
              className="w-[16px] rotate-[180deg]"
              src="/assets/arrow.svg"
              alt={t("altText1")}
              width={0}
              height={0}
              unoptimized
            />
            {t("successText2")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
