import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openQuoteModal } from "@/components/QuoteModalProvider";
import { SERVICES_DATA, BUSINESS_DETAILS, getServiceSchema, getBreadcrumbSchema } from "@/data/seoConfig";

export default function ServicePage({ service }) {

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://amardipelevators.com" },
    { name: "Services", item: `https://amardipelevators.com/services/${service.id}` },
  ]);

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords.join(", ")} />
        <link rel="canonical" href={`https://amardipelevators.com/services/${service.id}`} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://amardipelevators.com/services/${service.id}`} />
        <meta property="og:site_name" content="Amardeep Elevators" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:px-10 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="text-sm text-neutral-400 mb-4">
              <Link href="/" className="hover:text-red-500">Home</Link> &gt; <span>Services</span> &gt; <span className="text-red-500 font-semibold">{service.name}</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              {service.name}
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              {service.shortDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, "")}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-0.5 inline-block text-center"
              >
                Inquire Now
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-transparent hover:bg-white hover:text-black border border-white text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-center"
              >
                Get Free Quote
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl border border-neutral-800">
            {service.image ? (
              <Image
                src={service.image}
                alt={`${service.name} Installation - Amardeep Elevators`}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500">
                Image coming soon
              </div>
            )}
          </div>
        </section>

        {/* Content Section (GEO Optimized) */}
        <section className="px-6 py-16 md:px-10 lg:px-20 max-w-7xl mx-auto bg-neutral-900 rounded-3xl border border-neutral-800 mt-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Best {service.name} Solutions in Kadapa & Andhra Pradesh
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-8">
            {service.geoContent.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-red-500 mb-4">Why Choose Our {service.name}?</h3>
              <ul className="space-y-3">
                {service.geoContent.whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-neutral-300 text-sm">
                    <span className="text-red-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-red-500 mb-4">Our Service Delivery Process</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {service.geoContent.process}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="bg-red-600/10 text-red-500 font-bold px-3 py-1 rounded-full text-xs border border-red-500/20">Step 1</span>
                  <span className="text-xs text-neutral-400">Free Site Assessment & Planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-600/10 text-red-500 font-bold px-3 py-1 rounded-full text-xs border border-red-500/20">Step 2</span>
                  <span className="text-xs text-neutral-400">Custom Engineering & Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-600/10 text-red-500 font-bold px-3 py-1 rounded-full text-xs border border-red-500/20">Step 3</span>
                  <span className="text-xs text-neutral-400">Precision Installation & Safety Audits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Listing Navigation */}
          <div className="border-t border-neutral-800 pt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Our Elevator Services:</h4>
            <div className="flex flex-wrap gap-3">
              {SERVICES_DATA.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  prefetch={false}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                    s.id === service.id
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-red-600 hover:text-white"
                  }`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lead/Conversion Optimization Form */}
        <section className="px-6 py-16 md:px-10 lg:px-20 max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-red-600 rounded-3xl px-8 py-12 md:py-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-3xl font-extrabold md:text-4xl text-white">
              Get a Free Quote For Your Elevator Project
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Our experts will visit your building site in Kadapa or nearby locations, take measurements, and propose the best vertical layout for free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+919247932351"
                className="bg-black hover:bg-neutral-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-block text-center w-full sm:w-auto"
              >
                Call +91 9247932351
              </a>
              <a
                href="https://wa.me/919247932351"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: SERVICES_DATA.map((service) => ({ params: { serviceId: service.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const service = SERVICES_DATA.find((item) => item.id === params.serviceId);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      service,
    },
  };
}
