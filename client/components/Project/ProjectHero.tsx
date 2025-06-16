"use client";

import Link from "next/link";

const ProjectHeroSection = () => {
  return (
    <section className="h-[90vh] bg-[url('/success-hero.png')] bg-center bg-cover bg-no-repeat md:min-h-[70vh]  flex items-center justify-center px-6 md:px-12 text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-panchang font-bold leading-tight">
          Projects that Define Our Craft
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          See how Oplyx transforms ambitious ideas into scalable digital
          products, intuitive designs, and secure cloud solutions.
        </p>
        <Link href="/contact">
          <button className="mt-6 cursor-pointer px-6 py-3 bg-white/80 text-black font-semibold rounded-md hover:bg-white transition">
            Start Your Project
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
