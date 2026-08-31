import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openQuoteModal } from "@/components/QuoteModalProvider";
import {
  SERVICES_DATA,
  BUSINESS_DETAILS,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/data/seoConfig";

const SITE_URL = "https://www.amardipelevators.com";

export default function ServicePage({ service }) {
  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Services", item: `${SITE_URL}/services/${service.id}` },
  ]);

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords.join(", ")} />
        <link rel="canonical" href={`${SITE_URL}/services/${service.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main className="bg-[#fafafa] text-neutral-900">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="mb-6 text-sm text-black/50">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <span className="mx-2">/</span>
              <span>Services</span>
              <span className="mx-2">/</span>
              <span className="font-semibold text-red-600">{service.name}</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                  {service.name}
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
                  {service.shortDesc}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
                  >
                    Request A Quote
                  </button>
                  <a
                    href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, "")}`}
                    className="rounded-full border border-black/10 px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <div className="relative h-[280px] overflow-hidden rounded-[40px] border border-neutral-200 shadow-[0_30px_100px_rgba(0,0,0,0.08)] md:h-[380px]">
                <Image
                  src={service.image}
                  alt={`${service.name} — Amardip Elevators`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GEO Content */}
        <section className="px-6 pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-neutral-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              {service.name} in Kadapa &amp; Andhra Pradesh
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-neutral-600">
              {service.geoContent.intro}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-neutral-200 bg-[#fafafa] p-8">
                <h3 className="mb-4 text-xl font-bold text-red-600">
                  Why Choose Our {service.name}?
                </h3>
                <ul className="space-y-3">
                  {service.geoContent.whyChooseUs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="font-bold text-red-600">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-[#fafafa] p-8">
                <h3 className="mb-4 text-xl font-bold text-red-600">
                  Our Service Delivery Process
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.geoContent.process}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {["Free site assessment & planning", "Custom engineering & design", "Precision installation & safety audits"].map((step, idx) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                        Step {idx + 1}
                      </span>
                      <span className="text-xs text-neutral-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cross-link to other services */}
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <h4 className="mb-4 text-lg font-semibold">Our Elevator Services</h4>
              <div className="flex flex-wrap gap-3">
                {SERVICES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      s.id === service.id
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-red-600 hover:text-red-600"
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-[40px] bg-black p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              Get A Free Consultation For Your {service.name} Project
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Our experts will visit your building site in Kadapa or nearby locations, take measurements, and propose the best solution — free of charge.
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
    paths: SERVICES_DATA.map((service) => ({ params: { serviceId: service.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const service = SERVICES_DATA.find((s) => s.id === params.serviceId);
  if (!service) return { notFound: true };
  return { props: { service } };
}
