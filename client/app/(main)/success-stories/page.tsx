import ClientQuotes from "@/components/Project/ClientQuotes";
import ClosingCTA from "@/components/Project/ClosingCTA";
import FeaturedCaseStudies from "@/components/Project/FeaturedCaseStudies";
import ProcessHighlight from "@/components/Project/ProcessHighlight";
import ProjectHeroSection from "@/components/Project/ProjectHero";
import ProjectIntroParagraph from "@/components/Project/ProjectIntro";
import StatsBlock from "@/components/Project/StatsBlock";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Project Success Stories",
  description:
    "Explore Oplyx's project success stories, showcasing our expertise in delivering innovative solutions across various industries.",
};

export default function ProjectPage() {
  return (
    <div>
      <ProjectHeroSection />
      <ProjectIntroParagraph />
      <FeaturedCaseStudies />
      <ProcessHighlight />
      <ClientQuotes />
      <StatsBlock />
      <ClosingCTA />
    </div>
  );
}
