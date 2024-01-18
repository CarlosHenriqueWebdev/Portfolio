import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import Link from "next/link";
import React from "react";
import { contactInfo } from "@/components/section-content/homepage/About/contactInfo";
import Image from "next/image";
import { skillsData } from "@/components/section-content/homepage/Skills/skillsData";
import { projectsData } from "@/components/section-content/homepage/Projects/projectsData";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";

const Resume = () => {
  const educationList = [
    {
      educationHeading: "Video Tutorials",
      educationDescription:
        "Watch video tutorials on platforms like YouTube, where experts and educators share insights, tips, and practical demonstrations.",
    },
    {
      educationHeading: "Documentation Reading",
      educationDescription:
        "Dive into official documentation of programming languages, frameworks, and tools. Gain a deep understanding of the features, functionalities, and practices outlined in documentation.",
    },
    {
      educationHeading: "Practical Projects",
      educationDescription:
        "Undertake hands-on projects to apply knowledge in a practical setting. Worked on many projects for learning purposes that cover various aspects of web development.",
    },
  ];

  return (
    <div className="cursor-auto bg-[white] overflow-hidden">
      <ScrollToTopButton />

      <nav className="text-[white]">
        <div className="px-[24px] py-[8px] lg:px-[48px] bg-[#002b5c]  w-full flex lg:justify-center items-center">
          <div className="w-full flex gap-[24px] items-center justify-between">
            <div>
              <Link
                className="font-bold flex gap-[8px] items-center underline text-[14px] sm:text-[16px]"
                href="/"
              >
                <Image
                  aria-hidden={true}
                  className="w-[20px] h-[20px]"
                  src="/left-arrow-icon.svg"
                  alt="Estrela Icone"
                  width={0}
                  height={0}
                  unoptimized
                />
                Back to Portfolio
              </Link>
            </div>

            <div className="order-1">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`border-solid border-b-[6px] border-[black]  bg-cover h-full bg-[black] w-full bg-no-repeat relative bg-center bg-[url(/hero.png)]`}
      >
        <div
          className="border-solid border-y-[6px] border-[black]  flex justify-center items-center"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
          }}
        >
          <div className="font-bold text-[24px] sm:text-[28px] uppercase py-[72px] grid gap-[4px] tracking-[6px]">
            <h1 className="w-fit mx-auto">Null Null</h1>

            <p className="text-[20px] text-white85 w-fit mx-auto">
              Web Developer
            </p>
          </div>
        </div>

        <div className=" bg-[#002b5c] ">
          <ul className="mx-auto px-[24px] py-[20px] lg:px-[48px] w-full grid sm:grid-cols-2 md:grid-cols-3 max-w-[900px] w-fit lg:justify-center items-center gap-[24px]">
            {contactInfo.map((mapItem, itemIndex) => (
              <li className="w-full flex gap-[8px] font-bold text-white75">
                <Image
                  aria-hidden={true}
                  className={`w-[20px]`}
                  src={mapItem.whiteImageSrc}
                  alt="Estrela Icone"
                  width={0}
                  height={0}
                  unoptimized
                />

                {mapItem.url.startsWith("mailto:") ? (
                  <a
                    className="cursor-pointer underline"
                    href={mapItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mapItem.name}
                  </a>
                ) : mapItem.url.startsWith("https://wa.me/") ? (
                  <a
                    className="cursor-pointer underline"
                    href={mapItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mapItem.name}
                  </a>
                ) : (
                  <Link
                    className="cursor-pointer underline"
                    href={mapItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mapItem.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-[black] grid gap-[16px] px-[24px] lg:px-[48px] py-[48px]">
        <div className="grid gap-[16px]">
          <div className="relative w-fit">
            <h2 className="text-[24px] uppercase font-bold w-fit">
              Personal Statement
            </h2>

            <div
              className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
            ></div>
          </div>

          <div className="lg:pl-[12px]">
            <p>
              As a self-taught, all-around web developer, I learn new skills
              with dedication and persistence. While my formal education may be
              limited, my determination to improve and help other's is high. I
              invest countless hours daily into coding, crafting projects for
              learning, and tackling complex coding issues. Through a mix of
              video tutorials, guides, and thorough documentation, I've
              cultivated proficiency in design, frontend, and backend
              development. While I may not have the extensive real-world
              experience of professionals, I am confident in my ability to
              deliver high-quality work and meet the demands of any project just
              like any other person.
            </p>
          </div>
        </div>

        <div className="grid gap-[16px]">
          <div className="relative w-fit">
            <h2 className="text-[24px] uppercase font-bold w-fit">
              Web Dev Skills
            </h2>

            <div
              className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
            ></div>
          </div>

          <div className="lg:pl-[12px]">
            <ul className="mt-[16px] grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {skillsData.map((mapItem) => (
                <li className="bg-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#002b5c] font-bold">
                  <Image
                    aria-hidden={true}
                    className={`w-[20px] h-[20px]`}
                    src={mapItem.imageSrcBlack}
                    alt={`${mapItem.name} Logo`}
                    width={0}
                    height={0}
                    unoptimize
                  />

                  <p className="w-fit">{mapItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-[16px]">
          <div className="relative w-fit">
            <h2 className="text-[24px] uppercase font-bold w-fit">Projects</h2>

            <div
              className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
            ></div>
          </div>

          <div className="lg:pl-[12px]">
            <ul className="grid gap-[24px]">
              {projectsData.map((mapItem, itemIndex) => (
                <li>
                  <div>
                    <h3 className="font-bold text-[18px] uppercase flex gap-[4px] items-baseline">
                      <span className="flex gap-[2px] underline">
                        {" "}
                        <Image
                          aria-hidden={true}
                          className="w-[12px] h-[20px] hidden lg:block"
                          src="/link.svg"
                          alt="Estrela Icone"
                          width={0}
                          height={0}
                          unoptimized
                        />
                        {mapItem.name}
                      </span>{" "}
                      <span className="text-[12px] text-[white75] normal-case">
                        {" "}
                        (Sole Developer)
                      </span>
                    </h3>

                    <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                      Description:
                    </h4>

                    <p className="lg:pl-[24px] mt-[4px]">
                      {mapItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="lg:pl-[12px] uppercase mt-[16px] font-bold text-[16px] text-[#002b5c]">
                      Technologies:
                    </h4>

                    <ul className="lg:pl-[24px] mt-[16px] grid gap-x-[16px] gap-y-[12px] lg:w-fit sm:grid-cols-2 md:grid-cols-3">
                      {mapItem.technologiesUsed.map((mapItem, itemIndex) => (
                        <li className="bg-[white] px-[16px] py-[8px] flex gap-[8px] items-center w-full h-full border-solid border-[3px] border-[#002b5c] font-bold">
                          <Image
                            aria-hidden={true}
                            className="w-[20px] h-[20px]"
                            src={mapItem.blackTechImageSrc}
                            alt="Estrela Icone"
                            width={0}
                            height={0}
                            unoptimized
                          />

                          <p className="w-fit">{mapItem.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="lg:pl-[12px] uppercase mt-[16px] font-bold text-[16px] text-[#002b5c]">
                      Achievements:
                    </h4>

                    <ul className="lg:pl-[12px] mt-[16px] grid gap-x-[32px] gap-y-[12px] w-fit md:grid-cols-2">
                      {mapItem.achievementsList.map((mapItem, itemIndex) => (
                        <li className="bg-[white] lg:pl-[12px] flex flex-col gap-[4px] w-full">
                          <h5 className="uppercase w-fit font-bold text-[14px]">
                            {mapItem.achievementHeading}
                          </h5>

                          <p className="text-[14px]">
                            {mapItem.achievementDescription}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-[16px]">
          <div className="relative w-fit">
            <h2 className="text-[24px] uppercase font-bold w-fit">Education</h2>

            <div
              className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
            ></div>
          </div>

          <div className="lg:pl-[12px]">
            <h3 className="font-bold text-[18px] uppercase">
              Self-Taught Web Developer
            </h3>

            <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
              Online Learning
            </h4>

            <ul className="lg:pl-[12px] mt-[12px] grid gap-y-[12px]  gap-x-[24px] w-fit md:grid-cols-2">
              {educationList.map((mapItem, itemIndex) => (
                <li className="bg-[white] lg:pl-[12px] flex flex-col gap-[4px] w-full">
                  <h5 className="uppercase w-fit font-bold text-[14px]">
                    {mapItem.educationHeading}
                  </h5>

                  <p className="text-[14px]">{mapItem.educationDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-[16px]">
          <div className="relative w-fit">
            <h2 className="text-[24px] uppercase font-bold w-fit">Languages</h2>

            <div
              className={`bg-[#002b5c] left-0 absolute w-full h-[4px]`}
            ></div>
          </div>

          <ul className="lg:pl-[12px] grid gap-[16px]">
            <li>
              <h3 className="font-bold text-[18px] uppercase">Portuguese</h3>

              <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                Native Speaker
              </h4>

              <p className="lg:pl-[24px] mt-[4px]">
                Native Portuguese speaker with fluency in speaking, writing, and
                listening. Comfortable communicating complex ideas and technical
                concepts in Portuguese. Proficient in understanding spoken
                Portuguese in various contexts.
              </p>
            </li>

            <li>
              <h3 className="font-bold text-[18px] uppercase">English</h3>

              <h4 className="lg:pl-[12px] uppercase mt-[4px] font-bold text-[16px] text-[#002b5c]">
                Reading, Writing and Listening
              </h4>

              <p className="lg:pl-[24px] mt-[4px]">
                Proficient in reading and writing English, with a strong ability
                to comprehend technical content. While I don't have a great
                vocal skill, I am comfortable reading, writing, and a bit of
                listening to voices in English, especially in the context of
                coding, documentation, and communication through written
                channels.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-solid border-t-[6px] border-[black]  w-full h-[70px] bg-[#002b5c]"></div>
    </div>
  );
};

export default Resume;
