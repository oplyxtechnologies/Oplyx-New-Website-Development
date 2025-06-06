import BlogForm from "@/components/Blog/Dashboard/BlogForm";

export default function BlogDashboardPage() {
  return (
    <main className="p-6 bg-[#0c1117] min-h-screen">
      <h1 className="text-white text-2xl font-semibold mb-4">
        Create New Blog
      </h1>
      <BlogForm />
    </main>
  );
}
