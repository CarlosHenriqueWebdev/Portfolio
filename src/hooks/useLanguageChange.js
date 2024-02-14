// useLanguageChange.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageChange = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
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

  useEffect(() => {
    if (checkingPath) {
      const localStorageLang = localStorage.getItem("language" || "en");
      window.location.href = `/${localStorageLang}`;

      return;
    }

    const isLanguageEnglishUrl =
      router.asPath === "/en" ||
      router.asPath === "/en/resume" ||
      router.asPath === "/en/projects/doggy-daycare";
    const isLanguagePortugueseUrl =
      router.asPath === "/pt" ||
      router.asPath === "/pt/resume" ||
      router.asPath === "/pt/projects/doggy-daycare";

    if (isLanguagePortugueseUrl) {
      i18n.changeLanguage("pt");
      localStorage.setItem("language", "pt");
      setWhichLanguageIsIt("pt");
    } else if (isLanguageEnglishUrl) {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
      setWhichLanguageIsIt("en");
    }

    setTimeout(() => {
      setIsLanguageLoading(false);
    }, 2000);
  }, [i18n, router.asPath, checkingPath]); // Run the effect only once when the component mounts

  const isHomepage = router.asPath === "/en" || router.asPath === "/pt";

  const changeLanguage = (lng) => {
    setIsLanguageLoading(true);

    if (!isHomepage) {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(/\/(en|pt)\//, `/${lng}/`);

      // Redirect to the new path
      window.location.href = newPath;
    } else {
      window.location.href = `/${lng}`;
    }
  };

  return {
    whichLanguageIsIt,
    isHomepage,
    changeLanguage,
    isLanguageLoading,
    i18n,
  };
};

export default useLanguageChange;
