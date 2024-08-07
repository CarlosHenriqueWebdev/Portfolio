// Menu.js
import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import SharedData from "@/components/utils/SharedData";
import LanguageDropdown from "./LanguageDropdown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const sidebar = {
  open: () => ({
    clipPath: "circle(210% at 0% 0%)",
    transition: {
      type: "just",
      stiffness: 160,
    },
  }),
  closed: {
    clipPath: "circle(0% at 0% 0%)",
    transition: {
      type: "just",
      delay: 0.5,
    },
  },
};

const itemAnimation = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const delayItem = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: 1 },
  },
};

const Menu = ({
  menuOpen,
  setMenuOpen,
  isScreen1024Px,
  activeSection,
  locale,
  changeLanguage,
}) => {
  const { t } = useTranslation();

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
    "relative cursor-pointer block w-full p-[12px] lg:text-[white] lg:p-[10px]";

  const handleButtonClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 1200);
    }
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={!isScreen1024Px ? sidebar : null}
      >
        <div
          className={`bg-[black] h-full lg:h-auto lg:!flex lg:static lg:w-full lg:justify-center`}
        >
          <motion.ol
            aria-hidden={menuOpen ? "false" : "true"}
            ref={ulRef}
            role={menuOpen && !isScreen1024Px ? "dialog" : undefined}
            tabIndex="-1" // Make the ul focusable
            aria-modal={menuOpen ? "true" : "false"}
            className={`pt-[24px] pb-[48px] lg:mx-[0px] max-h-[420px] flex flex-col items-center text-[1rem] overflow-auto lg:flex-row lg:py-[0px] lg:h-auto lg:overflow-visible lg:gap-[16px]`}
            variants={delayItem}
          >
            {isScreen1024Px && (
              <>
                <li aria-hidden="true" className="order-1">
                  <hr className="border-t-[2px] w-[30px] rotate-[90deg] border-white50" />
                </li>

                <li className="order-1">
                  <LanguageDropdown
                    locale={locale}
                    changeLanguage={changeLanguage}
                  />
                </li>
              </>
            )}

            {linksData.allLinks[0].links.map((mapItem, itemIndex) => (
              <motion.li
                variants={itemAnimation}
                key={itemIndex}
                className={`px-[24px] pt-[12px] lg:p-0 animation-underline-trigger w-full lg:w-fit group`}
              >
                <motion.div
                  tabIndex="-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    className={`${linkStyle} h-fit w-fit ${
                      !isScreen1024Px
                        ? "active:border-[white]  border-[2px]"
                        : ""
                    } ${
                      mapItem.href === activeSection
                        ? "-nav  lg:!bg-[transparent]"
                        : ""
                    }`}
                    to={mapItem.href} // Use 'to' instead of 'href'
                    smooth={true} // Enable smooth scrolling
                    duration={1200} // Set the duration of the scroll animation in milliseconds
                    offset={-73}
                    tabIndex={menuOpen ? "0" : "-1"}
                    onClick={() => handleButtonClick(mapItem.screenReaderHref)}
                  >
                    {t(`navText${itemIndex + 1}`)}
                  </ScrollLink>
                </motion.div>
              </motion.li>
            ))}

            {menuOpen && !isScreen1024Px && (
              <li
                className="close-button-sr pl-[24px] mt-[12px] w-full"
                aria-hidden={menuOpen && !isScreen1024Px ? "false" : "true"}
              >
                <button onClick={toggleMenu}>Fechar Modal</button>
              </li>
            )}
          </motion.ol>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
