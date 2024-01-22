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
      const getSavedLanguage = () => {
        const savedLanguage = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLanguage);
        setCurrentLanguage(savedLanguage);
        return savedLanguage;
      };

      const currentSavedLanguage = localStorage.getItem("language");

      setWhichLanguageIsIt(currentSavedLanguage);

      // Check if the current route is the homepage
      const isHomepageRedirect = router.pathname === "/";

      const isHomepageLanguage = router.pathname === "/[lang]";

      const isResumeRedirect = router.pathname === "/resume";

      const isResumeLanguage = router.pathname === "/resume/[lang]";

      const isProjectsLanguage = router.pathname === "/[lang]/projects/[slug]";

      if (isHomepageRedirect || isHomepageLanguage) {
        const savedLanguage = getSavedLanguage();

        router.push(`/${savedLanguage}`);
      } else if (isResumeRedirect || isResumeLanguage) {
        const savedLanguage = getSavedLanguage();

        router.push(`/${savedLanguage}/resume`);
      } else if (isProjectsLanguage) {
        getSavedLanguage();
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
      localStorage.setItem("language", lng);

      const currentPath = router.asPath;
      const newPath = currentPath.replace(/\/[a-z]{2}\//, `/${lng}/`);

      // Replace the current route with the new language parameter
      window.location.href = newPath;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return { changeLanguage, isLanguageLoading, currentLanguage, whichLanguageIsIt };
};

export default useLanguageChange;
