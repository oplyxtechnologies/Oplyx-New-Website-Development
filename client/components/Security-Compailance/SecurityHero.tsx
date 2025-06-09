"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SecurityHero = () => {
  return (
    <section className=" h-[86vh] flex text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight font-panchang">
            Your <span className="text-green-400">security</span> is our
            priority.
          </h1>
          <p className="text-white/80 mt-4 max-w-md">
            We follow rigorous security and compliance frameworks to protect
            your data, users, and infrastructure.
          </p>
          <Link href="/press/security">
            <button className="mt-6 cursor-pointer px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
              Read the full compliance report →
            </button>
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center "
        >
          <Image
            src="/security-lock.png" // 🔁 Replace with your actual image path
            alt="Oplyx-Security abstract illustration"
            width={500}
            height={500}
            className="rounded-br-[90px] w-full  object-cover border-10 bg-gradient-to-br from-cyan-200 to-cyan-600 "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityHero;
