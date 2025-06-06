"use client";

import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useMemo } from "react";

interface BlogDataType {
  title: string;
  description: string;
  content: string;
}

export default function PreviewPage() {
  const searchParams = useSearchParams();

  const blogData: BlogDataType = useMemo(() => {
    try {
      return JSON.parse(searchParams.get("data") || "{}");
    } catch (error) {
      console.error("Failed to parse blog data:", error);
      return { title: "", description: "", content: "" };
    }
  }, [searchParams]);

  return (
    <div className="text-white bg-[#08121b] px-6 md:px-12 py-24 min-h-screen font-sans">
      <div className="max-w-3xl lg:max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {blogData.title || "Untitled Blog"}
          </h1>
          <p className="text-lg mt-4 text-white/70">
            {blogData.description || "No description provided."}
          </p>
        </div>

        <article className="prose prose-invert prose-lg text-[#b3b3b3] max-w-none">
          <ReactMarkdown>
            {blogData.content || "No content available."}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
