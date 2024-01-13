import {
  buttonAnimationStyles,
  buttonClassName,
} from "@/components/utils/buttonStyle";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "./skillsData";

const Skills = ({ setElementHovered, updateCursorShape }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (mapItem) => {
    setSelectedSkill((prevSelectedSkill) =>
      prevSelectedSkill && prevSelectedSkill.id === mapItem.id ? null : mapItem
    );
  };

  return (
    <div className="overflow-hidden border-y-[6px] border-solid border-primaryBlue text-center md:text-start bg-[url('/spike-pattern.png')]">
      <div
        className="grid gap-[32px] md:grid-cols-2 w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div className="max-w-[600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div>
              {!selectedSkill ? (
                <h2 className="text-[24px] font-bold">Web Skills Showcase</h2>
              ) : (
                <h2 className="text-[white] text-[24px] font-bold strokeme">
                  {selectedSkill.name}
                </h2>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-[16px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="mt-[16px]">
              {!selectedSkill ? (
                <p>
                  Discover my current skills for{" "}
                  <strong className="strokeme text-royalAmethyst">
                    {" "}
                    web development
                  </strong>
                  . I believe I can do anything that other people can with all
                  the skills presented here. While I don't know everything, I'm
                  always learning and improving so I can deliver a better
                  experience to all. <strong className="text-white75">
                    |
                  </strong>{" "}
                  <strong className="text-primaryBlue strokeme">
                    *Click on a card to reveal more information about each
                    skill.
                  </strong>
                </p>
              ) : (
                <div className="grid gap-[12px]">
                  <p className="text-[white]">{selectedSkill.description}</p>

                  {selectedSkill.extraNote !== "" && (
                    <p>
                      <strong className="font-bold">Extra Note:</strong>{" "}
                      {selectedSkill.extraNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.ul
            className="mx-auto flex flex-wrap gap-[16px] w-fit justify-center max-w-[500px]"
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
          >
            {skillsData.map((mapItem) => (
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // Adjust the value to your needs
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={mapItem.id}
                className={`rounded-[0px] transition-tap-background flex gap-[8px] p-[16px] bg-[black] border-solid border-royalAmethyst border-[2px] items-center ${
                  selectedSkill && selectedSkill.id === mapItem.id
                    ? "bg-[white]"
                    : ""
                }`}
                onClick={() => handleSkillClick(mapItem)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  // Capture e.currentTarget in a closure
                  const element = e.currentTarget;

                  setTimeout(() => {
                    if (element) {
                      updateCursorShape(element);
                    }
                  }, 30);
                }}
                onMouseLeave={() => {
                  setElementHovered(null);
                }}
              >
                <Image
                  aria-hidden={true}
                  className={`w-[44px] h-[44px]`}
                  src={mapItem.imageSrc}
                  alt={`${mapItem.name} Logo`}
                  width={0}
                  height={0}
                  unoptimize
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
