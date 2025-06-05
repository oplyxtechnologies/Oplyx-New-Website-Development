"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  BadgeCheck,
  ShieldCheck,
  Handshake,
  Smile,
  RefreshCcw,
} from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to develop smart, future-ready solutions that evolve with technology and client needs.",
  },
  {
    icon: BadgeCheck,
    title: "Excellence",
    description:
      "From concept to code, we're driven by precision, performance, and professionalism ensuring the highest standards in everything we deliver.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We build trust by being open, responsible, and clear in our communication, timeliness, and decision-making.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We believe the best results come from teamwork. Our clients are creative partners, not just project recipients.",
  },
  {
    icon: Smile,
    title: "Customer-Centric",
    description:
      "Every decision, design, and line of code is made with your growth in mind. Your win is our win.",
  },
  {
    icon: RefreshCcw,
    title: "Adaptability",
    description:
      "We thrive in evolving landscapes, constantly adapting to new technologies, trends, and client expectations with agility and foresight.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="relative bg-[#08121b] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/bg.svg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {coreValues.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="w-full min-h-64 max-w-sm bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/10 transition"
            >
              <span aria-label={title}>
                <Icon className="w-6 h-6 mx-auto mb-4 text-white" />
              </span>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 h-[50vh] justify-center flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Ready to work with a <br /> future-focused digital partner?
          </h3>
          <Link href="/contact">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-medium">
              Let&apos;s Talk →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
