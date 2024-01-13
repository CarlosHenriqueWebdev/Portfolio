const SharedData = () => {
  return {
    allLinks: [
      {
        links: [
          {
            href: "homeSection", // Unique identifier for the home section
          },
          {
            href: "aboutSection", // Unique identifier for the about section
          },
          {
            href: "skillsSection",
          },
          {
            href: "servicesSection",
          },
          {
            href: "projectsSection",
          },
          {
            href: "resumeSection",
          },
          {
            href: "questionsSection",
          },
          {
            href: "contactSection",
          },
        ],
      },
      {
        title: "Informação / Extras",
        links: [
          {
            text: "Depoimentos",
            href: "/depoimentos",
          },
          {
            text: "Perguntas Frequentes",
            href: "/perguntas-frequentes",
          },
          {
            text: "Política de Privacidade",
            href: "/politica-de-privacidade",
          },
          {
            text: "Termos e Condições",
            href: "/termos-e-condicoes",
          },
          {
            text: "Mapa do Site",
            href: "/mapa-do-site",
          },
        ],
      },
    ],
  };
};

export default SharedData;
