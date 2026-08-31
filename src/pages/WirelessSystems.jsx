import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import GifModal from "@/components/shared/GifModal";
import { Radio, Repeat, Monitor, Smartphone, ShieldAlert, ArrowRight, Volume2, Camera } from "lucide-react";

const wirelessImg = "/biem-dosyalar/images/0a7fe552c_generated_82fab6dc.png";
const POC_GIF = "/biem-dosyalar/images/110899aec_p60_1.gif";

const solutions = [
  { icon: Radio, title: "DMR Telsiz Sistemleri", text: "El telsizi, araç telsizi, sabit telsiz, repeater ve IP bağlantılı sistemlerle farklı ölçeklerde DMR haberleşme altyapıları kuruyoruz.", link: "/hytera-telsiz-urunleri?group=DMR+El+Telsizleri" },
  { icon: Radio, title: "Hytera Telsiz Çözümleri", text: "Hytera ürün ailesiyle işletmelerin ve saha ekiplerinin ihtiyacına uygun DMR, PoC, LTE, dispatcher ve aksesuar çözümleri sunuyoruz.", link: "/hytera-telsiz-urunleri" },
  { icon: Repeat, title: "Repeater ve Multi-Site Sistemler", text: "Geniş alan haberleşmesi için repeater, anten, RF kablolama, IP bağlantı ve çok lokasyonlu telsiz haberleşme sistemleri projelendiriyoruz.", link: "/hytera-telsiz-urunleri?group=DMR+Sistem" },
  { icon: Monitor, title: "Dispatcher ve Kontrol Merkezi", text: "Çağrı yönetimi, ses kaydı, kullanıcı takibi, acil durum çağrıları, grup yönetimi ve operasyon kontrolü için dispatcher çözümleri.", link: "/hytera-telsiz-urunleri" },
  { icon: Smartphone, title: "PoC / LTE Bas-Konuş Sistemleri", text: "GSM/LTE altyapısı üzerinden çalışan geniş alan bas-konuş çözümleriyle şehirler arası ekip iletişimini kolaylaştırıyoruz.", link: "/hytera-telsiz-urunleri?group=PoC+Radio", gif: POC_GIF },
  { icon: ShieldAlert, title: "ATEX ve Endüstriyel Telsizler", text: "Patlayıcı ortam, maden, petrol-gaz, enerji ve ağır sanayi uygulamaları için endüstriyel ve ATEX sınıfı telsiz çözümleri.", link: "/hytera-telsiz-urunleri?group=Ex%27li" },
  { icon: Volume2, title: "Analog Telsizler", text: "Sağlam ve güvenilir analog VHF/UHF el telsiz çözümleriyle basit ve etkili haberleşme altyapıları kuruyoruz.", link: "/hytera-telsiz-urunleri?group=Analog+El+Telsizleri" },
  { icon: Camera, title: "Vücut Kameraları", text: "Güvenlik ve operasyonel verimlilik için tasarlanmış profesyonel vücut kamerası çözümleriyle saha ekiplerini güçlendiriyoruz.", link: "/hytera-telsiz-urunleri?group=Vücut+Kameraları" },
];

const usageAreas = [
  "Enerji tesisleri", "Fabrikalar ve endüstriyel sahalar", "Maden sahaları",
  "Raylı sistemler", "Güvenlik ekipleri", "Lojistik ve depo sahaları",
  "İnşaat ve şantiye alanları", "Kamu kurumları", "Belediye ve saha operasyonları",
];

