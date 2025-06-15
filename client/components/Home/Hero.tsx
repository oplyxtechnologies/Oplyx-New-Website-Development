"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/hero.png')] bg-cover bg-no-repeat min-h-screen flex items-center justify-center text-white px-6">
      <div className="max-w-4xl text-center space-y-6 backdrop-blur-2xl rounded-lg p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Crafting Impactful <br /> Digital Experiences
        </h1>
        <p className="text-lg sm:text-xl font-medium text-white/80">
          Designing digital experiences that inspire and deliver results.
        </p>

        <Link href="/contact">
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Build With Us</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
