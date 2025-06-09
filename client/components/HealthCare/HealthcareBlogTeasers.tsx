"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    title: "Why Patient UX is the Heart of Any Health App",
    slug: "/blog/patient-ux-health-app",
  },
  {
    title: "What ChatGPT Means for Clinical Platforms",
    slug: "/blog/chatgpt-clinical-platforms",
  },
  {
    title: "Building HIPAA-Compliant Cloud Systems",
    slug: "/blog/hipaa-cloud-systems",
  },
  {
    title: "Navigating the US Healthcare Data Maze",
    slug: "/blog/healthcare-data-maze",
  },
];

export default function HealthcareBlogTeasers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold">
          We Speak Fluent Digital Health
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 px- gap-6 max-w-7xl mx-auto"
      >
        {blogPosts.map((post, idx) => (
          <Link
            key={idx}
            href={post.slug}
            className="bg-white/5 relative  border min-h-36 border-white/10 backdrop-blur-sm p-6 rounded-lg text-left hover:bg-white/10 transition block"
          >
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <span className="text-sm absolute text-green-400 bottom-5">
              Read More →
            </span>
          </Link>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          href="/blog?category=healthcare"
          className="inline-block text-green-400 font-medium hover:underline"
        >
          View More Insights →
        </Link>
      </div>
    </section>
  );
}
