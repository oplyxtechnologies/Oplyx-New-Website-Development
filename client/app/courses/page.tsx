import CourseEnquiryCTA from "@/components/course/CourseEnquiryCTA";
import CourseFAQSection from "@/components/course/CourseFAQSection";
import CourseFilterSection from "@/components/course/CourseFilterList";
import HeroCourse from "@/components/course/CourseHero";
import FeaturedCourses from "@/components/course/FeaturedCourses";
import HowItWorks from "@/components/course/HowItWorks";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Courses",
  description:
    "Explore our range of courses designed to enhance your skills and knowledge.",
};

export default function CoursePage() {
  return (
    <div className="bg-[#0a0d12]">
      <HeroCourse />
      <CourseFilterSection />
      <FeaturedCourses />
      <HowItWorks />
      <CourseFAQSection />
      <CourseEnquiryCTA />
    </div>
  );
}
