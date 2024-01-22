// pages/test.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Test = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);

  const { t, i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language");

      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);

        router.push(`/test/${savedLanguage}`);
      } else {
        i18n.changeLanguage("en");
        localStorage.setItem("language", "en");

        router.push(`/test/en`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLanguageLoading(false);
    }
  }, [i18n, router]); // Run only on mount

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      {!isLanguageLoading && (
        <>
          <h1>{t("navText1")}</h1>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("pt")}>Portuguese</button>
        </>
      )}
    </div>
  );
};

export default Test;
