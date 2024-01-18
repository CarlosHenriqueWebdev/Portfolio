import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/section-content/homepage/Projects/projectsData";
import { buttonClassName } from "@/components/utils/buttonStyle";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopButton from "@/components/utils/scrollToTopButton";

const Project = () => {
  return (
    <div className="cursor-auto">
      <ScrollToTopButton />

      <nav className="text-[white] border-solid border-b-[6px] border-primaryBlue">
        <div className="px-[24px] py-[8px] lg:px-[48px] bg-[black] w-full flex lg:justify-center items-center">
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

      <div className="">
        {projectsData.slice(0, 1).map((mapItem, itemIndex) => (
          <div>
            <div
              key={itemIndex}
              className="bg-center bg-cover h-[80vh] border-solid border-b-[6px] border-primaryBlue"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              }}
            ></div>

            <div className="py-[72px] px-[24px] lg:px-[48px]">
              <div>
                <div className="grid gap-[12px]">
                  <h1 className="text-[26px] font-bold">Doggy Daycare</h1>

                  <p>{mapItem.description}</p>
                </div>

                <div className="mt-[24px] flex gap-[16px]">
                  <button
                    className={`${buttonClassName} !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                  >
                    View Online
                    <Image
                      aria-hidden={true}
                      className="w-[12px] h-[12px] rotate-[90deg]"
                      src="/arrow.svg"
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </button>
                  <button
                    className={`${buttonClassName} !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                  >
                    View Online
                    <Image
                      aria-hidden={true}
                      className="w-[12px] h-[12px] rotate-[90deg]"
                      src="/arrow.svg"
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </button>
                  <button
                    className={`${buttonClassName} !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                  >
                    View Online
                    <Image
                      aria-hidden={true}
                      className="w-[12px] h-[12px] rotate-[90deg]"
                      src="/arrow.svg"
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </button>
                </div>
              </div>

              <hr className="border-t-[3px] border-primaryBlue my-[32px]" />

              <div className="grid gap-[12px]">
                <h2 className="text-[22px] font-bold">Technologies Used:</h2>

                <ul className="gap-x-[32px] gap-y-[12px]  grid grid-cols-2">
                  {mapItem.technologiesUsed.map((mapItem, itemIndex) => (
                    <li className="grid gap-[8px]">
                      <h3 className="font-bold text-[20px]">
                        {itemIndex + 1}. {mapItem.name}
                      </h3>

                      <p>{mapItem.reasonWhy}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t-[3px] border-primaryBlue my-[32px]" />

              <div className="grid gap-[16px]">
                <div className="grid gap-[12px]">
                  <h2 className="text-[22px] font-bold">Challenges:</h2>

                  <p>
                    While developing this project, I encountered minimal
                    challenges, mostly centered around refining site details and
                    handling repetitive tasks due to the CMS. The complexity of
                    the project was relatively low, with the most complicated
                    steps being only a little challenging in comparison.
                  </p>
                </div>

                <ul className="gap-x-[32px] gap-y-[12px]  grid grid-cols-2">
                  {mapItem.challenges.map((mapItem, itemIndex) => (
                    <li className="grid gap-[8px]">
                      <h3 className="text-[20px] font-bold">
                        {itemIndex + 1}. {mapItem.challengeTitle}:
                      </h3>

                      <p>{mapItem.challengeDescription}</p>

                      <p>
                        <strong className="italic font-semibold">
                          Solution:
                        </strong>{" "}
                        {mapItem.solutionText}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t-[3px] border-primaryBlue my-[32px]" />

              <div className="grid gap-[16px]">
                <div className="grid gap-[12px]">
                  <h2 className="text-[22px] font-bold">
                    Features and Functionality:
                  </h2>

                  <p>
                    Explore the diverse range of features and functionality
                    implemented in this project. From seamless content
                    management to user-friendly interactions, each element is
                    designed to enhance the overall user experience.
                  </p>
                </div>

                <ul className="gap-x-[32px] gap-y-[12px]  grid grid-cols-2">
                  {mapItem.siteMainFeatures.map((mapItem, itemIndex) => (
                    <li className="grid gap-[8px]">
                      <h3 className="font-bold text-[20px]">
                        {itemIndex + 1}. {mapItem.featureHeading}
                      </h3>

                      <h4 className="font-semibold">
                        {mapItem.featureDescription}
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t-[3px] border-primaryBlue my-[32px]" />

              <div className="grid gap-[16px]">
                <div className="grid gap-[12px]">
                  <h2 className="text-[22px] font-bold">Tutorial Video:</h2>
                </div>

                <div className="w-fit">
                  <div className="border-solid border-[4px] border-lightViolet">
                    <video className="w-fit h-[50vh]" controls>
                      <source src="/test-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <button
                    className={`${buttonClassName} mt-[16px] !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                  >
                    Download Video
                    <Image
                      aria-hidden={true}
                      className="w-[12px] h-[12px] rotate-[90deg]"
                      src="/arrow.svg"
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </button>
                </div>
              </div>

              <hr className="border-t-[3px] border-primaryBlue my-[32px]" />

              <div className="grid gap-[16px]">
                <div className="grid gap-[12px]">
                  <h2 className="text-[22px] font-bold">Quick Page Gallery:</h2>
                </div>

                <ul className="grid gap-[16px] grid-cols-3">
                  <li className="border-solid border-[4px] border-lightViolet h-fit">
                    <video className="w-fit h-fit" controls>
                      <source src="/homepage.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </li>
                  <li className="border-solid border-[4px] border-lightViolet h-fit">
                    <video className="w-fit h-fit" controls>
                      <source src="/homepage.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </li>
                  <li className="border-solid border-[4px] border-lightViolet h-fit">
                    <video className="w-fit h-fit" controls>
                      <source src="/homepage.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </li>
                </ul>

                <button
                  className={`${buttonClassName} mt-[16px] w-fit  px-[32px] !border-lightViolet before:!bg-lightViolet flex gap-[8px] items-center`}
                >
                  View More Online on Website
                  <Image
                    aria-hidden={true}
                    className="w-[12px] h-[12px] rotate-[90deg]"
                    src="/arrow.svg"
                    alt="Estrela Icone"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-solid border-t-[6px] border-primaryBlue">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
