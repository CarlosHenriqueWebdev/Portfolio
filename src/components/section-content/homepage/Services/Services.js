import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Trans, useTranslation } from "react-i18next";

const delayItem = {
  open: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemAnimation = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  closed: {
    opacity: 0,
    scale: 1.2,
  },
};

const Services = ({ sizeHandleButtonHover, sizeHandleButtonLeave }) => {
  const { t } = useTranslation();

  const motionUlRef = useRef(null);
  const isInView = useInView(motionUlRef, { once: true });

  return (
    <div className="overflow-hidden border-b-[4px] border-solid border-[black] bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div className="">
          <div className="mb-[32px]">
            <h2 className="font-bold text-[26px]">{t("servicesText1")}</h2>

            <p className="mt-[12px]">
              <Trans
                i18nKey={t("servicesText2")}
                components={{ bold: <strong /> }}
              />
            </p>
          </div>

          <div>
            <motion.ul
              className="grid gap-x-[16px] gap-y-[24px] items-stretch md:grid-cols-2 lg:grid-cols-3"
              variants={delayItem}
              initial="closed"
              animate={isInView && "open"}
              ref={motionUlRef}
            >
              {t("servicesData", { returnObjects: true }).map(
                (mapItem, itemIndex) => (
                  <motion.li
                    className={`rounded-[4px] w-full h-full p-[24px] border-solid border-[3px] ${
                      itemIndex % 2 === 0
                        ? "border-primaryBlue"
                        : "border-royalAmethyst"
                    } content-baseline bg-[black] grid `}
                    key={itemIndex}
                    variants={itemAnimation}
                  >
                    <div
                      className={`w-fit border-solid ${
                        itemIndex % 2 === 0
                          ? "border-primaryBlue"
                          : "border-royalAmethyst"
                      }  border-[3px] p-[12px] rounded-[100%]`}
                    >
                      <Image
                        aria-hidden={true}
                        className="w-[40px] h-[40px]"
                        src={mapItem.imageSrc}
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </div>

                    <div className="grid gap-[8px] mt-[16px]">
                      <h3 className="text-[18px] sm:text-[20px]">
                        {mapItem.title}
                      </h3>

                      <p className="max-w-[400px] text-white85 text-[14px] sm:text-[16px]">
                        {mapItem.description}
                      </p>
                    </div>
                  </motion.li>
                )
              )}
            </motion.ul>

            <p className="mt-[32px] text-[20px]">
              {t("servicesText3")}{" "}
              <ScrollLink
                href="#contactSection"
                className="text-lightViolet font-semibold hover:underline cursor-pointer"
                to={"contactSection"} // Use 'to' instead of 'href'
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the duration of the scroll animation in milliseconds
                offset={-73}
                onMouseEnter={sizeHandleButtonHover}
                onMouseLeave={sizeHandleButtonLeave}
              >
                {t("servicesText4")}
              </ScrollLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
