"use client";

import { useState } from "react";
import blogs from "@/lib/data/blogs.json";

const categories = [
  "All",
  "Business",
  "IT",
  "Nepal",
  "Digital",
  "Strategy",
  "Tech",
];

export default function BlogTabsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts =
    activeTab === "All"
      ? blogs
      : blogs.filter((b) =>
          b.tags
            .map((tag) => tag.toLowerCase())
            .includes(activeTab.toLowerCase())
        );

  return (
    <section className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm md:text-base font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1 rounded-md transition ${
                activeTab === cat
                  ? "text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
            >
              <span className="inline-block text-xs px-2 py-1 bg-white text-black font-medium rounded mb-3">
                {post.tags[0]}
              </span>
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {post.title}
              </h3>
              <h3 className="text-xs text-white/60 mb-3 leading-snug">
                {post.excerpt}
              </h3>
              <span className="text-sm text-white/70">Read More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
