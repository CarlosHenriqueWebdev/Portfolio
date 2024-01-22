import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import Link from "next/link";
import React from "react";
import { contactInfo } from "@/components/section-content/homepage/About/contactInfo";
import Image from "next/image";
import { skillsData } from "@/components/section-content/homepage/Skills/skillsData";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import useLanguageChange from "@/hooks/useLanguageChange";
import { useTranslation } from "react-i18next";
import Head from "next/head";

const Resume = () => {
  const { t } = useTranslation();

  const { isLanguageLoading, currentLanguage, whichLanguageIsIt } =
    useLanguageChange();

  const handleClick = () => {
    const targetElement = document.getElementById("resumeHeadingText");

    // Set focus to the target element
    if (targetElement) {
      targetElement.tabIndex = -1;
      targetElement.focus();
    }
  };

  const projectsData = t("projectsData", { returnObjects: true });
  const portfolioData = t("portfolioData", { returnObjects: true });

  const mergedArray = projectsData.concat(portfolioData);

  return (
    <>
      {!isLanguageLoading ? (
        <>
          <Head>
            <title>
              {isLanguageLoading
                ? "Loading..."
                : whichLanguageIsIt === "en"
                ? "Web Developer Resume | Skills, Experience, and Achievements"
                : whichLanguageIsIt === "pt"
                ? "Currículo de Desenvolvedor Web | Habilidades, Experiência e Conquistas"
                : ""}
            </title>

            <meta
              name="description"
              content={
                isLanguageLoading
                  ? ""
                  : whichLanguageIsIt === "en"
                  ? "Explore my web developer resume to learn about my skills, experience, and notable achievements."
                  : whichLanguageIsIt === "pt"
                  ? "Confira meu currículo de desenvolvedor web para saber mais sobre minhas habilidades, experiência e conquistas notáveis."
                  : ""
              }
            />

            <link
              rel="alternate"
              hrefLang={whichLanguageIsIt}
              href={`https://www.carloshenriquedev.com/${whichLanguageIsIt}/resume`}
            />
          </Head>

          <div className="cursor-auto bg-[white] overflow-hidden">
            <nav className="text-[white]">
              <button className="skip-to-content" onClick={handleClick}>
                {t("accessibilityText1")}
              </button>

              <div className="px-[24px] py-[8px] lg:px-[48px] bg-[#002b5c]  w-full flex lg:justify-center items-center">
                <div className="w-full flex gap-[24px] items-center justify-between">
                  <div>
                    <Link
                      className="font-bold flex gap-[8px] items-center underline text-[14px] sm:text-[16px]"
                      href={`/${currentLanguage}`}
                    >
                      <Image
                        aria-hidden={true}
                        className="w-[20px] h-[20px]"
                        src="/left-arrow-icon.svg"
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                      {t("resumePageText2")}
                    </Link>
                  </div>

                  <div className="order-1">
                    <LanguageDropdown />
                  </div>
                </div>
              </div>
            </nav>

            <ScrollToTopButton />

            <div
              className={`border-solid border-b-[6px] border-[black]  bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/hero.png)]`}
            >
              <div
                className="border-solid border-y-[6px] border-[black]  flex justify-center items-center"
                style={{
                  backgroundColor: `rgba(0, 0, 0, 0.6)`,
                }}
              >
                <div className="font-bold text-[24px] sm:text-[28px] uppercase py-[72px] grid gap-[4px] tracking-[6px]">
                  <h1 id="resumeHeadingText" className="w-fit mx-auto">
                    Carlos Henrique
                  </h1>

                  <p className="text-[20px] text-white85 w-fit mx-auto">
                    {t("resumePageText3")}
                  </p>
                </div>
              </div>

              <div className=" bg-[#002b5c] ">
                <ul className="mx-auto px-[24px] py-[20px] lg:px-[48px] grid sm:grid-cols-2 md:grid-cols-3 max-w-[900px] w-fit lg:justify-center items-center gap-[24px]">
                  {contactInfo.map((mapItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="w-full flex gap-[8px] font-bold text-white75"
                    >
                      <Image
                        aria-hidden={true}
                        className={`w-[20px]`}
                        src={mapItem.whiteImageSrc}
                        alt={mapItem.title}
                        width={0}
                        height={0}
                        unoptimized
                      />

                      {mapItem.url.startsWith("mailto:") ? (
                        <a
                          aria-label={`${mapItem.name} ${t(
                            "accessibilityText8"
                          )}`}
                          className="cursor-pointer underline"
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
                          className="cursor-pointer underline"
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
                          className="cursor-pointer underline"
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
            </div>

            <div className="text-[black] grid gap-[16px] px-[24px] lg:px-[48px] py-[48px]">
              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[24px] uppercase font-bold w-fit">
                    {t("resumePageText4")}
                  </h2>

                  <div
                    className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <p>{t("resumePageText5")}</p>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[24px] uppercase font-bold w-fit">
                    {t("resumePageText6")}
                  </h2>

                  <div
                    className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <ul className="mt-[16px] grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {skillsData.map((mapItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="bg-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#002b5c] font-bold"
                      >
                        <Image
                          aria-hidden={true}
                          className={`w-[20px] h-[20px]`}
                          src={mapItem.imageSrcBlack}
                          alt={`${mapItem.name} Logo`}
                          width={0}
                          height={0}
                          unoptimize
                        />

                        <p className="w-fit">{mapItem.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[24px] uppercase font-bold w-fit">
                    {t("resumePageText7")}
                  </h2>

                  <div
                    className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <ul className="grid gap-[24px]">
                    {mergedArray.map(
                      (mapItem, itemIndex) => (
                        <li key={itemIndex}>
                          <div>
                            <h3 className="font-bold text-[18px] uppercase flex gap-[4px] items-baseline">
                              <Link
                                href={mapItem.liveWebsiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-[2px] underline"
                              >
                                {" "}
                                <Image
                                  aria-hidden={true}
                                  className="w-[12px] h-[20px] hidden lg:block"
                                  src="/link.svg"
                                  alt={t("altText15")}
                                  width={0}
                                  height={0}
                                  unoptimized
                                />
                                {mapItem.name}
                              </Link>{" "}
                              <span className="text-[12px] text-[white75] normal-case">
                                {" "}
                                {mapItem.role}
                              </span>
                            </h3>

                            <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                              {t("resumePageProjectHeadingText1")}
                            </h4>

                            <p className="lg:pl-[24px] mt-[4px]">
                              {mapItem.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="lg:pl-[12px] uppercase mt-[16px] font-bold text-[16px] text-[#002b5c]">
                              {t("resumePageProjectHeadingText2")}
                            </h4>

                            <ul className="lg:pl-[24px] mt-[16px] grid gap-x-[16px] gap-y-[12px] lg:w-fit sm:grid-cols-2 md:grid-cols-3">
                              {mapItem.technologiesUsed.map(
                                (mapItem, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="bg-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#002b5c] font-bold"
                                  >
                                    <Image
                                      aria-hidden={true}
                                      className="w-[20px] h-[20px]"
                                      src={mapItem.blackTechImageSrc}
                                      alt={mapItem.name}
                                      width={0}
                                      height={0}
                                      unoptimized
                                    />

                                    <p className="w-fit">{mapItem.name}</p>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="lg:pl-[12px] uppercase mt-[16px] font-bold text-[16px] text-[#002b5c]">
                              {t("resumePageProjectHeadingText3")}
                            </h4>

                            <ul className="lg:pl-[12px] mt-[16px] grid gap-x-[32px] gap-y-[12px] w-fit md:grid-cols-2">
                              {mapItem.achievementsList.map(
                                (mapItem, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="bg-[white] lg:pl-[12px] flex flex-col gap-[4px] w-full"
                                  >
                                    <h5 className="uppercase w-fit font-bold text-[14px]">
                                      {mapItem.achievementHeading}
                                    </h5>

                                    <p className="text-[14px]">
                                      {mapItem.achievementDescription}
                                    </p>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[24px] uppercase font-bold w-fit">
                    {t("resumePageText8")}
                  </h2>

                  <div
                    className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <h3 className="font-bold text-[18px] uppercase">
                    {t("resumePageText9")}
                  </h3>

                  <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                    {t("resumePageText10")}
                  </h4>

                  <ul className="lg:pl-[12px] mt-[12px] grid gap-y-[12px]  gap-x-[24px] w-fit md:grid-cols-2">
                    {t("educationList", { returnObjects: true }).map(
                      (mapItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="bg-[white] lg:pl-[12px] flex flex-col gap-[4px] w-full"
                        >
                          <h5 className="uppercase w-fit font-bold text-[14px]">
                            {mapItem.educationHeading}
                          </h5>

                          <p className="text-[14px]">
                            {mapItem.educationDescription}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[24px] uppercase font-bold w-fit">
                    {t("resumePageText11")}
                  </h2>

                  <div
                    className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <ul className="lg:pl-[12px] grid gap-[16px]">
                  {t("languageList", { returnObjects: true }).map(
                    (mapItem, itemIndex) => (
                      <li key={itemIndex}>
                        <h3 className="font-bold text-[18px] uppercase">
                          {mapItem.name}
                        </h3>

                        <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                          {mapItem.proficiency}
                        </h4>

                        <p className="lg:pl-[24px] mt-[4px]">
                          {mapItem.description}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="border-solid border-t-[6px] border-[black]  w-full h-[70px] bg-[#002b5c]"></div>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Resume;
