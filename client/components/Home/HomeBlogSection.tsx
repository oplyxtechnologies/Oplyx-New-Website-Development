"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlogPost {
  title: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Minimalist UI: Why Less Really Is More",
    category: "Design",
    slug: "/blog/minimalist-ui",
  },
  {
    title: "Choosing the Right Tech Stack for Your Startup",
    category: "Development",
    slug: "/blog/tech-stack-startup",
  },
  {
    title: "How Smart Branding Builds Lasting Businesses",
    category: "Strategy",
    slug: "/blog/branding-lasting-business",
  },
];

const HomeBlogSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Insights & Innovation
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12">
          Tailored digital services to help your business grow.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-white/10 rounded-lg p-6 text-left bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <span className="inline-block text-xs px-3 py-1 mb-4 bg-white text-black rounded-full font-medium">
                {post.category}
              </span>

              <h3 className="text-lg font-semibold leading-snug mb-6">
                {post.title}
              </h3>

              <Link
                href={post.slug}
                className="text-sm text-white hover:underline flex items-center gap-1"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        <Link href="/blog">
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-medium">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeBlogSection;
