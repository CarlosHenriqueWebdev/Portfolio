import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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

const Skills = () => {
  const { t } = useTranslation();

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [switchedSkillsBoolean, setSwitchedSkillsBoolean] = useState(false);
  const [page, setPage] = useState(0);

  const motionUlRef = useRef(null);
  const isInView = useInView(motionUlRef, { once: true });

  const skillsPerPage = 15;
  const startIndex = page * skillsPerPage;
  const endIndex = startIndex + skillsPerPage;
  const totalSkills = t("skillsData", { returnObjects: true }).length;

  const handleSkillClick = (mapItem) => {
    setSelectedSkill((prevSelectedSkill) =>
      prevSelectedSkill && prevSelectedSkill.id === mapItem.id ? null : mapItem
    );
  };

  const handleButtonClick = () => {
    setSwitchedSkillsBoolean(
      (prevSwitchedSkillsBoolean) => !prevSwitchedSkillsBoolean
    );

    setPage((prevPage) =>
      prevPage === Math.floor(totalSkills / skillsPerPage) ? 0 : prevPage + 1
    );
  };

  return (
    <div className="overflow-hidden border-y-[6px] border-solid border-cornflowerBlue md:text-start">
      <div
        className="grid gap-[32px] md:grid-cols-2 w-full h-full py-[72px] px-[24px] lg:px-[48px] xl:max-w-[1280px] xl:mx-auto"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0)`,
        }}
      >
        <div className="md:max-w-[600px] mx-auto md:mx-0">
          <div>
            <div>
              <h2
                id="skillsHeadingText"
                className="text-[white] text-[1.5rem] font-bold "
              >
                {selectedSkill ? selectedSkill.name : t("skillsText1")}
              </h2>
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
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="gap-[24px] flex flex-wrap md:justify-center md:max-w-[500px]">
          <motion.ul
            className="flex flex-wrap gap-[16px] w-fit md:justify-center md:max-w-[500px]"
            variants={delayItem}
            initial="closed"
            animate={isInView && "open"}
            ref={motionUlRef}
          >
            {t("skillsData", { returnObjects: true })
              .slice(startIndex, endIndex)
              .map((mapItem) => (
                <motion.li
                  role="button"
                  aria-label={`${mapItem.name}, ${t("accessibilityText10")}`}
                  variants={itemAnimation}
                  key={mapItem.id}
                  className={`cursor-pointer transition-tap-background flex gap-[8px] p-[16px] bg-[black] border-solid border-royalPurple border-[2px] items-center ${
                    selectedSkill && selectedSkill.id === mapItem.id
                      ? "bg-[white]"
                      : ""
                  }`}
                  onClick={() => handleSkillClick(mapItem)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    aria-hidden={true}
                    className={`w-[44px] h-[44px]`}
                    src={mapItem.imageSrc}
                    alt={`${mapItem.name} Logo`}
                    width={0}
                    height={0}
                    unoptimized
                  />
                </motion.li>
              ))}
          </motion.ul>

          <motion.button
            className={`cursor-pointer transition-tap-background flex gap-[8px] p-[16px] bg-[black] border-solid border-royalPurple border-[2px] items-center ${
              switchedSkillsBoolean
                ? "bg-cornflowerBlueText !border-[black] text-[black] font-bold"
                : ""
            }`}
            onClick={handleButtonClick}
            variants={itemAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {switchedSkillsBoolean ? t("showLessButton") : t("showMoreButton")}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
