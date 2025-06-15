"use client";

import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="  text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mission</h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At Oplyx, our mission is to empower businesses by delivering
            innovative, efficient, and scalable digital solutions that not only
            solve problems — but unlock new opportunities for growth. We&apos;re
            driven by a deep commitment to human-centered design, clean
            engineering, and client success. Whether it&apos;s a startup taking
            its first digital leap or a company ready to evolve, we work to
            ensure every product is built with purpose, clarity, and long-term
            value.
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/mission-visual.svg" // Replace with your actual image path
            alt="Oplyx-Mission Illustration"
            width={350}
            height={350}
            className="w-full max-w-sm h-auto"
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="hidden md:flex justify-center md:justify-start">
          <Image
            src="/mission-visual.svg" // Replace with your actual image path
            alt="Oplyx-Mission Illustration"
            width={350}
            height={350}
            className="w-full max-w-sm h-auto"
            priority
          />
        </div>
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Vision</h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We envision Oplyx as a global catalyst for digital transformation —
            a company known for pioneering thoughtful, future-ready technologies
            that reshape how businesses connect, serve, and thrive in a
            digital-first world. Our goal is to bridge strategy, creativity, and
            code into seamless experiences that elevate brands and foster
            lasting impact across industries, borders, and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
