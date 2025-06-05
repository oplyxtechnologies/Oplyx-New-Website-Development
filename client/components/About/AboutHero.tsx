"use client";

import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative bg-[#08121b] h-[90vh] text-white overflow-hidden">
      {/* Background Image */}
      <div className="inset-0 -z-40">
        <Image
          src="/about-bg.svg" // Make sure this path is correct in /public
          alt="Background"
          fill
          priority
          className="object-cover opacity-5 object-center"
        />
      </div>
      <div className="inset-0 -z-10">
        <Image
          src="/bg.svg" // Make sure this path is correct in /public
          alt="Background"
          fill
          priority
          className="object-cover opacity-100 object-center"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 ">
          Empowering Your Digital Transformation
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mb-4">
          We&apos;re a team of designers, developers, and strategists building
          tailored digital experiences that help businesses grow and thrive.
        </p>
        <p className="text-sm text-white/50">
          Delivering innovation, quality, and impact — one project at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
