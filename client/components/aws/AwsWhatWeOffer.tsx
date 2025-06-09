"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cloud,
  Repeat2,
  ShieldCheck,
  BarChart3,
  DollarSign,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Cloud Architecture & Setup",
    description:
      "Design and deploy scalable infrastructure using best-practice AWS blueprints.",
    icon: <Cloud size={28} className="text-green-400" />,
  },
  {
    title: "CI/CD Implementation",
    description:
      "Automate deployments with GitHub Actions, GitLab CI/CD, Jenkins, or CircleCI.",
    icon: <Repeat2 size={28} className="text-green-400" />,
  },
  {
    title: "Security & Compliance",
    description:
      "IAM, encryption, audits — baked into every layer from day one.",
    icon: <ShieldCheck size={28} className="text-green-400" />,
  },
  {
    title: "Monitoring & Observability",
    description:
      "Set up dashboards and alerts using CloudWatch, Grafana, Prometheus, or Datadog.",
    icon: <BarChart3 size={28} className="text-green-400" />,
  },
  {
    title: "FinOps & Cost Optimization",
    description:
      "Get real-time visibility and control over your AWS spend with tagging, budgets, and analysis.",
    icon: <DollarSign size={28} className="text-green-400" />,
  },
  {
    title: "Migration & Modernization",
    description:
      "Replatform your apps with zero-downtime migrations and high availability setups.",
    icon: <Rocket size={28} className="text-green-400" />,
  },
];

export default function AwsWhatWeOffer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          Full-Stack AWS Cloud Services
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
