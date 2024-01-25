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

  const motionUlRef = useRef(null);
  const isInView = useInView(motionUlRef, { once: true });

  const handleSkillClick = (mapItem) => {
    setSelectedSkill((prevSelectedSkill) =>
      prevSelectedSkill && prevSelectedSkill.id === mapItem.id ? null : mapItem
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
    <div className="overflow-hidden border-y-[6px] border-solid border-cornflowerBlue text-center md:text-start">
      <div
        className="grid gap-[32px] md:grid-cols-2 w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0)`,
        }}
      >
        <div className="max-w-[600px] mx-auto">
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

                  {selectedSkill.extraNote !== "" && (
                    <p>
                      <strong className="font-bold">{t("skillsText3")}</strong>{" "}
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
                role="button"
                aria-label={`${mapItem.name}, ${t("accessibilityText10")}`}
                variants={itemAnimation}
                key={mapItem.id}
                className={` cursor-pointer transition-tap-background flex gap-[8px] p-[16px] bg-[black] border-solid border-royalPurple border-[2px] items-center ${
                  selectedSkill && selectedSkill.id === mapItem.id
                    ? "bg-[white]"
                    : ""
                }`}
                onClick={() => {
                  handleSkillClick(mapItem);
                  handleButtonClick("skillsHeadingText");
                }}
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
