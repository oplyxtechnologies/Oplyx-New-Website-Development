import Link from "next/link";

type Blog = {
  title: string;
  slug: string;
  category: string;
  description: string;
};

export default function BlogCard({ title, slug, category, description }: Blog) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="border border-white/10 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition">
        <span className="bg-white text-black px-2 py-0.5 text-xs rounded mb-4 inline-block">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="mt-4 text-sm text-white font-medium">Read More →</div>
      </div>
    </Link>
  );
}
