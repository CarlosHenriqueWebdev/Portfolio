export const projectsData = [
  {
    slug: "doggy-daycare",
    name: "Doggy Daycae",
    description:
      "A project about a fictional Doggy Daycare. Although the Name isn't very creative, the Site was made only with the goal of self-improvement. It served as a platform to mainly enhance my design skills, and utilize a popular CMS tool such as Strapi and WordPress, as I'm a quite a fan of the Idea of what a CMS can do. The project also aimed at refining my coding proficiency in Next.js, implementing accessibility features, and a few more.",
    descriptionFeatures:
      "Strapi CMS, Interactive Map, Automatic Email, Accessibility Integration, Loading Screen & Skeleton Loading.",

    technologiesUsed: [
      {
        name: "Next.js",
        techImageSrc: "/assets/nextjs-logo.svg",
        blackTechImageSrc: "/assets/black-logos/nextjs-logo.svg",
        reasonWhy:
          "Next.js was chosen for its efficiency in building React applications and it's default dynamic routes & config, allowing the Project to progress faster without needing too many custom configurations like custom Routes.",
      },
      {
        name: "Tailwind CSS",
        techImageSrc: "/assets/tailwind-logo.svg",
        blackTechImageSrc: "/assets/black-logos/tailwind-logo.svg",
        reasonWhy:
          "Tailwind CSS was selected to streamline the styling process with its utility-first approach, ensuring a clean and maintainable codebase. It made styling the website to be extremly fast. I honestly can't stress enough about how useful it was.",
      },
      {
        name: "Strapi",
        techImageSrc: "/assets/strapi-logo.svg",
        blackTechImageSrc: "/assets/black-logos/strapi-logo.svg",
        reasonWhy:
          "Strapi served as the headless CMS to manage content, providing flexibility and ease of use, allowing for efficient content updates. Although, I wouldn't reccommend it too much, as at least for me, I felt like quite a bit of features were lacking.",
      },
      {
        name: "Figma",
        techImageSrc: "/assets/figma-logo.svg",
        blackTechImageSrc: "/assets/black-logos/figma-logo.svg",
        reasonWhy:
          "Figma was the main design tool, it's plugins and features helped a lot, ensuring a cohesive and visually appealing user interface.",
      },
      {
        name: "CSS",
        techImageSrc: "/assets/css-logo.svg",
        blackTechImageSrc: "/assets/black-logos/css-logo.svg",
        reasonWhy:
          "While Tailwind CSS was the primary styling tool, custom CSS was utilized for specific design elements, providing a better visual experience.",
      },
    ],

    challenges: [
      {
        challengeTitle: "Reservation Form Enhancement",
        challengeDescription:
          "Creating the reservation form had its challenges. While the main functions worked well—sending data to Strapi and triggering email notifications—the details of form validation and user experience needed improvement. Ensuring accessibility is uncertain without real users for testing, and as a learning project, I didn't want to inconvenience users solely for testing and learning purposes.",
        solutionText:
          "To address these challenges, I refined the form's visual cues for better feedback and extensively tested it with NVDA Screen Reader. I also consulted online guides on form accessibility. However, determining the form's success remains challenging without real-world user interaction. Continuous improvement is completely possible and essential if the website was gonna be accessible to the public as a non-fictional project.",
      },
      {
        challengeTitle: "Strapi Content Management",
        challengeDescription:
          "Working with Strapi for content management was straightforward, but certain limitations posed challenges. Strapi lacked features like adding descriptions or placeholders to custom fields, making it challenging for admins to understand their functions. Customizing the Strapi interface was restricted, resulting in some field pages appearing disorganized. Issues with JSON fields could lead to content display problems if the Admin write anything in the wrong way on it, as there were no restrictions about what you can type. The absence of user feedback made it difficult to pinpoint improvements, especially when Strapi provided limited flexibility for admin convenience.",
        solutionText:
          "To address these challenges, I created tutorial videos showing each field's functionality. You can find the project on my GitHub repository, along with videos on setup, image scaling for space-saving, backups, and deployment. If you are testing it and you have any questions or need clarification, feel free to reach out.",
      },
    ],

    siteMainFeatures: [
      {
        featureHeading: "Strapi Headless CMS Integration:",
        featureDescription:
          "Easily update Texts, Images, Videos, Job Posts, and Services.",
      },
      {
        featureHeading: "Interactive Leaflet Map:",
        featureDescription:
          "Enables users to locate each facility efficiently.",
      },
      {
        featureHeading: "Accessibility Integration:",
        featureDescription:
          "Screen Reader-friendly design, including the Interactive Map and Contact/Reservation Form.",
      },
      {
        featureHeading: "Graphic Details for a Vibrant Experience:",
        featureDescription:
          "Number Counter, Confetti, Hover Effects on Images, and subtle animations for enhanced design.",
      },
      {
        featureHeading: "Automatic Email Notifications:",
        featureDescription:
          "Sent to Strapi Admin and User upon successful form completion.",
      },
      {
        featureHeading: "HTML Animation Loading Screen:",
        featureDescription:
          "Smooth loading animation while fetching data from Strapi.",
      },
      {
        featureHeading: "Custom Design Elements:",
        featureDescription:
          "Self-made Logo, Dog-Themed Pattern, and a blend of Free Vectors created on Figma.",
      },
      {
        featureHeading: "Custom Video Thumbnail:",
        featureDescription:
          "Custom thumbnail for a nice touch in the Open Positions Page.",
      },
      {
        featureHeading: "Images Interactions:",
        featureDescription:
          "Click non-interactive images to open a modal displaying all of the Page Images, Ken Burns Effect on Open Positions Page and Infinite Image Carousel working as a Gallery on each Individual Service Page.",
      },
    ],
    achievementsList: [
      {
        achievementHeading: "Strapi Headless CMS Integration:",
        achievementDescription:
          "Successfully integrated Strapi as a headless CMS, enabling easy updates for Texts, Images, Videos, Job Posts, and Services.",
      },
      {
        achievementHeading: "Interactive Leaflet Map:",
        achievementDescription:
          "Implemented an interactive Leaflet map, allowing users to efficiently locate each facility.",
      },
      {
        achievementHeading: "Accessibility Integration:",
        achievementDescription:
          "Designed a Screen Reader-friendly interface, including the Interactive Map and Contact/Reservation Form.",
      },
      {
        achievementHeading: "Graphic Details for a Vibrant Experience:",
        achievementDescription:
          "Added engaging elements like Number Counter, Confetti, Hover Effects on Images, and subtle animations for enhanced design.",
      },
      {
        achievementHeading: "Automatic Email Notifications:",
        achievementDescription:
          "Established automatic email notifications, sent to both Strapi Admin and Users upon successful form completion.",
      },
      {
        achievementHeading: "HTML Animation Loading Screen:",
        achievementDescription:
          "Implemented a smooth loading animation while fetching data from Strapi.",
      },
      {
        achievementHeading: "Custom Design Elements:",
        achievementDescription:
          "Created unique design elements, including a self-made logo, dog-themed pattern, and a blend of free vectors using Figma.",
      },
      {
        achievementHeading: "Custom Video Thumbnail:",
        achievementDescription:
          "Crafted a custom thumbnail for a visually appealing touch on the Open Positions Page.",
      },
      {
        achievementHeading: "Images Interactions:",
        achievementDescription:
          "Implemented interactive features such as clicking non-interactive images to open a modal, Ken Burns Effect on the Open Positions Page, and an Infinite Image Carousel functioning as a gallery on each Individual Service Page.",
      },
    ],
    thumbnail: "/projects/doggy-thumbnail.png",
    caseStudyUrl: "",
    liveWebsiteUrl: "",
  },
  {
    slug: "day",
    name: "Doggy ",
    description:
      "A project about a fictional Doggy Daycare. Although the Name isn't very creative, the Site was made only with the goal of self-improvement. It served as a platform to mainly enhance my design skills, and utilize a popular CMS tool such as Strapi and WordPress, as I'm a quite a fan of the Idea of what a CMS can do. The project also aimed at refining my coding proficiency in Next.js, implementing accessibility features, and a few more.",
    descriptionFeatures:
      "Strapi CMS, Interactive Map, Automatic Email, Accessibility Integration, Loading Screen & Skeleton Loading.",

    technologiesUsed: [
      {
        name: "Next.js",
        techImageSrc: "/assets/nextjs-logo.svg",
        blackTechImageSrc: "/assets/black-logos/nextjs-logo.svg",
        reasonWhy:
          "Next.js was chosen for its efficiency in building React applications and it's default dynamic routes & config, allowing the Project to progress faster without needing too many custom configurations like custom Routes.",
      },
      {
        name: "Tailwind CSS",
        techImageSrc: "/assets/tailwind-logo.svg",
        blackTechImageSrc: "/assets/black-logos/tailwind-logo.svg",
        reasonWhy:
          "Tailwind CSS was selected to streamline the styling process with its utility-first approach, ensuring a clean and maintainable codebase. It made styling the website to be extremly fast. I honestly can't stress enough about how useful it was.",
      },
      {
        name: "Strapi",
        techImageSrc: "/assets/strapi-logo.svg",
        blackTechImageSrc: "/assets/black-logos/strapi-logo.svg",
        reasonWhy:
          "Strapi served as the headless CMS to manage content, providing flexibility and ease of use, allowing for efficient content updates. Although, I wouldn't reccommend it too much, as at least for me, I felt like quite a bit of features were lacking.",
      },
      {
        name: "Figma",
        techImageSrc: "/assets/figma-logo.svg",
        blackTechImageSrc: "/assets/black-logos/figma-logo.svg",
        reasonWhy:
          "Figma was the main design tool, it's plugins and features helped a lot, ensuring a cohesive and visually appealing user interface.",
      },
      {
        name: "CSS",
        techImageSrc: "/assets/css-logo.svg",
        blackTechImageSrc: "/assets/black-logos/css-logo.svg",
        reasonWhy:
          "While Tailwind CSS was the primary styling tool, custom CSS was utilized for specific design elements, providing a better visual experience.",
      },
    ],

    challenges: [
      {
        challengeTitle: "Reservation Form Enhancement",
        challengeDescription:
          "Creating the reservation form had its challenges. While the main functions worked well—sending data to Strapi and triggering email notifications—the details of form validation and user experience needed improvement. Ensuring accessibility is uncertain without real users for testing, and as a learning project, I didn't want to inconvenience users solely for testing and learning purposes.",
        solutionText:
          "To address these challenges, I refined the form's visual cues for better feedback and extensively tested it with NVDA Screen Reader. I also consulted online guides on form accessibility. However, determining the form's success remains challenging without real-world user interaction. Continuous improvement is completely possible and essential if the website was gonna be accessible to the public as a non-fictional project.",
      },
      {
        challengeTitle: "Strapi Content Management",
        challengeDescription:
          "Working with Strapi for content management was straightforward, but certain limitations posed challenges. Strapi lacked features like adding descriptions or placeholders to custom fields, making it challenging for admins to understand their functions. Customizing the Strapi interface was restricted, resulting in some field pages appearing disorganized. Issues with JSON fields could lead to content display problems if the Admin write anything in the wrong way on it, as there were no restrictions about what you can type. The absence of user feedback made it difficult to pinpoint improvements, especially when Strapi provided limited flexibility for admin convenience.",
        solutionText:
          "To address these challenges, I created tutorial videos showing each field's functionality. You can find the project on my GitHub repository, along with videos on setup, image scaling for space-saving, backups, and deployment. If you are testing it and you have any questions or need clarification, feel free to reach out.",
      },
    ],

    siteMainFeatures: [
      {
        featureHeading: "Strapi Headless CMS Integration:",
        featureDescription:
          "Easily update Texts, Images, Videos, Job Posts, and Services.",
      },
      {
        featureHeading: "Interactive Leaflet Map:",
        featureDescription:
          "Enables users to locate each facility efficiently.",
      },
      {
        featureHeading: "Accessibility Integration:",
        featureDescription:
          "Screen Reader-friendly design, including the Interactive Map and Contact/Reservation Form.",
      },
      {
        featureHeading: "Graphic Details for a Vibrant Experience:",
        featureDescription:
          "Number Counter, Confetti, Hover Effects on Images, and subtle animations for enhanced design.",
      },
      {
        featureHeading: "Automatic Email Notifications:",
        featureDescription:
          "Sent to Strapi Admin and User upon successful form completion.",
      },
      {
        featureHeading: "HTML Animation Loading Screen:",
        featureDescription:
          "Smooth loading animation while fetching data from Strapi.",
      },
      {
        featureHeading: "Custom Design Elements:",
        featureDescription:
          "Self-made Logo, Dog-Themed Pattern, and a blend of Free Vectors created on Figma.",
      },
      {
        featureHeading: "Custom Video Thumbnail:",
        featureDescription:
          "Custom thumbnail for a nice touch in the Open Positions Page.",
      },
      {
        featureHeading: "Images Interactions:",
        featureDescription:
          "Click non-interactive images to open a modal displaying all of the Page Images, Ken Burns Effect on Open Positions Page and Infinite Image Carousel working as a Gallery on each Individual Service Page.",
      },
    ],
    achievementsList: [
      {
        achievementHeading: "Strapi Headless CMS Integration:",
        achievementDescription:
          "Successfully integrated Strapi as a headless CMS, enabling easy updates for Texts, Images, Videos, Job Posts, and Services.",
      },
      {
        achievementHeading: "Interactive Leaflet Map:",
        achievementDescription:
          "Implemented an interactive Leaflet map, allowing users to efficiently locate each facility.",
      },
      {
        achievementHeading: "Accessibility Integration:",
        achievementDescription:
          "Designed a Screen Reader-friendly interface, including the Interactive Map and Contact/Reservation Form.",
      },
      {
        achievementHeading: "Graphic Details for a Vibrant Experience:",
        achievementDescription:
          "Added engaging elements like Number Counter, Confetti, Hover Effects on Images, and subtle animations for enhanced design.",
      },
      {
        achievementHeading: "Automatic Email Notifications:",
        achievementDescription:
          "Established automatic email notifications, sent to both Strapi Admin and Users upon successful form completion.",
      },
      {
        achievementHeading: "HTML Animation Loading Screen:",
        achievementDescription:
          "Implemented a smooth loading animation while fetching data from Strapi.",
      },
      {
        achievementHeading: "Custom Design Elements:",
        achievementDescription:
          "Created unique design elements, including a self-made logo, dog-themed pattern, and a blend of free vectors using Figma.",
      },
      {
        achievementHeading: "Custom Video Thumbnail:",
        achievementDescription:
          "Crafted a custom thumbnail for a visually appealing touch on the Open Positions Page.",
      },
      {
        achievementHeading: "Images Interactions:",
        achievementDescription:
          "Implemented interactive features such as clicking non-interactive images to open a modal, Ken Burns Effect on the Open Positions Page, and an Infinite Image Carousel functioning as a gallery on each Individual Service Page.",
      },
    ],
    thumbnail: "/projects/doggy-thumbnail.png",
    caseStudyUrl: "",
    liveWebsiteUrl: "",
  },

  // Add more project objects as needed
];
