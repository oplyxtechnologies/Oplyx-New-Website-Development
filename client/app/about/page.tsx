import AboutHero from "@/components/About/AboutHero";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import MissionSection from "@/components/About/VisionMissionSection";

export default function About() {
  return (
    <div className="bg-[#020208]  ">
      <AboutHero />
      <MissionSection />
      <CoreValuesSection />
    </div>
  );
}
