import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-color03">
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full py-[100px] flex flex-col gap-[32px]">
        <h2
          id="projectsHeadingText"
          className="itemProjects font-bold text-[1.5rem]"
        >
          {t("projectsText1")}
        </h2>

        <div>
          <ul className="grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 w-full">
            {t("projectsData", { returnObjects: true }).map(
              (mapItem, itemIndex) => (
                <li key={itemIndex} className="itemProjects w-full h-full">
                  <Link
                    href={`/projects/${mapItem.slug}`}
                    target="_blank"
                    className="block relative w-full h-full group rounded-[4px] overflow-hidden"
                  >
                    <Image
                      aria-hidden={true}
                      className="w-full h-[161.25px] object-cover"
                      src={mapItem.thumbnail}
                      alt={mapItem.thumbnailAltText}
                      width={0}
                      height={0}
                      unoptimized
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
