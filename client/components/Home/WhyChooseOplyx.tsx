"use client";

import { DollarSign, Timer, TrendingUp, Code2 } from "lucide-react";

const benefits = [
  {
    title: "Affordable Pricing",
    description:
      "We offer premium solutions at rates that make sense for growing businesses.",
    icon: <DollarSign size={26} className="text-white" />,
  },
  {
    title: "Fast Delivery",
    description: "Rapid project turnaround without compromising on quality.",
    icon: <Timer size={26} className="text-white" />,
  },
  {
    title: "Custom Scalable Solutions",
    description: "Tailored strategies built to grow with your business.",
    icon: <TrendingUp size={26} className="text-white" />,
  },
  {
    title: "High-Quality Code",
    description:
      "Clean, modern codebase following best practices and scalability.",
    icon: <Code2 size={26} className="text-white" />,
  },
];

const WhyChooseOplyx = () => {
  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Why Choose Oplyx?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Tailored digital services to help your business grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 text-left hover:bg-white/10 transition duration-300"
            >
              <div className="mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOplyx;
