import React from "react";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import useLanguageChange from "@/hooks/useLanguageChange";

const Resume = () => {
  const { t } = useTranslation();

  const { whichLanguageIsIt } = useLanguageChange();

  const router = useRouter();

  const handleDownloadClick = () => {
    const link = document.createElement("a");

    link.href = `${
      whichLanguageIsIt === "en"
        ? "/assets/downloads/english-resume.pdf"
        : whichLanguageIsIt === "pt"
        ? "/assets/downloads/portuguese-resume.pdf"
        : "/assets/downloads/english-resume.pdf"
    }`;
    link.download = `${
      whichLanguageIsIt === "en"
        ? "english-resume"
        : whichLanguageIsIt === "pt"
        ? "resumo-portugues"
        : "english-resume"
    }`;
    link.click();
  };

  return (
    <div className="overflow-hidden border-b-[6px] border-solid border-cornflowerBlue bg-[url('/assets/space-bg.jpg')] bg-fixed bg-no-repeat bg-cover sm:text-center">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.8)`,
        }}
      >
        <div className="bg-[black] w-fit mx-auto relative sm:after:bg-[url(/assets/resume.svg)] after:z-20 after:content-[''] after:absolute after:w-[60px] after:h-[120px] after:bg-no-repeat after:bg-contain after:mt-[8px] after:top-[-31px] after:left-[-33px] after:block">
          <div className="relative p-[24px] md:p-[48px] rounded-[12px] overflow-hidden border-solid border-cornflowerBlue border-[6px]">
            <div className="relative z-50">
              <div>
                <h2
                  id="resumeHeadingText"
                  className="font-bold text-[1.625rem]"
                >
                  {t("resumeText1")}
                </h2>

                <h3 className="font-bold text-[1.375rem]  text-cornflowerBlueText mt-[12px]">
                  {t("resumeText2")}
                </h3>
              </div>

              <div className=" mt-[24px] gap-[16px] grid md:flex items-center sm:max-w-[400px] mx-auto">
                <Link
                  href={`${
                    router.asPath === "/en"
                      ? "/en/resume"
                      : router.asPath === "/pt"
                      ? "/pt/resume"
                      : "/resume"
                  }`}
                  className={`${buttonClassName} rounded-[4px] w-full justify-center flex gap-[8px] items-center`}
                >
                  {t("resumeText3")}
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

                <button
                  className={`${buttonClassName} rounded-[4px] w-full justify-center !border-cornflowerBlue before:!bg-cornflowerBlue flex gap-[8px] items-center`}
                  onClick={handleDownloadClick}
                >
                  {t("resumeText4")}
                  <Image
                    aria-hidden={true}
                    className="w-[12px] h-[12px]"
                    src="/assets/download.svg"
                    alt={t("altText9")}
                    width={0}
                    height={0}
                    unoptimized
                  />
                </button>
              </div>
            </div>

            <div id="container-stars">
              <div id="stars"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
