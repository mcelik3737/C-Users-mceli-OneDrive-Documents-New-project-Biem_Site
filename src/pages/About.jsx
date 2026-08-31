import React from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Settings, Award, Antenna, Layers, Target, HeartPulse, Eye } from "lucide-react";

const expertise = [
  "Telsiz haberleşme sistemleri",
  "Hytera DMR, PoC, LTE ve dispatcher çözümleri",
  "Raylı sistem haberleşme altyapıları",
  "Tünel telsiz ve FM radyo sistemleri",
  "DAS / RF kapsama çözümleri",
  "RF Repeater / BDA sistemleri",
  "Leaky feeder haberleşme çözümleri",
  "Maden ve tünel haberleşmesi",
  "J&R acil durum telefonları",
  "CCTV, access control ve anons sistemleri",
  "IP santral ve network altyapıları",
  "Kurulum, devreye alma ve periyodik bakım",
];

const values = [
  { icon: Settings, title: "Mühendislik Disiplini" },
  { icon: Award, title: "Güvenilirlik" },
  { icon: Antenna, title: "Teknik Doğruluk" },
  { icon: Layers, title: "Saha Tecrübesi" },
  { icon: Target, title: "Çözüm Odaklılık" },
  { icon: HeartPulse, title: "Uzun Vadeli İş Ortaklığı" },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="Hakkımızda"
        description="BİEM Teknoloji Elektronik; telsiz haberleşme, tünel haberleşme, acil durum haberleşme ve DAS/RF kapsama çözümlerinde mühendislik odaklı hizmet sunan İstanbul Ataşehir merkezli teknoloji firmasıdır."
        canonical="/hakkimizda"
        keywords="BİEM Teknoloji Elektronik, hakkımızda, mühendislik, haberleşme sistemleri, RF kapsama, güvenlik altyapısı, telsiz haberleşme, raylı sistem, DAS, leaky feeder, RF repeater, BDA, maden tünel haberleşme, J&R telefon, CCTV, access control, anons sistemi, IP santral, network altyapısı, İstanbul Ataşehir"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Hakkımızda", url: "https://www.biemelektronik.com/hakkimizda" },
        ]}
      />
      <PageHero
        title="BİEM Teknoloji Elektronik Hakkında"
        subtitle="Haberleşme, RF kapsama, güvenlik ve saha altyapı sistemlerinde mühendislik odaklı çözümler sunuyoruz."
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader tag="HAKKIMIZDA" title="Mühendislik Odaklı Teknoloji Firması" centered={false} />
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  BİEM Teknoloji Elektronik Sanayi ve Ticaret Limited Şirketi, haberleşme, RF kapsama, güvenlik ve saha altyapı sistemleri alanlarında proje bazlı çözümler sunan mühendislik odaklı bir teknoloji firmasıdır.
                </p>
                <p>
                  Her projeyi yalnızca ürün tedariği olarak değil, sahaya özel bir mühendislik süreci olarak değerlendiriyoruz. Projeye başlamadan önce ihtiyaçları analiz eder, saha koşullarını inceler, doğru sistem mimarisini oluşturur ve uygulanabilir, sürdürülebilir çözümler geliştiririz.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4">UZMANLIK ALANLARIMIZ</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-border/50 bg-card/50">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Misyonumuz</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kritik haberleşme ve güvenlik altyapılarında; doğru mühendislik, kaliteli ürün, güvenilir uygulama ve sürdürülebilir teknik destek anlayışıyla müşterilerimize yüksek katma değerli çözümler sunmak.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-border/50 bg-card/50">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Vizyonumuz</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Telsiz haberleşme, raylı sistem teknolojileri ve DAS/RF kapsama çözümlerinde Türkiye'de güvenilir, yenilikçi ve teknik uzmanlığıyla tercih edilen çözüm ortaklarından biri olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="DEĞERLERİMİZ" title="Kurumsal Değerlerimiz" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{v.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Projeniz için doğru teknik çözümü birlikte planlayalım."
        subtitle="BİEM mühendislik ekibiyle iletişime geçin."
      />
    </>
  );
}
