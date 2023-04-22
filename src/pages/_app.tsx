import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gonza Nardini</title>
        <meta
          name="description"
          content="Gonza Nardini's personal website and blog"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
