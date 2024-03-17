import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import React from "react";
import Link from "next/link";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";
import { useTranslation } from "react-i18next";
import useLanguageChange from "@/hooks/useLanguageChange";
import i18n from "../../../i18n";
import Head from "next/head";

const Project = ({ locale, slug, foundProject }) => {
  const { t } = useTranslation();

  const { isLanguageLoading, changeLanguage } = useLanguageChange();

  const handleClick = () => {
    const targetElement = document.getElementById("projectHeadingText");

    // Set focus to the target element
    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  return (
    <>
      <Head>
        <title>{`${foundProject.pageTitle}`}</title>

        <meta name="description" content={foundProject.description} />

        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/${locale}/projects/${slug}`}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://www.carloshenriquedev.com/en/projects/${slug}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://www.carloshenriquedev.com/en/projects/${slug}`}
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href={`https://www.carloshenriquedev.com/pt/projects/${slug}`}
        />
      </Head>

      {!isLanguageLoading ? (
        <>
          {foundProject ? (
            <>
              <div className="cursor-auto">
                <ScrollToTopButton />

                <nav className="text-[white] border-solid border-b-[6px] border-cornflowerBlue">
                  <div className="xl:max-w-[1280px] xl:mx-auto">
                    <button className="skip-to-content" onClick={handleClick}>
                      {t("accessibilityText1")}
                    </button>

                    <div className="px-[24px] py-[8px] lg:px-[48px] bg-[black] w-full flex lg:justify-center items-center">
                      <div className="w-full flex gap-[24px] items-center justify-between">
                        <div>
                          <Link
                            className="font-bold flex gap-[8px] items-center underline text-[0.875rem] sm:text-[1rem]"
                            href={`/${locale}`}
                          >
                            <Image
                              aria-hidden={true}
                              className="w-[20px] h-[20px]"
                              src="/assets/left-arrow-icon.svg"
                              alt={t("altText11")}
                              width={0}
                              height={0}
                              unoptimized
                            />
                            {t("resumePageText2")}
                          </Link>
                        </div>

                        <div className="order-1">
                          <LanguageDropdown
                            locale={locale}
                            changeLanguage={changeLanguage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>

                <div>
                  <div>
                    <div
                      className="bg-center bg-cover h-[80vh] border-solid border-b-[6px] border-cornflowerBlue bg-fixed"
                      style={{
                        backgroundImage: `url(${foundProject.hero})`,
                      }}
                    ></div>

                    <div className="py-[72px] px-[24px] lg:px-[48px] xl:max-w-[1280px] xl:mx-auto">
                      <div>
                        <div className="grid gap-[12px]">
                          <h1
                            id="projectHeadingText"
                            className="text-[1.625rem] font-bold"
                          >
                            {foundProject.name}
                          </h1>

                          <p>{foundProject.description}</p>
                        </div>

                        <div className="mt-[24px] flex gap-[16px] flex-wrap">
                          <Link
                            aria-label={`${t("projectsPageText1")} ${t(
                              "accessibilityText8"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={foundProject.liveWebsiteUrl}
                            className={`${buttonClassName} px-[16px] !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                          >
                            <Image
                              aria-hidden={true}
                              className="w-[16px] h-[16px]"
                              src="/assets/white-icons/website-white.svg"
                              alt={t("altText12")}
                              width={0}
                              height={0}
                              unoptimized
                            />
                            {t("projectsPageText1")}
                          </Link>

                          {foundProject.slug !== "doggy-daycare" && (
                            <Link
                              aria-label={`${t("projectsPageText1")} ${t(
                                "accessibilityText8"
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={foundProject.figmaUrl}
                              className={`${buttonClassName} px-[16px] !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                            >
                              <Image
                                aria-hidden={true}
                                className="w-[16px] h-[16px]"
                                src="/assets/white-icons/figma-white.svg"
                                alt={t("altText12")}
                                width={0}
                                height={0}
                                unoptimized
                              />
                              {t("projectsPageText2")}
                            </Link>
                          )}

                          <Link
                            aria-label={`${t("projectsPageText1")} ${t(
                              "accessibilityText8"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={foundProject.gitHubUrl}
                            className={`${buttonClassName} px-[16px] !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                          >
                            <Image
                              aria-hidden={true}
                              className="w-[16px] h-[16px]"
                              src="/assets/white-icons/github-white.svg"
                              alt={t("altText12")}
                              width={0}
                              height={0}
                              unoptimized
                            />
                            {t("projectsPageText3")}
                          </Link>
                        </div>
                      </div>

                      <hr
                        aria-hidden="true"
                        className="border-t-[3px] border-cornflowerBlue my-[32px]"
                      />

                      <div className="grid gap-[12px]">
                        <h2 className="text-[1.375rem] font-bold">
                          {t("resumePageProjectHeadingText2")}
                        </h2>

                        <ul className="h-fit gap-x-[32px] gap-y-[12px] grid sm:grid-cols-2">
                          {foundProject.technologiesUsed.map(
                            (mapItem, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="h-fit grid gap-[8px]"
                              >
                                <h3 className="font-bold text-[1.25rem]">
                                  {itemIndex + 1}. {mapItem.name}
                                </h3>

                                <p>{mapItem.reasonWhy}</p>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {foundProject.challenges && (
                        <>
                          <hr
                            aria-hidden="true"
                            className="border-t-[3px] border-cornflowerBlue my-[32px]"
                          />

                          <div className="grid gap-[16px]">
                            <div className="grid gap-[12px]">
                              <h2 className="text-[1.375rem] font-bold">
                                {t("projectsPageText4")}
                              </h2>

                              <p>{foundProject.challengesDescription}</p>
                            </div>

                            <ul className="h-fit gap-x-[32px] gap-y-[12px] grid sm:grid-cols-2">
                              {foundProject.challenges.map(
                                (mapItem, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="h-fit grid gap-[8px]"
                                  >
                                    <h3 className="text-[1.25rem] font-bold">
                                      {itemIndex + 1}. {mapItem.challengeTitle}:
                                    </h3>

                                    <p>{mapItem.challengeDescription}</p>

                                    <p>
                                      <strong className="italic font-semibold">
                                        Solution:
                                      </strong>{" "}
                                      {mapItem.solutionText}
                                    </p>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </>
                      )}

                      <hr
                        aria-hidden="true"
                        className="border-t-[3px] border-cornflowerBlue my-[32px]"
                      />

                      <div className="grid gap-[16px]">
                        <div className="grid gap-[12px]">
                          <h2 className="text-[1.375rem] font-bold">
                            {t("projectsPageText5")}
                          </h2>

                          <p>{foundProject.featuresDescription}</p>
                        </div>

                        <ul className="h-fit gap-x-[32px] gap-y-[12px]  grid sm:grid-cols-2">
                          {foundProject.siteMainFeatures.map(
                            (mapItem, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="h-fit grid gap-[8px]"
                              >
                                <h3 className="font-bold text-[1.25rem]">
                                  {itemIndex + 1}. {mapItem.featureHeading}
                                </h3>

                                <h4>{mapItem.featureDescription}</h4>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {foundProject.websiteVideos && (
                        <>
                          <hr
                            aria-hidden="true"
                            className="border-t-[3px] border-cornflowerBlue my-[32px]"
                          />

                          <div className="grid gap-[16px]">
                            <div className="grid gap-[12px]">
                              <h2 className="text-[1.375rem] font-bold">
                                {t("projectsPageText7")}
                              </h2>
                            </div>

                            <ul className="h-fit grid gap-[16px] grid-cols-3">
                              {foundProject.websiteVideos &&
                                foundProject.websiteVideos.map(
                                  (mapItem, itemIndex) => (
                                    <li
                                      className="border-solid border-[4px] border-cornflowerBlue h-fit"
                                      key={itemIndex}
                                    >
                                      <video className="w-fit h-fit" controls>
                                        <source
                                          src={mapItem.videoSrcMp4}
                                          type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    </li>
                                  )
                                )}
                            </ul>

                            <Link
                              aria-label={`${t("projectsPageText8")} ${t(
                                "accessibilityText8"
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={foundProject.liveWebsiteUrl}
                              className={`${buttonClassName} mt-[16px] w-fit  px-[32px] !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                            >
                              {t("projectsPageText8")}
                              <Image
                                aria-hidden={true}
                                className="w-[16px] h-[16px]"
                                src="/assets/arrow.svg"
                                alt={t("altText1")}
                                width={0}
                                height={0}
                                unoptimized
                              />
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-solid border-t-[6px] border-cornflowerBlue">
                  <Footer />
                </div>
              </div>
            </>
          ) : (
            <p>No Project Found</p>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export async function getServerSideProps({ locale, query }) {
  const { slug } = query;

  i18n.changeLanguage(locale);

  // Fetch the translated projects data
  const { t } = i18n;

  const translatedProjectsData = await t("projectsData", {
    returnObjects: true,
  });

  // Find the foundProject based on the current slug
  const foundProject = translatedProjectsData.find(
    (project) => project.slug === slug
  );

  return {
    props: {
      foundProject,
      locale,
      slug,
    },
  };
}

export default Project;
