"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MonitorCheck,
  BadgeCheck,
  Lock,
  Network,
  UserCheck,
  Users,
  Cloud,
} from "lucide-react";

const categories = [
  {
    name: "Secure Development Practices",
    icon: <ShieldCheck size={18} />,
    features: [
      {
        icon: <ShieldCheck size={28} />,
        title: "Secure development lifecycle",
        description:
          "Workstation monitoring, secure environments, and vulnerability scans from the start.",
      },
      {
        icon: <MonitorCheck size={28} />,
        title: "Support for resources",
        description:
          "Regular pen tests, encrypted backups, and limited access zones.",
      },
      {
        icon: <BadgeCheck size={28} />,
        title: "Peer security reviews",
        description:
          "All services go through compliance and internal security reviews.",
      },
      {
        icon: <Lock size={28} />,
        title: "Encrypted data",
        description:
          "Data is AES-256 encrypted in transit and at rest to ensure privacy.",
      },
    ],
  },
  {
    name: "Cloud Security",
    icon: <Cloud size={18} />,
    features: [
      {
        icon: <Lock size={28} />,
        title: "Zero trust architecture",
        description:
          "We use zero-trust principles and robust disaster recovery systems.",
      },
      {
        icon: <Network size={28} />,
        title: "Network security",
        description:
          "Physical and cloud-native network protections for data & access policies.",
      },
      {
        icon: <ShieldCheck size={28} />,
        title: "Trust zone",
        description:
          "Isolated cloud environments for each customer with strict boundaries.",
      },
      {
        icon: <UserCheck size={28} />,
        title: "Role-based access",
        description:
          "Access levels defined via user roles with least privilege enforcement.",
      },
    ],
  },
  {
    name: "Secure Personnel",
    icon: <Users size={18} />,
    features: [
      {
        icon: <Lock size={28} />,
        title: "Culture of security",
        description:
          "We instill secure behavior via policy updates and employee training.",
      },
      {
        icon: <Network size={28} />,
        title: "Security Team",
        description:
          "Dedicated security professionals guide standards and prevent breaches.",
      },
      {
        icon: <ShieldCheck size={28} />,
        title: "Background checks",
        description:
          "All staff undergo background screenings and sign strict NDAs.",
      },
      {
        icon: <UserCheck size={28} />,
        title: "Workforce awareness",
        description:
          "Workforce security training is a mandatory, recurring process.",
      },
    ],
  },
];

export default function SecurityTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-2">
            Security is in Our DNA
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We embed security into our development lifecycle — not as an
            afterthought, but a design principle.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/4 space-y-2">
            {categories.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold transition ${
                  idx === activeTab
                    ? "border border-white text-white bg-white/10"
                    : "border border-white/10 hover:bg-white/5 text-white/60"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Feature Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:w-3/4 grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories[activeTab].features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
              >
                <div className="mb-4 text-green-400">{feat.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feat.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
