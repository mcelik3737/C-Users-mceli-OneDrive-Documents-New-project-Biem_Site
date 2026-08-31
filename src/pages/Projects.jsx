import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import NewsEventsSection from "@/components/news/NewsEventsSection";
import { Zap, Mountain, TrainFront, HardHat, Factory, Megaphone, Wind } from "lucide-react";

const energyImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/128dd205e_generated_24a41ca8.png";
const tunnelImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png";
const railImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png";
const mineImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png";
const industrialImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/58386d917_generated_939516fe.png";

const projects = [
  {
    title: "Eczacıbaşı Maden Trunk Haberleşme Sistemi",
    sector: "Maden / Enerji",
    scope: "DMR Trunk telsiz altyapısı, repeater, 5 site entegrasyonu, multi-site trunking, dispatcher yönetimi",
    desc: "5 adet site, 550+ el telsizi, 70 araç telsizi ile büyük ölçekli maden sahası haberleşme altyapısı.",
    fullDesc: "Eczacıbaşı maden sahasında 5 ayrı lokasyonda kurulan DMR Trunk telsiz haberleşme sistemi; 550+ el telsizi ve 70 araç telsizi ile saha genelinde kesintisiz haberleşme sağlamaktadır. Rüzgar ve güneş enerjisi ile enerji yedeklemesi yapılmış, Radyolink, GSM ve uydu network yedeklemesi ile sistem sürekliliği garanti altına alınmıştır.",
    icon: Zap,
    image: energyImg,
    gallery: [
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/00c4a69d2_WhatsAppImage2026-06-16at161925.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/2b98b31da_WhatsAppImage2026-06-17at110839.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/9b55f2170_WhatsAppImage2026-06-17at112029.jpg",
    ],
    stats: ["5 Site", "550+ El Telsizi", "70 Araç Telsizi", "Rüzgar + Güneş Enerji", "Radyolink / GSM / Uydu"],
  },
  {
    title: "Rönesans Enerji – RES Projeleri",
    sector: "Enerji",
    scope: "DMR Tier2 Multi-Site telsiz altyapısı, İSG operasyonları, Dispatcher İzleme Sistemi, 6 lokasyon",
    desc: "Çankırı, Çorum, Malatya, Osmaniye, Sivas ve İzmir'de 6 lokasyonlu DMR Tier2 Multi-Site haberleşme altyapısı.",
    fullDesc: "Rönesans Enerji bünyesinde Çankırı, Çorum, Malatya, Osmaniye, Sivas ve İzmir'deki 6 rüzgar enerji santralinde (RES) DMR Tier2 Multi-Site telsiz haberleşme altyapısı kurulmuştur. İSG operasyonları için kritik haberleşme ve Dispatcher İzleme Sistemi entegrasyonu BİEM tarafından projelendirilmiş ve devreye alınmıştır.",
    icon: Wind,
    image: energyImg,
    gallery: [
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/16c262462_WhatsAppImage2026-06-17at122015.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b9319e4d9_WhatsAppImage2026-06-17at1220161.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1f935ea97_WhatsAppImage2026-06-17at1220162.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/f3846a8e3_WhatsAppImage2026-06-17at1220163.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1cea63931_WhatsAppImage2026-06-17at122016.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c2b692108_WhatsAppImage2026-06-17at1220171.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/25439965d_WhatsAppImage2026-06-17at1220172.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/d05871cf7_WhatsAppImage2026-06-17at122017.jpg",
    ],
    stats: ["6 Lokasyon", "DMR Tier2 Multi-Site", "İSG Operasyonları", "Dispatcher İzleme"],
  },
  {
    title: "Tünel RF Kapsama ve FM Radyo Yayın Sistemi",
    sector: "Tünel",
    scope: "RF repeater, leaky feeder, FM radyo yayını, acil anons entegrasyonu",
    desc: "Tünel içinde telsiz haberleşmesi ve FM radyo yayını için RF dağıtım altyapısı tasarlanmıştır.",
    icon: Mountain,
    image: tunnelImg,
    gallery: [],
    stats: [],
  },
  {
    title: "TCDD Marmaray – Sirkeci-Kazlıçeşme TETRA Projesi",
    sector: "Raylı Sistem",
    scope: "TETRA altyapısı, DIB-R5 Advance, DIB-R5 Outdoor, satış, projelendirme, kurulum, devreye alma",
    desc: "8 istasyonu kapsayan TETRA haberleşme sistemi; satıştan devreye almaya uçtan uca çözüm.",
    fullDesc: "TCDD Marmaray Sirkeci-Kazlıçeşme hattında 8 istasyonu kapsayan TETRA haberleşme sistemi projesinde; DIB-R5 Advance ve DIB-R5 Outdoor baz istasyonları ile yüksek güvenlikli kritik görev haberleşme altyapısı kurulmuştur. Satış, projelendirme, kurulum ve devreye alma süreçlerinin tamamı BİEM tarafından yürütülmüştür.",
    icon: TrainFront,
    image: railImg,
    gallery: [
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/8d8170a87_WhatsAppImage2026-06-17at120805.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/ec39e7ec1_WhatsAppImage2026-06-16at161925.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/a3eeeaad5_WhatsAppImage2026-06-16at161926.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/09877b0db_WhatsAppImage2026-06-17at120218.jpg",
    ],
    stats: ["8 İstasyon", "DIB-R5 Advance", "DIB-R5 Outdoor", "TETRA"],
  },
  {
    title: "Raylı Sistem Acil Telefon ve Haberleşme Altyapısı",
    sector: "Raylı Sistem",
    scope: "J&R acil durum telefonu, IP santral, network altyapısı",
    desc: "İstasyon, tünel ve teknik alanlarda acil durum iletişimi için telefon ve ağ altyapısı kurulmuştur.",
    icon: TrainFront,
    image: railImg,
    gallery: [],
    stats: [],
  },
  {
    title: "Anagold Madencilik – Acil Durum Anons Sistemi",
    sector: "Maden",
    scope: "Güneş enerjili acil durum anons sistemi, 40 lokasyon, 8 zone ses dağıtımı, 500W yükselteç",
    desc: "40 lokasyonda güneş enerjisiyle çalışan, 130dB ses yayını kapasiteli acil durum ve genel anons sistemi.",
    fullDesc: "Anagold madencilik sahasında 40 farklı lokasyona kurulan güneş enerjili acil durum anons sistemi; 8 zone üzerinden 130dB ses yayını yapabilen, 500W gücünde yükselteç ve hoparlörlerle donatılmıştır. Sistem, maden sahasında personel uyarı, acil durum tahliyesi ve genel anons ihtiyaçlarını karşılamak üzere tasarlanmıştır.",
    icon: Megaphone,
    image: mineImg,
    gallery: [
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/36f0e4e1e_WhatsAppImage2026-06-16at161046.jpg",
      "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/feed3acf7_WhatsAppImage2026-06-16at161029.jpg",
    ],
    stats: ["40 Lokasyon", "Güneş Enerjili", "8 Zone", "130dB Ses Yayını", "500W"],
  },
  {
    title: "Maden Sahası Leaky Feeder Haberleşme Sistemi",
    sector: "Maden",
    scope: "Leaky feeder, RF repeater, telsiz haberleşme",
    desc: "Yeraltı maden sahasında personel haberleşmesi ve operasyon güvenliği için RF kapsama çözümü oluşturulmuştur.",
    icon: HardHat,
    image: mineImg,
    gallery: [],
    stats: [],
  },
  {
    title: "Endüstriyel Tesis Telsiz ve Güvenlik Entegrasyonu",
    sector: "Endüstriyel",
    scope: "DMR telsiz, CCTV, access control, network çözümleri",
    desc: "Fabrika ve endüstriyel sahalarda telsiz haberleşme, kamera ve erişim kontrol altyapısı entegrasyonu.",
    icon: Factory,
    image: industrialImg,
    gallery: [],
    stats: [],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SEOHead
        title="Projelerimiz"
        description="BİEM Teknoloji Elektronik tamamlanan projeleri: telsiz haberleşme, tünel haberleşme, acil durum haberleşme, RF kapsama, raylı sistem, maden, leaky feeder ve repeater projeleri. İstanbul ve Türkiye geneli referanslar."
        canonical="/projeler"
        keywords="BİEM projeler, BİEM referanslar, telsiz haberleşme projesi, RF kapsama projesi, raylı sistem projesi, tünel haberleşme projesi, acil durum haberleşme projesi, maden haberleşme projesi, leaky feeder projesi, repeater projesi, acil durum telefonu projesi, DMR trunk sistemi, TETRA Marmaray, Eczacıbaşı maden, Anagold madencilik, Rönesans Enerji, RES haberleşme, multi-site trunking, acil anons sistemi, TCDD TETRA, Sirkeci Kazlıçeşme"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Projelerimiz", url: "https://www.biemelektronik.com/projeler" },
        ]}
      />
      <PageHero
        title="Projelerimiz"
        subtitle="Farklı sektörlerde telsiz haberleşme, RF kapsama, raylı sistem, tünel ve maden haberleşmesi projeleri için çözüm üretiyoruz."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedProject(p)}
                  className={`group relative rounded-xl overflow-hidden border border-border/50 cursor-pointer ${i === 0 ? "md:col-span-2 h-72 md:h-80" : "h-64 md:h-72"}`}
                >
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono text-primary tracking-wider">{p.sector.toUpperCase()}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1"><span className="font-medium text-foreground/70">Kapsam:</span> {p.scope}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    {p.stats.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {p.stats.map((s, j) => (
                          <span key={j} className="px-2 py-0.5 text-[10px] rounded bg-primary/15 text-primary border border-primary/20">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <NewsEventsSection />

      <CTASection
        title="Benzer bir proje için teknik çözüm ve teklif almak isterseniz bizimle iletişime geçin."
      />
    </>
  );
}
