import {
  buttonAnimationStyles,
  buttonClassName,
} from "@/components/utils/buttonStyle";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

const delayItem = {
  open: {
    transition: { staggerChildren: 0.14 },
  },
};

const itemAnimation = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },

  closed: {
    opacity: 0,
    x: 50,
  },
};

const Skills = ({ setElementHovered, updateCursorShape }) => {
  const { t } = useTranslation();

  const [selectedSkill, setSelectedSkill] = useState(null);

  const motionUlRef = useRef(null);
  const isInView = useInView(motionUlRef, { once: true });

  const handleSkillClick = (mapItem) => {
    setSelectedSkill((prevSelectedSkill) =>
      prevSelectedSkill && prevSelectedSkill.id === mapItem.id ? null : mapItem
    );
  };

  return (
    <div className="overflow-hidden border-y-[6px] border-solid border-primaryBlue text-center md:text-start">
      <div
        className="grid gap-[32px] md:grid-cols-2 w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0)`,
        }}
      >
        <div className="max-w-[600px] mx-auto">
          <div>
            <div>
              {!selectedSkill ? (
                <h2 className="text-[24px] font-bold">{t("skillsText1")}</h2>
              ) : (
                <h2 className="text-[white] text-[24px] font-bold strokeme">
                  {selectedSkill.name}
                </h2>
              )}
            </div>
          </div>

          <div className="mt-[16px]">
            <div className="mt-[16px]">
              {!selectedSkill ? (
                <p>
                  <Trans
                    i18nKey={t("skillsText2")}
                    components={{ bold: <strong /> }}
                  />
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
          </div>
        </div>

        <div>
          <motion.ul
            className="mx-auto flex flex-wrap gap-[16px] w-fit justify-center max-w-[500px]"
            variants={delayItem}
            initial="closed"
            animate={isInView && "open"}
            ref={motionUlRef}
          >
            {t("skillsData", { returnObjects: true }).map((mapItem) => (
              <motion.li
                variants={itemAnimation}
                key={mapItem.id}
                className={`rounded-[0%] cursor-pointer transition-tap-background flex gap-[8px] p-[16px] bg-[black] border-solid border-royalAmethyst border-[2px] items-center ${
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
