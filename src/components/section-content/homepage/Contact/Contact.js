import React, { useRef } from "react";
import { contactInfo } from "../About/contactInfo";
import Image from "next/image";
import Form from "./Form";
import {
  TextAnimationContactHeading,
  TextAnimationHeadingPortuguese,
} from "@/components/utils/textAnimations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { buttonClassName } from "@/components/utils/buttonStyle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { animateScroll } from "react-scroll";

const Contact = () => {
  const [didFormSubmit, setDidFormSubmit] = useState(false);

  const handleButtonClick = () => {
    setDidFormSubmit(false);

    const elementAndOffset =
      document.getElementById("contactSection").getBoundingClientRect().top +
      window.scrollY +
      -73;

    window.scrollTo({ top: elementAndOffset, behavior: "smooth" });
  };

  const animatedTextEnglish = "Ready to Collaborate?";

  return (
    <div className="border-y-[6px] border-solid border-primaryBlue overflow-hidden bg-[url('/gradient-grid.jpg')] ">
      {!didFormSubmit ? (
        <div>
          <div
            className="w-full h-full pt-[72px] pb-[48px] px-[24px] lg:px-[96px]"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.92)`,
            }}
          >
            <div>
              <div className="">
                <div className="h-fit">
                  <motion.div className="text-[24px] font-bold strokeme text-royalAmethyst">
                    <TextAnimationContactHeading text={animatedTextEnglish} />
                  </motion.div>

                  <h2 className="text-[26px] font-bold mt-[8px]">Contact Me</h2>

                  <p className="mt-[12px]">
                    Let's connect and explore your ideas. If you have a project
                    in mind, are interested in collaboration, or have any
                    questions,
                    <br />
                    then feel free to reach out. I'm here to help and eager to
                    hear from you.
                  </p>
                </div>

                <ul className="flex flex-wrap flex-col sm:flex-row gap-[12px] h-fit w-fit mt-[16px]">
                  {contactInfo
                    .filter((mapItem) => mapItem.isForContact)
                    .map((mapItem, itemIndex) => (
                      <li className="w-fit flex gap-[8px] items-start">
                        <div className="w-[20px] h-[20px] ">
                          <Image
                            aria-hidden={true}
                            className={`w-full h-full`}
                            src={mapItem.whiteImageSrc}
                            alt="Estrela Icone"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>

                        {mapItem.url.startsWith("mailto:") ? (
                          <a
                            className="text-[14px] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </a>
                        ) : mapItem.url.startsWith("https://wa.me/") ? (
                          <a
                            className="text-[14px] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </a>
                        ) : (
                          <Link
                            className="text-[14px] font-semibold underline"
                            href={mapItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mapItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mt-[32px]">
                <Form
                  didFormSubmit={didFormSubmit}
                  setDidFormSubmit={setDidFormSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[black] w-full h-full grid gap-[24px] py-[72px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              aria-hidden={true}
              className="w-full h-full max-w-[280px] mx-auto object-cover"
              src="/success-illustration.svg"
              alt="Estrela Icone"
              width={0}
              height={0}
              unoptimized
            />
          </motion.div>

          <h2 className="text-[26px] text-center font-bold text-lightViolet">
            Message Sent Successfully!
          </h2>

          <button
            className={`${buttonClassName} w-fit mx-auto !border-primaryBlue before:!bg-primaryBlue flex gap-[8px] items-center`}
            onClick={handleButtonClick}
          >
            <Image
              aria-hidden={true}
              className="w-[16px] rotate-[180deg]"
              src="/arrow.svg"
              alt="Avião Icone"
              width={0}
              height={0}
              unoptimized
            />
            Return to Contact Form
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
