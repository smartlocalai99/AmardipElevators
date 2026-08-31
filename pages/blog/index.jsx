import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOGS_DATA } from "@/data/seoConfig";

const SITE_URL = "https://www.amardipelevators.com";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Elevator Insights &amp; Safety Guides | Amardip Elevators Blog</title>
        <meta
          name="description"
          content="Lift safety tips, home elevator installation costs, maintenance checklists, and comparisons — expert guides by Amardip Elevators."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
      </Head>

      <main className="bg-[#fafafa] text-neutral-900">
        <Navbar />

        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Amardip Elevators <span className="text-red-600">Blog</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-600">
                Vertical mobility advice, cost breakdowns, safety guidelines, and engineering tips to help you choose the right lift.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOGS_DATA.map((blog) => (
                <article
                  key={blog.id}
                  className="flex flex-col justify-between rounded-[32px] border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition hover:border-red-600/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3 text-xs text-neutral-500">
                      <span>{blog.date}</span>
                      <span>&bull;</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-snug">
                      <Link href={`/blog/${blog.id}`} className="transition hover:text-red-600">
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                      {blog.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 transition-all hover:gap-2"
                  >
                    Read Full Article ➔
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
