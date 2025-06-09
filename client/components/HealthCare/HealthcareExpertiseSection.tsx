"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Hospital,
  BookOpenCheck,
  Repeat2,
  MonitorSmartphone,
  AreaChart,
  Bot,
} from "lucide-react";

const features = [
  {
    title: "Patient engagement",
    description:
      "Chatbots, mobile apps, appointment schedulers, and remote monitoring.",
    icon: <Hospital size={28} className="text-green-400" />,
  },
  {
    title: "Knowledge bases",
    description:
      "Intelligent systems for clinical guidelines, FAQs, and case reviews.",
    icon: <BookOpenCheck size={28} className="text-green-400" />,
  },
  {
    title: "Modernizing legacy apps",
    description: "Replatform aging software with modern architecture and UX.",
    icon: <Repeat2 size={28} className="text-green-400" />,
  },
  {
    title: "Health system integrations",
    description:
      "Connect with EHR, HL7, FHIR, wearable APIs, and hospital CRMs.",
    icon: <MonitorSmartphone size={28} className="text-green-400" />,
  },
  {
    title: "Data modeling & visualization",
    description:
      "Aggregate and visualize outcomes, patient trends, and operations data.",
    icon: <AreaChart size={28} className="text-green-400" />,
  },
  {
    title: "Machine Learning, GenAI",
    description:
      "Predictive diagnostics, triage assistants, and AI-driven symptom checkers.",
    icon: <Bot size={28} className="text-green-400" />,
  },
];

export default function HealthcareExpertiseSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Deep Healthcare Domain Expertise
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-12">
          We combine software excellence with medical domain insight to support
          patients, providers, and institutions.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
            >
              <div className="mb-4 items-center justify-center flex">
                {feature.icon}
              </div>
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
