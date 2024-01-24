import React  from "react";
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
        <title>Redirecting...</title>
      </Head>

      {!isLanguageLoading &&
        (router.pathname.startsWith("/en") ||
          router.pathname.startsWith("/pt")) && <Home />}
    </div>
  );
};

export default IndexRedirect;
