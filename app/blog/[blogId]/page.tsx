import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BLOGS_DATA, getBreadcrumbSchema } from "@/app/data/seoConfig";

interface PageProps {
  params: Promise<{ blogId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { blogId } = await params;
  const blog = BLOGS_DATA.find((b) => b.id === blogId);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://amardipelevators.com/blog/${blog.id}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: `https://amardipelevators.com/blog/${blog.id}`,
      siteName: "Amardeep Elevators",
      images: [
        {
          url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop",
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
      authors: [blog.author],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { blogId } = await params;
  const blog = BLOGS_DATA.find((b) => b.id === blogId);

  if (!blog) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://amardipelevators.com" },
    { name: "Blog", item: "https://amardipelevators.com/blog" },
    { name: blog.title, item: `https://amardipelevators.com/blog/${blog.id}` },
  ]);

  // A simple markdown-to-JSX renderer helper
  const renderMarkdown = (text: string) => {
    return text.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;

      if (trimmed.startsWith("###")) {
        return (
          <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4 border-l-4 border-red-600 pl-3">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }

      if (trimmed.startsWith("####")) {
        return (
          <h4 key={idx} className="text-xl font-semibold text-white mt-6 mb-3">
            {trimmed.replace("####", "").trim()}
          </h4>
        );
      }

      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        const itemText = trimmed.substring(1).trim();
        // Replace markdown bold tags in list item
        return (
          <li key={idx} className="list-disc list-inside text-neutral-300 mb-2 pl-4">
            {parseBoldText(itemText)}
          </li>
        );
      }

      // Default paragraph
      return (
        <p key={idx} className="text-neutral-300 leading-relaxed mb-4 text-base md:text-lg">
          {parseBoldText(trimmed)}
        </p>
      );
    });
  };

  const parseBoldText = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="text-white font-bold">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-16">
        <article className="px-6 py-16 md:px-10 lg:px-20 max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="text-red-500 hover:text-red-400 text-sm font-semibold inline-flex items-center gap-1 mb-6 transition"
          >
            ← Back to Blog list
          </Link>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-neutral-800">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
              <span>Published on: <strong className="text-white">{blog.date}</strong></span>
              <span>•</span>
              <span>By: <strong className="text-white">{blog.author}</strong></span>
            </div>
          </header>

          {/* Article Content */}
          <section className="article-body select-text">
            {renderMarkdown(blog.content)}
          </section>

          {/* Bottom Call to Action for Conversion */}
          <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Planning to install a lift in Kadapa?
            </h3>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
              Get in touch with Amardeep Elevators today. Our engineering experts will guide you to select the best configuration with custom cabin finishes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+919247932351"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 w-full sm:w-auto"
              >
                Call +91 9247932351
              </a>
              <Link
                href="/quote"
                className="bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-white font-bold py-3 px-8 rounded-full transition w-full sm:w-auto"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
