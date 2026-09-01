import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  Factory,
  Map,
  Mountain,
  Radio,
  Shield,
  Signal,
  TrainFront,
  Wifi,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";

const heroImage = "/assets/images/b89abb303_generated_fce2d3bb.png";

const solutionFamilies = [
  {
    icon: Radio,
    title: "RF Repeater / BDA",
    text: "TETRA, DMR, UHF/VHF ve kritik haberleşme frekanslarında off-air veya kontrollü RF kaynağını servis alanına taşır.",
    path: "/rf-repeater-bda-urunleri",
    tag: "AKTİF RF",
  },
  {
    icon: Cable,
    title: "Leaky Feeder",
    text: "Tünel ve yeraltı hatlarında koaksiyel kabloyu dağıtılmış anten gibi kullanarak hat boyunca kontrollü RF yayılımı sağlar.",
    path: "/leaky-feeder-sistemleri",
    tag: "DAĞITILMIŞ RF",
  },
  {
    icon: Mountain,
    title: "Maden / Tünel Haberleşmesi",
    text: "RF kapsama, telsiz altyapısı, acil telefon ve yeraltı haberleşme bileşenlerini tek saha mimarisinde birleştirir.",
    path: "/maden-tunel-haberlesmesi",
    tag: "YERALTI",
  },
  {
    icon: TrainFront,
    title: "Raylı Sistem RF Kapsama",
    text: "Metro, demiryolu, istasyon, depo ve tünellerde telsiz, public safety ve operasyon haberleşmesi için kapsama altyapısı.",
    path: "/rayli-sistem-cozumleri",
    tag: "RAYLI SİSTEM",
  },
  {
    icon: Shield,
    title: "Public Safety DAS",
    text: "Polis, itfaiye ve acil durum ekiplerinin bina içi ve kapalı alan kritik haberleşmesini destekleyen RF dağıtım çözümleri.",
    path: "/iletisim",
    tag: "ACİL DURUM",
  },
  {
    icon: Wifi,
    title: "Indoor RF / Wi-Fi / Hücresel",
    text: "Bina, kampüs, otopark ve endüstriyel alanlarda RF ölçümü, anten yerleşimi ve dağıtım topolojisi planlaması.",
    path: "/iletisim",
    tag: "INDOOR",
  },
];

const workflow = [
  {
    no: "01",
    title: "Saha verisi ve hedef kapsama",
    text: "Frekans bandı, kullanıcı profili, mevcut RF seviyesi, mimari/topografya ve hedef hizmet seviyesi tanımlanır.",
  },
  {
    no: "02",
    title: "Propagasyon ve RF link budget",
    text: "Anten kazançları, feeder kayıpları, pasif eleman insertion loss değerleri ve repeater güç seviyeleri hesaplanır.",
  },
  {
    no: "03",
    title: "Sistem mimarisi",
    text: "Off-air BDA, fiber repeater, leaky feeder veya anten dağıtım yapısı; saha şartlarına göre birlikte veya ayrı seçilir.",
  },
  {
    no: "04",
    title: "Saha testi ve optimizasyon",
    text: "Kurulum sonrası RSSI/field strength, uplink dengesi, izolasyon ve kapsama boşlukları ölçülerek sistem optimize edilir.",
  },
];

const coverageGallery = [
  { src: "/assets/images/a00ed39ea_ento-Kopya.png", label: "Outdoor RF kapsama / şehir propagasyon analizi" },
  { src: "/assets/images/b980529e5_8e3b7e13-1bd3-460a-a5ea-b31c20210394.png", label: "Indoor DAS / bina içi kapsama planı" },
  { src: "/assets/images/ae6efcdbd_kapsama.png", label: "Şehir içi RF kapsama analizi" },
  { src: "/assets/images/4691218c2_U26_KAPSAMA.png", label: "Outdoor RF propagasyon ve saha analizi" },
  { src: "/assets/images/9f07ca3fd_kapsama.png", label: "Endüstriyel saha kapsama haritası" },
];

const sectors = [
  { icon: Mountain, title: "Tünel ve Maden", text: "Leaky feeder, BDA, repeater ve yeraltı RF dağıtımı" },
  { icon: TrainFront, title: "Metro ve Demiryolu", text: "Tünel, istasyon, depo ve işletme sahası kapsaması" },
  { icon: Building2, title: "Bina ve Otopark", text: "Indoor RF, public safety ve kapalı alan kapsama" },
  { icon: Factory, title: "Endüstri ve Enerji", text: "Fabrika, RES/GES, liman ve büyük saha haberleşmesi" },
];

