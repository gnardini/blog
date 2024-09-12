import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnalyticsProvider } from '../utils/analyticsContext';

export default function App({ Component, pageProps }: AppProps) {
  const title = 'Gonza Nardini';
  const description = "Gonza Nardini's personal website and blog";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={`/profile-pic.jpg`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content={`/profile-pic.jpg`} />
        <meta name="twitter:card" content="summary" />
        <script defer data-domain="gnardini.com" src="https://phinxer.com/script.js"></script>
      </Head>
      <AnalyticsProvider>
        <>
          <Header />
          <Component {...pageProps} />
          <div className="h-16" />
        </>
      </AnalyticsProvider>
    </>
  );
}
