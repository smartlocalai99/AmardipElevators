import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AEO_FAQS, getFAQSchema } from "@/app/data/seoConfig";

export const metadata = {
  title: "Elevator FAQs | Ask Amardeep Elevators Kadapa",
  description: "Get answers to frequently asked questions about lift installations, costs, home elevators, AMC charges, and maintenance services in Kadapa and Andhra Pradesh.",
  keywords: "elevator FAQs, lift cost Kadapa, home elevator maintenance, AMC charges lifts",
  alternates: {
    canonical: "https://amardipelevators.com/faqs",
  },
};

export default function FAQsPage() {
  const faqSchema = getFAQSchema(AEO_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-16">
        <section className="px-6 py-16 md:px-10 lg:px-20 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Clear, direct answers to common questions about elevator installations, safety standards, maintenance schedules, and AMC pricing structures in Kadapa.
            </p>
          </div>

          {/* Accordion List for AEO */}
          <div className="space-y-6">
            {AEO_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 hover:border-red-600/50 transition-all duration-300 shadow-lg"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                  <span className="text-red-500 font-mono">Q.</span>
                  {faq.question}
                </h2>
                <div className="text-neutral-300 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-red-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-16 bg-neutral-900 border border-neutral-800 p-8 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Have another question?</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Our engineering team is ready to answer any technical, structural, or pricing questions.
            </p>
            <a
              href="tel:+919247932351"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-block"
            >
              Ask an Expert Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
