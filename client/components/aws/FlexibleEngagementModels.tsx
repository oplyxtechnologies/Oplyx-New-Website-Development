"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Rocket, Wrench } from "lucide-react";

const engagementModels = [
  {
    icon: <Rocket size={26} className="text-green-400" />,
    title: "Project-based Cloud Builds",
    description: "End-to-end execution with a defined scope and timeline.",
  },
  {
    icon: <Users size={26} className="text-green-400" />,
    title: "Dedicated Cloud Teams",
    description: "Long-term partnerships with a full-cycle engineering squad.",
  },
  {
    icon: <Wrench size={26} className="text-green-400" />,
    title: "Supplemental DevOps Engineers",
    description: "Plug-and-play experts to accelerate your internal team.",
  },
];

export default function FlexibleEngagementModels() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-12"
        ref={ref}
      >
        {/* Left: Cards */}
        <motion.div
          className="md:w-7/12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {engagementModels.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="md:w-5/12"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Whether you&apos;re just getting started with AWS or looking to
            optimize at scale — we work the way you do:
          </p>
        </motion.div>
      </div>
    </section>
  );
}
