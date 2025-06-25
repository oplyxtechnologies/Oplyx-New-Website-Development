"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "VoltRide E-bike Launch Platform",
    description:
      "Built a product-focused website with custom battery estimator and comparison tools.",
    tag: "E-commerce Development",
    image: "/success-stories/voltride.png",
    link: "/success-stories/voltride",
  },
  {
    title: "LushGlow Ecommerce Website",
    description:
      "A soft, elegant e-commerce design for Lush Glow with smooth flow and mobile-first experience.",
    tag: "E-commerce Development",
    image: "/success-stories/lushglow.png",
    link: "/success-stories/lushglow",
  },
  {
    title: "Chasing Horizon Website",
    description:
      "A Flight Booking, Hotels and Vehicles Renting System integrated with payment method with mobile responsive.",
    tag: "Flight Booking",
    image: "/success-stories/chasinghorizon.png",
    link: "/success-stories/chasing-horizon",
  },
];

const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base">
              Handpicked case studies showing our impact
            </p>
          </div>
          <Link href="/success-stories">
            <button className="border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
              Explore More
            </button>
          </Link>
        </div>

        {/* Projects */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                href={project.link}
                className="group hover:opacity-90 transition block"
              >
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-[250px]"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {project.description}
                </p>
                <span className="text-xs font-semibold text-white/80">
                  {project.tag}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
