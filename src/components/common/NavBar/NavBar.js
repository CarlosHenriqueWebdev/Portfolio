import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale) => {
    const { pathname } = router;
    window.location.href = `${pathname}${newLocale}`;
  };

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
    <header className="text-[0.875rem]  relative z-[1]">
      <nav
        className="px-[24px] py-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex items-center justify-end"
        aria-label="Global"
      >
        <ScrollLink
          className="skip-to-content"
          to="main-content"
          tabIndex="0"
          onClick={() => handleButtonClick("main-content")}
          smooth={true}
          duration={500}
          offset={-73}
        >
          {t("accessibility_text1")}{" "}
        </ScrollLink>
        <h2 className="sr-only"> {t("accessibilityText1")}</h2>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-golden-yellow"
              aria-hidden="true"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex gap-[24px] items-center">
          <div className="flex gap-[24px] order-[1] items-center">
            <span className="text-white75 h-fit" aria-hidden={true}>
              |
            </span>

            <div className="relative">
              <button
                className="py-[6px] flex items-center gap-[4px] text-white75 font-bold"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="language-menu"
                aria-label="Select language"
              >
                <div className="flex items-center gap-[6px]">
                  <Image
                    aria-hidden={true}
                    src={`/assets/${t("currentLanguageFlag")}`}
                    alt={`${t("currentLanguage")} flag`}
                    width={14}
                    height={14}
                    intrinsic="true"
                    className="w-[14px] h-[14px]"
                    quality={100}
                  />
                  {t("currentLanguage")}
                </div>

                <Image
                  aria-hidden={true}
                  src="/assets/vector4.svg"
                  alt="down arrow"
                  width={10}
                  height={10}
                  intrinsic="true"
                  className="w-[10px] h-[10px]"
                  quality={100}
                />
              </button>
              {isOpen && (
                <div className="bg-color01 w-[150px] right-[0] font-bold text-white75 border-solid border-white75 border-[2px] absolute top-full z-10 mt-3 overflow-hidden rounded-[4px] ">
                  <ul>
                    {t("languages", {
                      returnObjects: true,
                    })?.map((item, index) => (
                      <li key={index} role="none">
                        <a
                          className="flex items-center gap-[6px] hover:bg-darkCharcoal px-[24px] py-[12px] w-full cursor-pointer"
                          onClick={() => changeLanguage(item.DO_NOT_CHANGE)}
                          tabIndex="0"
                        >
                          <Image
                            aria-hidden={true}
                            src={`/assets/${item.flag}`}
                            alt={`${item.language} flag`}
                            width={14}
                            height={14}
                            intrinsic="true"
                            className="w-[14px] h-[14px]"
                            quality={100}
                          />
                          {item.language}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <ul className="flex gap-[24px]">
            {t("navLinks", { returnObjects: true })?.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  className="py-[6px] font-semibold hover:brightness-90 cursor-pointer"
                  to={item.DO_NOT_CHANGE}
                  tabIndex="0"
                  onClick={() => handleButtonClick(item.DO_NOT_CHANGE)}
                  smooth={true}
                  duration={500}
                  offset={-73}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </PopoverGroup>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed bg-color01" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[50] max-w-[280px] overflow-y-auto  px-[24px] py-[24px] w-full sm:max-w-sm bg-color01">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-[32px]">
            <div className="divide-y divide-gray-500/10">
              <div className="py-[32px] flex flex-col gap-[16px]">
                <Disclosure as="div" className="flex flex-col gap-[16px]">
                  {() => (
                    <>
                      <DisclosureButton className="border-[2px] border-solid border-white75 items-center justify-between w-full text-start rounded-[4px] px-[16px] py-[12px] hover:brightness-90 bg-color03 font-semibold flex">
                        <div className="flex items-center gap-[6px]">
                          <Image
                            aria-hidden={true}
                            src={`/assets/${t("currentLanguageFlag")}`}
                            alt={`${t("currentLanguage")} flag`}
                            width={14}
                            height={14}
                            intrinsic="true"
                            className="w-[14px] h-[14px]"
                            quality={100}
                          />

                          {t("currentLanguage")}
                        </div>

                        <Image
                          aria-hidden={true}
                          src="/assets/vector4.svg"
                          alt="arrow"
                          width={12}
                          height={12}
                          intrinsic="true"
                          className="w-[12px] h-[12px]"
                          quality={100}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="flex flex-col gap-[16px]">
                        {t("languages", {
                          returnObjects: true,
                        })?.map((item, index) => (
                          <a
                            key={index}
                            className="bg-color03 border-solid border-[2px] border-white75 items-center gap-[6px] w-full text-start rounded-[2px] px-[16px] py-[12px] hover:brightness-90 font-semibold cursor-pointer flex"
                            onClick={() => changeLanguage(item.DO_NOT_CHANGE)}
                          >
                            <Image
                              aria-hidden={true}
                              src={`/assets/${item.flag}`}
                              alt={`${item.language} flag`}
                              width={14}
                              height={14}
                              intrinsic="true"
                              className="w-[14px] h-[14px]"
                              quality={100}
                            />
                            {item.language}
                          </a>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <ul className="flex flex-col gap-[16px]">
                  {t("navLinks", { returnObjects: true })?.map(
                    (item, index) => (
                      <li key={index}>
                        <ScrollLink
                          className="block rounded-[4px] px-[16px] py-[12px] bg-color03 hover:brightness-90 font-semibold cursor-pointer"
                          to={item.DO_NOT_CHANGE}
                          tabIndex="0"
                          onClick={() => handleButtonClick(item.DO_NOT_CHANGE)}
                          smooth={true}
                          duration={500}
                          offset={-73}
                        >
                          {item.text}
                        </ScrollLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
