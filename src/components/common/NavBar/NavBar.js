import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from "@/components/common/NavBar/Menu";
import LanguageDropdown from "./LanguageDropdown";

const NavBar = ({
  navbarHandleButtonHover,
  navbarHandleButtonLeave,
  activeSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScreen1024Px, setIsScreen1024Px] = useState(null);
  const [initialized, setInitialized] = useState(false);

  console.log("isScreen1024Px:", isScreen1024Px);

  useEffect(() => {
    setInitialized(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("Window Width:", window.innerWidth);

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

  const navbarHandleButtonHoverWithInitialCheck = () => {
    if (initialized) {
      navbarHandleButtonHover();
    }
  };

  return (
    <>
      {isScreen1024Px !== null ? (
        <nav className="text-[white] z-[99999] top-0 sticky">
          <div
            className="px-[24px] py-[8px] lg:px-[48px] bg-[black] border-b-[6px] border-b-primaryBlue border-solid w-full flex lg:justify-center items-center"
            onMouseEnter={navbarHandleButtonHoverWithInitialCheck}
            onMouseLeave={navbarHandleButtonLeave}
          >
            {/* <a href="#main-content" className="skip-to-content">
            Pular para o Conteúdo Principal
          </a> */}

            {isScreen1024Px ? (
              <Menu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isScreen1024Px={isScreen1024Px}
                activeSection={activeSection}
              />
            ) : (
              <div className="w-full flex gap-[24px] items-center justify-between">
                <button
                  className={`container ${menuOpen ? "menuOpen" : ""}`}
                  aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                  onClick={toggleMenu}
                >
                  <div className="checkmark">
                    <span
                      className={`bg-white90 ${menuOpen ? "!bg-[white]" : ""}`}
                    ></span>
                    <span
                      className={`bg-white90 ${menuOpen ? "!bg-[white]" : ""}`}
                    ></span>
                    <span
                      className={`bg-white90 ${menuOpen ? "!bg-[white]" : ""}`}
                    ></span>
                  </div>
                </button>

                <div className="order-1">
                  <LanguageDropdown />
                </div>
              </div>
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
