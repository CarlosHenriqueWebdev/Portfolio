import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Trans, useTranslation } from "react-i18next";

const Services = ({ sizeHandleButtonHover, sizeHandleButtonLeave }) => {
  const { t } = useTranslation();

  const motionUlRef = useRef(null);

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
            <h2 id="servicesHeadingText" className="font-bold text-[26px]">
              {t("servicesText1")}
            </h2>

            <p className="mt-[12px]">
              <Trans
                i18nKey={t("servicesText2")}
                components={{ bold: <strong /> }}
              />
            </p>
          </div>

          <div>
            <motion.ul
              className="grid gap-x-[16px] gap-y-[24px] items-stretch md:grid-cols-2"
              ref={motionUlRef}
            >
              {t("servicesData", { returnObjects: true }).map(
                (mapItem, itemIndex) => (
                  <motion.li
                    className={`rounded-[4px] w-full h-full p-[24px] border-solid border-[3px] ${
                      itemIndex % 2 === 0
                        ? "border-cornflowerBlue"
                        : "border-royalPurple"
                    } content-baseline bg-[black] flex gap-[16px] `}
                    key={itemIndex}
                  >
                                     <div
                      className={`w-fit h-fit border-solid ${
                        itemIndex % 2 === 0
                          ? "border-cornflowerBlue"
                          : "border-royalPurple"
                      }  border-[3px] p-[12px] rounded-[8px]`}
                    >
                      <Image
                        aria-hidden={true}
                        className="w-[40px] h-[40px]"
                        src={mapItem.imageSrc}
                        alt={`${t("altText10")} ${mapItem.title}`}
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </div>
                    
                    <div className="grid gap-[8px] h-fit">
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
                className="text-skyBlueText font-semibold hover:underline cursor-pointer"
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
