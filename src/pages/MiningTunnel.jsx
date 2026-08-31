import React from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Cable, Radio, Phone, Music, Camera, Network, Megaphone, Monitor } from "lucide-react";

const mineImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png";

const solutions = [
  "Leaky feeder haberleşme sistemleri",
  "RF repeater / BDA çözümleri",
  "DMR / TETRA / VHF / UHF telsiz haberleşmesi",
  "Acil durum telefonları",
  "Tünel FM radyo yayını",
  "Acil anons sistemleri",
  "CCTV ve izleme sistemleri",
  "Fiber ve network altyapısı",
  "Kontrol merkezi entegrasyonu",
];

export default function MiningTunnel() {
  return (
    <>
      <SEOHead
        title="Tünel Telsiz ve Maden Haberleşme Çözümleri"
        description="Yeraltı madenleri ve tünel sahalarında tünel telsiz, acil durum haberleşme ve afet haberleşme altyapıları: leaky feeder, RF repeater, BDA ve acil durum telefonu çözümleri."
        canonical="/maden-tunel-haberlesmesi"
        keywords="maden haberleşme, tünel haberleşme, tünel telsiz, maden telsiz, yeraltı haberleşme, tünel telsiz sistemi, tünel radyo haberleşme, acil durum haberleşme, afet haberleşme, acil durum telsiz, leaky feeder maden, leaky feeder tünel, RF repeater tünel, RF repeater maden, BDA maden, BDA tünel, DMR maden telsiz, TETRA maden telsiz, TETRAPOL tünel, VHF telsiz maden, UHF telsiz maden, acil durum telefonu tünel, tünel FM radyo, acil anons sistemi, CCTV maden, yeraltı kapsama, maden güvenliği, tünel güvenliği, personel haberleşme, Hytera maden telsiz, exproof telsiz maden, ATEX telsiz, yeraltı madeni telsiz, karayolu tüneli haberleşme, demiryolu tüneli haberleşme, metro tüneli telsiz, su tüneli haberleşme, kablo galerisi haberleşme, maden ocağı haberleşme sistemi, yangın anons maden"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Maden ve Tünel Haberleşmesi", url: "https://www.biemelektronik.com/maden-tunel-haberlesmesi" },
        ]}
      />
      <PageHero
        title="Maden ve Tünel Haberleşme Çözümleri"
        subtitle="Yeraltı ve kapalı alan haberleşmesi için telsiz, RF repeater, leaky feeder, acil durum telefonu, anons, kamera ve network çözümlerini bir arada sunuyoruz."
        image={mineImg}
        buttons={[{ label: "Keşif Talep Edin", to: "/iletisim" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader tag="ÇÖZÜM ALANLARI" title="Maden ve Tünel Haberleşme Çözümlerimiz" centered={false} />
              <div className="space-y-2">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-primary/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-xl border border-border/50 bg-card/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Neden Önemlidir?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Maden ve tünel sahalarında personel güvenliği, operasyon yönetimi, bakım faaliyetleri ve acil durum müdahalesi için kesintisiz haberleşme büyük önem taşır.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yüzeyden yeraltına, tünel girişinden en uzak noktaya kadar sürdürülebilir haberleşme sağlanması için doğru RF tasarımı ve uygun saha uygulaması gerekir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO rich text block */}
      <section className="py-10 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-base font-semibold text-foreground mb-3">Tünel Telsiz ve Maden Haberleşme Sistemleri</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            BİEM Teknoloji Elektronik; karayolu tünelleri, demiryolu ve metro tünelleri, su tünelleri, kablo galerileri ve yeraltı maden ocaklarında <strong className="text-foreground/80">tünel telsiz sistemi</strong>, <strong className="text-foreground/80">acil durum haberleşme</strong> ve <strong className="text-foreground/80">afet haberleşme</strong> altyapıları kurar. DMR, TETRA, TETRAPOL, VHF ve UHF frekans bantlarında leaky feeder kablo, RF repeater/BDA ve anten çözümleriyle tünelin en uzak noktasına kadar kesintisiz kapsama sağlanır.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Maden ve tünel sahalarında kullanılan başlıca telsiz marka ve modelleri: <strong className="text-foreground/80">Hytera</strong> (PD, MD, RD serisi DMR telsizler), <strong className="text-foreground/80">Motorola Solutions</strong> (MOTOTRBO, APX serisi), <strong className="text-foreground/80">Sepura</strong> ve <strong className="text-foreground/80">Airbus</strong> (TETRA), <strong className="text-foreground/80">Kenwood</strong>, <strong className="text-foreground/80">Icom</strong>, <strong className="text-foreground/80">Entel</strong> (exproof/ATEX telsiz), <strong className="text-foreground/80">Tait</strong>, <strong className="text-foreground/80">Simoco</strong> ve <strong className="text-foreground/80">EF Johnson</strong>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80">İlgili aramalar:</strong> tünel telsiz fiyatı, maden tünel haberleşme sistemi kurulumu, leaky feeder maden fiyatı, tünel RF repeater, BDA tünel sistemi, acil durum telsiz tünel, afet haberleşme sistemi, ATEX exproof maden telsiz, tünel radyo sistemi, TETRA tünel haberleşme, DMR maden telsiz sistemi.
          </p>
        </div>
      </section>

      <CTASection
        title="Maden veya tünel projeniz için telsiz, RF kapsama ve acil durum iletişim altyapısını birlikte tasarlayalım."
      />
    </>
  );
}
