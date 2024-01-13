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

const selectionStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
};

const tabs = [
  { name: "Doggy Daycare", color: "#475EDF" },
  { name: "Portfolio", color: "#475EDF" },
];

const Home = () => {
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  return (
    <div className="flex m-[80px]">
      {tabs.map(({ name, color }, i) => (
        <motion.div
          className="flex"
          key={i}
          onTap={() => {
            setFormerColor(tabs[selected].color);
            setSelected(i);
          }}
        >
          <div className={`overflow-hidd block px-[12px] py-[10px] bg-[black] border-solid border-[2px] border-white font-bold relative ${i === selected && "border-primaryBlue"}`}>
            <span className="relative z-20">{name}</span>

            {i === selected && (
              <motion.div
                className="w-full h-full top-0 left-0 absolute"
                layoutId="selected"
                animate={{ backgroundColor: color }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>

          <div className="pr-[12px] relative z-20 bg-[black]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
