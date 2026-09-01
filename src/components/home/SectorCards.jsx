import React from "react";
import { Link } from "react-router-dom";
import { Factory, HardHat, Mountain, Shield, TrainFront, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const sectors = [
  {
    icon: TrainFront,
    title: "Raylı Sistemler",
    text: "Metro, tramvay, demiryolu, istasyon ve tünel projelerinde haberleşme ve güvenlik altyapıları.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png",
    path: "/rayli-sistem-cozumleri",
  },
  {
    icon: Mountain,
    title: "Tüneller",
    text: "Karayolu ve demiryolu tünellerinde RF kapsama, telsiz, FM yayın, repeater/BDA ve leaky feeder sistemleri.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png",
    path: "/maden-tunel-haberlesmesi",
  },
  {
    icon: HardHat,
    title: "Maden Sahaları",
    text: "Yeraltı ve açık madenlerde leaky feeder, telsiz haberleşme, acil telefon ve RF altyapıları.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png",
    path: "/maden-tunel-haberlesmesi",
  },
  {
    icon: Zap,
    title: "Enerji Tesisleri",
    text: "RES, GES, HES ve santral sahalarında telsiz haberleşme, repeater ve merkezi yönetim çözümleri.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/128dd205e_generated_24a41ca8.png",
    path: "/telsiz-haberlesme-sistemleri",
  },
  {
    icon: Factory,
    title: "Endüstriyel Tesisler",
    text: "Fabrika, liman, lojistik ve üretim sahalarında profesyonel telsiz, RF kapsama ve saha haberleşmesi.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/58386d917_generated_939516fe.png",
    path: "/telsiz-haberlesme-sistemleri",
  },
  {
    icon: Shield,
    title: "Kamu Güvenliği",
    text: "Acil durum ve kamu güvenliği ekipleri için kritik haberleşme, TETRA ve public safety DAS çözümleri.",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/3423ab2ec_generated_f46b8aeb.png",
    path: "/das-rf-kapsama-cozumleri",
  },
];

export default function SectorCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="SEKTÖRLER"
          title="Zorlu saha koşullarında çalışan haberleşme altyapıları"
          subtitle="Farklı işletme senaryolarına sahip sektörlerde kritik iletişim ve RF kapsama ihtiyaçlarını proje bazında ele alıyoruz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {sectors.map(({ icon: Icon, title, text, image, path }) => (
            <Link key={title} to={path} className="group relative h-60 rounded-xl overflow-hidden border border-border/50 bg-card">
              <img
                src={image}
                alt={`${title} haberleşme çözümleri`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-md border border-primary/20 bg-background/70 backdrop-blur flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-5">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
