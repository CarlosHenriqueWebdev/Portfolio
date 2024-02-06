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

const Home = ({ lang }) => {
  // Define default values for title and description
  let title = "Web Developer Portfolio | Explore My Projects and Skills";

  let htmlLangAndCanonical = "en";

  let description =
    "Check out my web development portfolio to explore a showcase of projects and skills. Learn about my expertise in front-end and back-end technologies.";

  // Override default values based on the language
  if (lang === "pt") {
    title =
      "Portfolio de Desenvolvedor Web | Explore Meus Projetos e Habilidades";

    htmlLangAndCanonical = "pt";

    description =
      "Confira meu portfólio de desenvolvimento web para explorar uma vitrine de projetos e habilidades. Conheça minha expertise em tecnologias front-end e back-end.";
  }

  const { isLanguageLoading } = useLanguageChange();

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
        <meta name="google" content="notranslate" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <link
          rel="canonical"
          href={`https://www.carloshenriquedev.com/${htmlLangAndCanonical}`}
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

      {/* <Head>
        <link rel="icon" href="/favicon.ico" />

       {lang && lang === "en" ? (
          <>
            <html lang="en" />
            <link rel="canonical" href="https://www.carloshenriquedev.com/en" />

            <title>
              Web Developer Portfolio | Explore My Projects and Skills
            </title>

            <meta
              name="description"
              content="Check out my web development portfolio to explore a showcase of projects and skills. Learn about my expertise in front-end and back-end technologies."
            />
          </>
        ) : lang && lang === "pt" ? (
          <>
            <html lang="pt" />
            <link rel="canonical" href="https://www.carloshenriquedev.com/pt" />

            <title>
              Portfolio de Desenvolvedor Web | Explore Meus Projetos e
              Habilidades
            </title>

            <meta
              name="description"
              content="Confira meu portfólio de desenvolvimento web para explorar uma vitrine de projetos e habilidades. Conheça minha expertise em tecnologias front-end e back-end."
            />
          </>
        ) : (
          <>
            <html lang="en" />
            <link rel="canonical" href="https://www.carloshenriquedev.com/en" />

            <title>
              Web Developer Portfolio | Explore My Projects and Skills
            </title>

            <meta
              name="description"
              content="Check out my web development portfolio to explore a showcase of projects and skills. Learn about my expertise in front-end and back-end technologies."
            />
          </>
        )} 

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
      </Head> */}

      {!isLanguageLoading ? (
        <>
          <NavBar activeSection={activeSection} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div id="homeSection">
              <Hero />
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

export async function getServerSideProps({ query }) {
  const { lang } = query;

  return {
    props: {
      lang,
    },
  };
}

export default Home;
