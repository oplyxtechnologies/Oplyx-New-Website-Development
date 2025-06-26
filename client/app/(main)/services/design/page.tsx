import DesignHero from "@/components/design/DeisgnHero";
import DesignCTASection from "@/components/design/DesignCTASection";
import DesignProcessTimeline from "@/components/design/DesignProcessTimeline";
import DesignServicesSection from "@/components/design/DesignServicesSection";
import DesignTestimonials from "@/components/design/DesignTestimonials";
import WhyChooseOplyxForDesign from "@/components/design/WhyChooseOplyxForDesign";
import WhyGreatDesignMatters from "@/components/design/WhyGreateDesignsMatters";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Design Services",
  description:
    "Explore Oplyx's design services, including UI/UX design, branding, and product design. Learn how we create exceptional user experiences.",
};

export default function designpage() {
  return (
    <div className="relative bg-gradient-to-t from-[#0b1b38] from-0% to-[#542525]/0 to-10% ">
      <DesignHero />
      <WhyGreatDesignMatters />
      <DesignServicesSection />
      <DesignProcessTimeline />
      <WhyChooseOplyxForDesign />
      <DesignTestimonials />
      <DesignCTASection />
      <div>
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
