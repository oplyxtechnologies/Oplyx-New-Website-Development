"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CloudUpload, BarChart2, ShieldCheck, Server } from "lucide-react";

const values = [
  {
    title: "Expert-led Cloud Migration",
    description: "Migrate legacy workloads without losing control.",
    icon: <CloudUpload size={26} className="text-green-400" />,
  },
  {
    title: "Cost Monitoring & FinOps",
    description: "Cut down on cloud waste with precision spend visibility.",
    icon: <BarChart2 size={26} className="text-green-400" />,
  },
  {
    title: "DevSecOps-first Mindset",
    description: "Bake in security at every layer of delivery.",
    icon: <ShieldCheck size={26} className="text-green-400" />,
  },
  {
    title: "High Availability Infrastructure",
    description: "Architected for scale, resilience, and performance.",
    icon: <Server size={26} className="text-green-400" />,
  },
];

export default function CloudValuePropositions() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gradient-to-b from-[#0c1117] from-15% to-[#0b1b26] to-95% text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mx-auto max-w-3xl font-panchang font-bold mb-12">
          Cloudy, with a chance of enhanced performance
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
