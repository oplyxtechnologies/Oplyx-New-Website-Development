"use client";

import Image from "next/image";
import Link from "next/link";

const FellowshipHero = () => {
  return (
    <section className="relative bg-[#08121b] text-white py-32 px-6 md:px-12 overflow-hidden min-h-[90vh]">
      {/* Background Image */}
      <div className=" inset-0 -z-10">
        <Image
          src="/bg.svg" // ✅ Make sure this is the actual background path
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 tracking-wide items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Start Your Tech Journey with <br />
            Oplyx Fellowship
          </h1>
          <p className="text-base md:text-md text-white/80 mb-6 max-w-md">
            An 8-week hands-on learning experience for aspiring developers,
            designers, and digital creators mentored by the Oplyx team.
          </p>
          <Link href="/careers#open-roles">
            <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition font-medium">
              Apply Now →
            </button>
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/careerhero.svg" // ✅ Replace with your visual asset
            alt="Careers Illustration"
            width={400}
            height={400}
            className="w-full  h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FellowshipHero;
