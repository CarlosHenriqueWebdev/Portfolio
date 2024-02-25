import React, { useEffect, useState } from "react";
import Menu from "@/components/common/NavBar/Menu";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const NavBar = ({ activeSection, locale, changeLanguage }) => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScreen1024Px, setIsScreen1024Px] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (Math.floor(window.innerWidth) >= 1024) {
        setMenuOpen(true);
        setIsScreen1024Px(true);
      } else {
        setMenuOpen(false);
        setIsScreen1024Px(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    const targetElement = document.getElementById("homeHeadingText");

    // Set focus to the target element
    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  return (
    <>
      {isScreen1024Px !== null ? (
        <nav
          role="navigation"
          className="text-[white] z-[6000] top-0 sticky "
          aria-labelledby="mainmenulabel"
        >
          <div className="px-[24px] py-[8px] lg:px-[48px] bg-[black] border-b-[6px] border-b-cornflowerBlue border-solid w-full flex lg:justify-center items-center">
            <button className="skip-to-content" onClick={handleClick}>
              {t("accessibilityText1")}
            </button>

            <h2 id="mainmenulabel" className="visually-hidden">
              Main Menu
            </h2>

            {isScreen1024Px ? (
              <Menu
                changeLanguage={changeLanguage}
                locale={locale}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isScreen1024Px={isScreen1024Px}
                activeSection={activeSection}
              />
            ) : (
              <ul className="w-full flex gap-[24px] items-center justify-between">
                <li className="order-[1]">
                  <LanguageDropdown
                    locale={locale}
                    changeLanguage={changeLanguage}
                  />
                </li>

                <li>
                  <button
                    aria-expanded={menuOpen}
                    className={`container ${menuOpen ? "menuOpen" : ""}`}
                    aria-label={
                      menuOpen
                        ? t("accessibilityText2")
                        : t("accessibilityText3")
                    }
                    onClick={toggleMenu}
                  >
                    <div className="checkmark">
                      <span
                        className={`bg-white90 ${
                          menuOpen ? "!bg-[white]" : ""
                        }`}
                      ></span>
                      <span
                        className={`bg-white90 ${
                          menuOpen ? "!bg-[white]" : ""
                        }`}
                      ></span>
                      <span
                        className={`bg-white90 ${
                          menuOpen ? "!bg-[white]" : ""
                        }`}
                      ></span>
                    </div>
                  </button>
                </li>
              </ul>
            )}
          </div>

          {!isScreen1024Px && (
            <Menu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isScreen1024Px={isScreen1024Px}
              activeSection={activeSection}
            />
          )}
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
export default NavBar;
