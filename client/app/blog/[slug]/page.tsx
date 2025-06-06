// app/blog/[slug]/page.tsx
import { blogPosts } from "@/data/blog";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function BlogDetailPage({ params }: Props) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="bg-[#08121b] text-white px-6 md:px-12 py-24 font-sans">
      <div className="max-w-3xl lg:max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-white/50 uppercase tracking-widest">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2  text-white">
            {blog.title}
          </h1>
          <p className="text-white/70 mt-4 text-lg">{blog.description}</p>
        </div>

        <article className="prose prose-invert text-[#b3b3b3] text-xl leading-7 ">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
