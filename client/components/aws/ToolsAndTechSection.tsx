"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ServerCog, MonitorCheck, GitBranch, CloudRain } from "lucide-react";

const tools = [
  {
    title: "Infrastructure",
    icon: <ServerCog size={22} className="text-green-400" />,
    stack: ["Terraform", "Ansible", "Helm", "Kubernetes", "Docker"],
  },
  {
    title: "Monitoring",
    icon: <MonitorCheck size={22} className="text-green-400" />,
    stack: ["Prometheus", "Grafana", "Datadog", "New Relic"],
  },
  {
    title: "CI/CD",
    icon: <GitBranch size={22} className="text-green-400" />,
    stack: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
  },
  {
    title: "Cloud",
    icon: <CloudRain size={22} className="text-green-400" />,
    stack: ["AWS (EC2, ECS, Lambda, RDS, CloudFront, S3, etc.)"],
  },
];

export default function ToolsAndTechSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Tools & Technologies We Trust
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-12">
          Built with battle-tested, cloud-native tools
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
        >
          {tools.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                {category.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
