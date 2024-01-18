import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Sparkle from "react-sparkle";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

const Projects = ({
  sizeHandleButtonHover,
  sizeHandleButtonLeave,
  setElementHovered,
  updateCursorShape,
}) => {
  const { t } = useTranslation();

  const [selectedSkill, setSelectedSkill] = useState(0);

  const [sparkleIsHovered, setsparkleIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setsparkleIsHovered(true);
    sizeHandleButtonHover();
  };

  const handleMouseLeave = () => {
    setsparkleIsHovered(false);
    sizeHandleButtonLeave();
  };

  const handleSkillClick = (mapItem) => {
    setSelectedSkill(mapItem);
  };

  const buttonClassNameRadio =
    "btn-animation relative overflow-hidden z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-royalAmethyst before:z-[-1] bg-[black] px-[16px] py-[8px] bg-[black] border-solid border-[2px] border-royalAmethyst font-bold rounded-[0px] flex gap-[8px] items-center rounded-[4px]";

  return (
    <div className="overflow-hidden border-y-[6px] border-solid border-primaryBlue">
      <div
        className="w-full h-full py-[72px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0)`,
        }}
      >
        <div className="px-[24px] lg:px-[48px]">
          <h2 className="font-bold text-[26px]">{t("projectsText1")}</h2>

          <p className="mt-[12px] max-w-[800px]">
            <Trans
              i18nKey={t("projectsText3")}
              components={{ bold: <strong /> }}
            />
          </p>

        </div>

        <div className="px-[24px] lg:px-[48px]">
          <hr
            aria-hidden="true"
            className="border-primaryBlue my-[32px] border-t-[4px]"
          />
        </div>

        <div className="">
          <div className="w-fit px-[24px] lg:px-[48px] flex gap-[16px] mb-[24px]">
            <button
              className={`${buttonClassNameRadio}  ${
                selectedSkill === 0
                  ? "border-royalAmethyst bg-royalAmethyst"
                  : "hover:brightness-90"
              }`}
              onClick={() => handleSkillClick(0)}
              onMouseEnter={(e) =>
                updateCursorShape(e.currentTarget, "royalAmethyst")
              }
              onMouseLeave={() => setElementHovered(null)}
            >
              Doggy Daycare
              <Image
                aria-hidden={true}
                className="w-[12px] h-[12px] "
                src="/paw-icon.svg"
                alt="Estrela Icone"
                width={0}
                height={0}
                unoptimized
              />
            </button>

            <button
              className={`${buttonClassNameRadio} ${
                selectedSkill === 1
                  ? "border-royalAmethyst bg-royalAmethyst"
                  : "hover:brightness-90"
              }`}
              onClick={() => handleSkillClick(1)}
              onMouseEnter={(e) =>
                updateCursorShape(e.currentTarget, "royalAmethyst")
              }
              onMouseLeave={() => setElementHovered(null)}
            >
              Portfolio
              <Image
                aria-hidden={true}
                className="w-[12px] h-[12px]"
                src="/paw-icon.svg"
                alt="Estrela Icone"
                width={0}
                height={0}
                unoptimized
              />
            </button>
          </div>

          <ul
            className=""
            style={{
              display: "flex",
              transform: `translateX(${-selectedSkill * 100}%)`,
              transition: "transform 0.5s",
            }}
          >
            {t("projectsData", { returnObjects: true }).map(
              (mapItem, itemIndex) => (
                <li className="bg-[black]" style={{ flex: "0 0 100%" }}>
                  <div className="px-[24px] lg:px-[48px] grid md:grid-cols-2 gap-[24px]">
                    <div className={`w-full h-fit grid gap-[12px]`}>
                      <Image
                        aria-hidden={true}
                        className="white-box w-full h-full object-cover"
                        src={mapItem.thumbnail}
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </div>

                    <div className="grid gap-[16px] h-fit">
                      <div className="grid gap-[12px]">
                        <h3 className="font-bold text-[20px] text-royalAmethyst strokeme">
                          {mapItem.name}
                        </h3>

                        <div className="flex gap-[8px] items-baseline">
                          <p className="text-[white]">
                            {" "}
                            <strong className="text-[white] font-medium">
                              Description:
                            </strong>{" "}
                            {mapItem.description}
                          </p>
                        </div>

                        <div className="flex gap-[8px] items-baseline">
                          <p>
                            <strong className="text-[white] font-medium">
                              Site Features Include:
                            </strong>{" "}
                            {mapItem.descriptionFeatures}
                          </p>
                        </div>

                        <div className="flex gap-[8px] items-baseline">
                          <p>
                            <strong className="text-[white] font-medium">
                              Website URL:
                            </strong>{" "}
                            <Link className="underline" href={"/"}>
                              https://chat.openai.com/
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div>
                        <ul className="flex gap-[12px] flex-wrap">
                          {mapItem.technologiesUsed.map(
                            (mapItem, itemIndex) => (
                              <li className="p-[8px] rounded-[3%] border-solid border-royalAmethyst bg-[white] border-[2px]">
                                <Image
                                  aria-hidden={true}
                                  className="w-[28px] h-[28px]"
                                  src={mapItem.techImageSrc}
                                  alt="Estrela Icone"
                                  width={0}
                                  height={0}
                                  unoptimized
                                />
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <div className="flex gap-[16px] mt-[16px]">
                          <button
                            className={`${buttonClassName} rounded-[3%] !px-[32px] !w-fit flex gap-[8px] items-center !border-royalAmethyst before:!bg-royalAmethyst`}
                            onMouseEnter={(e) =>
                              updateCursorShape(
                                e.currentTarget,
                                "royalAmethyst"
                              )
                            }
                            onMouseLeave={() => setElementHovered(null)}
                          >
                            Case Study
                            <Image
                              aria-hidden={true}
                              className="w-[12px] h-[12px]"
                              src="/arrow.svg"
                              alt="Estrela Icone"
                              width={0}
                              height={0}
                              unoptimized
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
