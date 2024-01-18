// components/ScrollToTopButton.js

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and update the visibility state
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100); // Adjust the threshold as needed
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      className={`fixed bottom-[20px] right-[20px] opacity-0 grid gap-[8px] font-black w-fit items-center justify-center ${
        isVisible ? "opacity-[1] uppercase text-primaryBlue" : ""
      }`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-[12px] rounded-[100%] bg-primaryBlue w-fit mx-auto">
        <Image
          aria-hidden={true}
          className="w-[28px] h-[28px] rotate-[180deg]"
          src="/dropdown-arrow-white.svg"
          alt="Estrela Icone"
          width={0}
          height={0}
          unoptimized
        />
      </div>
      Back to Top
    </motion.button>
  );
};

export default ScrollToTopButton;
