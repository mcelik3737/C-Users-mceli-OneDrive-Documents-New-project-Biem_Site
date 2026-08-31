import React, { useState, useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";

const bdaImages = [
  "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/058c62959_image.png",
  "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/cef5aa694_image.png",
];

function BdaImageSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % bdaImages.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative rounded-xl overflow-hidden border border-border/40 bg-card/30">
      <img src={bdaImages[idx]} alt="DS-9300 Bi-Directional Amplifier" className="w-full object-contain max-h-80 bg-white/5" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {bdaImages.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

const dasImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png";

const products = [
  "Fiber RF repeater", "Off-air BDA", "Bi-directional amplifier",
  "Donor anten sistemleri", "Service anten sistemleri", "RF filtreler",
  "Duplexer / diplexer", "RF splitter, coupler ve tapper", "RF izleme ve alarm çözümleri",
];

const usageAreas = [
  "Tüneller", "Madenler", "Büyük binalar", "Metro ve raylı sistem hatları",
  "Otoparklar", "Endüstriyel tesisler", "Public safety uygulamaları",
];

export default function RfRepeater() {
  return (
    <>
      <SEOHead
        title="RF Repeater / BDA Ürünleri | Tünel Haberleşme Çözümleri"
        description="Kapalı alan, tünel haberleşme ve acil durum haberleşme projelerinde RF sinyal güçlendirme için RF repeater, BDA, fiber repeater, donor anten ve pasif RF ekipman çözümleri."
        canonical="/rf-repeater-bda-urunleri"
        keywords="RF repeater, BDA, bi-directional amplifier, fiber RF repeater, off-air BDA, donor anten, service anten, RF filtre, duplexer, diplexer, RF splitter, RF coupler, RF tapper, RF izleme, DS-9300, TETRA repeater, Tetrapol repeater, 400 MHz RF repeater, 70 dB kazanç, tünel repeater, maden repeater, kapalı alan kapsama, sinyal güçlendirici, röle, DAS repeater, BİEM Elektronik repeater, projeye özel RF, N-Type anten, Ethernet izleme"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "RF Repeater / BDA", url: "https://www.biemelektronik.com/rf-repeater-bda-urunleri" },
        ]}
      />
      <PageHero
        title="RF Repeater / BDA Ürünleri"
        subtitle="Kapalı alan, tünel, maden, raylı sistem ve endüstriyel sahalarda RF sinyal kapsamasını güçlendirmek için RF repeater ve BDA çözümleri sunuyoruz."
        image={dasImg}
        buttons={[{ label: "RF Repeater/BDA İçin Teklif Alın", to: "/iletisim" }]}
      />

      {/* BDA Product Highlight */}
      <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <BdaImageSlider />
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">ÇİFT YÖNLÜ SİNYAL GÜÇLENDİRİCİ</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-2 mb-4">DS-9300 Bi-Directional Amplifier</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Kapalı alan, tünel, maden ve büyük binalarda çift yönlü RF sinyal güçlendirme sağlayan endüstriyel sınıf BDA çözümü. IP65 koruma sınıfıyla zorlu ortamlara uyumludur.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Çift yönlü güçlendirme", "IP65 korumalı", "DMR / TETRA uyumlu", "Uzaktan izleme", "Geniş frekans aralığı"].map((f, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TETRA/TETRAPOL 400 MHz RF Repeater */}
      <section className="py-12 lg:py-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">TETRA / TETRAPOL</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-2 mb-4">400 MHz RF Repeater Unit</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Tünel ve kritik altyapılar için 70 dB kazançlı, düşük güçlü RF repeater çözümü. TETRA ve Tetrapol sistemleriyle uyumlu olup, frekans ve proje gereksinimlerine göre üretilmektedir. Dahili mini duplexer, Ethernet tabanlı uzaktan izleme ve 12–24 VDC besleme desteği ile kompakt ve sahaya uygun tasarım sunar.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["70 dB kazanç", "19 dBm çıkış gücü", "TETRA / Tetrapol", "Ethernet izleme", "12–24 VDC", "CE & RoHS", "Kompakt tasarım", "Projeye özel üretim"].map((f, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{f}</span>
                ))}
              </div>
              <a href="https://media.base44.com/files/public/6a0f643fac0d957e314ae3c0/f979725c5_BM_D30U30_24_F4.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline">
                📄 Teknik Veri Sayfasını İndir (PDF)
              </a>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="rounded-xl overflow-hidden border border-border/40 bg-white/5 flex items-center justify-center p-4">
                <img src="https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/d56166443_bda_png_bm.png" alt="TETRA/TETRAPOL 400 MHz RF Repeater Unit" className="w-full object-contain max-h-72" />
              </div>
              {/* Specs table */}
              <div className="rounded-xl border border-border/40 bg-card/30 p-4">
                <h4 className="text-xs font-mono font-semibold text-primary tracking-wider mb-3">TEKNİK ÖZELLİKLER</h4>
                <div className="space-y-1.5 text-xs">
                  {[
                    ["Tipik Kazanç", "70 dB"],
                    ["Kazanç Ayar Aralığı", "30 dB"],
                    ["UL Bantları", "380–385 / 410–415 / 415–420 MHz"],
                    ["DL Bantları", "390–395 / 420–425 / 425–430 MHz"],
                    ["Çıkış Gücü", "19 dBm (1 taşıyıcı) / 16 dBm (2 taşıyıcı)"],
                    ["Besleme", "12–24 VDC"],
                    ["Güç Tüketimi", "25 W"],
                    ["Anten Arayüzü", "N-Type (F) × 2"],
                    ["İzleme", "Ethernet (RJ45)"],
                    ["Boyutlar", "270 × 240 × 45 mm"],
                    ["Ağırlık", "3.2 kg"],
                  ].map(([label, value], i) => (
                    <div key={i} className="flex justify-between gap-2 py-1 border-b border-border/20 last:border-0">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RF Splitter, Coupler, Tapper & Hybrid Coupler */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="PASİF RF EKİPMAN"
            title="RF Splitter, Coupler, Tapper & Hybrid Coupler"
            subtitle="Korozyona dayanıklı malzemeden üretilen, N-Type dişi konnektörlü, 200W güç dayanımlı pasif RF ekipmanlarımız frekans band aralıklarına göre sipariş üzerine temin edilmektedir."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Splitter */}
            <div className="rounded-xl border border-border/40 bg-card/30 overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="bg-white/5 flex items-center justify-center p-6 h-52">
                <img
                  src="https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1fb30f949_ChatGPTImage20Haz202619_50_09.png"
                  alt="RF Splitter"
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4 border-t border-border/30">
                <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">2-Way / 3-Way / 4-Way</span>
                <h3 className="text-sm font-bold text-foreground mt-1">RF Splitter</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Giriş sinyalini eşit güçte birden fazla çıkışa bölen pasif RF dağıtım elemanı.
                </p>
              </div>
            </div>

            {/* Coupler */}
            <div className="rounded-xl border border-border/40 bg-card/30 overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="bg-white/5 flex items-center justify-center p-6 h-52">
                <img
                  src="https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1abe360f5_ChatGPTImage20Haz202619_50_00.png"
                  alt="RF Coupler"
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4 border-t border-border/30">
                <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">5dB / 6dB / 7dB / 10dB / 15dB</span>
                <h3 className="text-sm font-bold text-foreground mt-1">RF Coupler</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Giriş sinyalini belirli bir kuplaj oranında iki çıkışa ayıran yönlü bağlaştırıcı.
                </p>
              </div>
            </div>

            {/* Tapper */}
            <div className="rounded-xl border border-border/40 bg-card/30 overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="bg-white/5 flex items-center justify-center p-6 h-52">
                <img
                  src="https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c04154715_ChatGPTImage20Haz202619_53_32.png"
                  alt="RF Tapper"
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4 border-t border-border/30">
                <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">Asimetrik Dağıtım</span>
                <h3 className="text-sm font-bold text-foreground mt-1">RF Tapper</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Ana hattan belirli bir oranda sinyal çekerek diğer çıkışa ileten asimetrik güç bölücü.
                </p>
              </div>
            </div>

            {/* Hybrid Coupler */}
            <div className="rounded-xl border border-border/40 bg-card/30 overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="bg-white/5 flex items-center justify-center p-6 h-52">
                <img
                  src="https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/ced3e6aca_ChatGPTImage20Haz202619_53_32.png"
                  alt="Hybrid Coupler"
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4 border-t border-border/30">
                <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">3dB / 90° Hibrit</span>
                <h3 className="text-sm font-bold text-foreground mt-1">Hybrid Coupler</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Giriş sinyalini 90° faz farkıyla iki eşit çıkışa bölen yüksek izolasyonlu kuplaj elemanı.
                </p>
              </div>
            </div>
          </div>

          {/* Spec highlights */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Malzeme", value: "Korozyon Dayanıklı" },
              { label: "Konnektör", value: "N-Type Dişi" },
              { label: "Güç Dayanımı", value: "200W" },
              { label: "Sipariş", value: "Frekans Bandına Özel" },
            ].map((spec, i) => (
              <div key={i} className="rounded-lg border border-primary/10 bg-primary/5 px-4 py-3 text-center">
                <span className="block text-[10px] font-mono text-primary/60 tracking-wider uppercase mb-1">{spec.label}</span>
                <span className="text-sm font-semibold text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader tag="ÜRÜNLER" title="Ürün ve Sistem Tipleri" centered={false} />
              <div className="space-y-2">
                {products.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-primary/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader tag="KULLANIM" title="Kullanım Alanları" centered={false} />
              <div className="space-y-2">
                {usageAreas.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-primary/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="RF kapsama ihtiyacınız için sahaya özel repeater/BDA çözümü oluşturalım." />
    </>
  );
}
