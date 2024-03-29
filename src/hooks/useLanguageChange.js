// useLanguageChange.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageChange = () => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const router = useRouter();

  const { pathname, asPath, query } = useRouter();

  const { i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsLanguageLoading(false);
    }, 2000);
  }, []); // Run the effect only once when the component mounts

  const isHomepage = router.asPath === "/en" || router.asPath === "/pt";

  const changeLanguage = (lng) => {
    // you can do interpolation
    setIsLanguageLoading(true);

    setTimeout(() => {
      router
        .push({ pathname, query }, asPath, { locale: `${lng}` })
        .then(() => setIsLanguageLoading(false));
    }, 2000);
  };

  return {
    isHomepage,
    changeLanguage,
    isLanguageLoading,
    i18n,
  };
};

export default useLanguageChange;
