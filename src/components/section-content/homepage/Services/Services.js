import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const motionUlRef = useRef(null);

  return (
    <div className="overflow-hidden border-b-[4px] border-solid border-[black] bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px] xl:max-w-[1280px] xl:mx-auto"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div className="">
          <div className="mb-[32px] text-center">
            <h2 id="servicesHeadingText" className="font-bold text-[1.625rem]">
              {t("servicesText1")}
            </h2>

            <p className="mt-[16px] text-white85 mx-auto">
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
                      <h3 className="text-[1.125rem] sm:text-[1.25rem]">
                        {mapItem.title}
                      </h3>

                      <p className="max-w-[400px] text-white85 text-[0.875rem] sm:text-[1rem]">
                        {mapItem.description}
                      </p>
                    </div>
                  </motion.li>
                )
              )}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
