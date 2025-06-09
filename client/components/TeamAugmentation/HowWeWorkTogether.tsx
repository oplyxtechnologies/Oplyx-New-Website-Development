"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Users, SearchCheck } from "lucide-react";

const modes = [
  {
    title: "Full Speed",
    description:
      "Dedicated team with sprint cycles, retros, and demos built for fast growth.",
    icon: <Zap size={28} className="text-green-400" />,
  },
  {
    title: "Staff Augmentation",
    description:
      "Plug-and-play specialists who integrate directly into your team and tools.",
    icon: <Users size={28} className="text-green-400" />,
  },
  {
    title: "Product Discovery",
    description:
      "Need clarity first? We support you through research, wireframing, and MVP scoping.",
    icon: <SearchCheck size={28} className="text-green-400" />,
  },
];

export default function HowWeWorkTogether() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Column */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
            Flexible engagement. Structured execution.
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Whether you need a sprint-ready team, on-demand talent, or clarity
            through discovery, Oplyx adapts to your workflow while delivering
            real outcomes.
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-3">{mode.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{mode.title}</h3>
              <p className="text-sm text-gray-300">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
