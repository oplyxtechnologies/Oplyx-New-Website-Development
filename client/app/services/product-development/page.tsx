import ProductDevelopmentHero from "@/components/ProductDevelopnent/ProductDevelopmentHero";
import ProductTestimonial from "../../../components/ProductDevelopnent/ProductTestimonial";
import Image from "next/image";
import ProductDifferentiator from "@/components/ProductDevelopnent/ProductDifferentiator";
import ProductProcess from "@/components/ProductDevelopnent/Productprocess";
import ProductSkillsGrid from "@/components/ProductDevelopnent/ProductSkillsGrid";
import WhyChooseProductOplyx from "@/components/ProductDevelopnent/WhyChooseProductOplyx";
import ProductCaseStudies from "@/components/ProductDevelopnent/ProductCaseStudies";
import ProductFinalCTA from "@/components/ProductDevelopnent/ProductFinalCTA";

export default function productDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-t from-[#0b1b38] from-0% to-[#542525]/0 to-10% ">
      <ProductDevelopmentHero />
      <ProductTestimonial />
      <ProductDifferentiator />
      <ProductProcess />
      <ProductSkillsGrid />
      <WhyChooseProductOplyx />
      <ProductCaseStudies />
      <ProductFinalCTA />
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
