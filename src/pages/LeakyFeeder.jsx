import React from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";

const mineImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png";

const usageAreas = [
  "Maden ocakları", "Metro tünelleri", "Demiryolu tünelleri",
  "Karayolu tünelleri", "Yeraltı geçişleri", "Uzun kapalı koridorlar", "Endüstriyel yeraltı tesisleri",
];

const components = [
  "Leaky feeder kablo", "RF repeater / line amplifier", "Splitter, coupler ve tapper",
  "Anten ve bağlantı ekipmanları", "RF konnektörler", "Güç kaynakları", "İzleme ve alarm ekipmanları",
];

export default function LeakyFeeder() {
  return (
    <>
      <SEOHead
        title="Leaky Feeder Sistemleri"
        description="Tünel, maden, metro ve kapalı geçiş alanlarında RF sinyalin kontrollü yayılması için leaky feeder kablo ve sistem çözümleri. Maden telsiz, tünel telsiz altyapısı, leaky feeder repeater."
        canonical="/leaky-feeder-sistemleri"
        keywords="leaky feeder, leaky feeder kablo, radyating kablo, leaky feeder sistemi, leaky feeder repeater, leaky feeder tünel, leaky feeder maden, RF repeater, BDA, line amplifier, RF splitter, RF coupler, RF tapper, RF konnektör, tünel telsiz, maden telsiz, tünel haberleşme, maden haberleşme, acil durum haberleşme tünel, afet haberleşme, yeraltı haberleşme, maden ocağı haberleşme, metro tüneli haberleşme, demiryolu tüneli haberleşme, karayolu tüneli haberleşme, yeraltı geçişi haberleşme, endüstriyel yeraltı haberleşme, su tüneli haberleşme, kablo galerisi haberleşme, TETRA leaky feeder, DMR leaky feeder, leaky feeder fiyat, leaky feeder kurulum, RFS leaky feeder, Commscope leaky feeder, Andrew leaky feeder, Kevcel leaky feeder"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Leaky Feeder Sistemleri", url: "https://www.biemelektronik.com/leaky-feeder-sistemleri" },
        ]}
      />
      <PageHero
        title="Leaky Feeder Sistemleri"
        subtitle="Tünel, maden, metro ve kapalı geçiş alanlarında RF sinyalin kontrollü şekilde dağıtılmasını sağlayan özel haberleşme altyapıları."
        image={mineImg}
        buttons={[{ label: "Leaky Feeder İçin Teklif Alın", to: "/iletisim" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader tag="KULLANIM ALANLARI" title="Nerelerde Kullanılır?" centered={false} />
              <div className="space-y-2">
                {usageAreas.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader tag="SİSTEM BİLEŞENLERİ" title="Sistem Bileşenleri" centered={false} />
              <div className="space-y-2">
                {components.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO rich text block */}
      <section className="py-10 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-base font-semibold text-foreground mb-3">Leaky Feeder Tünel ve Maden Haberleşme Altyapısı</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Leaky feeder (radyating kablo) sistemi; <strong className="text-foreground/80">tünel telsiz haberleşmesi</strong>, <strong className="text-foreground/80">maden haberleşmesi</strong> ve <strong className="text-foreground/80">acil durum haberleşme</strong> altyapılarının temel bileşenidir. VHF, UHF, DMR, TETRA, TETRAPOL ve GSM/LTE frekanslarında çalışan leaky feeder sistemleri, tünelin boyunca kesintisiz RF sinyal dağıtımı sağlar.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            BİEM Teknoloji Elektronik, karayolu tüneli, demiryolu tüneli, metro tüneli, su tüneli, kablo galerisi ve yeraltı maden ocaklarında leaky feeder tasarımı, temin ve kurulumu gerçekleştirir. Kullanılan başlıca leaky feeder markaları: <strong className="text-foreground/80">RFS (Radio Frequency Systems)</strong>, <strong className="text-foreground/80">Commscope / Andrew</strong>, <strong className="text-foreground/80">Kevcel</strong> ve projeye özel imalat çözümleri.
          </p>
        </div>
      </section>

      <CTASection title="Tünel veya maden sahanız için leaky feeder haberleşme altyapısını birlikte projelendirelim." />
    </>
  );
}
