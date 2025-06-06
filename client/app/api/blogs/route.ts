// app/api/blogs/route.ts

import { connectToDB } from "@/lib/mongoose";
import Blog, { IBlog } from "@/models/Blog";

// Utility to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Collapse multiple hyphens
}

export async function POST(req: Request) {
  await connectToDB();

  try {
    const body: Partial<IBlog> = await req.json();

    // Basic validation
    if (!body.title || !body.description || !body.content || !body.category) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Generate slug if not provided
    const slug = body.slug ? generateSlug(body.slug) : generateSlug(body.title);

    const newBlog = await Blog.create({
      ...body,
      slug,
    });

    return new Response(JSON.stringify(newBlog), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Failed to create blog:", error);
    return new Response("Failed to create blog", { status: 500 });
  }
}
