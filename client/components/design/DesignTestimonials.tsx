"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sita Sharma",
    role: "Co-founder, ZenFi",
    text: "Oplyx’s design transformed our brand. Clean, bold, and exactly what our users needed.",
    image: "/testimonials/sita.jpeg", // update with actual path
  },
  {
    name: "Alex M.",
    role: "Product Manager, FloPilot",
    text: "From wireframes to handoff, their UI/UX team nailed every screen.",
    image: "/testimonials/alex.jpeg", // update with actual path
  },
];

const projects = [
  {
    title: "VoltRide",
    description:
      "Modern eBike platform with UI/UX design and battery estimator tool.",
    tag: "UI/UX, Branding",
    image: "/success-stories/voltride.png",
    link: "/success-stories/voltride",
  },
  {
    title: "LushGlow",
    description:
      "Soft, elegant design for a skincare brand with responsive flow.",
    tag: "Branding, Web Design",
    image: "/success-stories/lushglow.png",
    link: "/success-stories/lushglow",
  },
  {
    title: "Chasing Horizon",
    description:
      "Travel booking UI with full brand identity, icons and layouts.",
    tag: "Product Design",
    image: "/success-stories/chasinghorizon.png",
    link: "/success-stories/chasing-horizon",
  },
];

export default function DesignFeedbackAndWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* What Clients Say */}
      <section className="py-24 px-6 md:px-12 text-white bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-panchang font-bold mb-12"
          >
            What Clients Say
          </motion.h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="border min-h-64 border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition h-full flex flex-col justify-between text-left"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      loading="lazy"
                      src={t.image}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full border object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{t.name}</h3>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm italic text-white/80">“{t.text}”</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-custom-pagination mt-6" />
        </div>
      </section>

      {/* Recent Design Work */}
      <section className="py-24 px-6 md:px-12 text-white bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
            Recent Design Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                href={project.link}
                key={project.title}
                className="group hover:opacity-90 transition"
              >
                <div className="rounded-lg overflow-hidden shadow-md border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition">
                  <Image
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-[220px]"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {project.description}
                    </p>
                    <span className="text-xs font-semibold text-white/80">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/success-stories">
            <button className="mt-10 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-medium">
              View More Projects →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
