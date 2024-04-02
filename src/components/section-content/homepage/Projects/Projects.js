import React, { useState } from "react";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(0);

  const handleProjectClick = (mapItem) => {
    setSelectedProject(mapItem);
  };

  const buttonClassNameRadio =
    "btn-animation relative overflow-hidden z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-royalPurple before:z-[-1] bg-[black] px-[16px] py-[8px] bg-[black] border-solid border-[2px] border-royalPurple font-bold rounded-[0px] flex gap-[8px] items-center rounded-[4px] active:scale-[0.95]";

  return (
    <div className="overflow-hidden border-y-[6px] border-solid border-cornflowerBlue">
      <div
        className="w-full h-full py-[72px] xl:max-w-[1280px] xl:mx-auto"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0)`,
        }}
      >
        <div className="px-[24px] lg:px-[48px]">
          <h2 id="projectsHeadingText" className="font-bold text-[1.625rem]">
            {t("projectsText1")}
          </h2>

          <p className="mt-[12px] max-w-[800px]">
            <Trans
              i18nKey={t("projectsText2")}
              components={{ bold: <strong /> }}
            />
          </p>
        </div>

        <div className="mt-[32px]">
          <div className="w-fit px-[24px] lg:px-[48px] flex gap-[16px] mb-[24px] flex-wrap">
            {t("projectsData", { returnObjects: true }).map(
              (mapItem, itemIndex) => (
                <button
                  aria-label={`${mapItem.name} ${t("accessibilityText9")}`}
                  key={itemIndex}
                  className={`${buttonClassNameRadio}  ${
                    selectedProject === itemIndex
                      ? "border-royalPurple bg-royalPurple"
                      : "hover:brightness-90"
                  }`}
                  onClick={() => {
                    handleProjectClick(itemIndex);
                  }}
                >
                  {mapItem.name}
                  <Image
                    aria-hidden={true}
                    className="w-[12px] h-[12px] "
                    src={mapItem.icon}
                    alt={mapItem.iconAltText}
                    width={0}
                    height={0}
                    unoptimized
                  />
                </button>
              )
            )}
          </div>

          <ul
            className=""
            style={{
              display: "flex",
              transform: `translateX(${-selectedProject * 100}%)`,
              transition: "transform 0.5s",
            }}
          >
            {t("projectsData", { returnObjects: true }).map(
              (mapItem, itemIndex) => (
                <li
                  aria-hidden={selectedProject === itemIndex ? "false" : "true"}
                  className="bg-[black]"
                  style={{ flex: "0 0 100%" }}
                  key={itemIndex}
                >
                  <div className="px-[24px] lg:px-[48px] grid md:grid-cols-2 gap-[24px]">
                    <div className={`w-full h-full`}>
                      <Image
                        aria-hidden={true}
                        className="white-box w-full h-fit"
                        src={mapItem.thumbnail}
                        alt={mapItem.thumbnailAltText}
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </div>

                    <div className="grid gap-[16px] h-fit">
                      <div className="grid gap-[12px]">
                        <h3
                          id={`projectTextFocusSr${itemIndex}`}
                          className="font-bold text-[1.25rem] text-royalPurpleText "
                        >
                          {mapItem.name}
                        </h3>

                        <div className="flex gap-[8px] items-baseline">
                          <p className="text-[white]">
                            {" "}
                            <strong className="text-[white] font-medium">
                              {t("projectsText3")}
                            </strong>{" "}
                            {mapItem.description}
                          </p>
                        </div>

                        <div className="flex gap-[8px] items-baseline">
                          <p>
                            <strong className="text-[white] font-medium">
                              {t("projectsText4")}
                            </strong>{" "}
                            {mapItem.descriptionFeatures}
                          </p>
                        </div>

                        <div className="flex gap-[8px] items-baseline">
                          <p>
                            <strong className="text-[white] font-medium">
                              {t("projectsText5")}
                            </strong>{" "}
                            <Link
                              tabIndex={
                                selectedProject === itemIndex ? "0" : "-1"
                              }
                              className="underline"
                              href={mapItem.liveWebsiteUrl}
                            >
                              {mapItem.liveWebsiteUrl}
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="visually-hidden">
                          {t("resumePageProjectHeadingText2")}
                        </h4>

                        <ul className="flex gap-[12px] flex-wrap">
                          {mapItem.technologiesUsed.map(
                            (mapItem, itemIndex) => (
                              <li
                                className="p-[8px] rounded-[3%] border-solid border-royalPurple bg-[white] border-[2px]"
                                key={itemIndex}
                              >
                                <Image
                                  className="w-[28px] h-[28px]"
                                  src={mapItem.techImageSrc}
                                  alt={mapItem.name}
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
                          <Link
                            tabIndex={
                              selectedProject === itemIndex ? "0" : "-1"
                            }
                            href={`/projects/${mapItem.slug}`}
                            className={`${buttonClassName} rounded-[3%] !px-[32px] !w-fit flex gap-[8px] items-center !border-royalPurple before:!bg-royalPurple`}
                          >
                            {t("projectsText6")}
                            <Image
                              aria-hidden={true}
                              className="w-[12px] h-[12px]"
                              src="/assets/arrow.svg"
                              alt={t("altText1")}
                              width={0}
                              height={0}
                              unoptimized
                            />
                          </Link>
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
