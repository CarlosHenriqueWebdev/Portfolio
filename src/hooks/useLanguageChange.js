// useLanguageChange.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageChange = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(false);
  const [whichLanguageIsIt, setWhichLanguageIsIt] = useState("");
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    try {
      const currentSavedLanguage = localStorage.getItem("language");

      setWhichLanguageIsIt(currentSavedLanguage);

      // Check if the current route is the homepage
      const isHomepageRedirect = router.pathname === "/";

      if (isHomepageRedirect) {
        const savedLanguage = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLanguage);
        setCurrentLanguage(savedLanguage);

        router.push(`/${savedLanguage}`);
      }

      // const isResumeRedirect = router.pathname === "/resume";

      // const isResumeLanguage = router.pathname === "/resume/[lang]";

      // const isProjectsLanguage = router.pathname === "/[lang]/projects/[slug]";

      const isLanguageEnglishUrl = router.asPath === "/en";
      const isLanguagePortugueseUrl = router.asPath === "/pt";

      if (isLanguageEnglishUrl) {
        i18n.changeLanguage("en");

        localStorage.setItem("language", "en");
      } else if (isLanguagePortugueseUrl) {
        i18n.changeLanguage("pt");

        localStorage.setItem("language", "pt");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setTimeout(() => {
        setIsLanguageLoading(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only on mount

  const changeLanguage = (lng) => {
    setIsLanguageLoading(true);

    try {
      // Replace the current route with the new language parameter
      window.location.href = `/${lng}`;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return {
    changeLanguage,
    isLanguageLoading,
    currentLanguage,
    whichLanguageIsIt,
  };
};

export default useLanguageChange;
