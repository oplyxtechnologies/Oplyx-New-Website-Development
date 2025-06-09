"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function FinalCtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-gradient-to-t from-[#165f52] to-transparent px-6 md:px-12 text-white ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-panchang font-bold mb-4">
          Scale smarter with Oplyx.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Let&apos;s co-create a team that builds products — and momentum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-green-500 hover:bg-green-600 text-black font-semibold rounded transition">
              Book Discovery Call
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black font-semibold border border-white/20 hover:bg-gray-100 transition rounded">
              Talk to Our Team Lead
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
