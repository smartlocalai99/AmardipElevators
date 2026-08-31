import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openQuoteModal } from "@/components/QuoteModalProvider";
import { BLOGS_DATA, BUSINESS_DETAILS, getBreadcrumbSchema } from "@/data/seoConfig";

const SITE_URL = "https://www.amardipelevators.com";

function parseBoldText(text) {
  const regex = /\*\*(.*?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
    parts.push(
      <strong key={match.index} className="font-bold text-black">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts.length > 0 ? parts : text;
}

function renderMarkdown(text) {
  return text.split("\n").map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={idx} className="h-4" />;

    if (trimmed.startsWith("####")) {
      return (
        <h4 key={idx} className="mb-3 mt-6 text-xl font-semibold text-black">
          {trimmed.replace("####", "").trim()}
        </h4>
      );
    }

    if (trimmed.startsWith("###")) {
      return (
        <h3 key={idx} className="mb-4 mt-8 border-l-4 border-red-600 pl-3 text-2xl font-bold text-black">
          {trimmed.replace("###", "").trim()}
        </h3>
      );
    }

    if (/^[*-]\s/.test(trimmed)) {
      const itemText = trimmed.substring(1).trim();
      return (
        <div key={idx} className="mb-2 flex gap-2 pl-1 text-neutral-700">
          <span className="mt-1 text-xs text-red-600">●</span>
          <span>{parseBoldText(itemText)}</span>
        </div>
      );
    }

    const orderedMatch = trimmed.match(/^(\d+)\.\s(.*)/);
    if (orderedMatch) {
      const [, number, itemText] = orderedMatch;
      return (
        <div key={idx} className="mb-2 flex gap-3 text-neutral-700">
          <span className="font-bold text-red-600">{number}.</span>
          <span>{parseBoldText(itemText)}</span>
        </div>
      );
    }

    return (
      <p key={idx} className="mb-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        {parseBoldText(trimmed)}
      </p>
    );
  });
}

export default function BlogDetailPage({ blog }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Blog", item: `${SITE_URL}/blog` },
    { name: blog.title, item: `${SITE_URL}/blog/${blog.id}` },
  ]);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/blog/${blog.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main className="bg-[#fafafa] text-neutral-900">
        <Navbar />

        <article className="mx-auto max-w-4xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-red-600 transition hover:gap-2"
          >
            ← Back to Blog list
          </Link>

          <header className="mb-10 border-b border-neutral-200 pb-8">
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              <span>Published on <strong className="text-black">{blog.date}</strong></span>
              <span>&bull;</span>
              <span>By <strong className="text-black">{blog.author}</strong></span>
            </div>
          </header>

          <section className="article-body">{renderMarkdown(blog.content)}</section>

          <div className="mt-16 rounded-[32px] border border-neutral-200 bg-white p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:p-12">
            <h3 className="mb-4 text-2xl font-bold">Planning To Install A Lift In Kadapa?</h3>
            <p className="mx-auto mb-6 max-w-xl text-sm text-neutral-600">
              Get in touch with Amardip Elevators today. Our engineering experts will guide you to select the best configuration with custom cabin finishes.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, "")}`}
                className="w-full rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
              >
                Call {BUSINESS_DETAILS.phone}
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full rounded-full border border-black/10 px-8 py-3 font-semibold text-black transition hover:bg-black hover:text-white sm:w-auto"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: BLOGS_DATA.map((blog) => ({ params: { blogId: blog.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const blog = BLOGS_DATA.find((b) => b.id === params.blogId);
  if (!blog) return { notFound: true };
  return { props: { blog } };
}
