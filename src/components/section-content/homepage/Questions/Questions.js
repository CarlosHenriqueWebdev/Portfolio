import Image from "next/image";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();

  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (itemIndex) => {
    setOpenQuestions((previousOpenQuestions) =>
      previousOpenQuestions.includes(itemIndex)
        ? previousOpenQuestions.filter((previousId) => previousId !== itemIndex)
        : [...previousOpenQuestions, itemIndex]
    );
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
    <div className="overflow-hidden bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full pt-[72px] pb-[48px] px-[24px] lg:px-[96px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div>
          <h2 id="questionsHeadingText" className="font-bold text-[1.625rem]">
            {t("faqText1")}
          </h2>
        </div>

        <hr
          aria-hidden="true"
          className="border-cornflowerBlue my-[32px] border-t-[4px]"
        />

        <ul className="flex flex-col border-solid border-cornflowerBlue border-[3px] rounded-[12px] overflow-hidden">
          {t("questionsData", { returnObjects: true }).map(
            (mapItem, itemIndex, listArray) => (
              <li key={itemIndex}>
                <button
                  aria-expanded={openQuestions.includes(itemIndex)}
                  className={`bg-[black] text-[white] w-full text-left pl-[16px] pr-[16px] pt-[12px] pb-[12px] flex flex-row gap-[24px] items-center justify-between hover:text-white90 border-solid border-b-[3px] border-cornflowerBlue ${
                    openQuestions.includes(itemIndex) &&
                    "italic font-semibold border-b-[black]"
                  } ${itemIndex === listArray.length - 1 && "!border-b-[0px]"}
                `}
                  onClick={() => {
                    toggleQuestion(itemIndex);
                    handleButtonClick(`questionTextFocusSr${itemIndex}`);
                  }}
                >
                  {mapItem.question}
                  <Image
                    aria-hidden="true"
                    className={`w-[16px] xl:w-[18px] transition-all ${
                      openQuestions.includes(itemIndex) && "rotate-[180deg]"
                    }`}
                    src="/assets/dropdown-arrow-white.svg"
                    alt={t("altText4")}
                    width="0"
                    height="0"
                    unoptimized
                  />
                </button>

                <div
                  className={`transition-max-height max-h-0 overflow-hidden bg-[#314199] text-[white] ${
                    openQuestions.includes(itemIndex) ? "!max-h-[500px]" : ""
                  } `}
                  aria-hidden={!openQuestions.includes(itemIndex)}
                >
                  <p
                    id={`questionTextFocusSr${itemIndex}`}
                    className={`border-cornflowerBlue border-solid border-b-[3px] w-full text-left pl-[16px] pr-[16px] pt-[12px] pb-[12px] ${
                      itemIndex === 7 && "border-b-[0px]"
                    }`}
                  >
                    {mapItem.answer}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>

        <hr
          aria-hidden="true"
          className="border-cornflowerBlue my-[32px] border-t-[4px]"
        />

        <div aria-hidden="true" className="text-[1.25rem]">
          <p className="grid gap-[4px] md:flex">
            {t("faqText2")}{" "}
            <ScrollLink
              className="cursor-pointer font-bold text-skyBlueText  hover:underline"
              to={"contactSection"} // Use 'to' instead of 'href'
              smooth={true} // Enable smooth scrolling
              duration={500} // Set the duration of the scroll animation in milliseconds
              offset={-73}
            >
              {t("faqText3")}
            </ScrollLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
