import "../../styles/globals.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import TagManager from "react-gtm-module";

import Layout from "../components/templates/Layout";
import ContextProvider from "../context";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || "" });
  }, []);

  return (
    <ChakraProvider>
      <Layout>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Layout>
    </ChakraProvider>
  );
}
