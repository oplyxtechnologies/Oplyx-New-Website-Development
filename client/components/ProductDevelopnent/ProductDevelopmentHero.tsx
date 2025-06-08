// app/components/GenAiHero.tsx

import Link from "next/link";

export default function ProductDevelopmentHero() {
  return (
    <section className="relative min-h-screen  text-white flex items-center justify-center px-6">
      {/* Subtle background visual placeholder (can be replaced with SVG or canvas) */}
      <div className="absolute inset-0 bg-[url('/overlay.svg')] bg-cover blur-xl opacity-40 z-0" />

      <div className="z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Innovation Built to Launch. Reliability Delivered.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          From startups to scale-ups, Oplyx helps you build modern, secure, and
          scalable digital products from concept to launch with unmatched
          design, development, and DevOps expertise.
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
