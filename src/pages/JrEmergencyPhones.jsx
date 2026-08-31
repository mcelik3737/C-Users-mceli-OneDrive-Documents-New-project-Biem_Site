import React from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";

const railImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png";

const usageAreas = [
  "Tüneller", "Metro ve demiryolu istasyonları", "Peronlar",
  "Otoparklar", "Endüstriyel tesisler", "Liman ve lojistik sahaları",
  "Kampüsler", "Güvenlik noktaları", "Acil kaçış alanları",
];

const scope = [
  "Ürün seçimi", "Montaj noktası planlama", "IP veya analog bağlantı altyapısı",
  "Telefon santral entegrasyonu", "Kablolama ve bağlantı",
  "Test ve devreye alma", "Bakım ve teknik destek",
];

const models = [
  {
    name: "Water Resistant Industrial Telephone IP67 Weather Resistant Emergency Telephone",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/d0eb7f9e2_water-resistant-industrial-telephone-ip6723258469081.webp",
    url: "https://www.jrtelephone.com/water-resistant-industrial-telephone-ip67"
  },
  {
    name: "Atex Anti-Explosion Proof Emergency Telephone",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/f83eadead_atex-anti-explosion-proof-emergency-telephone40254539954.webp",
    url: "https://www.jrtelephone.com/atex-anti-explosion-proof-emergency-telephone"
  },
  {
    name: "Cold Rolled Steel Public Telephone For Jail",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/90d0bbafc_20211029145257321d16b45935494ea50ed88408a5ad5f.webp",
    url: "https://www.jrtelephone.com/cold-rolled-steel-public-telephone-for-jail"
  },
  {
    name: "Bank Service Digital Keys Telephone",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/55ab4e0c5_bank-service-digital-keys-telephone13059388123.webp",
    url: "https://www.jrtelephone.com/bank-service-digital-keys-telephone"
  },
  {
    name: "Jail Telephone / Inmate Telephone JR201-FK-VC",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/0815d61cd_201710191204056393540.jpg",
    url: "https://www.jrtelephone.com/jr201-fk-voice-control"
  },
  {
    name: "Water Resistant Industrial Telephone IP67 Weather Resistant Emergency Telephone",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/9b8e74419_20211129110700c1ddf2c332d0477fa792ce7b4729058e.webp",
    url: "https://www.jrtelephone.com/water-resistant-industrial-telephone-with"
  }
];

export default function JrEmergencyPhones() {
  return (
    <>
      <SEOHead
        title="J&R Acil Durum Telefonları | Acil Durum Haberleşme Çözümleri"
        description="Tünel telsiz hatlarını tamamlayan J&R acil durum haberleşme telefonlarıyla tünel, raylı sistem, metro, endüstriyel tesis ve otoparklarda kesintisiz afet haberleşme altyapısı kurun."
        canonical="/jr-acil-durum-telefonlari"
        keywords="J&R acil durum telefonu, acil durum haberleşme, afet haberleşme, tünel telsiz, J&R telephone, endüstriyel telefon, IP67 telefon, ATEX telefon, acil durum iletişim, tünel telefon, metro telefon, istasyon telefon, peron telefon, otopark telefon, IP telefon, analog telefon, su geçirmez telefon, darbe dayanıklı telefon, acil kaçış telefonu, güvenlik telefonu, SIP telefon, VoIP telefon, endüstriyel interkom, J&R acil durum, raylı sistem telefon"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "J&R Acil Durum Telefonları", url: "https://www.biemelektronik.com/jr-acil-durum-telefonlari" },
        ]}
      />
      <PageHero
        title="J&R Acil Durum Telefonları"
        subtitle="Tünel, raylı sistem, endüstriyel tesis, otopark, kampüs, liman ve güvenlik uygulamaları için dayanıklı ve güvenilir acil durum iletişim çözümleri."
        image={railImg}
        buttons={[{ label: "Acil Durum Telefonu İçin Teklif Alın", to: "/iletisim" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader tag="KULLANIM ALANLARI" title="Nerelerde Kullanılır?" centered={false} />
              <div className="space-y-2">
                {usageAreas.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader tag="ÇÖZÜM KAPSAMI" title="Çözüm Kapsamı" centered={false} />
              <div className="space-y-2">
                {scope.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="GENEL MODELLER" title="J&R Acil Durum Telefonu Modelleri" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model, i) => (
              <div key={i} className="flex flex-col rounded-lg border border-border/40 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all overflow-hidden group">
                {model.image && (
                  <div className="h-40 flex items-center justify-center bg-white/5 p-4">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-4 flex items-start gap-3 flex-grow">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">{model.name}</span>
                </div>
                {model.url && (
                  <div className="px-4 pb-4">
                    <a href={model.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 font-semibold">
                      Ayrıntılar →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Projeniz için uygun acil durum telefonu çözümünü birlikte belirleyelim." />
    </>
  );
}
