"use client";

import {
  Leaf,
  Lightbulb,
  Building2,
  Users,
  Sparkles,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Grow With Purpose",
    description:
      "We support continuous learning, mentorship, and challenges that shape long-term careers.",
  },
  {
    icon: Lightbulb,
    title: "Work That Matters",
    description:
      "You'll build meaningful digital products for startups and bold brands around the world.",
  },
  {
    icon: Building2,
    title: "Hybrid & Flexible",
    description:
      "Work where you're most productive: office, home, or hybrid. We focus on results, not location.",
  },
  {
    icon: Users,
    title: "People-First Culture",
    description:
      "We value collaboration, creativity, and making sure every voice is heard.",
  },
  {
    icon: Sparkles,
    title: "Benefits That Support You",
    description:
      "Competitive pay, career development perks, flexible hours, and a team that feels like family.",
  },
  {
    icon: Star,
    title: "Impactful Work",
    description:
      "Join a team where your contributions directly influence products, growth, and customer experience.",
  },
];

const WhyWorkSection = () => {
  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12 tracking-wide text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-16">
          Why Work at Oplyx
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {reasons.map(({ icon: Icon, title, description }, idx) => (
            <div key={idx} className="max-w-xs">
              <Icon className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;
