// pages/[slug].js
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Footer from "@/components/common/Footer/Footer";

const SlugPage = ({ data, locale, slug }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    const targetElement = document.getElementById("projectHeadingText");
    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  const changeLanguage = (newLocale) => {
    const { asPath } = router;

    // Construct the new URL with the new locale
    const newPath = `/${newLocale}${asPath}`;

    // Force a full page reload
    window.location.href = newPath;
  };

  return (
    <>
      <Head>
        <title>{`${data.pageTitle}`}</title>
        <meta name="description" content={data.description} />
        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/projects/${slug}`}
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href={`https://www.carloshenriquedev.com/pt/projects/${slug}`}
        />
      </Head>

      {data ? (
        <>
          <div className="cursor-auto">
            <nav className="text-[white] ">
              <div className="xl:max-w-[1280px] xl:mx-auto">
                <button className="skip-to-content" onClick={handleClick}>
                  {t("accessibilityText1")}
                </button>

                <div className="px-[24px] py-[8px] lg:px-[48px] bg-[black] w-full flex lg:justify-center items-center">
                  <div className="w-full flex gap-[24px] items-center justify-between">
                    <div>
                      <Link
                        className="font-bold flex gap-[8px] items-center underline text-[0.875rem]"
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
                        {t("projectsText8")}
                      </Link>
                    </div>
                    <div className="order-1">
                      <div className="relative">
                        <button
                          className="py-[6px] flex items-center gap-[4px] text-white75 font-bold"
                          onClick={toggleDropdown}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                          aria-controls="language-menu"
                          aria-label="Select language"
                        >
                          <div className="flex items-center gap-[6px]">
                            <Image
                              aria-hidden={true}
                              src={`/assets/${t("currentLanguageFlag")}`}
                              alt={`${t("currentLanguage")} flag`}
                              width={14}
                              height={14}
                              intrinsic="true"
                              className="w-[14px] h-[14px]"
                              quality={100}
                            />
                            {t("currentLanguage")}
                          </div>

                          <Image
                            aria-hidden={true}
                            src="/assets/vector4.svg"
                            alt="down arrow"
                            width={10}
                            height={10}
                            intrinsic="true"
                            className="w-[10px] h-[10px]"
                            quality={100}
                          />
                        </button>
                        {isOpen && (
                          <div className="bg-color03 border-solid border-white75 w-[150px] right-[0] font-bold text-white75  border-[2px]  absolute top-full z-10 mt-3 overflow-hidden rounded-[4px] ">
                            <ul>
                              {t("languages", {
                                returnObjects: true,
                              })?.map((item, index) => (
                                <li key={index} role="none">
                                  <a
                                    className="hover:brightness-90 flex items-center gap-[6px] hover:bg-darkCharcoal px-[24px] py-[12px] w-full cursor-pointer"
                                    onClick={() =>
                                      changeLanguage(item.DO_NOT_CHANGE)
                                    }
                                    tabIndex="0"
                                  >
                                    <Image
                                      aria-hidden={true}
                                      src={`/assets/${item.flag}`}
                                      alt={`${item.language} flag`}
                                      width={14}
                                      height={14}
                                      intrinsic="true"
                                      className="w-[14px] h-[14px]"
                                      quality={100}
                                    />
                                    {item.language}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div>
              <div
                className="bg-center bg-cover h-[80vh] bg-fixed mb-[100px]"
                style={{ backgroundImage: `url(${data.hero})` }}
              ></div>

              <div className="flex flex-col gap-[64px]">
                <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full">
                  <div className="grid gap-[12px]">
                    <h1
                      id="projectHeadingText"
                      className="text-[1.5rem] font-bold"
                    >
                      {data.name}
                    </h1>
                    <p className="max-w-[800px]">{data.description}</p>
                  </div>

                  <div className="mt-[24px] flex gap-[16px] flex-wrap">
                    <Link
                      aria-label={`${t("projectsPageText1")} ${t(
                        "accessibilityText8",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.liveWebsiteUrl}
                      className={`${buttonClassName} px-[16px] bg-color02 rounded-[4px] flex gap-[8px] items-center !text-[0.875rem]`}
                    >
                      <Image
                        aria-hidden={true}
                        className="w-[16px] h-[16px]"
                        src="/assets/website-white.svg"
                        alt={t("altText12")}
                        width={0}
                        height={0}
                        unoptimized
                      />
                      {t("projectsPageText1")}
                    </Link>

                    {!data.isMissingFigmaButton && (
                      <Link
                        aria-label={`${t("projectsPageText1")} ${t(
                          "accessibilityText8",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={data.figmaUrl}
                        className={`${buttonClassName} px-[16px] bg-color02 rounded-[4px] flex gap-[8px] items-center !text-[0.875rem]`}
                      >
                        <Image
                          aria-hidden={true}
                          className="w-[16px] h-[16px]"
                          src="/assets/figma-white.svg"
                          alt={t("altText12")}
                          width={0}
                          height={0}
                          unoptimized
                        />
                        {t("projectsPageText2")}
                      </Link>
                    )}

                    {!data.isMissingGithubButton && (
                      <Link
                        aria-label={`${t("projectsPageText1")} ${t(
                          "accessibilityText8",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={data.gitHubUrl}
                        className={`${buttonClassName} px-[16px] bg-color02 rounded-[4px] flex gap-[8px] items-center !text-[0.875rem]`}
                      >
                        <Image
                          aria-hidden={true}
                          className="w-[16px] h-[16px]"
                          src="/assets/github-white.svg"
                          alt={t("altText12")}
                          width={0}
                          height={0}
                          unoptimized
                        />
                        {t("projectsPageText3")}
                      </Link>
                    )}
                  </div>
                </div>

                <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full grid gap-[12px]">
                  <h2 className="text-[1.25rem] font-bold">
                    {t("projectsText7")}
                  </h2>

                  <ul className="grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {data.technologiesUsed.map((mapItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="bg-color03 text-[white] px-[16px] py-[12px] flex gap-[8px] items-center w-full h-full rounded-[4px] border-[3px] border-[#5541D4] font-bold"
                      >
                        <p className="w-fit text-[0.875rem]">{mapItem.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-[16px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full">
                  <div className="grid gap-[12px]">
                    <h2 className="text-[1.25rem] font-bold">
                      {t("projectsPageText5")}
                    </h2>
                  </div>
                  <ul className="h-fit gap-x-[32px] gap-y-[12px]  grid sm:grid-cols-2">
                    {data.siteMainFeatures.map((mapItem, itemIndex) => (
                      <li key={itemIndex} className="h-fit grid gap-[8px]">
                        <h3 className="font-bold text-[1rem]">
                          {itemIndex + 1}. {mapItem.featureHeading}
                        </h3>
                        <h4>{mapItem.featureDescription}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-[100px]">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <p>No Project Found</p>
      )}
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Fetch the translated projects data for all locales
  const locales = ["en", "pt"]; // Add all locales your application supports
  let paths = [];

  for (const locale of locales) {
    i18n.changeLanguage(locale);
    const { t } = i18n;
    const translatedProjectsData = await t("projectsData", {
      returnObjects: true,
    });

    // Create paths with locale
    const localePaths = translatedProjectsData.map((project) => ({
      params: { slug: project.slug },
      locale,
    }));

    paths = [...paths, ...localePaths];
  }

  return { paths, fallback: "blocking" };
}

// This function gets called at build time
export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  // Change language to the current locale
  i18n.changeLanguage(locale);

  // Fetch the translated projects data
  const { t } = i18n;
  const translatedProjectsData = await t("projectsData", {
    returnObjects: true,
  });

  // Find the foundProject based on the current slug
  const data = translatedProjectsData.find((project) => project.slug === slug);

  if (!data) {
    // Return a 404 error if the slug is not valid
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      locale,
      slug,
    },
  };
}

export default SlugPage;
