"use client";

import { Code, Folder, RefreshCw, Clock, Users, Brain } from "lucide-react";

const criteria = [
  {
    icon: Code,
    title: "Tech-Passionate Minds",
    desc: "You are excited about web development, design, or building digital products.",
  },
  {
    icon: Folder,
    title: "Portfolio Builders",
    desc: "You want hands-on experience and projects you can proudly show in your portfolio.",
  },
  {
    icon: RefreshCw,
    title: "Fast Learners & Iterators",
    desc: "You are not afraid to make mistakes, ask for feedback, and grow fast.",
  },

  {
    icon: Clock,
    title: "Time-Flexible Individuals",
    desc: "You can commit 15 to 20 hours/week for 8 weeks and you are ready to show up.",
  },
  {
    icon: Users,
    title: "Team Players",
    desc: "You thrive in collaborative settings and love solving problems with others.",
  },
  {
    icon: Brain,
    title: "Curious Thinkers",
    desc: "You're always exploring new ideas, eager to learn and apply them fast.",
  },
];

const WhoShouldApply = () => {
  return (
    <section className="bg-[#08121b] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Who Should Apply?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <item.icon className="mb-4 text-white" size={24} />
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;
