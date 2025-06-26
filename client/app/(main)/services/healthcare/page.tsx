import HealthcareBlogTeasers from "@/components/HealthCare/HealthcareBlogTeasers";
import HealthcareCaseStudy from "@/components/HealthCare/HealthcareCaseStudy";
import HealthcareExpertiseSection from "@/components/HealthCare/HealthcareExpertiseSection";
import HealthcareGreenCTA from "@/components/HealthCare/HealthcareGreenCTA";
import HeroSectionHealthcare from "@/components/HealthCare/HealthcareHero";
import HealthcarePlatformsSection from "@/components/HealthCare/HealthcarePlatformsSection";
import HealthCareTestimonial from "@/components/HealthCare/HealthCareTestimonial";
import StatsSectionHealthcare from "@/components/HealthCare/StatsSectionHealthcare";
import FinalCtaSection from "@/components/TeamAugmentation/FinalCtaSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Healthcare Services",
  description:
    "Explore Oplyx's healthcare services, including healthcare platforms, expertise, case studies, and testimonials. Learn how we enhance healthcare delivery.",
};

export default function HealthCare() {
  return (
    <div className="bg-gradient-to-t  from-[#1F4F67]/50 to-transparent to-90%">
      <HeroSectionHealthcare />
      <StatsSectionHealthcare />
      <HealthCareTestimonial />
      <HealthcarePlatformsSection />
      <HealthcareExpertiseSection />
      <HealthcareCaseStudy />
      <HealthcareBlogTeasers />
      <HealthcareGreenCTA />
      <FinalCtaSection />
    </div>
  );
}
