"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSectionHealthcare = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1F4F67]/50 to-transparent text-white px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-panchang font-bold leading-tight">
            Building Healthier Digital Futures
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mx-auto md:mx-0">
            We help health innovators bring secure, accessible, and intelligent
            solutions to life — whether you&apos;re scaling a telehealth
            platform or modernizing EHR systems.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center gap-2 hover:bg-white hover:text-black px-5 py-3 rounded-md font-panchang font-semibold text-sm md:text-base border-2 border-white text-white transition-all duration-200">
              Book a Free Consultation <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>

        {/* Image Content */}
        <div className="hidden w-full md:w-1/2 md:flex justify-center">
          <Image
            src="/healthcare/hero.png" // Replace with actual image path
            alt="Oplyx Healthcare professionals using digital tools"
            width={520}
            height={520}
            className=" h-[500px] object-cover w-auto rounded-2xl aspect-2/3"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHealthcare;
