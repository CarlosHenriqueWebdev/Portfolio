import React from "react";
import Home from "./[lang]";
import { useRouter } from "next/router";
import Head from "next/head";
import useLanguageChange from "@/hooks/useLanguageChange";

const IndexRedirect = () => {
  const { isLanguageLoading } = useLanguageChange();

  const router = useRouter();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.carloshenriquedev.com/en" />
        <meta name="robots" content="noindex" />

        <title>Redirecting...</title>
      </Head>

      {!isLanguageLoading &&
        (router.pathname.startsWith("/en") ||
          router.pathname.startsWith("/pt")) && <Home />}
    </div>
  );
};

export default IndexRedirect;
