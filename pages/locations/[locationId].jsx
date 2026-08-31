import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openQuoteModal } from "@/components/QuoteModalProvider";
import {
  LOCATIONS_DATA,
  SERVICES_DATA,
  BUSINESS_DETAILS,
  getLocalBusinessSchema,
  getBreadcrumbSchema,
} from "@/data/seoConfig";

const SITE_URL = "https://www.amardipelevators.com";

export default function LocationPage({ location }) {
  const localSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Locations", item: `${SITE_URL}/locations/${location.id}` },
  ]);

  return (
    <>
      <Head>
        <title>{location.title}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/locations/${location.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main className="bg-[#fafafa] text-neutral-900">
        <Navbar />

        {/* Hero */}
        <section className="px-6 pt-32 pb-16 text-center md:pt-40 md:pb-20">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-6 flex justify-center gap-2 text-sm text-black/50">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <span>/</span>
              <span>Locations</span>
              <span>/</span>
              <span className="font-semibold text-red-600">{location.name}</span>
            </nav>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Elevator &amp; Lift Services in <span className="text-red-600">{location.name}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-600">
              {location.intro}
            </p>
            <a
              href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, "")}`}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Get A Free Assessment In {location.name}
            </a>
          </div>
        </section>

        {/* Local details */}
        <section className="px-6 pb-16 md:pb-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-[32px] border border-neutral-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-red-600">Local Challenges &amp; Adaptations</h2>
                <p className="text-sm leading-relaxed text-neutral-600">{location.challenges}</p>
              </div>
              <div className="mt-6 border-t border-neutral-200 pt-6">
                <h3 className="mb-2 text-lg font-semibold">Our Experience</h3>
                <p className="text-xs text-neutral-500">{location.projects}</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Elevator Services Available in {location.name}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                We install and support high-quality elevator systems. Explore our services below:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES_DATA.slice(0, 6).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="rounded-xl border border-neutral-200 bg-[#fafafa] p-3 text-center text-xs font-semibold text-neutral-600 transition hover:border-red-600 hover:text-red-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="px-6 pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Locate Amardip Elevators</h2>
            <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <iframe
                title="Amardip Elevators Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3432580269105!2d78.82158277486998!3d14.464968386005468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37382d95ed019%3A0xff5e8aa532e0371d!2sAmardip%20Elevators!5e0!3m2!1sen!2sin!4v1781887120073!5m2!1sen!2sin"
                className="h-[350px] w-full border-0 md:h-[450px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Cross-link other locations */}
        <section className="border-t border-neutral-200 px-6 py-16 text-center">
          <h2 className="mb-6 text-xl font-bold text-neutral-500">
            Explore Other Service Locations Near Kadapa
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS_DATA.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.id}`}
                className={`rounded-full border px-6 py-2 text-xs font-semibold transition ${
                  loc.id === location.id
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-red-600 hover:text-red-600"
                }`}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto max-w-4xl rounded-[40px] bg-black p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              Planning A Lift Installation In {location.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Get in touch with Amardip Elevators today. Our team will guide you to the right configuration for your building.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, "")}`}
                className="w-full rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition hover:bg-red-500 sm:w-auto"
              >
                Call {BUSINESS_DETAILS.phone}
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition hover:bg-white hover:text-black sm:w-auto"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: LOCATIONS_DATA.map((location) => ({ params: { locationId: location.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const location = LOCATIONS_DATA.find((l) => l.id === params.locationId);
  if (!location) return { notFound: true };
  return { props: { location } };
}
