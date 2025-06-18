"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Type definition
type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

// ✅ Filter categories
const categories = ["All", "Design", "Development", "Marketing"];

// ✅ Courses data
const courses: Course[] = [
  // {
  //   id: 1,
  //   title: "UI/UX Design Diploma Course",
  //   category: "Design",
  //   description: "Master wireframes, user flows & design systems.",
  //   image: "/courses/uiux.jpg",
  //   href: "/courses/uiux",
  // },
  // {
  //   id: 2,
  //   title: "Frontend Diploma Course",
  //   category: "Development",
  //   description: "Build production-grade apps with React & Next.js.",
  //   image: "/courses/frontend.jpg",
  //   href: "/courses/frontend",
  // },
  {
    id: 3,
    title: "MERN Stack",
    category: "Development",
    description: "Hands-on projects with full-stack deployment.",
    image: "/courses/mern.jpg",
    href: "/courses/mern-stack",
  },
  // {
  //   id: 4,
  //   title: "Digital Marketing Diploma Mastery Course",
  //   category: "Marketing",
  //   description: "Learn SEO, Ads, and social campaigns that convert.",
  //   image: "/courses/digitalmarketing.jpg",
  //   href: "/courses/digitalmarketing",
  // },
  {
    id: 5,
    title: "Graphics Design Diploma Mastery Course",
    category: "Design",
    description: "Learn graphic design, branding, and social media content.",
    image: "/courses/graphicsdesign.jpg",
    href: "/courses/graphics-design",
  },
];

export default function CourseFilterSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section
      id="courselist"
      className="py-20 px-6 md:px-12 bg-[#0a0d12] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* ✅ Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === category
                  ? "bg-[#7feccf] text-black border-[#7feccf]"
                  : "bg-transparent text-white/70 border-white/20 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[#7feccf] transition">
                  {course.title}
                </h3>
                <p className="text-sm text-white/70">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
