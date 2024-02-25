import React from "react";

import useLanguageChange from "@/hooks/useLanguageChange";
import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
const Resume = ({ locale }) => {
  const { isLanguageLoading, changeLanguage } = useLanguageChange();

  console.log("isLanguageLoading page", isLanguageLoading);

  return (
    <div>
      <h1 className="m-[100px]">
        {" "}
        Is it loading? {isLanguageLoading ? "yes" : "no"}
      </h1>

      <LanguageDropdown locale={locale}  changeLanguage={changeLanguage} />

      <button
        onClick={() => {
          changeLanguage();
        }}
      >
        update state
      </button>
    </div>
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
