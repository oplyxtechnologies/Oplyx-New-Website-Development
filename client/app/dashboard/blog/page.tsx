"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("@/components/Blog/Dashboard/BlogForm"), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading editor...</p>,
});

export default function BlogPage() {
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",
    tags: [] as string[],
    image: "",
    content: "",
  });

  return (
    <main className="min-h-screen bg-[#08121b] px-6 md:px-12 py-20 text-white font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <Suspense fallback={<p className="text-white">Loading form...</p>}>
          <BlogForm blog={blog} setBlog={setBlog} />
        </Suspense>
      </div>
    </main>
  );
}
