import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import PartnerMarquee from "@/components/sections/home/PartnerMarquee";
import Stats from "@/components/sections/home/Stats";
import Capabilities from "@/components/sections/home/Capabilities";
import WorkPreview from "@/components/sections/home/WorkPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "GrowWithDigital | Websites that rank. SEO that brings real leads.",
  description:
    "GrowWithDigital builds fast, modern websites and combines them with proven SEO strategies so your business can be discovered, trusted, and chosen online.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerMarquee />
      <Stats />
      <Capabilities />
      <WorkPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
