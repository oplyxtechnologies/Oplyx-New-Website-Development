"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DesignCTASection() {
  return (
    <section className="relative text-white py-24 px-6 md:px-12">
      {/* Optional: Add a subtle gradient or texture effect */}
      <div className="absolute inset-0 bg-[url('/overlay.svg')] bg-cover opacity-10 blur-lg z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-panchang font-bold mb-6"
        >
          Let&apos;s co-create digital experiences that convert.
        </motion.h2>
        <p className="text-white/70 text-base md:text-lg mb-10">
          Talk to our design team and bring your next product vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact?type=design-team">
            <button className="px-6 py-3 cursor-pointer rounded bg-white text-black font-medium hover:bg-gray-200 transition">
              Talk to Our Designers
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer rounded border border-white text-white hover:bg-white hover:text-black transition">
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
