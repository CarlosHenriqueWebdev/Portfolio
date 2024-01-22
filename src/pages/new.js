import Hero from "@/components/section-content/homepage/Hero/Hero";
import React from "react";
import ImageWithSkeleton from "./test";

const New = () => {
  return (
    <div>
      <ImageWithSkeleton src={"/skeleton-try"} />


      <div id="homeSection">
        <Hero />
      </div>
    </div>
  );
};

export default New;
