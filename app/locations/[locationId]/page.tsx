import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { LOCATIONS_DATA, SERVICES_DATA, getLocalBusinessSchema, getBreadcrumbSchema } from "@/app/data/seoConfig";

interface PageProps {
  params: Promise<{ locationId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locationId } = await params;
  const location = LOCATIONS_DATA.find((l) => l.id === locationId);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: `https://amardipelevators.com/locations/${location.id}`,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `https://amardipelevators.com/locations/${location.id}`,
      siteName: "Amardeep Elevators",
      images: [
        {
          url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop",
          width: 800,
          height: 600,
          alt: `Amardeep Elevators ${location.name}`,
        },
      ],
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { locationId } = await params;
  const location = LOCATIONS_DATA.find((l) => l.id === locationId);

  if (!location) {
    notFound();
  }

  const localSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://amardipelevators.com" },
    { name: "Locations", item: `https://amardipelevators.com/locations/${location.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-16">
        {/* Local Hero Header */}
        <section className="px-6 py-16 md:px-10 lg:px-20 max-w-7xl mx-auto text-center">
          <nav className="text-sm text-neutral-400 mb-4 justify-center flex gap-2">
            <Link href="/" className="hover:text-red-500">Home</Link> &gt; <span>Locations</span> &gt; <span className="text-red-500 font-semibold">{location.name}</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white uppercase">
            Elevator & Lift Services in <span className="text-red-500">{location.name}</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            {location.intro}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="tel:+919247932351"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            >
              Get Free Assessment in {location.name}
            </a>
          </div>
        </section>

        {/* Local SEO Details & Challenge Content */}
        <section className="px-6 py-12 md:px-10 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Local Challenges & Adaptations</h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {location.challenges}
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Our Experience</h3>
              <p className="text-neutral-400 text-xs">
                {location.projects}
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Elevator Services Available in {location.name}</h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                We manufacture and support high-quality products. Check our direct services below:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES_DATA.slice(0, 6).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-center hover:border-red-500 transition text-xs font-semibold text-neutral-300 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="px-6 py-12 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Locate Amardeep Elevators</h2>
          <div className="w-full overflow-hidden rounded-3xl border border-neutral-800 shadow-xl bg-neutral-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3432580269105!2d78.82158277486998!3d14.464968386005468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37382d95ed019%3A0xff5e8aa532e0371d!2sAmardip%20Elevators!5e0!3m2!1sen!2sin!4v1781887120073!5m2!1sen!2sin"
              className="w-full h-[350px] md:h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        {/* Local Areas Grid Navigation */}
        <section className="px-6 py-12 md:px-10 lg:px-20 max-w-7xl mx-auto border-t border-neutral-800 mt-12 text-center">
          <h2 className="text-xl font-bold text-neutral-400 mb-6">Explore Other Service Locations near Kadapa:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS_DATA.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.id}`}
                className={`px-6 py-2 rounded-full text-xs font-semibold border transition ${
                  loc.id === location.id
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-red-600 hover:text-white"
                }`}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
