"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LexicalEditor from "@/app/dashboard/blog/LexicalEditor";
import ImageUploader from "./ImageUploader";
import Image from "next/image";

type BlogPost = {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  content: string;
  image: string;
};

export default function BlogForm({
  blog,
  setBlog,
}: {
  blog: BlogPost;
  setBlog: React.Dispatch<React.SetStateAction<BlogPost>>;
}) {
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput && !blog.tags.includes(tagInput)) {
      setBlog((prev) => ({ ...prev, tags: [...prev.tags, tagInput] }));
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    console.log("Publishing blog:", blog);
    // Save to DB logic here
  };

  return (
    <div className="bg-[#0c1117] text-white p-6 rounded shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>

      <Input
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBlog({ ...blog, title: e.target.value })
        }
        className="mb-4"
      />

      <Textarea
        placeholder="Short Description"
        value={blog.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setBlog({ ...blog, description: e.target.value })
        }
        className="mb-4"
      />

      <Input
        placeholder="Category"
        value={blog.category}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBlog({ ...blog, category: e.target.value })
        }
        className="mb-4"
      />

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Enter tag"
          value={tagInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTagInput(e.target.value)
          }
        />
        <Button onClick={addTag}>Add Tag</Button>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {blog.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-white/10 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <ImageUploader
        onUpload={(url: string) => setBlog({ ...blog, image: url })}
      />

      {blog.image && (
        <Image
          src={blog.image}
          alt="Blog"
          width={400}
          height={250}
          className="rounded my-4"
        />
      )}

      <LexicalEditor
        onChange={(value: string) => setBlog({ ...blog, content: value })}
      />

      <Button
        onClick={handleSubmit}
        className="mt-6 bg-white text-black hover:bg-gray-200"
      >
        Publish
      </Button>
    </div>
  );
}
