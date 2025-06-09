"use client";

import { BrainCircuit, DatabaseZap, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <BrainCircuit size={28} className="text-green-400" />,
    title: "End-to-End Expertise",
    description:
      "From architecture to deployment, we guide the entire lifecycle.",
  },
  {
    icon: <DatabaseZap size={28} className="text-green-400" />,
    title: "Trained on YOUR Data",
    description:
      "Fine-tuned models built specifically for your use cases—not off-the-shelf experiments.",
  },
  {
    icon: <Send size={28} className="text-green-400" />,
    title: "Seamless Deployment",
    description:
      "Our models are CI/CD ready and cloud-native—ready to ship and scale.",
  },
];

export default function AiDifferentiators() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto font-panchang font-bold mb-12">
          AI that actually works for your business
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
