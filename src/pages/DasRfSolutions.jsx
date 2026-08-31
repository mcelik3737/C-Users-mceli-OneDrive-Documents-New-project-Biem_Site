import React from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Wifi, Cable, Radio, Shield, Signal, Globe, Mountain, Settings } from "lucide-react";

const dasImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png";

const solutions = [
  { icon: Wifi, title: "Fiber RF Repeater / BDA", text: "Geniş alan, tünel, maden ve raylı sistem projelerinde merkezi birim ve uzak birimler üzerinden RF sinyal dağıtımı sağlayan fiber tabanlı çözümler." },
  { icon: Radio, title: "Off-Air BDA Sistemleri", text: "Dış ortamdan alınan RF sinyalinin bina, tünel veya kapalı alana taşınması için off-air BDA sistemleri." },
  { icon: Cable, title: "Leaky Feeder Sistemleri", text: "Tünel, maden ve kapalı geçiş alanlarında RF sinyalin kontrollü yayılması için leaky feeder kablo ve pasif ekipman çözümleri." },
  { icon: Shield, title: "Public Safety DAS", text: "Polis, itfaiye ve acil durum birimleri için bina içi ve kapalı alanlarda güvenilir public safety haberleşme altyapıları." },
  { icon: Signal, title: "GSM / LTE / 5G DAS", text: "Operatör sinyallerinin bina içi, kampüs, tünel veya büyük yapılarda dağıtılması için GSM/LTE/5G kapsama çözümleri." },
  { icon: Globe, title: "Wi-Fi ve Kablosuz Altyapı", text: "Endüstriyel tesisler, kampüsler, oteller, depolar ve kapalı alanlar için Wi-Fi kapsama çözümleri." },
  { icon: Mountain, title: "Maden ve Tünel Haberleşmesi", text: "Yeraltı madenleri ve tünel sahalarında RF kapsama, telsiz haberleşme ve acil durum iletişim çözümleri." },
  { icon: Settings, title: "Özel Frekans RF Çözümleri", text: "Projeye özel imalat ve tasarım hizmeti sunulur. Outdoor ve Indoor RF Kapsama (RF Coverage) analizleri doğrultusunda ürünler belirlenerek projelendirilir. Tünel, kablo galerileri, su tünelleri, depolar ve şehir kapsamaları için stok ürünlerimiz veya projeye özel imalat çözümlerimiz mevcuttur." },
];

const usageAreas = [
  "Tüneller", "Maden sahaları", "Metro ve raylı sistem hatları",
  "Büyük binalar", "Otoparklar", "Endüstriyel tesisler",
  "Alışveriş merkezleri", "Oteller", "Kampüsler", "Kamu güvenliği alanları",
];

