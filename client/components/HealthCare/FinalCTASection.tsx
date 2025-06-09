"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FinalCTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0c1117] text-white text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-6">
          Ready to Get Started?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link href="/contact">
            <button className="px-6 py-3 rounded-md bg-white text-black hover:bg-gray-200 transition font-semibold text-sm md:text-base">
              Build with Us
            </button>
          </Link>

          <Link href="/careers">
            <button className="px-6 py-3 rounded-md border border-white hover:bg-white hover:text-black transition font-semibold text-sm md:text-base">
              Join Our Network
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
