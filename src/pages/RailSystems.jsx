import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import TunnelRadioSection from "@/components/rail/TunnelRadioSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, Repeat, Music, Megaphone, Camera, Lock, Phone, Network } from "lucide-react";

const railImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png";

const solutions = [
  { icon: Radio, title: "Tünel Telsiz Haberleşme Sistemleri", text: "Tünel içinde DMR, TETRA, VHF, UHF ve özel frekans haberleşmesi için RF repeater, leaky feeder, anten ve pasif RF dağıtım çözümleri.", tab: null },
  { icon: Repeat, title: "RF Repeater / BDA Sistemleri", text: "Tünel, istasyon ve kapalı alanlarda telsiz sinyalinin güçlendirilmesi ve dağıtılması için RF repeater/BDA sistemleri.", tab: null },
  { icon: Music, title: "Tünel Radyo / FM Yayın", text: "Tünel içi FM radyo yayını ve acil anons entegrasyonu için radyo yayın altyapıları.", tab: "tunnel-radio" },
  { icon: Megaphone, title: "Anons ve YBS Sistemleri", text: "İstasyon, peron, tünel ve teknik alanlar için merkezi anons, acil anons ve yolcu bilgilendirme sistemleri.", tab: null },
  { icon: Camera, title: "CCTV ve Güvenlik Sistemleri", text: "Kamera, kayıt, izleme merkezi ve güvenlik entegrasyonlarıyla raylı sistem sahalarında izleme altyapısı.", tab: null },
  { icon: Lock, title: "Access Control", text: "Teknik hacim, istasyon, depo ve kritik alanlarda kartlı geçiş, kapı kontrol ve erişim yönetimi çözümleri.", tab: null },
  { icon: Phone, title: "Acil Durum Telefonları", text: "J&R acil durum telefonlarıyla tünel, istasyon, peron, bakım alanı ve acil kaçış noktalarında güvenilir iletişim.", tab: null },
  { icon: Network, title: "IP Telefon ve Network", text: "Raylı sistem projelerinde IP santral, saha telefonları, switch, fiber optik altyapı ve ağ entegrasyonu.", tab: null },
];

export default function RailSystems() {
  const [activeTab, setActiveTab] = useState(null);

  const handleCardClick = (tab) => {
    if (!tab) return;
    setActiveTab(prev => prev === tab ? null : tab);
  };

  return (
    <>
      <SEOHead
        title="Raylı Sistem Çözümleri | Tünel Telsiz ve Acil Durum Haberleşme"
        description="Metro, tramvay, demiryolu ve tünel projeleri için tünel telsiz, acil durum haberleşme ve afet haberleşme altyapıları: RF repeater, BDA, leaky feeder, acil durum telefonu, anons ve CCTV çözümleri."
        canonical="/rayli-sistem-cozumleri"
        keywords="raylı sistem haberleşme, metro haberleşme, tramvay haberleşme, demiryolu haberleşme, tünel telsiz, tünel telsiz sistemi, tünel haberleşme, acil durum haberleşme, afet haberleşme, acil durum telsiz, RF repeater, BDA, leaky feeder, tünel FM radyo, FM radyo yayını, acil anons sistemi, anons sistemi, yolcu bilgilendirme, CCTV, güvenlik kamera, access control, erişim kontrol, acil durum telefonu, J&R telefon, IP telefon, network altyapısı, metro telsiz, metro anons, demiryolu telsiz, TETRA raylı sistem, DMR raylı sistem, TETRAPOL metro, Airbus TETRA metro, Sepura TETRA raylı, demiryolu tünel kapsama, metro tünel RF sistemi, istasyon haberleşme, peron anons sistemi"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Raylı Sistem Çözümleri", url: "https://www.biemelektronik.com/rayli-sistem-cozumleri" },
        ]}
      />
      <PageHero
        title="Raylı Sistem Çözümleri"
        subtitle="Metro, tramvay, demiryolu, tünel, istasyon ve depo sahaları için haberleşme, güvenlik, acil durum ve yolcu bilgilendirme altyapılarına entegre çözümler sunuyoruz."
        image={railImg}
        buttons={[
          { label: "Raylı Sistem İçin Teklif Alın", to: "/iletisim" },
          { label: "Proje Danışmanlığı", to: "/iletisim", variant: "outline" },
        ]}
      />

      {/* Solutions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="ÇÖZÜMLER" title="Raylı Sistem Çözüm Alanlarımız" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const isActive = activeTab === s.tab;
              const isClickable = !!s.tab;
              return (
                <div
                  key={i}
                  onClick={() => handleCardClick(s.tab)}
                  className={`p-5 rounded-xl border transition-all group
                    ${isClickable ? "cursor-pointer" : "cursor-default"}
                    ${isActive
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border/50 bg-card/50 hover:border-primary/20"
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-3 transition-colors
                    ${isActive ? "bg-primary/20 border-primary/40" : "bg-primary/10 border-primary/20 group-hover:bg-primary/20"}`}>
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                  {isClickable && (
                    <span className="inline-block mt-2 text-[10px] font-mono text-primary/70 tracking-wide">
                      {isActive ? "Gizle ↑" : "Detayları gör →"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expandable: Tunnel Radio */}
      {activeTab === "tunnel-radio" && <TunnelRadioSection />}

      {/* J&R highlight */}
      <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 inline-block">J&R ACİL DURUM TELEFONLARI</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Raylı Sistemler İçin Dayanıklı Acil Durum Telefonları</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            Tünel, istasyon, peron, teknik hacim ve acil kaçış noktalarında kullanılmak üzere J&R acil durum telefonlarıyla güvenilir iletişim çözümleri sunuyoruz.
          </p>
          <Link to="/jr-acil-durum-telefonlari">
            <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 font-medium text-sm px-6">
              J&R Acil Durum Telefonlarını İnceleyin
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection
        title="Raylı sistem projenizin haberleşme ve güvenlik altyapısını birlikte planlayalım."
        subtitle="Metro, tramvay, demiryolu veya tünel projeniz için teknik çözüm ve teklif alın."
      />
    </>
  );
}
