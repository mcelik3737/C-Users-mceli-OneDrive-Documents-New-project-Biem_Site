import React from "react";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import ServiceStrip from "@/components/home/ServiceStrip";
import SolutionCards from "@/components/home/SolutionCards";
import WhyBiem from "@/components/home/WhyBiem";
import SectorCards from "@/components/home/SectorCards";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ProjectCards from "@/components/home/ProjectCards";
import PartnerBrandSection from "@/components/home/PartnerBrandSection";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Telsiz, Tünel Haberleşme ve Acil Durum Haberleşme Çözümleri"
        description="BİEM Teknoloji Elektronik; Hytera telsiz sistemleri, raylı sistem haberleşmesi, RF repeater/BDA, leaky feeder, tünel haberleşme ve acil durum haberleşme çözümleri sunar. İstanbul Ataşehir."
        canonical="/"
        keywords="BİEM Teknoloji, BİEM Elektronik, telsiz haberleşme, raylı sistem haberleşme, DAS, RF kapsama, Hytera telsiz, RF repeater, BDA, leaky feeder, tünel haberleşme, maden haberleşme, tünel telsiz, acil durum haberleşme, afet haberleşme, acil durum telsiz, yeraltı haberleşme, DMR telsiz, TETRA telsiz, PoC bas-konuş, telsiz sistemleri İstanbul, haberleşme çözümleri, Motorola telsiz, Kenwood telsiz, Icom telsiz, Sepura TETRA, Airbus TETRA, Damm TETRA, Cobham TETRA, Codan telsiz, Barrett telsiz, Entel telsiz, EF Johnson telsiz, Tait telsiz, Simoco telsiz, leaky feeder kablo, Commscope DAS, Andrew RF, RFS RF, Kathrein anten, İstanbul Ataşehir telsiz"
      />
      <HeroSection />
      <ServiceStrip />
      <SolutionCards />
      <WhyBiem />
      <SectorCards />
      <ProcessTimeline />
      <ProjectCards />
      <PartnerBrandSection />
      <CTASection />
    </>
  );
}
