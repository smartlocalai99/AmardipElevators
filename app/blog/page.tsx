import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BLOGS_DATA } from "@/app/data/seoConfig";

export const metadata = {
  title: "Elevator Insights & Safety Guides | Amardeep Elevators Blog",
  description: "Stay updated with lift safety tips, home elevator installation costs, maintenance checklists, and comparisons. Expert guides by Amardeep Elevators.",
  keywords: "elevator blog, lift installation costs, home lifts guide, passenger lift vs capsule lift",
  alternates: {
    canonical: "https://amardipelevators.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-16">
        <section className="px-6 py-16 md:px-10 lg:px-20 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white uppercase">
              Amardeep Elevators <span className="text-red-500">Blog</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Read vertical mobility advice, cost analyses, safety parameters, and expert engineering tips to choose the right lift for your premises.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS_DATA.map((blog) => (
              <article
                key={blog.id}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between hover:border-red-600/50 hover:shadow-2xl transition duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>By {blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-red-500 transition duration-300">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-red-500 hover:text-red-400 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  Read Full Article ➔
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
