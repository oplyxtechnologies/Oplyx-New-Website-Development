"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-t from-[#09a71c]/40 to-transparent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-panchang font-bold mb-4"
        >
          Ready to Build Your Next Big Thing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 max-w-xl mx-auto mb-8 text-lg"
        >
          Let&apos;s turn your idea into a project that grows your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Let&apos;s Talk
            </button>
          </Link>
          <Link href="/services">
            <button className="px-6 py-3 cursor-pointer border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">
              See Our Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
