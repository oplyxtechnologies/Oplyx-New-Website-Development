import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0d12] text-white flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold mb-4 tracking-tight text-[#7feccf]">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you&apso;re looking for doesn&appos;t exist or has been
          moved.
        </p>

        <Link href="/">
          <button className="px-6 py-3 bg-[#7feccf] text-black rounded hover:bg-[#65ddbc] transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
