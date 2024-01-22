import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useLanguageChange from "@/hooks/useLanguageChange";
import Resume from "./[lang]/resume";

const ResumeRedirect = () => {
  const { isLanguageLoading } = useLanguageChange();

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

export default ResumeRedirect;
