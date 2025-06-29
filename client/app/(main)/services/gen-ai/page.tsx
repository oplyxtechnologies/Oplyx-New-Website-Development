import GenAiHero from "@/components/Gen-ai/GenAiHero";
import Image from "next/image";
import GenAiWhySection from "@/components/Gen-ai/GenAiWhySection";
import GenAIUseCase from "@/components/Gen-ai/GenAIUseCase";
import GenAiToolsSection from "@/components/Gen-ai/GenAiToolsSection";
import GenAiBenefitsSection from "@/components/Gen-ai/GenAiBusinessBenifits";
import GenAiIntegrateSection from "@/components/Gen-ai/GenAiIntegrateSection";
import GenAiCTASection from "@/components/Gen-ai/GenAiCTASection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Gen AI Services",
  description:
    "Explore Oplyx's Gen AI services, offering advanced AI solutions for businesses. Learn about our use cases, tools, and benefits of integrating AI into your operations.",
};

export default function GenAiPage() {
  return (
    <div className="relative bg-gradient-to-t from-[#0b1b38] from-0% to-[#542525]/0 to-10% ">
      <GenAiHero />
      <GenAiWhySection />
      <GenAIUseCase />
      <GenAiToolsSection />
      <GenAiBenefitsSection />
      <div className="flex flex-wrap  justify-center items-center max-w-9xl mx-auto">
        <GenAiIntegrateSection />
        <GenAiCTASection />
      </div>
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
      {/* Other sections go here */}
    </div>
  );
}
