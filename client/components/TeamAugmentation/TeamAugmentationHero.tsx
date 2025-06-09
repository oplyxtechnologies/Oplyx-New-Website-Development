// app/components/GenAiHero.tsx

import Link from "next/link";

export default function TeamAugmentationHero() {
  return (
    <section className="relative min-h-screen  text-white flex items-center justify-center px-6">
      {/* Subtle background visual placeholder (can be replaced with SVG or canvas) */}
      <div className="absolute inset-0 bg-[url('/overlay.svg')] bg-cover blur-xl opacity-40 z-0" />

      <div className="z-10 text-center max-w-5xl">
        <p className="mb-5 inline-block bg-white/30 text-white/70 rounded-full px-6 py-2 text-sm font-medium">
          Team Augmentation
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          Build your dream team
        </h1>
        <h2 className="text-2xl md:text-3xl  leading-tight mb-6">
          Scaling a digital product or engineering team is tough Oplyx makes it
          effortless.
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Whether you&apos;re launching a new product or enhancing an existing
          platform, Oplyx helps you augment your team with vetted,
          high-performing talent aligned to your goals, culture, and workflows.
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