export default function WirelessSystems() {
  const [gifOpen, setGifOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Telsiz Haberleşme Sistemleri"
        description="DMR, TETRA, PoC, LTE bas-konuş, repeater, multi-site ve dispatcher çözümleriyle saha ekipleri için güvenilir telsiz haberleşme altyapıları kuruyoruz."
        canonical="/telsiz-haberlesme-sistemleri"
        keywords="telsiz haberleşme, DMR telsiz, TETRA telsiz, TETRAPOL, PoC bas-konuş, LTE bas-konuş, repeater, multi-site telsiz, dispatcher, Hytera telsiz, Motorola telsiz, Motorola Solutions, MOTOTRBO, Kenwood telsiz, Icom telsiz, Sepura TETRA, Airbus TETRA, Damm TETRA, Cobham TETRA, EF Johnson, Tait telsiz, Simoco telsiz, Entel telsiz, Barrett telsiz, Codan telsiz, el telsizi, araç telsizi, sabit telsiz, ATEX telsiz, exproof telsiz, analog telsiz, vücut kamerası, enerji tesisi telsiz, fabrika telsiz, maden telsiz, tünel telsiz, raylı sistem telsiz, acil durum haberleşme, afet haberleşme, güvenlik telsiz, lojistik telsiz, inşaat telsiz, belediye telsiz, saha haberleşme, telsiz fiyat, telsiz sistemi kurulumu İstanbul"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Telsiz Haberleşme Sistemleri", url: "https://www.biemelektronik.com/telsiz-haberlesme-sistemleri" },
        ]}
      />
      <PageHero
        title="Telsiz Haberleşme Sistemleri"
        subtitle="DMR, TETRA, PoC, LTE bas-konuş, repeater, multi-site ve dispatcher çözümleriyle saha ekipleri için güvenilir haberleşme altyapıları kuruyoruz."
        image={wirelessImg}
        buttons={[
          { label: "Teklif Alın", to: "/iletisim" },
          { label: "Hytera Çözümlerini İnceleyin", to: "/hytera-telsiz-urunleri", variant: "outline" },
        ]}
      />

      {/* Solutions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="ÇÖZÜMLER" title="Telsiz Haberleşme Çözüm Alanlarımız" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const isGif = !!s.gif;
              return (
                <Link
                   to={s.link || "#"}
                   onClick={isGif ? (e) => { e.preventDefault(); setGifOpen(true); } : undefined}
                   className={`p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-colors group ${isGif || s.link ? "cursor-pointer hover:border-primary/40 hover:bg-primary/5" : ""}`}
                 >
                   <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                     <Icon className="w-5 h-5 text-primary" />
                   </div>
                   <div className="flex items-start justify-between gap-2 mb-2">
                     <h3 className="text-base font-semibold text-foreground flex-1">
                       {s.title}
                     </h3>
                     {(isGif || s.link) && (
                       <ArrowRight className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                     )}
                   </div>
                   {isGif && (
                     <span className="inline-block text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded mb-2">
                       Demo
                     </span>
                   )}
                   <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                 </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usage areas */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="KULLANIM ALANLARI" title="Telsiz Haberleşme Kullanım Alanları" />
          <div className="flex flex-wrap justify-center gap-3">
            {usageAreas.map((area, i) => (
              <span key={i} className="px-4 py-2.5 text-sm text-muted-foreground border border-border/50 bg-card/50 rounded-lg hover:border-primary/20 hover:text-foreground transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO rich text block */}
      <section className="py-10 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-base font-semibold text-foreground mb-3">Telsiz Haberleşme Markaları ve Çözümler</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            BİEM Teknoloji Elektronik; <strong className="text-foreground/80">Hytera</strong> (DMR, TETRA, PoC), <strong className="text-foreground/80">Motorola Solutions</strong> (MOTOTRBO, APX), <strong className="text-foreground/80">Kenwood</strong>, <strong className="text-foreground/80">Icom</strong>, <strong className="text-foreground/80">Sepura</strong>, <strong className="text-foreground/80">Airbus</strong>, <strong className="text-foreground/80">Damm</strong>, <strong className="text-foreground/80">Tait</strong>, <strong className="text-foreground/80">Simoco</strong>, <strong className="text-foreground/80">Entel</strong>, <strong className="text-foreground/80">EF Johnson</strong> ve <strong className="text-foreground/80">Cobham</strong> marka telsiz ürünleri ve sistemleri konusunda teknik destek, proje ve kurulum hizmeti sunar.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            DMR, TETRA, TETRAPOL, PoC/LTE bas-konuş, analog VHF/UHF, exproof/ATEX telsiz ve vücut kamerası çözümlerinin yanı sıra <strong className="text-foreground/80">acil durum haberleşme</strong> ve <strong className="text-foreground/80">afet haberleşme</strong> sistemleri de kapsamımızdadır.
          </p>
        </div>
      </section>

      <CTASection
        title="Sahanız için doğru telsiz haberleşme sistemini birlikte planlayalım."
        subtitle="Kullanıcı sayısı, kapsama alanı ve operasyon ihtiyacınıza göre en uygun çözümü oluşturalım."
      />

      <GifModal
        open={gifOpen}
        onClose={() => setGifOpen(false)}
        src={POC_GIF}
        title="PoC / LTE Bas-Konuş Sistemleri"
      />
    </>
  );
}
