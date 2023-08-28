import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Head from "next/head";
import Script from "next/script";
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CB93D92PF4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CB93D92PF4');
        `}
      </Script>
      <AnalyticsProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </AnalyticsProvider>
    </>
  );
}
