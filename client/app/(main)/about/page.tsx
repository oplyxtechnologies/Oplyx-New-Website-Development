import AboutHero from "@/components/About/AboutHero";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import MissionSection from "@/components/About/VisionMissionSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Oplyx",
  description: "Learn more about Oplyx, our mission, and core values.",
};

export default function About() {
  return (
    <div className="  ">
      <AboutHero />
      <MissionSection />
      <CoreValuesSection />
      <div>
        {" "}
        <div className=" absolute inset-0 -z-10 ">
          <Image
            src="/bg.svg" // ✅ Make sure this is the actual background path
            alt="Oplyx-Background"
            fill
            priority
            className="object-cover object-center -z-10"
          />
        </div>
      </div>
    </div>
  );
}
