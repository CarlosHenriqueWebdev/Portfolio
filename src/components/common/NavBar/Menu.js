// Menu.js
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import SharedData from "@/components/utils/SharedData";
import Image from "next/image";
import LanguageDropdown from "./LanguageDropdown";
import { navTranslations } from "@/components/utils/siteTranslations";
import useTranslation from "@/components/utils/useTranslation";

const Menu = ({
  menuOpen,
  setMenuOpen,
  isScreen1024Px,
  activeSection,
}) => {
  const { translate: navTranslation } = useTranslation({
    ...navTranslations,
  });

  const linksData = SharedData();

  const ulRef = useRef(null);

  useEffect(() => {
    if (menuOpen && ulRef.current && !isScreen1024Px) {
      ulRef.current.focus();
    }
  }, [menuOpen, isScreen1024Px]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle =
    "relative cursor-pointer block w-full p-[12px] lg:text-[white] lg:p-[10px] lg:hover:text-[white]";

  const underlineStyle = "bg-primaryBlue left-0 absolute w-full h-[4px]";

  return (
    <div
      className={`hidden bg-[black] ${
        menuOpen ? "!block h-[100vh] lg:h-auto lg:!flex" : ""
      }`}
    >
      {!isScreen1024Px && (
        <h1 className="text-[28px] py-[12px] px-[16px] text-[white] w-full">
          Menu
        </h1>
      )}

      <ul
        ref={ulRef}
        role={menuOpen && !isScreen1024Px ? "dialog" : undefined}
        tabIndex="-1" // Make the ul focusable
        aria-modal={menuOpen ? "true" : "false"}
        className={`mx-[16px] lg:mx-[0px] max-h-[420px] flex flex-col items-center gap-3 text-[1.25rem] overflow-auto py-[24px] lg:flex-row lg:py-[0px] lg:h-auto lg:overflow-visible lg:gap-[16px]`}
      >
        {linksData.allLinks[0].links.map((mapItem, itemIndex) => (
          <li
            key={itemIndex}
            className="btn-animation  border-solid relative  z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-royalAmethyst before:z-[-1] border-primaryBlue border-[2px] lg:border-none lg:before:content-none animation-underline-trigger w-full lg:w-fit group"
          >
            <ScrollLink
              className={`${linkStyle} ${
                mapItem.href === activeSection
                  ? "strokeme-nav bg-royalAmethyst lg:!bg-[transparent]"
                  : ""
              }`}
              to={mapItem.href} // Use 'to' instead of 'href'
              smooth={true} // Enable smooth scrolling
              duration={500} // Set the duration of the scroll animation in milliseconds
              offset={-73}
            >
              {navTranslation(`text${itemIndex + 1}`)}

              {isScreen1024Px && (
                <div
                  className={`${underlineStyle} animation-underline ${
                    mapItem.href === activeSection
                      ? "expand-animation opacity-100"
                      : "opacity-0"
                  } group-hover:!opacity-100 `}
                ></div>
              )}
            </ScrollLink>
          </li>
        ))}

        {isScreen1024Px && (
          <>
            <li aria-hidden="true">
              <hr className="border-t-[2px] w-[30px] rotate-[90deg] border-white50" />
            </li>

            <LanguageDropdown />
          </>
        )}

        {menuOpen && !isScreen1024Px && (
          <li
            className="visually-hidden"
            aria-hidden={menuOpen && !isScreen1024Px ? "false" : "true"}
          >
            <button onClick={toggleMenu}>Fechar Modal</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
