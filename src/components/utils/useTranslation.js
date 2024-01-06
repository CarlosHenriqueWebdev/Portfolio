// useTranslation.js
import { useLanguage } from "@/components/context/LanguageContext";

const useTranslation = (translations) => {
  const { language } = useLanguage();

  const translate = (key) => {
    if (!translations || !translations[language]) {
      return key;
    }

    return translations[language][key] || key;
  };

  return { translate };
};

export default useTranslation;
