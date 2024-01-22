import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React from "react";

const ImageWithSkeleton = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={`relative w-full block ${isLoading ? "h-[500px]" : "h-full"}`}
    >
      <Image
        src="/about-illustration.png"
        alt={t("alText5")}
        width={0} // Set your desired width
        height={0} // Set your desired height
        unoptimized
        className={`${
          isLoading ? "opacity-0" : "opacity-1"
        } max-w-[500px] md:max-w-full w-full h-full object-cover border-solid border-[2px] border-[black]`}
        onLoadingComplete={handleImageLoad}
      />

      {isLoading && (
        <div className="absolute top-0 max-w-[500px] md:max-w-full w-full h-[500px] object-cover border-solid border-[2px] border-cornflowerBlue"></div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
