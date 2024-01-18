import Hero from "@/components/section-content/homepage/Hero/Hero";
import CustomCursor from "@/components/utils/CustomCursor";
import useCustomCursor from "@/hooks/useCustomCursor";
import React from "react";
import { buttonClassName } from "@/components/utils/buttonStyle";

const New = () => {
  const {
    position,
    elementHovered,
    setElementHovered,
    updateCursorShape,
    dynamicSize,
    sizeHandleButtonHover,
    sizeHandleButtonLeave,
    sizeTransitionAnimation,
    navbarHover,
    navbarHandleButtonHover,
    navbarHandleButtonLeave,
    borderRadiusShape,
  } = useCustomCursor();

  return (
    <div>
      <CustomCursor
        elementHovered={elementHovered}
        position={position}
        dynamicSize={dynamicSize}
        sizeTransitionAnimation={sizeTransitionAnimation}
        navbarHover={navbarHover}
        borderRadiusShape={borderRadiusShape}
      />

      <div id="homeSection">
        <Hero
          setElementHovered={setElementHovered}
          updateCursorShape={updateCursorShape}
          buttonClassName={buttonClassName}
          sizeHandleButtonHover={sizeHandleButtonHover}
          sizeHandleButtonLeave={sizeHandleButtonLeave}
        />
      </div>
    </div>
  );
};

export default New;
