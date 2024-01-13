import Image from "next/image";
import React, { useRef } from "react";
import { servicesData } from "./servicesData";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const delayItem = {
  open: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemAnimation = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  closed: {
    opacity: 0,
    scale: 1.2,
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="overflow-hidden border-b-[4px] border-solid border-[black] bg-[url('/square-pattern.png')]">
      <div
        className="w-full h-full py-[72px] px-[24px] lg:px-[48px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.17)`,
        }}
      >
        <div className="lg:text-center">
          <motion.div
            className="mb-[32px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // Adjust the value to your needs
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="font-bold text-[26px]">
              Elevate Your Digital Presence with my Digital Services.
            </h2>

            <p className="mt-[12px] md:max-w-[800px] lg:max-w-[600px] lg:mx-auto text-white85">
              Explore a range of digital services that I offer. From custom
              website development to responsive designs, I try and improve
              everyday so my services can not only meet your business needs but
              also to enhance the usability and accessibility of your website
              for you, your team, and all of the user's from your website. Feel
              free to contact me using the form below if you have any questions
              about my services.
            </p>
          </motion.div>

          <div>
            <motion.ul
              className="grid gap-x-[16px] gap-y-[24px] items-stretch md:grid-cols-2 lg:grid-cols-3"
              variants={delayItem}
              initial="closed"
              animate={isInView && "open"}
              ref={ref}
            >
              {servicesData.map((mapItem, itemIndex) => (
                <motion.li
                  className={`rounded-[4px] w-full h-full p-[24px] border-solid border-[3px] ${
                    itemIndex % 2 === 0
                      ? "border-primaryBlue"
                      : "border-royalAmethyst"
                  } content-baseline bg-[black] grid  lg:justify-items-center`}
                  key={itemIndex}
                  variants={itemAnimation}
                >
                  <div
                    className={`w-fit border-solid ${
                      itemIndex % 2 === 0
                        ? "border-primaryBlue"
                        : "border-royalAmethyst"
                    }  border-[3px] p-[12px] rounded-[100%]`}
                  >
                    <Image
                      aria-hidden={true}
                      className="w-[40px] h-[40px]"
                      src={mapItem.imageSrc}
                      alt="Estrela Icone"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </div>

                  <div className="grid gap-[8px] mt-[16px]">
                    <h3 className="text-[18px]">{mapItem.title}</h3>

                    <p className="max-w-[400px] text-white75 text-[14px]">
                      {mapItem.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-start mt-[32px] text-[20px]">
              Are you interested in working with me?{" "}
              <Link
                href="#contactSection"
                className="text-lightViolet font-semibold hover:underline"
              >
                Let’s get started now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
