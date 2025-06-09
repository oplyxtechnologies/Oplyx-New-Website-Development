"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AwsPartnership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 px-6 md:px-12 bg-[#0c1117] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h3 className="text-sm uppercase tracking-widest text-green-400 font-medium mb-2">
            Your partner in AWS cloud solutions
          </h3>
          <p className="text-lg text-white/80 leading-relaxed">
            We help you plan, optimize, and securely run on the AWS cloud with
            modern infrastructure and governance.
          </p>
        </motion.div>

        {/* AWS Partner Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src="/badges/aws-partner.svg" // Replace with your actual badge image
            alt="AWS Partner"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
