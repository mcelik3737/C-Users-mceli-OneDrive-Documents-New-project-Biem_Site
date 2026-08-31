import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import TetraProductGrid from "@/components/tetra/TetraProductGrid";
import TetraMobileProductGrid from "@/components/tetra/TetraMobileProductGrid";
import TetraInSafeProductGrid from "@/components/tetra/TetraInSafeProductGrid";
import TetraBaseStationGrid from "@/components/tetra/TetraBaseStationGrid";
import TetraSystemGrid from "@/components/tetra/TetraSystemGrid";
import { Radio, Shield, ShieldAlert, Settings, Wifi, ChevronDown } from "lucide-react";

const productGroups = [
  { icon: Radio, title: "TETRA El Telsizleri", text: "Kritik görev haberleşmesi için yüksek güvenlikli ve dayanıklı TETRA el telsizleri.", hasProducts: true },
  { icon: Radio, title: "TETRA Mobil Telsizler", text: "Araç üstü kurulum için yüksek güçlü TETRA mobil telsiz çözümleri.", hasProducts: true },
  { icon: Settings, title: "TETRA Sistem Altyapısı", text: "Tam entegre TETRA baz istasyonu, switch ve şebeke yönetim çözümleri.", hasProducts: true },
  { icon: Shield, title: "Şifreli Haberleşme", text: "TETRA standardında uçtan uca şifreli, güvenli ses ve veri iletişimi." },
  { icon: ShieldAlert, title: "Ex'li TETRA Telsizler", text: "Patlayıcı ve tehlikeli ortamlar için ATEX/IECEx sertifikalı TETRA telsizler." },
  { icon: ShieldAlert, title: "ATEX Telsizler", text: "Patlayıcı ve tehlikeli ortamlar için ATEX/IECEx/UL sertifikalı Hytera TETRA telsizler.", hasProducts: true },
  { icon: Wifi, title: "TETRA Data Hizmetleri", text: "Konum takibi, mesaj, durum raporu ve SDS veri servisleri." },
  { icon: Radio, title: "Dispatcher Çözümleri", text: "TETRA şebekesi üzerinde merkezi çağrı yönetimi ve operasyon kontrol yazılımları." },
];

const usageAreas = [
  "Emniyet ve jandarma", "İtfaiye ve AFAD", "Raylı sistemler / metro",
  "Enerji ve altyapı tesisleri", "Havalimanları", "Liman operasyonları",
  "Maden sahaları", "Kamu güvenliği", "Belediye operasyonları",
];

const services = [
  "Ürün seçimi", "Sistem tasarımı", "TETRA şebeke kurulumu",
  "Programlama", "Test ve devreye alma", "Kullanıcı eğitimi", "Bakım ve teknik servis",
];

export default function TetraProducts() {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (title, hasProducts) => {
    if (!hasProducts) return;
    setActiveGroup(prev => prev === title ? null : title);
  };

  return (
    <>
      <SEOHead
        title="TETRA Telsiz Sistemleri ve Ürünleri"
        description="Hytera TETRA el telsizleri, baz istasyonları, dispatcher ve kritik görev haberleşme sistemleri. Acil durum haberleşme ve tünel haberleşme dahil emniyet, raylı sistem, havalimanı ve enerji sektörü için TETRA çözümleri."
        canonical="/tetra-telsiz-sistemleri"
        keywords="TETRA telsiz, TETRA el telsizi, TETRA mobil telsiz, TETRA araç telsizi, TETRA baz istasyonu, TETRA sistem, TETRA şebeke, Hytera TETRA, şifreli haberleşme, ATEX TETRA, IECEx TETRA, kritik görev haberleşme, acil durum haberleşme, tünel haberleşme, emniyet telsiz, jandarma telsiz, itfaiye telsiz, AFAD telsiz, metro TETRA, raylı sistem TETRA, havalimanı telsiz, enerji telsiz, maden TETRA, dispatcher, DIB-R5, DIB-R5 Advance, SDS, TETRA data, ETSI TETRA"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "TETRA Telsiz Sistemleri", url: "https://www.biemelektronik.com/tetra-telsiz-sistemleri" },
        ]}
      />
      <PageHero
        title="TETRA Telsiz Sistemleri ve Ürünleri"
        subtitle="Kritik görev haberleşmesi için güvenli, şifreli ve yüksek güvenilirlikli Hytera TETRA telsiz sistemleri ve altyapı çözümleri sunuyoruz."
        buttons={[{ label: "TETRA İçin Teklif Alın", to: "/iletisim" }]}
      />

      {/* Ürün Grupları */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="ÜRÜN GRUPLARI" title="TETRA Ürün ve Çözüm Grupları" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {activeGroup === "TETRA El Telsizleri" && <TetraProductGrid />}
      {activeGroup === "TETRA Mobil Telsizler" && <TetraMobileProductGrid />}
      {activeGroup === "ATEX Telsizler" && <TetraInSafeProductGrid />}
      {activeGroup === "TETRA Sistem Altyapısı" && (
        <>
          <TetraBaseStationGrid />
          <TetraSystemGrid />
        </>
      )}

      {/* Kullanım Alanları */}
      <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="KULLANIM ALANLARI" title="TETRA Sistemlerin Kullanıldığı Sektörler" />
          <div className="flex flex-wrap justify-center gap-3">
            {usageAreas.map((area, i) => (
              <span key={i} className="px-4 py-2.5 text-sm text-muted-foreground border border-border/50 bg-card/50 rounded-lg hover:border-primary/20 hover:text-foreground transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="HİZMETLER" title="TETRA Hizmetlerimiz" />
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
        title="Kritik görev haberleşmesi için TETRA sistem çözümü oluşturalım."
        subtitle="Sektörünüze ve operasyon ihtiyacınıza göre en uygun TETRA altyapısını birlikte planlayalım."
      />
    </>
  );
}
