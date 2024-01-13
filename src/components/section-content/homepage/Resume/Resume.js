import React, { useRef } from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="overflow-hidden border-b-[4px] border-solid border-[black] bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} // Adjust the value to your needs
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="font-bold text-[26px]">My Resume</h2>

          <p className="mt-[12px] text-white85 max-w-[800px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum blanditiis eius soluta non commodi. Rerum consequuntur molestiae veritatis deleniti. A natus nihil sequi nostrum totam minima enim eaque quia obcaecati!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
