import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#060609] text-center px-[24px] lg:px-[48px] py-[48px] text-[1.125rem] font-medium">
      <div className="flex flex-col sm:flex-row gap-[4px] mx-auto w-fit font-medium text-[0.875rem]">
        <p>
          &copy; {new Date().getFullYear()} {t("footerText1")}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
