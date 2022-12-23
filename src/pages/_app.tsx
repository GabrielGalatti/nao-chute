import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/templates/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "../context";

export default function App({ Component, pageProps }: AppProps) {
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
