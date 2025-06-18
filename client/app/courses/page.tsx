import CourseEnquiryCTA from "@/components/course/CourseEnquiryCTA";
import CourseFAQSection from "@/components/course/CourseFAQSection";
import CourseFilterSection from "@/components/course/CourseFilterList";
import HeroCourse from "@/components/course/CourseHero";
import FeaturedCourses from "@/components/course/FeaturedCourses";
import HowItWorks from "@/components/course/HowItWorks";

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
