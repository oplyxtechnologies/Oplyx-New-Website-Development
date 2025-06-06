"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  LexicalComposer,
  InitialConfigType,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, $getRoot } from "lexical";
import Image from "next/image";

type BlogPost = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  content: string;
  image: string;
};

const initialEditorConfig: InitialConfigType = {
  namespace: "BlogEditor",
  theme: {
    paragraph: "mb-2 text-sm text-white",
  },
  onError: (error: Error) => {
    console.error("Lexical error:", error);
  },
};

export default function BlogForm() {
  const [blog, setBlog] = useState<BlogPost>({
    title: "",
    category: "",
    tags: [],
    description: "",
    content: "",
    image: "",
  });

  const [tagInput, setTagInput] = useState("");

  const handleContentChange = (editorState: EditorState) => {
    editorState.read(() => {
      const content = $getRoot().getTextContent();
      setBlog((prev) => ({ ...prev, content }));
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // Replace
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", // Replace
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    if (data.secure_url) {
      setBlog((prev) => ({ ...prev, image: data.secure_url }));
    }
  };

  const addTag = () => {
    if (tagInput && !blog.tags.includes(tagInput)) {
      setBlog((prev) => ({ ...prev, tags: [...prev.tags, tagInput] }));
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    console.log("Publishing blog:", blog);
    // Your blog save logic goes here (API call or local DB)
  };

  return (
    <div className="bg-[#0c1117] text-white p-6 rounded shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>

      <Input
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="mb-4"
      />

      <Textarea
        placeholder="Short Description"
        value={blog.description}
        onChange={(e) => setBlog({ ...blog, description: e.target.value })}
        className="mb-4"
      />

      <Input
        placeholder="Category"
        value={blog.category}
        onChange={(e) => setBlog({ ...blog, category: e.target.value })}
        className="mb-4"
      />

      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="Enter tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={addTag}>Add Tag</Button>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-white/10 px-2 py-1 rounded text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <Input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {blog.image && (
        <div className="mb-4">
          <Image
            src={blog.image}
            alt="Uploaded"
            width={400}
            height={250}
            className="rounded"
          />
        </div>
      )}

      <div className="border border-white/20 rounded p-4 mb-6">
        <LexicalComposer initialConfig={initialEditorConfig}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[150px] outline-none text-white" />
            }
            placeholder={
              <p className="text-white/40">Write your blog content here...</p>
            }
            ErrorBoundary={({ children }) => <>{children}</>}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={handleContentChange} />
        </LexicalComposer>
      </div>

      <Button
        onClick={handleSubmit}
        className="bg-white text-black hover:bg-gray-200"
      >
        Publish Blog
      </Button>
    </div>
  );
}
