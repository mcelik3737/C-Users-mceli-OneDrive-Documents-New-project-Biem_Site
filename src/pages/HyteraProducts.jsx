import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import DmrProductGrid from "@/components/hytera/DmrProductGrid";
import DmrSystemGrid from "@/components/hytera/DmrSystemGrid";
import TetraProductGridHytera from "@/components/hytera/TetraProductGrid";
import BdaProductGrid from "@/components/hytera/BdaProductGrid";
import PocProductGrid from "@/components/hytera/PocProductGrid";
import AnalogProductGrid from "@/components/hytera/AnalogProductGrid";
import ExproofProductGrid from "@/components/hytera/ExproofProductGrid";
import BodyCameraProductGrid from "@/components/hytera/BodyCameraProductGrid";
import TetraSystemGrid from "@/components/tetra/TetraSystemGrid";
import { Radio, Repeat, Monitor, Smartphone, ShieldAlert, Settings, ChevronDown } from "lucide-react";

const wirelessImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/d53175a64_image.png";

const productGroups = [
  { icon: Radio, title: "DMR El Telsizleri", text: "Kompakt, dayanıklı ve yüksek performanslı Hytera DMR el telsizleri.", hasProducts: true },
  { icon: Repeat, title: "DMR Sistem", text: "Trunking, Simulcast, XPT, Konvansiyonel Repeater ve Yazılım çözümleri.", hasProducts: true },
  { icon: Radio, title: "TETRA Telsizler", text: "Kritik görev haberleşmesi için yüksek güvenlikli TETRA el telsizleri, mobil telsizler ve ATEX modeller.", hasProducts: true },
  { icon: Settings, title: "TETRA Sistem", text: "Tam entegre TETRA sistem altyapısı ve şebeke çözümleri.", hasProducts: true },
  { icon: ShieldAlert, title: "Ex'li (Exproof) Telsizler", text: "Patlayıcı ve tehlikeli ortamlar için ATEX/IECEx onaylı telsizler.", hasProducts: true },
  { icon: Radio, title: "Analog El Telsizleri", text: "Sağlam ve güvenilir analog VHF/UHF el telsiz çözümleri.", hasProducts: true },
  { icon: Repeat, title: "Çift Yönlü Sinyal Güçlendirici (BDA)", text: "Bina içi ve tünel ortamlarında sinyal güçlendirme sistemleri.", hasProducts: true },
  { icon: Smartphone, title: "PoC Radio", text: "GSM/LTE üzerinden çalışan bas-konuş ve mobil iletişim çözümleri.", hasProducts: true },
  { icon: Monitor, title: "Vücut Kameraları", text: "Güvenlik ve operasyonel verimlilik için tasarlanmış profesyonel vücut kamerası çözümleri.", hasProducts: true },
];

const services = [
  "Ürün seçimi", "Sistem tasarımı", "Programlama",
  "Kurulum", "Test ve devreye alma", "Kullanıcı eğitimi", "Bakım ve teknik servis",
];

export default function HyteraProducts() {
  const urlParams = new URLSearchParams(window.location.search);
  const groupParam = urlParams.get('group');
  const [activeGroup, setActiveGroup] = useState(groupParam || null);

  const handleGroupClick = (title, hasProducts) => {
    if (!hasProducts) return;
    setActiveGroup(prev => prev === title ? null : title);
  };

  return (
    <>
      <SEOHead
        title="Hytera Telsiz Ürünleri ve Sistem Çözümleri"
        description="Hytera DMR el telsizleri, araç telsizleri, TETRA telsiz, PoC/LTE bas-konuş, repeater, dispatcher ve aksesuar çözümleri. Tünel haberleşme ve acil durum haberleşme projelerinde de kullanılan Hytera telsiz sistemi İstanbul."
        canonical="/hytera-telsiz-urunleri"
        keywords="Hytera, Hytera telsiz, Hytera fiyat, Hytera yetkili satıcı, DMR el telsizi, DMR araç telsizi, DMR sistem, trunking, simulcast, XPT, konvansiyonel repeater, TETRA telsiz, TETRA el telsizi, ATEX telsiz, exproof telsiz, IECEx telsiz, analog telsiz, BDA, sinyal güçlendirici, PoC radio, PoC bas-konuş, LTE telsiz, vücut kamerası, body camera, dispatcher, Hytera HP685, Hytera PD785, Hytera HP785, tünel haberleşme, acil durum haberleşme, İstanbul"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Hytera Telsiz Ürünleri", url: "https://www.biemelektronik.com/hytera-telsiz-urunleri" },
        ]}
      />
      <PageHero
        title="Hytera Telsiz Ürünleri ve Sistem Çözümleri"
        subtitle="Hytera DMR el telsizleri, araç telsizleri, repeater sistemleri, PoC/LTE bas-konuş cihazları, dispatcher yazılımları ve aksesuarlarıyla farklı ölçeklerde haberleşme altyapıları oluşturuyoruz."
        image={wirelessImg}
        buttons={[{ label: "Hytera İçin Teklif Alın", to: "/iletisim" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="ÜRÜN GRUPLARI" title="Hytera Ürün Grupları" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productGroups.map((p, i) => {
              const Icon = p.icon;
              const isActive = activeGroup === p.title;
              return (
                <div
                  key={i}
                  onClick={() => handleGroupClick(p.title, p.hasProducts)}
                  className={`p-5 rounded-xl border transition-all group
                    ${p.hasProducts ? "cursor-pointer" : "cursor-default"}
                    ${isActive
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border/50 bg-card/50 hover:border-primary/30"
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-3 transition-colors
                    ${isActive ? "bg-primary/20 border-primary/40" : "bg-primary/10 border-primary/20 group-hover:bg-primary/20"}`}>
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                    {p.hasProducts && (
                      <ChevronDown className={`w-4 h-4 text-primary shrink-0 mt-0.5 transition-transform ${isActive ? "rotate-180" : ""}`} />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                  {p.hasProducts && (
                    <span className="inline-block mt-2 text-[10px] font-mono text-primary/70 tracking-wide">
                      Modelleri gör →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeGroup === "DMR El Telsizleri" && <DmrProductGrid />}
      {activeGroup === "DMR Sistem" && <DmrSystemGrid />}
      {activeGroup === "TETRA Telsizler" && <TetraProductGridHytera />}
      {activeGroup === "TETRA Sistem" && <TetraSystemGrid />}
      {activeGroup === "Ex'li (Exproof) Telsizler" && <ExproofProductGrid />}
      {activeGroup === "Analog El Telsizleri" && <AnalogProductGrid />}
      {activeGroup === "Çift Yönlü Sinyal Güçlendirici (BDA)" && <BdaProductGrid />}
      {activeGroup === "PoC Radio" && <PocProductGrid />}
      {activeGroup === "Vücut Kameraları" && <BodyCameraProductGrid />}

      <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="HİZMETLER" title="Hytera Hizmetlerimiz" />
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s, i) => (
              <span key={i} className="px-4 py-2.5 text-sm text-muted-foreground border border-border/50 bg-card/50 rounded-lg">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="İhtiyacınıza uygun Hytera telsiz sistemi için bizimle iletişime geçin."
      />
    </>
  );
}
