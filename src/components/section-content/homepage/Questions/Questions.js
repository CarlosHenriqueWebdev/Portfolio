import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { questionsData } from "./questionsData";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Questions = () => {
  // State to manage visibility of all answers
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (itemIndex) => {
    setOpenQuestions((previousOpenQuestions) =>
      previousOpenQuestions.includes(itemIndex)
        ? previousOpenQuestions.filter((previousId) => previousId !== itemIndex)
        : [...previousOpenQuestions, itemIndex]
    );
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
          <h2 className="font-bold text-[26px]">Frequently Asked Questions</h2>
        </div>

        <hr
          aria-hidden="true"
          className="border-primaryBlue my-[32px] border-t-[4px]"
        />

        <ul className="flex flex-col border-solid border-primaryBlue border-[3px] rounded-[12px] overflow-hidden">
          {questionsData.map((mapItem, itemIndex) => (
            <li>
              <button
                aria-expanded={openQuestions.includes(itemIndex)}
                className={`bg-[black] text-[white] w-full text-left pl-[16px] pr-[16px] pt-[12px] pb-[12px] flex flex-row gap-[24px] items-center justify-between hover:text-white90 border-solid border-b-[3px] border-primaryBlue ${
                  openQuestions.includes(itemIndex) &&
                  "italic font-semibold border-b-[black]"
                } ${itemIndex === 7 && "border-b-[0px]"}
                `}
                onClick={() => toggleQuestion(itemIndex)}
              >
                {mapItem.question}
                <Image
                  aria-hidden="true"
                  className={`w-[16px] xl:w-[18px] transition-all ${
                    openQuestions.includes(itemIndex) && "rotate-[180deg]"
                  }`}
                  src="/dropdown-arrow-white.svg"
                  alt="Icone Menos"
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
                  className={`border-primaryBlue border-solid border-b-[3px] w-full text-left pl-[16px] pr-[16px] pt-[12px] pb-[12px] ${
                    itemIndex === 7 && "border-b-[0px]"
                  }`}
                >
                  {mapItem.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <hr
          aria-hidden="true"
          className="border-primaryBlue my-[32px] border-t-[4px]"
        />

        <div className="text-[20px]">
          <p className="grid gap-[4px] md:flex">
            Have any questions that haven't been answered here?{" "}
            <ScrollLink
              className="cursor-pointer font-bold text-lightViolet strokeme hover:underline"
              to={"contactSection"} // Use 'to' instead of 'href'
              smooth={true} // Enable smooth scrolling
              duration={500} // Set the duration of the scroll animation in milliseconds
              offset={-73}
            >
              Feel free to contact me below
            </ScrollLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
