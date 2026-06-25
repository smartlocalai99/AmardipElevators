import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCTA from "./components/FloatingCTA";
import { getOrganizationSchema, getLocalBusinessSchema } from "./data/seoConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amardeep Elevators | Best Lift & Elevator Company in Kadapa",
  description: "Amardeep Elevators (Amardip Elevators) provides premium lift installation, maintenance, modernization, and AMC services in Kadapa, Proddatur, Rajampet, Rayachoti, Pulivendula, and Jammalamadugu. Call +91 9247932351 for a free quote.",
  keywords: [
    "Elevators in Kadapa",
    "Lift installation in Kadapa",
    "Home lifts in Kadapa",
    "Passenger lifts Kadapa",
    "Best elevator company in Kadapa",
    "Elevator AMC Kadapa",
    "Residential elevators Kadapa",
    "Commercial lifts Kadapa",
    "Hospital lifts Kadapa",
    "Amardeep Elevators",
    "Amardip Elevators"
  ],
  alternates: {
    canonical: "https://amardipelevators.com"
  },
  openGraph: {
    title: "Amardeep Elevators | Best Lift & Elevator Company in Kadapa",
    description: "Premium lift installation, maintenance, modernization, and AMC services in Kadapa and surrounding areas. Trusted 24/7 service.",
    url: "https://amardipelevators.com",
    siteName: "Amardeep Elevators",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop",
        width: 800,
        height: 600,
        alt: "Amardeep Elevators"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Amardeep Elevators | Best Lift & Elevator Company in Kadapa",
    description: "Premium lift installation, maintenance, modernization, and AMC services in Kadapa and surrounding areas.",
    images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden antialiased">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

