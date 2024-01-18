// useLanguageChange.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageChange = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      // Access the language value from the query
      const lang = router.query.lang;

      // Check if the current route is the homepage
      const isHomepageRedirect = router.pathname === "/";

      const isHomepageLanguage = lang === "pt" || lang === "en";

      if (isHomepageRedirect || isHomepageLanguage) {
        const savedLanguage = localStorage.getItem("language");

        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);

          setCurrentLanguage(savedLanguage);

          router.push(`/${savedLanguage}`);
        } else {
          i18n.changeLanguage("en");
          localStorage.setItem("language", "en");

          setCurrentLanguage("en");

          router.push(`/en`);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setTimeout(() => {
        setIsLanguageLoading(false);
      }, 2000);
    }
  }, []); // Run only on mount

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setIsLanguageLoading(true);

    try {
      localStorage.setItem("language", lng);

      router.push(`/`);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return { changeLanguage, isLanguageLoading, currentLanguage };
};

export default useLanguageChange;
