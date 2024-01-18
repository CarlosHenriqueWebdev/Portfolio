import NavBar from "@/components/common/NavBar/NavBar";
import CustomCursor from "@/components/utils/CustomCursor";
import useCustomCursor from "@/hooks/useCustomCursor";
import { buttonClassName } from "@/components/utils/buttonStyle";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SharedData from "@/components/utils/SharedData";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Footer from "@/components/common/Footer/Footer";
import useLanguageChange from "@/hooks/useLanguageChange";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import dynamic from "next/dynamic";

const blackLoadingScreen = () => <div className="bg-[black] !h-[100vh]"></div>;

const Hero = dynamic(
  () => import("@/components/section-content/homepage/Hero/Hero"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const About = dynamic(
  () => import("@/components/section-content/homepage/About/About"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Skills = dynamic(
  () => import("@/components/section-content/homepage/Skills/Skills"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Services = dynamic(
  () => import("@/components/section-content/homepage/Services/Services"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Projects = dynamic(
  () => import("@/components/section-content/homepage/Projects/Projects"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Resume = dynamic(
  () => import("@/components/section-content/homepage/Resume/Resume"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Questions = dynamic(
  () => import("@/components/section-content/homepage/Questions/Questions"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

const Contact = dynamic(
  () => import("@/components/section-content/homepage/Contact/Contact"),
  {
    loading: blackLoadingScreen,
    ssr: false,
  }
);

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
    borderRadiusShape,
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

    const linksData = SharedData();

    const sections = linksData.allLinks[0].links.map((link) => link.href);

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
  }, [activeSection]);

  const { changeLanguage, isLanguageLoading } = useLanguageChange();

  return (
    <div className="bg-[black]">
      {!isLanguageLoading ? (
        <>
          <Head>
            <title>Welcome To My Portfolio [English]</title>

            <meta name="description" content="" />

            {/* <link
          rel="alternate"
          hreflang={language}
          href={`https://www.yourwebsite.com/${language}/page`}
        /> */}
          </Head>

          {isScreen1024Px !== null && isScreen1024Px !== false && (
            <CustomCursor
              elementHovered={elementHovered}
              position={position}
              dynamicSize={dynamicSize}
              sizeTransitionAnimation={sizeTransitionAnimation}
              navbarHover={navbarHover}
              borderRadiusShape={borderRadiusShape}
            />
          )}

          <NavBar
            navbarHandleButtonHover={navbarHandleButtonHover}
            navbarHandleButtonLeave={navbarHandleButtonLeave}
            setElementHovered={setElementHovered}
            updateCursorShape={updateCursorShape}
            activeSection={activeSection}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div id="homeSection">
              <Hero
                setElementHovered={setElementHovered}
                updateCursorShape={updateCursorShape}
                buttonClassName={buttonClassName}
                sizeHandleButtonHover={sizeHandleButtonHover}
                sizeHandleButtonLeave={sizeHandleButtonLeave}
              />
            </div>
          </motion.div>

          <div id="aboutSection">
            <About
              setElementHovered={setElementHovered}
              updateCursorShape={updateCursorShape}
            />
          </div>

          <div id="skillsSection">
            <Skills
              setElementHovered={setElementHovered}
              updateCursorShape={updateCursorShape}
            />
          </div>

          <div id="servicesSection">
            <Services
              sizeHandleButtonHover={sizeHandleButtonHover}
              sizeHandleButtonLeave={sizeHandleButtonLeave}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div id="projectsSection">
              <Projects
                sizeHandleButtonHover={sizeHandleButtonHover}
                sizeHandleButtonLeave={sizeHandleButtonLeave}
                setElementHovered={setElementHovered}
                updateCursorShape={updateCursorShape}
              />
            </div>
          </motion.div>

          <div id="resumeSection">
            <Resume
              setElementHovered={setElementHovered}
              updateCursorShape={updateCursorShape}
            />
          </div>

          <div
            id="no-cursor"
            className="relative z-[5500]"
            onMouseEnter={navbarHandleButtonHover}
            onMouseLeave={navbarHandleButtonLeave}
          >
            <div id="questionsSection">
              <Questions />
            </div>

            <div id="contactSection">
              <Contact />
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Home;
