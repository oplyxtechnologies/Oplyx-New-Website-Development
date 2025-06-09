"use client";

import Image from "next/image";

const FellowshipIntroSection = () => {
  return (
    <section className="relative bg-[#08121b] text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <div className="relative w-[372] h-full md:h-96 rounded-lg overflow-hidden">
          <Image
            loading="lazy"
            src="/fellowship-cover.jpg" // Replace with actual image
            alt="Oplyx- Fellowship"
            width={1000}
            height={1000}
            className="object-center absolute  rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What is the Oplyx <br className="hidden md:block" /> Fellowship?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            The Oplyx Fellowship is a paid opportunity designed for students,
            recent graduates, and career switchers who want to dive into
            real-world tech projects, sharpen their skills, and grow under the
            guidance of experienced mentors.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Whether you&apos;re into coding, UI/UX, product thinking, or digital
            strategy — we&apos;ll help you bridge the gap between theory and
            practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FellowshipIntroSection;
