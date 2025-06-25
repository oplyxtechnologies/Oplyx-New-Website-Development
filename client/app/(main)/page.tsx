import ExpertiseSection from "@/components/Home/ExpertiseSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Hero from "@/components/Home/Hero";
import HomeBlogSection from "@/components/Home/HomeBlogSection";
import NewsletterSection from "@/components/Home/NewsletterSection";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseOplyx from "@/components/Home/WhyChooseOplyx";

export default function Home() {
  return (
    <div className="bg-[#020208]  ">
      <Hero />
      <ExpertiseSection />
      <WhyChooseOplyx />
      <FeaturedProjects />
      <Testimonials />
      <HomeBlogSection />
      <NewsletterSection />
    </div>
  );
}
