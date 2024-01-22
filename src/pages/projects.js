import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useLanguageChange from "@/hooks/useLanguageChange";
import Project from "./[lang]/projects/[slug]";

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
        (router.pathname.startsWith("/projects/doggy-daycare/en") ||
          router.pathname.startsWith("/projects/doggy-daycare/pt")) && (
          <Project />
        )}
    </div>
  );
};

export default index;
