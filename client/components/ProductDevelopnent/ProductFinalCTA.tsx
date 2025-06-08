"use client";

import Link from "next/link";

export default function ProductFinalCTA() {
  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
          Ready to Build With Oplyx?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Let’s co-create something powerful.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
              Book a Free Discovery Call
            </button>
          </Link>
          <Link href="/contact?type=strategist">
            <button className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition">
              Talk to a Product Strategist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
