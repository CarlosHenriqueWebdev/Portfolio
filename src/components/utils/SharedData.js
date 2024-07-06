const SharedData = () => {
  return {
    allLinks: [
      {
        links: [
          {
            href: "homeSection",
            screenReaderHref: "homeHeadingText",
          },
          {
            href: "aboutSection",
            screenReaderHref: "aboutHeadingText",
          },
          {
            href: "projectsSection",
            screenReaderHref: "projectsHeadingText",
          },
          {
            href: "resumeSection",
            screenReaderHref: "resumeHeadingText",
          },
          {
            href: "contactSection",
            screenReaderHref: "contactHeadingText",
          },
        ],
      },
    ],
  };
};

export default SharedData;
