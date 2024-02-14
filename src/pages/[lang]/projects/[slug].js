import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import React, { useState } from "react";
import Link from "next/link";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";
import { useTranslation } from "react-i18next";
import useLanguageChange from "@/hooks/useLanguageChange";
import { useEffect } from "react";
import Head from "next/head";

const Project = ({ lang, slug }) => {
  const { t } = useTranslation();

  const { isLanguageLoading } = useLanguageChange();

  // State to hold the project once it's loaded
  const [project, setProject] = useState(null);
  // State to represent loading state
  const [doesProjectExist, setDoesProjectExist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the translated projects data
        const translatedProjectsData = await t("projectsData", {
          returnObjects: true,
        });

        // Find the project based on the current slug
        const foundProject = translatedProjectsData.find(
          (p) => p.slug === slug
        );

        if (!foundProject) {
          // Handle the case when the project is not found
          console.log("No project found");
        } else {
          // Update the project state
          setProject(foundProject);
        }
      } catch (error) {
        console.error("Error finding data:", error);
      } finally {
        // Loading is complete, update loading state
        setDoesProjectExist(true);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, t]); // Run the effect whenever slug or translation changes

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
        <title>
          {lang === "en"
            ? `${
                slug === "doggy-daycare" ? "Doggy Daycare" : null
              } | Web Development Portfolio`
            : lang === "pt"
            ? `${
                slug === "doggy-daycare" ? "Doggy Daycare" : null
              } | Portfolio de Desenvolvimento Web`
            : null}
        </title>

        <meta
          name="description"
          content={
            isLanguageLoading
              ? ""
              : lang === "en"
              ? `Explore details about the project "${
                  slug === "doggy-daycare" ? "Doggy Daycare" : null
                }" in my web development portfolio. Learn about the technologies used and the key features implemented.`
              : lang === "pt"
              ? `Explore detalhes sobre o projeto "${
                  slug === "doggy-daycare" ? "Doggy Daycare" : null
                }" no meu portfólio de desenvolvimento web. Saiba mais sobre as tecnologias utilizadas e as principais funcionalidades implementadas.`
              : null
          }
        />

        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/${
            lang === "en" ? "en" : lang === "pt" ? "pt" : null
          }/projects/${slug}`}
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

      {!isLanguageLoading && doesProjectExist ? (
        <>
          {project ? (
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
                            href={`/${lang}`}
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
                          <LanguageDropdown />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>

                <div className="">
                  <div>
                    <div
                      className="bg-center bg-cover h-[80vh] border-solid border-b-[6px] border-cornflowerBlue bg-fixed"
                      style={{
                        backgroundImage: `url(${project.hero})`,
                      }}
                    ></div>

                    <div className="py-[72px] px-[24px] lg:px-[48px] xl:max-w-[1280px] xl:mx-auto">
                      <div>
                        <div className="grid gap-[12px]">
                          <h1
                            id="projectHeadingText"
                            className="text-[1.625rem] font-bold"
                          >
                            {project.name}
                          </h1>

                          <p>{project.description}</p>
                        </div>

                        <div className="mt-[24px] flex gap-[16px]">
                          <Link
                            aria-label={`${t("projectsPageText1")} ${t(
                              "accessibilityText8"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.liveWebsiteUrl}
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

                        <ul className="h-fit gap-x-[32px] gap-y-[12px] grid grid-cols-2">
                          {project.technologiesUsed.map(
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

                      <hr
                        aria-hidden="true"
                        className="border-t-[3px] border-cornflowerBlue my-[32px]"
                      />

                      <div className="grid gap-[16px]">
                        <div className="grid gap-[12px]">
                          <h2 className="text-[1.375rem] font-bold">
                            {t("projectsPageText4")}
                          </h2>

                          <p>{project.challengesDescription}</p>
                        </div>

                        <ul className="h-fit gap-x-[32px] gap-y-[12px]  grid grid-cols-2">
                          {project.challenges.map((mapItem, itemIndex) => (
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
                          ))}
                        </ul>
                      </div>

                      <hr
                        aria-hidden="true"
                        className="border-t-[3px] border-cornflowerBlue my-[32px]"
                      />

                      <div className="grid gap-[16px]">
                        <div className="grid gap-[12px]">
                          <h2 className="text-[1.375rem] font-bold">
                            {t("projectsPageText5")}
                          </h2>

                          <p>{project.featuresDescription}</p>
                        </div>

                        <ul className="h-fit gap-x-[32px] gap-y-[12px]  grid grid-cols-2">
                          {project.siteMainFeatures.map(
                            (mapItem, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="h-fit grid gap-[8px]"
                              >
                                <h3 className="font-bold text-[1.25rem]">
                                  {itemIndex + 1}. {mapItem.featureHeading}
                                </h3>

                                <h4 className="font-semibold">
                                  {mapItem.featureDescription}
                                </h4>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

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
                          {project.websiteVideos.map((mapItem, itemIndex) => (
                            <li
                              className="border-solid border-[4px] border-cornflowerBlue h-fit"
                              key={itemIndex}
                            >
                              <video className="w-fit h-fit" controls>
                                <source
                                  src={mapItem.videoSrcMp4}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </li>
                          ))}
                        </ul>

                        <Link
                          aria-label={`${t("projectsPageText8")} ${t(
                            "accessibilityText8"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.liveWebsiteUrl}
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

export async function getServerSideProps({ query }) {
  const { lang, slug } = query;

  return {
    props: {
      lang,
      slug,
    },
  };
}

export default Project;
