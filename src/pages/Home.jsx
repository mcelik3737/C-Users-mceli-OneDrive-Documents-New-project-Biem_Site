import React from "react";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import ServiceStrip from "@/components/home/ServiceStrip";
import SolutionCards from "@/components/home/SolutionCards";
import WhyBiem from "@/components/home/WhyBiem";
import SectorCards from "@/components/home/SectorCards";
import ProjectCards from "@/components/home/ProjectCards";
import PartnerBrandSection from "@/components/home/PartnerBrandSection";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Kritik Haberleşme ve RF Mühendisliği"
        description="BİEM Teknoloji Elektronik; telsiz haberleşme, DMR/TETRA/PoC, raylı sistem, tünel ve maden haberleşmesi, DAS/RF kapsama, RF Repeater/BDA ve leaky feeder projelerinde mühendislik hizmetleri sunar."
        canonical="/"
      />
      <HeroSection />
      <ServiceStrip />
      <SolutionCards />
      <WhyBiem />
      <SectorCards />
      <ProjectCards />
      <PartnerBrandSection />
      <CTASection />
    </>
  );
}
