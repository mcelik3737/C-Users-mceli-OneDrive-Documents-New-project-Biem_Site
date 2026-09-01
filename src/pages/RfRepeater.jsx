import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Antenna,
  ArrowRight,
  Cable,
  CheckCircle2,
  Download,
  Gauge,
  Network,
  RadioTower,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";

const heroImage = "/assets/images/b89abb303_generated_fce2d3bb.png";
const repeaterImage = "/assets/images/d56166443_bda_png_bm.png";
const datasheet = "/assets/docs/f979725c5_BM_D30U30_24_F4.pdf";

const bdaImages = [
  "/assets/images/058c62959_image.png",
  "/assets/images/cef5aa694_image.png",
];

const architecture = [
  {
    icon: Antenna,
    no: "01",
    title: "Donor RF Kaynağı",
    text: "Baz istasyonu, TETRA/DMR repeater, off-air donor anten veya fiber RF kaynağından kontrollü RF alınır.",
  },
  {
    icon: SlidersHorizontal,
    no: "02",
    title: "Filtreleme ve Kazanç",
    text: "Duplexer, band-pass filtre ve AGC/ALC katmanlarıyla istenen UL/DL bandı seçilir ve kazanç yönetilir.",
  },
  {
    icon: Network,
    no: "03",
    title: "RF Dağıtım",
    text: "Splitter, coupler, tapper, hibrit kuplör veya leaky feeder üzerinden saha kayıpları dikkate alınarak dağıtım yapılır.",
  },
  {
    icon: RadioTower,
    no: "04",
    title: "Servis Alanı",
    text: "Tünel, maden, metro, otopark veya bina içinde servis antenleriyle kontrollü ve ölçülebilir kapsama oluşturulur.",
  },
];

const passiveProducts = [
  {
    title: "RF Splitter",
    label: "2-Way / 3-Way / 4-Way",
    text: "Giriş sinyalini eşit güçte birden fazla RF koluna dağıtmak için kullanılır.",
    image: "/assets/images/1fb30f949_ChatGPTImage20Haz202619_50_09.png",
  },
  {
    title: "Directional Coupler",
    label: "5 / 6 / 7 / 10 / 15 dB",
    text: "Ana RF hattından kontrollü seviyede güç alarak dengeli dağıtım topolojileri kurmaya yardımcı olur.",
    image: "/assets/images/1abe360f5_ChatGPTImage20Haz202619_50_00.png",
  },
  {
    title: "RF Tapper",
    label: "Asimetrik RF Dağıtım",
    text: "Uzun hatlarda ana gücü korurken belirli noktalarda gerekli seviyede RF ayırmak için kullanılır.",
    image: "/assets/images/c04154715_ChatGPTImage20Haz202619_53_32.png",
  },
  {
    title: "Hybrid Coupler",
    label: "3 dB / 90° Hibrit",
    text: "İki RF yolunun kontrollü birleştirilmesi veya yüksek izolasyonlu eşit dağıtımı için kullanılır.",
    image: "/assets/images/ced3e6aca_ChatGPTImage20Haz202619_53_32.png",
  },
];

const specs = [
  ["Tipik kazanç", "70 dB"],
  ["Kazanç ayarı", "30 dB"],
  ["UL seçenekleri", "380–385 / 410–415 / 415–420 MHz"],
  ["DL seçenekleri", "390–395 / 420–425 / 425–430 MHz"],
  ["Çıkış gücü", "19 dBm (1 taşıyıcı) / 16 dBm (2 taşıyıcı)"],
  ["Besleme", "12–24 VDC"],
  ["Güç tüketimi", "25 W"],
  ["RF arayüz", "2 × N-Type dişi"],
  ["Uzaktan izleme", "Ethernet / RJ45"],
  ["Boyut", "270 × 240 × 45 mm"],
  ["Ağırlık", "3.2 kg"],
];

const solutionTypes = [
  "Fiber optik RF repeater",
  "Off-air BDA / bi-directional amplifier",
  "DMR / TETRA / UHF / VHF RF güçlendirme",
  "Donor ve servis anten sistemleri",
  "Duplexer, diplexer ve RF filtreleme",
  "Splitter, coupler, tapper ve hybrid coupler",
  "Leaky feeder RF dağıtımı",
  "Ethernet tabanlı alarm ve uzaktan izleme",
];

