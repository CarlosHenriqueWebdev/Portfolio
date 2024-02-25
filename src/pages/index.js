import NavBar from "@/components/common/NavBar/NavBar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SharedData from "@/components/utils/SharedData";
import Head from "next/head";
import Footer from "@/components/common/Footer/Footer";
import useLanguageChange from "@/hooks/useLanguageChange";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import dynamic from "next/dynamic";
import React from "react";
import { useTranslation } from "react-i18next";

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

const Home = ({ locale }) => {
  const { t } = useTranslation();

  const { isLanguageLoading, changeLanguage } = useLanguageChange();

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

  useEffect(() => {
    // Function to update activeSection on scroll
    const handleScroll = () => {
      const newActiveSection = getActiveSection();
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="bg-[black]">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>{t("homeTitle")}</title>

        <meta name="description" content={t("homeMetaDescription")} />

        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/${locale}`}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.carloshenriquedev.com/en"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.carloshenriquedev.com/en"
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href="https://www.carloshenriquedev.com/pt"
        />
      </Head>

      {!isLanguageLoading ? (
        <>
          <NavBar activeSection={activeSection} locale={locale} changeLanguage={changeLanguage} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div id="homeSection">
              <Hero locale={locale} />
            </div>
          </motion.div>

          <div id="aboutSection">
            <About />
          </div>

          <div id="skillsSection">
            <Skills />
          </div>

          <div id="servicesSection">
            <Services />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div id="projectsSection">
              <Projects />
            </div>
          </motion.div>

          <div id="resumeSection">
            <Resume />
          </div>

          <div id="questionsSection">
            <Questions />
          </div>

          <div
            className={`border-t-[6px] border-cornflowerBlue border-solid bg-cover bg-fixed  bg-[black] w-full bg-no-repeat bg-center bg-[url(/assets/divider-illustration.png)]`}
          >
            <div
              className="h-[50vh] uppercase w-full flex justify-center items-center text-[1.625rem] font-bold"
              style={{
                backgroundColor: `rgba(0, 0, 0, 0.7)`,
              }}
            ></div>
          </div>

          <div id="contactSection">
            <Contact />
          </div>

          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  return { props: { locale } };
}

export default Home;
