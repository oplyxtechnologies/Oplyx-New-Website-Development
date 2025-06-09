// components/AiHumanSuperpowers.tsx
"use client";

import { Database, Brain, Settings2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <Database size={28} className="text-green-500" />,
    title: "Data Engineering",
    description:
      "Structure your data pipelines for real-time analytics and insights.",
  },
  {
    icon: <Brain size={28} className="text-green-500" />,
    title: "AI/ML Solutions",
    description:
      "Custom AI models trained on your domain to automate, predict, and personalize.",
  },
  {
    icon: <Settings2 size={28} className="text-green-500" />,
    title: "MLOps",
    description:
      "From model monitoring to CI/CD of ML workflows, we operationalize your intelligence.",
  },
  {
    icon: <ShieldCheck size={28} className="text-green-500" />,
    title: "AI Ethics & Governance",
    description:
      "Ensure responsible AI practices with transparency, compliance, and fairness.",
  },
];

export default function AiHumanSuperpowers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className=" text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto font-panchang font-bold mb-12">
          Built with AI (and human) superpowers
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
