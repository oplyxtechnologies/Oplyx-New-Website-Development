"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aashish Pokhrel",
    role: "Founder, Edufy LMS",
    image: "/testimonials/aashish.jpeg",
    text: "Oplyx helped us go from idea to MVP faster than we expected. Their attention to detail and end-user focus was refreshing.",
  },
  {
    name: "Shreya Thapa",
    role: "CTO, HealthNest",
    image: "/testimonials/shreya.jpeg",
    text: "The Oplyx team delivered an incredible web platform for us. Their product dev process was lean, fast, and collaborative.",
  },
  {
    name: "David Kim",
    role: "Co-Founder, NexaCommerce",
    image: "/testimonials/david.jpeg",
    text: "We partnered with Oplyx for our MVP and they nailed it! Very impressed with the design and scalability.",
  },
];

export default function ProductTestimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="border min-h-64 border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition h-full flex flex-col justify-between text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full border"
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
  );
}
