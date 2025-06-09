"use client";

import Link from "next/link";

export default function DevOpsCtaSection() {
  return (
    <section className="py-24 px-6 md:px-12  text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-white/80 mb-10 text-base md:text-lg">
          Let’s build your infrastructure together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
              Book Consultation
            </button>
          </Link>
          <Link href="/contact?topic=devops">
            <button className="px-6 py-3 cursor-pointer border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition">
              Talk to DevOps Lead
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
