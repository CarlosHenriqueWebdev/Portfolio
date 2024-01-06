import { motion } from "framer-motion";

const AnimatedContent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true}} // Adjust the value to your needs
      transition={{ duration: .5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
