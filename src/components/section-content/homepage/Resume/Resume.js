import React from "react";
import { buttonClassName } from "@/components/utils/buttonStyle";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  const handleDownloadClickEn = () => {
    const link = document.createElement("a");

    link.href = `/assets/downloads/CV_Carlos_Henrique.pdf`;

    link.download = `CV_Carlos_Henrique`;

    link.click();
  };

  const handleDownloadClickPt = () => {
    const link = document.createElement("a");

    link.href = `/assets/downloads/CV_Carlos_Henrique_En.pdf`;

    link.download = `CV_Carlos_Henrique_En`;

    link.click();
  };

  return (
    <div className="bg-[url('/assets/img5.webp')] bg-fixed bg-no-repeat bg-cover">
      <div className="bg-black75">
        <div className="w-full py-[100px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <h2 id="resumeHeadingText" className="font-bold text-[1.5rem]">
                {t("resumeText1")}
              </h2>

              <h3 className="text-white75 font-bold text-[1.25rem]">
                {t("resumeText2")}
              </h3>
            </div>

            <div className="gap-[16px] flex flex-wrap items-center">
              <button
                className={`${buttonClassName} w-fit bg-color02 rounded-[4px]`}
                onClick={handleDownloadClickEn}
              >
                {t("resumeText4")}
              </button>
              <button
                className={`${buttonClassName} w-fit bg-[white] text-[black] rounded-[4px]`}
                onClick={handleDownloadClickPt}
              >
                {t("resumeText5")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  return { props: { locale } };
}

export default Resume;
