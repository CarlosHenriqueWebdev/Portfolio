import React, { useState, useEffect } from "react";
import Home from "./[lang]";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import LanguageDropdown from "@/components/common/NavBar/LanguageDropdown";
import useLanguageChange from "@/hooks/useLanguageChange";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";
import Resume from "./[lang]/resume";

const index = () => {
  const { changeLanguage, isLanguageLoading } = useLanguageChange();

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Redirecting...</title>

        <meta name="description" content="" />

        {/* <link
          rel="alternate"
          hreflang={language}
          href={`https://www.yourwebsite.com/${language}/page`}
        /> */}
      </Head>

      {!isLanguageLoading &&
        (router.pathname.startsWith("/en/resume") ||
          router.pathname.startsWith("/pt/resume")) && <Resume />}
    </div>
  );
};

export default index;
