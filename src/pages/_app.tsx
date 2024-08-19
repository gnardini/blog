import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnalyticsProvider } from "../utils/analyticsContext";

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
      <AnalyticsProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </AnalyticsProvider>
    </>
  );
}