export default function DasRfSolutions() {
  return (
    <>
      <SEOHead
        title="DAS / RF Kapsama Çözümleri | Tünel Telsiz ve Acil Durum Haberleşme Altyapısı"
        description="Bina içi, tünel, maden ve metro sahalarında tünel telsiz, acil durum haberleşme ve afet haberleşme için DAS, BDA, RF repeater, fiber repeater, leaky feeder ve GSM/LTE kapsama çözümleri."
        canonical="/das-rf-kapsama-cozumleri"
        keywords="DAS, distributed antenna system, RF kapsama, BDA, bi-directional amplifier, RF repeater, fiber repeater, off-air BDA, leaky feeder, public safety DAS, GSM kapsama, LTE kapsama, 5G DAS, Wi-Fi kapsama, bina içi kapsama, tünel kapsama, tünel telsiz, maden kapsama, maden telsiz, acil durum haberleşme DAS, afet haberleşme, otopark kapsama, endüstriyel kapsama, özel frekans RF, RF coverage analizi, indoor kapsama, outdoor kapsama, kapalı alan sinyal, sinyal güçlendirme, DAS repeater, Commscope DAS, Andrew BDA, RFS RF, Kathrein anten, Huawei DAS, Nokia DAS, Ericsson DAS, Rosenberger DAS, DAS sistemi fiyat, RF repeater kurulum, BDA sistem kurulumu, tünel RF tasarımı, indoor DAS planlama"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "DAS / RF Kapsama Çözümleri", url: "https://www.biemelektronik.com/das-rf-kapsama-cozumleri" },
        ]}
      />
      <PageHero
        title="DAS / RF Kapsama Çözümleri"
        subtitle="Bina içi, tünel, maden, metro, fabrika, otopark ve büyük kapalı alanlarda RF kapsama sorunlarına yönelik DAS, BDA, RF repeater, fiber repeater ve leaky feeder çözümleri sunuyoruz."
        image={dasImg}
        buttons={[
          { label: "DAS/RF İçin Teklif Alın", to: "/iletisim" },
          { label: "Saha Keşfi Talep Edin", to: "/iletisim", variant: "outline" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="ÇÖZÜMLER" title="DAS / RF Kapsama Çözüm Alanlarımız" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BİEM own products highlight */}
      <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3 inline-block">PROJEYE ÖZEL</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Projeye Özel RF Repeater ve BDA Çözümleri</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            BİEM, kendi geliştirdiği RF repeater/BDA ürünleri ve farklı marka ürün seçenekleriyle sahaya özel kapsama çözümleri oluşturur. Tünel, maden, bina içi ve endüstriyel alanlarda frekans, kapsama ve sistem mimarisi ihtiyacına göre çözüm sunar.
          </p>
        </div>
      </section>

      {/* RF Kapsama Planlama */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="PLANLAMA"
            title="RF Kapsama Planlama"
            subtitle="Lisanslı propagasyon yazılımları ile mühendislik tabanlı RF kapsama planlaması — keşiften devreye almaya kadar."
          />

          {/* Intro text */}
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Biem Teknoloji Elektronik, telsiz haberleşme, DAS, BDA, repeater ve indoor/outdoor RF kapsama projelerinde lisanslı propagasyon yazılımları ile mühendislik tabanlı planlama hizmeti sunar.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proje öncesinde arazi yapısı, bina mimarisi, anten lokasyonları, frekans bandı, cihaz çıkış gücü ve kablo kayıpları analiz edilerek kapsama haritaları oluşturulur. Böylece cihaz yerleşimi optimum şekilde belirlenir, kapsama boşlukları önceden tespit edilir ve müşteriye daha verimli bir yatırım planı sunulur.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Outdoor saha kapsaması, maden ve endüstriyel tesis haberleşmesi, şehir içi RF analizleri, indoor DAS planlama ve bina içi anten dağıtım projelerinde Biem Teknoloji Elektronik, keşiften devreye almaya kadar tüm süreçlerde teknik destek sağlar.
            </p>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/a00ed39ea_ento-Kopya.png", label: "Outdoor RF Kapsama Haritası — İstanbul" },
              { src: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b980529e5_8e3b7e13-1bd3-460a-a5ea-b31c20210394.png", label: "Indoor DAS Kapsama Haritası" },
              { src: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/ae6efcdbd_kapsama.png", label: "Şehir İçi RF Kapsama Analizi — İstanbul" },
              { src: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/4691218c2_U26_KAPSAMA.png", label: "Outdoor RF Propagasyon Analizi" },
              { src: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/9f07ca3fd_kapsama.png", label: "Endüstriyel Saha Kapsama Haritası — Milas" },
            ].map((img, i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-card/30 overflow-hidden group hover:border-primary/20 transition-all duration-300">
                <div className="bg-black/40 flex items-center justify-center p-3 h-56">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="px-3 py-2.5 border-t border-border/20">
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="KULLANIM ALANLARI" title="DAS / RF Kapsama Kullanım Alanları" />
          <div className="flex flex-wrap justify-center gap-3">
            {usageAreas.map((area, i) => (
              <span key={i} className="px-4 py-2.5 text-sm text-muted-foreground border border-border/50 bg-card/50 rounded-lg hover:border-primary/20 hover:text-foreground transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Kapsama sorunu yaşadığınız alanı birlikte analiz edelim."
        subtitle="Sahanıza uygun RF, BDA veya DAS çözümünü projelendirelim."
      />
    </>
  );
}
