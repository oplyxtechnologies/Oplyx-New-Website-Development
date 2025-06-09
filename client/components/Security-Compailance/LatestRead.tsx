"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LatestRead = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="text-white px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-4">
          Compliance & Trust — In Practice
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-12">
          Explore how we approach security in the real world.
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl text-left hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Oplyx achieves SOC 2 Type II Certification
          </h3>
          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Our engineering and security teams collaborated to meet global best
            practices.
          </p>
          <Link
            href="/press/security"
            className="text-green-400 text-sm font-medium hover:underline"
          >
            Read More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestRead;
