// app/components/GenAiHero.tsx

import Link from "next/link";

export default function AIDataHero() {
  return (
    <section className="relative min-h-screen  text-white flex items-center justify-center px-6">
      {/* Subtle background visual placeholder (can be replaced with SVG or canvas) */}
      <div className="absolute inset-0 bg-[url('/overlay.svg')] bg-cover blur-xl opacity-40 z-0" />

      <div className="z-10 text-center max-w-5xl">
        <p className="mb-5 inline-block bg-white/30 text-white/70 rounded-full px-6 py-2 text-sm font-medium">
          AI and Data
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Fuel smarter growth with AI-powered, data-driven solutions.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Transform your business with intelligent systems that turn raw data
          into actionable insights. At Oplyx, we blend data engineering, machine
          learning, and cloud automation to help you scale faster and make
          smarter decisions.
        </p>
        <Link href="/contact">
          <button className="cursor-pointer inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
            Book Free Consultation
          </button>
        </Link>
      </div>
    </section>
  );
}
