import { AnimatePresence, motion } from "framer-motion";

export const TextAnimationHeadingEnglish = ({ text }) => {
  const characters = text.split("");

  return (
    <AnimatePresence>
      {characters.map((char, index) => {
        const isStrong =
          (index >= 4 && index <= 9) || (index >= 13 && index <= 26);

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 10 }} // Move from below-right
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.1, delay: index * 0.03 }}
            viewport={{ once: true }}
            className={`inline-block ${
              isStrong ? " text-royalPurpleText" : ""
            }`}
          >
            {char === " " ? "\u00A0" : char === "," ? "," : char}
          </motion.span>
        );
      })}
    </AnimatePresence>
  );
};

export const TextAnimationHeadingPortuguese = ({ text }) => {
  const characters = text.split("");

  return (
    <AnimatePresence>
      {characters.map((char, index) => {
        const isStrong =
          (index >= 7 && index <= 12) || (index >= 18 && index <= 37);

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 10 }} // Move from below-right
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.1, delay: index * 0.03 }}
            viewport={{ once: true }}
            className={`inline-block ${
              isStrong ? " text-royalPurpleText" : ""
            }`}
          >
            {char === " " ? "\u00A0" : char === "," ? ",\u00A0" : char}
          </motion.span>
        );
      })}
    </AnimatePresence>
  );
};

export const TextAnimationAboutHeading = ({ text }) => {
  const characters = text.split("");

  return (
    <AnimatePresence>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 10, y: 20 }} // Move from below-right
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 10, y: 20 }}
          transition={{ duration: 0.1, delay: index * 0.075 }}
          viewport={{ once: true }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </AnimatePresence>
  );
};

export const TextAnimationContactHeading = ({ text }) => {
  const characters = text.split("");

  return (
    <AnimatePresence>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 10, y: 20 }} // Move from below-right
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 10, y: 20 }}
          transition={{ duration: 0.1, delay: index * 0.075 }}
          viewport={{ once: true }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </AnimatePresence>
  );
};
