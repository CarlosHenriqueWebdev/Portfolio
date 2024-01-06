import { useLanguage } from "@/components/context/LanguageContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LanguageDropdown = () => {
  const options = ["en", "pt"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenHover, setIsDropdownOpenHover] = useState(false);

  const dropdownRef = useRef();
  const { language, switchLanguage } = useLanguage();

  const handleOptionChange = (selected) => {
    setIsDropdownOpenHover(false);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsDropdownOpenHover(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSwitch = (newLanguage) => {
    switchLanguage(newLanguage);
  };

  const linkStyle =
    "block w-fit p-[12px] lg:text-[white] lg:hover:text-[white]";

  return (
    <li
      ref={dropdownRef}
      className={`${linkStyle} text-[16px] block !w-fit relative`}
      onMouseEnter={() => setIsDropdownOpenHover(true)}
      onMouseLeave={() => setIsDropdownOpenHover(false)}
    >
      <button
        className="flex gap-[8px] items-center text-[white]"
        onClick={toggleDropdown}
      >
        <Image
          aria-hidden={true}
          className="w-[20px]"
          src={`${
            language === "en"
              ? "/american-flag-real.svg"
              : "/brazil-flag-real.svg"
          }`}
          alt="Mini Bandeira da America"
          width={0}
          height={0}
          unoptimized
        />
        {language === "en" ? "English" : "Portugues"}
        <Image
          aria-hidden={true}
          className="w-[12px]"
          src="/dropdown-arrow.svg"
          alt="Flecha apontando para baixo"
          width={0}
          height={0}
          unoptimized
        />
      </button>

      <div
        className={`hidden absolute overflow-hidden pt-[24px] !w-max right-[-8px] ${
          isDropdownOpen || isDropdownOpenHover ? "!block" : ""
        }`}
      >
        <div className="relative after:bg-[url(/triangle.svg)] after:z-10 after:content-[''] after:absolute after:w-[73px] after:h-[20px] after:bg-no-repeat after:bg-contain  after:block after:right-[-37px] after:top-[-16px]">
          <ul className="w-fit relative bg-[black] border-solid border-lightLavender border-[2px]  z-20">
            {options.map((option) => (
              <li
                className={`w-full bg-midnightBlack px-[12px] py-[8px] cursor-pointer flex gap-[8px] items-center hover:bg-[black] hover:text-[white] ${
                  language === "en" && option === "en"
                    ? "bg-primaryBlue !text-[white]"
                    : "text-white75"
                } ${
                  language === "pt" && option === "pt"
                    ? "bg-primaryBlue !text-[white]"
                    : "text-white75"
                }`}
                onClick={() => {
                  handleOptionChange(option);
                  handleSwitch(option);
                }}
                key={option}
              >
                <div>
                  <Image
                    aria-hidden={true}
                    className="w-[18px]"
                    src={`${
                      option === "en"
                        ? "/american-flag-real.svg"
                        : "/brazil-flag-real.svg"
                    }`}
                    alt="Mini Bandeira da America"
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
          </ul>
        </div>
      </div>
    </li>
  );
};

export default LanguageDropdown;
