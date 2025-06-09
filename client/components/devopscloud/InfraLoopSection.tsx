"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Repeat, RefreshCcw, MonitorDot, TrendingUp } from "lucide-react";

const cycle = [
  {
    title: "Continuous Integration",
    icon: <Repeat size={24} className="text-green-400" />,
  },
  {
    title: "Continuous Deployment",
    icon: <RefreshCcw size={24} className="text-green-400" />,
  },
  {
    title: "Monitoring & Feedback",
    icon: <MonitorDot size={24} className="text-green-400" />,
  },
  {
    title: "Scalability & Optimization",
    icon: <TrendingUp size={24} className="text-green-400" />,
  },
];

export default function InfraLoopSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-[#0c1117] text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-16">
          Cloud Infrastructure, Simplified
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {cycle.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm w-64 text-center hover:bg-white/10 transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
