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
  "Design",
  "Health Care",
];

// ✅ How many blogs per page
const POSTS_PER_PAGE = 6;

export default function BlogTabsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by tab
  const filteredPosts =
    activeTab === "All"
      ? blogs
      : blogs.filter((b) =>
          b.tags
            .map((tag) => tag.toLowerCase())
            .includes(activeTab.toLowerCase())
        );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Handle tab change — reset to page 1
  const handleTabClick = (cat: string) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm md:text-base font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabClick(cat)}
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
          {paginatedPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition"
            >
              {/* ✅ Thumbnail */}
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-48 object-cover mb-4"
              />

              <div className="px-6 pb-6">
                <span className="inline-block text-xs px-2 py-1 bg-white text-black font-medium rounded mb-3">
                  {post.tags[0]}
                </span>
                <h3 className="text-lg font-semibold mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-white/60 mb-3 leading-snug">
                  {post.excerpt}
                </p>
                <span className="text-sm text-white/70">Read More →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-white/20 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded ${
                    currentPage === i + 1
                      ? "bg-white text-black"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-white/20 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
