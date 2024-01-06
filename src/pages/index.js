import NavBar from "@/components/common/NavBar/NavBar";
import About from "@/components/section-content/homepage/About/About";
import Hero from "@/components/section-content/homepage/Hero/Hero";
import CustomCursor from "@/components/utils/CustomCursor";
import useCustomCursor from "@/components/hooks/useCustomCursor";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Skills from "@/components/section-content/homepage/Skills/Skills";
import { useState, useEffect } from "react";
import AnimatedContent from "./test";

const Home = () => {
  const {
    position,
    elementHovered,
    setElementHovered,
    updateCursorShape,
    dynamicSize,
    sizeHandleButtonHover,
    sizeHandleButtonLeave,
    sizeTransitionAnimation,
    navbarHover,
    navbarHandleButtonHover,
    navbarHandleButtonLeave,
  } = useCustomCursor();
  const [isScreen1024Px, setIsScreen1024Px] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsScreen1024Px(true);
      } else {
        setIsScreen1024Px(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("homeSection");

  function getActiveSection() {
    if (typeof window === "undefined") {
      return null; // Return null during server-side rendering
    }

    const sections = ["homeSection", "aboutSection", "skillsSection"];

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);

      if (!sectionElement) {
        continue; // Skip if the section element is not found
      }

      const { top, bottom } = sectionElement.getBoundingClientRect();
      const offset = 74; // Adjust this value based on your layout (e.g., the height of your sticky navbar)

      if (top - offset <= 0 && bottom - offset > 0) {
        return sectionId;
      }
    }

    return null; // No section is currently in view
  }

  // Function to update activeSection on scroll
  const handleScroll = () => {
    const newActiveSection = getActiveSection();
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]); // Add activeSection to dependency array to avoid potential issues

  return (
    <div className="bg-[black]">
      {isScreen1024Px !== null && isScreen1024Px !== false ? (
        <CustomCursor
          elementHovered={elementHovered}
          position={position}
          dynamicSize={dynamicSize}
          sizeTransitionAnimation={sizeTransitionAnimation}
          navbarHover={navbarHover}
        />
      ) : (
        <></>
      )}

      <NavBar
        navbarHandleButtonHover={navbarHandleButtonHover}
        navbarHandleButtonLeave={navbarHandleButtonLeave}
        setElementHovered={setElementHovered}
        updateCursorShape={updateCursorShape}
        activeSection={activeSection}
      />

      <AnimatedContent>
        <div id="homeSection">
          <Hero
            setElementHovered={setElementHovered}
            updateCursorShape={updateCursorShape}
            buttonClassName={buttonClassName}
            sizeHandleButtonHover={sizeHandleButtonHover}
            sizeHandleButtonLeave={sizeHandleButtonLeave}
          />
        </div>
      </AnimatedContent>

      <div id="aboutSection">
        <About
          setElementHovered={setElementHovered}
          updateCursorShape={updateCursorShape}
        />
      </div>

      <div id="skillsSection">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
