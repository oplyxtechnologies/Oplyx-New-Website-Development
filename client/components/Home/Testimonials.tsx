"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ravi K.",
    location: "Kathmandu",
    text: "Working with Oplyx was a game-changer. They delivered a stunning website and branding that truly reflects our vision.",
    rating: 5,
    image: "/testimonials/ravi.png",
  },
  {
    name: "Elena M.",
    location: "Berlin",
    text: "Their UI/UX design transformed our app’s experience. Great communication and flawless delivery.",
    rating: 5,
    image: "/testimonials/elena.png",
  },
  {
    name: "James T.",
    location: "New York",
    text: "We needed a fast MVP. Oplyx delivered early and exceeded expectations.",
    rating: 5,
    image: "/testimonials/james.png",
  },
  {
    name: "Nisha G.",
    location: "London",
    text: "Reliable, creative, and highly skilled team. Oplyx elevated our e-commerce game!",
    rating: 5,
    image: "/testimonials/nisha.png",
  },
  {
    name: "Daniel P.",
    location: "Sydney",
    text: "Seamless project from start to finish. Definitely partnering with Oplyx again.",
    rating: 5,
    image: "/testimonials/daniel.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#08121b] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition h-full flex flex-col justify-between">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {testimonial.name}
                </h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
