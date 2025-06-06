"use client";

import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "Oplyx’s fellowship gave me more than skills — it gave me confidence to work on real products.",
  },
  {
    id: 2,
    text: "Oplyx’s fellowship gave me more than skills — it gave me confidence to work on real products.",
  },
];

const FellowshipFinalSection = () => {
  return (
    <section className="bg-[#08121b] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Past Fellows Testimonials */}
        <h2 className="text-xl md:text-2xl font-semibold mb-8">Past Fellows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm italic text-white/80 backdrop-blur-sm"
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Still Have Questions?
        </h3>
        <p className="mb-6 text-white/70">
          Email us at{" "}
          <a
            href="mailto:fellowship@oplyx.tech"
            className="underline underline-offset-2 hover:text-white"
          >
            fellowship@oplyx.tech
          </a>
        </p>
        <Link href="/contact">
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition font-medium">
            Let&apos;s Talk →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FellowshipFinalSection;
