"use client";

import { ShieldCheck, Brain, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Industry-Aware AI",
    description: "We build contextual AI—not generic GPT wrappers.",
    icon: <Brain size={28} className="text-green-400" />,
  },
  {
    title: "Secure by Design",
    description:
      "Privacy-first pipelines with enterprise-grade infrastructure.",
    icon: <ShieldCheck size={28} className="text-green-400" />,
  },
  {
    title: "ROI-Focused Outcomes",
    description: "Our goal: production-ready, value-generating AI—not demos.",
    icon: <BarChart3 size={28} className="text-green-400" />,
  },
];

export default function WhyChooseOplyxAi() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang max-w-4xl mx-auto font-bold mb-12">
          Why choose us to master your data?
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
