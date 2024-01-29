// useLanguageChange.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageChange = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [isLanguageReady, setIsLanguageReady] = useState(null);
  const [whichLanguageIsIt, setWhichLanguageIsIt] = useState("");
  const router = useRouter();
  const { i18n } = useTranslation();

  const checkingPath =
    router.asPath !== "/[lang]" &&
    router.asPath !== "/en" &&
    router.asPath !== "/pt" &&
    router.asPath !== "/[lang]/resume" &&
    router.asPath !== "/en/resume" &&
    router.asPath !== "/pt/resume" &&
    router.asPath !== "/en/projects/doggy-daycare" &&
    router.asPath !== "/pt/projects/doggy-daycare" &&
    router.asPath !== "/[lang]/projects/[slug]";

  const isLanguageEnglishUrl =
    router.asPath === "/en" || router.asPath === "/en/resume";
  const isLanguagePortugueseUrl =
    router.asPath === "/pt" || router.asPath === "/pt/resume";

  useEffect(() => {
    if (isLanguagePortugueseUrl) {
      i18n.changeLanguage("pt");
      localStorage.setItem("language", "pt");
    } else if (isLanguageEnglishUrl) {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }

    const currentSavedLanguage = localStorage.getItem("language") || "en";

    setWhichLanguageIsIt(currentSavedLanguage);

    if (checkingPath) {
      setIsLanguageReady(checkingPath);
    }

    if (isLanguageReady) {
      router.push(`/${currentSavedLanguage}`);
    }

    setTimeout(() => {
      setIsLanguageLoading(false);
    }, 2000);
  }, [
    checkingPath,
    isLanguageReady,
    router,
    i18n,
    isLanguagePortugueseUrl,
    isLanguageEnglishUrl,
  ]);

  const changeLanguage = (lng) => {
    setIsLanguageLoading(true);

    const isHomepage = router.asPath === "/en" || router.asPath === "/pt";

    try {
      if (!isHomepage) {
        localStorage.setItem("language", lng);
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/\/(en|pt)\//, `/${lng}/`);

        // Redirect to the new path
        window.location.href = newPath;
      } else {
        localStorage.setItem("language", lng);
        window.location.href = `/${lng}`;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return {
    changeLanguage,
    isLanguageLoading,
    isLanguageReady,
    whichLanguageIsIt,
  };
};

export default useLanguageChange;
