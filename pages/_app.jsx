import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/data/seoConfig";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full overflow-x-hidden antialiased`}>
      <Head>
        <title>Amardeep Elevators | Best Lift & Elevator Company in Kadapa</title>
        <meta
          name="description"
          content="Amardeep Elevators (Amardip Elevators) provides premium lift installation, maintenance, modernization, and AMC services in Kadapa, Proddatur, Rajampet, Rayachoti, Pulivendula, and Jammalamadugu. Call +91 9247932351 for a free quote."
        />
        <meta
          name="keywords"
          content="Elevators in Kadapa, Lift installation in Kadapa, Home lifts in Kadapa, Passenger lifts Kadapa, Best elevator company in Kadapa, Elevator AMC Kadapa, Residential elevators Kadapa, Commercial lifts Kadapa, Hospital lifts Kadapa, Amardeep Elevators, Amardip Elevators"
        />
        <link rel="canonical" href="https://amardipelevators.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <meta property="og:title" content="Amardeep Elevators | Best Lift & Elevator Company in Kadapa" />
        <meta
          property="og:description"
          content="Premium lift installation, maintenance, modernization, and AMC services in Kadapa and surrounding areas. Trusted 24/7 service."
        />
        <meta property="og:url" content="https://amardipelevators.com" />
        <meta property="og:site_name" content="Amardeep Elevators" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      </Head>
      <Component {...pageProps} />
      <FloatingCTA />
    </div>
  );
}
