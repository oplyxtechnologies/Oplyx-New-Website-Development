"use client";

import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  title: string;
  description: string;
  tag: string;
  href: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "VoltRide — E-Mobility Platform",
    description:
      "An interactive platform for an e-bike company, with a custom battery estimator, comparison tools, and seamless checkout.",
    tag: "Product Development | E-commerce",
    href: "/success-stories/voltride",
    image: "/success-stories/voltride.png", // ✅ Replace with your actual image path
  },
  {
    title: "LushGlow — Beauty E-commerce",
    description:
      "Modern, minimal design for a skincare brand with optimized product pages and a smooth mobile shopping flow.",
    tag: "UI/UX Design | Branding",
    href: "/success-stories/lushglow",
    image: "/success-stories/lushglow.png",
  },
  {
    title: "Chasing Horizon — Travel & Booking",
    description:
      "A comprehensive travel portal integrating flights, hotels, vehicle rentals, and secure payment gateways.",
    tag: "Product Development | API Integration",
    href: "/success-stories/chasing-horizon",
    image: "/success-stories/chasinghorizon.png",
  },
  {
    title: "EduApply — Student Application Platform",
    description:
      "A unified student portal for applying to multiple universities with a single form and integrated tracking.",
    tag: "Product Development | EdTech",
    href: "/success-stories/eduapply",
    image: "/success-stories/eduapply.png",
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12 text-center">
          Featured Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-white/80 mb-4">
                  {project.description}
                </p>
                <span className="text-xs font-medium text-green-400 block mb-4">
                  {project.tag}
                </span>
                <Link
                  href={project.href}
                  className="text-sm font-medium text-white hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
