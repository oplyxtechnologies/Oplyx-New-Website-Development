"use client";

import Link from "next/link";

export default function GenAiCTASection() {
  return (
    <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Optional: Animated neural background */}
      {/* <div className="absolute inset-0 z-0 opacity-10 bg-[url('/neural-bg.svg')] bg-cover animate-pulse" /> */}

      <div className="relative z-10  max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build with GenAI?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Let&apos;s start your AI journey together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" passHref>
            <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition cursor-pointer">
              Book Free Discovery Call →
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition cursor-pointer">
              Talk to an Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
