import { Metadata } from "next";
import BlogpageComponent from "@/components/Blogs/BlogpageComponent";

export const metadata: Metadata = {
  title: "Oplyx Blogs",
  description: "Explore our latest blogs on business, technology, and more.",
};

export default function BlogPage() {
  return <BlogpageComponent />;
}
