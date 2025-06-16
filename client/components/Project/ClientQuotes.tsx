"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote:
      "Oplyx’s team delivered exactly what we envisioned — and then some. The speed and quality of their work is unmatched.",
    name: "Aashish Pokhrel",
    role: "Founder, Edufy LMS",
  },
  {
    quote:
      "They understood our business, built a stunning platform, and made scaling simple.",
    name: "Nandana Rajendran",
    role: "VP of Digital Transformation, CareLink",
  },
];

export default function ClientQuotes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold">
          What Our Clients Say
        </h2>

        <div ref={ref} className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl italic text-white/80 mb-4">
                “{testimonial.quote}”
              </p>
              <div className="text-sm font-semibold">
                — {testimonial.name}{" "}
                <span className="block text-white/60 font-normal">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
