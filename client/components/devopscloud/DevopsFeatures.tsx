"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LoaderCircle, Radar, ShieldCheck, ServerCog } from "lucide-react";

const features = [
  {
    title: "CI/CD Pipelines",
    description: "Automate and accelerate deployment with fail-safe pipelines.",
    icon: <LoaderCircle size={26} className="text-green-400" />,
  },
  {
    title: "Monitoring & Observability",
    description: "Stay ahead of issues with intelligent alerting and logs.",
    icon: <Radar size={26} className="text-green-400" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Governance-first approach with identity, encryption, and auditing.",
    icon: <ShieldCheck size={26} className="text-green-400" />,
  },
  {
    title: "SRE (Site Reliability Engineering)",
    description: "Maintain 99.99% uptime while building resilient systems.",
    icon: <ServerCog size={26} className="text-green-400" />,
  },
];

export default function DevOpsFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#0c1117] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          There’s an Ops for that
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
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
