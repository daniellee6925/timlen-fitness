import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Fitness Blog | Bill Timlen, CPT | Hoboken, NJ",
  description:
    "Read fitness tips and training advice from Bill Timlen, CPT. William Timlen shares expert guidance on exercise, nutrition, weight loss, and strength training in Hoboken, NJ.",
  canonicalPath: "/blog",
  domain: "timlenfitness.com",
});

const posts = [
  {
    slug: "5-exercises-for-beginners",
    title: "5 Essential Exercises for Beginners by Bill Timlen",
    excerpt:
      "Bill Timlen breaks down the five foundational exercises that every beginner should master. William Timlen shares his step-by-step guide to building a solid fitness base.",
    date: "February 10, 2026",
  },
  {
    slug: "nutrition-tips-for-muscle-building",
    title: "Nutrition Tips for Muscle Building from Coach Timlen",
    excerpt:
      "William Timlen reveals the nutrition strategies that fuel muscle growth. Bill Timlen explains how to optimize your protein intake, meal timing, and macros for maximum gains.",
    date: "January 22, 2026",
  },
  {
    slug: "why-you-need-a-personal-trainer",
    title: "Why You Need a Personal Trainer: Bill Timlen Explains",
    excerpt:
      "Coach Timlen discusses the benefits of working with a certified personal trainer. Bill Timlen explains how expert guidance accelerates results and prevents injury.",
    date: "December 15, 2025",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-[#111111] py-16 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
            Fitness Blog by Bill Timlen
          </h1>
          <p className="text-[#39FF14] text-lg font-semibold uppercase">
            Training Tips &amp; Nutrition Advice from Coach Timlen
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-800 pb-8">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#39FF14] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#39FF14] font-semibold hover:underline uppercase"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
