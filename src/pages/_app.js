import "@/styles/globals.css";
// eslint-disable-next-line no-unused-vars
import i18n from "../../i18n";

import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // Extract locale from pageProps
  const { locale } = pageProps;

  // State to track if component is rendered on the server
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false); // Update state when component is mounted on the client

    i18n.changeLanguage(locale); // Call i18n.changeLanguage using
  }, [locale]);

  // Change language on the server or using useEffect on the client
  if (isServer) {
    i18n.changeLanguage(locale); // Call i18n.changeLanguage directly on the server
  }

  return <Component {...pageProps} />;
}

export async function getServerSideProps(context) {
  const { locale } = context;
  return { props: { locale } };
}
