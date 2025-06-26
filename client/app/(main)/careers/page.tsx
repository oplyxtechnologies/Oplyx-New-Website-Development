import CareersHero from "@/components/Careers/CareersHero";
import CareersOpenings from "@/components/Careers/CareersOpenings";
import WhyWorkSection from "@/components/Careers/WhyWorkSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers at Oplyx",
  description: "Join our team and help shape the future of technology.",
};

export default function Careers() {
  return (
    <div className="bg-[#020208]  ">
      <CareersHero />
      <WhyWorkSection />
      <CareersOpenings />
    </div>
  );
}
