"use client";

import Link from "next/link";
import {
  Zap,
  Boxes,
  UserCog,
  PenTool,
  AlignLeft,
  CloudCog,
  ActivitySquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Generative AI",
    description:
      "Build transformative user experiences with cutting-edge GenAI solutions.",
    icon: <Zap className="text-green-500" size={28} />,
    href: "/services/gen-ai",
  },
  {
    title: "Product Development",
    description:
      "From idea to launch, we develop scalable and user-first digital products.",
    icon: <Boxes size={28} />,
    href: "/services/product-development",
  },
  {
    title: "Staff Augmentation",
    description:
      "Extend your team with top-tier developers, designers, and strategists.",
    icon: <UserCog size={28} />,
    href: "/services/staff-augmentation",
  },
  {
    title: "Design",
    description:
      "Modern and functional UI/UX designs that elevate engagement and usability.",
    icon: <PenTool size={28} />,
    href: "/services/design",
  },
  {
    title: "AI & Data",
    description:
      "Data strategy, analytics, and machine learning pipelines for insights and automation.",
    icon: <AlignLeft size={28} />,
    href: "/services/ai-data",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Infrastructure automation and CI/CD pipelines on AWS and other clouds.",
    icon: <CloudCog size={28} />,
    href: "/services/devops-cloud",
  },
  {
    title: "Healthcare Technology",
    description:
      "Innovative digital solutions built for clinics, patients, and health platforms.",
    icon: <ActivitySquare size={28} />,
    href: "/services/healthcare",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ExpertiseSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Services that drive innovation and scalability.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Link href={service.href} className="group block">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300 group-hover:scale-[1.02]">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
