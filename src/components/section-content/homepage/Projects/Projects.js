import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonClassName } from "@/components/utils/buttonStyle";
import { projectsData } from "./projectsData";
import Sparkle from "react-sparkle";

const Projects = ({ sizeHandleButtonHover, sizeHandleButtonLeave }) => {
  const [selectedSkill, setSelectedSkill] = useState(0);

  const [sparkleIsHovered, setsparkleIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setsparkleIsHovered(true);
    sizeHandleButtonHover();
  };

  const handleMouseLeave = () => {
    setsparkleIsHovered(false);
    sizeHandleButtonLeave();
  };

  const handleSkillClick = (mapItem) => {
    setSelectedSkill(mapItem);
  };

  const buttonClassNameRadio =
    "btn-animation relative overflow-hidden z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primaryBlue before:z-[-1] bg-[black] px-[16px] py-[8px] bg-[black] border-solid border-[2px] border-lightViolet font-bold rounded-[0px]";

  return (
    <div className="overflow-hidden bg-[url('/spike-pattern.png')] border-y-[6px] border-solid border-primaryBlue">
      <div
        className="w-full h-full py-[72px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <motion.div
          className="px-[24px] lg:px-[48px] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} // Adjust the value to your needs
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="font-bold text-[26px]">Highlighted Works</h2>

          <p className="mt-[12px] text-white85 max-w-[800px] mx-auto">
            While I've done various projects for learning only, this portfolio
            exclusively features my comprehensive projects—distinct from mere
            learning exercises. Representing my personal work in design and
            code, these projects not only display my style but also integrate
            many skills I have learned soo far.
          </p>
        </motion.div>

        <div className="mt-[48px]">
          <motion.div
            className="mx-auto w-fit px-[24px] lg:px-[48px] flex gap-[16px] mb-[32px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className={`${buttonClassNameRadio}  ${
                selectedSkill === 0
                  ? "border-primaryBlue bg-primaryBlue"
                  : "hover:brightness-90"
              }`}
              onClick={() => handleSkillClick(0)}
            >
              Doggy Daycare
            </button>

            <button
              className={`${buttonClassNameRadio} ${
                selectedSkill === 1
                  ? "border-primaryBlue bg-primaryBlue"
                  : "hover:brightness-90"
              }`}
              onClick={() => handleSkillClick(1)}
            >
              Portfolio
            </button>
          </motion.div>

          <motion.ul
            className=""
            style={{
              display: "flex",
              transform: `translateX(${-selectedSkill * 100}%)`,
              transition: "transform 0.5s",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {projectsData.map((mapItem, itemIndex) => (
              <li className="bg-[black]" style={{ flex: "0 0 100%" }}>
                <div className="px-[24px] lg:px-[48px] grid md:grid-cols-2 gap-[24px]">
                  <div className={`w-full h-fit relative`}>
                    <video autoPlay muted loop className="">
                      <source src={mapItem.videoSrcMp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="absolute center-absolute-element  flex justify-center items-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Image
                          aria-hidden={true}
                          src={`${
                            !sparkleIsHovered ? "/globe-dark.svg" : "/globe.svg"
                          }`}
                          className="w-[140px] sm:w-[180px] h-[80px]"
                          alt="Estrela Icone"
                          width={0}
                          height={0}
                          unoptimized
                        />
                      </motion.button>

                      {sparkleIsHovered && (
                        <Sparkle
                          count={10}
                          overflowPx={10}
                          fadeOutSpeed={6}
                          color="#475EDF"
                          maxSize={12}
                          minSize={12}
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid gap-[16px]">
                    <div className="grid gap-[12px]">
                      <h3 className="font-bold text-[20px] text-royalAmethyst strokeme">
                        {mapItem.name}
                      </h3>

                      <p className="text-[white]">
                        {mapItem.description}{" "}
                        <strong className="text-[white]">
                          Site Features Include:
                        </strong>{" "}
                        {mapItem.descriptionFeatures}
                      </p>
                    </div>

                    <div>
                      <ul className="flex gap-[12px] flex-wrap">
                        {mapItem.technologiesUsed.map((mapItem, itemIndex) => (
                          <li className="p-[8px] rounded-[4px] border-solid border-royalAmethyst bg-[white] border-[2px]">
                            <Image
                              aria-hidden={true}
                              className="w-[28px] h-[28px]"
                              src={mapItem.techImageSrc}
                              alt="Estrela Icone"
                              width={0}
                              height={0}
                              unoptimized
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex gap-[16px] mt-[16px]">
                        <button
                          className={`${buttonClassName} !py-[4px] !px-[32px] !w-fit flex gap-[8px] items-center !border-[white]`}
                        >
                          Case Study
                          <Image
                            aria-hidden={true}
                            className="w-[12px] h-[12px]"
                            src="/arrow.svg"
                            alt="Estrela Icone"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="px-[24px] lg:px-[48px] mt-[24px]">
                  <div>
                    <h4 className="text-[18px] font-bold mb-[12px]">
                      Special Features:
                    </h4>

                    <ul className="grid gap-[8px] grid-cols-3 h-fit w-fit">
                      {mapItem.siteMainFeatures.map((mapItem, itemIndex) => (
                        <li className="h-fit w-fit">
                          <h5>{mapItem.featureHeading}</h5>

                          <p className="text-white75 text-[14px]">
                            {mapItem.featureDescription}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-[16px] mt-[24px]">
                    <button
                      className={`${buttonClassName} !py-[4px] !px-[32px] !w-fit flex gap-[8px] items-center`}
                    >
                      Case Study
                      <Image
                        aria-hidden={true}
                        className="w-[12px] h-[12px]"
                        src="/arrow.svg"
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </button>

                    <button
                      className={`${buttonClassName} !py-[4px] !px-[32px] !w-fit before:!bg-primaryBlue !border-primaryBlue flex gap-[8px] items-center`}
                    >
                      View Online
                      <Image
                        aria-hidden={true}
                        className="w-[12px] h-[12px]"
                        src="/arrow.svg"
                        alt="Estrela Icone"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </button>
                  </div>
                </div> */}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
