"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyOplyxSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-panchang mb-6"
        >
          More than just a vendor — We’re your product partner
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto"
        >
          We don’t just provide extra hands — we provide heads that align with
          your product strategy. Oplyx embeds into your team, ensuring shared
          ownership and scalable growth.
        </motion.p>
      </div>
    </section>
  );
}
