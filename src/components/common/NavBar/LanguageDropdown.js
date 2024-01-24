import useLanguageChange from "@/hooks/useLanguageChange";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { t } = useTranslation();

  const { changeLanguage } = useLanguageChange();

  const options = ["en", "pt"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenHover, setIsDropdownOpenHover] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(false);

  const dropdownRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const newLanguage = localStorage.getItem("language");
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    } else {
      setCurrentLanguage("en");
    }
  }, []);

  const handleOptionChange = () => {
    setIsDropdownOpenHover(false);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsDropdownOpenHover(false);
  };

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []); // Empty dependency array as it doesn't depend on any external variables

  useEffect(() => {
    const newLanguage = localStorage.getItem("language");
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    } else {
      setCurrentLanguage("en");
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  const dropDownUlRef = useRef(null);

  useEffect(() => {
    if (isDropdownOpen && dropDownUlRef.current) {
      dropDownUlRef.current.focus();
    }
  }, [isDropdownOpen]);

  const linkStyle =
    "block w-fit p-[12px] lg:text-[white] lg:hover:text-[white]";

  return (
    <div
      ref={dropdownRef}
      className={`${linkStyle} text-[16px] block !w-fit relative`}
      onMouseEnter={() => setIsDropdownOpenHover(true)}
      onMouseLeave={() => setIsDropdownOpenHover(false)}
    >
      <button
        aria-expanded={isDropdownOpen}
        aria-label={
          isDropdownOpen ? t("accessibilityText4") : t("accessibilityText5")
        }
        className="flex gap-[8px] items-center text-[white] w-max"
        onClick={toggleDropdown}
      >
        <Image
          aria-hidden={true}
          className="w-[20px]"
          src={`${
            currentLanguage === "en"
              ? "/assets/american-flag-real.svg"
              : "/assets/brazil-flag-real.svg"
          }`}
          alt={currentLanguage === "en" ? t("altText3") : t("altText2")}
          width={0}
          height={0}
          unoptimized
        />
        {currentLanguage === "en" ? "English" : "Portugues"}
        <Image
          aria-hidden={true}
          className="w-[12px]"
          src="/assets/dropdown-arrow.svg"
          alt={t("altText4")}
          width={0}
          height={0}
          unoptimized
        />
      </button>

      <div
        className={`hidden absolute z-[200] overflow-hidden pt-[24px] !w-max right-[-8px] ${
          isDropdownOpen || isDropdownOpenHover ? "!block" : ""
        }`}
      >
        <div
          className={`relative ${
            router.pathname === "/resume"
              ? ""
              : "after:bg-[url(/assets/triangle.svg)]"
          } after:z-10 after:content-[''] after:absolute after:w-[73px] after:h-[20px] after:bg-no-repeat after:bg-contain  after:block after:right-[-37px] after:top-[-16px]`}
        >
          <ul
            tabIndex="-1"
            ref={dropDownUlRef}
            role={isDropdownOpen ? "dialog" : undefined}
            aria-modal={isDropdownOpen ? "true" : "false"}
            className={`w-fit relative bg-[black] border-solid ${
              router.pathname === "/resume"
                ? "border-[#002B5C] "
                : "border-skyBlue"
            } border-[3px] z-20`}
          >
            {options.map((option) => (
              <li
                role="button"
                tabIndex="0"
                className={`w-full bg-midnightBlack px-[12px] py-[8px] cursor-pointer flex gap-[8px] items-center hover:bg-[black] hover:text-[white] ${
                  currentLanguage === "en" && option === "en"
                    ? "bg-cornflowerBlue !text-[white]"
                    : "text-white75"
                } ${
                  currentLanguage === "pt" && option === "pt"
                    ? "bg-cornflowerBlue !text-[white]"
                    : "text-white75"
                }`}
                onClick={() => {
                  handleOptionChange(option);
                  changeLanguage(option);
                }}
                key={option}
              >
                <div>
                  <Image
                    aria-hidden={true}
                    className="w-[18px]"
                    src={`${
                      option === "en"
                        ? "/assets/american-flag-real.svg"
                        : "/assets/brazil-flag-real.svg"
                    }`}
                    alt={
                      currentLanguage === "en" ? t("altText3") : t("altText2")
                    }
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>

                <div>
                  <p>{option === "en" ? "English" : "Portugues"} </p>
                </div>
              </li>
            ))}

            <li
              onClick={toggleDropdown}
              role="button"
              tabIndex="0"
              className="close-button-sr w-full bg-midnightBlack px-[12px] py-[8px] cursor-pointer flex gap-[8px] items-center hover:bg-[black] hover:text-[white]"
            >
              <p>{t("accessibilityText4")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
