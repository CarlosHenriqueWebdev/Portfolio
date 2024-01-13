import { useState } from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  borderRadius: 21,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  padding: 6,
  display: "flex",
  alignContent: "flex-start",
  alignItems: "start",
  justifyContent: "start",
};

const tabStyle = {
  height: 30,
  position: "relative",
  padding: "3px 15px",
  margin: 0,
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: 700,
  color: "#222",
  cursor: "pointer",
};

const tabs = [
  { name: "Red", color: "#f00" },
  { name: "Purple", color: "#b1f" },
  { name: "Orange", color: "#f90" },
  { name: "Green", color: "#0c0" },
];

const Home = () => {
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  return (
    <div className="flex gap-[8px] m-[80px]">
      {tabs.map(({ name, color }, itemIndex) => (
        <motion.div
          className="overflow-hidden px-[12px] py-[10px] bg-[black] border-solid border-[2px] border-white font-bold relative"
          key={itemIndex}
          transition={{ duration: 0.3 }}
          onTap={() => {
            setFormerColor(tabs[selected].color);
            setSelected(itemIndex);
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>{name}</span>
          {itemIndex === selected && (
            <motion.div
              className="w-full h-full top-0 left-0 absolute"
              layoutId="selected"
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