export default function DasRfSolutions() {
  return (
    <>
      <SEOHead
        title="DAS ve RF Kapsama Çözümleri | BDA, Repeater, Leaky Feeder"
        description="BİEM; tünel, maden, metro, bina ve endüstriyel tesislerde RF kapsama analizi, DAS, BDA, fiber repeater, leaky feeder ve anten dağıtım sistemlerini mühendislik tabanlı olarak tasarlar ve uygular."
        canonical="/das-rf-kapsama-cozumleri"
        keywords="DAS, RF kapsama, RF coverage, BDA, RF repeater, fiber repeater, off-air BDA, leaky feeder, public safety DAS, tünel RF kapsama, maden haberleşme, indoor RF, RF propagasyon, RF link budget"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "DAS / RF Kapsama", url: "https://www.biemelektronik.com/das-rf-kapsama-cozumleri" },
        ]}
      />
      <PageHero
        title="DAS / RF Kapsama Mühendisliği"
        subtitle="Tünel, maden, metro, bina ve endüstriyel sahalarda kapsama sorununu yalnızca cihaz seçerek değil; RF ölçümü, propagasyon, link budget ve saha optimizasyonuyla çözüyoruz."
        image={heroImage}
        buttons={[
          { label: "RF Keşif / Teklif Talebi", to: "/iletisim" },
          { label: "RF Repeater / BDA", to: "/rf-repeater-bda-urunleri", variant: "outline" },
        ]}
      />

      <section className="py-14 lg:py-20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-mono font-semibold tracking-[0.18em] text-primary uppercase">KAPSAMA TASARIMI</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 mb-5">Önce RF problemi tanımlarız, sonra sistemi seçeriz.</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                Aynı saha için repeater, fiber dağıtım veya leaky feeder çözümlerinin yatırım maliyeti ve saha performansı farklı olabilir. Doğru mimari; frekans, mesafe, kablo güzergâhı, mevcut sinyal ve hedef servis seviyesi birlikte değerlendirildiğinde ortaya çıkar.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-primary/15 bg-primary/[0.04]">
                <Map className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Outdoor ve indoor kapsama analizlerini, saha keşfi ve kurulum sonrası ölçümlerle birlikte değerlendiriyoruz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflow.map((step) => (
                <article key={step.no} className="relative p-5 lg:p-6 rounded-2xl border border-border/50 bg-card/40 hover:border-primary/30 transition-colors">
                  <span className="text-3xl font-bold text-primary/10 absolute right-5 top-3">{step.no}</span>
                  <div className="w-8 h-1 rounded-full bg-primary mb-5" />
                  <h3 className="font-semibold text-foreground mb-2 pr-10">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="ÇÖZÜM AİLELERİ"
            title="Sahaya göre seçilen RF kapsama mimarileri"
            subtitle="Aktif RF, pasif dağıtım ve saha haberleşme bileşenlerini tek bir kapsama planı altında birleştiriyoruz."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionFamilies.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.path}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-primary/60">{solution.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{solution.text}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                    İncele <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-xs font-mono font-semibold tracking-[0.18em] text-primary uppercase">PROJEYE ÖZEL RF</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 mb-5">Hazır ürün ile proje özel üretimi aynı sistemde değerlendirebiliriz.</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Frekans planı, duplex aralığı, taşıyıcı sayısı, gerekli çıkış gücü veya mekanik şartlar standart ürünle karşılanmadığında proje özel RF repeater/BDA ve filtreleme çözümleri değerlendirilebilir.
              </p>
              <div className="space-y-3">
                {[
                  "Frekans / bant planına göre ürün seçimi",
                  "Donor-servis anten izolasyonu değerlendirmesi",
                  "Kablo ve pasif RF kayıplarının hesaplanması",
                  "Uplink / downlink güç dengesinin planlanması",
                  "Uzaktan alarm ve izleme ihtiyacının tanımlanması",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/rf-repeater-bda-urunleri" className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-primary hover:gap-3 transition-all">
                RF repeater / BDA teknik sayfası <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/30 p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-3">
                {[
                  [Signal, "Aktif RF", "Repeater / BDA"],
                  [Cable, "Dağıtım", "Leaky / Koaksiyel"],
                  [Radio, "Servis", "DMR / TETRA / RF"],
                  [Shield, "Kritik", "Public Safety"],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="min-h-36 rounded-xl border border-primary/10 bg-primary/[0.04] p-4 flex flex-col justify-between">
                    <Icon className="w-5 h-5 text-primary" />
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-primary/60 mb-1">{label}</span>
                      <strong className="text-sm text-foreground">{value}</strong>
                    </div>
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
            tag="RF KAPSAMA PLANLAMA"
            title="Propagasyon ve kapsama analizi örnekleri"
            subtitle="Saha tasarım kararlarını yalnızca tahmine değil; arazi, mimari, frekans ve anten parametreleriyle oluşturulan RF analizlerine dayandırıyoruz."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverageGallery.map((item, index) => (
              <figure
                key={item.src}
                className={`group rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 transition-colors ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`bg-black/25 p-3 flex items-center justify-center ${index === 0 ? "h-72" : "h-60"}`}>
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <figcaption className="px-4 py-3 border-t border-border/30 flex items-center gap-2 text-xs text-muted-foreground">
                  <Map className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="UYGULAMA ALANLARI"
            title="Kritik haberleşmenin kapsama gerektirdiği sahalar"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.title} className="p-5 rounded-2xl border border-border/50 bg-card/30">
                  <Icon className="w-5 h-5 text-primary mb-5" />
                  <h3 className="font-semibold text-foreground mb-2">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sector.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Kapsama problemini saha verisiyle birlikte çözelim."
        subtitle="Frekans bandı, saha planı, mevcut RF seviyesi ve hedef kullanım senaryosunu paylaşın; uygun DAS / BDA / repeater / leaky feeder mimarisini belirleyelim."
      />
    </>
  );
}
