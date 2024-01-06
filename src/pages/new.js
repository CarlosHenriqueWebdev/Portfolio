// components/SideMenu.js
import { motion } from "framer-motion";

const SideMenu = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* Your side menu content goes here */}
      <div style={{ width: "300px", height: "100vh", background: "blue" }}>
        Side Menu Content
      </div>
    </motion.div>
  );
};

export default SideMenu;
