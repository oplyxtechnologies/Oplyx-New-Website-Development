"use client";

import { useState } from "react";
import BlogCard from "@/components/Blog/BlogCard";
import BlogTabs from "@/components/Blog/BlogTabs";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? blogPosts
      : blogPosts.filter((b) => b.category === selected);

  return (
    <div className="bg-[#08121b] text-white min-h-screen px-6 md:px-12 py-20">
      <BlogTabs selected={selected} setSelected={setSelected} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
