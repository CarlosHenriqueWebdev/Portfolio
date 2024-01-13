import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonAnimationStyles } from "@/components/utils/buttonStyle";
import { AnimatePresence, motion } from "framer-motion";
import { TextAnimationAboutHeading } from "@/components/utils/textAnimations";
import { socialLinks } from "./socialLinks";

const About = ({ setElementHovered, updateCursorShape }) => {
  const animatedText = "Web Developer";

  return (
    <div className="overflow-hidden bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full pt-[72px] pb-[48px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-center font-bold text-[26px] mb-[32px]">
              About Me
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-[32px] lg:gap-[24px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="h-fit grid gap-[12px] justify-items-center md:justify-items-start lg:gap-[8px]">
              <Image
                aria-hidden={true}
                className="max-w-[500px] md:max-w-full w-full h-full object-cover border-solid border-[2px] border-[black]"
                src="/about-illustration.png"
                alt="Estrela Icone"
                width={0}
                height={0}
                unoptimized
              />

              <div className="flex flex-wrap gap-[12px]">
                {socialLinks.map((mapItem, itemIndex) => (
                  <Link
                    className={`${buttonAnimationStyles} w-fit h-fit p-[12px] bg-[black] border-solid ${
                      itemIndex % 2 === 0
                        ? "border-primaryBlue"
                        : "border-royalAmethyst"
                    } border-[2px] rounded-[50%] before:bg-[white] before:rounded-[50%]`}
                    href={mapItem.url}
                    onMouseEnter={(e) =>
                      updateCursorShape(
                        e.currentTarget,
                        `${itemIndex % 2 === 0 ? "primaryBlue" : ""}`
                      )
                    }
                    onMouseLeave={() => setElementHovered(null)}
                  >
                    <Image
                      aria-hidden={true}
                      className={`w-[20px] sm:w-[24px]`}
                      src={mapItem.imageSrc}
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="sm:text-center md:text-start">
            <div className="mb-[16px] font-bold text-[24px] strokeme text-primaryBlue">
              <motion.div>
                <TextAnimationAboutHeading text={animatedText} />
              </motion.div>
            </div>

            <div className="grid gap-[12px] max-w-[640px] mx-auto h-fit">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // Adjust the value to your needs
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>
                  I'm{" "}
                  <strong className="strokeme text-royalAmethyst">
                    [Null] [Null]
                  </strong>
                  , a{" "}
                  <strong className="strokeme text-lightViolet">
                    Web Developer
                  </strong>{" "}
                  based in <strong className="brazil-gradient">Brazil</strong>.
                  With some experience in both{" "}
                  <strong className="strokeme italic">
                    front-end and back-end development
                  </strong>
                  , I specialize in creating{" "}
                  <strong className="strokeme text-primaryBlue">
                    user-friendly websites
                  </strong>{" "}
                  that have a touch of{" "}
                  <strong className="strokeme text-royalAmethyst">
                    detail
                  </strong>{" "}
                  and{" "}
                  <strong className="strokeme text-lightViolet">
                    vitality
                  </strong>
                  .
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // Adjust the value to your needs
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>
                  For me,{" "}
                  <strong className="strokeme font-medium">
                    problem-solving
                  </strong>{" "}
                  is at the core of web development. I believe that given enough
                  time and determination, any challenge can be overcome. My
                  focus is on crafting{" "}
                  <strong className="strokeme font-medium">
                    practical solutions
                  </strong>{" "}
                  and ensuring a{" "}
                  <strong className="strokeme text-royalAmethyst">
                    seamless user experience
                  </strong>{" "}
                  for every and all.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // Adjust the value to your needs
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>
                  I may not delve into coding intricacies as much as others, but
                  I'm all about{" "}
                  <strong className="strokeme text-primaryBlue italic">
                    results
                  </strong>
                  . My{" "}
                  <strong className="strokeme text-royalAmethyst">
                    hands-on approach
                  </strong>{" "}
                  involves extensive study, iterative learning, and practical
                  application. For me, it's about{" "}
                  <strong className="strokeme text-lightViolet font-medium">
                    doing and improving through experience
                  </strong>
                  , rather than{" "}
                  <strong className="strokeme text-primaryBlue font-medium">
                    theoritical matters
                  </strong>
                  .
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // Adjust the value to your needs
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>
                  If my approach resonates with you or if you have a project in
                  mind, let's connect and bring your ideas to life together.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
