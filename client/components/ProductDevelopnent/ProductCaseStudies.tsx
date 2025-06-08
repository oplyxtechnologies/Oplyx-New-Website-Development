"use client";

import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "VoltRide E-bike Launch Platform",
    description:
      "Built a product-focused site with custom battery estimator and product comparison features.",
    tag: "E-Commerce",
    image: "/projects/voltride.png",
    link: "/projects/voltride",
  },
  {
    title: "LushGlow Ecommerce Website",
    description:
      "Soft, elegant e-commerce experience with a mobile-first design and seamless checkout flow.",
    tag: "Beauty & Wellness",
    image: "/projects/lushglow.png",
    link: "/projects/lushglow",
  },
  {
    title: "Chasing Horizon Booking System",
    description:
      "Flight booking, hotel & vehicle rental system with integrated payments and responsive UI.",
    tag: "Travel Platform",
    image: "/projects/chasinghorizon.png",
    link: "/projects/chasing-horizon",
  },
];

export default function ProductCaseStudies() {
  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-2">
            Featured Product Case Studies
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Real-world builds that delivered real-world results.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="group border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-white/70 uppercase tracking-wide">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="text-sm text-white hover:underline"
                >
                  Explore Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
