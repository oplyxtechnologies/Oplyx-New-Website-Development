"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ServerCog, BarChart2, Shuffle, Cloud } from "lucide-react";

const categories = [
  {
    title: "Infrastructure",
    icon: <ServerCog size={20} />,
    tools: ["Terraform", "Ansible", "Helm", "Kubernetes", "Docker"],
  },
  {
    title: "Observability",
    icon: <BarChart2 size={20} />,
    tools: ["Prometheus", "Grafana", "Datadog", "New Relic"],
  },
  {
    title: "CI/CD",
    icon: <Shuffle size={20} />,
    tools: ["GitHub Actions", "GitLab CI/CD", "CircleCI", "Jenkins"],
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud size={20} />,
    tools: ["AWS", "GCP", "Azure"],
  },
];

export default function DevOpsToolsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12 text-center">
          Tools & Technologies We Trust
        </h2>
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-10 bg-white/10 p-4 rounded-xl"
        >
          {/* Tabs Navigation */}
          <div className="md:w-1/4 space-y-3">
            {categories.map((cat, index) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm transition ${
                  index === activeTab
                    ? "bg-white/10 py-7 text-white font-semibold"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:w-3/4 bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">
              {categories[activeTab].title}
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
              {categories[activeTab].tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
