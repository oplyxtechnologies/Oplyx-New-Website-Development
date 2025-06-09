"use client";

import { ShieldCheck, HeartPulse, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const compliance = [
  {
    icon: <ShieldCheck className="text-green-400" size={32} />,
    title: "SOC 2",
    description:
      "Ensures system-level security, confidentiality, and availability for your app’s infrastructure.",
  },
  {
    icon: <HeartPulse className="text-green-400" size={32} />,
    title: "HIPAA",
    description:
      "We deliver healthcare systems with built-in privacy, data access control, and compliance alignment.",
  },
  {
    icon: <GlobeLock className="text-green-400" size={32} />,
    title: "GDPR & CCPA",
    description:
      "All user data is handled transparently and ethically with opt-in tracking, encryption, and consent management.",
  },
];

const ComplianceFrameworkSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold">
          Oplyx&apos;s Trust & Security Standards
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto mt-4">
          We maintain a high level of security with globally recognized
          attestations, ensuring full compliance across healthcare, finance, and
          cloud solutions.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {compliance.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
          >
            <div className="mb-4 flex ">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComplianceFrameworkSection;
