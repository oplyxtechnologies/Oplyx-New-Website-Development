"use client";

import { Rocket, ShieldCheck, Puzzle } from "lucide-react";

export default function GenAiBenefitsSection() {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      title: "Faster Time-to-Value",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      title: "Enterprise-Grade Security",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-indigo-400" />,
      title: "Seamless API & App Integrations",
    },
  ];

  return (
    <section className="text-white py-20 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-bold mb-12">
          Why Businesses Choose Oplyx GenAI Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 min-h-44 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
