import "@/styles/globals.css";
// eslint-disable-next-line no-unused-vars
import i18n from "../../i18n";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const { locale } = pageProps;

  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);

    i18n.changeLanguage(locale);
  }, [locale]);

  if (isServer) {
    i18n.changeLanguage(locale);
  }

  return <Component {...pageProps} />;
}

export async function getServerSideProps(context) {
  const { locale } = context;
  return { props: { locale } };
}
