import React, { useRef } from "react";
import { motion } from "framer-motion";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Image from "next/image";
import Link from "next/link";

const Resume = ({ setElementHovered, updateCursorShape }) => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/download/resume-pdf";
    link.download = "/about-illustration.png";
    link.click();
  };

  return (
    <div className="overflow-hidden border-b-[6px] border-solid border-primaryBlue bg-[url('/space-bg.jpg')] bg-fixed bg-no-repeat bg-cover sm:text-center">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.8)`,
        }}
      >
        <div className="bg-[black] w-fit mx-auto relative sm:after:bg-[url(/resume.svg)] after:z-20 after:content-[''] after:absolute after:w-[60px] after:h-[120px] after:bg-no-repeat after:bg-contain after:mt-[8px] after:top-[-31px] after:left-[-33px] after:block">
          <div className="relative p-[24px] md:p-[48px] rounded-[12px] overflow-hidden border-solid border-primaryBlue border-[6px]">
            <div className="relative z-50">
              <div>
                <h2 className="font-bold text-[26px]">
                  Web Developer Resume: Skills and Achievements
                </h2>

                <h3 className="font-bold text-[22px] strokeme text-primaryBlue mt-[12px]">
                  View on Website / Download CV.
                </h3>
              </div>

              <div className=" mt-[24px] gap-[16px] grid md:flex items-center sm:max-w-[400px] mx-auto">
                <Link
                  href={"/resume"}
                  className={`${buttonClassName} rounded-[4%] w-full justify-center flex gap-[8px] items-center`}
                  onMouseEnter={(e) => updateCursorShape(e.currentTarget)}
                  onMouseLeave={() => setElementHovered(null)}
                >
                  View On Website
                  <Image
                    aria-hidden={true}
                    className="w-[12px] h-[12px]"
                    src="/arrow.svg"
                    alt="Estrela Icone"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>

                <button
                  className={`${buttonClassName} rounded-[4%] w-full justify-center !border-primaryBlue before:!bg-primaryBlue flex gap-[8px] items-center`}
                  onMouseEnter={(e) =>
                    updateCursorShape(e.currentTarget, "primaryBlue")
                  }
                  onMouseLeave={() => setElementHovered(null)}
                  onClick={handleDownloadClick}
                >
                  Download CV
                  <Image
                    aria-hidden={true}
                    className="w-[12px] h-[12px]"
                    src="/download.svg"
                    alt="Estrela Icone"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </button>
              </div>
            </div>

            <div id="container-stars">
              <div id="stars"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
