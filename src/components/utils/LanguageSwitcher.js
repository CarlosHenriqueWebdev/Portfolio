import React, { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState("en");
  const options = ["en", "pt"];
  const { language, switchLanguage } = useLanguage();

  const handleSwitch = (newLanguage) => {
    switchLanguage(newLanguage);
    setSelectedOption(newLanguage);
  };

  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSwitch(option)}
          disabled={language === option}
        >
          {option === "en" ? "English" : "Portugues"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
