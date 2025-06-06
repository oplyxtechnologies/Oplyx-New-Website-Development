import CareersHero from "@/components/Careers/CareersHero";
import CareersOpenings from "@/components/Careers/CareersOpenings";
import WhyWorkSection from "@/components/Careers/WhyWorkSection";

export default function Careers() {
  return (
    <div className="bg-[#020208]  ">
      <CareersHero />
      <WhyWorkSection />
      <CareersOpenings />
    </div>
  );
}
