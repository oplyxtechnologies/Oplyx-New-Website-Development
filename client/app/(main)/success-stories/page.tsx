import ClientQuotes from "@/components/Project/ClientQuotes";
import ClosingCTA from "@/components/Project/ClosingCTA";
import FeaturedCaseStudies from "@/components/Project/FeaturedCaseStudies";
import ProcessHighlight from "@/components/Project/ProcessHighlight";
import ProjectHeroSection from "@/components/Project/ProjectHero";
import ProjectIntroParagraph from "@/components/Project/ProjectIntro";
import StatsBlock from "@/components/Project/StatsBlock";

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
