import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import Link from "next/link";
import React from "react";
import { contactInfo } from "@/components/section-content/homepage/About/contactInfo";
import Image from "next/image";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import useLanguageChange from "@/hooks/useLanguageChange";
import { useTranslation } from "react-i18next";
import Head from "next/head";

const Resume = ({ locale }) => {
  const { t } = useTranslation();

  const { isLanguageLoading, changeLanguage } = useLanguageChange();

  const handleClick = () => {
    const targetElement = document.getElementById("resumeHeadingText");

    // Set focus to the target element
    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  const projectsData = t("projectsData", { returnObjects: true });
  const portfolioData = t("portfolioData", { returnObjects: true });

  const mergedArray = projectsData.concat(portfolioData);

  return (
    <>
      <Head>
        <title>{t("resumeTitle")}</title>

        <meta name="description" content={t("resumeMetaDescription")} />

        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/${locale}/resume`}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.carloshenriquedev.com/resume"
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href="https://www.carloshenriquedev.com/pt/resume"
        />
      </Head>

      {!isLanguageLoading ? (
        <>
          <div className="cursor-auto bg-[white] overflow-hidden">
            <nav className="text-[white] bg-[black] w-full">
              <div className="xl:max-w-[1280px] xl:mx-auto">
                <button className="skip-to-content" onClick={handleClick}>
                  {t("accessibilityText1")}
                </button>

                <div className="px-[24px] py-[8px] lg:px-[48px]  flex lg:justify-center items-center">
                  <div className="w-full flex gap-[24px] items-center justify-between">
                    <div>
                      <Link
                        className="font-bold flex gap-[8px] items-center underline text-[0.875rem] sm:text-[1rem]"
                        href={`${"/"}`}
                      >
                        <Image
                          aria-hidden={true}
                          className="w-[20px] h-[20px]"
                          src="/assets/left-arrow-icon.svg"
                          alt="Estrela Icone"
                          width={0}
                          height={0}
                          unoptimized
                        />
                        {t("resumePageText2")}
                      </Link>
                    </div>

                    <div className="order-1">
                      <LanguageDropdown locale={locale} changeLanguage={changeLanguage} />
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <ScrollToTopButton />

            <div
              className={`border-solid border-b-[6px] border-[#5541D4]  bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center`}
            >
              <div
                className="border-solid border-y-[6px] border-[#5541D4]  flex justify-center items-center"
                style={{
                  backgroundColor: `rgba(0, 0, 0, 0.8)`,
                }}
              >
                <div className="font-bold text-[1.5rem] sm:text-[1.75rem] uppercase py-[72px] grid gap-[4px]">
                  <h1 id="resumeHeadingText" className="w-fit mx-auto">
                    Carlos Henrique
                  </h1>

                  <p className="text-[1.25rem] text-[#5541D4] w-fit mx-auto">
                    {t("resumePageText3")}
                  </p>
                </div>
              </div>

              <div className="bg-[black] ">
                <ul className="w-full px-[24px] py-[20px] lg:px-[48px] grid sm:grid-cols-2 lg:grid-cols-3 lg:justify-center items-center gap-[24px]">
                  {contactInfo.map((mapItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="w-full flex gap-[8px] font-bold "
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

            <div className="text-[black] grid gap-[16px] px-[24px] lg:px-[48px] py-[48px] xl:max-w-[1280px] xl:mx-auto">
              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[1.5rem] uppercase font-bold w-fit">
                    {t("resumePageText4")}
                  </h2>

                  <div
                    className={`bg-[black] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <p>{t("resumePageText5")}</p>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[1.5rem] uppercase font-bold w-fit">
                    {t("resumePageText6")}
                  </h2>

                  <div
                    className={`bg-[black] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <ul className="mt-[16px] grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {t("skillsData", { returnObjects: true }).map(
                      (mapItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="bg-[black] text-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#5541D4] font-bold"
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
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[1.5rem] uppercase font-bold w-fit">
                    {t("resumePageText7")}
                  </h2>

                  <div
                    className={`bg-[black] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <ul className="grid gap-[24px]">
                    {mergedArray.map((mapItem, itemIndex) => (
                      <li key={itemIndex}>
                        <div>
                          <h3 className="font-bold text-[1.125rem] uppercase flex gap-[4px] items-baseline">
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
                                src="/assets/link.svg"
                                alt={t("altText15")}
                                width={0}
                                height={0}
                                unoptimized
                              />
                              {mapItem.name}
                            </Link>{" "}
                            <span className="text-[0.75rem] normal-case">
                              {" "}
                              {mapItem.role}
                            </span>
                          </h3>

                          <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[1rem] text-[#5541D4]">
                            {t("resumePageProjectHeadingText1")}
                          </h4>

                          <p className="lg:pl-[24px] mt-[4px]">
                            {mapItem.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="lg:pl-[12px] uppercase mt-[16px] font-bold text-[1rem] text-[#5541D4]">
                            {t("resumePageProjectHeadingText2")}
                          </h4>

                          <ul className="lg:pl-[24px] mt-[16px] grid gap-x-[16px] gap-y-[12px] lg:w-fit sm:grid-cols-2 md:grid-cols-3">
                            {mapItem.technologiesUsed.map(
                              (mapItem, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="bg-[black] text-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#5541D4] font-bold"
                                >
                                  <Image
                                    aria-hidden={true}
                                    className="w-[20px] h-[20px]"
                                    src={mapItem.techImageSrc}
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
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-[16px]">
                <div className="relative w-fit">
                  <h2 className="text-[1.5rem] uppercase font-bold w-fit">
                    {t("resumePageText8")}
                  </h2>

                  <div
                    className={`bg-[black] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <div className="lg:pl-[12px]">
                  <h3 className="font-bold text-[1.125rem] uppercase">
                    {t("resumePageText9")}
                  </h3>

                  <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[1rem] text-[#5541D4]">
                    {t("resumePageText10")}
                  </h4>

                  <ul className="lg:pl-[12px] mt-[12px] grid gap-y-[12px]  gap-x-[24px] w-fit md:grid-cols-2">
                    {t("educationList", { returnObjects: true }).map(
                      (mapItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="bg-[white] lg:pl-[12px] flex flex-col gap-[4px] w-full"
                        >
                          <h5 className="uppercase w-fit font-bold text-[0.875rem]">
                            {mapItem.educationHeading}
                          </h5>

                          <p className="text-[0.875rem]">
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
                  <h2 className="text-[1.5rem] uppercase font-bold w-fit">
                    {t("resumePageText11")}
                  </h2>

                  <div
                    className={`bg-[black] left-0 absolute w-full h-[4px]`}
                  ></div>
                </div>

                <ul className="lg:pl-[12px] grid gap-[16px]">
                  {t("languageList", { returnObjects: true }).map(
                    (mapItem, itemIndex) => (
                      <li key={itemIndex}>
                        <h3 className="font-bold text-[1.125rem] uppercase">
                          {mapItem.name}
                        </h3>

                        <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[1rem] text-[#5541D4]">
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

            <footer className="border-solid border-t-[6px] border-[#5541D4] bg-[black] text-center px-[24px] lg:px-[48px] py-[48px] text-[1.125rem] font-medium"></footer>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}

export default Resume;
