"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Ravi K.",
    location: "Kathmandu",
    text: "Working with Oplyx was a game-changer for our startup. They delivered a stunning website and branding that truly reflects our vision.",
    rating: 5,
    image: "/testimonials/ravi.png",
  },
  {
    name: "Elena M.",
    location: "Berlin",
    text: "Their UI/UX design transformed our apps user experience. Clear communication, on-time delivery, and real attention to detail.",
    rating: 5,
    image: "/testimonials/elena.png",
  },
  {
    name: "James T.",
    location: "New York",
    text: "We needed a fast MVP. Oplyx not only delivered early but exceeded expectations. Highly recommend them for any product development work.",
    rating: 5,
    image: "/testimonials/james.png",
  },
];
const TestimonialsSection = () => {
  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="border border-white/10 rounded-lg p-6 text-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-300 mb-2 italic">
                “{testimonial.text}”
              </p>
              <p className="text-sm text-gray-400 mb-2">
                {testimonial.location}
              </p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40 hover:bg-white transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
