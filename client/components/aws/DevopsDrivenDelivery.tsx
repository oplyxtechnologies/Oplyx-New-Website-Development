"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, GitBranch, ServerCrash, AlertCircle } from "lucide-react";

const features = [
  {
    icon: <GitBranch size={26} className="text-green-400" />,
    title: "GitOps workflows",
    description: "Reusable modules and version-controlled deployments.",
  },
  {
    icon: <Code2 size={26} className="text-green-400" />,
    title: "Blue/Green & Canary Deployments",
    description: "Progressive rollout strategies that reduce deployment risk.",
  },
  {
    icon: <ServerCrash size={26} className="text-green-400" />,
    title: "SRE Principles",
    description:
      "Built-in reliability, uptime targets, and failover strategies.",
  },
  {
    icon: <AlertCircle size={26} className="text-green-400" />,
    title: "Real-time Alerts & Rollbacks",
    description: "Rapid feedback and recovery with observability baked in.",
  },
];

export default function DevopsDrivenDelivery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12"
        ref={ref}
      >
        {/* Left Column: Text */}
        <motion.div
          className="md:w-5/12"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
            DevOps-Driven Delivery
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            We embed DevOps at the heart of every AWS project — ensuring
            automation, reliability, and speed at every stage.
          </p>
        </motion.div>

        {/* Right Column: Cards */}
        <motion.div
          className="md:w-7/12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
