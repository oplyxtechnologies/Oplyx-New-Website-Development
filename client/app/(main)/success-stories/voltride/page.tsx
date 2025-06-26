import VoltRideComponent from "@/components/SuccessStories/VoltRideComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "VoltRide Case Study",
  description:
    "Explore how Oplyx built VoltRide, a smart e-bike platform that enhances urban mobility with custom battery estimators and seamless e-commerce.",
};

export default function VoltRideCaseStudy() {
  return <VoltRideComponent />;
}
