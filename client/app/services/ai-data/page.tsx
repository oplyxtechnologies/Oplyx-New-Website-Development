import AiCtaSection from "@/components/AiData/AIDataCTA";
import AIDataHero from "@/components/AiData/AIDataHero";
import AiDataTestimonial from "@/components/AiData/AiDataTestimonial";
import AiDifferentiators from "@/components/AiData/AiDifferentiators";
import AiHumanSuperpowers from "@/components/AiData/AIHumanSuperPower";
import AiToolsGridSection from "@/components/AiData/AITollGridSection";
import WhyChooseOplyxAi from "@/components/AiData/WhyChooseOplyxAI";
import Image from "next/image";

export default function AIDatepage() {
  return (
    <div className="relative bg-gradient-to-t from-[#0b1b38] from-0% to-[#542525]/0 to-10% ">
      <AIDataHero />
      <AiHumanSuperpowers />
      <AiDataTestimonial />
      <AiDifferentiators />
      <WhyChooseOplyxAi />
      <AiToolsGridSection />
      <AiCtaSection />

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
