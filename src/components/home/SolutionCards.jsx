import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, TrainFront, Wifi } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const solutions = [
  {
    icon: Radio,
    eyebrow: "KRİTİK SAHA HABERLEŞMESİ",
    title: "Telsiz Haberleşme Sistemleri",
    text: "DMR, TETRA ve PoC teknolojilerini saha ihtiyacına göre repeater, multi-site, dispatcher, kayıt ve kullanıcı yönetimi çözümleriyle bütünleştiriyoruz.",
    items: ["DMR / TETRA / PoC", "Repeater & multi-site", "Dispatcher & ses kayıt", "ATEX / Exproof terminal"],
    path: "/telsiz-haberlesme-sistemleri",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/0a7fe552c_generated_82fab6dc.png",
  },
  {
    icon: TrainFront,
    eyebrow: "METRO / DEMİRYOLU / TÜNEL",
    title: "Raylı Sistem Haberleşmesi",
    text: "İstasyon, depo, hat ve tünel sahalarında kritik haberleşme, acil iletişim ve yardımcı altyapıları tek sistem mimarisi içinde ele alıyoruz.",
    items: ["Tünel RF kapsama", "TETRA / DMR entegrasyonu", "Acil durum telefonları", "Anons / network altyapısı"],
    path: "/rayli-sistem-cozumleri",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png",
  },
  {
    icon: Wifi,
    eyebrow: "RF COVERAGE ENGINEERING",
    title: "DAS / RF Kapsama Çözümleri",
    text: "Bina, tünel, maden ve büyük endüstriyel sahalarda aktif ve pasif RF mimarisini kapsama hedeflerine göre projelendiriyoruz.",
    items: ["Fiber / Off-Air Repeater", "BDA & Public Safety DAS", "Leaky Feeder", "Pasif RF & anten sistemleri"],
    path: "/das-rf-kapsama-cozumleri",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="ANA ÇÖZÜM ALANLARI"
          title="Saha haberleşmesini ürün listesi değil, sistem olarak tasarlıyoruz."
          subtitle="Telsiz, raylı sistem ve RF kapsama disiplinlerini aynı proje yaklaşımı içinde birleştiriyoruz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {solutions.map(({ icon: Icon, eyebrow, title, text, items, path, image }) => (
            <Link key={title} to={path} className="group relative min-h-[520px] rounded-2xl overflow-hidden border border-border/50 bg-card block hover:border-primary/30 transition-colors">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-[46%] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 top-[38%] bg-card" />

              <div className="relative h-full flex flex-col px-6 pt-[205px] sm:pt-[225px] lg:pt-[230px] pb-6">
                <div className="w-11 h-11 rounded-lg border border-primary/20 bg-background/90 backdrop-blur flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[9px] font-mono font-semibold tracking-[0.18em] text-primary uppercase mb-2">{eyebrow}</p>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-6 mb-5">{text}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/65">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Çözümü inceleyin <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