const applicationAreas = [
  "Metro ve demiryolu tünelleri",
  "Yeraltı ve açık maden sahaları",
  "Karayolu tünelleri",
  "Büyük binalar ve otoparklar",
  "Fabrika ve endüstriyel tesisler",
  "Public Safety / acil durum haberleşmesi",
];

function BdaImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % bdaImages.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[360px] rounded-2xl overflow-hidden border border-border/50 bg-white/[0.03] flex items-center justify-center p-6 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.12),transparent_55%)]" />
      <img
        src={bdaImages[index]}
        alt="RF BDA çift yönlü yükselteç"
        decoding="async"
        className="relative z-10 w-full h-full max-h-[330px] object-contain transition-opacity duration-300"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2" aria-label="BDA görsel seçimi">
        {bdaImages.map((_, itemIndex) => (
          <button
            key={itemIndex}
            type="button"
            aria-label={`Görsel ${itemIndex + 1}`}
            onClick={() => setIndex(itemIndex)}
            className={`h-1.5 rounded-full transition-all ${itemIndex === index ? "w-8 bg-primary" : "w-3 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RfRepeater() {
  return (
    <>
      <SEOHead
        title="RF Repeater ve BDA Sistemleri | TETRA, DMR, UHF/VHF"
        description="BİEM; tünel, maden, metro ve kapalı alan projeleri için TETRA/DMR RF repeater, BDA, fiber repeater, duplexer, filtre, leaky feeder ve pasif RF dağıtım çözümleri tasarlar ve uygular."
        canonical="/rf-repeater-bda-urunleri"
        keywords="RF repeater, BDA, TETRA repeater, DMR repeater, UHF repeater, VHF repeater, fiber repeater, off-air BDA, tünel RF kapsama, maden repeater, RF filtre, duplexer, leaky feeder, RF splitter, directional coupler"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "DAS / RF Kapsama", url: "https://www.biemelektronik.com/das-rf-kapsama-cozumleri" },
          { name: "RF Repeater / BDA", url: "https://www.biemelektronik.com/rf-repeater-bda-urunleri" },
        ]}
      />
      <PageHero
        title="RF Repeater / BDA Sistemleri"
        subtitle="TETRA, DMR, UHF/VHF ve kritik haberleşme sistemlerinde tünel, maden ve kapalı alan kapsamasını RF bütçesi, izolasyon ve saha ölçümleriyle birlikte tasarlıyoruz."
        image={heroImage}
        buttons={[
          { label: "RF Keşif / Teklif Talebi", to: "/iletisim" },
          { label: "DAS / RF Çözümleri", to: "/das-rf-kapsama-cozumleri", variant: "outline" },
        ]}
      />

      <section className="py-14 lg:py-20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-mono font-semibold tracking-[0.18em] text-primary uppercase">RF MÜHENDİSLİĞİ</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 mb-5">Repeater yalnızca kazanç değildir.</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                Sağlıklı bir RF kapsama sistemi; donor-servis izolasyonu, giriş seviyesi, gürültü tabanı, taşıyıcı sayısı, intermodülasyon, kablo kayıpları ve dağıtım topolojisinin birlikte hesaplanmasını gerektirir.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BİEM projelerinde cihaz seçimi, RF link budget ve saha mimarisi birlikte ele alınır. Amaç yalnızca sinyali büyütmek değil; kararlı ve ölçülebilir bir kapsama alanı oluşturmaktır.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {architecture.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.no} className="relative p-5 lg:p-6 rounded-2xl border border-border/50 bg-card/40 hover:border-primary/30 transition-colors">
                    <span className="absolute right-5 top-4 text-xs font-mono text-primary/35">{item.no}</span>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <BdaImageSlider />
            <div>
              <span className="text-xs font-mono font-semibold tracking-[0.18em] text-primary uppercase">BIDIRECTIONAL AMPLIFIER</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 mb-5">BDA: uplink ve downlink için kontrollü çift yönlü güçlendirme</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Off-air veya kontrollü RF kaynağının bina, tünel ve yeraltı dağıtım sistemine aktarılması için BDA çözümleri; UL ve DL yollarını ayrı RF zincirleri olarak yönetir. Projeye göre filtreleme, AGC/ALC, alarm ve uzaktan izleme seçenekleri uygulanabilir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {[
                  "DMR / TETRA uygulamaları",
                  "UL düşük gürültü yolu",
                  "DL lineer yükseltme",
                  "AGC / ALC seçenekleri",
                  "Uzaktan alarm ve izleme",
                  "Tünel / maden saha kullanımı",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link to="/iletisim" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                BDA projenizi değerlendirelim <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <span className="text-xs font-mono font-semibold tracking-[0.18em] text-primary uppercase">400 MHz / TETRA</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 mb-4">Kompakt düşük güçlü RF repeater</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-7 max-w-2xl">
                Tünel içi dağıtım, teknik hacimler ve kontrollü kapsama noktaları için kompakt 400 MHz repeater çözümü. Frekans planı ve duplex aralığı projeye göre seçilir; Ethernet izleme ve 12–24 VDC saha beslemesi desteklenir.
              </p>

              <div className="rounded-2xl border border-border/50 overflow-hidden bg-card/30 mb-6">
                <div className="px-5 py-4 border-b border-border/40 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold">Örnek teknik konfigürasyon</h3>
                </div>
                <div className="divide-y divide-border/30">
                  {specs.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[0.9fr_1.1fr] gap-4 px-5 py-3 text-xs sm:text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-primary/25 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Teknik veri sayfası (PDF)
              </a>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/30 p-6 lg:p-8">
              <div className="min-h-[300px] flex items-center justify-center bg-white/[0.03] rounded-xl p-6 mb-6">
                <img
                  src={repeaterImage}
                  alt="400 MHz TETRA RF repeater"
                  loading="lazy"
                  decoding="async"
                  className="max-h-[280px] w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Kazanç", "70 dB"],
                  ["Çıkış", "+19 dBm"],
                  ["Besleme", "12–24 VDC"],
                  ["İzleme", "Ethernet"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-primary/10 bg-primary/[0.04] px-4 py-3">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-primary/60 mb-1">{label}</span>
                    <strong className="text-sm text-foreground">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="PASİF RF DAĞITIM"
            title="Splitter, coupler, tapper ve hybrid coupler"
            subtitle="RF link budget yalnızca aktif cihazla tamamlanmaz. Pasif dağıtım elemanları; frekans bandı, kuplaj değeri, insertion loss, güç dayanımı ve konnektör tipine göre seçilir."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {passiveProducts.map((product) => (
              <article key={product.title} className="group rounded-2xl border border-border/50 bg-card/40 overflow-hidden hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <div className="h-52 p-6 bg-white/[0.03] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 border-t border-border/30">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-primary uppercase">{product.label}</span>
                  <h3 className="text-base font-semibold text-foreground mt-2 mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["Konnektör", "N-Type dişi"],
              ["Güç sınıfı", "200 W'a kadar"],
              ["Gövde", "Korozyona dayanıklı"],
              ["Seçim", "Bant / loss'a göre"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border/40 bg-background/30 px-4 py-4 text-center">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-primary/60 mb-1">{label}</span>
                <span className="text-sm font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border/50 bg-card/30 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Cable className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary/60">SİSTEM BİLEŞENLERİ</span>
                  <h2 className="text-xl font-bold">Ürün ve sistem tipleri</h2>
                </div>
              </div>
              <div className="space-y-2.5">
                {solutionTypes.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/30 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary/60">SAHA UYGULAMALARI</span>
                  <h2 className="text-xl font-bold">Kullanım alanları</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applicationAreas.map((item) => (
                  <div key={item} className="min-h-24 p-4 rounded-xl bg-secondary/20 border border-border/30 flex flex-col justify-end">
                    <RadioTower className="w-4 h-4 text-primary mb-3" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/maden-tunel-haberlesmesi" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Maden ve tünel çözümlerini inceleyin <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="RF kapsama sistemini cihazdan önce saha verisiyle tasarlayalım."
        subtitle="Frekans, UL/DL planı, beklenen kapsama alanı, kablo topolojisi ve mevcut RF seviyelerini paylaşın; uygun repeater/BDA mimarisini birlikte belirleyelim."
      />
    </>
  );
}
