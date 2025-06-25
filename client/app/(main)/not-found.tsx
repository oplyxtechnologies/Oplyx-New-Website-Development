// app/not-found.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-[#0a0d12] text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Subtle Illustration */}
      <div className="relative mb-8">
        <svg
          className="w-48 h-48 mx-auto animate-pulse opacity-80"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="#7feccf" opacity="0.05" />
          <path
            d="M60 100 L90 130 L140 70"
            stroke="#7feccf"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="text-7xl md:text-9xl font-extrabold text-[#7feccf] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-white/70 mb-8 max-w-xl">
        It looks like you&apos;re lost in the digital wilderness. Don&apos;t
        worry — we&apos;ll guide you back to safe ground.
      </p>

      <Link href="/">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#7feccf] text-black rounded-md font-semibold hover:bg-[#65ddbc] transition">
          <ArrowLeft className="w-4 h-4" />
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
