import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import PartnerMarquee from "@/components/sections/home/PartnerMarquee";
import Stats from "@/components/sections/home/Stats";
import Capabilities from "@/components/sections/home/Capabilities";
import Offerings from "@/components/sections/home/Offerings";
import WorkPreview from "@/components/sections/home/WorkPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Home - Studio",
  description: "We design and build digital products. A creative studio focused on crafting meaningful digital experiences.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerMarquee />
      <Stats />
      <Capabilities />
      <Offerings />
      <WorkPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
