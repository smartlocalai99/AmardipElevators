import "@/styles/globals.css";
import QuoteModalProvider from "@/components/QuoteModalProvider";
import FloatingCTA from "@/components/FloatingCTA";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <QuoteModalProvider />
      <FloatingCTA />
    </>
  );
}
