"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "MERN Stack Development",
    description:
      "Master MongoDB, Express.js, React, and Node.js with hands-on projects. Build scalable full-stack applications and APIs.",
    image: "/courses/mern.jpg", // ✅ Replace with your image path
    link: "/courses/mern-stack",
  },
  {
    title: "Graphics Design Fundamentals",
    description:
      "Learn Photoshop, Illustrator, and Figma. Create stunning visual assets, social media posts, and branding kits.",
    image: "/courses/graphicsdesign.jpg", // ✅ Replace with your image path
    link: "/courses/graphics-design",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Courses
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Upgrade your skills with our most popular hands-on courses taught by
          industry experts.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                <p className="text-white/70 mb-4">{course.description}</p>
                <Link href={course.link}>
                  <button className="px-5 py-3 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
