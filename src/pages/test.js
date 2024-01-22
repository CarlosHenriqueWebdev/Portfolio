import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import React from "react";

const ImageWithSkeleton = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const src = "/about-illustration.png"; // Replace with your actual image path

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <>
      {isLoading ? (
        <h1 className="p-[300px] text-[50px] text-[red]">Loading Image</h1>
      ) : (
        <img
          aria-hidden={true}
          className="max-w-[500px] md:max-w-full w-full h-full object-cover border-solid border-[2px] border-[black]"
          src={src}
          alt={t("alText5")}
        />
      )}
    </>
  );
};

export default ImageWithSkeleton;
